import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const openaiKey = process.env.OPENAI_API_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  process.exit(1)
}

if (!openaiKey) {
  console.error('❌ Missing OPENAI_API_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)
const openai = new OpenAI({ apiKey: openaiKey })

interface Document {
  id: string
  csv_id: number
  title_ko: string | null
  title_en: string | null
  content_text_ko: string | null
  product: string
  embedding: number[] | null
}

async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text.substring(0, 8000) // OpenAI limit
    })

    return response.data[0].embedding
  } catch (error: any) {
    console.error('OpenAI API error:', error.message)
    throw error
  }
}

async function generateEmbeddings() {
  console.log('🚀 Starting embedding generation...\n')

  // 1. Fetch all published documents without embeddings
  console.log('📝 Fetching documents...')
  const { data: documents, error: fetchError } = await supabase
    .from('documents')
    .select('id, csv_id, title_ko, title_en, content_text_ko, product, embedding')
    .eq('published', true)
    .is('embedding', null)

  if (fetchError) {
    console.error('❌ Error fetching documents:', fetchError)
    return
  }

  if (!documents || documents.length === 0) {
    console.log('✅ All documents already have embeddings!')
    return
  }

  console.log(`Found ${documents.length} documents without embeddings\n`)

  // 2. Generate embeddings for each document
  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < documents.length; i++) {
    const doc = documents[i] as Document
    console.log(`[${i + 1}/${documents.length}] Processing: ${doc.product} - ${doc.title_ko || doc.title_en}`)

    try {
      // Combine title and content for embedding
      const title = doc.title_ko || doc.title_en || ''
      const content = doc.content_text_ko || ''
      const combinedText = `${title}\n\n${content}`

      if (!combinedText.trim()) {
        console.log('  ⚠️  Skipping: Empty content')
        continue
      }

      // Generate embedding
      console.log('  🔄 Generating embedding...')
      const embedding = await generateEmbedding(combinedText)

      // Update document with embedding
      const { error: updateError } = await supabase
        .from('documents')
        .update({ embedding })
        .eq('id', doc.id)

      if (updateError) {
        console.error('  ❌ Update error:', updateError.message)
        errorCount++
        continue
      }

      console.log('  ✅ Success')
      successCount++

      // Rate limiting: OpenAI allows ~3000 RPM for tier 1
      // Sleep 200ms between requests (max ~300 requests/min)
      await new Promise(resolve => setTimeout(resolve, 200))

    } catch (error: any) {
      console.error('  ❌ Error:', error.message)
      errorCount++
    }
  }

  console.log('\n📊 Summary:')
  console.log(`  ✅ Success: ${successCount}`)
  console.log(`  ❌ Failed: ${errorCount}`)
  console.log(`  📝 Total: ${documents.length}`)
}

async function verifyEmbeddings() {
  console.log('\n🔍 Verifying embeddings...')

  const { count: totalDocs } = await supabase
    .from('documents')
    .select('id', { count: 'exact', head: true })
    .eq('published', true)

  const { count: embeddedDocs } = await supabase
    .from('documents')
    .select('id', { count: 'exact', head: true })
    .eq('published', true)
    .not('embedding', 'is', null)

  console.log(`\n📈 Coverage:`)
  console.log(`  Total documents: ${totalDocs}`)
  console.log(`  With embeddings: ${embeddedDocs}`)
  console.log(`  Coverage: ${totalDocs ? ((embeddedDocs! / totalDocs!) * 100).toFixed(1) : 0}%`)
}

async function testVectorSearch() {
  console.log('\n🧪 Testing vector search...')

  // Test query
  const testQuery = '티켓 생성 방법'
  console.log(`Query: "${testQuery}"`)

  // Generate query embedding
  const queryEmbedding = await generateEmbedding(testQuery)

  // Search with RPC function
  const { data: results, error } = await supabase
    .rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_threshold: 0.5,
      match_count: 3
    })

  if (error) {
    console.error('❌ Search error:', error)
    return
  }

  if (!results || results.length === 0) {
    console.log('No results found')
    return
  }

  console.log(`\n✅ Found ${results.length} results:`)
  results.forEach((result: any, idx: number) => {
    console.log(`\n${idx + 1}. ${result.title_ko || result.title_en}`)
    console.log(`   Product: ${result.product}`)
    console.log(`   Similarity: ${(result.similarity * 100).toFixed(1)}%`)
    console.log(`   Preview: ${result.content_text_ko?.substring(0, 100)}...`)
  })
}

async function main() {
  try {
    await generateEmbeddings()
    await verifyEmbeddings()
    await testVectorSearch()
    console.log('\n✨ Done!\n')
  } catch (error) {
    console.error('Fatal error:', error)
    process.exit(1)
  }
}

main()
