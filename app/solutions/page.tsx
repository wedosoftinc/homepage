'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import {
    Users,
    TrendingUp,
    Server,
    ArrowRight,
    CheckCircle,
    Zap,
    Globe,
    Shield,
    Target
} from 'lucide-react'

export default function SolutionsPage() {
    const solutions = [
        {
            title: '고객 경험 관리',
            description: '모든 고객 여정을 하나의 흐름으로 연결하는 통합 솔루션',
            href: '/solutions/customer-experience',
            icon: Users,
            badge: '고객 만족도 95% 향상',
            features: [
                'Freshdesk - 고객 지원의 새로운 기준',
                'Freshdesk Omni - 옴니채널 통합 관리',
                'Freshchat - 실시간 채팅 솔루션',
                'Freddy AI - GPT 기반 자동화',
                'Freshsales - 스마트한 CRM'
            ],
            benefits: ['응답 시간 70% 단축', 'AI 자동화로 반복 업무 제거', '다채널 통합 관리'],
            color: 'from-blue-500/10 to-cyan-500/10',
            borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
            title: '협업 및 생산성 향상',
            description: '팀의 잠재력을 최대한 발휘하는 혁신적인 협업 플랫폼',
            href: '/solutions/collaboration',
            icon: TrendingUp,
            badge: '생산성 50% 향상',
            features: [
                'Google Workspace - 글로벌 표준 협업',
                'Monday Work Management - 프로젝트 관리',
                'Monday Service - AI 기반 서비스 관리',
                'Monday Sales CRM - 영업 관리 솔루션'
            ],
            benefits: ['프로젝트 완료 30% 단축', '팀 협업 60% 개선', '실시간 협업 환경'],
            color: 'from-green-500/10 to-emerald-500/10',
            borderColor: 'border-green-200 dark:border-green-800'
        },
        {
            title: 'IT 인프라 최적화',
            description: '안정적이고 효율적인 IT 인프라로 비즈니스 연속성 보장',
            href: '/solutions/infrastructure',
            icon: Server,
            badge: '시스템 다운타임 80% 감소',
            features: [
                'Freshservice - IT 서비스 관리의 표준',
                'Splashtop - 고성능 원격 접속',
                'Monday Dev - 개발팀 프로세스 최적화'
            ],
            benefits: ['IT 운영 효율성 60% 향상', '문제 해결 시간 70% 단축', '엔터프라이즈급 보안'],
            color: 'from-purple-500/10 to-violet-500/10',
            borderColor: 'border-purple-200 dark:border-purple-800'
        }
    ]

    const overallBenefits = [
        {
            icon: <Globe className="h-6 w-6" />,
            title: '글로벌 표준 솔루션',
            description: 'Google, Freshworks, Monday.com 등 검증된 글로벌 플랫폼'
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: 'AI 기반 자동화',
            description: '반복 업무를 AI가 처리하여 핵심 업무에 집중'
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: '엔터프라이즈 보안',
            description: '기업급 보안 표준으로 데이터와 시스템 보호'
        },
        {
            icon: <Target className="h-6 w-6" />,
            title: '25년 전문성',
            description: '검증된 경험과 노하우로 성공적인 도입 보장'
        }
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
                <div className="container relative max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-4">
                            위두소프트 솔루션
                        </Badge>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                            비즈니스 혁신을 위한
                            <br />
                            <span className="text-primary">완전한 솔루션</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            고객 경험부터 팀 협업, IT 인프라까지.
                            <br />
                            25년 경험의 전문성으로 귀사의 디지털 전환을 완성합니다.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg">
                                무료 상담 신청
                            </Button>
                            <Button size="lg" variant="outline">
                                솔루션 둘러보기
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overall Benefits */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            위두소프트만의 차별화된 가치
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            검증된 솔루션과 전문성으로 확실한 성과를 보장합니다
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {overallBenefits.map((benefit, index) => (
                            <Card key={index} className="text-center border-none shadow-lg">
                                <CardHeader>
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                                        {benefit.icon}
                                    </div>
                                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-muted/20">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            3가지 핵심 솔루션 영역
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            각 영역별 전문 솔루션으로 비즈니스 전 영역을 최적화하세요
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => {
                            const IconComponent = solution.icon
                            return (
                                <Card key={index} className={`relative overflow-hidden border-2 ${solution.borderColor} bg-gradient-to-br ${solution.color} hover:shadow-xl transition-all duration-300`}>
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-4">
                                            <IconComponent className="h-10 w-10 text-primary" />
                                            <Badge variant="secondary" className="text-xs">
                                                {solution.badge}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl">{solution.title}</CardTitle>
                                        <CardDescription className="text-base">{solution.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {/* 포함 제품 */}
                                        <div>
                                            <h4 className="font-semibold mb-3 text-sm text-muted-foreground">포함 제품</h4>
                                            <ul className="space-y-2">
                                                {solution.features.map((feature, fIndex) => (
                                                    <li key={fIndex} className="flex items-start text-sm">
                                                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* 주요 혜택 */}
                                        <div>
                                            <h4 className="font-semibold mb-3 text-sm text-muted-foreground">주요 혜택</h4>
                                            <ul className="space-y-1">
                                                {solution.benefits.map((benefit, bIndex) => (
                                                    <li key={bIndex} className="flex items-center text-sm text-primary font-medium">
                                                        <Zap className="h-3 w-3 mr-2" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button asChild className="w-full mt-6">
                                            <Link href={solution.href}>
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

            {/* Success Stories */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            검증된 성공 사례
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            다양한 업종의 기업들이 위두소프트 솔루션으로 성과를 달성했습니다
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center p-8">
                            <div className="text-4xl font-bold text-primary mb-2">500+</div>
                            <div className="text-lg font-semibold mb-2">성공적인 도입 기업</div>
                            <p className="text-muted-foreground">대기업부터 스타트업까지 다양한 규모의 기업에서 검증</p>
                        </Card>
                        <Card className="text-center p-8">
                            <div className="text-4xl font-bold text-primary mb-2">25년</div>
                            <div className="text-lg font-semibold mb-2">IT 솔루션 전문성</div>
                            <p className="text-muted-foreground">축적된 경험과 노하우로 안정적인 서비스 제공</p>
                        </Card>
                        <Card className="text-center p-8">
                            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                            <div className="text-lg font-semibold mb-2">고객 만족도</div>
                            <p className="text-muted-foreground">전문 컨설팅과 지속적인 지원으로 높은 만족도 달성</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        비즈니스 혁신을 시작할 준비가 되셨나요?
                    </h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        전문 컨설턴트와 함께 귀사에 최적화된 솔루션을 설계해보세요.
                        무료 상담을 통해 현재 상황을 진단하고 최적의 전략을 제시해드립니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                            무료 상담 예약
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            전화 상담 02-2135-3071
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}