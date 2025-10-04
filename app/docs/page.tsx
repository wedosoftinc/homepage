import { Metadata } from 'next'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { BookOpenIcon, SearchIcon, TrendingUpIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: '문서 포털 | WeDo Soft',
  description: 'Freshdesk, Monday.com, Google Workspace 등 다양한 솔루션의 사용 가이드와 FAQ를 확인하세요.',
}

async function getPopularDocuments() {
  const { data } = await supabase
    .from('documents')
    .select('id, csv_id, product, title_ko, title_en, short_slug, view_count')
    .eq('published', true)
    .order('view_count', { ascending: false })
    .limit(10)

  return data || []
}

async function getProductStats() {
  const { data } = await supabase
    .from('documents')
    .select('product')
    .eq('published', true)

  const stats = (data || []).reduce((acc, doc) => {
    acc[doc.product] = (acc[doc.product] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return stats
}

export default async function DocsHomePage() {
  const [popularDocs, productStats] = await Promise.all([
    getPopularDocuments(),
    getProductStats(),
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-bg-gradient section-spacing">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <BookOpenIcon className="h-4 w-4" />
            <span>문서 포털</span>
          </div>

          <h1 className="heading-hero mb-6">
            필요한 답변을 빠르게 찾으세요
          </h1>

          <p className="heading-card mb-8 text-muted-foreground">
            Freshdesk, Monday.com, Google Workspace 등<br />
            다양한 솔루션의 사용 가이드와 FAQ
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="검색어를 입력하세요... (예: 티켓 첨부파일 크기)"
                className="w-full rounded-lg border bg-background py-4 pl-12 pr-4 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-section mb-8 text-center">제품별 문서</h2>

          <div className="card-grid-3">
            {Object.entries(productStats).map(([product, count]) => (
              <Link
                key={product}
                href={`/docs/${product}`}
                className="group rounded-lg border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <h3 className="heading-card mb-2 capitalize group-hover:text-primary">
                  {product}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {count.toLocaleString()}개 문서
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documents */}
      <section className="section-bg-muted section-spacing">
        <div className="container mx-auto max-w-4xl">
          <h2 className="heading-section mb-2 flex items-center gap-2">
            <TrendingUpIcon className="h-6 w-6 text-primary" />
            인기 문서
          </h2>
          <p className="mb-8 text-muted-foreground">
            가장 많이 조회된 문서들입니다
          </p>

          <div className="space-y-4">
            {popularDocs.map((doc, index) => (
              <Link
                key={doc.id}
                href={`/docs/${doc.product}/${doc.csv_id}-${doc.short_slug}`}
                className="group flex items-start gap-4 rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-medium group-hover:text-primary">
                    {doc.title_ko || doc.title_en}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="capitalize">{doc.product}</span>
                    <span>•</span>
                    <span>{doc.view_count.toLocaleString()} 조회</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
