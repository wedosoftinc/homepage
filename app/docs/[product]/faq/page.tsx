import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { FAQAccordion } from '@/components/docs/faq-accordion'
import { HelpCircleIcon } from 'lucide-react'

interface PageProps {
  params: {
    product: string
  }
}

async function getFAQDocuments(product: string) {
  // First, get FAQ category IDs
  const { data: faqCategories } = await supabase
    .from('categories')
    .select('id')
    .ilike('slug', '%-faq')

  if (!faqCategories || faqCategories.length === 0) {
    return null
  }

  const faqCategoryIds = faqCategories.map(cat => cat.id)

  // Then fetch documents in those categories
  const { data, error } = await supabase
    .from('documents')
    .select(`
      id,
      csv_id,
      title_ko,
      title_en,
      content_html_ko,
      content_html_en,
      short_slug,
      folder:folders(name_ko, name_en, slug)
    `)
    .eq('product', product)
    .eq('published', true)
    .in('category_id', faqCategoryIds)
    .order('csv_id')

  if (error) {
    console.error('FAQ fetch error:', error)
    return null
  }

  return data
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product } = await params
  return {
    title: `${product.toUpperCase()} FAQ | WeDo Soft`,
    description: `${product} 자주 묻는 질문과 답변을 확인하세요.`,
  }
}

export default async function FAQPage({ params }: PageProps) {
  const { product } = await params
  const faqItems = await getFAQDocuments(product)

  if (!faqItems || faqItems.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            문서
          </Link>
          <span>/</span>
          <Link href={`/docs/${product}`} className="hover:text-foreground transition-colors capitalize">
            {product}
          </Link>
          <span>/</span>
          <span className="text-foreground">FAQ</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <HelpCircleIcon className="h-4 w-4" />
            <span>자주 묻는 질문</span>
          </div>

          <h1 className="heading-section capitalize mb-2">
            {product} FAQ
          </h1>
          <p className="text-muted-foreground">
            {faqItems.length}개의 자주 묻는 질문과 답변
          </p>
        </div>

        {/* FAQ Accordion */}
        <FAQAccordion items={faqItems} product={product} />
      </div>
    </div>
  )
}
