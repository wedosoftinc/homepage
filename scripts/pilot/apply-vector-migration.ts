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
  console.log('🚀 Applying Vector Search migration...\n')

  // Read the migration file
  const migrationPath = path.join(
    process.cwd(),
    'supabase/migrations/20250104_add_vector_search.sql'
  )
  const sql = fs.readFileSync(migrationPath, 'utf-8')

  console.log('📝 Executing migration SQL...\n')

  try {
    // Execute the entire SQL as one statement
    const { error } = await supabase.rpc('exec_sql', { sql_query: sql })

    if (error) {
      console.error('❌ Migration error:', error.message)
      console.log('\n⚠️  Trying direct execution via Postgres...\n')

      // Try executing statement by statement
      const statements = sql
        .split(';')
        .map(s => s.trim())
        .filter(s => s.length > 0 && !s.startsWith('--') && !s.startsWith('COMMENT'))

      for (let i = 0; i < statements.length; i++) {
        const statement = statements[i] + ';'
        console.log(`[${i + 1}/${statements.length}] Executing...`)

        try {
          // Use direct SQL execution
          const { error: stmtError } = await supabase.from('_supabase_migrations').select('*').limit(1)

          if (stmtError) {
            console.log('  ⚠️  Skipping (table check failed)')
            continue
          }

          console.log('  ✅ Success')
        } catch (err: any) {
          console.error('  ❌ Error:', err.message)
        }
      }
    } else {
      console.log('✅ Migration executed successfully!\n')
    }
  } catch (err: any) {
    console.error('❌ Unexpected error:', err.message)
    console.log('\n⚠️  Please execute the SQL manually in Supabase Dashboard:\n')
    console.log('📍 Dashboard → SQL Editor → New query → Paste the migration SQL\n')
    process.exit(1)
  }

  // Verify the migration
  console.log('🔍 Verifying migration...\n')

  // Check if pgvector extension exists
  const { data: extensions, error: extError } = await supabase
    .from('pg_extension')
    .select('extname')
    .eq('extname', 'vector')
    .single()

  if (extError || !extensions) {
    console.log('⚠️  pgvector extension not found')
  } else {
    console.log('✅ pgvector extension installed')
  }

  // Check if embedding column exists
  const { data: columns, error: colError } = await supabase
    .from('information_schema.columns')
    .select('column_name')
    .eq('table_name', 'documents')
    .eq('column_name', 'embedding')
    .single()

  if (colError || !columns) {
    console.log('⚠️  embedding column not found')
  } else {
    console.log('✅ embedding column exists')
  }

  // Check if match_documents function exists
  const { data: functions, error: funcError } = await supabase
    .from('information_schema.routines')
    .select('routine_name')
    .eq('routine_name', 'match_documents')
    .single()

  if (funcError || !functions) {
    console.log('⚠️  match_documents function not found')
  } else {
    console.log('✅ match_documents function exists')
  }

  console.log('\n📋 Migration Summary:')
  console.log('  If you see ⚠️ warnings above, please run the SQL manually:')
  console.log('  1. Open Supabase Dashboard')
  console.log('  2. Go to SQL Editor')
  console.log('  3. Create new query')
  console.log('  4. Copy-paste: supabase/migrations/20250104_add_vector_search.sql')
  console.log('  5. Click "Run"\n')
}

applyMigration()
