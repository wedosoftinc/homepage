'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon, FileTextIcon, FolderIcon, HelpCircleIcon, BookOpenIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarCategory {
  id: string
  name: string
  slug: string
  folders: SidebarFolder[]
}

interface SidebarFolder {
  id: string
  name: string
  slug: string
  docCount: number
}

interface DocsSidebarProps {
  product: string
  categories: SidebarCategory[]
  className?: string
}

export function DocsSidebar({ product, categories, className }: DocsSidebarProps) {
  const pathname = usePathname()
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(categories.map(c => c.id))
  )

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => {
      const next = new Set(prev)
      if (next.has(categoryId)) {
        next.delete(categoryId)
      } else {
        next.add(categoryId)
      }
      return next
    })
  }

  const isFAQCategory = (slug: string) => slug.includes('faq')

  return (
    <aside className={cn('w-64 flex-shrink-0 hidden lg:block', className)}>
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8 pr-4">
        {/* Product Header */}
        <div className="mb-6">
          <Link
            href={`/docs/${product}`}
            className="block rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/10 p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpenIcon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-lg capitalize leading-none">{product}</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  {categories.reduce((sum, cat) => sum + cat.folders.reduce((s, f) => s + f.docCount, 0), 0)}개 문서
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Categories */}
        <nav className="space-y-2">
          {categories.map((category) => {
            const isOpen = openCategories.has(category.id)
            const isFAQ = isFAQCategory(category.slug)

            return (
              <div key={category.id} className="group/category">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={cn(
                    "w-full flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-200",
                    isOpen
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isFAQ ? (
                      <HelpCircleIcon className="h-4 w-4" />
                    ) : (
                      <FolderIcon className="h-4 w-4" />
                    )}
                    <span className="text-sm">{category.name}</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-normal">
                      {category.folders.reduce((s, f) => s + f.docCount, 0)}
                    </span>
                    <ChevronRightIcon
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        isOpen && 'rotate-90'
                      )}
                    />
                  </div>
                </button>

                {/* FAQ Direct Link */}
                {isOpen && isFAQ && (
                  <div className="ml-3 mt-2 mb-1">
                    <Link
                      href={`/docs/${product}/faq`}
                      className={cn(
                        'flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-medium transition-all duration-200 border',
                        pathname === `/docs/${product}/faq`
                          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                          : 'bg-muted/30 text-foreground hover:bg-muted border-transparent hover:border-border'
                      )}
                    >
                      <HelpCircleIcon className="h-4 w-4" />
                      <span>전체 FAQ 보기</span>
                      <span className="ml-auto text-xs opacity-70">
                        {category.folders.reduce((s, f) => s + f.docCount, 0)}
                      </span>
                    </Link>
                  </div>
                )}

                {/* Folders */}
                {isOpen && !isFAQ && (
                  <div className="ml-3 mt-2 space-y-0.5 border-l-2 border-primary/20 pl-3">
                    {category.folders.map((folder) => (
                      <Link
                        key={folder.id}
                        href={`/docs/${product}#${folder.slug}`}
                        className={cn(
                          'flex items-center justify-between gap-2 rounded-md px-3 py-2 text-xs transition-all duration-200',
                          'text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:translate-x-0.5'
                        )}
                      >
                        <span className="flex items-center gap-2 flex-1 min-w-0">
                          <FileTextIcon className="h-3.5 w-3.5 flex-shrink-0" />
                          <span className="truncate font-medium">{folder.name}</span>
                        </span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-muted/50 font-medium flex-shrink-0">
                          {folder.docCount}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
