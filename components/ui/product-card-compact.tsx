'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PricingModal } from '@/components/ui/pricing-modal'
import { 
  ChevronRightIcon,
  CheckCircleIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

// 제품 데이터 타입 정의
interface ProductFeature {
  title: string
  description: string
  icon: string
}

interface PricingTier {
  name: string
  description: string
  starting_price: string
  key_limits: string
}

interface TechnicalResources {
  documentation_url: string
  api_docs: string
  setup_guide: string
  video_tutorials: string
}

interface ProductData {
  id: string
  name: string
  subtitle: string
  logo: string
  category: string
  vendor: string
  basic_info: {
    description: string
    target_users: string[]
    deployment: string
    languages: string
  }
  key_features: ProductFeature[]
  pricing_integration: {
    pricing_tiers: PricingTier[]
    integrations: string[]
    technical_resources: TechnicalResources
  }
  advanced_info?: any
}

interface ProductCardCompactProps {
  product: ProductData
}

export function ProductCardCompact({ product }: ProductCardCompactProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)

  return (
    <>
      <Card className="h-[420px] flex flex-col group hover:shadow-xl transition-all duration-300 border hover:border-primary/30">
        {/* 헤더 - 최소화 */}
        <CardHeader className="pb-3 pt-4 px-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <Badge variant="outline" className="text-xs mb-2">
                {product.vendor}
              </Badge>
              <h3 className="font-bold text-lg text-foreground line-clamp-1">
                {product.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                {product.subtitle}
              </p>
            </div>
          </div>
        </CardHeader>

        {/* 콘텐츠 영역 - 고정 높이 */}
        <CardContent className="flex-1 flex flex-col px-4 pb-4 min-h-0">
          <div className="flex-1 overflow-hidden">
            {!isExpanded ? (
              // 기본 뷰 - 간결한 정보
              <div className="space-y-3 h-full flex flex-col">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {product.basic_info.description}
                  </p>
                </div>

                {/* 핵심 기능 미리보기 */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    주요 기능
                  </h4>
                  <div className="space-y-1.5">
                    {product.key_features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-foreground line-clamp-1">
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 대상 사용자 */}
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">대상:</span> {product.basic_info.target_users.slice(0, 2).join(', ')}
                  </p>
                </div>
              </div>
            ) : (
              // 확장 뷰 - 상세 정보
              <div className="h-full overflow-y-auto space-y-3 pr-2">
                {/* 모든 주요 기능 */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide sticky top-0 bg-card py-1">
                    상세 기능 ({product.key_features.length})
                  </h4>
                  <div className="space-y-2">
                    {product.key_features.map((feature, index) => (
                      <div key={index} className="p-2 bg-muted/30 rounded border">
                        <div className="flex items-start gap-2">
                          <CheckCircleIcon className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-xs text-foreground">
                              {feature.title}
                            </h5>
                            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 통합 정보 */}
                {product.pricing_integration.integrations.length > 0 && (
                  <div className="pt-2 border-t">
                    <h4 className="text-xs font-semibold text-foreground mb-1">
                      주요 연동
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {product.pricing_integration.integrations.slice(0, 5).join(', ')}
                      {product.pricing_integration.integrations.length > 5 && ' 외 다수'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 하단 버튼 영역 - 고정 */}
          <div className="mt-3 pt-3 border-t space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? '간단히 보기' : '더 알아보기'}
              <ChevronRightIcon className={`w-3 h-3 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            </Button>
            
            <Button
              size="sm"
              className="w-full text-xs"
              onClick={() => setIsPricingModalOpen(true)}
            >
              <CurrencyDollarIcon className="w-3 h-3 mr-1" />
              가격 확인
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 가격 모달 */}
      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        productId={product.id}
        productName={product.name}
      />
    </>
  )
}
