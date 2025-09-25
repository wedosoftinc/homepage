'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StarIcon as Star, ArrowRightIcon as ArrowRight, BoltIcon as Zap } from "@heroicons/react/24/outline"
import {
    MetricCard,
    FeatureList,
    CTAButtonGroup,
    BadgeGroup
} from "@/components/common"

const pricingData = [
    {
        category: "customer-experience",
        title: "고객 경험 & 세일즈",
        description: "Freshworks 제품군",
        plans: [
            {
                name: "Starter",
                price: "$15",
                period: "월/에이전트",
                description: "소규모 팀을 위한 기본 기능",
                features: [
                    "무제한 티켓",
                    "이메일 지원",
                    "기본 리포팅",
                    "모바일 앱",
                    "24/7 지원"
                ],
                highlighted: false,
                cta: "무료 체험"
            },
            {
                name: "Growth",
                price: "$29",
                period: "월/에이전트",
                description: "성장하는 비즈니스를 위한 고급 기능",
                features: [
                    "Starter의 모든 기능",
                    "전화 지원",
                    "라이브 채팅",
                    "자동화 규칙",
                    "고급 리포팅",
                    "팀 협업 도구"
                ],
                highlighted: true,
                cta: "무료 체험"
            },
            {
                name: "Pro",
                price: "$49",
                period: "월/에이전트",
                description: "대규모 팀을 위한 엔터프라이즈 기능",
                features: [
                    "Growth의 모든 기능",
                    "멀티 브랜드 지원",
                    "고급 자동화",
                    "커스텀 앱",
                    "API 액세스",
                    "전담 계정 매니저"
                ],
                highlighted: false,
                cta: "상담 신청"
            }
        ]
    },
    {
        category: "collaboration-productivity",
        title: "협업 & 생산성",
        description: "Monday.com & Google Workspace",
        plans: [
            {
                name: "Basic",
                price: "$8",
                period: "월/사용자",
                description: "개인 및 소규모 팀용",
                features: [
                    "무제한 보드",
                    "200+ 템플릿",
                    "모바일 앱",
                    "기본 대시보드",
                    "24/7 고객 지원"
                ],
                highlighted: false,
                cta: "무료 체험"
            },
            {
                name: "Standard",
                price: "$10",
                period: "월/사용자",
                description: "성장하는 팀을 위한 표준 기능",
                features: [
                    "Basic의 모든 기능",
                    "타임라인 뷰",
                    "캘린더 뷰",
                    "게스트 액세스",
                    "고급 검색",
                    "통합 기능"
                ],
                highlighted: true,
                cta: "무료 체험"
            },
            {
                name: "Pro",
                price: "$16",
                period: "월/사용자",
                description: "고급 팀을 위한 전문 기능",
                features: [
                    "Standard의 모든 기능",
                    "시간 추적",
                    "차트 뷰",
                    "공식 컬럼",
                    "의존성 관리",
                    "고급 권한 설정"
                ],
                highlighted: false,
                cta: "상담 신청"
            }
        ]
    },
    {
        category: "it-infrastructure",
        title: "IT 인프라 관리",
        description: "Freshservice & Splashtop",
        plans: [
            {
                name: "Starter",
                price: "$19",
                period: "월/에이전트",
                description: "IT 팀을 위한 기본 ITSM",
                features: [
                    "인시던트 관리",
                    "기본 자산 관리",
                    "셀프 서비스 포털",
                    "모바일 앱",
                    "이메일 알림"
                ],
                highlighted: false,
                cta: "무료 체험"
            },
            {
                name: "Growth",
                price: "$35",
                period: "월/에이전트",
                description: "확장된 IT 서비스 관리",
                features: [
                    "Starter의 모든 기능",
                    "문제 관리",
                    "변경 관리",
                    "고급 자산 관리",
                    "워크플로우 자동화",
                    "SLA 관리"
                ],
                highlighted: true,
                cta: "무료 체험"
            },
            {
                name: "Pro",
                price: "$59",
                period: "월/에이전트",
                description: "엔터프라이즈 IT 관리",
                features: [
                    "Growth의 모든 기능",
                    "프로젝트 관리",
                    "벤더 관리",
                    "고급 분석",
                    "API 통합",
                    "전담 지원"
                ],
                highlighted: false,
                cta: "상담 신청"
            }
        ]
    }
]

