'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import productsData from '@/data/products.json'
import Link from 'next/link'

interface SearchModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface Product {
  id: string
  name: string
  subtitle: string
  vendor: string
  category: string
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Array<Product & { categoryKey: string }>>([])

  // 모든 제품 데이터 통합
  const allProducts = [
    ...productsData['customer-experience'].map(p => ({ ...p, categoryKey: 'customer-experience' })),
    ...productsData['collaboration-productivity'].map(p => ({ ...p, categoryKey: 'collaboration' })),
    ...productsData['it-infrastructure'].map(p => ({ ...p, categoryKey: 'infrastructure' }))
  ]

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const searchQuery = query.toLowerCase()
    const filtered = allProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery) ||
      product.subtitle.toLowerCase().includes(searchQuery) ||
      product.vendor.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
    )

    setResults(filtered.slice(0, 8)) // 최대 8개 결과
  }, [query])

  const getCategoryLabel = (categoryKey: string) => {
    switch (categoryKey) {
      case 'customer-experience':
        return '고객 경험'
      case 'collaboration':
        return '협업'
      case 'infrastructure':
        return 'IT 인프라'
      default:
        return ''
    }
  }

  const handleLinkClick = () => {
    onOpenChange(false)
    setQuery('')
    setResults([])
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>제품 검색</DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="제품명, 벤더, 카테고리로 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12 text-base"
            autoFocus
          />
        </div>

        <div className="flex-1 overflow-y-auto mt-4">
          {query.trim() === '' && (
            <div className="text-center py-12 text-muted-foreground">
              <MagnifyingGlassIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>제품을 검색해보세요</p>
            </div>
          )}

          {query.trim() !== '' && results.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>검색 결과가 없습니다</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-2">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={handleLinkClick}
                  className="block p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-base truncate">
                          {product.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">
                          {getCategoryLabel(product.categoryKey)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {product.subtitle}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {product.vendor}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
