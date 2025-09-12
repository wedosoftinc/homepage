'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Check, Star, Phone, Zap, Database, Users } from "lucide-react"
import Link from "next/link"

const pricingData = {
    "customer-experience": {
        title: "고객 경험 & 세일즈 관리",
        icon: Phone,
        description: "고객 지원부터 영업 관리까지 통합 솔루션",
        plans: [
            {
                name: "Starter",
                price: "₩29,000",
                period: "/월/사용자",
                description: "소규모 팀을 위한 기본 기능",
                features: [
                    "기본 티켓 관리",
                    "이메일 지원",
                    "기본 보고서",
                    "5GB 스토리지",
                    "기본 자동화"
                ],
                cta: "무료 체험",
                popular: false
            },
            {
                name: "Professional",
                price: "₩59,000",
                period: "/월/사용자",
                description: "성장하는 기업을 위한 고급 기능",
                features: [
                    "고급 티켓 관리",
                    "멀티채널 지원",
                    "고급 보고서 & 분석",
                    "25GB 스토리지",
                    "워크플로우 자동화",
                    "API 접근",
                    "우선 지원"
                ],
                cta: "14일 무료 체험",
                popular: true
            },
            {
                name: "Enterprise",
                price: "₩99,000",
                period: "/월/사용자",
                description: "대기업을 위한 완전한 솔루션",
                features: [
                    "모든 Professional 기능",
                    "무제한 스토리지",
                    "고급 보안 & 컴플라이언스",
                    "전용 계정 관리자",
                    "맞춤형 통합",
                    "24/7 전화 지원",
                    "온사이트 교육"
                ],
                cta: "영업팀 문의",
                popular: false
            }
        ]
    },
    "productivity": {
        title: "협업 및 생산성 향상",
        icon: Zap,
        description: "팀 협업과 프로젝트 관리 도구",
        plans: [
            {
                name: "Basic",
                price: "₩12,000",
                period: "/월/사용자",
                description: "개인과 소규모 팀용",
                features: [
                    "무제한 개인 보드",
                    "최대 3개 팀 보드",
                    "기본 템플릿",
                    "iOS/Android 앱",
                    "기본 지원"
                ],
                cta: "무료 체험",
                popular: false
            },
            {
                name: "Standard",
                price: "₩24,000",
                period: "/월/사용자",
                description: "팀 협업을 위한 필수 기능",
                features: [
                    "무제한 보드",
                    "고급 필터 & 검색",
                    "캘린더 & 타임라인 뷰",
                    "자동화 (250회/월)",
                    "게스트 액세스",
                    "표준 지원"
                ],
                cta: "14일 무료 체험",
                popular: true
            },
            {
                name: "Pro",
                price: "₩39,000",
                period: "/월/사용자",
                description: "고급 기능이 필요한 팀",
                features: [
                    "모든 Standard 기능",
                    "고급 자동화 (25,000회/월)",
                    "시간 추적",
                    "차트 & 대시보드",
                    "양식 & 설문조사",
                    "우선 지원"
                ],
                cta: "14일 무료 체험",
                popular: false
            }
        ]
    },
    "infrastructure": {
        title: "IT 인프라 관리",
        icon: Database,
        description: "IT 서비스 관리 및 원격 지원",
        plans: [
            {
                name: "Starter",
                price: "₩19,000",
                period: "/월/기술자",
                description: "IT팀을 위한 기본 도구",
                features: [
                    "티켓 관리",
                    "자산 관리 (최대 250개)",
                    "기본 보고서",
                    "이메일 알림",
                    "모바일 앱"
                ],
                cta: "무료 체험",
                popular: false
            },
            {
                name: "Growth",
                price: "₩35,000",
                period: "/월/기술자",
                description: "성장하는 IT팀을 위한 솔루션",
                features: [
                    "고급 티켓 관리",
                    "자산 관리 (최대 1,000개)",
                    "변경 관리",
                    "문제 관리",
                    "지식 베이스",
                    "고급 보고서"
                ],
                cta: "21일 무료 체험",
                popular: true
            },
            {
                name: "Enterprise",
                price: "₩59,000",
                period: "/월/기술자",
                description: "대규모 IT 운영을 위한 완전한 플랫폼",
                features: [
                    "모든 Growth 기능",
                    "무제한 자산 관리",
                    "고급 워크플로우",
                    "비즈니스 규칙",
                    "감사 로그",
                    "프리미엄 지원"
                ],
                cta: "영업팀 문의",
                popular: false
            }
        ]
    },
    "consulting": {
        title: "컨설팅 & 전문 서비스",
        icon: Users,
        description: "전문가와 함께하는 디지털 전환",
        plans: [
            {
                name: "컨설팅",
                price: "₩2,000,000",
                period: "/프로젝트",
                description: "디지털 전환 전략 수립",
                features: [
                    "현황 분석 및 진단",
                    "디지털 전환 로드맵",
                    "솔루션 추천",
                    "ROI 분석",
                    "실행 계획 수립"
                ],
                cta: "상담 신청",
                popular: false
            },
            {
                name: "구축 서비스",
                price: "₩5,000,000",
                period: "/프로젝트",
                description: "전문가가 직접 구축",
                features: [
                    "솔루션 설치 및 설정",
                    "데이터 마이그레이션",
                    "커스터마이징",
                    "통합 연동",
                    "테스트 및 검증",
                    "Go-Live 지원"
                ],
                cta: "견적 문의",
                popular: true
            },
            {
                name: "운영 지원",
                price: "₩1,000,000",
                period: "/월",
                description: "지속적인 운영 관리",
                features: [
                    "24/7 모니터링",
                    "정기 점검 및 최적화",
                    "사용자 교육",
                    "기술 지원",
                    "업데이트 관리",
                    "월간 리포트"
                ],
                cta: "서비스 문의",
                popular: false
            }
        ]
    }
}

