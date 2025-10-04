import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export const runtime = 'edge'

interface AutocompleteSuggestion {
  title: string
  product: string
  category: string
  preview: string
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')
    const product = searchParams.get('product')
    const limit = parseInt(searchParams.get('limit') || '5')

    if (!query || query.length < 1) {
      return NextResponse.json({ suggestions: [] })
    }

    // Call the PostgreSQL autocomplete function
    const { data, error } = await supabase
      .rpc('autocomplete_suggestions', {
        search_query: query,
        product_filter: product,
        limit_count: limit
      })

    if (error) {
      console.error('Autocomplete error:', error)
      return NextResponse.json(
        { error: 'Autocomplete failed', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      suggestions: data as AutocompleteSuggestion[],
      query
    })

  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}
