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

    // Build autocomplete query
    let dbQuery = supabase
      .from('documents')
      .select(`
        title_ko,
        title_en,
        product,
        content_text_ko,
        category:categories(name_ko)
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
      console.error('Autocomplete error:', error)
      return NextResponse.json(
        { error: 'Autocomplete failed', details: error.message },
        { status: 500 }
      )
    }

    // Format suggestions
    const suggestions = (data || []).map(doc => ({
      title: doc.title_ko || doc.title_en,
      product: doc.product,
      category: doc.category?.name_ko || '',
      preview: doc.content_text_ko?.substring(0, 100) || ''
    }))

    return NextResponse.json({
      suggestions,
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
