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
            {product.demoUrl === 'about:blank' ? (
              // 플레이스홀더 화면
              <div className="w-full h-full flex items-center justify-center bg-muted/30">
                <div className="text-center space-y-6 max-w-md px-8">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {product.name} 데모 준비 중
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      현재 인터랙티브 데모를 개발하고 있습니다. 
                      곧 실제 제품 환경에서 직접 체험하실 수 있습니다.
                    </p>
                    <div className="pt-2">
                      <Badge variant="outline" className="text-primary border-primary/50">
                        🚀 곧 출시 예정
                      </Badge>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      미리 상담받고 싶으시다면:
                    </p>
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => {
                        setIsOpen(false)
                        window.open(`/contact?product=${product.id}`, '_blank')
                      }}
                    >
                      전문가 상담 신청
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              // 실제 데모 iframe
              <iframe
                src={product.demoUrl}
                className="w-full h-full border-0"
                title={`${product.name} 데모 화면`}
                allowFullScreen
                loading="lazy"
              />
            )}
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