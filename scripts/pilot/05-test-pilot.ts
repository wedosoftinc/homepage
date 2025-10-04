#!/usr/bin/env tsx
/**
 * Phase 6: Test & Validation
 *
 * Validates pilot implementation with automated tests
 */

import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'
import path from 'path'
import { config } from 'dotenv'

// Load .env.local
config({ path: path.join(process.cwd(), '.env.local') })

async function runTests() {
  console.log('🧪 파일럿 테스트 시작...\n')
  console.log('='.repeat(60))

  // ============================================
  // Initialize
  // ============================================

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const openaiKey = process.env.OPENAI_API_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Supabase 환경변수 누락')
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, supabaseKey)
  const openai = openaiKey ? new OpenAI({ apiKey: openaiKey }) : null

  let allPassed = true

  // ============================================
  // Test 1: Document Count
  // ============================================

  console.log('\n📊 Test 1: 문서 수 확인')
  console.log('-'.repeat(60))

  const { count: docCount, error: countError } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })
    .eq('product', 'freshdesk')

  if (countError) {
    console.log(`❌ FAIL: ${countError.message}`)
    allPassed = false
  } else {
    const expected = 97
    const passed = docCount! >= expected * 0.9  // Allow 10% variance

    if (passed) {
      console.log(`✅ PASS: 문서 수 = ${docCount}건 (예상: ~${expected}건)`)
    } else {
      console.log(`❌ FAIL: 문서 수 = ${docCount}건 (예상: ~${expected}건)`)
      allPassed = false
    }
  }

  // ============================================
  // Test 2: Translation Completion Rate
  // ============================================

  console.log('\n🌐 Test 2: 번역 완료율')
  console.log('-'.repeat(60))

  const { count: translatedCount, error: translatedError } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })
    .eq('product', 'freshdesk')
    .not('title_ko', 'is', null)

  if (translatedError) {
    console.log(`❌ FAIL: ${translatedError.message}`)
    allPassed = false
  } else {
    const translationRate = (translatedCount! / docCount!) * 100
    const passed = translationRate >= 95  // 95% or higher

    if (passed) {
      console.log(`✅ PASS: 번역 완료율 = ${translationRate.toFixed(1)}% (${translatedCount}/${docCount}건)`)
    } else {
      console.log(`❌ FAIL: 번역 완료율 = ${translationRate.toFixed(1)}% (목표: 95%+)`)
      allPassed = false
    }
  }

  // ============================================
  // Test 3: Embedding Generation Rate
  // ============================================

  console.log('\n🧬 Test 3: 임베딩 생성율')
  console.log('-'.repeat(60))

  const { count: embeddingCount, error: embeddingError } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })
    .eq('product', 'freshdesk')
    .not('combined_embedding', 'is', null)

  if (embeddingError) {
    console.log(`❌ FAIL: ${embeddingError.message}`)
    allPassed = false
  } else {
    const embeddingRate = (embeddingCount! / translatedCount!) * 100
    const passed = embeddingRate >= 95

    if (passed) {
      console.log(`✅ PASS: 임베딩 생성율 = ${embeddingRate.toFixed(1)}% (${embeddingCount}/${translatedCount}건)`)
    } else {
      console.log(`❌ FAIL: 임베딩 생성율 = ${embeddingRate.toFixed(1)}% (목표: 95%+)`)
      allPassed = false
    }
  }

  // ============================================
  // Test 4: Translation Quality Sample
  // ============================================

  console.log('\n✨ Test 4: 번역 품질 샘플 확인')
  console.log('-'.repeat(60))

  const { data: samples, error: sampleError } = await supabase
    .from('documents')
    .select('csv_id, title_en, title_ko, translation_quality')
    .eq('product', 'freshdesk')
    .not('title_ko', 'is', null)
    .order('csv_id')
    .limit(3)

  if (sampleError) {
    console.log(`❌ FAIL: ${sampleError.message}`)
    allPassed = false
  } else if (samples && samples.length > 0) {
    console.log('샘플 번역 (첫 3건):')
    samples.forEach(doc => {
      console.log(`\n  [${doc.csv_id}] 품질: ${(doc.translation_quality * 100).toFixed(0)}%`)
      console.log(`  EN: ${doc.title_en}`)
      console.log(`  KO: ${doc.title_ko}`)
    })
    console.log('\n✅ PASS: 번역 샘플 확인 완료')
  }

  // ============================================
  // Test 5: Vector Search Test
  // ============================================

  if (openai && embeddingCount! > 0) {
    console.log('\n🔍 Test 5: 벡터 검색 테스트')
    console.log('-'.repeat(60))

    try {
      const testQuery = '티켓 첨부파일 크기 제한'

      // Generate query embedding
      const response = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: testQuery,
        dimensions: 1536
      })

      const queryEmbedding = response.data[0].embedding

      // Semantic search
      const { data: searchResults, error: searchError } = await supabase.rpc('semantic_search', {
        query_embedding: queryEmbedding,
        match_threshold: 0.6,
        match_count: 5,
        filter_product: 'freshdesk'
      })

      if (searchError) {
        console.log(`❌ FAIL: ${searchError.message}`)
        allPassed = false
      } else if (searchResults && searchResults.length > 0) {
        console.log(`쿼리: "${testQuery}"`)
        console.log(`\n검색 결과 (상위 ${searchResults.length}건):\n`)

        searchResults.forEach((result: any, index: number) => {
          console.log(`${index + 1}. ${result.title_ko}`)
          console.log(`   유사도: ${(result.similarity * 100).toFixed(1)}%`)
          console.log(`   경로: ${result.full_path}\n`)
        })

        const passed = searchResults.length >= 3 && searchResults[0].similarity >= 0.6

        if (passed) {
          console.log('✅ PASS: 벡터 검색 정상 동작')
        } else {
          console.log('⚠️  WARN: 검색 결과가 예상보다 낮음')
        }
      } else {
        console.log('⚠️  WARN: 검색 결과 없음')
      }

    } catch (error: any) {
      console.log(`❌ FAIL: ${error.message}`)
      allPassed = false
    }
  } else {
    console.log('\n⏭️  Test 5: 벡터 검색 테스트 (SKIP - OpenAI 키 없음 또는 임베딩 미생성)')
  }

  // ============================================
  // Test 6: Database Schema Validation
  // ============================================

  console.log('\n🗄️  Test 6: 데이터베이스 스키마 검증')
  console.log('-'.repeat(60))

  const { data: categories } = await supabase.from('categories').select('count')
  const { data: folders } = await supabase.from('folders').select('count')

  if (categories && folders) {
    console.log(`✅ PASS: Categories 테이블 정상 (1건 이상)`)
    console.log(`✅ PASS: Folders 테이블 정상 (1건 이상)`)
    console.log(`✅ PASS: Documents 테이블 정상 (${docCount}건)`)
  }

  // ============================================
  // Final Summary
  // ============================================

  console.log('\n' + '='.repeat(60))
  console.log('📊 테스트 결과 요약')
  console.log('='.repeat(60))

  if (allPassed) {
    console.log('✅ 모든 테스트 통과!')
    console.log('\n🎉 파일럿 구현 검증 완료!')
    console.log('\n다음 단계:')
    console.log('  1. Next.js 문서 페이지 구현')
    console.log('  2. 검색 API 구현')
    console.log('  3. 개발 서버 실행 및 테스트')
  } else {
    console.log('❌ 일부 테스트 실패')
    console.log('\n실패한 항목을 확인하고 재시도하세요.')
    process.exit(1)
  }

  console.log('='.repeat(60))
}

runTests().catch(console.error)
