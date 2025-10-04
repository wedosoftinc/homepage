import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export const runtime = 'edge'

interface SearchResult {
  id: string
  csv_id: number
  title_ko: string
  title_en: string
  content_preview: string
  short_slug: string
  product: string
  category_name: string
  folder_name: string
  rank: number
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')
    const product = searchParams.get('product')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (!query || query.length < 2) {
      return NextResponse.json({
        results: [],
        message: '검색어는 2글자 이상 입력해주세요.'
      })
    }

    // Build search query
    let dbQuery = supabase
      .from('documents')
      .select(`
        id,
        csv_id,
        title_ko,
        title_en,
        content_text_ko,
        short_slug,
        product,
        category:categories(name_ko),
        folder:folders(name_ko)
      `)
      .eq('published', true)
      .textSearch('search_vector_ko', query.trim(), {
        type: 'plain',
        config: 'simple'
      })
      .limit(limit)

    // Add product filter if specified
    if (product) {
      dbQuery = dbQuery.eq('product', product)
    }

    const { data, error } = await dbQuery

    if (error) {
      console.error('Search error:', error)
      return NextResponse.json(
        { error: 'Search failed', details: error.message },
        { status: 500 }
      )
    }

    // Format results
    const results = (data || []).map(doc => ({
      id: doc.id,
      csv_id: doc.csv_id,
      title_ko: doc.title_ko,
      title_en: doc.title_en,
      content_preview: doc.content_text_ko?.substring(0, 200) || '',
      short_slug: doc.short_slug,
      product: doc.product,
      category_name: doc.category?.name_ko || '',
      folder_name: doc.folder?.name_ko || '',
      rank: 1.0 // Default rank for now
    }))

    return NextResponse.json({
      results,
      query,
      count: results.length
    })

  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}
