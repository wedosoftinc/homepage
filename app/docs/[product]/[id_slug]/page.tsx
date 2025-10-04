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

async function getRelatedDocuments(folderId: string, currentDocId: string) {
  const { data, error } = await supabase
    .from('documents')
    .select('id, csv_id, title_ko, title_en, short_slug, view_count')
    .eq('folder_id', folderId)
    .eq('published', true)
    .neq('id', currentDocId)
    .order('view_count', { ascending: false })
    .limit(10)

  if (error || !data) return []
  return data
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const doc = await getDocument(resolvedParams.product, resolvedParams.id_slug)

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
  const resolvedParams = await params
  const { product, id_slug } = resolvedParams
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

  // Get related documents
  const relatedDocs = doc.folder_id ? await getRelatedDocuments(doc.folder_id, doc.id) : []

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <div className="lg:col-span-1">
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

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Document Info */}
              <div className="rounded-lg border bg-card p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <BookOpenIcon className="h-4 w-4" />
                  문서 정보
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">조회수</dt>
                    <dd className="font-medium">{doc.view_count.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">업데이트</dt>
                    <dd className="font-medium">
                      {new Date(doc.updated_at).toLocaleDateString('ko-KR')}
                    </dd>
                  </div>
                  {doc.folder && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">폴더</dt>
                      <dd className="font-medium text-right">
                        {doc.folder.name_ko || doc.folder.name_en}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Related Documents */}
              {relatedDocs.length > 0 && (
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FolderIcon className="h-4 w-4" />
                    같은 폴더의 문서
                  </h3>
                  <nav className="space-y-1">
                    {relatedDocs.map((relatedDoc) => (
                      <Link
                        key={relatedDoc.id}
                        href={`/docs/${product}/${relatedDoc.csv_id}-${relatedDoc.short_slug}`}
                        className="block px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
                      >
                        <div className="font-medium line-clamp-2">
                          {relatedDoc.title_ko || relatedDoc.title_en}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {relatedDoc.view_count.toLocaleString()} 조회
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
