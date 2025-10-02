import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/layout/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getPostBySlug, getAllPosts, getAdjacentPosts } from '@/lib/blog'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { ChevronLeftIcon, ChevronRightIcon, ListBulletIcon } from '@heroicons/react/24/outline'

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: '포스트를 찾을 수 없습니다',
        }
    }

    return {
        title: `${post.title} | 위두소프트 블로그`,
        description: post.content.substring(0, 150),
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const { prev, next } = getAdjacentPosts(slug)

    return (
        <div className="min-h-screen bg-background">
            <MainNavigation />
            <main className="container py-16">
                <article className="max-w-3xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        {post.originalCategory && (
                            <Badge variant="secondary" className="mb-4">
                                {post.originalCategory}
                            </Badge>
                        )}
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{post.author}</span>
                            <span>•</span>
                            <time dateTime={post.publishedAt}>
                                {format(new Date(post.publishedAt), 'yyyy년 MM월 dd일', { locale: ko })}
                            </time>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="blog-content">
                        <MDXRemote
                            source={post.content}
                            options={{
                                mdxOptions: {
                                    remarkPlugins: [remarkGfm],
                                    rehypePlugins: [rehypeHighlight],
                                },
                            }}
                        />
                    </div>

                    {/* Navigation - Bottom */}
                    <nav className="mt-16 pt-8 border-t border-border">
                        <div className="flex items-center justify-center gap-2">
                            {prev ? (
                                <Link href={`/blog/${prev.slug}`}>
                                    <Button variant="ghost" size="sm" className="gap-1 text-base">
                                        <ChevronLeftIcon className="w-4 h-4" />
                                        이전 글
                                    </Button>
                                </Link>
                            ) : (
                                <Button variant="ghost" size="sm" className="gap-1 text-base" disabled>
                                    <ChevronLeftIcon className="w-4 h-4" />
                                    이전 글
                                </Button>
                            )}

                            <Link href="/blog">
                                <Button variant="ghost" size="sm" className="gap-1 text-base">
                                    <ListBulletIcon className="w-4 h-4" />
                                    목록으로
                                </Button>
                            </Link>

                            {next ? (
                                <Link href={`/blog/${next.slug}`}>
                                    <Button variant="ghost" size="sm" className="gap-1 text-base">
                                        다음 글
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </Button>
                                </Link>
                            ) : (
                                <Button variant="ghost" size="sm" className="gap-1 text-base" disabled>
                                    다음 글
                                    <ChevronRightIcon className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                    </nav>
                </article>
            </main>
            <Footer />
        </div>
    )
}
