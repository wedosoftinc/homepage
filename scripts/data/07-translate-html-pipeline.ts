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
  console.error('필요: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ANTHROPIC_API_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)
const anthropic = new Anthropic({ apiKey: anthropicKey })

// 번역 가이드라인 로드
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

/**
 * 단일 HTML 청크 번역
 */
async function translateChunk(
  html: string,
  title: string,
  chunkIndex: number,
  totalChunks: number
): Promise<string> {
  const chunkInfo = totalChunks > 1
    ? `\n\n**참고**: 이것은 전체 문서의 ${totalChunks}개 부분 중 ${chunkIndex + 1}번째 부분입니다. 이전/이후 부분과의 문맥을 고려하여 자연스럽게 번역하세요.`
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

/**
 * HTML 문서 번역 (분할 처리 지원)
 */
async function translateHtmlWithSplit(html: string, title: string): Promise<TranslationResult> {
  try {
    // 1. 복잡도 분석
    const complexity = analyzeHtmlComplexity(html)
    console.log(`  📊 분석: ${complexity.length.toLocaleString()}자, 예상 ${complexity.estimatedTokens.toLocaleString()} 토큰`)
    console.log(`  📈 전략: ${complexity.strategy}, 권장 분할: ${complexity.recommendedChunks}개`)

    let translatedHtml: string

    if (complexity.strategy === 'single') {
      // 단일 번역
      console.log(`  🌐 단일 번역 실행...`)
      translatedHtml = await translateChunk(html, title, 0, 1)
    } else {
      // 분할 번역
      console.log(`  ✂️  ${complexity.recommendedChunks}개 청크로 분할...`)
      const targetChunkSize = Math.ceil(html.length / complexity.recommendedChunks)
      const { chunks, metadata } = splitHtml(html, targetChunkSize)

      console.log(`  📦 실제 분할: ${chunks.length}개 청크 (평균 ${metadata.avgChunkSize.toLocaleString()}자)`)

      // 각 청크 번역
      const translatedChunks: HtmlChunk[] = []
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i]
        console.log(`  🌐 청크 ${i + 1}/${chunks.length} 번역 중... (${chunk.html.length.toLocaleString()}자)`)

        const translated = await translateChunk(chunk.html, title, i, chunks.length)
        translatedChunks.push({
          ...chunk,
          html: translated
        })

        // 청크 간 딜레이 (rate limit 방지)
        if (i < chunks.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1500))
        }
      }

      // 재조립
      console.log(`  🔧 청크 재조립 중...`)
      translatedHtml = reassembleHtml(translatedChunks)
    }

    // 2. 검증
    const originalImgCount = (html.match(/<img/g) || []).length
    const translatedImgCount = (translatedHtml.match(/<img/g) || []).length
    const lengthRatio = translatedHtml.length / html.length

    console.log(`  📏 번역 HTML 길이: ${translatedHtml.length.toLocaleString()}자 (${(lengthRatio * 100).toFixed(1)}%)`)

    // 이미지 검증
    if (originalImgCount !== translatedImgCount) {
      console.error(`  ❌ 이미지 태그 개수 불일치! 원본: ${originalImgCount}, 번역: ${translatedImgCount}`)
      return {
        success: false,
        error: `이미지 태그 불일치 (원본: ${originalImgCount}, 번역: ${translatedImgCount})`
      }
    }

    // 길이 검증 (너무 짧으면 번역 실패로 간주)
    if (lengthRatio < 0.5) {
      console.warn(`  ⚠️  경고: 번역 길이가 너무 짧습니다 (${(lengthRatio * 100).toFixed(1)}%)`)
      // 50% 미만은 실패로 간주
      return {
        success: false,
        error: `번역 길이 부족 (${(lengthRatio * 100).toFixed(1)}%)`
      }
    }

    return {
      success: true,
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

  } catch (error: any) {
    console.error(`  ❌ 번역 실패:`, error.message)
    return {
      success: false,
      error: error.message
    }
  }
}

/**
 * 문서 번역 및 저장
 */
async function translateDocument(doc: Document): Promise<boolean> {
  console.log(`\nHTML 번역 중: [${doc.csv_id}] ${doc.title_en.substring(0, 50)}...`)
  console.log(`  📏 원본 HTML 길이: ${doc.content_html_en.length.toLocaleString()}자`)

  try {
    const result = await translateHtmlWithSplit(doc.content_html_en, doc.title_en)

    if (!result.success) {
      console.error(`  ❌ 번역 실패: ${result.error}`)
      return false
    }

    // Supabase 업데이트
    console.log('  💾 저장 중...')
    const { error } = await supabase
      .from('documents')
      .update({
        content_html_ko: result.translatedHtml
      })
      .eq('id', doc.id)

    if (error) {
      console.error(`  ❌ 저장 실패:`, error)
      return false
    }

    const stats = result.stats!
    console.log(`  ✅ 완료 (이미지: ${stats.imageCount.original}개 보존, 길이: ${(stats.lengthRatio * 100).toFixed(1)}%, 청크: ${stats.chunksUsed}개)`)

    // API 요청 간격 조절 (rate limit 방지)
    await new Promise(resolve => setTimeout(resolve, 2000))
    return true

  } catch (error: any) {
    console.error(`  ❌ 처리 실패:`, error.message)
    return false
  }
}

/**
 * 메인 실행
 */
async function main() {
  console.log('🚀 HTML 번역 파이프라인 시작 (분할 처리 지원)...\n')

  // content_html_ko가 content_html_en과 같은 문서만 조회 (번역 실패한 문서)
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

  // 번역이 필요한 문서 필터링 (영문 그대로 있거나 NULL인 경우)
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

  for (let i = 0; i < docsToTranslate.length; i++) {
    const doc = docsToTranslate[i]
    console.log(`[${i + 1}/${docsToTranslate.length}]`)

    const success = await translateDocument(doc)
    if (success) {
      successCount++
    } else {
      errorCount++
      errors.push({
        csv_id: doc.csv_id,
        error: '번역 실패'
      })
    }
  }

  console.log('\n\n============================================================')
  console.log('📊 HTML 번역 완료 통계:')
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`❌ 실패: ${errorCount}건`)
  if (docsToTranslate.length > 0) {
    console.log(`📊 성공률: ${((successCount / docsToTranslate.length) * 100).toFixed(1)}%`)
  }

  if (errors.length > 0) {
    console.log('\n실패한 문서:')
    errors.forEach(e => console.log(`  - csv_id ${e.csv_id}: ${e.error}`))
  }

  console.log('============================================================')
  console.log('\n🎉 번역 파이프라인 완료!')
}

main().catch(console.error)
