import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ChatBubbleLeftRightIcon, 
  PhoneIcon, 
  UserGroupIcon,
  SparklesIcon,
  HeartIcon,
  TrophyIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline"

// 3단계 제품 카드 임포트
import { ProductCard3Step } from "@/components/ui/product-card-3-step"

// 제품 데이터 임포트
import productsData from "@/data/products.json"

export const metadata: Metadata = {
  title: "고객 경험 & 세일즈 관리 솔루션 | We Do Soft",
  description: "Freshworks 통합 플랫폼으로 고객 서비스, 영업, 마케팅을 혁신하세요. AI 기반 고객 경험 관리 솔루션을 제공합니다.",
}

export default function CustomerExperiencePage() {
  // 고객 경험 제품들
  const customerExperienceProducts = productsData["customer-experience"]

  return (
    <>
      {/* Hero Section - 모던하고 임팩트 있는 디자인 */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32 overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Customer Experience & Sales Management
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                고객의 
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  마음을 사로잡는
                </span>
                <br />
                경험을 만드세요
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Freshworks의 AI 기반 통합 플랫폼으로 고객 서비스부터 영업까지, 
                <br className="hidden lg:block" />
                전체 고객 여정을 혁신하세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  <HeartIcon className="w-5 h-5 mr-2" />
                  무료 상담 받기
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/pricing">
                  <TrophyIcon className="w-5 h-5 mr-2" />
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
                왜 고객 경험이 중요할까요?
              </h2>
              <p className="text-xl text-muted-foreground">
                뛰어난 고객 경험은 단순한 서비스를 넘어 브랜드 가치와 매출 성장의 핵심입니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">옴니채널 소통</h3>
                <p className="text-muted-foreground leading-relaxed">
                  이메일, 채팅, 전화, 소셜미디어 등 모든 채널에서 
                  일관된 고객 경험을 제공하세요
                </p>
              </Card>

              <Card className="text-center p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SparklesIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI 기반 자동화</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Freddy AI가 고객 문의를 분석하고 
                  최적의 해결책을 자동으로 제안합니다
                </p>
              </Card>

              <Card className="text-center p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ChartBarIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">데이터 기반 인사이트</h3>
                <p className="text-muted-foreground leading-relaxed">
                  실시간 분석과 리포팅으로 
                  고객 만족도와 팀 성과를 지속적으로 개선하세요
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
                Freshworks 통합 솔루션
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                고객 서비스부터 영업, 마케팅까지 하나의 플랫폼에서 관리하세요
              </p>
              
              {/* 3단계 가이드 */}
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  Level 1: 기본 정보
                </Badge>
                <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/30">
                  Level 2: 주요 기능
                </Badge>
                <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/30">
                  Level 3: 고급 정보
                </Badge>
              </div>
            </div>

            {/* 3단계 제품 카드 그리드 - 앵커 링크 지원 */}
            <div className="grid md:grid-cols-2 gap-8">
              {customerExperienceProducts.map((product, index) => (
                <div key={product.id} id={product.id}>
                  <ProductCard3Step 
                    product={product}
                    isHighlighted={typeof window !== 'undefined' && window.location.hash === `#${product.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 강화된 디자인 */}
      <section className="py-20 lg:py-32 relative">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                고객 경험 혁신을 시작하세요
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                전문 컨설턴트가 귀하의 비즈니스에 최적화된 
                고객 경험 관리 전략을 설계해드립니다
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
                <div className="text-4xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">고객 만족도 향상</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">응답 시간 단축</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">60%</div>
                <div className="text-sm text-muted-foreground">영업 효율성 증대</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}