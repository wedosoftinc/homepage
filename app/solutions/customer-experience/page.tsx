import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ChatBubbleLeftRightIcon, 
  UserGroupIcon,
  SparklesIcon,
  HeartIcon,
  TrophyIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline"

// 새 템플릿 시스템
import { PageHero, ContentSection, PageCTASection } from "@/components/sections"

// 3단계 제품 카드
import { ProductCard3Step } from "@/components/ui/product-card-3-step"

// 제품 데이터
import productsData from "@/data/products.json"

export const metadata: Metadata = {
  title: "고객 경험 & 세일즈 관리 솔루션 | We Do Soft",
  description: "Freshworks 통합 플랫폼으로 고객 서비스, 영업, 마케팅을 혁신하세요. AI 기반 고객 경험 관리 솔루션을 제공합니다.",
}

export default function CustomerExperiencePage() {
  const customerExperienceProducts = productsData["customer-experience"]
  const collaborationProducts = productsData["collaboration-productivity"]

  return (
    <>
      {/* Hero Section - 새 템플릿 사용 */}
      <PageHero
        badge={{ icon: SparklesIcon, text: "Customer Experience & Sales Management" }}
        title={
          <>
            고객의{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              마음을 사로잡는
            </span>
            <br />
            경험을 만드세요
          </>
        }
        subtitle={
          <>
            Freshworks의 AI 기반 통합 플랫폼으로 고객 서비스부터 영업까지,
            <br className="hidden lg:block" />
            전체 고객 여정을 혁신하세요.
          </>
        }
        buttons={{
          primary: { text: "무료 상담 받기", href: "/contact", icon: HeartIcon },
          secondary: { text: "가격 정보", href: "/pricing", icon: TrophyIcon }
        }}
        className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden"
      />

      {/* 가치 제안 섹션 - 새 템플릿 사용 */}
      <ContentSection
        title="왜 고객 경험이 중요할까요?"
        subtitle="뛰어난 고객 경험은 단순한 서비스를 넘어 브랜드 가치와 매출 성장의 핵심입니다"
        spacing="default"
        containerWidth="narrow"
      >
        <div className="card-grid-3">
          <Card className="text-center p-8 card-bordered card-hover group">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">옴니채널 소통</h3>
            <p className="text-body-medium">
              이메일, 채팅, 전화, 소셜미디어 등 모든 채널에서 
              일관된 고객 경험을 제공하세요
            </p>
          </Card>

          <Card className="text-center p-8 card-bordered card-hover group">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <SparklesIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">AI 기반 자동화</h3>
            <p className="text-body-medium">
              Freddy AI가 고객 문의를 분석하고 
              최적의 해결책을 자동으로 제안합니다
            </p>
          </Card>

          <Card className="text-center p-8 card-bordered card-hover group">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <ChartBarIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">데이터 기반 인사이트</h3>
            <p className="text-body-medium">
              실시간 분석과 리포팅으로 
              고객 만족도와 팀 성과를 지속적으로 개선하세요
            </p>
          </Card>
        </div>
      </ContentSection>

      {/* 제품 카드 섹션 - 새 템플릿 사용 */}
      <ContentSection
        title="고객 경험 & 세일즈 관리 솔루션"
        subtitle="고객 서비스부터 영업, 마케팅까지 하나의 플랫폼에서 관리하세요"
        background="gradient"
        spacing="default"
        containerWidth="wide"
      >
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">전체 (7)</TabsTrigger>
            <TabsTrigger value="service">고객 서비스 (4)</TabsTrigger>
            <TabsTrigger value="sales">영업 & CRM (3)</TabsTrigger>
          </TabsList>

          {/* 전체 보기 */}
          <TabsContent value="all" className="mt-0">
            <div className="card-grid-3">
              {customerExperienceProducts.map((product) => (
                <ProductCard3Step key={product.id} product={product} />
              ))}
              <ProductCard3Step 
                key="monday-sales-crm" 
                product={collaborationProducts.find(p => p.id === "monday-sales-crm")!} 
              />
            </div>
          </TabsContent>

          {/* 고객 서비스 제품 */}
          <TabsContent value="service" className="mt-0">
            <div className="card-grid-3">
              {customerExperienceProducts
                .filter((p) => 
                  p.id === "freshdesk-omni" || 
                  p.id === "freshdesk" || 
                  p.id === "freshchat" ||
                  p.id === "freshcaller"
                )
                .map((product) => (
                  <ProductCard3Step key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>

          {/* 영업 & CRM 제품 */}
          <TabsContent value="sales" className="mt-0">
            <div className="card-grid-3">
              {customerExperienceProducts
                .filter((p) => 
                  p.id === "freshsales" || 
                  p.id === "freddy-ai"
                )
                .map((product) => (
                  <ProductCard3Step key={product.id} product={product} />
                ))}
              <ProductCard3Step 
                key="monday-sales-crm" 
                product={collaborationProducts.find(p => p.id === "monday-sales-crm")!} 
              />
            </div>
          </TabsContent>
        </Tabs>
      </ContentSection>

      {/* CTA 섹션 - 새 템플릿 사용 */}
      <PageCTASection
        title="고객 경험 혁신을 시작하세요"
        description={
          <>
            전문 컨설턴트가 귀하의 비즈니스에 최적화된
            <br />
            고객 경험 관리 전략을 설계해드립니다
          </>
        }
        buttons={{
          primary: { text: "무료 상담 신청", href: "/contact" },
          secondary: { text: "컨설팅 서비스", href: "/services/consulting" }
        }}
        background="accent"
      />
    </>
  )
}
