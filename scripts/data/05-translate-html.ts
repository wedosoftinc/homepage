import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'
import * as dotenv from 'dotenv'

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

interface Document {
  id: string
  csv_id: number
  title_en: string
  content_html_en: string
  content_html_ko: string | null
}

async function translateHTML(html: string): Promise<string> {
  const prompt = `다음 HTML 문서를 한국어로 번역해주세요.
HTML 태그와 구조는 그대로 유지하고, 텍스트 내용만 한국어로 번역하세요.
기술 용어는 적절히 한국어로 표기하되, 이해를 돕기 위해 영문을 병기할 수 있습니다.

HTML 문서:
${html}

번역된 HTML:`

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

async function translateDocument(doc: Document): Promise<void> {
  console.log(`\nHTML 번역 중: [${doc.csv_id}] ${doc.title_en.substring(0, 50)}...`)

  try {
    // HTML 번역 (최대 4000자로 제한)
    const htmlToTranslate = doc.content_html_en.substring(0, 4000)
    console.log(`  🌐 HTML 번역 중... (${htmlToTranslate.length}자)`)
    const htmlKo = await translateHTML(htmlToTranslate)

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

    console.log(`  ✅ 완료`)

    // API 요청 간격 조절 (rate limit 방지)
    await new Promise(resolve => setTimeout(resolve, 1000))

  } catch (error: any) {
    console.error(`  ❌ HTML 번역 실패:`, error.message)
    throw error
  }
}

async function main() {
  console.log('🚀 HTML 콘텐츠 번역 시작...\n')

  // content_html_ko가 null인 문서 조회
  const { data: docs, error } = await supabase
    .from('documents')
    .select('id, csv_id, title_en, content_html_en, content_html_ko')
    .is('content_html_ko', null)
    .not('title_ko', 'is', null)  // 이미 번역된 문서만
    .order('csv_id')
    .limit(100)

  if (error) {
    console.error('❌ 문서 조회 실패:', error)
    process.exit(1)
  }

  if (!docs || docs.length === 0) {
    console.log('✅ HTML 번역할 문서가 없습니다.')
    return
  }

  console.log(`📊 총 ${docs.length}건 HTML 번역 시작\n`)

  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i] as Document
    console.log(`[${i + 1}/${docs.length}]`)

    try {
      await translateDocument(doc)
      successCount++
    } catch (error) {
      errorCount++
    }
  }

  console.log('\n\n============================================================')
  console.log('📊 HTML 번역 완료 통계:')
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`❌ 실패: ${errorCount}건`)
  console.log(`📊 성공률: ${((successCount / docs.length) * 100).toFixed(1)}%`)
  console.log('============================================================')
  console.log('\n🎉 HTML 번역 완료!')
}

main().catch(console.error)
