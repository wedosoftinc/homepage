import { Metadata } from "next"
import { MainNavigation } from "@/components/navigation/main-navigation"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { 
  ServerIcon, 
  ShieldCheckIcon, 
  CpuChipIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  LockClosedIcon
} from "@heroicons/react/24/outline"

// 3단계 제품 카드 임포트
import { ProductCard3Step } from "@/components/ui/product-card-3-step"

// 제품 데이터 임포트  
import productsData from "@/data/products.json"

export const metadata: Metadata = {
  title: "IT 인프라 관리 솔루션 | We Do Soft",
  description: "Freshservice와 Splashtop으로 IT 인프라를 효율적으로 관리하세요. ITSM부터 원격 접속까지 통합 IT 솔루션을 제공합니다.",
}

export default function InfrastructurePage() {
  // IT 인프라 제품들
  const infrastructureProducts = productsData["it-infrastructure"]

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
                  IT Infrastructure Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  IT 인프라의
                  <span className="text-primary block">스마트 관리</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Freshservice와 Splashtop으로 IT 서비스 관리와 원격 지원을 
                  효율적이고 안전하게 운영하세요.
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
                  왜 통합 IT 인프라 관리인가?
                </h2>
                <p className="text-lg text-muted-foreground">
                  체계적인 IT 서비스 관리와 안전한 원격 지원으로 비즈니스 연속성을 보장합니다
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ServerIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">ITIL 기반 관리</h3>
                  <p className="text-sm text-muted-foreground">
                    글로벌 표준 ITIL 프로세스로 체계적인 IT 서비스 관리
                  </p>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">보안 우선 설계</h3>
                  <p className="text-sm text-muted-foreground">
                    엔터프라이즈급 보안으로 안전한 원격 접속과 데이터 보호
                  </p>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CpuChipIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">AI 기반 자동화</h3>
                  <p className="text-sm text-muted-foreground">
                    인공지능으로 IT 문제를 자동 분류하고 해결책 제안
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
                  IT 인프라 관리 솔루션
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
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {infrastructureProducts.map((product, index) => (
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
                  IT 인프라 혁신을 시작하세요
                </h2>
                <p className="text-lg text-muted-foreground">
                  전문 IT 컨설턴트가 귀하의 인프라에 최적화된 솔루션을 설계해드립니다
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
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">IT 인프라 구축 사례</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">시스템 가용성</div>
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