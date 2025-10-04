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

    // Call the PostgreSQL search function
    const { data, error } = await supabase
      .rpc('search_documents', {
        search_query: query,
        product_filter: product,
        limit_count: limit
      })

    if (error) {
      console.error('Search error:', error)
      return NextResponse.json(
        { error: 'Search failed', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      results: data as SearchResult[],
      query,
      count: data?.length || 0
    })

  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}
