import { Metadata } from "next"
import { MainNavigation } from "@/components/navigation/main-navigation"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { 
  UsersIcon, 
  RocketLaunchIcon, 
  ChartBarIcon,
  ClockIcon,
  PuzzlePieceIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline"

// 3단계 제품 카드 임포트
import { ProductCard3Step } from "@/components/ui/product-card-3-step"

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
                  팀워크의
                  <span className="text-primary block">새로운 차원</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Monday.com과 Google Workspace로 팀 협업을 혁신하고 
                  생산성을 극대화하세요.
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
                  흩어진 업무 도구들을 하나로 통합하여 팀의 생산성을 극대화합니다
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">실시간 협업</h3>
                  <p className="text-sm text-muted-foreground">
                    팀원들이 동시에 작업하고 실시간으로 소통할 수 있는 환경
                  </p>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <RocketLaunchIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">워크플로우 자동화</h3>
                  <p className="text-sm text-muted-foreground">
                    반복 업무를 자동화하여 더 중요한 일에 집중
                  </p>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ChartBarIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">성과 시각화</h3>
                  <p className="text-sm text-muted-foreground">
                    프로젝트 진행상황과 팀 성과를 한눈에 파악
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 제품 카드 섹션 */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  협업 및 생산성 솔루션
                </h2>
                <p className="text-lg text-muted-foreground">
                  각 제품을 클릭하여 3단계로 구성된 상세 정보를 확인하세요
                </p>
                <div className="flex justify-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                    Level 1: 기본 정보
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    Level 2: 주요 기능
                  </Badge>
                  <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                    Level 3: 고급 정보
                  </Badge>
                </div>
              </div>

              {/* 3단계 제품 카드 그리드 */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {collaborationProducts.map((product, index) => (
                  <ProductCard3Step 
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  팀 협업 혁신을 시작하세요
                </h2>
                <p className="text-lg text-muted-foreground">
                  전문 컨설턴트가 귀하의 팀에 최적화된 협업 환경을 구축해드립니다
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
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">협업 도구 구축 사례</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="text-sm text-muted-foreground">평균 업무 효율 향상</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">기술 지원</div>
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