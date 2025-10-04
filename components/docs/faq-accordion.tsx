'use client'

import { useState } from 'react'
import { ChevronDownIcon, SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  id: string
  csv_id: number
  title_ko: string
  title_en: string
  content_html_ko: string
  content_html_en: string
  short_slug: string
  folder?: {
    name_ko: string | null
    name_en: string
    slug: string
  }
}

interface FAQAccordionProps {
  items: FAQItem[]
  product: string
}

export function FAQAccordion({ items, product }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Group by folder
  const grouped = items.reduce((acc, item) => {
    const folderSlug = item.folder?.slug || 'general'
    const folderName = item.folder?.name_ko || item.folder?.name_en || '일반'

    if (!acc[folderSlug]) {
      acc[folderSlug] = {
        name: folderName,
        items: []
      }
    }
    acc[folderSlug].items.push(item)
    return acc
  }, {} as Record<string, { name: string; items: FAQItem[] }>)

  // Filter by search
  const filteredItems = searchQuery
    ? items.filter(item =>
        (item.title_ko || item.title_en).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null

  const displayGroups = filteredItems
    ? { search: { name: '검색 결과', items: filteredItems } }
    : grouped

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-4">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="FAQ 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border bg-background py-3 pl-12 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-muted-foreground">
            {filteredItems?.length || 0}개 결과
          </p>
        )}
      </div>

      {/* FAQ Groups */}
      {Object.entries(displayGroups).map(([folderSlug, group]) => (
        <div key={folderSlug} className="space-y-3">
          {!searchQuery && (
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              {group.name}
            </h3>
          )}

          <div className="space-y-2">
            {group.items.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border bg-card overflow-hidden transition-all hover:border-primary/50"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="font-medium flex-1">
                    {item.title_ko || item.title_en}
                  </span>
                  <ChevronDownIcon
                    className={cn(
                      'h-5 w-5 text-muted-foreground transition-transform flex-shrink-0',
                      openId === item.id && 'rotate-180'
                    )}
                  />
                </button>

                {openId === item.id && (
                  <div className="border-t bg-muted/30 p-4">
                    <article
                      className="prose prose-sm prose-neutral dark:prose-invert max-w-none prose-p:my-2 prose-headings:mb-2 prose-headings:mt-4"
                      dangerouslySetInnerHTML={{
                        __html: item.content_html_ko || item.content_html_en
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {filteredItems && filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  )
}
