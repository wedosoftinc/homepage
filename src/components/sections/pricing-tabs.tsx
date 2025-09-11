'use client'

import { Container, Section } from '@/components/layout'
import { cn } from '@/lib/utils'
import { pricingData, type PricingPlan } from '@/data/pricing'

interface Tab {
    id: string
    name: string
    icon: string
}

interface PricingTabsProps {
    tabs: Tab[]
    activeTab: string
    onTabChange: (tabId: string) => void
}

export function PricingTabs({ tabs, activeTab, onTabChange }: PricingTabsProps) {
    return (
        <Section padding="xl" variant="muted">
            <Container>
                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-background rounded-xl p-1 border shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className={cn(
                                    "flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300",
                                    "hover:bg-muted/50",
                                    activeTab === tab.id
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <span className="text-lg">{tab.icon}</span>
                                <span className="hidden sm:inline">{tab.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="relative">
                    <ProductPricing productId={activeTab} />
                </div>
            </Container>
        </Section>
    )
}

// Google Workspace Pricing Component
function GoogleWorkspacePricing() {
    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Google Workspace 요금제</h2>
                <p className="text-muted-foreground">
                    협업과 생산성을 위한 클라우드 오피스 솔루션
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        name: "Business Starter",
                        price: "₩7,200",
                        period: "/사용자/월",
                        description: "소규모 팀을 위한 기본 플랜",
                        features: [
                            "Gmail 비즈니스 이메일",
                            "30GB 클라우드 스토리지",
                            "Google Meet (100명)",
                            "Docs, Sheets, Slides",
                            "표준 보안 및 관리"
                        ],
                        popular: false
                    },
                    {
                        name: "Business Standard",
                        price: "₩14,400",
                        period: "/사용자/월",
                        description: "성장하는 기업을 위한 표준 플랜",
                        features: [
                            "Gmail 비즈니스 이메일",
                            "2TB 클라우드 스토리지",
                            "Google Meet (150명)",
                            "Docs, Sheets, Slides",
                            "향상된 보안 및 관리",
                            "공유 드라이브"
                        ],
                        popular: true
                    },
                    {
                        name: "Business Plus",
                        price: "₩21,600",
                        period: "/사용자/월",
                        description: "대기업을 위한 고급 플랜",
                        features: [
                            "Gmail 비즈니스 이메일",
                            "5TB 클라우드 스토리지",
                            "Google Meet (500명)",
                            "Docs, Sheets, Slides",
                            "고급 보안 및 관리",
                            "공유 드라이브",
                            "Vault (보관 및 eDiscovery)"
                        ],
                        popular: false
                    }
                ].map((plan) => (
                    <PricingCard key={plan.name} {...plan} />
                ))}
            </div>
        </div>
    )
}

// Freshworks Pricing Component
function FreshworksPricing() {
    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Freshworks 요금제</h2>
                <p className="text-muted-foreground">
                    고객 관리와 지원을 위한 통합 플랫폼
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        name: "Growth",
                        price: "$15",
                        period: "/agent/month",
                        description: "성장하는 팀을 위한 기본 플랜",
                        features: [
                            "Freshdesk 헬프데스크",
                            "이메일 및 채팅 지원",
                            "기본 자동화",
                            "보고서 및 분석",
                            "모바일 앱"
                        ],
                        popular: false
                    },
                    {
                        name: "Pro",
                        price: "$49",
                        period: "/agent/month",
                        description: "전문적인 고객 지원을 위한 플랜",
                        features: [
                            "Freshdesk + Freshsales",
                            "고급 자동화",
                            "시간 추적",
                            "고급 보고서",
                            "API 액세스",
                            "전화 지원"
                        ],
                        popular: true
                    },
                    {
                        name: "Enterprise",
                        price: "$79",
                        period: "/agent/month",
                        description: "대기업을 위한 엔터프라이즈 플랜",
                        features: [
                            "모든 Freshworks 제품",
                            "고급 보안",
                            "사용자 정의 역할",
                            "IP 화이트리스트",
                            "전담 계정 관리자",
                            "24/7 우선 지원"
                        ],
                        popular: false
                    }
                ].map((plan) => (
                    <PricingCard key={plan.name} {...plan} />
                ))}
            </div>
        </div>
    )
}

