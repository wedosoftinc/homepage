import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { DocsSidebar } from '@/components/docs/docs-sidebar'
import { FolderIcon, FileTextIcon } from 'lucide-react'

interface PageProps {
  params: {
    product: string
  }
}

async function getProductDocuments(product: string) {
  const { data, error } = await supabase
    .from('documents')
    .select(`
      id,
      csv_id,
      product,
      title_ko,
      title_en,
      short_slug,
      view_count,
      category:categories(id, name_ko, name_en, slug),
      folder:folders(id, name_ko, name_en, slug)
    `)
    .eq('product', product)
    .eq('published', true)
    .order('view_count', { ascending: false })

  if (error) return null
  return data
}

async function getSidebarData(product: string) {
  const { data: categories } = await supabase
    .from('categories')
    .select(`
      id,
      name_en,
      name_ko,
      slug,
      folders(
        id,
        name_en,
        name_ko,
        slug
      )
    `)
    .order('display_order')

  if (!categories) return []

  // Count documents per folder
  const { data: docs } = await supabase
    .from('documents')
    .select('folder_id')
    .eq('product', product)
    .eq('published', true)

  const folderCounts = (docs || []).reduce((acc, doc) => {
    if (doc.folder_id) {
      acc[doc.folder_id] = (acc[doc.folder_id] || 0) + 1
    }
    return acc
  }, {} as Record<string, number>)

  return categories.map(cat => ({
    id: cat.id,
    name: cat.name_ko || cat.name_en,
    slug: cat.slug,
    folders: (cat.folders || []).map((f: any) => ({
      id: f.id,
      name: f.name_ko || f.name_en,
      slug: f.slug,
      docCount: folderCounts[f.id] || 0
    }))
  })).filter(cat => cat.folders.length > 0)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product } = await params
  return {
    title: `${product.charAt(0).toUpperCase() + product.slice(1)} 문서 | WeDo Soft`,
    description: `${product} 솔루션의 사용 가이드와 FAQ를 확인하세요.`,
  }
}

export default async function ProductDocsPage({ params }: PageProps) {
  const { product } = await params
  const [documents, sidebarData] = await Promise.all([
    getProductDocuments(product),
    getSidebarData(product)
  ])

  if (!documents || documents.length === 0) {
    notFound()
  }

  // Group by category and folder (exclude FAQ)
  const grouped = documents
    .filter(doc => !doc.category?.slug.includes('faq'))
    .reduce((acc, doc) => {
      const categoryId = doc.category?.id || 'uncategorized'
      const folderId = doc.folder?.id || 'uncategorized'

      if (!acc[categoryId]) {
        acc[categoryId] = {
          category: doc.category,
          folders: {}
        }
      }

      if (!acc[categoryId].folders[folderId]) {
        acc[categoryId].folders[folderId] = {
          folder: doc.folder,
          documents: []
        }
      }

      acc[categoryId].folders[folderId].documents.push(doc)
      return acc
    }, {} as Record<string, any>)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <DocsSidebar product={product} categories={sidebarData} />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-8">
              <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  문서
                </Link>
                <span>/</span>
                <span className="text-foreground capitalize">{product}</span>
              </nav>

              <h1 className="heading-section capitalize">
                {product} 문서
              </h1>
              <p className="mt-2 text-muted-foreground">
                {documents.filter(d => !d.category?.slug.includes('faq')).length.toLocaleString()}개의 문서
              </p>
            </div>

            {/* Documents by Category/Folder */}
            <div className="space-y-12">
              {Object.entries(grouped).map(([categoryId, categoryData]: [string, any]) => (
                <div key={categoryId} id={categoryData.category?.slug}>
                  {/* Category Header */}
                  {categoryData.category && (
                    <h2 className="heading-subsection mb-6 flex items-center gap-2">
                      <FolderIcon className="h-6 w-6 text-primary" />
                      {categoryData.category.name_ko || categoryData.category.name_en}
                    </h2>
                  )}

                  {/* Folders */}
                  <div className="space-y-8">
                    {Object.entries(categoryData.folders).map(([folderId, folderData]: [string, any]) => (
                      <div key={folderId} id={folderData.folder?.slug}>
                        {/* Folder Header */}
                        {folderData.folder && (
                          <h3 className="heading-card mb-4 text-muted-foreground">
                            {folderData.folder.name_ko || folderData.folder.name_en}
                          </h3>
                        )}

                        {/* Documents */}
                        <div className="grid gap-4 md:grid-cols-2">
                          {folderData.documents.map((doc: any) => (
                            <Link
                              key={doc.id}
                              href={`/docs/${doc.product}/${doc.csv_id}-${doc.short_slug}`}
                              className="group flex items-start gap-3 rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
                            >
                              <FileTextIcon className="h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
                              <div className="flex-1 min-w-0">
                                <h4 className="mb-1 font-medium group-hover:text-primary line-clamp-2">
                                  {doc.title_ko || doc.title_en}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {doc.view_count.toLocaleString()} 조회
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
