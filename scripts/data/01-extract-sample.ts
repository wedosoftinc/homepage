import * as fs from 'fs'
import * as path from 'path'
import Papa from 'papaparse'

interface CSVRow {
  id: string
  title: string
  description: string
  status: string
  visibility: string
  desc_un_html: string
  category_name: string
  folder_name: string
  category_slug: string
  folder_slug: string
  slug: string
  path: string
}

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

async function extractFreshdesk(count: number): Promise<Document[]> {
  const csvPath = path.join(process.cwd(), 'data/freshdesk/merged_articles_links_replaced_freshdesk.csv')
  const csvContent = fs.readFileSync(csvPath, 'utf-8')

  const { data } = Papa.parse<CSVRow>(csvContent, {
    header: true,
    skipEmptyLines: true
  })

  // Status=2 (Published), Visibility=1 (Public)
  const published = data.filter(row => row.status === '2' && row.visibility === '1')

  console.log(`📥 Freshdesk: ${published.length}건 중 ${count}건 추출`)

  // 처음 N건 추출
  return published.slice(0, count).map(row => ({
    csv_id: parseInt(row.id),
    product: 'freshdesk',
    title_en: row.title,
    content_html: row.description,
    content_text_en: row.desc_un_html,
    category_name: row.category_name,
    folder_name: row.folder_name,
    category_slug: row.category_slug,
    folder_slug: row.folder_slug,
    short_slug: row.slug,
    full_path: row.path,
    published: true
  }))
}

async function extractFreshservice(count: number): Promise<Document[]> {
  const parts = [1, 2, 3, 4, 5]
  let allDocs: Document[] = []

  for (const part of parts) {
    const csvPath = path.join(
      process.cwd(),
      `data/freshservice/merged_articles_links_replaced_freshservice_part${part}.csv`
    )

    const csvContent = fs.readFileSync(csvPath, 'utf-8')
    const { data } = Papa.parse<CSVRow>(csvContent, {
      header: true,
      skipEmptyLines: true
    })

    // Status=2 (Published), Visibility=1 (Public)
    const published = data.filter(row => row.status === '2' && row.visibility === '1')

    const docs = published.map(row => ({
      csv_id: parseInt(row.id),
      product: 'freshservice' as const,
      title_en: row.title,
      content_html: row.description,
      content_text_en: row.desc_un_html,
      category_name: row.category_name,
      folder_name: row.folder_name,
      category_slug: row.category_slug,
      folder_slug: row.folder_slug,
      short_slug: row.slug,
      full_path: row.path,
      published: true
    }))

    allDocs = allDocs.concat(docs)
  }

  console.log(`📥 Freshservice: ${allDocs.length}건 중 ${count}건 추출`)

  // 처음 N건 추출
  return allDocs.slice(0, count)
}

async function main() {
  const SAMPLE_SIZE = 100
  const FRESHDESK_COUNT = 50
  const FRESHSERVICE_COUNT = 50

  console.log('🚀 샘플 데이터 추출 시작...\n')
  console.log(`목표: ${SAMPLE_SIZE}건 (Freshdesk ${FRESHDESK_COUNT}건 + Freshservice ${FRESHSERVICE_COUNT}건)\n`)

  // 추출
  const freshdeskDocs = await extractFreshdesk(FRESHDESK_COUNT)
  const freshserviceDocs = await extractFreshservice(FRESHSERVICE_COUNT)

  const allDocs = [...freshdeskDocs, ...freshserviceDocs]

  console.log(`\n✅ 총 ${allDocs.length}건 추출 완료\n`)

  // JSON으로 저장
  const outputDir = path.join(process.cwd(), 'data/sample')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const outputPath = path.join(outputDir, 'sample-100.json')
  fs.writeFileSync(outputPath, JSON.stringify(allDocs, null, 2), 'utf-8')

  console.log(`💾 저장 완료: ${outputPath}`)
  console.log(`\n📊 샘플 통계:`)
  console.log(`- Freshdesk: ${freshdeskDocs.length}건`)
  console.log(`- Freshservice: ${freshserviceDocs.length}건`)
  console.log(`- 총계: ${allDocs.length}건`)

  // 샘플 출력
  console.log(`\n📝 샘플 데이터 (처음 3건):`)
  allDocs.slice(0, 3).forEach((doc, idx) => {
    console.log(`\n${idx + 1}. [${doc.product}] ${doc.title_en}`)
    console.log(`   Category: ${doc.category_name}`)
    console.log(`   Folder: ${doc.folder_name}`)
    console.log(`   Path: ${doc.full_path}`)
  })

  console.log('\n✨ 샘플 추출 완료!')
}

main().catch(console.error)
