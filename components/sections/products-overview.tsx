'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRightIcon as ArrowRight, UsersIcon as Users, CogIcon as Cog, ChatBubbleBottomCenterTextIcon as MessageSquare } from "@heroicons/react/24/outline"
import Link from "next/link"

// 제품 데이터
const productCategories = {
    'customer-experience': {
        title: '고객 경험 & 세일즈 관리',
        description: '고객 지원과 영업 프로세스를 효율화하는 통합 솔루션',
        icon: Users,
        products: [
            {
                slug: 'freshdesk',
                title: 'Freshdesk',
                subtitle: '고객 지원의 새로운 기준',
                description: '모든 고객 문의를 체계적으로 관리하고 빠르게 해결할 수 있는 종합적인 고객 지원 플랫폼',
                features: ['티켓 관리', '다채널 지원', '지식베이스', 'AI 자동화']
            },
            {
                slug: 'freshdesk-omni',
                title: 'Freshdesk Omni',
                subtitle: '옴니채널 고객 지원',
                description: '여러 채널의 고객 문의를 하나의 플랫폼에서 통합 관리',
                features: ['옴니채널 통합', '실시간 채팅', '소셜 미디어', 'AI 챗봇']
            },
            {
                slug: 'freshsales',
                title: 'Freshsales',
                subtitle: '스마트한 세일즈 CRM',
                description: '영업 프로세스를 체계화하고 고객 관계를 효과적으로 관리하는 CRM 솔루션',
                features: ['리드 관리', '세일즈 파이프라인', '이메일 자동화', '모바일 지원']
            },
            {
                slug: 'freshchat',
                title: 'Freshchat',
                subtitle: '실시간 고객 메시징',
                description: '웹, 모바일, 소셜 채널의 고객 메시지를 통합 관리하는 메시징 솔루션',
                features: ['AI 챗봇', '다채널 연동', '팀 협업', '모바일 앱']
            }
        ]
    },
    'collaboration': {
        title: '협업 및 생산성 향상',
        description: '팀 협업과 업무 효율성을 극대화하는 플랫폼',
        icon: MessageSquare,
        products: [
            {
                slug: 'monday-service',
                title: 'Monday Service',
                subtitle: 'AI 기반 서비스 관리',
                description: '강력한 AI와 유연한 워크플로우로 서비스 효율을 극대화하는 혁신적인 플랫폼',
                features: ['AI 제안', '서비스 워크플로우', '고객 포털', '자동화']
            },
            {
                slug: 'monday-sales-crm',
                title: 'Monday Sales CRM',
                subtitle: '시각적 세일즈 관리',
                description: '파이프라인 가시성을 높이고 모든 세일즈 프로세스를 완벽하게 관리',
                features: ['파이프라인 관리', '팀 협업', '자동화', '커스터마이징']
            },
            {
                slug: 'google-workspace',
                title: 'Google Workspace',
                subtitle: '협업의 새로운 차원',
                description: 'Gmail, Drive, Meet 등 구글의 모든 협업 도구를 통합한 비즈니스 솔루션',
                features: ['Gmail', 'Drive', 'Meet', 'Calendar', 'Docs', '보안']
            }
        ]
    },
    'infrastructure': {
        title: 'IT 인프라 관리',
        description: 'IT 운영 효율성과 시스템 안정성을 보장하는 솔루션',
        icon: Cog,
        products: [
            {
                slug: 'freshservice',
                title: 'Freshservice',
                subtitle: 'IT 서비스 관리',
                description: 'ITIL 기반의 포괄적인 IT 서비스 관리 솔루션으로 IT 운영 효율화',
                features: ['IT 헬프데스크', '인시던트 관리', '자산 관리', 'SLA 관리']
            },
            {
                slug: 'splashtop',
                title: 'Splashtop',
                subtitle: '안전한 원격 접속',
                description: '고성능 원격 데스크톱 솔루션으로 어디서나 안전하게 컴퓨터 접속',
                features: ['원격 접속', '파일 전송', '세션 기록', '고급 보안']
            }
        ]
    }
}

export function ProductsOverview() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-muted/20 py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                            글로벌 표준 SaaS 솔루션
                        </h1>
                        <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
                            비즈니스 성장을 가속화하는 검증된 솔루션들로<br />
                            디지털 혁신을 시작하세요
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="#products">
                                    제품 둘러보기
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/contact">
                                    상담 문의
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">9+</div>
                            <p className="text-muted-foreground">주요 SaaS 제품</p>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">25년</div>
                            <p className="text-muted-foreground">IT 솔루션 경험</p>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">1000+</div>
                            <p className="text-muted-foreground">고객사</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-16 lg:py-24 bg-muted/20">
                <div className="container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                제품 카테고리
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                비즈니스 영역별로 최적화된 솔루션을 제공합니다
                            </p>
                        </div>

                        <Tabs defaultValue="customer-experience" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-8">
                                <TabsTrigger value="customer-experience" className="text-sm">
                                    고객 경험 & 세일즈
                                </TabsTrigger>
                                <TabsTrigger value="collaboration" className="text-sm">
                                    협업 & 생산성
                                </TabsTrigger>
                                <TabsTrigger value="infrastructure" className="text-sm">
                                    IT 인프라
                                </TabsTrigger>
                            </TabsList>

                            {Object.entries(productCategories).map(([key, category]) => (
                                <TabsContent key={key} value={key}>
                                    <div className="text-center mb-8">
                                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                            <category.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                        <p className="text-muted-foreground">{category.description}</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {category.products.map((product) => (
                                            <Card key={product.slug} className="h-full">
                                                <CardHeader>
                                                    <div className="flex items-center justify-between">
                                                        <CardTitle className="text-xl">{product.title}</CardTitle>
                                                        <Badge variant="outline">{category.title}</Badge>
                                                    </div>
                                                    <CardDescription className="text-base font-medium">
                                                        {product.subtitle}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-muted-foreground mb-4">
                                                        {product.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {product.features.map((feature, index) => (
                                                            <Badge key={index} variant="secondary" className="text-xs">
                                                                {feature}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button asChild className="w-full">
                                                        <Link href={`/products/${product.slug}`}>
                                                            자세히 보기
                                                            <ArrowRight className="ml-2 h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            어떤 솔루션이 필요한지 고민되시나요?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            25년 경험의 전문 컨설턴트가 귀하의 비즈니스에 최적화된<br />
                            솔루션을 제안해드립니다
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    무료 컨설팅 신청
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/pricing">
                                    가격 정보 보기
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}