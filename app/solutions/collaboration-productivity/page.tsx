import { Metadata } from "next"
import { MainNavigation } from "@/components/navigation/main-navigation"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { 
  RocketLaunchIcon, 
  UsersIcon, 
  Cog6ToothIcon,
  ChartPieIcon,
  ClockIcon,
  ChatBubbleLeftEllipsisIcon
} from "@heroicons/react/24/outline"

// 3단계 제품 카드 임포트
import { ProductCard3Step } from "@/components/ui/product-card-3-step"

// 제품 데이터 임포트
import productsData from "@/data/products.json"

export const metadata: Metadata = {
  title: "협업 및 생산성 향상 솔루션 | We Do Soft",
  description: "Monday.com과 Google Workspace로 팀 협업과 업무 효율성을 극대화하세요. 프로젝트 관리부터 클라우드 오피스까지.",
}

export default function CollaborationProductivityPage() {
  // 협업 및 생산성 제품들
  const collaborationProducts = productsData["collaboration-productivity"]

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
                  Collaboration & Productivity Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  팀워크와 생산성의
                  <span className="text-primary block">완벽한 조화</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  직관적인 프로젝트 관리와 클라우드 협업 도구로 
                  팀의 잠재력을 최대한 발휘하세요.
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    무료 상담 받기
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing">
                    가격 정보
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 솔루션 개요 */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  왜 통합 협업 플랫폼인가?
                </h2>
                <p className="text-lg text-muted-foreground">
                  분산된 팀도 하나처럼 움직일 수 있는 협업 생태계를 구축합니다
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <RocketLaunchIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">프로젝트 관리</h3>
                  <p className="text-sm text-muted-foreground">
                    비주얼 보드와 자동화로 프로젝트 진행을 투명하게 관리
                  </p>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">실시간 협업</h3>
                  <p className="text-sm text-muted-foreground">
                    문서, 스프레드시트, 프레젠테이션을 동시에 편집
                  </p>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ChartPieIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">성과 분석</h3>
                  <p className="text-sm text-muted-foreground">
                    실시간 대시보드로 팀 성과와 생산성 지표 추적
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
                  협업 및 생산성 솔루션
                </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Monday.com의 직관적 프로젝트 관리와 Google Workspace의 강력한 협업 도구
              </p>
            </div>              {/* 탭 기반 제품 필터링 */}
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
                  <TabsTrigger value="all">전체 보기 (5)</TabsTrigger>
                  <TabsTrigger value="monday">Monday.com (4)</TabsTrigger>
                  <TabsTrigger value="google">Google (1)</TabsTrigger>
                  <TabsTrigger value="project">프로젝트 관리</TabsTrigger>
                </TabsList>

                {/* 전체 보기 */}
                <TabsContent value="all" className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collaborationProducts.map((product) => (
                      <ProductCard3Step key={product.id} product={product} />
                    ))}
                  </div>
                </TabsContent>

                {/* Monday.com 제품 */}
                <TabsContent value="monday" className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collaborationProducts
                      .filter((p) => p.vendor === "Monday.com")
                      .map((product) => (
                        <ProductCard3Step key={product.id} product={product} />
                      ))}
                  </div>
                </TabsContent>

                {/* Google 제품 */}
                <TabsContent value="google" className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collaborationProducts
                      .filter((p) => p.vendor === "Google")
                      .map((product) => (
                        <ProductCard3Step key={product.id} product={product} />
                      ))}
                  </div>
                </TabsContent>

                {/* 프로젝트 관리 제품 */}
                <TabsContent value="project" className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collaborationProducts
                      .filter((p) => 
                        p.id === "monday-work-management" || 
                        p.id === "monday-dev"
                      )
                      .map((product) => (
                        <ProductCard3Step key={product.id} product={product} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  팀 생산성 혁신을 시작하세요
                </h2>
                <p className="text-lg text-muted-foreground">
                  전문가와 함께 귀하의 팀에 최적화된 협업 환경을 구축합니다
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    무료 상담 신청
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services/consulting">
                    컨설팅 서비스
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">팀 생산성 프로젝트</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">업무 효율성 향상</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">클라우드 접근성</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}