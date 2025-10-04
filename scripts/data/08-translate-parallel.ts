import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'
import {
  splitHtml,
  reassembleHtml,
  analyzeHtmlComplexity,
  type HtmlChunk
} from './lib/html-splitter'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const anthropicKey = process.env.ANTHROPIC_API_KEY!

if (!supabaseUrl || !supabaseKey || !anthropicKey) {
  console.error('❌ 환경변수가 설정되지 않았습니다.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)
const anthropic = new Anthropic({ apiKey: anthropicKey })

const guidelinesPath = path.join(process.cwd(), 'docs/TRANSLATION-GUIDELINES.md')
const TRANSLATION_GUIDELINES = fs.readFileSync(guidelinesPath, 'utf-8')

interface Document {
  id: string
  csv_id: number
  title_en: string
  content_html_en: string
}

interface TranslationResult {
  success: boolean
  csv_id: number
  docId: string
  translatedHtml?: string
  error?: string
  stats?: {
    originalLength: number
    translatedLength: number
    lengthRatio: number
    imageCount: {
      original: number
      translated: number
    }
    chunksUsed: number
  }
}

// 병렬 처리 설정
const PARALLEL_LIMIT = 3  // 동시에 처리할 문서 수 (API rate limit 고려)
const RETRY_LIMIT = 2     // 실패 시 재시도 횟수

async function translateChunk(
  html: string,
  title: string,
  chunkIndex: number,
  totalChunks: number
): Promise<string> {
  const chunkInfo = totalChunks > 1
    ? `\n\n**참고**: 이것은 전체 문서의 ${totalChunks}개 부분 중 ${chunkIndex + 1}번째 부분입니다.`
    : ''

  const prompt = `# 작업: Freshworks 기술 문서 HTML 번역

## 번역 가이드라인
${TRANSLATION_GUIDELINES}

## 번역할 문서
**제목**: ${title}${chunkInfo}

**HTML 콘텐츠**:
${html}

## 지시사항
1. **HTML 구조를 100% 보존**하면서 텍스트만 한국어로 번역하세요
2. 모든 태그, 속성, 이미지, 링크를 원본 그대로 유지하세요
3. 위 가이드라인의 용어 번역 표준을 따르세요
4. 자연스러운 한국어로 번역하세요
5. 번역된 HTML만 출력하고, 설명이나 주석은 추가하지 마세요

**번역된 HTML**:`

  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 8000,
    temperature: 0.3,
    messages: [{
      role: 'user',
      content: prompt
    }]
  })

  const content = message.content[0]
  return content.type === 'text' ? content.text.trim() : ''
}

async function translateHtmlWithSplit(html: string, title: string): Promise<{ translatedHtml: string, stats: TranslationResult['stats'] }> {
  const complexity = analyzeHtmlComplexity(html)

  let translatedHtml: string

  if (complexity.strategy === 'single') {
    translatedHtml = await translateChunk(html, title, 0, 1)
  } else {
    const targetChunkSize = Math.ceil(html.length / complexity.recommendedChunks)
    const { chunks } = splitHtml(html, targetChunkSize)

    const translatedChunks: HtmlChunk[] = []
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i]
      const translated = await translateChunk(chunk.html, title, i, chunks.length)
      translatedChunks.push({
        ...chunk,
        html: translated
      })

      if (i < chunks.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    translatedHtml = reassembleHtml(translatedChunks)
  }

  const originalImgCount = (html.match(/<img/g) || []).length
  const translatedImgCount = (translatedHtml.match(/<img/g) || []).length
  const lengthRatio = translatedHtml.length / html.length

  if (originalImgCount !== translatedImgCount) {
    throw new Error(`이미지 태그 불일치 (원본: ${originalImgCount}, 번역: ${translatedImgCount})`)
  }

  if (lengthRatio < 0.5) {
    throw new Error(`번역 길이 부족 (${(lengthRatio * 100).toFixed(1)}%)`)
  }

  return {
    translatedHtml,
    stats: {
      originalLength: html.length,
      translatedLength: translatedHtml.length,
      lengthRatio,
      imageCount: {
        original: originalImgCount,
        translated: translatedImgCount
      },
      chunksUsed: complexity.recommendedChunks
    }
  }
}

async function translateDocument(doc: Document, retryCount: number = 0): Promise<TranslationResult> {
  try {
    const result = await translateHtmlWithSplit(doc.content_html_en, doc.title_en)

    return {
      success: true,
      csv_id: doc.csv_id,
      docId: doc.id,
      translatedHtml: result.translatedHtml,
      stats: result.stats
    }
  } catch (error: any) {
    if (retryCount < RETRY_LIMIT) {
      console.log(`  🔄 재시도 ${retryCount + 1}/${RETRY_LIMIT}...`)
      await new Promise(resolve => setTimeout(resolve, 3000))
      return translateDocument(doc, retryCount + 1)
    }

    return {
      success: false,
      csv_id: doc.csv_id,
      docId: doc.id,
      error: error.message
    }
  }
}

