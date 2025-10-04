import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

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

async function translateHTML(html: string, title: string): Promise<string> {
  const prompt = `# 작업: Freshworks 기술 문서 HTML 번역

## 번역 가이드라인
${TRANSLATION_GUIDELINES}

## 번역할 문서
**제목**: ${title}

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
    max_tokens: 16000,  // HTML이 길 수 있으므로 충분히 할당
    temperature: 0.3,
    messages: [{
      role: 'user',
      content: prompt
    }]
  })

  const content = message.content[0]
  return content.type === 'text' ? content.text.trim() : ''
}

async function translateDocument(doc: Document): Promise<void> {
  console.log(`\nHTML 번역 중: [${doc.csv_id}] ${doc.title_en.substring(0, 50)}...`)
  console.log(`  📏 원본 HTML 길이: ${doc.content_html_en.length.toLocaleString()}자`)

  try {
    // HTML 전체 번역
    console.log(`  🌐 HTML 번역 중...`)
    const htmlKo = await translateHTML(doc.content_html_en, doc.title_en)

    console.log(`  📏 번역 HTML 길이: ${htmlKo.length.toLocaleString()}자`)

    // 길이 검증 (원본의 70% 이상이어야 함)
    const lengthRatio = htmlKo.length / doc.content_html_en.length
    if (lengthRatio < 0.7) {
      console.warn(`  ⚠️  경고: 번역 길이가 너무 짧습니다 (${(lengthRatio * 100).toFixed(1)}%)`)
      console.warn(`  원본: ${doc.content_html_en.length}자, 번역: ${htmlKo.length}자`)
    }

    // 이미지/링크 검증
    const originalImgCount = (doc.content_html_en.match(/<img/g) || []).length
    const translatedImgCount = (htmlKo.match(/<img/g) || []).length

    if (originalImgCount !== translatedImgCount) {
      console.error(`  ❌ 이미지 태그 개수 불일치! 원본: ${originalImgCount}, 번역: ${translatedImgCount}`)
      throw new Error('이미지 태그가 누락되었습니다')
    }

    // Supabase 업데이트
    console.log('  💾 저장 중...')
    const { error } = await supabase
      .from('documents')
      .update({
        content_html_ko: htmlKo
      })
      .eq('id', doc.id)

    if (error) {
      console.error(`  ❌ 저장 실패:`, error)
      throw error
    }

    console.log(`  ✅ 완료 (이미지: ${originalImgCount}개 보존, 길이: ${(lengthRatio * 100).toFixed(1)}%)`)

    // API 요청 간격 조절 (rate limit 방지)
    await new Promise(resolve => setTimeout(resolve, 2000))

  } catch (error: any) {
    console.error(`  ❌ HTML 번역 실패:`, error.message)
    throw error
  }
}

async function main() {
  console.log('🚀 HTML 콘텐츠 번역 시작 (구조 보존)...\n')

  // content_html_ko = content_html_en인 문서 조회 (원본 영문으로 복구된 문서들)
  const { data: docs, error } = await supabase
    .from('documents')
    .select('id, csv_id, title_en, content_html_en, content_html_ko')
    .eq('product', 'freshservice')
    .not('title_ko', 'is', null)  // 이미 번역된 문서만
    .order('csv_id')
    .limit(50)

  if (error) {
    console.error('❌ 문서 조회 실패:', error)
    process.exit(1)
  }

  // content_html_ko가 content_html_en과 같은 문서만 필터링
  const docsToTranslate = (docs || []).filter(doc =>
    doc.content_html_ko === doc.content_html_en
  ) as Document[]

  if (docsToTranslate.length === 0) {
    console.log('✅ HTML 번역할 문서가 없습니다.')
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

    try {
      await translateDocument(doc)
      successCount++
    } catch (error: any) {
      errorCount++
      errors.push({
        csv_id: doc.csv_id,
        error: error.message
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
  console.log('\n🎉 HTML 번역 완료!')
}

main().catch(console.error)
