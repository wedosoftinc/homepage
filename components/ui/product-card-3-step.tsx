'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PricingModal } from '@/components/ui/pricing-modal'
import { FeatureDetailModal } from '@/components/ui/feature-detail-modal'
import { 
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  CloudIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import { Separator } from '@/components/ui/separator'

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

interface SuccessMetrics {
  companies: string
  metric_label: string
  metric_value: string
  satisfaction: string
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
  success_metrics?: SuccessMetrics
}

interface ProductCard3StepProps {
  product: ProductData
}

export function ProductCard3Step({ product }: ProductCard3StepProps) {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<ProductFeature | null>(null)
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

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
      case 1: return '주요 특징'
      case 2: return '상세 기능'
      case 3: return '구매 안내'
      default: return '주요 특징'
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

  // 성과 지표 가져오기 (제품별 또는 벤더별 기본값)
  const getSuccessMetrics = (): SuccessMetrics => {
    if (product.success_metrics) {
      return product.success_metrics
    }

    // 벤더별 기본값
    const vendorDefaults: Record<string, SuccessMetrics> = {
      'Freshworks': {
        companies: '73,000+',
        metric_label: '응답 시간 단축',
        metric_value: '83%',
        satisfaction: '4.5/5.0'
      },
      'Monday.com': {
        companies: '245,000+',
        metric_label: '프로젝트 완료율',
        metric_value: '92%',
        satisfaction: '4.6/5.0'
      },
      'Google': {
        companies: '8M+',
        metric_label: '협업 효율 향상',
        metric_value: '40%',
        satisfaction: '4.7/5.0'
      },
      'Splashtop': {
        companies: '30M+',
        metric_label: '연결 성공률',
        metric_value: '99.9%',
        satisfaction: '4.5/5.0'
      }
    }

    return vendorDefaults[product.vendor] || {
      companies: '10,000+',
      metric_label: '생산성 향상',
      metric_value: '45%',
      satisfaction: '4.8/5.0'
    }
  }

  const successMetrics = getSuccessMetrics()

  return (
    <>
      <Card 
        id={product.id} 
        className="h-[650px] flex flex-col group hover:shadow-lg transition-all duration-300 relative overflow-hidden scroll-mt-24"
      >
      {/* 단계 표시 배지 */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className={`${getLevelBadgeColor()} text-white text-xs font-medium px-2 py-1`}>
          {getLevelTitle()}
        </Badge>
      </div>

      {/* 헤더 - 고정 */}
      <CardHeader className="pb-4 pr-20 flex-shrink-0">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl md:text-2xl text-foreground">
            {product.name}
          </h3>
        </div>
      </CardHeader>

      {/* 동적 콘텐츠 영역 */}
      <CardContent className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto pr-2">
          {/* Level 1: 기본 정보 */}
          {currentLevel === 1 && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
                  {product.basic_info.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-base font-medium text-foreground">주요 활용 분야</span>
                  </div>
                  <div className="ml-1 space-y-1">
                    {product.basic_info.target_users.slice(0, 3).map((user, index) => (
                      <div key={index} className="text-base text-muted-foreground">
                        • {user}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CloudIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-base font-medium text-foreground">도입 효과</span>
                  </div>
                  <div className="ml-1 space-y-1">
                    <div className="text-base text-muted-foreground">
                      • 업무 생산성 향상
                    </div>
                    <div className="text-base text-muted-foreground">
                      • 운영 비용 절감
                    </div>
                    <div className="text-base text-muted-foreground">
                      • {product.basic_info.languages}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-base mb-3 text-foreground">
                  핵심 가치 제안
                </h4>
                <div className="grid gap-3">
                  {product.key_features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5"></div>
                        <div className="flex-1 min-w-0">
                          <span className="text-base text-foreground font-semibold block">
                            {feature.title}
                          </span>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Level 2: 주요 기능 */}
          {currentLevel === 2 && (
            <div className="space-y-4">
              <div className="grid gap-3 max-h-[300px] md:max-h-[400px] lg:max-h-[450px] overflow-y-auto">
                {product.key_features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-muted/50 rounded-lg border cursor-pointer hover:bg-muted/80 hover:border-primary/50 transition-all"
                    onClick={() => {
                      setSelectedFeature(feature)
                      setIsFeatureModalOpen(true)
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircleIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-base text-foreground mb-1">
                          {feature.title}
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {feature.description}
                        </p>
                      </div>
                      <ChevronRightIcon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center pt-2">
                각 기능을 클릭하여 자세한 내용을 확인하세요
              </p>
            </div>
          )}

          {/* Level 3: 구매 안내 */}
          {currentLevel === 3 && (
            <div className="space-y-4">
              {/* 검증된 도입 성과 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <ChartBarIcon className="w-5 h-5 text-blue-500" />
                  <span className="text-base font-medium text-foreground">검증된 도입 성과</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-primary">{successMetrics.companies}</div>
                    <div className="text-sm text-muted-foreground">도입 기업</div>
                  </div>
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-primary">{successMetrics.metric_value}</div>
                    <div className="text-sm text-muted-foreground">{successMetrics.metric_label}</div>
                  </div>
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-primary">{successMetrics.satisfaction}</div>
                    <div className="text-sm text-muted-foreground">고객 만족도</div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* 통합 가능 서비스 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-500" />
                  <span className="text-base font-medium text-foreground">
                    통합 생태계 (200+)
                  </span>
                </div>
                <div className="ml-1 grid grid-cols-2 gap-1">
                  {product.pricing_integration.integrations.slice(0, 6).map((integration, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      • {integration}
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* 전문 지원 서비스 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <UserGroupIcon className="w-5 h-5 text-green-500" />
                  <span className="text-base font-medium text-foreground">전문 지원 서비스</span>
                </div>
                <div className="ml-1 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-base font-medium text-foreground">한국어 전담 지원팀</div>
                      <div className="text-sm text-muted-foreground">풍부한 경험의 상담사가 기술 지원</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AcademicCapIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-base font-medium text-foreground">온보딩 교육</div>
                      <div className="text-sm text-muted-foreground">전문가 맞춤 교육 제공</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-base font-medium text-foreground">데이터 마이그레이션</div>
                      <div className="text-sm text-muted-foreground">안전한 데이터 이전 지원</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 액션 버튼 영역 - 하단 고정 */}
        <div className="pt-4 mt-4 border-t flex-shrink-0">
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

          {/* CTA 버튼들 - 항상 3개 버튼 표시 */}
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
            <Button 
              size="sm" 
              className="text-xs"
              onClick={currentLevel === 3 ? () => window.location.href = '/contact' : nextLevel}
            >
              {currentLevel === 3 ? '상담하기' : '더 알아보기'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs"
              onClick={() => window.open(`https://docs.wedosoft.net/${product.id}`, '_blank')}
            >
              <ArrowTopRightOnSquareIcon className="w-3 h-3 mr-1" />
              기술문서
            </Button>
          </div>
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

      {/* 기능 상세 모달 */}
      <FeatureDetailModal
        isOpen={isFeatureModalOpen}
        onClose={() => setIsFeatureModalOpen(false)}
        feature={selectedFeature}
      />
    </>
  )
}