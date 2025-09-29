'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { PricingModal } from '@/components/ui/pricing-modal'
import { cn } from '@/lib/utils'
import { 
  ChevronRightIcon, 
  ChevronLeftIcon,
  ArrowTopRightOnSquareIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CloudIcon,
  ChatBubbleLeftRightIcon
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

interface AdvancedInfo {
  system_requirements: string[]
  security_features: string[]
  compliance: string[]
  integrations_count: number
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
  advanced_info?: AdvancedInfo
}

interface ProductCard3StepProps {
  product: ProductData
  isHighlighted?: boolean
}

export function ProductCard3Step({ product, isHighlighted = false }: ProductCard3StepProps) {
  const [currentLevel, setCurrentLevel] = useState(isHighlighted ? 2 : 1)
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)

  const nextLevel = () => {
    if (currentLevel < 3) {
      setCurrentLevel(currentLevel + 1)
    }
  }

  const prevLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel(currentLevel - 1)
    }
  }

  const getLevelTitle = () => {
    switch (currentLevel) {
      case 1: return '기본 정보'
      case 2: return '주요 기능'
      case 3: return '고급 정보'
      default: return '기본 정보'
    }
  }

  const getLevelBadgeColor = () => {
    switch (currentLevel) {
      case 1: return 'bg-blue-500'
      case 2: return 'bg-green-500'
      case 3: return 'bg-orange-500'
      default: return 'bg-blue-500'
    }
  }

  // 기본 고급 정보 생성 (데이터에 없는 경우)
  const getAdvancedInfo = (): AdvancedInfo => {
    if (product.advanced_info) {
      return product.advanced_info
    }

    // 제품별 기본 고급 정보
    return {
      system_requirements: [
        '인터넷 연결',
        '웹 브라우저 (Chrome, Safari, Edge)',
        '최소 2GB RAM'
      ],
      security_features: [
        'ISO 27001',
        'GDPR',
        'SOC 2 Type II'
      ],
      compliance: [
        'GDPR 준수',
        'SOC 2',
        '개인정보보호법'
      ],
      integrations_count: product.pricing_integration.integrations.length
    }
  }

  return (
    <>
      <Card className={cn(
        "h-[680px] flex flex-col group transition-all duration-500 relative overflow-hidden",
        "bg-gradient-to-br from-background via-background to-muted/20",
        "border-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
        isHighlighted && "border-primary/50 shadow-xl shadow-primary/20 ring-1 ring-primary/20"
      )}>
        {/* Level 표시 배지 - 통일된 색상 */}
        <div className="absolute top-6 right-6 z-10">
          <Badge className={cn(
            "text-primary-foreground text-xs font-medium px-3 py-1.5 shadow-lg",
            currentLevel === 1 && "bg-gradient-to-r from-primary/90 to-primary",
            currentLevel === 2 && "bg-gradient-to-r from-primary to-primary", 
            currentLevel === 3 && "bg-gradient-to-r from-primary to-primary/90"
          )}>
            Level {currentLevel}. {getLevelTitle()}
          </Badge>
        </div>

        {/* 헤더 - 아이콘 기반으로 개선 */}
        <CardHeader className="pb-6 pr-24 relative">
          <div className="flex items-start gap-4">
            {/* 제품 아이콘 - 모노톤 */}
            <div className="relative w-16 h-16 flex-shrink-0 bg-gradient-to-br from-muted to-muted/60 rounded-2xl flex items-center justify-center border border-border/50 shadow-lg">
              {/* 벤더별 아이콘 - 통일된 테마 색상 */}
              {product.vendor === 'Freshworks' && (
                <div className="w-8 h-8 bg-gradient-to-br from-primary/90 to-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-bold">F</span>
                </div>
              )}
              {product.vendor === 'monday.com' && (
                <div className="w-8 h-8 bg-gradient-to-br from-primary/90 to-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-bold">M</span>
                </div>
              )}
              {product.vendor === 'Google' && (
                <div className="w-8 h-8 bg-gradient-to-br from-primary/90 to-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-bold">G</span>
                </div>
              )}
              {product.vendor === 'Splashtop' && (
                <div className="w-8 h-8 bg-gradient-to-br from-primary/90 to-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-bold">S</span>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-xl text-foreground mb-2 leading-tight">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-muted-foreground px-2 py-1 bg-muted/50 rounded-full border">
                  {product.vendor}
                </span>
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "{product.subtitle}"
              </p>
            </div>
          </div>
          
          {/* 장식적 요소 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        </CardHeader>

        {/* 동적 콘텐츠 영역 - 모노톤 디자인 */}
        <CardContent className="flex-1 flex flex-col px-6">
          <div className="flex-1 min-h-0">
            {/* Level 1: 기본 정보 - 통일된 디자인 */}
            {currentLevel === 1 && (
              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 backdrop-blur-sm">
                  <p className="text-sm text-foreground leading-relaxed font-medium">
                    {product.basic_info.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">대상 사용자</span>
                    </div>
                    <div className="ml-6 space-y-2">
                      {product.basic_info.target_users.slice(0, 3).map((user, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{user}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CloudIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-semibold text-foreground">배포 방식</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      <div className="text-sm text-muted-foreground">
                        {product.basic_info.deployment}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {product.basic_info.languages}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-border/30" />

                <div>
                  <h4 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    핵심 가치 제안
                  </h4>
                  <div className="grid gap-3">
                    {product.key_features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="w-6 h-6 bg-gradient-to-br from-muted to-muted/60 rounded-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                        </div>
                        <span className="text-sm text-foreground font-medium">
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}          {/* Level 2: 주요 기능 - 통일된 디자인 */}
          {currentLevel === 2 && (
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <h4 className="font-semibold text-sm mb-1 text-primary flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  상세 기능 목록 ({product.key_features.length}개)
                </h4>
              </div>

              <div className="grid gap-3 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                {product.key_features.map((feature, index) => (
                  <div key={index} className="group p-4 bg-gradient-to-br from-background to-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-200 hover:shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                        <CheckCircleIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm text-foreground mb-1.5 leading-tight">
                          {feature.title}
                        </h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Level 3: 고급 정보 - 통일된 디자인 */}
          {currentLevel === 3 && (
            <div className="space-y-5">
              <div className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-primary" />
                  고급 기술 정보 & 규정 준수
                </h4>
              </div>

              <div className="grid gap-4">
                {/* 시스템 요구사항 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CpuChipIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">시스템 요구사항</span>
                  </div>
                  <div className="ml-6 space-y-2">
                    {getAdvancedInfo().system_requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3 h-3 text-primary" />
                        <span className="text-xs text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 보안 & 컴플라이언스 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">보안 & 컴플라이언스</span>
                  </div>
                  <div className="ml-6 flex flex-wrap gap-1.5">
                    {getAdvancedInfo().compliance.map((comp, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 통합 가능 서비스 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ChatBubbleLeftRightIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      통합 가능 서비스 ({getAdvancedInfo().integrations_count}개+)
                    </span>
                  </div>
                  <div className="ml-6 grid grid-cols-2 gap-1.5">
                    {product.pricing_integration.integrations.slice(0, 6).map((integration, index) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{integration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 액션 버튼 영역 - 고정 높이로 통일 */}
        <div className="h-[140px] flex flex-col justify-end p-6 pt-4 mt-auto border-t border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          {/* 레벨 내비게이션 - 통일된 색상 */}
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevLevel}
              disabled={currentLevel === 1}
              className="text-xs text-primary hover:text-primary hover:bg-primary/10 disabled:opacity-30 disabled:text-muted-foreground"
            >
              <ChevronLeftIcon className="w-4 h-4 mr-1" />
              이전
            </Button>

            <div className="flex items-center gap-2">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer border",
                    currentLevel >= level 
                      ? 'bg-primary border-primary shadow-sm' 
                      : 'bg-background border-primary/30 hover:border-primary/60'
                  )}
                  onClick={() => setCurrentLevel(level)}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextLevel}
              disabled={currentLevel === 3}
              className="text-xs text-primary hover:text-primary hover:bg-primary/10 disabled:opacity-30 disabled:text-muted-foreground"
            >
              다음
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* CTA 버튼들 - 통일된 색상 */}
          {currentLevel === 3 ? (
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs hover:bg-primary/10 border-primary/30 hover:border-primary text-primary"
                onClick={() => setIsPricingModalOpen(true)}
              >
                <CurrencyDollarIcon className="w-3 h-3 mr-1" />
                가격보기
              </Button>
              <Button 
                size="sm" 
                className="text-xs bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                상담하기
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs hover:bg-primary/10 border-primary/30 hover:border-primary text-primary"
                onClick={() => window.open(product.pricing_integration.technical_resources.documentation_url, '_blank')}
              >
                <ArrowTopRightOnSquareIcon className="w-3 h-3 mr-1" />
                기술문서
              </Button>
            </div>
          ) : (
            <Button
              variant="default"
              size="sm"
              onClick={nextLevel}
              className="w-full text-xs bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            >
              더 알아보기
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Button>
          )}
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