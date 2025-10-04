import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkTranslationStatus() {
  console.log('\n📊 HTML 번역 상태 확인...\n')

  for (const product of ['freshdesk', 'freshservice']) {
    const { data: docs, error } = await supabase
      .from('documents')
      .select('id, csv_id, title_en, content_html_en, content_html_ko')
      .eq('product', product)
      .not('title_ko', 'is', null)  // 번역된 문서만
      .order('csv_id')

    if (error || !docs) {
      console.error(`❌ ${product} 조회 실패:`, error)
      continue
    }

    const stats = {
      total: docs.length,
      untranslated: 0,
      translated: 0,
      failed: 0,
      imgPreserved: 0,
      imgLost: 0
    }

    const untranslatedDocs: Array<{csv_id: number, title: string, length: number}> = []
    const failedDocs: Array<{csv_id: number, title: string, reason: string}> = []

    docs.forEach(doc => {
      const hasTranslation = doc.content_html_ko && doc.content_html_ko !== doc.content_html_en

      if (!hasTranslation) {
        stats.untranslated++
        untranslatedDocs.push({
          csv_id: doc.csv_id,
          title: doc.title_en.substring(0, 50),
          length: doc.content_html_en.length
        })
      } else {
        stats.translated++

        // 번역 품질 체크
        const lengthRatio = doc.content_html_ko.length / doc.content_html_en.length
        const originalImgCount = (doc.content_html_en.match(/<img/g) || []).length
        const translatedImgCount = (doc.content_html_ko.match(/<img/g) || []).length

        // 이미지 검증
        if (originalImgCount > 0) {
          if (originalImgCount === translatedImgCount) {
            stats.imgPreserved++
          } else {
            stats.imgLost++
            stats.failed++
            failedDocs.push({
              csv_id: doc.csv_id,
              title: doc.title_en.substring(0, 50),
              reason: `이미지 누락 (${originalImgCount} → ${translatedImgCount})`
            })
          }
        } else {
          // 이미지가 없는 문서는 보존된 것으로 카운트
          stats.imgPreserved++
        }

        // 길이 검증
        if (lengthRatio < 0.5) {
          stats.failed++
          failedDocs.push({
            csv_id: doc.csv_id,
            title: doc.title_en.substring(0, 50),
            reason: `번역 길이 부족 (${(lengthRatio * 100).toFixed(1)}%)`
          })
        }
      }
    })

    console.log(`\n=== ${product.toUpperCase()} ===`)
    console.log(`총 문서: ${stats.total}건`)
    console.log(`✅ 번역 완료: ${stats.translated}건 (${((stats.translated / stats.total) * 100).toFixed(1)}%)`)
    console.log(`⏳ 미번역: ${stats.untranslated}건`)
    console.log(`❌ 번역 실패: ${stats.failed}건`)

    if (stats.imgPreserved + stats.imgLost > 0) {
      console.log(`\n이미지 보존 상태:`)
      console.log(`  ✅ 보존됨: ${stats.imgPreserved}건`)
      console.log(`  ❌ 손실됨: ${stats.imgLost}건`)
    }

    // 미번역 문서 리스트 (상위 10개)
    if (untranslatedDocs.length > 0) {
      console.log(`\n미번역 문서 (상위 10개):`)
      untranslatedDocs.slice(0, 10).forEach(doc => {
        console.log(`  - [${doc.csv_id}] ${doc.title} (${doc.length.toLocaleString()}자)`)
      })
      if (untranslatedDocs.length > 10) {
        console.log(`  ... 외 ${untranslatedDocs.length - 10}건`)
      }
    }

    // 실패한 문서 리스트
    if (failedDocs.length > 0) {
      console.log(`\n번역 실패 문서:`)
      failedDocs.forEach(doc => {
        console.log(`  - [${doc.csv_id}] ${doc.title}`)
        console.log(`    이유: ${doc.reason}`)
      })
    }

    console.log('\n' + '─'.repeat(60))
  }

  console.log('\n💡 다음 단계:')
  console.log('  1. 미번역 문서가 있다면: npx tsx scripts/data/07-translate-html-pipeline.ts')
  console.log('  2. 번역 실패 문서 재처리: csv_id 목록으로 수동 재실행')
  console.log('  3. 모든 번역 완료 후: npx tsx scripts/data/04-generate-embeddings.ts\n')
}

checkTranslationStatus().catch(console.error)