// Monday.com Pricing Component
function MondayPricing() {
    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Monday.com 요금제</h2>
                <p className="text-muted-foreground">
                    프로젝트 관리와 팀 협업을 위한 워크플로우 플랫폼
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        name: "Basic",
                        price: "$8",
                        period: "/seat/month",
                        description: "소규모 팀을 위한 기본 플랜",
                        features: [
                            "무제한 개인 보드",
                            "20+ 컬럼 타입",
                            "iOS 및 Android 앱",
                            "우선순위 고객 지원",
                            "기본 대시보드"
                        ],
                        popular: false
                    },
                    {
                        name: "Standard",
                        price: "$10",
                        period: "/seat/month",
                        description: "성장하는 팀을 위한 표준 플랜",
                        features: [
                            "타임라인 및 간트 차트",
                            "캘린더 뷰",
                            "게스트 액세스",
                            "자동화 (250개/월)",
                            "통합 (Gmail, Excel 등)"
                        ],
                        popular: true
                    },
                    {
                        name: "Pro",
                        price: "$16",
                        period: "/seat/month",
                        description: "전문 팀을 위한 고급 플랜",
                        features: [
                            "시간 추적",
                            "고급 대시보드",
                            "차트 뷰",
                            "자동화 (25,000개/월)",
                            "고급 통합",
                            "개인 보드 및 문서"
                        ],
                        popular: false
                    }
                ].map((plan) => (
                    <PricingCard key={plan.name} {...plan} />
                ))}
            </div>
        </div>
    )
}

// Splashtop Pricing Component
function SplashtopPricing() {
    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Splashtop 요금제</h2>
                <p className="text-muted-foreground">
                    안전하고 빠른 원격 접속 솔루션
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        name: "Business Access",
                        price: "$5",
                        period: "/user/month",
                        description: "개인 및 소규모 팀용",
                        features: [
                            "무제한 컴퓨터 액세스",
                            "Windows, Mac, iOS, Android",
                            "파일 전송",
                            "원격 인쇄",
                            "세션 녹화"
                        ],
                        popular: false
                    },
                    {
                        name: "Business Access Pro",
                        price: "$8.25",
                        period: "/user/month",
                        description: "전문 팀을 위한 고급 기능",
                        features: [
                            "모든 Business Access 기능",
                            "사용자 관리",
                            "그룹 관리",
                            "세션 로그",
                            "2단계 인증",
                            "SSO 통합"
                        ],
                        popular: true
                    },
                    {
                        name: "Enterprise",
                        price: "문의",
                        period: "",
                        description: "대기업을 위한 맞춤형 솔루션",
                        features: [
                            "모든 Pro 기능",
                            "온프레미스 배포",
                            "고급 보안 정책",
                            "API 액세스",
                            "전담 지원",
                            "맞춤형 브랜딩"
                        ],
                        popular: false
                    }
                ].map((plan) => (
                    <PricingCard key={plan.name} {...plan} />
                ))}
            </div>
        </div>
    )
}

// Pricing Card Component
interface PricingCardProps {
    name: string
    price: string
    period: string
    description: string
    features: string[]
    popular: boolean
}

function PricingCard({ name, price, period, description, features, popular }: PricingCardProps) {
    return (
        <div className={cn(
            "relative bg-background rounded-xl p-8 border",
            "hover:shadow-xl transition-all duration-300",
            popular
                ? "border-primary shadow-lg scale-105"
                : "border-border hover:border-primary/20"
        )}>
            {popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        추천
                    </div>
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{description}</p>
                <div className="mb-4">
                    <span className="text-4xl font-bold">{price}</span>
                    {period && <span className="text-muted-foreground">{period}</span>}
                </div>
            </div>

            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={cn(
                "w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300",
                popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-foreground hover:bg-muted/80 border border-border"
            )}>
                {price === "문의" ? "문의하기" : "시작하기"}
            </button>
        </div>
    )
}

// Product Pricing Router Component
function ProductPricing({ productId }: { productId: string }) {
    switch (productId) {
        case 'google-workspace':
            return <GoogleWorkspacePricing />
        case 'freshworks':
            return <FreshworksPricing />
        case 'monday':
            return <MondayPricing />
        case 'splashtop':
            return <SplashtopPricing />
        default:
            return <GoogleWorkspacePricing />
    }
}