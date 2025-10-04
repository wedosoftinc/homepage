import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import { DocumentWithRelations } from '@/lib/supabase/types'
import { BookOpenIcon, FolderIcon, TagIcon, CalendarIcon, EyeIcon } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: {
    product: string
    id_slug: string
  }
}

// Parse id_slug: "196643-attachment-size-limit" → { csvId: 196643, shortSlug: "attachment-size-limit" }
function parseIdSlug(idSlug: string) {
  const match = idSlug.match(/^(\d+)-(.+)$/)
  if (!match) return null
  return {
    csvId: parseInt(match[1]),
    shortSlug: match[2]
  }
}

async function getDocument(product: string, idSlug: string): Promise<DocumentWithRelations | null> {
  const parsed = parseIdSlug(idSlug)
  if (!parsed) return null

  const { data, error } = await supabase
    .from('documents')
    .select(`
      *,
      category:categories(*),
      folder:folders(*)
    `)
    .eq('product', product)
    .eq('csv_id', parsed.csvId)
    .eq('published', true)
    .single()

  if (error || !data) return null

  return data as DocumentWithRelations
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product, id_slug } = await params
  const doc = await getDocument(product, id_slug)

  if (!doc) {
    return {
      title: '문서를 찾을 수 없습니다',
    }
  }

  return {
    title: doc.meta_title_ko || doc.title_ko || doc.title_en,
    description: doc.meta_description_ko || doc.content_text_ko?.substring(0, 160),
    keywords: doc.tags?.join(', '),
    openGraph: {
      title: doc.title_ko || doc.title_en,
      description: doc.content_text_ko?.substring(0, 160),
      type: 'article',
    },
  }
}

export default async function DocumentPage({ params }: PageProps) {
  const { product, id_slug } = await params
  const doc = await getDocument(product, id_slug)

  if (!doc) {
    notFound()
  }

  // FAQ 문서는 아코디언 페이지로 리디렉션
  if (doc.category?.slug.includes('faq')) {
    redirect(`/docs/${product}/faq#${doc.csv_id}`)
  }

  // Increment view count (fire and forget)
  supabase.rpc('increment_view_count', { doc_id: doc.id }).then()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            문서
          </Link>
          <span>/</span>
          <Link href={`/docs/${doc.product}`} className="hover:text-foreground transition-colors capitalize">
            {doc.product}
          </Link>
          {doc.category && (
            <>
              <span>/</span>
              <span className="text-foreground">{doc.category.name_ko || doc.category.name_en}</span>
            </>
          )}
          {doc.folder && (
            <>
              <span>/</span>
              <span className="text-foreground">{doc.folder.name_ko || doc.folder.name_en}</span>
            </>
          )}
        </nav>

        {/* Header */}
        <header className="mb-8 border-b pb-6">
          <h1 className="heading-section mb-4">
            {doc.title_ko || doc.title_en}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {doc.folder && (
              <div className="flex items-center gap-1.5">
                <FolderIcon className="h-4 w-4" />
                <span>{doc.folder.name_ko || doc.folder.name_en}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <EyeIcon className="h-4 w-4" />
              <span>{doc.view_count.toLocaleString()} 조회</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={doc.updated_at}>
                {new Date(doc.updated_at).toLocaleDateString('ko-KR')}
              </time>
            </div>
          </div>

          {/* Tags */}
          {doc.tags && doc.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <TagIcon className="h-4 w-4 text-muted-foreground" />
              {doc.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <article
          className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: doc.content_html_ko || doc.content_html_en }}
        />

        {/* Feedback */}
        <div className="mt-12 border-t pt-8">
          <div className="text-center">
            <p className="mb-4 text-sm text-muted-foreground">이 문서가 도움이 되었나요?</p>
            <div className="flex items-center justify-center gap-4">
              <button className="rounded-lg border bg-background px-6 py-2 text-sm font-medium hover:bg-muted transition-colors">
                👍 도움됨 ({doc.helpful_count})
              </button>
              <button className="rounded-lg border bg-background px-6 py-2 text-sm font-medium hover:bg-muted transition-colors">
                👎 개선 필요 ({doc.not_helpful_count})
              </button>
            </div>
          </div>
        </div>

        {/* Related Documents */}
        {doc.category_id && (
          <div className="mt-12 border-t pt-8">
            <h2 className="heading-card mb-4 flex items-center gap-2">
              <BookOpenIcon className="h-5 w-5" />
              관련 문서
            </h2>
            <p className="text-sm text-muted-foreground">
              같은 카테고리의 다른 문서들을 확인해보세요.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
