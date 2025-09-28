'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { InteractiveProductModal, ProductDemoConfig } from './interactive-product-modal'
import { 
  SparklesIcon as Sparkles,
  ChatBubbleLeftRightIcon as MessageSquare,
  CogIcon as Settings,
  ChartBarIcon as BarChart3,
  CheckCircleIcon as CheckCircle
} from '@heroicons/react/24/outline'

// 상세 제품 데모 설정 (Freshdesk 세부기능 탭 스타일)
interface DetailedProductTab {
  id: string
  label: string
  title: string
  description: string
  feature: {
    title: string
    description: string
    items: string[]
  }
  demoConfig: ProductDemoConfig
}

const DETAILED_PRODUCT_TABS: DetailedProductTab[] = [
  {
    id: 'freshdesk-omni',
    label: 'Freshdesk Omni',
    title: '옴니채널 고객 서비스',
    description: '채팅, 티켓, 전화를 통합한 고객 지원 워크플로우를 체험해보세요',
    feature: {
      title: '통합 옴니채널 플랫폼',
      description: '모든 고객 접점을 하나의 플랫폼에서 통합 관리하여 일관된 서비스 경험을 제공합니다. 채널 간 전환 시에도 고객 맥락이 유지되어 효율적인 문제 해결이 가능합니다.',
      items: [
        '이메일, 전화, 채팅, 소셜미디어 통합 관리',
        '채널 간 고객 대화 맥락 유지',
        'AI 기반 티켓 자동 분류 및 라우팅',
        '실시간 고객 만족도 측정',
        '통합 에이전트 워크스페이스'
      ]
    },
    demoConfig: {
      id: 'freshdesk-omni',
      name: 'Freshdesk Omni',
      title: '옴니채널 고객 서비스',
      description: '채팅, 티켓, 전화를 통합한 고객 지원 워크플로우를 체험해보세요',
      demoUrl: 'https://interactive-freshworks.vercel.app/',
      category: '고객 서비스',
      features: ['멀티채널 지원', '티켓 자동화', '고객 만족도 측정', '실시간 채팅']
    }
  },
  {
    id: 'freshservice',
    label: 'Freshservice',
    title: 'IT 서비스 관리',
    description: 'IT 인시던트부터 자산 관리까지 ITSM 워크플로우를 확인하세요',
    feature: {
      title: 'IT 서비스 관리 플랫폼',
      description: 'ITIL 기반 IT 서비스 관리로 인시던트 해결 시간을 단축하고 IT 자산을 효율적으로 관리합니다. 셀프서비스 포털로 사용자 요청을 자동화하여 IT 팀의 업무 부담을 줄입니다.',
      items: [
        'ITIL 기반 인시던트 및 변경 관리',
        '자동화된 IT 자산 디스커버리',
        '셀프서비스 포털 및 지식베이스',
        'SLA 관리 및 성능 모니터링',
        '모바일 지원 및 오프라인 작업'
      ]
    },
    demoConfig: {
      id: 'freshservice',
      name: 'Freshservice',
      title: 'IT 서비스 관리',
      description: 'IT 인시던트부터 자산 관리까지 ITSM 워크플로우를 확인하세요',
      demoUrl: 'https://interactive-freshworks.vercel.app/',
      category: 'IT 관리',
      features: ['인시던트 관리', '자산 추적', '변경 관리', '셀프서비스 포털']
    }
  },
  {
    id: 'freshsales',
    label: 'Freshsales',
    title: '영업 관리 시스템',
    description: '리드 관리부터 거래 성사까지 영업 프로세스를 경험해보세요',
    feature: {
      title: 'AI 기반 영업 관리',
      description: '리드 스코링부터 거래 예측까지 AI가 영업 프로세스 전반을 지원합니다. 이메일 연동과 자동화로 영업팀이 고객 관계에만 집중할 수 있는 환경을 제공합니다.',
      items: [
        'AI 기반 리드 스코링 및 예측 분석',
        '이메일 및 전화 자동 로깅',
        '파이프라인 및 거래 단계별 관리',
        '맞춤형 영업 보고서 및 대시보드',
        'Google Workspace 및 Office 365 연동'
      ]
    },
    demoConfig: {
      id: 'freshsales',
      name: 'Freshsales',
      title: '영업 관리 시스템',
      description: '리드 관리부터 거래 성사까지 영업 프로세스를 경험해보세요',
      demoUrl: 'https://interactive-freshworks.vercel.app/',
      category: '영업 관리',
      features: ['리드 스코링', '파이프라인 관리', 'AI 예측 분석', '이메일 연동']
    }
  }
]

