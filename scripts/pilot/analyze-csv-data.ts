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
  slug: string
  path: string
}

async function analyzeFreshdesk() {
  const csvPath = path.join(process.cwd(), 'data/freshdesk/merged_articles_links_replaced_freshdesk.csv')
  const csvContent = fs.readFileSync(csvPath, 'utf-8')

  const { data } = Papa.parse<CSVRow>(csvContent, {
    header: true,
    skipEmptyLines: true
  })

  console.log('📊 Freshdesk CSV 분석:')
  console.log('- 전체 행:', data.length)

  // Status별 카운트
  const statusCounts = data.reduce((acc, row) => {
    acc[row.status] = (acc[row.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  console.log('- Status별 카운트:', statusCounts)

  // Status=2 (published)
  const published = data.filter(row => row.status === '2')
  console.log('- Status=2 (Published):', published.length)

  // Visibility별 카운트
  const visibilityCounts = published.reduce((acc, row) => {
    acc[row.visibility] = (acc[row.visibility] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  console.log('- Visibility별 카운트 (Status=2만):', visibilityCounts)

  // 샘플 데이터 확인
  console.log('\n샘플 데이터 (처음 3개):')
  published.slice(0, 3).forEach((row, idx) => {
    console.log(`\n${idx + 1}. [${row.id}] ${row.title}`)
    console.log(`   Category: ${row.category_name}`)
    console.log(`   Folder: ${row.folder_name}`)
    console.log(`   Status: ${row.status}, Visibility: ${row.visibility}`)
  })
}

async function analyzeFreshservice() {
  console.log('\n\n📊 Freshservice CSV 분석:')

  const parts = [1, 2, 3, 4, 5]
  let totalCount = 0
  let totalPublished = 0

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

    const published = data.filter(row => row.status === '2')

    console.log(`- Part ${part}: 전체 ${data.length}행, Published ${published.length}건`)
    totalCount += data.length
    totalPublished += published.length
  }

  console.log(`\n총계: 전체 ${totalCount}행, Published ${totalPublished}건`)
}

async function main() {
  try {
    await analyzeFreshdesk()
    await analyzeFreshservice()

    console.log('\n\n✅ 분석 완료!')
  } catch (error) {
    console.error('❌ 에러:', error)
  }
}

main()
