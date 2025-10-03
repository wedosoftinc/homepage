/**
 * Contentful API 클라이언트
 */

import { createClient } from 'contentful'

const hasContentfulConfig =
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID &&
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

// Contentful 클라이언트 생성 (환경 변수가 있을 때만)
export const contentfulClient = hasContentfulConfig ? createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
}) : null

// Contentful Entry 타입
export interface ContentfulBlogPostFields {
  title: string
  slug: string
  content: string
  publishedAt: string
  author?: string
  thumbnail?: string
  originalCategory?: string
  categories?: string[]
  originalId?: string
}

export interface ContentfulBlogPost {
  contentTypeId: 'blogPost'
  fields: ContentfulBlogPostFields
}

// 앱에서 사용할 BlogPost 타입
export interface BlogPost {
  slug: string
  title: string
  publishedAt: string
  author: string
  thumbnail: string | null
  originalCategory: string
  categories: string[]
  content: string
  excerpt: string
  meta: {
    originalId: string
  }
}

// Contentful Entry를 BlogPost로 변환
function mapContentfulPost(entry: any): BlogPost {
  const fields = entry.fields

  // Excerpt 생성 (첫 150자)
  const excerpt = fields.content.substring(0, 150).replace(/\n/g, ' ') + '...'

  return {
    slug: fields.slug,
    title: fields.title,
    publishedAt: fields.publishedAt,
    author: fields.author || 'We Do Soft',
    thumbnail: fields.thumbnail || null,
    originalCategory: fields.originalCategory || '',
    categories: fields.categories || [],
    content: fields.content,
    excerpt,
    meta: {
      originalId: fields.originalId || fields.slug,
    },
  }
}

// 모든 포스트 가져오기
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!contentfulClient) {
    console.warn('Contentful client not configured')
    return []
  }

  try {
    const response = await contentfulClient.getEntries<ContentfulBlogPost>({
      content_type: 'blogPost',
      // @ts-ignore - Contentful SDK 타입 제한 우회
      order: ['-fields.publishedAt'],
      limit: 1000,
    })

    return response.items.map((item) => mapContentfulPost(item))
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error)
    return []
  }
}

// 페이지네이션된 포스트 가져오기
export async function getPaginatedPosts(
  page: number = 1,
  perPage: number = 12
): Promise<{
  posts: BlogPost[]
  totalPages: number
  currentPage: number
  totalPosts: number
}> {
  if (!contentfulClient) {
    return {
      posts: [],
      totalPages: 0,
      currentPage: page,
      totalPosts: 0,
    }
  }

  try {
    const skip = (page - 1) * perPage

    const response = await contentfulClient.getEntries<ContentfulBlogPost>({
      content_type: 'blogPost',
      // @ts-ignore
      order: ['-fields.publishedAt'],
      limit: perPage,
      skip,
    })

    const totalPosts = response.total
    const totalPages = Math.ceil(totalPosts / perPage)

    return {
      posts: response.items.map((item) => mapContentfulPost(item)),
      totalPages,
      currentPage: page,
      totalPosts,
    }
  } catch (error) {
    console.error('Error fetching paginated posts:', error)
    return {
      posts: [],
      totalPages: 0,
      currentPage: page,
      totalPosts: 0,
    }
  }
}

// 특정 포스트 가져오기 (slug로 검색)
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!contentfulClient) {
    return null
  }

  try {
    const response = await contentfulClient.getEntries<ContentfulBlogPost>({
      content_type: 'blogPost',
      // @ts-ignore
      'fields.slug': slug,
      limit: 1,
    })

    if (response.items.length === 0) {
      return null
    }

    return mapContentfulPost(response.items[0])
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}

// 카테고리별 포스트 가져오기
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  if (!contentfulClient) {
    return []
  }

  try {
    const response = await contentfulClient.getEntries<ContentfulBlogPost>({
      content_type: 'blogPost',
      // @ts-ignore
      'fields.originalCategory': category,
      // @ts-ignore
      order: ['-fields.publishedAt'],
      limit: 1000,
    })

    return response.items.map((item) => mapContentfulPost(item))
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}

// 모든 카테고리 가져오기
export async function getAllCategories(): Promise<string[]> {
  if (!contentfulClient) {
    return []
  }

  try {
    const allPosts = await getAllPosts()
    const categories = new Set<string>()

    allPosts.forEach((post) => {
      if (post.originalCategory) {
        categories.add(post.originalCategory)
      }
      post.categories.forEach((cat) => categories.add(cat))
    })

    return Array.from(categories).sort()
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// 이전/다음 포스트 가져오기
export async function getAdjacentPosts(slug: string): Promise<{
  prev: BlogPost | null
  next: BlogPost | null
}> {
  if (!contentfulClient) {
    return { prev: null, next: null }
  }

  try {
    const allPosts = await getAllPosts()
    const currentIndex = allPosts.findIndex((post) => post.slug === slug)

    if (currentIndex === -1) {
      return { prev: null, next: null }
    }

    return {
      prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
      next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
    }
  } catch (error) {
    console.error('Error fetching adjacent posts:', error)
    return { prev: null, next: null }
  }
}