export function PricingSection() {
    const [activeTab, setActiveTab] = useState("customer-experience")

    return (
        <section className="py-24 bg-muted/40">
            <div className="container mx-auto px-4">
                {/* 섹션 헤더 */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <BadgeGroup
                        badges={[{
                            text: "가격",
                            variant: "secondary",
                            icon: Zap
                        }]}
                        layout="horizontal"
                        className="mb-4 justify-center"
                    />
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        투명하고 합리적인
                        <span className="text-primary">
                            {" "}가격 정책
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        규모와 요구사항에 맞는 플랜을 선택하세요. 모든 플랜에서 14일 무료 체험을 제공합니다.
                    </p>
                </div>

                {/* 가격 탭 */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-1 mb-12">
                        {pricingData.map((category) => (
                            <TabsTrigger
                                key={category.category}
                                value={category.category}
                                className="flex flex-col gap-1 p-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <span className="font-medium">{category.title}</span>
                                <span className="text-xs opacity-70">{category.description}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* 가격 플랜 카드들 */}
                    {pricingData.map((category) => (
                        <TabsContent key={category.category} value={category.category}>
                            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                {category.plans.map((plan, index) => (
                                    <Card
                                        key={plan.name}
                                        className={`relative h-full ${plan.highlighted
                                            ? 'border-primary shadow-lg scale-105 bg-primary/5'
                                            : 'border-border hover:shadow-md'
                                            } transition-all duration-300`}
                                    >
                                        {plan.highlighted && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                                                    <Star className="h-3 w-3 mr-1" />
                                                    가장 인기
                                                </Badge>
                                            </div>
                                        )}

                                        <CardHeader className="text-center pb-8">
                                            <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                                            <div className="mb-2">
                                                <span className="text-3xl font-bold">{plan.price}</span>
                                                <span className="text-muted-foreground ml-1">/ {plan.period}</span>
                                            </div>
                                            <CardDescription className="text-sm">
                                                {plan.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="space-y-6">
                                            {/* 기능 리스트 */}
                                            <FeatureList
                                                features={plan.features.map(feature => ({ text: feature }))}
                                                size="sm"
                                                iconColor="text-accent"
                                            />

                                            {/* CTA 버튼 */}
                                            <div className="pt-6">
                                                <Button
                                                    className={`w-full ${plan.highlighted
                                                        ? 'bg-primary hover:bg-primary/90'
                                                        : ''
                                                        }`}
                                                    variant={plan.highlighted ? "default" : "outline"}
                                                    size="lg"
                                                >
                                                    {plan.cta}
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* 추가 정보 */}
                            <div className="mt-12 text-center space-y-4">
                                <div className="bg-background rounded-lg p-6 max-w-4xl mx-auto">
                                    <h3 className="text-lg font-semibold mb-4">포함된 서비스</h3>
                                    <FeatureList
                                        features={[
                                            { text: "무료 마이그레이션 지원" },
                                            { text: "온보딩 교육 제공" },
                                            { text: "24/7 기술 지원" }
                                        ]}
                                        size="sm"
                                        iconColor="text-green-600"
                                        className="grid md:grid-cols-3 gap-4"
                                    />
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    모든 요금은 부가가치세 별도이며, 연간 결제 시 20% 할인이 적용됩니다.
                                    <br />
                                    엔터프라이즈 고객을 위한 맞춤형 플랜도 제공합니다.
                                </p>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}