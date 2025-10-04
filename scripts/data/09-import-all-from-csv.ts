import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase 환경변수가 설정되지 않았습니다.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

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

// CSV 파싱 함수 (간단한 파서 - 복잡한 경우 csv-parser 라이브러리 사용 권장)
function parseCSV(content: string): CsvRow[] {
  const lines = content.split('\n')
  const headers = lines[0].split(',')

  const rows: CsvRow[] = []

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    // CSV 파싱 (따옴표 처리 포함)
    const values: string[] = []
    let currentValue = ''
    let inQuotes = false

    for (let j = 0; j < line.length; j++) {
      const char = line[j]

      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue)
        currentValue = ''
      } else {
        currentValue += char
      }
    }
    values.push(currentValue) // 마지막 값

    // 헤더와 매칭
    const row: any = {}
    headers.forEach((header, index) => {
      row[header.trim()] = values[index]?.trim() || ''
    })

    rows.push(row as CsvRow)
  }

  return rows
}

async function ensureCategory(product: string, categoryName: string, categorySlug: string) {
  const { data: existing } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .eq('product', product)
    .maybeSingle()

  if (existing) {
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
    console.error(`❌ 카테고리 생성 실패 [${categoryName}]:`, error)
    throw error
  }

  return data.id
}

async function ensureFolder(
  product: string,
  categoryId: string,
  folderName: string,
  folderSlug: string
) {
  const { data: existing } = await supabase
    .from('folders')
    .select('id')
    .eq('slug', folderSlug)
    .eq('category_id', categoryId)
    .eq('product', product)
    .maybeSingle()

  if (existing) {
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
    console.error(`❌ 폴더 생성 실패 [${folderName}]:`, error)
    throw error
  }

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
    console.error(`❌ [${csvId}] 임포트 실패:`, error)
    return { status: 'error', csvId, error: error.message }
  }

  return { status: 'success', csvId }
}

async function importCSV(csvPath: string, product: string) {
  console.log(`\n📂 ${product.toUpperCase()} CSV 임포트 시작: ${path.basename(csvPath)}`)

  const content = fs.readFileSync(csvPath, 'utf-8')
  const rows = parseCSV(content)

  console.log(`  📊 총 ${rows.length}개 행 발견\n`)

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  // 카테고리/폴더 캐시
  const categoryCache = new Map<string, string>()
  const folderCache = new Map<string, string>()

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]

    if ((i + 1) % 100 === 0) {
      console.log(`  [${i + 1}/${rows.length}] 진행 중... (성공: ${successCount}, 스킵: ${skipCount}, 실패: ${errorCount})`)
    }

    try {
      // 카테고리 확보
      const catKey = `${product}:${row.category_slug}`
      let categoryId = categoryCache.get(catKey)

      if (!categoryId) {
        categoryId = await ensureCategory(product, row.category_name, row.category_slug)
        categoryCache.set(catKey, categoryId)
      }

      // 폴더 확보
      const folderKey = `${product}:${categoryId}:${row.folder_slug}`
      let folderId = folderCache.get(folderKey)

      if (!folderId) {
        folderId = await ensureFolder(product, categoryId, row.folder_name, row.folder_slug)
        folderCache.set(folderKey, folderId)
      }

      // 문서 임포트
      const result = await importDocument(row, product, categoryId, folderId)

      if (result.status === 'success') {
        successCount++
      } else if (result.status === 'skip') {
        skipCount++
      } else {
        errorCount++
      }

    } catch (error: any) {
      console.error(`  ❌ 행 ${i + 1} 처리 실패:`, error.message)
      errorCount++
    }
  }

  console.log(`\n  ✅ ${product.toUpperCase()} 완료: 성공 ${successCount}, 스킵 ${skipCount}, 실패 ${errorCount}`)

  return { successCount, skipCount, errorCount }
}

async function main() {
  console.log('🚀 전체 CSV 데이터 임포트 시작...\n')
  console.log('📋 전략: 영문 원본만 저장 → 번역은 나중에 체계적으로 진행\n')

  const startTime = Date.now()
  let totalSuccess = 0
  let totalSkip = 0
  let totalError = 0

  // 1. Freshdesk 임포트
  const freshdeskPath = path.join(process.cwd(), 'data/freshdesk/merged_articles_links_replaced_freshdesk.csv')
  const freshdeskResult = await importCSV(freshdeskPath, 'freshdesk')
  totalSuccess += freshdeskResult.successCount
  totalSkip += freshdeskResult.skipCount
  totalError += freshdeskResult.errorCount

  // 2. Freshservice 임포트 (5개 파트)
  const freshserviceParts = [1, 2, 3, 4, 5]
  for (const part of freshserviceParts) {
    const partPath = path.join(
      process.cwd(),
      `data/freshservice/merged_articles_links_replaced_freshservice_part${part}.csv`
    )
    const result = await importCSV(partPath, 'freshservice')
    totalSuccess += result.successCount
    totalSkip += result.skipCount
    totalError += result.errorCount
  }

  const endTime = Date.now()
  const totalSeconds = Math.floor((endTime - startTime) / 1000)

  console.log('\n\n' + '='.repeat(60))
  console.log('📊 전체 임포트 완료 통계:')
  console.log(`✅ 성공: ${totalSuccess.toLocaleString()}건`)
  console.log(`⏭️  스킵: ${totalSkip.toLocaleString()}건 (이미 존재)`)
  console.log(`❌ 실패: ${totalError.toLocaleString()}건`)
  console.log(`⏱️  소요 시간: ${Math.floor(totalSeconds / 60)}분 ${totalSeconds % 60}초`)
  console.log('='.repeat(60))

  console.log('\n🎉 전체 영문 원본 데이터 임포트 완료!')
  console.log('\n📝 다음 단계:')
  console.log('  1. npx tsx scripts/data/check-db-status.ts - 임포트 결과 확인')
  console.log('  2. 카테고리/폴더별 우선순위 정하기')
  console.log('  3. npx tsx scripts/data/08-translate-parallel.ts - 우선순위별 번역 시작')
}

main().catch(console.error)
