/**
 * HTML 문서 분할 유틸리티
 * 긴 HTML 문서를 의미있는 단위로 분할하여 번역 후 재조립
 */

interface HtmlChunk {
  index: number
  html: string
  startTag: string  // 재조립시 사용할 컨텍스트
  endTag: string
}

interface SplitResult {
  chunks: HtmlChunk[]
  metadata: {
    originalLength: number
    chunkCount: number
    avgChunkSize: number
  }
}

/**
 * HTML을 청크로 분할
 * - 주요 섹션 태그를 기준으로 분할 (<section>, <article>, <div class="...">)
 * - 각 청크가 대략 목표 크기를 유지하도록 조정
 */
export function splitHtml(html: string, targetChunkSize: number = 15000): SplitResult {
  const length = html.length

  // 짧은 문서는 분할하지 않음
  if (length <= targetChunkSize) {
    return {
      chunks: [{
        index: 0,
        html: html,
        startTag: '',
        endTag: ''
      }],
      metadata: {
        originalLength: length,
        chunkCount: 1,
        avgChunkSize: length
      }
    }
  }

  // 분할 경계 찾기 - 주요 블록 레벨 태그들
  const splitPatterns = [
    // 우선순위 1: 의미적 섹션
    /<article[^>]*>[\s\S]*?<\/article>/gi,
    /<section[^>]*>[\s\S]*?<\/section>/gi,

    // 우선순위 2: 구조적 div
    /<div[^>]*class="[^"]*section[^"]*"[^>]*>[\s\S]*?<\/div>/gi,
    /<div[^>]*data-[^>]*>[\s\S]*?<\/div>/gi,

    // 우선순위 3: 일반 div (너무 많을 수 있음)
    /<div[^>]*>[\s\S]*?<\/div>/gi,

    // 우선순위 4: 단락 그룹
    /(<p[^>]*>[\s\S]*?<\/p>\s*){5,}/gi,
  ]

  let chunks: HtmlChunk[] = []
  let currentChunk = ''
  let chunkIndex = 0

  // 먼저 주요 섹션으로 분할 시도
  const sections = extractSections(html)

  if (sections.length > 1) {
    // 섹션별로 분할 가능한 경우
    for (const section of sections) {
      if (currentChunk.length + section.length > targetChunkSize && currentChunk.length > 0) {
        // 현재 청크가 목표 크기를 초과하면 새 청크 시작
        chunks.push({
          index: chunkIndex++,
          html: currentChunk,
          startTag: '',
          endTag: ''
        })
        currentChunk = section
      } else {
        currentChunk += section
      }
    }

    // 마지막 청크 추가
    if (currentChunk.length > 0) {
      chunks.push({
        index: chunkIndex++,
        html: currentChunk,
        startTag: '',
        endTag: ''
      })
    }
  } else {
    // 섹션 분할이 불가능한 경우, 단순 문자열 분할
    chunks = simpleSplit(html, targetChunkSize)
  }

  const avgSize = chunks.reduce((sum, c) => sum + c.html.length, 0) / chunks.length

  return {
    chunks,
    metadata: {
      originalLength: length,
      chunkCount: chunks.length,
      avgChunkSize: Math.round(avgSize)
    }
  }
}

/**
 * HTML에서 주요 섹션 추출
 */
function extractSections(html: string): string[] {
  const sections: string[] = []

  // article, section 태그 우선
  const articleRegex = /<article[^>]*>[\s\S]*?<\/article>/gi
  const sectionRegex = /<section[^>]*>[\s\S]*?<\/section>/gi

  let matches = html.match(articleRegex) || html.match(sectionRegex)

  if (matches && matches.length > 0) {
    return matches
  }

  // div 기반 섹션
  const divRegex = /<div[^>]*class="[^"]*(?:section|content|article|block)[^"]*"[^>]*>[\s\S]*?<\/div>/gi
  matches = html.match(divRegex)

  if (matches && matches.length > 0) {
    return matches
  }

  // 단락 그룹 (5개 단락씩)
  const paragraphs = html.match(/<p[^>]*>[\s\S]*?<\/p>/gi) || []
  for (let i = 0; i < paragraphs.length; i += 5) {
    sections.push(paragraphs.slice(i, i + 5).join('\n'))
  }

  return sections.length > 0 ? sections : [html]
}

/**
 * 단순 문자열 기반 분할 (마지막 수단)
 */
function simpleSplit(html: string, targetSize: number): HtmlChunk[] {
  const chunks: HtmlChunk[] = []
  let currentPos = 0
  let chunkIndex = 0

  while (currentPos < html.length) {
    let endPos = currentPos + targetSize

    if (endPos >= html.length) {
      // 마지막 청크
      chunks.push({
        index: chunkIndex++,
        html: html.substring(currentPos),
        startTag: '',
        endTag: ''
      })
      break
    }

    // 태그 경계에서 분할하도록 조정
    const searchStart = endPos - 100 > currentPos ? endPos - 100 : currentPos
    const searchEnd = endPos + 100 < html.length ? endPos + 100 : html.length
    const segment = html.substring(searchStart, searchEnd)

    // 가장 가까운 태그 닫기 찾기
    const closingTags = segment.match(/<\/[^>]+>/g) || []
    if (closingTags.length > 0) {
      const lastTag = closingTags[closingTags.length - 1]
      const tagPos = segment.lastIndexOf(lastTag)
      endPos = searchStart + tagPos + lastTag.length
    }

    chunks.push({
      index: chunkIndex++,
      html: html.substring(currentPos, endPos),
      startTag: '',
      endTag: ''
    })

    currentPos = endPos
  }

  return chunks
}

/**
 * 번역된 청크들을 재조립
 */
export function reassembleHtml(chunks: HtmlChunk[]): string {
  return chunks
    .sort((a, b) => a.index - b.index)
    .map(chunk => chunk.html)
    .join('\n')
}

/**
 * HTML 복잡도 분석
 */
export interface HtmlComplexity {
  length: number
  estimatedTokens: number  // 대략 4자 = 1토큰
  imageCount: number
  linkCount: number
  tableCount: number
  recommendedChunks: number
  strategy: 'single' | 'split-small' | 'split-medium' | 'split-large'
}

export function analyzeHtmlComplexity(html: string): HtmlComplexity {
  const length = html.length
  const estimatedTokens = Math.ceil(length / 4)  // 영문 기준 4자 = 1토큰

  const imageCount = (html.match(/<img/g) || []).length
  const linkCount = (html.match(/<a /g) || []).length
  const tableCount = (html.match(/<table/g) || []).length

  let strategy: HtmlComplexity['strategy'] = 'single'
  let recommendedChunks = 1

  // 토큰 추정: 입력(HTML) + 프롬프트(~1000) + 출력(번역된 HTML)
  // 출력 제한: 8,192 토큰
  // 안전하게 입력+출력 합이 16,000 토큰 이내로 유지

  if (estimatedTokens < 4000) {
    strategy = 'single'
    recommendedChunks = 1
  } else if (estimatedTokens < 10000) {
    strategy = 'split-small'
    recommendedChunks = 2
  } else if (estimatedTokens < 20000) {
    strategy = 'split-medium'
    recommendedChunks = Math.ceil(estimatedTokens / 6000)
  } else {
    strategy = 'split-large'
    recommendedChunks = Math.ceil(estimatedTokens / 5000)
  }

  return {
    length,
    estimatedTokens,
    imageCount,
    linkCount,
    tableCount,
    recommendedChunks,
    strategy
  }
}
