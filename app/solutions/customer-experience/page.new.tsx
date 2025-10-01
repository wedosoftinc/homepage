import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ChatBubbleLeftRightIcon, 
  SparklesIcon,
  HeartIcon,
  TrophyIcon,
  ChartBarIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline"

// 새로운 템플릿 섹션 컴포넌트들
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
        className="bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      />

      {/* 가치 제안 섹션 - 새 템플릿 사용 */}
      <ContentSection
        title="왜 고객 경험이 중요할까요?"
        subtitle="뛰어난 고객 경험은 단순한 서비스를 넘어 브랜드 가치와 매출 성장의 핵심입니다"
        spacing="large"
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
              <UserGroupIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">데이터 기반 인사이트</h3>
            <p className="text-body-medium">
              고객 행동 분석을 통해 더 나은 의사결정을 
              내리고 매출을 극대화하세요
            </p>
          </Card>
        </div>
      </ContentSection>

      {/* 제품 카드 섹션 - 새 템플릿 사용 */}
      <ContentSection
        title="고객 경험 & 세일즈 관리 솔루션"
        subtitle="고객 서비스부터 영업, 마케팅까지 하나의 플랫폼에서 관리하세요"
        background="gradient"
        spacing="large"
        containerWidth="wide"
      >
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">전체 솔루션</TabsTrigger>
            <TabsTrigger value="service">고객 서비스</TabsTrigger>
            <TabsTrigger value="sales">세일즈/CRM</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="card-grid-3">
            {customerExperienceProducts.map((product, index) => (
              <ProductCard3Step
                key={index}
                product={product}
              />
            ))}
            {collaborationProducts
              .filter(p => p.name === "Monday Sales CRM")
              .map((product, index) => (
                <ProductCard3Step
                  key={`monday-${index}`}
                  product={product}
                />
              ))}
          </TabsContent>

          <TabsContent value="service" className="card-grid-3">
            {customerExperienceProducts
              .filter(p => p.category.includes("고객 서비스"))
              .map((product, index) => (
                <ProductCard3Step
                  key={index}
                  product={product}
                />
              ))}
          </TabsContent>

          <TabsContent value="sales" className="card-grid-3">
            {customerExperienceProducts
              .filter(p => p.category.includes("영업"))
              .map((product, index) => (
                <ProductCard3Step
                  key={index}
                  product={product}
                />
              ))}
            {collaborationProducts
              .filter(p => p.name === "Monday Sales CRM")
              .map((product, index) => (
                <ProductCard3Step
                  key={`monday-${index}`}
                  product={product}
                />
              ))}
          </TabsContent>
        </Tabs>
      </ContentSection>

      {/* 통계 섹션 - 새 템플릿 사용 */}
      <ContentSection
        title="수치로 증명된 성과"
        subtitle="Freshworks를 도입한 기업들의 실제 성과 지표"
        spacing="large"
        containerWidth="narrow"
      >
        <div className="card-grid-3">
          <Card className="text-center p-8 card-hover">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-lg font-medium mb-2">고객 만족도</div>
            <p className="text-sm text-muted-foreground">Freshdesk 도입 후 평균 CSAT 점수</p>
          </Card>

          <Card className="text-center p-8 card-hover">
            <div className="text-4xl font-bold text-primary mb-2">40%</div>
            <div className="text-lg font-medium mb-2">매출 증대</div>
            <p className="text-sm text-muted-foreground">Freshsales CRM 도입 후 평균 매출 증가율</p>
          </Card>

          <Card className="text-center p-8 card-hover">
            <div className="text-4xl font-bold text-primary mb-2">60%</div>
            <div className="text-lg font-medium mb-2">응답 시간 단축</div>
            <p className="text-sm text-muted-foreground">AI 자동화로 고객 문의 처리 시간 감소</p>
          </Card>
        </div>
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
          secondary: { text: "가격 정보 보기", href: "/pricing" }
        }}
        background="accent"
      />
    </>
  )
}
