import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/layout/footer'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { getPaginatedPosts, getAllCategories, BlogPost } from '@/lib/blog'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { ChevronLeftIcon, ChevronRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: '블로그 | 위두소프트',
    description: 'SaaS 솔루션과 디지털 전환에 대한 인사이트를 공유합니다.',
    keywords: 'SaaS, 디지털전환, Freshworks, Google Workspace, Monday.com, 기업솔루션',
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; category?: string }>
}) {
    const params = await searchParams
    const currentPage = Number(params.page) || 1
    const selectedCategory = params.category || null

    // 카테고리 필터링 적용
    const allPosts = selectedCategory
        ? require('@/lib/blog').getPostsByCategory(selectedCategory)
        : require('@/lib/blog').getAllPosts()

    const totalPosts = allPosts.length
    const postsPerPage = 12
    const totalPages = Math.ceil(totalPosts / postsPerPage)
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const posts = allPosts.slice(startIndex, endIndex)

    const categories = getAllCategories()

    return (
        <div className="min-h-screen bg-background">
            <MainNavigation />

            <PageHero
                title="블로그"
                subtitle="SaaS 솔루션과 디지털 전환에 대한 인사이트를 공유합니다"
            />

            <main className="container pb-16">
                {/* Categories - 세련된 탭 스타일 */}
                {categories.length > 0 && (
                    <div className="mb-12 overflow-x-auto">
                        <div className="flex gap-2 pb-2 min-w-max">
                            <Link href="/blog">
                                <Button
                                    variant={selectedCategory === null ? "default" : "ghost"}
                                    size="sm"
                                    className="rounded-full"
                                >
                                    전체
                                </Button>
                            </Link>
                            {categories.slice(0, 10).map((category) => (
                                <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`}>
                                    <Button
                                        variant={selectedCategory === category ? "default" : "ghost"}
                                        size="sm"
                                        className="rounded-full"
                                    >
                                        {category}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Blog Posts Grid - 더 넓은 카드 */}
                <div className="grid gap-8 md:grid-cols-2">
                    {posts.map((post: BlogPost) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <article className="h-full flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md bg-card">
                                {/* 썸네일 이미지 */}
                                {post.thumbnail && (
                                    <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                                        <Image
                                            src={post.thumbnail}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, 200px"
                                        />
                                    </div>
                                )}

                                {/* 콘텐츠 */}
                                <div className="flex-1 flex flex-col">
                                    {post.originalCategory && (
                                        <Badge variant="secondary" className="w-fit mb-3 text-xs">
                                            {post.originalCategory}
                                        </Badge>
                                    )}
                                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <time className="text-xs text-muted-foreground" dateTime={post.publishedAt}>
                                        {format(new Date(post.publishedAt), 'yyyy년 MM월 dd일', { locale: ko })}
                                    </time>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center gap-2">
                        <Link href={`/blog?page=${currentPage - 1}${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ''}`}>
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === 1}
                                className="gap-1"
                            >
                                <ChevronLeftIcon className="h-4 w-4" />
                                이전
                            </Button>
                        </Link>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <Link key={page} href={`/blog?page=${page}${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ''}`}>
                                    <Button
                                        variant={currentPage === page ? 'default' : 'ghost'}
                                        size="sm"
                                        className="w-10"
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            ))}
                        </div>

                        <Link href={`/blog?page=${currentPage + 1}${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ''}`}>
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === totalPages}
                                className="gap-1"
                            >
                                다음
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                )}

                {/* Empty State */}
                {posts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-muted-foreground">포스트가 아직 없습니다.</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}
