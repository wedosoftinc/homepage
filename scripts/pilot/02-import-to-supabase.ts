#!/usr/bin/env tsx
/**
 * Phase 2.2: Import to Supabase
 *
 * Imports pilot data (Category, Folder, Documents) to Supabase
 */

import { createClient } from '@supabase/supabase-js'
import Papa from 'papaparse'
import fs from 'fs'
import path from 'path'
import { config } from 'dotenv'

// Load .env.local
config({ path: path.join(process.cwd(), '.env.local') })

interface CSVRow {
  id: string
  title: string
  description: string
  desc_un_html: string
  category_name: string
  category_slug: string
  folder_name: string
  folder_slug: string
  description_category: string
  description_folder: string
  slug: string
  path: string
  tags: string
  'seo_data-meta_title': string
  'seo-data-meta_description': string
  'seo-data-meta_keywords': string
}

async function importToSupabase() {
  console.log('🚀 Supabase 임포트 시작...\n')

  // Initialize Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Supabase 환경변수가 설정되지 않았습니다.')
    console.error('   NEXT_PUBLIC_SUPABASE_URL')
    console.error('   SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  // Load pilot CSV
  const csvPath = path.join(process.cwd(), 'data/pilot/pilot-data.csv')

  if (!fs.existsSync(csvPath)) {
    console.error(`❌ 파일럿 CSV를 찾을 수 없습니다: ${csvPath}`)
    console.error('   먼저 01-extract-pilot-data.ts를 실행하세요.')
    process.exit(1)
  }

  const csvFile = fs.readFileSync(csvPath, 'utf-8')
  const { data: rows } = Papa.parse<CSVRow>(csvFile, {
    header: true,
    skipEmptyLines: true
  })

  console.log(`📊 ${rows.length}건 임포트 준비\n`)

  // ============================================
  // Step 1: Create Category
  // ============================================

  console.log('📁 Step 1: Category 생성...')

  const categoryData = {
    name_en: 'Freshdesk FAQ',
    slug: 'freshdesk-faq',
    description_en: 'Frequently asked questions related to Freshdesk',
    display_order: 1
  }

  const { data: category, error: categoryError } = await supabase
    .from('categories')
    .upsert(categoryData, { onConflict: 'slug' })
    .select()
    .single()

  if (categoryError) {
    console.error('❌ Category 생성 실패:', categoryError)
    process.exit(1)
  }

  console.log(`✅ Category: ${category.name_en} (id: ${category.id})`)

  // ============================================
  // Step 2: Create Folder
  // ============================================

  console.log('\n📂 Step 2: Folder 생성...')

  const folderData = {
    category_id: category.id,
    name_en: 'Ticketing Workflow',
    slug: 'ticketing-workflow',
    description_en: 'Ticketing workflow and processes',
    display_order: 1
  }

  const { data: folder, error: folderError } = await supabase
    .from('folders')
    .upsert(folderData, { onConflict: 'category_id,slug' })
    .select()
    .maybeSingle()

  if (folderError) {
    console.error('❌ Folder 생성 실패:', folderError)
    process.exit(1)
  }

  console.log(`✅ Folder: ${folder.name_en} (id: ${folder.id})`)

  // ============================================
  // Step 3: Import Documents
  // ============================================

  console.log(`\n📄 Step 3: Documents 임포트 (${rows.length}건)...\n`)

  let successCount = 0
  let errorCount = 0

  for (const row of rows) {
    const doc = {
      csv_id: parseInt(row.id),
      product: 'freshdesk',
      category_id: category.id,
      folder_id: folder.id,

      // English
      title_en: row.title,
      content_html_en: row.description,
      content_text_en: row.desc_un_html,

      // SEO
      meta_title_en: row['seo_data-meta_title'] || null,
      meta_description_en: row['seo-data-meta_description'] || null,
      meta_keywords: row['seo-data-meta_keywords']
        ? row['seo-data-meta_keywords'].split(',').map(k => k.trim()).filter(Boolean)
        : null,

      // URL
      slug: row.slug,
      full_path: row.path.replace('.mdx', ''),

      // Tags
      tags: row.tags ? row.tags.split(',').map(t => t.trim()).filter(Boolean) : null,

      // Translation status
      translation_quality: 0.0,
      needs_review: true,
      published: true
    }

    const { error: docError } = await supabase
      .from('documents')
      .upsert(doc, { onConflict: 'csv_id' })

    if (docError) {
      console.error(`❌ [${row.id}] ${row.title}`)
      console.error(`   Error: ${docError.message}`)
      errorCount++
    } else {
      console.log(`✅ [${row.id}] ${row.title}`)
      successCount++
    }
  }

  // ============================================
  // Summary
  // ============================================

  console.log('\n' + '='.repeat(60))
  console.log('📊 임포트 완료 통계:')
  console.log('='.repeat(60))
  console.log(`✅ 성공: ${successCount}건`)
  console.log(`❌ 실패: ${errorCount}건`)
  console.log(`📊 성공률: ${((successCount / rows.length) * 100).toFixed(1)}%`)
  console.log('='.repeat(60))

  console.log('\n🎉 Supabase 임포트 완료!')
}

importToSupabase().catch(console.error)
