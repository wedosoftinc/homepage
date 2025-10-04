import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'
import OpenAI from 'openai'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  messages: Message[]
  searchQuery?: string
  productFilter?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json()
    const { messages, searchQuery, productFilter } = body

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages are required' },
        { status: 400 }
      )
    }

    // Get the last user message
    const lastUserMessage = messages[messages.length - 1]

    // Get relevant context using RAG (vector similarity search)
    let context = ''
    let relevantDocs: any[] = []

    try {
      // Generate embedding for user query
      const queryText = searchQuery || lastUserMessage.content

      const embeddingResponse = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: queryText
      })

      const queryEmbedding = embeddingResponse.data[0].embedding

      // Search using hybrid search (dense vector + sparse text)
      const { data: matches, error: searchError } = await supabase
        .rpc('hybrid_search', {
          query_embedding: queryEmbedding,
          query_text: queryText,
          match_threshold: 0.5,  // Lower threshold for hybrid
          match_count: 5,
          product_filter: productFilter || null,
          dense_weight: 0.7,     // 70% semantic similarity
          text_weight: 0.3       // 30% keyword matching
        })

      if (searchError) {
        console.error('Vector search error:', searchError)
      } else if (matches && matches.length > 0) {
        relevantDocs = matches

        context = matches
          .map((doc: any) => {
            const title = doc.title_ko || doc.title_en
            const content = doc.content_text_ko || ''
            const vectorSim = (doc.vector_similarity * 100).toFixed(1)
            const textRank = (doc.text_rank * 100).toFixed(1)
            const hybridScore = (doc.hybrid_score * 100).toFixed(1)
            return `[${doc.product}] ${title} (하이브리드: ${hybridScore}% | 의미: ${vectorSim}% | 키워드: ${textRank}%)\n${content}`
          })
          .join('\n\n---\n\n')
      }
    } catch (embeddingError: any) {
      console.error('Embedding generation error:', embeddingError)
      // Fallback to keyword search if embedding fails
      if (searchQuery) {
        const { data } = await supabase
          .from('documents')
          .select(`
            title_ko,
            title_en,
            content_text_ko,
            product
          `)
          .eq('published', true)
          .textSearch('search_vector_ko', searchQuery.trim(), {
            type: 'plain',
            config: 'simple'
          })
          .limit(3)

        if (data && data.length > 0) {
          context = data
            .map((doc) => {
              const title = doc.title_ko || doc.title_en
              const content = doc.content_text_ko?.substring(0, 500) || ''
              return `[${doc.product}] ${title}\n${content}`
            })
            .join('\n\n---\n\n')
        }
      }
    }

    // Build system prompt with context
    const systemPrompt = context
      ? `당신은 Freshworks 제품 전문가입니다. 다음 문서 내용을 참고하여 사용자의 질문에 답변하세요.

관련 문서:
${context}

답변 시 지침:
- 제공된 문서 내용을 기반으로 정확하게 답변하세요
- 문서에 없는 내용은 추측하지 마세요
- 한국어로 친절하고 명확하게 설명하세요
- 필요시 단계별로 설명하세요`
      : `당신은 Freshworks 제품 전문가입니다. 사용자의 질문에 친절하고 명확하게 답변하세요.`

    // Generate AI response using OpenAI
    const aiResponse = await generateAIResponse(systemPrompt, lastUserMessage.content, messages)

    return NextResponse.json({
      message: {
        role: 'assistant',
        content: aiResponse
      },
      hasContext: !!context,
      sources: relevantDocs.map((doc: any) => ({
        title: doc.title_ko || doc.title_en,
        product: doc.product,
        hybrid_score: doc.hybrid_score,
        vector_similarity: doc.vector_similarity,
        text_rank: doc.text_rank
      }))
    })

  } catch (error: any) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}

// AI response generator using OpenAI
async function generateAIResponse(
  systemPrompt: string,
  userMessage: string,
  conversationHistory: Message[]
): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    return '죄송합니다. AI 서비스가 설정되지 않았습니다. 관리자에게 문의해주세요.'
  }

  try {
    // Build conversation context (last 5 messages for context window management)
    const recentMessages = conversationHistory.slice(-5).map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...recentMessages
      ],
      temperature: 0.7,
      max_tokens: 1500,
      top_p: 0.9,
      frequency_penalty: 0.3,
      presence_penalty: 0.3
    })

    return completion.choices[0].message.content || '죄송합니다. 응답을 생성할 수 없습니다.'
  } catch (error: any) {
    console.error('OpenAI completion error:', error)
    throw new Error('AI 응답 생성 중 오류가 발생했습니다.')
  }
}
