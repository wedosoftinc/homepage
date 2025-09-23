'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { PageHeader } from '@/components/common/page-header'
import { MetricCard } from '@/components/common/metric-card'
import Link from 'next/link'
import {
    Server,
    Shield,
    Zap,
    Code,
    Monitor,
    Settings,
    ArrowRight,
    CheckCircle,
    Clock,
    TrendingDown,
    Activity
} from 'lucide-react'

export default function InfrastructurePage() {
    const breadcrumbItems = [
        { title: '솔루션', href: '/solutions' },
        { title: 'IT 인프라 최적화' }
    ]

    const products = [
        {
            name: 'Freshservice',
            slug: 'freshservice',
            description: 'IT 서비스 관리의 새로운 표준',
            badge: 'ITSM 리더',
            icon: Server,
            features: ['인시던트 관리', 'IT 자산 관리', 'ITIL 준수'],
            href: '/products/freshservice'
        },
        {
            name: 'Splashtop',
            slug: 'splashtop',
            description: '고성능 원격 접속 솔루션',
            badge: '원격 접속',
            icon: Monitor,
            features: ['고성능 원격 데스크탑', '보안 접속', '멀티 플랫폼'],
            href: '/products/splashtop'
        },
        {
            name: 'Monday Dev',
            slug: 'monday-dev',
            description: '개발팀을 위한 프로젝트 관리',
            badge: '개발 최적화',
            icon: Code,
            features: ['스프린트 관리', '버그 추적', '코드 리뷰'],
            href: '/products/monday-dev'
        }
    ]

    const benefits = [
        {
            title: '시스템 다운타임',
            value: '80%',
            description: '감소',
            icon: TrendingDown
        },
        {
            title: 'IT 운영 효율성',
            value: '60%',
            description: '향상',
            icon: Activity
        },
        {
            title: '문제 해결 시간',
            value: '70%',
            description: '단축',
            icon: Clock
        }
    ]

    const infrastructureJourney = [
        {
            step: '1단계',
            title: 'IT 서비스 관리 체계화',
            description: 'Freshservice로 모든 IT 서비스를 체계적으로 관리하고 최적화',
            products: ['Freshservice']
        },
        {
            step: '2단계',
            title: '원격 접속 환경 구축',
            description: 'Splashtop으로 안전하고 빠른 원격 근무 환경 제공',
            products: ['Splashtop']
        },
        {
            step: '3단계',
            title: '개발팀 프로세스 최적화',
            description: 'Monday Dev로 애자일 개발 프로세스와 협업 효율성 극대화',
            products: ['Monday Dev']
        }
    ]

    const features = [
        {
            title: 'ITSM 자동화',
            description: 'IT 서비스 요청부터 해결까지 전 과정을 자동화하여 효율성 극대화',
            icon: Settings
        },
        {
            title: '보안 강화',
            description: '엔터프라이즈급 보안으로 IT 인프라와 데이터를 안전하게 보호',
            icon: Shield
        },
        {
            title: '실시간 모니터링',
            description: 'IT 자산과 서비스 상태를 실시간으로 모니터링하고 예방적 관리',
            icon: Activity
        },
        {
            title: '고성능 원격 접속',
            description: '언제 어디서나 빠르고 안정적인 원격 접속으로 업무 연속성 보장',
            icon: Zap
        }
    ]

    const itChallenges = [
        {
            challenge: 'IT 서비스 요청 처리 지연',
            solution: 'Freshservice 자동화로 즉시 처리',
            improvement: '처리 시간 70% 단축'
        },
        {
            challenge: '원격 근무 환경 부족',
            solution: 'Splashtop 고성능 원격 접속',
            improvement: '생산성 50% 향상'
        },
        {
            challenge: '개발 프로젝트 관리 복잡성',
            solution: 'Monday Dev 애자일 프로세스',
            improvement: '릴리스 주기 40% 단축'
        },
        {
            challenge: 'IT 자산 관리의 비효율성',
            solution: 'Freshservice 통합 자산 관리',
            improvement: '관리 효율성 60% 향상'
        }
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-50/50 via-background to-indigo-50/50 dark:from-slate-900/20 dark:via-background dark:to-indigo-900/20">
                <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
                <div className="container relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <Breadcrumb items={breadcrumbItems} />

                    <div className="mt-8 text-center">
                        <Badge variant="secondary" className="mb-4">
                            IT 인프라 최적화
                        </Badge>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                            IT 인프라의
                            <br />
                            <span className="text-primary">완전한 최적화</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            체계적인 IT 서비스 관리부터 고성능 원격 접속, 개발팀 프로세스 최적화까지.
                            <br />
                            안정적이고 효율적인 IT 인프라를 구축하세요.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg">
                                무료 상담 신청
                            </Button>
                            <Button size="lg" variant="outline">
                                인프라 진단받기
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* IT Challenges & Solutions */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            IT 운영의 주요 과제와 해결책
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            기업이 직면한 IT 문제들을 체계적으로 해결합니다
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {itChallenges.map((item, index) => (
                            <Card key={index} className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-1">과제</h3>
                                            <p className="text-muted-foreground">{item.challenge}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-green-600 dark:text-green-400 mb-1">해결책</h3>
                                            <p className="text-muted-foreground">{item.solution}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">개선 효과</h3>
                                            <p className="font-medium text-primary">{item.improvement}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-muted/20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            IT 인프라 최적화의 핵심 기능
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            현대적인 IT 환경에 필요한 모든 기능을 제공합니다
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <Card key={index} className="text-center border-none shadow-lg">
                                    <CardHeader>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                                            <IconComponent className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Infrastructure Journey Section */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            체계적인 IT 인프라 구축 로드맵
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            ITSM → 원격 접속 → 개발 최적화의 단계별 인프라 구축
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {infrastructureJourney.map((step, index) => (
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
                                {index < infrastructureJourney.length - 1 && (
                                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
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
                            입증된 IT 운영 개선 효과
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            IT 인프라 최적화 솔루션으로 달성한 실제 성과
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
                            IT 인프라 최적화 제품군
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            각 영역에 특화된 전문 솔루션으로 완벽한 IT 인프라를 구축하세요
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        IT 인프라 최적화를 시작하세요
                    </h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        전문 컨설턴트와 함께 귀사의 IT 환경을 진단하고 최적화된 솔루션을 설계해보세요.
                        25년 경험의 IT 전문성으로 안정적인 인프라 구축을 보장합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                            무료 IT 진단 신청
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            솔루션 체험하기
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}