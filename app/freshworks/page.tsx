import { Metadata } from "next"
import { MainNavigation } from "@/components/navigation/main-navigation"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { 
  ChatBubbleLeftRightIcon as MessageSquare, 
  PhoneIcon as Phone, 
  UserGroupIcon as Users,
  CogIcon as Settings,
  ChartBarIcon as BarChart3,
  SparklesIcon as Sparkles
} from "@heroicons/react/24/outline"
import { InteractiveFreshworksModal } from "@/components/interactive-demos/interactive-freshworks-modal"

export const metadata: Metadata = {
  title: "Freshworks - 고객 경험 & 세일즈 관리 솔루션 | We Do Soft",
  description: "Freshworks의 통합 고객 경험 플랫폼으로 고객 서비스, 영업, 마케팅을 혁신하세요. Freshdesk, Freshsales, Freshservice 등 전체 제품군을 소개합니다.",
}

export default function FreshworksPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-muted/20 py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Freshworks 통합 솔루션
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  고객 경험의
                  <span className="text-primary block">새로운 기준</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Freshworks의 통합 플랫폼으로 고객 서비스, 영업, 마케팅, IT 서비스 관리를 
                  하나의 생태계에서 효율적으로 운영하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Experience Section */}
        <section id="interactive" className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Freshworks 인터랙티브 체험
                </h2>
                <p className="text-lg text-muted-foreground">
                  실제 Freshworks 솔루션을 직접 체험해보세요. 
                  풀스크린 인터랙티브 데모로 핵심 기능들을 확인할 수 있습니다.
                </p>
              </div>
              
              {/* 인터랙티브 체험 영역 */}
              <div className="relative aspect-[5/2] rounded-2xl border border-primary/20 overflow-hidden bg-background shadow-lg">
                {/* 작은 iframe 미리보기 */}
                <div className="absolute inset-0">
                  <iframe
                    src="https://interactive-freshworks.vercel.app/"
                    className="w-full h-full border-0 pointer-events-none"
                    title="Freshworks 데모 미리보기"
                    loading="lazy"
                  />
                </div>
                
                {/* 클릭 가능한 오버레이 - 전체 영역 클릭 가능 */}
                <div className="absolute inset-0 cursor-pointer group">
                  {/* 호버 효과 */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* 중앙 Play 버튼 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="h-8 w-8" />
                    </div>
                  </div>
                  
                  {/* 하단 정보 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent p-4">
                    <div className="text-center space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        실제 Freshworks 솔루션 체험
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        클릭하여 풀스크린으로 체험해보세요
                      </p>
                    </div>
                  </div>
                  
                  {/* 실제 모달 트리거 (숨김) */}
                  <InteractiveFreshworksModal 
                    triggerText=""
                    triggerVariant="outline"
                    className="absolute inset-0 opacity-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - 체험 후 액션 유도 */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold">
                  체험해보셨나요? 이제 다음 단계로!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Freshworks 솔루션이 귀하의 비즈니스에 어떻게 도움이 될지 자세히 알아보세요
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <Button asChild size="lg" className="h-auto p-6 flex-col gap-2">
                    <Link href="/pricing">
                      <span className="text-2xl">💰</span>
                      <div className="text-center">
                        <div className="font-semibold">맞춤 견적</div>
                        <div className="text-xs opacity-90">가격 확인하기</div>
                      </div>
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="h-auto p-6 flex-col gap-2">
                    <Link href="https://docs.wedosoft.net" target="_blank" rel="noopener noreferrer">
                      <span className="text-2xl">📚</span>
                      <div className="text-center">
                        <div className="font-semibold">제품 상세</div>
                        <div className="text-xs opacity-90">문서 보기</div>
                      </div>
                    </Link>
                  </Button>
                  
                  <Button asChild variant="secondary" size="lg" className="h-auto p-6 flex-col gap-2">
                    <Link href="/contact">
                      <span className="text-2xl">💬</span>
                      <div className="text-center">
                        <div className="font-semibold">전문가 상담</div>
                        <div className="text-xs opacity-90">1:1 컨설팅</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Freshworks 제품군
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  고객 경험의 모든 단계를 지원하는 Freshworks의 통합 솔루션을 만나보세요.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Freshdesk */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Freshdesk</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          고객 서비스
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      고객 문의를 효율적으로 관리하고 만족도를 높이는 헬프데스크 솔루션
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        멀티채널 고객 지원
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        자동화된 티켓 관리
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        실시간 고객 만족도 측정
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href="https://docs.wedosoft.net/freshdesk" target="_blank" rel="noopener noreferrer">
                          📚 상세 문서
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link href="/contact?product=freshdesk">
                          💬 상담하기
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Freshsales */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Freshsales</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          영업 관리
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      영업 프로세스를 최적화하고 매출 성장을 가속화하는 CRM 솔루션
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        리드 관리 및 스코링
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        영업 파이프라인 시각화
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        AI 기반 영업 인사이트
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href="https://docs.wedosoft.net/freshsales" target="_blank" rel="noopener noreferrer">
                          📚 상세 문서
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link href="/contact?product=freshsales">
                          💬 상담하기
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Freshservice */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Settings className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Freshservice</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          IT 서비스 관리
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      IT 서비스와 자산을 체계적으로 관리하는 ITSM 솔루션
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        IT 인시던트 관리
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        자산 및 변경 관리
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        셀프서비스 포털
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href="https://docs.wedosoft.net/freshservice" target="_blank" rel="noopener noreferrer">
                          📚 상세 문서
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link href="/contact?product=freshservice">
                          💬 상담하기
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Freshchat */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Freshchat</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          실시간 채팅
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      고객과의 실시간 대화를 통한 즉시 지원 솔루션
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        실시간 채팅 지원
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        챗봇 자동화
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        멀티플랫폼 연동
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href="https://docs.wedosoft.net/freshchat" target="_blank" rel="noopener noreferrer">
                          📚 상세 문서
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link href="/contact?product=freshchat">
                          💬 상담하기
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Freddy AI */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Freddy AI</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          AI 어시스턴트
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      AI 기반 고객 경험 최적화 및 업무 자동화 솔루션
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        지능형 티켓 라우팅
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        예측 분석 및 인사이트
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        자동화된 워크플로우
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href="https://docs.wedosoft.net/freddy-ai" target="_blank" rel="noopener noreferrer">
                          📚 상세 문서
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link href="/contact?product=freddy-ai">
                          💬 상담하기
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Freshdesk Omni */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Freshdesk Omni</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          옴니채널 지원
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      모든 채널을 통합한 완전한 고객 경험 관리 솔루션
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        통합 고객 여정 관리
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        크로스채널 상황 인식
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        360도 고객 뷰
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href="https://docs.wedosoft.net/freshdesk-omni" target="_blank" rel="noopener noreferrer">
                          📚 상세 문서
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link href="/contact?product=freshdesk-omni">
                          💬 상담하기
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Freshworks로 고객 경험을 혁신하세요
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  전문 컨설턴트와 함께 귀하의 비즈니스에 최적화된 Freshworks 솔루션을 설계해보세요.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    무료 상담 신청
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:02-2135-3071">
                    <Phone className="h-5 w-5 mr-2" />
                    전화 문의 (02-2135-3071)
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}