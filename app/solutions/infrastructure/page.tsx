import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ServerIcon, 
  ShieldCheckIcon, 
  CpuChipIcon,
  CommandLineIcon,
  CogIcon
} from "@heroicons/react/24/outline"

// 새 템플릿 시스템
import { PageHero, ContentSection, PageCTASection } from "@/components/sections"

// 3단계 제품 카드
import { ProductCard3Step } from "@/components/ui/product-card-3-step"

// 제품 데이터
import productsData from "@/data/products.json"

export const metadata: Metadata = {
  title: "IT 인프라 관리 솔루션 | We Do Soft",
  description: "Freshservice와 Splashtop으로 IT 인프라를 효율적으로 관리하세요. ITSM부터 원격 접속까지 통합 IT 솔루션을 제공합니다.",
}

export default function InfrastructurePage() {
  const infrastructureProducts = productsData["it-infrastructure"]

  return (
    <>
      {/* Hero Section - 새 템플릿 사용 */}
      <PageHero
        badge={{ icon: ServerIcon, text: "IT Infrastructure Management Solutions" }}
        title={
          <>
            IT 인프라의{" "}
            <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
              완전한 제어
            </span>
            <br />
            스마트한 관리
          </>
        }
        subtitle={
          <>
            Freshservice와 Splashtop의 완벽한 조합으로
            <br className="hidden lg:block" />
            IT 서비스 관리부터 원격 지원까지 통합 운영하세요.
          </>
        }
        buttons={{
          primary: { text: "상담 신청", href: "/contact", icon: CommandLineIcon },
          secondary: { text: "가격 정보", href: "/pricing", icon: CogIcon }
        }}
        className="relative bg-gradient-to-br from-slate-500/5 via-background to-gray-500/5 overflow-hidden"
      />

      {/* 가치 제안 섹션 - 새 템플릿 사용 */}
      <ContentSection
        title="왜 통합 IT 인프라 관리가 필요할까요?"
        subtitle="복잡한 IT 환경에서 체계적인 관리와 안전한 원격 지원은 비즈니스 연속성의 핵심입니다"
        spacing="default"
        containerWidth="narrow"
      >
        <div className="card-grid-3">
          <Card className="text-center p-8 card-bordered card-hover group">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <ServerIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">ITIL 기반 관리</h3>
            <p className="text-body-medium">
              글로벌 표준 ITIL 프로세스로 
              체계적이고 예측 가능한 IT 서비스 운영
            </p>
          </Card>

          <Card className="text-center p-8 card-bordered card-hover group">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheckIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">보안 우선 설계</h3>
            <p className="text-body-medium">
              엔터프라이즈급 보안으로 
              안전한 원격 접속과 철저한 데이터 보호
            </p>
          </Card>

          <Card className="text-center p-8 card-bordered card-hover group">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <CpuChipIcon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="heading-subsection mb-4">AI 기반 자동화</h3>
            <p className="text-body-medium">
              인공지능으로 IT 문제를 자동 분류하고 
              최적의 해결책을 즉시 제안
            </p>
          </Card>
        </div>
      </ContentSection>

      {/* 제품 카드 섹션 - 새 템플릿 사용 */}
      <ContentSection
        title="IT 인프라 관리 솔루션"
        subtitle="ITSM부터 원격 지원까지, 완벽한 IT 운영 생태계를 구축하세요"
        background="gradient"
        spacing="default"
        containerWidth="wide"
      >
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">전체 (2)</TabsTrigger>
            <TabsTrigger value="itsm">IT 서비스 관리 (1)</TabsTrigger>
            <TabsTrigger value="remote">원격 지원 (1)</TabsTrigger>
          </TabsList>

          {/* 전체 보기 */}
          <TabsContent value="all" className="mt-0">
            <div className="card-grid-3">
              {infrastructureProducts.map((product) => (
                <ProductCard3Step key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          {/* IT 서비스 관리 제품 */}
          <TabsContent value="itsm" className="mt-0">
            <div className="card-grid-3">
              {infrastructureProducts
                .filter((p) => p.id === "freshservice")
                .map((product) => (
                  <ProductCard3Step key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>

          {/* 원격 지원 제품 */}
          <TabsContent value="remote" className="mt-0">
            <div className="card-grid-3">
              {infrastructureProducts
                .filter((p) => p.id === "splashtop")
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
            IT 인프라 혁신을 시작하세요
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
          </>
        }
        description={
          <>
            전문 IT 컨설턴트가 귀하의 인프라 환경에 최적화된
            <br />
            통합 관리 솔루션을 설계해드립니다
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