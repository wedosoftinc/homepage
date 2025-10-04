#!/usr/bin/env tsx
/**
 * Generate Short Slugs
 *
 * Creates concise, SEO-friendly short slugs from document titles
 * Pattern: {csv_id}-{short_slug}
 * Example: 196643-attachment-size-limit
 */

import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'
import pLimit from 'p-limit'
import path from 'path'
import { config } from 'dotenv'

// Load .env.local
config({ path: path.join(process.cwd(), '.env.local') })

interface Document {
  id: string
  csv_id: number
  title_en: string
  title_ko: string
  slug: string
}

const SLUG_GENERATION_PROMPT = `
당신은 SEO 전문가입니다. 주어진 제목에서 핵심 키워드 3-5개를 추출하여 짧고 명확한 URL slug를 생성하세요.

규칙:
1. 영문 소문자만 사용
2. 단어는 하이픈(-)으로 연결
3. 3-5개 단어, 최대 50자
4. 불필요한 조사/접속사 제거 (how, the, a, an, is, are 등)
5. 핵심 키워드만 포함
6. SEO 친화적인 키워드 선택

예시:
입력: "What is the size limit for attachments to a ticket reply?"
출력: attachment-size-limit

입력: "How can customers view their previous conversations after a ticket is closed?"
출력: view-closed-ticket-conversation

입력: "티켓 답변의 첨부 파일 크기 제한은 얼마인가요?"
출력: attachment-size-limit

**중요**: slug만 출력하세요. 설명이나 다른 텍스트는 불필요합니다.
`

async function generateShortSlugs() {
  console.log('🚀 Short Slug 생성 시작...\n')

  // Initialize clients
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const anthropicKey = process.env.ANTHROPIC_API_KEY

  if (!supabaseUrl || !supabaseKey || !anthropicKey) {
    console.error('❌ 환경변수가 설정되지 않았습니다.')
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, supabaseKey)
  const anthropic = new Anthropic({ apiKey: anthropicKey })

  // Get documents without short_slug
  const { data: documents, error } = await supabase
    .from('documents')
    .select('id, csv_id, title_en, title_ko, slug')
    .is('short_slug', null)
    .order('csv_id')

  if (error) {
    console.error('❌ 문서 조회 실패:', error)
    process.exit(1)
  }

  if (!documents || documents.length === 0) {
    console.log('✅ 모든 문서에 이미 short_slug가 있습니다.')
    return
  }

  console.log(`📊 Short slug 생성 대상: ${documents.length}건\n`)

  // Generate short slugs with rate limiting
  const limit = pLimit(5) // 5 concurrent requests
  let successCount = 0
  let failCount = 0

  const tasks = documents.map((doc, index) =>
    limit(async () => {
      try {
        // Use English title for slug generation
        const title = doc.title_en || doc.title_ko

        const response = await anthropic.messages.create({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 100,
          temperature: 0.3,
          messages: [{
            role: 'user',
            content: `${SLUG_GENERATION_PROMPT}\n\n제목: ${title}`
          }]
        })

        const content = response.content[0]
        if (content.type !== 'text') {
          throw new Error('Unexpected response type')
        }

        let shortSlug = content.text.trim().toLowerCase()

        // Clean up the slug
        shortSlug = shortSlug
          .replace(/[^a-z0-9-]/g, '-') // Replace non-alphanumeric with hyphens
          .replace(/-+/g, '-')           // Replace multiple hyphens with single
          .replace(/^-|-$/g, '')          // Remove leading/trailing hyphens
          .substring(0, 50)               // Max 50 chars

        // Update database
        const { error: updateError } = await supabase
          .from('documents')
          .update({ short_slug: shortSlug })
          .eq('id', doc.id)

        if (updateError) {
          throw updateError
        }

        successCount++
        console.log(`✅ [${index + 1}/${documents.length}] [${doc.csv_id}] ${shortSlug}`)

        // Progress indicator every 10 docs
        if ((index + 1) % 10 === 0) {
          console.log(`\n📊 진행률: ${((index + 1) / documents.length * 100).toFixed(1)}% (${index + 1}/${documents.length})\n`)
        }

      } catch (error) {
        failCount++
        console.error(`❌ [${doc.csv_id}] 실패:`, error)
      }
    })
  )

  await Promise.all(tasks)

  console.log('\n' + '='.repeat(60))
  console.log('📊 Short Slug 생성 완료 통계:')
  console.log('='.repeat(60))
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`❌ 실패: ${failCount}건`)
  console.log(`📊 성공률: ${(successCount / documents.length * 100).toFixed(1)}%`)
  console.log('='.repeat(60))

  console.log('\n🎉 Short Slug 생성 완료!')
}

generateShortSlugs().catch(console.error)
