'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { PageHeader } from '@/components/common/page-header'
import { MetricCard } from '@/components/common/metric-card'
import Link from 'next/link'
import {
    UsersIcon as Users,
    CalendarIcon as Calendar,
    DocumentTextIcon as FileText,
    BoltIcon as Zap,
    ArrowTrendingUpIcon as TrendingUp,
    ChartBarIcon as BarChart3,
    ArrowRightIcon as ArrowRight,
    CheckCircleIcon as CheckCircle,
    CursorArrowRaysIcon as Target,
    ClockIcon as Clock,
    BriefcaseIcon as Briefcase
} from '@heroicons/react/24/outline'

export default function CollaborationPage() {
    const breadcrumbItems = [
        { title: '솔루션', href: '/solutions' },
        { title: '협업 및 생산성 향상' }
    ]

    const products = [
        {
            name: 'Google Workspace',
            slug: 'google-workspace',
            description: '글로벌 표준 클라우드 협업 플랫폼',
            badge: '글로벌 표준',
            icon: Users,
            features: ['Gmail & Drive', 'Meet & Chat', '보안 & 관리'],
            href: '/products/google-workspace'
        },
        {
            name: 'Monday Work Management',
            slug: 'monday-work-management',
            description: '프로젝트 관리와 팀 협업의 혁신',
            badge: '프로젝트 관리',
            icon: BarChart3,
            features: ['프로젝트 추적', '워크플로우 자동화', '팀 협업'],
            href: '/products/monday-work-management'
        },
        {
            name: 'Monday Service',
            slug: 'monday-service',
            description: 'AI 기반 서비스 관리 플랫폼',
            badge: 'AI 기반',
            icon: Target,
            features: ['AI 자동화', '서비스 데스크', '실시간 모니터링'],
            href: '/products/monday-service'
        },
        {
            name: 'Monday Sales CRM',
            slug: 'monday-sales-crm',
            description: '스마트한 영업 관리 솔루션',
            badge: '영업 자동화',
            icon: TrendingUp,
            features: ['리드 관리', '파이프라인 추적', '영업 자동화'],
            href: '/products/monday-sales-crm'
        }
    ]

    const benefits = [
        {
            title: '생산성',
            value: '50%',
            description: '향상',
            icon: TrendingUp
        },
        {
            title: '프로젝트 완료',
            value: '30%',
            description: '단축',
            icon: Clock
        },
        {
            title: '팀 협업',
            value: '60%',
            description: '개선',
            icon: Users
        }
    ]

    const collaborationJourney = [
        {
            step: '1단계',
            title: '클라우드 기반 협업',
            description: 'Google Workspace로 언제 어디서나 안전한 협업 환경 구축',
            products: ['Google Workspace']
        },
        {
            step: '2단계',
            title: '프로젝트 관리 체계화',
            description: 'Monday Work Management로 모든 프로젝트를 시각적으로 관리',
            products: ['Monday Work Management']
        },
        {
            step: '3단계',
            title: 'AI 기반 서비스 자동화',
            description: 'Monday Service로 반복 업무를 자동화하고 효율성 극대화',
            products: ['Monday Service']
        },
        {
            step: '4단계',
            title: '영업 프로세스 최적화',
            description: 'Monday Sales CRM으로 영업 활동을 체계적으로 관리',
            products: ['Monday Sales CRM']
        }
    ]

    const features = [
        {
            title: '실시간 협업',
            description: '전 세계 어디서나 실시간으로 문서 편집, 회의, 소통',
            icon: Users
        },
        {
            title: '프로젝트 시각화',
            description: '간트 차트, 칸반 보드로 프로젝트 진행 상황을 한눈에 파악',
            icon: BarChart3
        },
        {
            title: 'AI 자동화',
            description: '반복 업무를 AI가 자동 처리하여 핵심 업무에 집중',
            icon: Zap
        },
        {
            title: '보안 & 관리',
            description: '엔터프라이즈급 보안으로 안전한 협업 환경 제공',
            icon: Briefcase
        }
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-green-50/50 via-background to-blue-50/50 dark:from-green-900/20 dark:via-background dark:to-blue-900/20">
                <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
                <div className="container relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <Breadcrumb items={breadcrumbItems} />

                    <div className="mt-8 text-center">
                        <Badge variant="secondary" className="mb-4">
                            협업 및 생산성 향상
                        </Badge>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                            팀의 잠재력을
                            <br />
                            <span className="text-primary">최대한 발휘</span>하세요
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            글로벌 표준 협업 도구부터 AI 기반 프로젝트 관리까지.
                            <br />
                            팀의 생산성을 혁신적으로 향상시키는 통합 솔루션입니다.
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

            {/* Features Section */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            협업의 새로운 기준
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            현대적인 협업 환경에 필요한 모든 기능을 제공합니다
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

            {/* Collaboration Journey Section */}
            <section className="py-20 bg-muted/20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            체계적인 협업 혁신 로드맵
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            협업 → 프로젝트 관리 → AI 자동화 → 영업 최적화의 완전한 플로우
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {collaborationJourney.map((step, index) => (
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
                                {index < collaborationJourney.length - 1 && (
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
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            입증된 생산성 향상 효과
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            협업 및 생산성 솔루션으로 달성한 실제 성과
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
            <section className="py-20 bg-muted/20">
                <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            협업 및 생산성 제품군
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            각 업무 영역에 특화된 전문 솔루션으로 팀의 잠재력을 최대한 발휘하세요
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        팀의 생산성 혁신을 시작하세요
                    </h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        전문 컨설턴트와 함께 귀사 팀에 최적화된 협업 솔루션을 설계해보세요.
                        25년 경험의 노하우로 성공적인 디지털 전환을 보장합니다.
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