async function saveTranslation(docId: string, translatedHtml: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('documents')
      .update({ content_html_ko: translatedHtml })
      .eq('id', docId)

    return !error
  } catch (error) {
    return false
  }
}

async function processBatch(docs: Document[]): Promise<TranslationResult[]> {
  const results = await Promise.all(
    docs.map(doc => translateDocument(doc))
  )
  return results
}

async function main() {
  console.log('🚀 병렬 HTML 번역 파이프라인 시작...\n')
  console.log(`⚡ 병렬 처리: 최대 ${PARALLEL_LIMIT}건 동시 실행\n`)

  const { data: docs, error } = await supabase
    .from('documents')
    .select('id, csv_id, title_en, content_html_en, content_html_ko')
    .eq('product', 'freshservice')
    .not('title_ko', 'is', null)
    .order('csv_id')
    .limit(50)

  if (error) {
    console.error('❌ 문서 조회 실패:', error)
    process.exit(1)
  }

  const docsToTranslate = (docs || []).filter(doc =>
    !doc.content_html_ko || doc.content_html_ko === doc.content_html_en
  ) as Document[]

  if (docsToTranslate.length === 0) {
    console.log('✅ 번역할 문서가 없습니다.')
    return
  }

  console.log(`📊 총 ${docsToTranslate.length}건 HTML 번역 시작\n`)
  console.log(`📖 번역 가이드라인: docs/TRANSLATION-GUIDELINES.md\n`)

  let successCount = 0
  let errorCount = 0
  const errors: Array<{csv_id: number, error: string}> = []

  const startTime = Date.now()

  // 배치 단위로 처리
  for (let i = 0; i < docsToTranslate.length; i += PARALLEL_LIMIT) {
    const batch = docsToTranslate.slice(i, i + PARALLEL_LIMIT)
    const batchNum = Math.floor(i / PARALLEL_LIMIT) + 1
    const totalBatches = Math.ceil(docsToTranslate.length / PARALLEL_LIMIT)

    console.log(`\n📦 배치 ${batchNum}/${totalBatches} (${batch.length}건 병렬 처리 중...)`)

    batch.forEach((doc, idx) => {
      console.log(`  [${i + idx + 1}/${docsToTranslate.length}] [${doc.csv_id}] ${doc.title_en.substring(0, 40)}... (${doc.content_html_en.length.toLocaleString()}자)`)
    })

    const results = await processBatch(batch)

    // 결과 처리 및 저장
    for (let j = 0; j < results.length; j++) {
      const result = results[j]
      const doc = batch[j]

      if (result.success && result.stats && result.translatedHtml) {
        // DB 저장은 순차적으로 (동시성 이슈 방지)
        const saved = await saveTranslation(result.docId, result.translatedHtml)

        if (saved) {
          successCount++
          console.log(`  ✅ [${doc.csv_id}] 완료 (이미지: ${result.stats.imageCount.original}개, 길이: ${(result.stats.lengthRatio * 100).toFixed(1)}%, 청크: ${result.stats.chunksUsed}개)`)
        } else {
          errorCount++
          errors.push({ csv_id: doc.csv_id, error: '저장 실패' })
          console.log(`  ❌ [${doc.csv_id}] 저장 실패`)
        }
      } else {
        errorCount++
        errors.push({ csv_id: result.csv_id, error: result.error || '알 수 없는 오류' })
        console.log(`  ❌ [${doc.csv_id}] 실패: ${result.error}`)
      }
    }

    // 배치 간 딜레이
    if (i + PARALLEL_LIMIT < docsToTranslate.length) {
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  }

  const endTime = Date.now()
  const totalSeconds = Math.floor((endTime - startTime) / 1000)
  const avgSeconds = Math.floor(totalSeconds / docsToTranslate.length)

  console.log('\n\n============================================================')
  console.log('📊 병렬 번역 완료 통계:')
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`❌ 실패: ${errorCount}건`)
  console.log(`📊 성공률: ${((successCount / docsToTranslate.length) * 100).toFixed(1)}%`)
  console.log(`⏱️  총 소요 시간: ${Math.floor(totalSeconds / 60)}분 ${totalSeconds % 60}초`)
  console.log(`⚡ 평균 처리 시간: ${avgSeconds}초/건`)

  if (errors.length > 0) {
    console.log('\n실패한 문서:')
    errors.forEach(e => console.log(`  - csv_id ${e.csv_id}: ${e.error}`))
  }

  console.log('============================================================')
  console.log('\n🎉 병렬 번역 파이프라인 완료!')
}

main().catch(console.error)
