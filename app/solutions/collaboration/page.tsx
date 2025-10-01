'use client'

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  UsersIcon, 
  RocketLaunchIcon, 
  ChartBarIcon,
  LightBulbIcon,
  BoltIcon
} from "@heroicons/react/24/outline"

// 새 템플릿 시스템
import { PageHero, ContentSection, PageCTASection } from "@/components/sections"

// 3단계 제품 카드
import { ProductCard3Step } from "@/components/ui/product-card-3-step"

// 제품 데이터
import productsData from "@/data/products.json"

export default function CollaborationPage() {
  const collaborationProducts = productsData["collaboration-productivity"]

  // 해시 기반 스크롤 처리
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 300)
    }
  }, [])

  return (
    <>
      {/* Hero Section - 새 템플릿 사용 */}
      <PageHero
        badge={{ icon: RocketLaunchIcon, text: "Collaboration & Productivity Solutions" }}
        title={
          <>
            팀워크를{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              혁신하는
            </span>
            <br />
            스마트한 협업
          </>
        }
        subtitle={
          <>
            Monday.com과 Google Workspace의 완벽한 조합으로
            <br className="hidden lg:block" />
            팀의 생산성과 창의성을 극대화하세요.
          </>
        }
        buttons={{
          primary: { text: "상담 신청", href: "/contact", icon: LightBulbIcon },
          secondary: { text: "가격 정보", href: "/pricing", icon: BoltIcon }
        }}
        className="relative bg-gradient-to-br from-purple/5 via-background to-blue/5 overflow-hidden"
      />

      {/* 가치 제안 섹션 - 새 템플릿 사용 */}
      <ContentSection
        title="왜 협업 플랫폼이 필요할까요?"
        subtitle="원격근무와 하이브리드 업무 환경에서 효율적인 협업은 필수가 되었습니다"
        spacing="default"
        containerWidth="wide"
      >
        <div className="card-grid-3">
          <Card className="text-center p-8 card-bordered card-hover group">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <UsersIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">팀 시너지 극대화</h3>
            <p className="text-body-medium">
              실시간 협업과 투명한 소통으로 
              팀의 창의성과 효율성을 동시에 향상시키세요
            </p>
          </Card>

          <Card className="text-center p-8 card-bordered card-hover group">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <RocketLaunchIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">생산성 혁명</h3>
            <p className="text-body-medium">
              자동화 워크플로우와 스마트한 도구로 
              반복 업무를 줄이고 핵심 업무에 집중하세요
            </p>
          </Card>

          <Card className="text-center p-8 card-bordered card-hover group">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <ChartBarIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">데이터 기반 인사이트</h3>
            <p className="text-body-medium">
              프로젝트 진행 상황과 팀 성과를 
              실시간으로 분석하고 최적화하세요
            </p>
          </Card>
        </div>
      </ContentSection>

      {/* 제품 카드 섹션 - 새 템플릿 사용 */}
      <ContentSection
        title="협업 & 생산성 솔루션"
        subtitle="프로젝트 관리부터 클라우드 오피스까지, 완벽한 협업 생태계를 구축하세요"
        background="gradient"
        spacing="default"
        containerWidth="wide"
      >
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">전체 (4)</TabsTrigger>
            <TabsTrigger value="project">프로젝트 관리 (3)</TabsTrigger>
            <TabsTrigger value="office">클라우드 오피스 (1)</TabsTrigger>
          </TabsList>

          {/* 전체 보기 */}
          <TabsContent value="all" className="mt-0">
            <div className="card-grid-3">
              {collaborationProducts.map((product) => (
                <ProductCard3Step key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          {/* 프로젝트 관리 제품 */}
          <TabsContent value="project" className="mt-0">
            <div className="card-grid-3">
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
            <div className="card-grid-3">
              {collaborationProducts
                .filter((p) => p.id === "google-workspace")
                .map((product) => (
                  <ProductCard3Step key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </ContentSection>

      {/* CTA 섹션 - 새 템플릿 사용 */}
      <PageCTASection
        title={
          <>
            협업 혁신을 시작하세요
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
          </>
        }
        description={
          <>
            전문 컨설턴트가 귀하의 팀에 최적화된
            <br />
            협업 환경과 생산성 향상 전략을 제안합니다
          </>
        }
        buttons={{
          primary: { text: "상담 신청", href: "/contact" },
          secondary: { text: "컨설팅 서비스", href: "/services/consulting" }
        }}
        background="accent"
      />
    </>
  )
}