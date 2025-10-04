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

interface Document {
  csv_id: number
  product: 'freshdesk' | 'freshservice'
  title_en: string
  content_html: string
  content_text_en: string
  category_name: string
  folder_name: string
  category_slug: string
  folder_slug: string
  short_slug: string
  full_path: string
  published: boolean
}

async function ensureCategory(product: string, categoryName: string, categorySlug: string) {
  // 기존 카테고리 확인
  const { data: existing } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .eq('product', product)
    .single()

  if (existing) {
    return existing.id
  }

  // 새 카테고리 생성
  const { data, error } = await supabase
    .from('categories')
    .insert({
      product,
      slug: categorySlug,
      name_ko: categoryName, // 번역 전이므로 영문 그대로
      name_en: categoryName,
      published: true
    })
    .select('id')
    .single()

  if (error) {
    console.error(`❌ 카테고리 생성 실패 [${categoryName}]:`, error)
    throw error
  }

  console.log(`✅ 카테고리 생성: ${categoryName} (${product})`)
  return data.id
}

async function ensureFolder(
  product: string,
  categoryId: string,
  folderName: string,
  folderSlug: string
) {
  // 기존 폴더 확인
  const { data: existing } = await supabase
    .from('folders')
    .select('id')
    .eq('slug', folderSlug)
    .eq('category_id', categoryId)
    .eq('product', product)
    .single()

  if (existing) {
    return existing.id
  }

  // 새 폴더 생성
  const { data, error } = await supabase
    .from('folders')
    .insert({
      product,
      category_id: categoryId,
      slug: folderSlug,
      name_ko: folderName, // 번역 전이므로 영문 그대로
      name_en: folderName,
      published: true
    })
    .select('id')
    .single()

  if (error) {
    console.error(`❌ 폴더 생성 실패 [${folderName}]:`, error)
    throw error
  }

  console.log(`✅ 폴더 생성: ${folderName} (${product})`)
  return data.id
}

async function importDocument(doc: Document, categoryId: string, folderId: string) {
  // 기존 문서 확인 (csv_id와 product로 중복 체크)
  const { data: existing } = await supabase
    .from('documents')
    .select('id')
    .eq('csv_id', doc.csv_id)
    .eq('product', doc.product)
    .single()

  if (existing) {
    console.log(`⏭️  [${doc.csv_id}] 이미 존재: ${doc.title_en}`)
    return
  }

  // 새 문서 생성
  const { error } = await supabase
    .from('documents')
    .insert({
      csv_id: doc.csv_id,
      product: doc.product,
      category_id: categoryId,
      folder_id: folderId,
      slug: doc.short_slug,  // slug는 NOT NULL
      short_slug: doc.short_slug,
      full_path: doc.full_path,

      // 영문 (원본)
      title_en: doc.title_en,
      content_html_en: doc.content_html,
      content_text_en: doc.content_text_en,

      // 한글 (나중에 번역)
      title_ko: null,
      content_html_ko: null,
      content_text_ko: null,

      // 검색 벡터 (나중에 생성)
      search_vector_ko: null,

      published: doc.published
    })

  if (error) {
    console.error(`❌ [${doc.csv_id}] 임포트 실패:`, error)
    throw error
  }

  console.log(`✅ [${doc.csv_id}] ${doc.title_en.substring(0, 60)}...`)
}

async function main() {
  console.log('🚀 샘플 데이터 Supabase 임포트 시작...\n')

  // JSON 파일 읽기
  const jsonPath = path.join(process.cwd(), 'data/sample/sample-100.json')
  const docs: Document[] = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

  console.log(`📊 총 ${docs.length}건 임포트 시작\n`)

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  // 카테고리/폴더 캐시
  const categoryCache = new Map<string, string>()
  const folderCache = new Map<string, string>()

  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i]
    console.log(`\n[${i + 1}/${docs.length}] 처리 중...`)

    try {
      // 카테고리 확보
      const catKey = `${doc.product}:${doc.category_slug}`
      let categoryId = categoryCache.get(catKey)

      if (!categoryId) {
        categoryId = await ensureCategory(doc.product, doc.category_name, doc.category_slug)
        categoryCache.set(catKey, categoryId)
      }

      // 폴더 확보
      const folderKey = `${doc.product}:${categoryId}:${doc.folder_slug}`
      let folderId = folderCache.get(folderKey)

      if (!folderId) {
        folderId = await ensureFolder(doc.product, categoryId, doc.folder_name, doc.folder_slug)
        folderCache.set(folderKey, folderId)
      }

      // 문서 임포트
      const { data: existing } = await supabase
        .from('documents')
        .select('id')
        .eq('csv_id', doc.csv_id)
        .eq('product', doc.product)
        .single()

      if (existing) {
        console.log(`⏭️  [${doc.csv_id}] 이미 존재`)
        skipCount++
      } else {
        await importDocument(doc, categoryId, folderId)
        successCount++
      }

    } catch (error: any) {
      console.error(`❌ 오류 발생:`, error.message)
      errorCount++
    }
  }

  console.log('\n\n============================================================')
  console.log('📊 임포트 완료 통계:')
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`⏭️  스킵: ${skipCount}건 (이미 존재)`)
  console.log(`❌ 실패: ${errorCount}건`)
  console.log(`📊 성공률: ${((successCount / docs.length) * 100).toFixed(1)}%`)
  console.log('============================================================')
  console.log('\n🎉 Supabase 임포트 완료!')
}

main().catch(console.error)
