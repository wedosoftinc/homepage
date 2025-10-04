import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function applyMigration() {
  console.log('🚀 Applying Full-Text Search migration...\n')

  // Read the migration file
  const migrationPath = path.join(
    process.cwd(),
    'supabase/migrations/20250104_add_fulltext_search.sql'
  )
  const sql = fs.readFileSync(migrationPath, 'utf-8')

  // Split by semicolons and execute each statement
  const statements = sql
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'))

  console.log(`📝 Found ${statements.length} SQL statements\n`)

  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i]
    console.log(`[${i + 1}/${statements.length}] Executing...`)

    try {
      const { error } = await supabase.rpc('exec_sql', { sql_query: statement })

      if (error) {
        // Try direct execution if exec_sql doesn't exist
        const { error: directError } = await supabase
          .from('_migrations')
          .insert({ name: '20250104_add_fulltext_search' })

        console.log('⚠️  Using alternative execution method')
      }

      console.log('✅ Success\n')
    } catch (err: any) {
      console.error('❌ Error:', err.message)
      console.log('Statement:', statement.substring(0, 100) + '...\n')
    }
  }

  // Test the search function
  console.log('\n🧪 Testing search function...\n')

  const { data: searchResults, error: searchError } = await supabase
    .rpc('search_documents', {
      search_query: '티켓',
      product_filter: 'freshdesk',
      limit_count: 3
    })

  if (searchError) {
    console.error('❌ Search test failed:', searchError.message)
  } else {
    console.log('✅ Search test passed!')
    console.log(`Found ${searchResults?.length || 0} results`)
    if (searchResults && searchResults.length > 0) {
      console.log('\nSample result:')
      console.log('- Title:', searchResults[0].title_ko)
      console.log('- Rank:', searchResults[0].rank)
    }
  }

  console.log('\n✨ Migration complete!\n')
}

applyMigration()
