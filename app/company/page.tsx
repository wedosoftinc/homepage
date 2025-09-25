import { MainNavigation } from "@/components/navigation/main-navigation"
import { Footer } from "@/components/layout/footer"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Timeline } from "@/components/ui/timeline"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  FlagIcon as Target,
  ShieldCheckIcon as Shield,
  ArrowTrendingUpIcon as TrendingUp,
  LightBulbIcon as Lightbulb,
  GlobeAltIcon as Globe
} from "@heroicons/react/24/outline"

const timelineData = [
  {
    year: "2000",
    title: "대기업 프로젝트 경험 시작",
    description: "농심데이터시스템을 시작으로 대한민국 주요 기업들의 IT 프로젝트에 참여하며 풍부한 실무 경험을 쌓기 시작했습니다.",
    category: "project" as const,
    highlights: [
      "농심데이터시스템 프로젝트 참여",
      "기업 IT 시스템 구축 경험 시작",
      "대규모 데이터 처리 시스템 개발"
    ]
  },
  {
    year: "2005",
    title: "LG 그룹 계열사 프로젝트 확장",
    description: "LG Display, LG전자, LG CNS 등 LG 그룹 계열사의 다양한 프로젝트에 참여하며 대기업 IT 인프라 전문성을 확보했습니다.",
    category: "project" as const,
    highlights: [
      "LG Display 시스템 구축",
      "LG전자 IT 인프라 프로젝트",
      "LG CNS 협력 프로젝트 다수",
      "대한주택보증 시스템 개발"
    ]
  },
  {
    year: "2008",
    title: "반도체 및 금융업 진출",
    description: "아남반도체, Hitage LG Data System 등 반도체 업계와 금융권 프로젝트를 통해 업계 전문성을 확장했습니다.",
    category: "project" as const,
    highlights: [
      "아남반도체 생산 시스템 구축",
      "Hitage LG Data System 개발",
      "반도체 제조 프로세스 최적화",
      "금융 데이터 처리 시스템"
    ]
  },
  {
    year: "2011",
    title: "위두소프트 창업",
    description: "축적된 경험과 노하우를 바탕으로 위두소프트를 창업하여 글로벌 SaaS 솔루션 전문 기업으로의 여정을 시작했습니다.",
    category: "foundation" as const,
    highlights: [
      "위두소프트 법인 설립",
      "글로벌 SaaS 파트너십 시작",
      "전문 컨설팅 서비스 출시",
      "기업 고객 포트폴리오 구축"
    ]
  },
  {
    year: "2015",
    title: "글로벌 벤더 파트너십 확립",
    description: "Freshworks, Monday.com, Google 등 주요 글로벌 SaaS 벤더와 공식 파트너십을 체결하여 안정적인 사업 기반을 구축했습니다.",
    category: "partnership" as const,
    highlights: [
      "4개 주요 벤더 파트너십 계약",
      "공식 인증 파트너 지위 확보",
      "글로벌 기술 지원 체계 구축",
      "전문가 인증 취득"
    ]
  },
  {
    year: "2020",
    title: "350여개 고객사 달성",
    description: "다양한 산업군의 350여개 고객사에게 성공적인 디지털 전환 서비스를 제공하며 국내 SaaS 시장의 선도 기업으로 자리매김했습니다.",
    category: "milestone" as const,
    highlights: [
      "350여개 고객사 계약 체결",
      "다양한 산업군 커버리지 확보",
      "높은 고객 만족도 달성",
      "시장 선도 기업 위치 확립"
    ]
  },
  {
    year: "2025",
    title: "AI 시대 디지털 혁신 리더",
    description: "AI 기반 솔루션과 25년 축적된 전문성을 결합하여 고객의 디지털 혁신을 선도하는 신뢰받는 파트너로 성장했습니다.",
    category: "milestone" as const,
    highlights: [
      "AI 기반 솔루션 전문성 확보",
      "25년 경험 기반 컨설팅 서비스",
      "디지털 혁신 성공사례 다수",
      "고객 중심 철학 실현"
    ]
  }
]

const ceoProfile = {
  name: "대표이사",
  title: "최고경영자 & 기술이사",
  company: "위두소프트",
  experience: "25년 경험"
}

export default function CompanyPage() {
  const breadcrumbItems = [
    { title: '회사 소개' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      {/* Breadcrumb */}
      <div className="border-b bg-muted/20">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Page Header */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <Badge className="mb-4">About Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            회사의 운명은 고객에 달려있다
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            고객의 성공이 우리의 성공입니다.
            2000년부터 25년간 이어온 위두소프트의 핵심 철학으로,
            고객의 비즈니스 성공을 최우선으로 생각하며 글로벌 SaaS 솔루션을 통해
            고객의 디지털 혁신과 지속가능한 성장을 함께 만들어갑니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25년</div>
              <div className="text-sm text-muted-foreground">신뢰받는 경험</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">350+</div>
              <div className="text-sm text-muted-foreground">성공한 고객사</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">완료된 프로젝트</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge className="mb-4">Philosophy</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              위두소프트의 철학과 가치
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <Card className="text-center p-6 border-2 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">신뢰와 전문성</h3>
              <p className="text-sm text-muted-foreground">
                글로벌 벤더 파트너십과 검증된 전문성으로 안정적인 서비스를 제공합니다
              </p>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">혁신과 성장</h3>
              <p className="text-sm text-muted-foreground">
                최신 기술과 AI 솔루션으로 고객의 지속적인 성장을 지원합니다
              </p>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">글로벌 파트너십</h3>
              <p className="text-sm text-muted-foreground">
                세계 최고 수준의 SaaS 솔루션으로 글로벌 경쟁력을 제공합니다
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/20">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge className="mb-4">History</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              위두소프트의 여정
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              2000년부터 현재까지, 대한민국 IT 업계와 함께 성장해온 25년의 발자취를 소개합니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Timeline items={timelineData} />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge className="mb-4">Leadership</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              리더십
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              25년간의 풍부한 경험과 전문성으로 고객의 성공을 이끄는 리더십을 소개합니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* CEO Profile Photo */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-colors shadow-lg">
                    <Image
                      src="/ceo-profile.png"
                      alt="위두소프트 대표이사"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* CEO Profile Content */}
                <div className="flex-1 text-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{ceoProfile.name}</h3>
                    <p className="text-lg text-primary font-semibold mb-2">{ceoProfile.title}</p>
                    <p className="text-muted-foreground">{ceoProfile.company} • {ceoProfile.experience}</p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6">
                    <blockquote className="text-lg italic text-foreground/90 mb-4">
                      "고객의 성공이 곧 우리의 성공입니다. 25년간 쌓아온 경험과 전문성을 바탕으로
                      고객의 디지털 혁신 여정을 함께하겠습니다."
                    </blockquote>
                    <div className="text-right">
                      <cite className="text-sm font-medium text-muted-foreground">
                        - 위두소프트 대표이사
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              신뢰받는 파트너와 함께
              <br />
              <span className="text-primary">디지털 혁신을 시작하세요</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              글로벌 파트너십으로 귀하의 비즈니스 성장을 지원합니다.
              전문 컨설턴트와의 상담을 통해 최적의 솔루션을 찾아보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                무료 상담 신청
                <TrendingUp className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                솔루션 둘러보기
                <Target className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}