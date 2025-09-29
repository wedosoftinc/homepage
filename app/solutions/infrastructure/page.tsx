import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ServerIcon, 
  ShieldCheckIcon, 
  CpuChipIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  LockClosedIcon,
  CommandLineIcon,
  CogIcon
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
    <>
      {/* Hero Section - 모던하고 임팩트 있는 디자인 */}
      <section className="relative bg-gradient-to-br from-slate-500/5 via-background to-gray-500/5 py-20 lg:py-32 overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                <ServerIcon className="w-4 h-4 mr-2" />
                IT Infrastructure Management Solutions
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                IT 인프라의 
                <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                  완전한 제어
                </span>
                <br />
                스마트한 관리
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Freshservice와 Splashtop의 완벽한 조합으로 
                <br className="hidden lg:block" />
                IT 서비스 관리부터 원격 지원까지 통합 운영하세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  <CommandLineIcon className="w-5 h-5 mr-2" />
                  무료 상담 받기
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/pricing">
                  <CogIcon className="w-5 h-5 mr-2" />
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
                왜 통합 IT 인프라 관리가 필요할까요?
              </h2>
              <p className="text-xl text-muted-foreground">
                복잡한 IT 환경에서 체계적인 관리와 안전한 원격 지원은 비즈니스 연속성의 핵심입니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500/10 to-slate-500/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ServerIcon className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">ITIL 기반 관리</h3>
                <p className="text-muted-foreground leading-relaxed">
                  글로벌 표준 ITIL 프로세스로 
                  체계적이고 예측 가능한 IT 서비스 운영
                </p>
              </Card>

              <Card className="text-center p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheckIcon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">보안 우선 설계</h3>
                <p className="text-muted-foreground leading-relaxed">
                  엔터프라이즈급 보안으로 
                  안전한 원격 접속과 철저한 데이터 보호
                </p>
              </Card>

              <Card className="text-center p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CpuChipIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI 기반 자동화</h3>
                <p className="text-muted-foreground leading-relaxed">
                  인공지능으로 IT 문제를 자동 분류하고 
                  최적의 해결책을 즉시 제안
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 제품 카드 섹션 - 개선된 디자인 */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                IT 인프라 관리 솔루션
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ITSM부터 원격 지원까지, 완벽한 IT 운영 생태계를 구축하세요
              </p>
              
              {/* 3단계 가이드 */}
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
                  Level 1: 기본 정보
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
                  Level 2: 주요 기능  
                </Badge>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800">
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

      {/* CTA Section - 강화된 디자인 */}
      <section className="py-20 lg:py-32 relative">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-transparent to-gray-500/5" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                IT 인프라 혁신을 시작하세요
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                전문 IT 컨설턴트가 귀하의 인프라 환경에 최적화된 
                통합 관리 솔루션을 설계해드립니다
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
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">IT 인프라 구축 사례</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">시스템 가용성</div>
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