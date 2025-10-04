#!/usr/bin/env tsx
/**
 * Phase 2.1: Extract Pilot Data
 *
 * Filters Freshdesk FAQ > Ticketing Workflow documents from CSV
 * Expected: ~97 documents
 */

import Papa from 'papaparse'
import fs from 'fs'
import path from 'path'

interface CSVRow {
  id: string
  title: string
  description: string
  desc_un_html: string
  category_name: string
  category_slug: string
  folder_name: string
  folder_slug: string
  slug: string
  path: string
  tags: string
  'seo_data-meta_title': string
  'seo-data-meta_description': string
  'seo-data-meta_keywords': string
  created_at: string
  updated_at: string
}

async function extractPilotData() {
  console.log('🚀 파일럿 데이터 추출 시작...\n')

  // Read CSV
  const csvPath = path.join(process.cwd(), 'data/freshdesk/merged_articles_links_replaced_freshdesk.csv')

  if (!fs.existsSync(csvPath)) {
    console.error(`❌ CSV 파일을 찾을 수 없습니다: ${csvPath}`)
    process.exit(1)
  }

  const csvFile = fs.readFileSync(csvPath, 'utf-8')

  const { data, errors } = Papa.parse<CSVRow>(csvFile, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim()
  })

  if (errors.length > 0) {
    console.error('❌ CSV 파싱 에러:', errors)
    process.exit(1)
  }

  console.log(`📊 전체 문서: ${data.length}건`)

  // Filter: Freshdesk FAQ > Ticketing Workflow
  const pilotData = data.filter(row => {
    const isTarget = row.category_slug === 'freshdesk-faq' &&
                     row.folder_slug === 'ticketing-workflow'

    if (isTarget) {
      console.log(`  ✓ [${row.id}] ${row.title}`)
    }

    return isTarget
  })

  console.log(`\n✅ 파일럿 데이터: ${pilotData.length}건\n`)

  // Category & Folder 정보 확인
  if (pilotData.length > 0) {
    const sample = pilotData[0]
    console.log('📁 Category:', sample.category_name, `(${sample.category_slug})`)
    console.log('📂 Folder:', sample.folder_name, `(${sample.folder_slug})`)
    console.log('')
  }

  // Save pilot CSV
  const outputDir = path.join(process.cwd(), 'data/pilot')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const outputPath = path.join(outputDir, 'pilot-data.csv')
  const pilotCSV = Papa.unparse(pilotData)
  fs.writeFileSync(outputPath, pilotCSV)

  console.log(`💾 파일럿 CSV 저장: ${outputPath}`)
  console.log(`\n🎉 추출 완료!`)

  // Statistics
  console.log('\n📊 통계:')
  console.log(`  - 전체 문서: ${data.length}건`)
  console.log(`  - 파일럿 문서: ${pilotData.length}건`)
  console.log(`  - 선택률: ${((pilotData.length / data.length) * 100).toFixed(1)}%`)
}

extractPilotData().catch(console.error)
