'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { PageHeader } from '@/components/common/page-header'
import { MetricCard } from '@/components/common/metric-card'
import Link from 'next/link'
import {
    MessageCircle,
    Bot,
    Users,
    TrendingUp,
    HeadphonesIcon,
    Zap,
    ArrowRight,
    CheckCircle,
    Star,
    Clock,
    Target
} from 'lucide-react'

export default function CustomerExperiencePage() {
    const breadcrumbItems = [
        { title: '솔루션', href: '/solutions' },
        { title: '고객 경험 관리' }
    ]

    const products = [
        {
            name: 'Freshdesk',
            slug: 'freshdesk',
            description: '고객 지원의 새로운 기준',
            badge: '검증된 솔루션',
            icon: HeadphonesIcon,
            features: ['다채널 통합', 'AI 코파일럿', '자동화 규칙'],
            href: '/products/freshdesk'
        },
        {
            name: 'Freshdesk Omni',
            slug: 'freshdesk-omni',
            description: '옴니채널 고객 지원의 완성',
            badge: '최신 AI',
            icon: Users,
            features: ['AI 챗봇', '통합 워크스페이스', '실시간 협업'],
            href: '/products/freshdesk-omni'
        },
        {
            name: 'Freshchat',
            slug: 'freshchat',
            description: '실시간 채팅으로 고객과 즉시 연결',
            badge: '실시간 소통',
            icon: MessageCircle,
            features: ['AI 챗봇', '다채널 통합', '팀 협업'],
            href: '/products/freshchat'
        },
        {
            name: 'Freddy AI',
            slug: 'freddy-ai',
            description: 'GPT 기반 지능형 고객 지원 자동화',
            badge: 'AI 혁신',
            icon: Bot,
            features: ['GPT LLM', '24/7 자동 응답', '감정 분석'],
            href: '/products/freddy-ai'
        },
        {
            name: 'Freshsales',
            slug: 'freshsales',
            description: '스마트한 CRM으로 영업 성과 극대화',
            badge: '영업 최적화',
            icon: TrendingUp,
            features: ['파이프라인 관리', '영업 자동화', '360° 고객뷰'],
            href: '/products/freshsales'
        }
    ]

    const benefits = [
        {
            title: '고객 만족도',
            value: '40%',
            description: '향상',
            icon: Star
        },
        {
            title: '응답 시간',
            value: '60%',
            description: '단축',
            icon: Clock
        },
        {
            title: '운영 효율성',
            value: '50%',
            description: '증대',
            icon: Target
        }
    ]

    const customerJourney = [
        {
            step: '1단계',
            title: '고객 접점 통합',
            description: 'Freshdesk로 모든 고객 문의를 하나의 플랫폼에서 관리',
            products: ['Freshdesk', 'Freshdesk Omni']
        },
        {
            step: '2단계',
            title: 'AI 기반 자동화',
            description: 'Freddy AI로 반복 문의를 자동 처리하고 상담원 업무 최적화',
            products: ['Freddy AI']
        },
        {
            step: '3단계',
            title: '실시간 고객 소통',
            description: 'Freshchat으로 고객과 즉시 연결하고 만족도 향상',
            products: ['Freshchat']
        },
        {
            step: '4단계',
            title: '영업 기회 전환',
            description: 'Freshsales로 잠재 고객을 실제 매출로 전환',
            products: ['Freshsales']
        }
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
                <div className="container relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <Breadcrumb items={breadcrumbItems} />

                    <div className="mt-8 text-center">
                        <Badge variant="secondary" className="mb-4">
                            고객 경험 & 세일즈 관리
                        </Badge>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                            고객 여정의 모든 순간을
                            <br />
                            <span className="text-primary">완벽하게 연결</span>합니다
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            상담부터 AI 자동화, 실시간 소통, 영업 전환까지.
                            <br />
                            고객과의 모든 접점을 하나의 플랫폼에서 통합 관리하세요.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg">
                                무료 상담 신청
                            </Button>
                            <Button size="lg" variant="outline">
                                제품 체험하기
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Journey Section */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            완전한 고객 여정 관리
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            상담 → AI 자동화 → 실시간 소통 → 영업 전환의 완벽한 플로우
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {customerJourney.map((step, index) => (
                            <Card key={index} className="relative">
                                <CardHeader>
                                    <Badge variant="outline" className="w-fit">
                                        {step.step}
                                    </Badge>
                                    <CardTitle className="text-lg">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        {step.description}
                                    </p>
                                    <div className="space-y-1">
                                        {step.products.map((product, pIndex) => (
                                            <div key={pIndex} className="flex items-center text-sm text-primary">
                                                <CheckCircle className="h-3 w-3 mr-2" />
                                                {product}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                {index < customerJourney.length - 1 && (
                                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                                        <ArrowRight className="h-6 w-6 text-muted-foreground" />
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-muted/20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            입증된 비즈니스 성과
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            고객 경험 관리 솔루션으로 달성한 실제 성과
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <MetricCard
                                    key={index}
                                    value={benefit.value}
                                    label={`${benefit.title} ${benefit.description}`}
                                    icon={<IconComponent className="h-6 w-6" />}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            고객 경험 관리 제품군
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            각 단계에 최적화된 전문 솔루션으로 완벽한 고객 여정을 구현하세요
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => {
                            const IconComponent = product.icon
                            return (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <IconComponent className="h-8 w-8 text-primary" />
                                            <Badge variant="secondary">{product.badge}</Badge>
                                        </div>
                                        <CardTitle className="text-xl">{product.name}</CardTitle>
                                        <CardDescription>{product.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 mb-6">
                                            {product.features.map((feature, fIndex) => (
                                                <div key={fIndex} className="flex items-center text-sm">
                                                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                        <Button asChild className="w-full group-hover:bg-primary/90">
                                            <Link href={product.href}>
                                                자세히 보기
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        고객 경험 혁신을 시작하세요
                    </h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        전문 컨설턴트와 함께 귀사에 최적화된 고객 경험 관리 솔루션을 설계해보세요.
                        25년 경험의 노하우로 성공적인 도입을 보장합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                            무료 상담 신청
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            제품 체험하기
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}