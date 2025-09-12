'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Phone, Zap, Database, ArrowRight, CheckCircle } from "lucide-react"

const productCategories = [
    {
        id: "customer-experience",
        title: "고객 경험 관리",
        description: "상담은 여기, 영업은 저기, 지원은 또 따로… 고객 정보가 흩어져 있진 않으신가요? 모든 고객 여정을 하나의 흐름으로 연결하고, AI 기반 자동화로 반복 응답까지 줄여보세요. 빠르고 일관된 응대가 고객 만족도를 바꿔줍니다.",
        icon: Phone,
        color: "from-blue-500 to-cyan-500",
        products: [
            {
                name: "Freshdesk",
                description: "통합 고객 지원 플랫폼",
                features: ["멀티채널 지원", "자동화 워크플로우", "AI 기반 응답", "실시간 분석"],
                badge: "인기",
                href: "/products/freshdesk"
            },
            {
                name: "Freshsales",
                description: "스마트 CRM 솔루션",
                features: ["리드 관리", "영업 파이프라인", "이메일 자동화", "모바일 앱"],
                badge: "신규",
                href: "/products/freshsales"
            },
            {
                name: "Freshchat",
                description: "실시간 고객 채팅",
                features: ["라이브 채팅", "챗봇 연동", "모바일 메시징", "팀 협업"],
                href: "/products/freshchat"
            },
            {
                name: "Freddy AI",
                description: "AI 어시스턴트",
                features: ["자동 응답", "감정 분석", "예측 분석", "인사이트 제공"],
                badge: "AI",
                href: "/products/freddy-ai"
            }
        ]
    },
    {
        id: "productivity",
        title: "협업 및 생산성 향상",
        description: "문서는 드라이브에, 일정은 캘린더에, 할 일은 다른 앱에… 정신없으셨죠? 흩어진 협업 도구를 하나로 연결하면 팀의 속도와 집중력이 완전히 달라집니다. AI 추천과 스마트 자동화로, 일하는 방식도 더 똑똑해집니다.",
        icon: Zap,
        color: "from-purple-500 to-pink-500",
        products: [
            {
                name: "Monday Work Management",
                description: "프로젝트 관리 플랫폼",
                features: ["칸반 보드", "간트 차트", "자동화", "대시보드"],
                badge: "베스트",
                href: "/products/monday-work"
            },
            {
                name: "Monday Dev",
                description: "개발팀 전용 관리도구",
                features: ["스프린트 관리", "버그 추적", "코드 리뷰", "배포 관리"],
                href: "/products/monday-dev"
            },
            {
                name: "Monday Sales CRM",
                description: "세일즈 관리 시스템",
                features: ["거래 추적", "예측 분석", "자동 보고서", "모바일 지원"],
                href: "/products/monday-sales"
            },
            {
                name: "Google Workspace",
                description: "통합 협업 도구",
                features: ["Gmail", "Drive", "Meet", "Calendar"],
                badge: "필수",
                href: "/products/google-workspace"
            }
        ]
    },
    {
        id: "infrastructure",
        title: "IT 인프라 최적화",
        description: "재택근무는 늘어났는데, 보안과 운영은 여전히 복잡하신가요? 원격 접속, 자산 관리, 헬프데스크까지 하나로 통합하고, AI 기반 자동 분류와 셀프 서비스로 운영 부담을 줄이세요. 유연하고 안전한 인프라 환경을 만드는 가장 쉬운 방법입니다.",
        icon: Database,
        color: "from-green-500 to-teal-500",
        products: [
            {
                name: "Freshservice",
                description: "IT 서비스 관리",
                features: ["헬프데스크", "자산 관리", "변경 관리", "ITIL 준수"],
                badge: "인기",
                href: "/products/freshservice"
            },
            {
                name: "Splashtop",
                description: "원격 접속 솔루션",
                features: ["고성능 연결", "보안 접속", "파일 전송", "세션 녹화"],
                href: "/products/splashtop"
            }
        ]
    }
]

export function ProductsSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        당신의 비즈니스에 꼭 맞는 솔루션
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        각 업무 영역별로 최적화된 솔루션으로 디지털 전환을 완성하세요
                    </p>
                </div>

                <div className="space-y-24">
                    {productCategories.map((category, categoryIndex) => (
                        <div key={category.id} className="space-y-8">
                            {/* 카테고리 헤더 */}
                            <div className="text-center space-y-4">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} text-white`}>
                                    <category.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                    {category.title}
                                </h3>
                                <p className="mx-auto max-w-[800px] text-muted-foreground text-lg leading-relaxed">
                                    {category.description}
                                </p>
                            </div>

                            {/* 제품 그리드 */}
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {category.products.map((product, productIndex) => (
                                    <Card key={product.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <CardHeader className="space-y-3">
                                            <div className="flex items-start justify-between">
                                                <CardTitle className="text-lg">{product.name}</CardTitle>
                                                {product.badge && (
                                                    <Badge variant={
                                                        product.badge === "인기" ? "default" :
                                                            product.badge === "신규" ? "secondary" :
                                                                product.badge === "AI" ? "destructive" :
                                                                    product.badge === "베스트" ? "default" :
                                                                        "outline"
                                                    }>
                                                        {product.badge}
                                                    </Badge>
                                                )}
                                            </div>
                                            <CardDescription className="text-sm leading-relaxed">
                                                {product.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                {product.features.map((feature) => (
                                                    <div key={feature} className="flex items-center text-sm">
                                                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                                                        <span className="text-muted-foreground">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex gap-2 pt-2">
                                                <Button variant="outline" size="sm" className="flex-1 group" asChild>
                                                    <Link href={product.href}>
                                                        자세히 보기
                                                        <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                                                    </Link>
                                                </Button>
                                                <Button size="sm" className="flex-1" asChild>
                                                    <Link href={`/pricing#${category.id}`}>
                                                        가격 보기
                                                    </Link>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* 카테고리별 CTA */}
                            <div className="text-center">
                                <Button variant="outline" size="lg" asChild>
                                    <Link href={`/solutions/${category.id}`}>
                                        {category.title} 전체 보기
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}