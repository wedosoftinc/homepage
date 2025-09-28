'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@/components/ui/visually-hidden'
import { Badge } from '@/components/ui/badge'
import { PlayCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

export interface ProductDemoConfig {
  id: string
  name: string
  title: string
  description: string
  demoUrl: string
  category: string
  features: string[]
}

interface InteractiveProductModalProps {
  product: ProductDemoConfig
  triggerText?: string
  triggerVariant?: 'default' | 'outline' | 'secondary'
  className?: string
}

export function InteractiveProductModal({ 
  product,
  triggerText = "데모 체험하기", 
  triggerVariant = "default",
  className = ""
}: InteractiveProductModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} className={`gap-2 ${className}`}>
          <PlayCircleIcon className="h-5 w-5" />
          {triggerText}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 border-0 bg-transparent">
        <VisuallyHidden>
          <DialogTitle>{product.name} 데모 체험</DialogTitle>
        </VisuallyHidden>
        
        {/* 백드롭 */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

        {/* 상단 컨트롤 바 */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          <div className="flex items-center gap-3 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg border shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">{product.name} 데모</span>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="bg-background/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="h-4 w-4" />
            <span className="sr-only">닫기</span>
          </Button>
        </div>

        {/* 메인 iframe 영역 */}
        <div className="absolute inset-8 top-20 z-10">
          <div className="w-full h-full bg-background rounded-lg shadow-2xl border overflow-hidden">
            <iframe
              src={product.demoUrl}
              className="w-full h-full border-0"
              title={`${product.name} 데모 화면`}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* 하단 정보 바 */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="bg-background/95 backdrop-blur-sm px-4 py-3 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-semibold">{product.title}</h4>
                  <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  💡 {product.description}
                </p>
              </div>
              <Button 
                variant="default" 
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                데모 완료
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}