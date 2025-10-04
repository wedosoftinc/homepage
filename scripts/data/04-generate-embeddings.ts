import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const openaiKey = process.env.OPENAI_API_KEY!

if (!supabaseUrl || !supabaseKey || !openaiKey) {
  console.error('❌ 환경변수가 설정되지 않았습니다.')
  console.error('필요: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)
const openai = new OpenAI({ apiKey: openaiKey })

interface Document {
  id: string
  csv_id: number
  title_ko: string
  content_text_ko: string
}

async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
    dimensions: 1536
  })

  return response.data[0].embedding
}

async function generateDocumentEmbedding(doc: Document): Promise<void> {
  console.log(`\n임베딩 생성 중: [${doc.csv_id}] ${doc.title_ko.substring(0, 50)}...`)

  try {
    // 제목과 내용을 결합하여 임베딩 생성 (최대 8000자로 제한)
    const combinedText = `${doc.title_ko}\n\n${doc.content_text_ko.substring(0, 8000)}`

    console.log(`  🔢 임베딩 생성 중... (${combinedText.length}자)`)
    const embedding = await generateEmbedding(combinedText)

    // Supabase 업데이트
    console.log('  💾 저장 중...')
    const { error } = await supabase
      .from('documents')
      .update({
        embedding: embedding,
        embedding_model: 'text-embedding-3-small',
        embedding_version: 1,
        embeddings_generated_at: new Date().toISOString()
      })
      .eq('id', doc.id)

    if (error) {
      console.error(`  ❌ 저장 실패:`, error)
      throw error
    }

    console.log(`  ✅ 완료`)

    // API 요청 간격 조절 (rate limit 방지)
    await new Promise(resolve => setTimeout(resolve, 500))

  } catch (error: any) {
    console.error(`  ❌ 임베딩 생성 실패:`, error.message)
    throw error
  }
}

async function main() {
  console.log('🚀 임베딩 생성 시작...\n')

  // 임베딩이 없는 문서 조회
  const { data: docs, error } = await supabase
    .from('documents')
    .select('id, csv_id, title_ko, content_text_ko')
    .is('embedding', null)
    .not('title_ko', 'is', null)  // 번역된 문서만
    .order('csv_id')
    .limit(100)

  if (error) {
    console.error('❌ 문서 조회 실패:', error)
    process.exit(1)
  }

  if (!docs || docs.length === 0) {
    console.log('✅ 임베딩 생성할 문서가 없습니다.')
    return
  }

  console.log(`📊 총 ${docs.length}건 임베딩 생성 시작\n`)

  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i] as Document
    console.log(`[${i + 1}/${docs.length}]`)

    try {
      await generateDocumentEmbedding(doc)
      successCount++
    } catch (error) {
      errorCount++
    }
  }

  console.log('\n\n============================================================')
  console.log('📊 임베딩 생성 완료 통계:')
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`❌ 실패: ${errorCount}건`)
  console.log(`📊 성공률: ${((successCount / docs.length) * 100).toFixed(1)}%`)
  console.log('============================================================')
  console.log('\n🎉 임베딩 생성 완료!')
}

main().catch(console.error)
