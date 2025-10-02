import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

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

// 모든 포스트 가져오기
export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Excerpt 생성 (첫 150자)
        const excerpt = content.substring(0, 150).replace(/\n/g, ' ') + '...'

        return {
          slug,
          title: data.title || 'Untitled',
          publishedAt: data.publishedAt || '',
          author: data.author || 'WEDO Soft',
          thumbnail: data.thumbnail || null,
          originalCategory: data.originalCategory || '',
          categories: data.categories || [],
          content,
          excerpt,
          meta: {
            originalId: data.meta?.originalId || slug,
          },
        }
      })
      .sort((a, b) => {
        // 최신순 정렬
        if (a.publishedAt < b.publishedAt) {
          return 1
        } else {
          return -1
        }
      })

    return allPostsData
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

// 페이지네이션된 포스트 가져오기
export function getPaginatedPosts(page: number = 1, perPage: number = 12): {
  posts: BlogPost[]
  totalPages: number
  currentPage: number
  totalPosts: number
} {
  const allPosts = getAllPosts()
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / perPage)
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage

  return {
    posts: allPosts.slice(startIndex, endIndex),
    totalPages,
    currentPage: page,
    totalPosts,
  }
}

// 특정 포스트 가져오기
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
      console.error(`Post not found: ${fullPath}`)
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const excerpt = content.substring(0, 150).replace(/\n/g, ' ') + '...'

    return {
      slug,
      title: data.title || 'Untitled',
      publishedAt: data.publishedAt || '',
      author: data.author || 'WEDO Soft',
      thumbnail: data.thumbnail || null,
      originalCategory: data.originalCategory || '',
      categories: data.categories || [],
      content,
      excerpt,
      meta: {
        originalId: data.meta?.originalId || slug,
      },
    }
  } catch (error) {
    console.error('Error loading blog post:', error)
    return null
  }
}

// 카테고리별 포스트 가져오기
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(
    (post) =>
      post.originalCategory === category ||
      post.categories.includes(category)
  )
}

// 모든 카테고리 가져오기
export function getAllCategories(): string[] {
  const allPosts = getAllPosts()
  const categories = new Set<string>()

  allPosts.forEach((post) => {
    if (post.originalCategory) {
      categories.add(post.originalCategory)
    }
    post.categories.forEach((cat) => categories.add(cat))
  })

  return Array.from(categories).sort()
}

// 이전/다음 포스트 가져오기
export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null
  next: BlogPost | null
} {
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((post) => post.slug === slug)

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  return {
    prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  }
}
