'use client'

import { useState } from 'react'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { 
  CheckIcon,
  XMarkIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// 가격 데이터 임포트
import pricingData from '@/data/pricing-data.json'

interface PricingModalProps {
  isOpen: boolean
  onClose: () => void
  productId: string
  productName: string
}

interface Plan {
  id: string
  name: string
  monthlyPrice: number | null
  yearlyPrice: number | null
  customPricing?: boolean
  sessionPricing?: {
    freeIncluded: number
    additionalPrice: number
    unit: string
  }
  recommended?: boolean
  features: string[]
}

export function PricingModal({ isOpen, onClose, productId, productName }: PricingModalProps) {
  const [isYearly, setIsYearly] = useState(false)

  // 제품 ID 매핑 (products.json의 ID를 pricing-data.json의 키로 변환)
  const getProductPricingKey = (productId: string): string => {
    const mappings: Record<string, string> = {
      'freshdesk': 'freshworks.freshdesk',
      'freshsales': 'freshworks.freshsales', 
      'freshchat': 'freshworks.freshchat',
      'freshservice': 'freshworks.freshservice',
      'freddy-ai': 'ai_addons.freddy-ai',
      'monday-work-management': 'monday.monday-work',
      'monday-dev': 'monday.monday-service', // Monday Dev는 Monday Service와 유사한 가격 구조
      'monday-sales-crm': 'monday.monday-sales',
      'google-workspace': 'google.google-workspace',
      'splashtop': 'splashtop.splashtop'
    }
    return mappings[productId] || productId
  }

  // 중첩된 객체에서 데이터 가져오기
  const getNestedData = (obj: any, path: string) => {
    return path.split('.').reduce((current, key) => current?.[key], obj)
  }

  const getPricingData = (): { plans: Plan[] } | null => {
    const pricingKey = getProductPricingKey(productId)
    const data = getNestedData(pricingData, pricingKey)
    return data || null
  }

  const formatPrice = (price: number | null, isYearly: boolean): string => {
    if (price === null || price === 0) return '무료'
    
    if (isYearly) {
      return `월 $${Math.round(price / 12)}`
    }
    return `월 $${price}`
  }

  const getYearlyDiscount = (monthlyPrice: number | null, yearlyPrice: number | null): number => {
    if (!monthlyPrice || !yearlyPrice || monthlyPrice === 0) return 0
    const yearlyMonthly = yearlyPrice / 12
    const discount = ((monthlyPrice - yearlyMonthly) / monthlyPrice) * 100
    return Math.round(discount)
  }

  const data = getPricingData()
  
  if (!data) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{productName} 가격 정보</DialogTitle>
            <DialogDescription>
              현재 이 제품의 가격 정보를 불러올 수 없습니다.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button asChild>
              <Link href="/pricing">전체 가격 페이지로 이동</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{productName} 가격 플랜</DialogTitle>
          <DialogDescription>
            비즈니스에 가장 적합한 플랜을 선택하세요
          </DialogDescription>
        </DialogHeader>

        {/* 월간/연간 토글 */}
        <div className="flex items-center justify-center gap-4 py-6">
          <span className={`text-sm ${!isYearly ? 'font-semibold' : 'text-muted-foreground'}`}>
            월간 결제
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-primary"
          />
          <span className={`text-sm ${isYearly ? 'font-semibold' : 'text-muted-foreground'}`}>
            연간 결제
          </span>
          {isYearly && (
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
              최대 17% 할인
            </Badge>
          )}
        </div>

        {/* 가격 플랜 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.plans.map((plan) => {
            const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const discount = getYearlyDiscount(plan.monthlyPrice, plan.yearlyPrice)
            
            return (
              <Card 
                key={plan.id} 
                className={`relative ${
                  plan.recommended 
                    ? 'border-primary border-2 ring-2 ring-primary/20' 
                    : 'border-border'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-3 py-1">
                      <StarIcon className="w-3 h-3 mr-1" />
                      추천
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    {plan.customPricing ? (
                      <div className="text-2xl font-bold">맞춤 견적</div>
                    ) : plan.sessionPricing ? (
                      <div className="space-y-1">
                        <div className="text-lg font-semibold">세션 기반</div>
                        <div className="text-sm text-muted-foreground">
                          {plan.sessionPricing.freeIncluded}세션 무료
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="text-3xl font-bold">
                          {formatPrice(currentPrice, isYearly)}
                        </div>
                        {isYearly && discount > 0 && (
                          <div className="text-sm text-green-600">
                            월간 대비 {discount}% 할인
                          </div>
                        )}
                        <div className="text-sm text-muted-foreground">
                          {isYearly ? '연간 결제' : '월간 결제'}
                        </div>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Separator />
                  
                  {/* 기능 목록 */}
                  <div className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CheckIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* CTA 버튼 */}
                  <div className="space-y-2">
                    {plan.customPricing ? (
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">
                          <CurrencyDollarIcon className="w-4 h-4 mr-2" />
                          견적 문의
                        </Link>
                      </Button>
                    ) : (
                      <Button 
                        variant={plan.recommended ? "default" : "outline"} 
                        className="w-full"
                        asChild
                      >
                        <Link href="/contact">
                          시작하기
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 추가 정보 */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="text-sm text-muted-foreground text-center space-y-2">
            <p>• 모든 플랜에는 30일 무료 체험이 포함됩니다</p>
            <p>• 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다</p>
            <p>• 연간 결제 시 추가 할인 혜택을 받으실 수 있습니다</p>
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose}>
            닫기
          </Button>
          <Button asChild>
            <Link href="/contact">
              상담 신청
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}