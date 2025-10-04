import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkCategories() {
  // 카테고리와 문서 수 확인
  const { data: categories } = await supabase
    .from('categories')
    .select('id, name_en, name_ko, slug')
    .order('name_en')

  console.log('\n📚 Categories:')

  for (const cat of categories || []) {
    const { count } = await supabase
      .from('documents')
      .select('*', { count: 'exact', head: true })
      .eq('category_id', cat.id)
      .eq('product', 'freshdesk')
      .eq('published', true)

    console.log(`\n${cat.name_ko || cat.name_en} (${cat.slug})`)
    console.log(`  - ${count} documents`)

    // 폴더 확인
    const { data: folders } = await supabase
      .from('folders')
      .select('id, name_en, name_ko, slug')
      .eq('category_id', cat.id)

    if (folders && folders.length > 0) {
      console.log(`  - ${folders.length} folders:`)
      for (const folder of folders) {
        const { count: folderCount } = await supabase
          .from('documents')
          .select('*', { count: 'exact', head: true })
          .eq('folder_id', folder.id)
          .eq('product', 'freshdesk')
          .eq('published', true)

        console.log(`    • ${folder.name_ko || folder.name_en} (${folderCount} docs)`)
      }
    }
  }
}

checkCategories()
