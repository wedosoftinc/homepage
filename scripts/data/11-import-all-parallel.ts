import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'
import { parse } from 'csv-parse/sync'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase 환경변수가 설정되지 않았습니다.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// 병렬 처리 설정
const BATCH_SIZE = 10  // 동시에 처리할 문서 수

interface CsvRow {
  id: string
  title: string
  description: string
  desc_un_html: string
  folder_name: string
  category_name: string
  slug: string
  folder_slug: string
  category_slug: string
  path: string
  status: string
}

// 전역 캐시 (모든 제품에서 공유)
const globalCategoryCache = new Map<string, string>()
const globalFolderCache = new Map<string, string>()

async function ensureCategory(product: string, categoryName: string, categorySlug: string) {
  const cacheKey = `${product}:${categorySlug}`

  if (globalCategoryCache.has(cacheKey)) {
    return globalCategoryCache.get(cacheKey)!
  }

  const { data: existing } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .eq('product', product)
    .maybeSingle()

  if (existing) {
    globalCategoryCache.set(cacheKey, existing.id)
    return existing.id
  }

  const { data, error } = await supabase
    .from('categories')
    .insert({
      product,
      slug: categorySlug,
      name_ko: categoryName,
      name_en: categoryName,
      published: true
    })
    .select('id')
    .single()

  if (error) {
    throw error
  }

  globalCategoryCache.set(cacheKey, data.id)
  return data.id
}

async function ensureFolder(
  product: string,
  categoryId: string,
  folderName: string,
  folderSlug: string
) {
  const cacheKey = `${product}:${categoryId}:${folderSlug}`

  if (globalFolderCache.has(cacheKey)) {
    return globalFolderCache.get(cacheKey)!
  }

  const { data: existing } = await supabase
    .from('folders')
    .select('id')
    .eq('slug', folderSlug)
    .eq('category_id', categoryId)
    .eq('product', product)
    .maybeSingle()

  if (existing) {
    globalFolderCache.set(cacheKey, existing.id)
    return existing.id
  }

  const { data, error } = await supabase
    .from('folders')
    .insert({
      product,
      category_id: categoryId,
      slug: folderSlug,
      name_ko: folderName,
      name_en: folderName,
      published: true
    })
    .select('id')
    .single()

  if (error) {
    throw error
  }

  globalFolderCache.set(cacheKey, data.id)
  return data.id
}

async function importDocument(
  row: CsvRow,
  product: string,
  categoryId: string,
  folderId: string
) {
  const csvId = parseInt(row.id)

  // 기존 문서 확인
  const { data: existing } = await supabase
    .from('documents')
    .select('id')
    .eq('csv_id', csvId)
    .eq('product', product)
    .maybeSingle()

  if (existing) {
    return { status: 'skip', csvId }
  }

  // 새 문서 생성 (영문만, 번역은 나중에)
  const { error } = await supabase
    .from('documents')
    .insert({
      csv_id: csvId,
      product,
      category_id: categoryId,
      folder_id: folderId,
      slug: row.slug,
      short_slug: row.slug,
      full_path: row.path,

      // 영문 (원본)
      title_en: row.title,
      content_html_en: row.description,
      content_text_en: row.desc_un_html,

      // 한글 (번역 전이므로 NULL)
      title_ko: null,
      content_html_ko: null,
      content_text_ko: null,

      // 검색 벡터 (임베딩 전이므로 NULL)
      search_vector_ko: null,

      published: row.status === '2' // status 2 = published
    })

  if (error) {
    return { status: 'error', csvId, error: error.message }
  }

  return { status: 'success', csvId }
}

async function processDocument(row: CsvRow, product: string) {
  try {
    // 카테고리 확보
    const categoryId = await ensureCategory(product, row.category_name, row.category_slug)

    // 폴더 확보
    const folderId = await ensureFolder(product, categoryId, row.folder_name, row.folder_slug)

    // 문서 임포트
    return await importDocument(row, product, categoryId, folderId)
  } catch (error: any) {
    return { status: 'error', csvId: parseInt(row.id), error: error.message }
  }
}

