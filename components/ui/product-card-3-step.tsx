'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { PricingModal } from '@/components/ui/pricing-modal'
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
}

export function ProductCard3Step({ product }: ProductCard3StepProps) {
  const [currentLevel, setCurrentLevel] = useState(1)
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
      <Card className="h-[650px] flex flex-col group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary relative overflow-hidden">
      {/* Level 표시 배지 */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className={`${getLevelBadgeColor()} text-white text-xs font-medium px-2 py-1`}>
          Level {currentLevel}. {getLevelTitle()}
        </Badge>
      </div>

      {/* 헤더 - 고정 */}
      <CardHeader className="pb-4 pr-20">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={product.logo}
              alt={`${product.name} 로고`}
              width={48}
              height={48}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-xl text-foreground mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {product.vendor} 제품
            </p>
            <p className="text-sm text-muted-foreground italic">
              "{product.subtitle}"
            </p>
          </div>
        </div>
      </CardHeader>

      {/* 동적 콘텐츠 영역 */}
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 min-h-0">
          {/* Level 1: 기본 정보 */}
          {currentLevel === 1 && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
                  {product.basic_info.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-foreground">대상 사용자</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {product.basic_info.target_users.slice(0, 3).map((user, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        • {user}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CloudIcon className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-foreground">배포 방식</span>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm text-muted-foreground">
                      {product.basic_info.deployment}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {product.basic_info.languages}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-sm mb-2 text-foreground">
                  핵심 가치 제안
                </h4>
                <div className="grid gap-2">
                  {product.key_features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground font-medium">
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Level 2: 주요 기능 */}
          {currentLevel === 2 && (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-sm mb-3 text-green-900 dark:text-green-100">
                  상세 기능 목록 ({product.key_features.length}개)
                </h4>
              </div>

              <div className="grid gap-3 max-h-[300px] overflow-y-auto">
                {product.key_features.map((feature, index) => (
                  <div key={index} className="p-3 bg-muted/50 rounded-lg border">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircleIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-sm text-foreground mb-1">
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

          {/* Level 3: 고급 정보 */}
          {currentLevel === 3 && (
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-sm text-orange-900 dark:text-orange-100">
                  고급 기술 정보 & 규정 준수
                </h4>
              </div>

              <div className="grid gap-4">
                {/* 시스템 요구사항 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CpuChipIcon className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-foreground">시스템 요구사항</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {getAdvancedInfo().system_requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <CheckCircleIcon className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 보안 & 컴플라이언스 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-foreground">보안 & 컴플라이언스</span>
                  </div>
                  <div className="ml-6 flex flex-wrap gap-1">
                    {getAdvancedInfo().compliance.map((comp, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 통합 가능 서비스 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChatBubbleLeftRightIcon className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium text-foreground">
                      통합 가능 서비스 ({getAdvancedInfo().integrations_count}개+)
                    </span>
                  </div>
                  <div className="ml-6 grid grid-cols-2 gap-1">
                    {product.pricing_integration.integrations.slice(0, 6).map((integration, index) => (
                      <div key={index} className="text-xs text-muted-foreground">
                        • {integration}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 액션 버튼 영역 - 하단 고정 */}
        <div className="pt-4 mt-auto border-t">
          {/* 레벨 내비게이션 */}
          <div className="flex items-center justify-between mb-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevLevel}
              disabled={currentLevel === 1}
              className="text-xs"
            >
              <ChevronLeftIcon className="w-4 h-4 mr-1" />
              이전
            </Button>

            <div className="flex items-center gap-1">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    currentLevel >= level ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentLevel(level)}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextLevel}
              disabled={currentLevel === 3}
              className="text-xs"
            >
              다음
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* CTA 버튼들 */}
          {currentLevel === 3 ? (
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs"
                onClick={() => setIsPricingModalOpen(true)}
              >
                <CurrencyDollarIcon className="w-3 h-3 mr-1" />
                가격보기
              </Button>
              <Button size="sm" className="text-xs">
                상담하기
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs"
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
              className="w-full text-xs"
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