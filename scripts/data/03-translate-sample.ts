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
  content_text_en: string
  title_ko: string | null
  content_text_ko: string | null
}

async function translateWithClaude(text: string, type: 'title' | 'content'): Promise<string> {
  const prompt = type === 'title'
    ? `다음 영문 제목을 한국어로 자연스럽게 번역해주세요. 번역 결과만 출력하세요.

영문 제목: ${text}

한국어 번역:`
    : `다음 기술 문서 내용을 한국어로 자연스럽게 번역해주세요. 기술 용어는 적절히 한국어로 표기하되, 이해를 돕기 위해 영문을 병기할 수 있습니다. 번역 결과만 출력하세요.

영문 내용:
${text}

한국어 번역:`

  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: type === 'title' ? 200 : 4000,
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
  console.log(`\n번역 중: [${doc.csv_id}] ${doc.title_en.substring(0, 50)}...`)

  try {
    // 제목 번역
    console.log('  📝 제목 번역 중...')
    const titleKo = await translateWithClaude(doc.title_en, 'title')

    // 내용 번역 (최대 2000자로 제한하여 토큰 사용량 절약)
    const contentToTranslate = doc.content_text_en.substring(0, 2000)
    console.log(`  📄 내용 번역 중... (${contentToTranslate.length}자)`)
    const contentKo = await translateWithClaude(contentToTranslate, 'content')

    // Supabase 업데이트
    console.log('  💾 저장 중...')
    const { error } = await supabase
      .from('documents')
      .update({
        title_ko: titleKo,
        content_text_ko: contentKo,
        translation_method: 'claude-3-5-sonnet-20241022',
        translation_quality: 0.6,
        translation_version: 1
      })
      .eq('id', doc.id)

    if (error) {
      console.error(`  ❌ 저장 실패:`, error)
      throw error
    }

    console.log(`  ✅ 완료: ${titleKo}`)

    // API 요청 간격 조절 (rate limit 방지)
    await new Promise(resolve => setTimeout(resolve, 1000))

  } catch (error: any) {
    console.error(`  ❌ 번역 실패:`, error.message)
    throw error
  }
}

async function main() {
  console.log('🚀 샘플 데이터 번역 시작...\n')

  // 번역되지 않은 문서 조회 (title_ko가 null인 문서)
  const { data: docs, error } = await supabase
    .from('documents')
    .select('id, csv_id, title_en, content_text_en, title_ko, content_text_ko')
    .is('title_ko', null)
    .order('csv_id')
    .limit(100)

  if (error) {
    console.error('❌ 문서 조회 실패:', error)
    process.exit(1)
  }

  if (!docs || docs.length === 0) {
    console.log('✅ 번역할 문서가 없습니다.')
    return
  }

  console.log(`📊 총 ${docs.length}건 번역 시작\n`)

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
  console.log('📊 번역 완료 통계:')
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`❌ 실패: ${errorCount}건`)
  console.log(`📊 성공률: ${((successCount / docs.length) * 100).toFixed(1)}%`)
  console.log('============================================================')
  console.log('\n🎉 번역 완료!')
}

main().catch(console.error)