export function PricingSection() {
    const [activeTab, setActiveTab] = useState("customer-experience")

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        투명하고 합리적인 가격
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        규모와 필요에 맞는 플랜을 선택하세요. 언제든 업그레이드 가능합니다.
                    </p>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-12">
                        {Object.entries(pricingData).map(([key, data]) => {
                            const IconComponent = data.icon
                            return (
                                <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                                    <IconComponent className="h-4 w-4" />
                                    <span className="hidden sm:inline">{data.title}</span>
                                    <span className="sm:hidden">
                                        {data.title.split(' ')[0]}
                                    </span>
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>

                    {Object.entries(pricingData).map(([key, data]) => (
                        <TabsContent key={key} value={key} className="space-y-8">
                            <div className="text-center space-y-4">
                                <div className="flex items-center justify-center space-x-2">
                                    <data.icon className="h-6 w-6 text-primary" />
                                    <h3 className="text-2xl font-bold">{data.title}</h3>
                                </div>
                                <p className="text-muted-foreground max-w-[600px] mx-auto">
                                    {data.description}
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-3">
                                {data.plans.map((plan, index) => (
                                    <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                                        {plan.popular && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                <Badge className="px-3 py-1 bg-primary text-primary-foreground">
                                                    <Star className="h-3 w-3 mr-1" />
                                                    추천
                                                </Badge>
                                            </div>
                                        )}

                                        <CardHeader className="text-center pb-8">
                                            <CardTitle className="text-lg">{plan.name}</CardTitle>
                                            <div className="flex items-end justify-center space-x-1">
                                                <span className="text-3xl font-bold">{plan.price}</span>
                                                <span className="text-muted-foreground">{plan.period}</span>
                                            </div>
                                            <CardDescription className="text-sm">
                                                {plan.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="space-y-6">
                                            <Button
                                                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                                                variant={plan.popular ? "default" : "outline"}
                                                asChild
                                            >
                                                <Link href="/contact">
                                                    {plan.cta}
                                                </Link>
                                            </Button>

                                            <Separator />

                                            <div className="space-y-3">
                                                {plan.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-start space-x-3">
                                                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="text-center space-y-4 pt-8">
                                <p className="text-sm text-muted-foreground">
                                    모든 플랜에는 기본 지원이 포함됩니다. 추가 질문이 있으시면 언제든 문의하세요.
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <Button variant="outline" asChild>
                                        <Link href="/pricing/compare">
                                            플랜 비교하기
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" asChild>
                                        <Link href="/contact">
                                            전문가와 상담
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}