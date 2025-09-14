'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Users, Headphones, MessageSquare, Bot, Calendar, Wrench, Monitor, Shield } from "lucide-react"

const productCategories = [
    {
        id: "customer-experience",
        title: "고객 경험 & 세일즈 관리",
        description: "CX 플랫폼과 CRM 솔루션으로 고객 관계 관리를 혁신하세요",
        icon: <Headphones className="h-6 w-6" />,
        color: "text-primary",
        products: [
            {
                name: "Freshdesk",
                description: "고객 지원 헬프데스크 솔루션",
                icon: <Headphones className="h-5 w-5" />,
                features: ["티켓 관리 시스템", "다채널 고객 지원", "자동화 워크플로우", "실시간 분석 대시보드"],
                badge: "인기",
                price: "월 $15/에이전트부터"
            },
            {
                name: "Freshsales",
                description: "CRM 및 세일즈 관리 솔루션",
                icon: <Users className="h-5 w-5" />,
                features: ["리드 관리", "거래 파이프라인", "세일즈 자동화", "고급 분석"],
                badge: null,
                price: "월 $12/사용자부터"
            },
            {
                name: "Freshchat",
                description: "실시간 채팅 및 고객 소통",
                icon: <MessageSquare className="h-5 w-5" />,
                features: ["라이브 채팅", "챗봇 통합", "팀 협업", "모바일 앱"],
                badge: null,
                price: "월 $15/에이전트부터"
            },
            {
                name: "Freddy AI",
                description: "AI 기반 고객 서비스 어시스턴트",
                icon: <Bot className="h-5 w-5" />,
                features: ["지능형 자동 응답", "감정 분석", "예측 분석", "스마트 라우팅"],
                badge: "NEW",
                price: "별도 문의"
            }
        ]
    },
    {
        id: "collaboration-productivity",
        title: "협업 및 생산성 향상",
        description: "팀워크와 프로젝트 관리를 위한 통합 솔루션",
        icon: <Calendar className="h-6 w-6" />,
        color: "text-primary",
        products: [
            {
                name: "Monday Work Management",
                description: "프로젝트 및 업무 관리 플랫폼",
                icon: <Calendar className="h-5 w-5" />,
                features: ["시각적 프로젝트 관리", "팀 협업 도구", "사용자 정의 워크플로우", "시간 추적"],
                badge: "인기",
                price: "월 $8/사용자부터"
            },
            {
                name: "Monday Dev",
                description: "개발팀을 위한 프로젝트 관리",
                icon: <Monitor className="h-5 w-5" />,
                features: ["스프린트 관리", "버그 추적", "코드 리뷰", "Git 통합"],
                badge: null,
                price: "월 $14/사용자부터"
            },
            {
                name: "Monday Sales CRM",
                description: "세일즈 파이프라인 관리",
                icon: <Users className="h-5 w-5" />,
                features: ["리드 관리", "거래 추적", "세일즈 예측", "고객 관계 관리"],
                badge: null,
                price: "월 $10/사용자부터"
            },
            {
                name: "Google Workspace",
                description: "구글의 협업 및 생산성 도구",
                icon: <Calendar className="h-5 w-5" />,
                features: ["Gmail & Drive", "Meet & Chat", "Docs & Sheets", "관리자 콘솔"],
                badge: null,
                price: "월 $6/사용자부터"
            }
        ]
    },
    {
        id: "it-infrastructure",
        title: "IT 인프라 관리",
        description: "IT 서비스 관리와 원격 접속 솔루션",
        icon: <Shield className="h-6 w-6" />,
        color: "text-primary",
        products: [
            {
                name: "Freshservice",
                description: "IT 서비스 관리 솔루션",
                icon: <Wrench className="h-5 w-5" />,
                features: ["인시던트 관리", "자산 관리", "변경 관리", "지식 베이스"],
                badge: null,
                price: "월 $19/에이전트부터"
            },
            {
                name: "Splashtop",
                description: "원격 접속 및 지원 솔루션",
                icon: <Monitor className="h-5 w-5" />,
                features: ["원격 데스크톱", "파일 전송", "세션 녹화", "다중 모니터 지원"],
                badge: null,
                price: "월 $5/사용자부터"
            }
        ]
    }
]

export function ProductsSection() {
    const [activeTab, setActiveTab] = useState("customer-experience")

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* 섹션 헤더 */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="secondary" className="mb-4">
                        솔루션
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        귀하의 비즈니스에 맞는
                        <span className="text-primary">
                            {" "}최적의 솔루션
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        3개 핵심 영역의 글로벌 SaaS 솔루션으로 디지털 전환을 가속화하세요
                    </p>
                </div>

                {/* 제품 카테고리 탭 */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-1">
                        {productCategories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="flex flex-col gap-2 p-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <div className="flex items-center gap-2">
                                    {category.icon}
                                    <span className="font-medium">{category.title}</span>
                                </div>
                                <span className="text-xs opacity-70 hidden sm:block">
                                    {category.description}
                                </span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* 제품 카드들 */}
                    {productCategories.map((category) => (
                        <TabsContent key={category.id} value={category.id} className="mt-12">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {category.products.map((product, index) => (
                                    <Card key={product.name} className="h-full hover:shadow-lg transition-shadow duration-300">
                                        <CardHeader className="pb-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg bg-primary/10 text-primary`}>
                                                        {product.icon}
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-lg">{product.name}</CardTitle>
                                                        {product.badge && (
                                                            <Badge
                                                                variant={product.badge === "NEW" ? "default" : "secondary"}
                                                                className="mt-1"
                                                            >
                                                                {product.badge}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <CardDescription className="text-sm">
                                                {product.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="space-y-4">
                                            {/* 주요 기능 */}
                                            <div className="space-y-2">
                                                <h4 className="font-medium text-sm">주요 기능</h4>
                                                <ul className="space-y-1">
                                                    {product.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* 가격 */}
                                            <div className="pt-4 border-t">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="text-sm text-muted-foreground">시작가격</div>
                                                        <div className="font-semibold text-primary">{product.price}</div>
                                                    </div>
                                                    <Button variant="outline" size="sm" asChild>
                                                        <Link href={`/solutions/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                                            자세히 보기
                                                            <ArrowRight className="ml-1 h-3 w-3" />
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* 카테고리별 CTA */}
                            <div className="mt-12 text-center">
                                <div className="bg-muted/50 rounded-lg p-8">
                                    <h3 className="text-xl font-semibold mb-4">
                                        {category.title} 솔루션에 대해 더 알아보세요
                                    </h3>
                                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                        전문 컨설턴트와 상담을 통해 귀하의 비즈니스에 최적화된 솔루션을 찾아보세요
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button size="lg">
                                            무료 상담 신청
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="lg">
                                            데모 요청
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}