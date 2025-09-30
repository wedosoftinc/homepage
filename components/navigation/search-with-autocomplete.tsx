"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MagnifyingGlassIcon as Search } from "@heroicons/react/24/outline"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import productsData from "@/data/products.json"

interface SearchWithAutocompleteProps {
  className?: string
}

interface Product {
  id: string
  name: string
  subtitle: string
  vendor: string
  category: string
}

export function SearchWithAutocomplete({ className }: SearchWithAutocompleteProps) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const router = useRouter()
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  // 모든 제품 데이터 통합
  const allProducts: Product[] = React.useMemo(() => {
    return [
      ...productsData["customer-experience"].map(p => ({ ...p, categoryKey: "customer-experience" })),
      ...productsData["collaboration-productivity"].map(p => ({ ...p, categoryKey: "collaboration" })),
      ...productsData["it-infrastructure"].map(p => ({ ...p, categoryKey: "infrastructure" }))
    ]
  }, [])

  // 검색 결과 필터링
  const filteredProducts = React.useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase()
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.subtitle.toLowerCase().includes(query) ||
      product.vendor.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    ).slice(0, 6) // 최대 6개만 표시
  }, [searchQuery, allProducts])

  // 외부 클릭 감지
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // 키보드 네비게이션
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || filteredProducts.length === 0) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % filteredProducts.length)
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + filteredProducts.length) % filteredProducts.length)
        break
      case "Enter":
        e.preventDefault()
        if (filteredProducts[selectedIndex]) {
          handleSelectProduct(filteredProducts[selectedIndex])
        }
        break
      case "Escape":
        setIsOpen(false)
        break
    }
  }

  const handleSelectProduct = (product: Product) => {
    router.push(`/products/${product.id}`)
    setSearchQuery("")
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setIsOpen(true)
    setSelectedIndex(0)
  }

  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="제품 검색..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery && setIsOpen(true)}
          className="pl-9 pr-4 w-[200px] xl:w-[240px] h-9 bg-transparent border-border focus:border-foreground/50 transition-colors"
          autoComplete="off"
        />
      </div>

      {/* 자동완성 드롭다운 */}
      {isOpen && filteredProducts.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="py-1">
            {filteredProducts.map((product, index) => (
              <button
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                className={cn(
                  "w-full px-4 py-2.5 text-left hover:bg-muted transition-colors flex items-start gap-3",
                  selectedIndex === index && "bg-muted"
                )}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-foreground truncate">
                    {product.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {product.subtitle}
                  </div>
                </div>
                <div className="flex-shrink-0 text-xs text-muted-foreground">
                  {product.vendor}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 검색 결과 없음 */}
      {isOpen && searchQuery && filteredProducts.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 p-4">
          <p className="text-sm text-muted-foreground text-center">
            검색 결과가 없습니다
          </p>
        </div>
      )}
    </div>
  )
}
