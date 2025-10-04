#!/usr/bin/env tsx
/**
 * Phase 4: Generate Vector Embeddings
 *
 * Creates 1536-dimension embeddings using OpenAI text-embedding-3-small
 * Expected cost: ~$0.001 for 97 documents
 */

import OpenAI from 'openai'
import { createClient } from '@supabase/supabase-js'
import pLimit from 'p-limit'
import path from 'path'
import { config } from 'dotenv'

// Load .env.local
config({ path: path.join(process.cwd(), '.env.local') })

interface Document {
  id: string
  csv_id: number
  title_ko: string
  content_text_ko: string
}

async function generateEmbeddings() {
  console.log('🚀 벡터 임베딩 생성 시작...\n')

  // ============================================
  // Initialize APIs
  // ============================================

  const openaiKey = process.env.OPENAI_API_KEY
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!openaiKey || !supabaseUrl || !supabaseKey) {
    console.error('❌ 환경변수가 설정되지 않았습니다:')
    console.error('   - OPENAI_API_KEY')
    console.error('   - NEXT_PUBLIC_SUPABASE_URL')
    console.error('   - SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }

  const openai = new OpenAI({ apiKey: openaiKey })
  const supabase = createClient(supabaseUrl, supabaseKey)

  // ============================================
  // Fetch Documents
  // ============================================

  console.log('📥 번역 완료된 문서 조회 중...')

  const { data: docs, error: fetchError } = await supabase
    .from('documents')
    .select('id, csv_id, title_ko, content_text_ko')
    .eq('product', 'freshdesk')
    .not('title_ko', 'is', null)
    .is('combined_embedding', null)
    .order('csv_id')

  if (fetchError) {
    console.error('❌ 문서 조회 실패:', fetchError)
    process.exit(1)
  }

  if (!docs || docs.length === 0) {
    console.log('✅ 모든 문서에 이미 임베딩이 생성되었습니다.')
    return
  }

  console.log(`📊 임베딩 생성 대상: ${docs.length}건\n`)

  // ============================================
  // Embedding Generation Function
  // ============================================

  async function generateEmbedding(text: string): Promise<number[]> {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text.substring(0, 8000),  // Max 8K chars for safety
      dimensions: 1536
    })

    return response.data[0].embedding
  }

  async function processDocument(doc: Document) {
    try {
      // 1. Title embedding
      const titleEmbedding = await generateEmbedding(doc.title_ko)

      // 2. Content embedding (first 2000 chars)
      const contentText = doc.content_text_ko.substring(0, 2000)
      const contentEmbedding = await generateEmbedding(contentText)

      // 3. Combined embedding (title + content summary)
      const combinedText = `${doc.title_ko}\n\n${doc.content_text_ko.substring(0, 1500)}`
      const combinedEmbedding = await generateEmbedding(combinedText)

      // 4. Update database
      const { error: updateError } = await supabase
        .from('documents')
        .update({
          title_embedding: titleEmbedding,
          content_embedding: contentEmbedding,
          combined_embedding: combinedEmbedding,
          embedding_model: 'text-embedding-3-small',
          embedding_version: 1,
          embeddings_generated_at: new Date().toISOString()
        })
        .eq('id', doc.id)

      if (updateError) {
        console.error(`❌ [${doc.csv_id}] DB 업데이트 실패:`, updateError.message)
        return false
      }

      return true

    } catch (error: any) {
      console.error(`❌ [${doc.csv_id}] 임베딩 생성 실패:`, error.message)
      return false
    }
  }

  // ============================================
  // Parallel Processing
  // ============================================

  console.log('🔄 임베딩 생성 중... (동시 10개)\n')

  const limit = pLimit(10)  // Concurrent API calls
  let successCount = 0
  let errorCount = 0

  await Promise.all(
    docs.map((doc, index) => limit(async () => {
      const success = await processDocument(doc)

      if (success) {
        successCount++
        const progress = `[${successCount + errorCount}/${docs.length}]`
        console.log(`✅ ${progress} [${doc.csv_id}] ${doc.title_ko}`)
      } else {
        errorCount++
        console.log(`❌ [${errorCount}/${docs.length}] [${doc.csv_id}] 실패`)
      }

      // Progress update every 20 documents
      if ((successCount + errorCount) % 20 === 0) {
        const percent = ((successCount + errorCount) / docs.length * 100).toFixed(1)
        console.log(`\n📊 진행률: ${percent}% (${successCount}/${docs.length})\n`)
      }
    }))
  )

  // ============================================
  // Summary
  // ============================================

  console.log('\n' + '='.repeat(60))
  console.log('📊 임베딩 생성 완료 통계:')
  console.log('='.repeat(60))
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`❌ 실패: ${errorCount}건`)
  console.log(`📊 성공률: ${((successCount / docs.length) * 100).toFixed(1)}%`)

  // Cost calculation
  const avgTokens = 550  // Average tokens per document (title + content)
  const totalTokens = docs.length * avgTokens
  const cost = (totalTokens / 1_000_000) * 0.02  // $0.02 per 1M tokens

  console.log(`💰 예상 비용: ~$${cost.toFixed(4)} (${totalTokens.toLocaleString()} tokens)`)
  console.log('='.repeat(60))

  console.log('\n🎉 임베딩 생성 완료!')
}

generateEmbeddings().catch(console.error)
