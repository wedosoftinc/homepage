#!/usr/bin/env tsx
/**
 * Phase 3: Translate Documents with Claude 3.5 Sonnet
 *
 * Translates all pilot documents from English to Korean
 * Expected cost: ~$0.29 for 97 documents
 */

import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@supabase/supabase-js'
import pLimit from 'p-limit'
import path from 'path'
import { config } from 'dotenv'

// Load .env.local
config({ path: path.join(process.cwd(), '.env.local') })

const TRANSLATION_PROMPT = `
당신은 B2B SaaS 기술 문서 번역 전문가입니다.

번역 규칙:
1. 존댓말 "~하세요" 사용 (딱딱한 "~하십시오" 금지)
2. 기술 용어: 한글(영어) 예: 티켓(Ticket), 워크플로우(Workflow), 에이전트(Agent)
3. 능동태 우선, 간결하고 자연스러운 문장
4. HTML 태그는 절대 변경하지 말고 텍스트만 번역
5. 자연스러운 한국어 어순으로 재배치
6. 불필요한 수동태는 능동태로 전환

응답 형식 (반드시 이 형식 준수):
TITLE: [번역된 제목]

CONTENT:
[번역된 HTML 내용]
`

interface Document {
  id: string
  csv_id: number
  title_en: string
  content_html_en: string
}

async function translateDocuments() {
  console.log('🚀 문서 번역 시작...\n')

  // ============================================
  // Initialize APIs
  // ============================================

  const anthropicKey = process.env.ANTHROPIC_API_KEY
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!anthropicKey || !supabaseUrl || !supabaseKey) {
    console.error('❌ 환경변수가 설정되지 않았습니다:')
    console.error('   - ANTHROPIC_API_KEY')
    console.error('   - NEXT_PUBLIC_SUPABASE_URL')
    console.error('   - SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }

  const anthropic = new Anthropic({ apiKey: anthropicKey })
  const supabase = createClient(supabaseUrl, supabaseKey)

  // ============================================
  // Fetch Documents
  // ============================================

  console.log('📥 미번역 문서 조회 중...')

  const { data: docs, error: fetchError } = await supabase
    .from('documents')
    .select('id, csv_id, title_en, content_html_en')
    .eq('product', 'freshdesk')
    .is('title_ko', null)
    .order('csv_id')

  if (fetchError) {
    console.error('❌ 문서 조회 실패:', fetchError)
    process.exit(1)
  }

  if (!docs || docs.length === 0) {
    console.log('✅ 모든 문서가 이미 번역되었습니다.')
    return
  }

  console.log(`📊 번역 대상: ${docs.length}건\n`)

  // ============================================
  // Translation Function
  // ============================================

  async function translateDocument(doc: Document) {
    try {
      const response = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 8192,
        temperature: 0.3,
        messages: [{
          role: 'user',
          content: `${TRANSLATION_PROMPT}

Title (English):
${doc.title_en}

Content (HTML):
${doc.content_html_en}
`
        }]
      })

      const result = response.content[0].text

      // Parse response
      const titleMatch = result.match(/TITLE:\s*(.+?)(?:\n|$)/s)
      const contentMatch = result.match(/CONTENT:\s*([\s\S]+)/s)

      if (!titleMatch || !contentMatch) {
        console.error(`⚠️  [${doc.csv_id}] 파싱 실패 - 기본 번역 사용`)
        return {
          title_ko: doc.title_en,
          content_html_ko: result,
          content_text_ko: result.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
        }
      }

      const title_ko = titleMatch[1].trim()
      const content_html_ko = contentMatch[1].trim()
      const content_text_ko = content_html_ko
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

      // Update database
      const { error: updateError } = await supabase
        .from('documents')
        .update({
          title_ko,
          content_html_ko,
          content_text_ko,
          translation_version: 1,
          translation_quality: 0.7,
          translation_method: 'claude-3.5-sonnet-initial'
        })
        .eq('id', doc.id)

      if (updateError) {
        console.error(`❌ [${doc.csv_id}] DB 업데이트 실패:`, updateError.message)
        return null
      }

      // Save to translation history
      await supabase
        .from('translation_history')
        .insert({
          document_id: doc.id,
          version: 1,
          title_ko,
          content_html_ko,
          content_text_ko,
          quality_score: 0.7,
          translation_method: 'claude-3.5-sonnet',
          translated_by: 'claude-3.5-sonnet-20241022'
        })

      return { title_ko, content_html_ko }

    } catch (error: any) {
      console.error(`❌ [${doc.csv_id}] 번역 실패:`, error.message)
      return null
    }
  }

  // ============================================
  // Parallel Translation
  // ============================================

  console.log('🔄 번역 진행 중... (동시 5개)\n')

  const limit = pLimit(5)  // Concurrent translations
  let successCount = 0
  let errorCount = 0

  const results = await Promise.all(
    docs.map((doc, index) => limit(async () => {
      const result = await translateDocument(doc)

      if (result) {
        successCount++
        const progress = `[${successCount + errorCount}/${docs.length}]`
        console.log(`✅ ${progress} [${doc.csv_id}] ${result.title_ko}`)
      } else {
        errorCount++
        console.log(`❌ [${errorCount}/${docs.length}] [${doc.csv_id}] ${doc.title_en}`)
      }

      // Progress update every 10 documents
      if ((successCount + errorCount) % 10 === 0) {
        const percent = ((successCount + errorCount) / docs.length * 100).toFixed(1)
        console.log(`\n📊 진행률: ${percent}% (${successCount}/${docs.length})\n`)
      }

      return result
    }))
  )

  // ============================================
  // Summary
  // ============================================

  console.log('\n' + '='.repeat(60))
  console.log('📊 번역 완료 통계:')
  console.log('='.repeat(60))
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`❌ 실패: ${errorCount}건`)
  console.log(`📊 성공률: ${((successCount / docs.length) * 100).toFixed(1)}%`)
  console.log(`💰 예상 비용: ~$${(docs.length * 0.003).toFixed(2)}`)
  console.log('='.repeat(60))

  console.log('\n🎉 번역 완료!')
}

translateDocuments().catch(console.error)
