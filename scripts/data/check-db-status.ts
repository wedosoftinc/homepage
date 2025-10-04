import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkStatus() {
  console.log('📊 현재 DB 상태 확인\n')

  const products = ['freshdesk', 'freshservice', 'freshsales', 'freshchat', 'freshcaller']

  for (const product of products) {
    const { count: total } = await supabase
      .from('documents')
      .select('*', { count: 'exact', head: true })
      .eq('product', product)

    const { count: translated } = await supabase
      .from('documents')
      .select('*', { count: 'exact', head: true })
      .eq('product', product)
      .not('content_html_ko', 'is', null)
      .neq('content_html_ko', supabase.from('documents').select('content_html_en'))

    console.log(`${product.toUpperCase()}:`)
    console.log(`  총 문서: ${total || 0}개`)
    console.log(`  번역 완료: ${translated || 0}개`)
    console.log(`  번역률: ${total ? ((translated || 0) / total * 100).toFixed(1) : 0}%\n`)
  }

  // 전체 통계
  const { count: totalAll } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })

  console.log('='.repeat(50))
  console.log(`전체 문서: ${totalAll || 0}개`)
  console.log('='.repeat(50))
}

checkStatus().catch(console.error)
