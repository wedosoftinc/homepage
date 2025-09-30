import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  UsersIcon, 
  RocketLaunchIcon, 
  ChartBarIcon,
  ClockIcon,
  PuzzlePieceIcon,
  GlobeAltIcon,
  LightBulbIcon,
  BoltIcon
} from "@heroicons/react/24/outline"

// 제품 카드 임포트
import { ProductCard3Step } from '@/components/ui/product-card-3-step'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 제품 데이터 임포트
import productsData from "@/data/products.json"

export const metadata: Metadata = {
  title: "협업 및 생산성 향상 솔루션 | We Do Soft",
  description: "Monday.com과 Google Workspace로 팀 협업과 생산성을 혁신하세요. 프로젝트 관리부터 클라우드 오피스까지 통합 솔루션을 제공합니다.",
}

export default function CollaborationPage() {
  // 협업 및 생산성 제품들
  const collaborationProducts = productsData["collaboration-productivity"]

  return (
    <>
      {/* Hero Section - 모던하고 임팩트 있는 디자인 */}
      <section className="relative bg-gradient-to-br from-purple/5 via-background to-blue/5 py-20 lg:py-32 overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                <RocketLaunchIcon className="w-4 h-4 mr-2" />
                Collaboration & Productivity Solutions
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                팀워크를 
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  혁신하는
                </span>
                <br />
                스마트한 협업
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Monday.com과 Google Workspace의 완벽한 조합으로 
                <br className="hidden lg:block" />
                팀의 생산성과 창의성을 극대화하세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  <LightBulbIcon className="w-5 h-5 mr-2" />
                  무료 상담 받기
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/pricing">
                  <BoltIcon className="w-5 h-5 mr-2" />
                  가격 정보
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 가치 제안 섹션 */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                왜 협업 플랫폼이 필요할까요?
              </h2>
              <p className="text-xl text-muted-foreground">
                원격근무와 하이브리드 업무 환경에서 효율적인 협업은 필수가 되었습니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple/10 to-purple/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <UsersIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">팀 시너지 극대화</h3>
                <p className="text-muted-foreground leading-relaxed">
                  실시간 협업과 투명한 소통으로 
                  팀의 창의성과 효율성을 동시에 향상시키세요
                </p>
              </Card>

              <Card className="text-center p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue/10 to-blue/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RocketLaunchIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">생산성 혁명</h3>
                <p className="text-muted-foreground leading-relaxed">
                  자동화 워크플로우와 스마트한 도구로 
                  반복 업무를 줄이고 핵심 업무에 집중하세요
                </p>
              </Card>

              <Card className="text-center p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green/10 to-green/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ChartBarIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">데이터 기반 인사이트</h3>
                <p className="text-muted-foreground leading-relaxed">
                  프로젝트 진행 상황과 팀 성과를 
                  실시간으로 분석하고 최적화하세요
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 제품 카드 섹션 - 탭 기반 필터링 */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                협업 & 생산성 솔루션
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                프로젝트 관리부터 클라우드 오피스까지, 완벽한 협업 생태계를 구축하세요
              </p>
            </div>

            {/* 탭 기반 제품 필터링 - 용도 기준 */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="all">전체 (4)</TabsTrigger>
                <TabsTrigger value="project">프로젝트 관리 (3)</TabsTrigger>
                <TabsTrigger value="office">클라우드 오피스 (1)</TabsTrigger>
              </TabsList>

              {/* 전체 보기 */}
              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collaborationProducts.map((product) => (
                    <ProductCard3Step key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              {/* 프로젝트 관리 제품 */}
              <TabsContent value="project" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collaborationProducts
                    .filter((p) => 
                      p.id === "monday-work-management" || 
                      p.id === "monday-dev" || 
                      p.id === "monday-sales-crm"
                    )
                    .map((product) => (
                      <ProductCard3Step key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              {/* 클라우드 오피스 제품 */}
              <TabsContent value="office" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collaborationProducts
                    .filter((p) => p.id === "google-workspace")
                    .map((product) => (
                      <ProductCard3Step key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section - 강화된 디자인 */}
      <section className="py-20 lg:py-32 relative">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-blue/5" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                협업 혁신을 시작하세요
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                전문 컨설턴트가 귀하의 팀에 최적화된 
                협업 환경과 생산성 향상 전략을 제안합니다
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  무료 상담 신청
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/services/consulting">
                  컨설팅 서비스
                </Link>
              </Button>
            </div>

            {/* 성과 지표 */}
            <div className="grid md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">협업 도구 구축 사례</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground">업무 효율성 증대</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">기술 지원</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}