'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowTopRightOnSquareIcon as ExternalLink, PlayIcon as Play } from "@heroicons/react/24/outline"

interface InteractiveDemoProps {
  title: string
  description: string
  demoUrl: string
  productSlug: string
  features?: string[]
}

export function InteractiveDemo({
  title,
  description, 
  demoUrl,
  productSlug,
  features = []
}: InteractiveDemoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenDemo = () => {
    setIsLoading(true)
    setIsModalOpen(true)
  }

  const handleOpenFullscreen = () => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="w-full">
      {/* 메인 데모 카드 */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/30">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {description}
            </p>
          </div>

          {/* 주요 기능 미리보기 */}
          {features.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {features.map((feature, index) => (
                <span 
                  key={index}
                  className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* CTA 버튼들 */}
          <div className="space-y-2">
            <Button 
              onClick={handleOpenDemo}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Play className="w-4 h-4 mr-2" />
              지금 체험하기
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleOpenFullscreen}
              className="w-full text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              새 탭에서 열기
            </Button>
          </div>
          
          <div className="text-xs text-gray-500 dark:text-gray-400">
            💡 실제 기능을 클릭해서 체험해보세요
          </div>
        </div>
      </div>

      {/* 임베디드 데모 모달 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
          <DialogHeader className="p-4 border-b bg-white dark:bg-gray-900">
            <DialogTitle className="flex items-center justify-between">
              <span>{title} 체험</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleOpenFullscreen}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                전체화면
              </Button>
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
            
            <iframe 
              src={demoUrl}
              className="w-full h-full border-0"
              title={title}
              onLoad={() => setIsLoading(false)}
              allow="clipboard-read; clipboard-write"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}