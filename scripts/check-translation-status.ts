import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkStatus() {
  const { data: all, error: allError } = await supabase
    .from('documents')
    .select('product, content_html_ko, content_html_en, has_img_en, has_img_ko, csv_id')
    .eq('product', 'freshservice')
    .order('csv_id')
    .limit(50)

  if (allError || !all) {
    console.error('Error:', allError)
    return
  }

  const stats = {
    total: all.length,
    has_html_ko: 0,
    translated: 0,
    img_preserved: 0,
    img_lost: 0
  }

  const failed: number[] = []

  all.forEach(doc => {
    if (doc.content_html_ko) stats.has_html_ko++
    if (doc.content_html_ko && doc.content_html_ko !== doc.content_html_en) {
      stats.translated++
    } else if (doc.content_html_ko === doc.content_html_en) {
      failed.push(doc.csv_id)
    }
    if (doc.has_img_en && doc.has_img_ko) stats.img_preserved++
    if (doc.has_img_en && !doc.has_img_ko) stats.img_lost++
  })

  console.log('\n📊 Freshservice 번역 상태 (최초 50건):')
  console.log(`총 문서: ${stats.total}`)
  console.log(`HTML 번역됨: ${stats.translated}`)
  console.log(`번역 실패: ${failed.length}`)
  console.log(`이미지 보존: ${stats.img_preserved}`)
  console.log(`이미지 손실: ${stats.img_lost}`)

  if (failed.length > 0) {
    console.log(`\n실패한 문서 csv_id: ${failed.join(', ')}`)
  }
}

checkStatus()
