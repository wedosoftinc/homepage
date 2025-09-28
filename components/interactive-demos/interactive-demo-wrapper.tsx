'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowTopRightOnSquareIcon as ExternalLink, PlayIcon as Play } from "@heroicons/react/24/outline"

interface InteractiveDemoWrapperProps {
  title: string
  description: string
  productName: string
  iframeUrl?: string
  embedHtml?: string
  previewImage?: string
  features?: string[]
}

export function InteractiveDemoWrapper({
  title,
  description,
  productName,
  iframeUrl,
  embedHtml,
  previewImage,
  features = []
}: InteractiveDemoWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenDemo = () => {
    setIsLoading(true)
    setIsModalOpen(true)
  }

  const handleOpenFullscreen = () => {
    if (iframeUrl) {
      window.open(iframeUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Card className="w-full">
      {/* 미리보기 이미지 */}
      {previewImage && (
        <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-t-lg overflow-hidden">
          <img 
            src={previewImage} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // 이미지 로드 실패 시 플레이스홀더 표시
              e.currentTarget.style.display = 'none'
              e.currentTarget.parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
                  <div class="text-center">
                    <div class="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">${productName} 데모</p>
                  </div>
                </div>
              `
            }}
          />
        </div>
      )}

      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <div className="ml-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              {productName}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* 주요 기능 */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((feature, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* CTA 버튼들 */}
        <div className="flex gap-2">
          {(iframeUrl || embedHtml) && (
            <Button 
              onClick={handleOpenDemo}
              className="flex-1"
            >
              <Play className="w-4 h-4 mr-2" />
              체험하기
            </Button>
          )}
          
          {iframeUrl && (
            <Button 
              variant="outline" 
              onClick={handleOpenFullscreen}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              새 탭
            </Button>
          )}

          {!iframeUrl && !embedHtml && (
            <Button variant="outline" disabled className="flex-1">
              준비 중
            </Button>
          )}
        </div>
      </CardContent>

      {/* 임베디드 데모 모달 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
          <DialogHeader className="p-4 border-b bg-white dark:bg-gray-900">
            <DialogTitle className="flex items-center justify-between">
              <span>{title}</span>
              {iframeUrl && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleOpenFullscreen}
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  전체화면
                </Button>
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex-1 relative">
            {isLoading && (
              <div className="absolute inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">데모를 불러오는 중...</p>
                </div>
              </div>
            )}
            
            {iframeUrl && (
              <iframe 
                src={iframeUrl}
                className="w-full h-full border-0"
                title={title}
                onLoad={() => setIsLoading(false)}
                allow="clipboard-read; clipboard-write"
              />
            )}

            {embedHtml && !iframeUrl && (
              <div 
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: embedHtml }}
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}