async function importCSVParallel(csvPath: string, product: string) {
  console.log(`\n📂 ${product.toUpperCase()}: ${path.basename(csvPath)}`)

  const content = fs.readFileSync(csvPath, 'utf-8')
  const rows: CsvRow[] = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    relax_quotes: true
  })

  console.log(`  📊 ${rows.length.toLocaleString()}개 문서 발견`)

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  // 배치로 나누어 병렬 처리
  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE)

    // 배치 병렬 처리
    const results = await Promise.all(
      batch.map(row => processDocument(row, product))
    )

    // 결과 집계
    results.forEach(result => {
      if (result.status === 'success') successCount++
      else if (result.status === 'skip') skipCount++
      else errorCount++
    })

    // 진행 상황 출력
    const processed = Math.min(i + BATCH_SIZE, rows.length)
    process.stdout.write(
      `\r  [${processed}/${rows.length}] ` +
      `✅ ${successCount} ⏭️  ${skipCount} ❌ ${errorCount}`
    )
  }

  console.log(`\n  ✅ 완료: 성공 ${successCount.toLocaleString()}, 스킵 ${skipCount.toLocaleString()}, 실패 ${errorCount.toLocaleString()}`)

  return { successCount, skipCount, errorCount }
}

async function main() {
  console.log('🚀 전체 제품 병렬 임포트 시작\n')
  console.log('=' .repeat(60))
  console.log('📋 전략: 영문 원본만 저장 → 번역은 나중에')
  console.log(`⚡ 병렬 처리: ${BATCH_SIZE}개씩 동시 처리`)
  console.log('📦 대상: Freshdesk, Freshservice, Freshsales, Freshchat, Freshcaller')
  console.log('=' .repeat(60))

  const startTime = Date.now()
  let totalSuccess = 0
  let totalSkip = 0
  let totalError = 0

  const products = [
    {
      name: 'freshdesk',
      files: ['data/freshdesk/merged_articles_links_replaced_freshdesk.csv']
    },
    {
      name: 'freshservice',
      files: [
        'data/freshservice/merged_articles_links_replaced_freshservice_part1.csv',
        'data/freshservice/merged_articles_links_replaced_freshservice_part2.csv',
        'data/freshservice/merged_articles_links_replaced_freshservice_part3.csv',
        'data/freshservice/merged_articles_links_replaced_freshservice_part4.csv',
        'data/freshservice/merged_articles_links_replaced_freshservice_part5.csv'
      ]
    },
    {
      name: 'freshsales',
      files: ['data/Freshsales/merged_articles_links_replaced_freshsales.csv']
    },
    {
      name: 'freshchat',
      files: ['data/Freshchat/merged_articles_links_replaced_freshchat.csv']
    },
    {
      name: 'freshcaller',
      files: ['data/Freshcaller/merged_articles_links_replaced_freshcaller.csv']
    }
  ]

  for (const product of products) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`📦 ${product.name.toUpperCase()} 처리 (${product.files.length}개 파일)`)
    console.log('='.repeat(60))

    for (const file of product.files) {
      const filePath = path.join(process.cwd(), file)

      if (!fs.existsSync(filePath)) {
        console.log(`⚠️  파일 없음: ${file}`)
        continue
      }

      const result = await importCSVParallel(filePath, product.name)
      totalSuccess += result.successCount
      totalSkip += result.skipCount
      totalError += result.errorCount
    }
  }

  const endTime = Date.now()
  const totalSeconds = Math.floor((endTime - startTime) / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const remainingSeconds = totalSeconds % 60

  console.log('\n\n' + '='.repeat(60))
  console.log('📊 전체 임포트 완료 통계')
  console.log('='.repeat(60))
  console.log(`✅ 성공: ${totalSuccess.toLocaleString()}건`)
  console.log(`⏭️  스킵: ${totalSkip.toLocaleString()}건 (이미 존재)`)
  console.log(`❌ 실패: ${totalError.toLocaleString()}건`)
  console.log(`📊 총계: ${(totalSuccess + totalSkip + totalError).toLocaleString()}건`)
  console.log(`⏱️  소요 시간: ${totalMinutes}분 ${remainingSeconds}초`)
  console.log(`⚡ 병렬 효율: ${BATCH_SIZE}x 배치 처리`)
  console.log('='.repeat(60))

  console.log('\n✅ 전체 영문 원본 데이터 구축 완료!')
  console.log('\n📝 다음 단계:')
  console.log('  1. npx tsx scripts/data/check-db-status.ts')
  console.log('     → 제품별/카테고리별 통계 확인')
  console.log('  2. 중요 카테고리 우선순위 결정')
  console.log('  3. 우선순위별 체계적 번역 시작')
}

main().catch(console.error)