export function InteractiveFreshworksSelector() {
  return (
    <div className="max-w-6xl mx-auto">
      <Tabs defaultValue={DETAILED_PRODUCT_TABS[0].id} className="w-full">
        <TabsList className="grid w-full max-w-3xl mx-auto mb-12 h-14" style={{ gridTemplateColumns: `repeat(${DETAILED_PRODUCT_TABS.length}, 1fr)` }}>
          {DETAILED_PRODUCT_TABS.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="text-base font-medium px-6 py-3 h-12">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {DETAILED_PRODUCT_TABS.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="space-y-8">
            {/* 탭 콘텐츠 - 3:7 비율 레이아웃 */}
            <div className="grid lg:grid-cols-10 gap-8 items-stretch">
              {/* 좌측: 기능 설명 (3/10 비율) */}
              <div className="lg:col-span-3">
                <Card className="p-6 h-full">
                  <CardContent className="p-0">
                    <div className="space-y-6 h-full flex flex-col">
                      <div className="space-y-4 flex-1">
                        <div>
                          <h4 className="text-base font-medium mb-3">{tab.feature.title}</h4>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {tab.feature.description}
                          </p>
                        </div>
                        <ul className="space-y-3">
                          {tab.feature.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 우측: 인터랙티브 데모 영역 (7/10 비율) */}
              <div className="lg:col-span-7">
                <Card className="h-full min-h-[500px] overflow-hidden bg-gradient-to-br from-background to-muted/20">
                  <div className="relative h-full">
                    {/* iframe 미리보기 */}
                    <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-inner border border-border/30">
                      <iframe
                        key={tab.id} // 탭 변경시 iframe 새로고침
                        src={tab.demoConfig.demoUrl}
                        className="w-full h-full border-0 pointer-events-none"
                        title={`${tab.demoConfig.name} 데모 미리보기`}
                        loading="lazy"
                      />
                    </div>
                    
                    {/* 클릭 가능한 오버레이 */}
                    <div className="absolute inset-0 cursor-pointer group">
                      {/* 호버 효과 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                      
                      {/* 중앙 Play 버튼 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping group-hover:animate-none" />
                          <div className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-full shadow-2xl group-hover:scale-110 group-hover:shadow-primary/25 transition-all duration-300">
                            <Sparkles className="h-10 w-10" />
                          </div>
                        </div>
                      </div>
                      
                      {/* 상단 정보 */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 border shadow-lg">
                          <div className="text-xs font-medium text-primary/80 uppercase tracking-wide mb-1">
                            인터랙티브 데모
                          </div>
                          <h4 className="text-sm font-semibold text-foreground">
                            {tab.title}
                          </h4>
                        </div>
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          {tab.demoConfig.category}
                        </Badge>
                      </div>
                      
                      {/* 하단 설명 */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-3 border shadow-lg">
                          <p className="text-sm text-muted-foreground mb-2">
                            {tab.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {tab.demoConfig.features.slice(0, 3).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* 실제 모달 트리거 (숨김) */}
                      <InteractiveProductModal 
                        product={tab.demoConfig}
                        triggerText=""
                        triggerVariant="outline"
                        className="absolute inset-0 opacity-0 w-full h-full"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}