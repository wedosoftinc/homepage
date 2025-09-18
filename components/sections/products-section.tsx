'use client'

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Headphones,
    Calendar,
    Shield,
    CheckCircle2
} from "lucide-react"
import { FreshworksLogo } from "@/components/logos/freshworks-logo"
import { GoogleWorkspaceLogo } from "@/components/logos/google-workspace-logo"
import { MondayLogo } from "@/components/logos/monday-logo"
import { SplashtopLogo } from "@/components/logos/splashtop-logo"

export function ProductsSection() {
    // 원본 화면 기반 3개 솔루션
    const solutions = [
        {
            icon: <Headphones className="h-12 w-12 text-blue-600" />,
            title: "고객 경험 관리",
            description: "고객 지원과 CRM을 통합한 완벽한 고객 경험 관리로 A.I 기반 자동화를 통해 더 나은 서비스를 제공합니다.",
            features: [
                "24/7 고객 지원 자동화",
                "통합 CRM & 헬프데스크",
                "실시간 채팅 & 챗봇",
                "AI 기반 고객 인사이트"
            ],
            link: "/solutions/customer-experience"
        },
        {
            icon: <Calendar className="h-12 w-12 text-green-600" />,
            title: "협업 및 생산성 향상",
            description: "팀워크와 업무 효율성을 극대화하는 통합 협업 플랫폼으로 원격 근무 시대에 맞는 새로운 업무 방식을 경험하세요.",
            features: [
                "통합 클라우드 오피스",
                "프로젝트 관리 자동화",
                "실시간 문서 협업",
                "화상회의 & 소통 도구"
            ],
            link: "/solutions/collaboration"
        },
        {
            icon: <Shield className="h-12 w-12 text-purple-600" />,
            title: "IT 인프라 최적화",
            description: "안정적이고 효율적인 IT 인프라 관리를 통해 비즈니스 연속성을 보장하고, 원격 지원을 통해 신속한 문제 해결을 제공합니다.",
            features: [
                "IT 서비스 관리 (ITSM)",
                "원격 접속 & 지원",
                "자산 관리 자동화",
                "보안 & 모니터링"
            ],
            link: "/solutions/it-infrastructure"
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* 섹션 헤더 */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            당신의 비즈니스에
                            <span className="text-primary"> 꼭 맞는 솔루션</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            25년 경험의 전문 컨설팅으로 귀하의 비즈니스에 최적화된 글로벌 SaaS 솔루션을 제공합니다
                        </p>
                    </div>

                    {/* 솔루션 카드 그리드 */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {solutions.map((solution, index) => (
                            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card">
                                {/* 배경 그라디언트 */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <CardHeader className="relative text-center pb-4">
                                    {/* 아이콘 */}
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                        {solution.icon}
                                    </div>

                                    <CardTitle className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                                        {solution.title}
                                    </CardTitle>

                                    <CardDescription className="text-muted-foreground leading-relaxed">
                                        {solution.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="relative space-y-6">
                                    {/* 주요 기능 */}
                                    <div className="space-y-3">
                                        {solution.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-3 text-sm">
                                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                                <span className="text-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA 버튼 */}
                                    <div className="pt-4">
                                        <Button
                                            variant="outline"
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                                            asChild
                                        >
                                            <Link href={solution.link}>
                                                자세히 알아보기
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* 하단 CTA 섹션 */}
                    <div className="mt-20 text-center">
                        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                업계별 글로벌 SaaS 솔루션 포트폴리오
                            </h3>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                위두소프트가 업계별 최고의 글로벌 SaaS 솔루션을 소개합니다. 각 분야에서 검증된 이
                                솔루션들은 귀사의 특정 요구사항에 맞게 최적화됩니다.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="text-lg px-8" asChild>
                                    <Link href="/contact">
                                        무료 상담 신청
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg px-8">
                                    솔루션 더 보기
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4개 브랜드 솔루션 섹션 - 원본 화면과 동일 */}
            <div className="container mx-auto px-4 pt-20">
                <div className="max-w-7xl mx-auto">
                    {/** 원본 사이트 레이아웃과 동일한 2열 카드: 상단 좌측 텍스트, 하단 중앙 로고, 큰 라운드, 균일한 높이 **/}
                    {(() => {
                        const brandSolutions = [
                            {
                                title: "고객 경험 혁신의 완성",
                                description: "고객 지원, 영업, IT 서비스를 통합한 완벽한 고객 경험 관리로 A.I 기반 자동화를 통해 더 나은 서비스를 제공합니다.",
                                logo: <FreshworksLogo className="h-20 w-auto" />
                            },
                            {
                                title: "클라우드 협업의 새로운 기준",
                                description: "실시간 문서 협업, 화상 회의, 클라우드 저장소가 하나로 연결된 업무 환경. 언제 어디서나 팀과 함께 효율적으로 일할 수 있습니다.",
                                logo: <GoogleWorkspaceLogo className="h-14 w-auto" />
                            },
                            {
                                title: "프로젝트 관리의 혁신",
                                description: "직관적인 워크플로우로 복잡한 프로젝트를 명확하게 관리. 실시간 진행 상황 파악과 팀 협업으로 업무 완수율을 높입니다.",
                                logo: <MondayLogo className="h-14 w-auto" />
                            },
                            {
                                title: "안전한 원격 업무 솔루션",
                                description: "강력한 보안과 고성능 원격 접속으로 어디서나 업무 연속성 보장. 재택근무와 하이브리드 업무 환경에 최적화되었습니다.",
                                logo: <SplashtopLogo className="h-18 w-auto" />
                            }
                        ]

                        return (
                            <div className="grid gap-10 md:grid-cols-2">
                                {brandSolutions.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group relative flex flex-col justify-between bg-white dark:bg-card border rounded-[48px] p-8 min-h-[240px] md:min-h-[260px] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                                    >
                                        {/* 상단 텍스트 */}
                                        <div className="pr-2">
                                            <h3 className="text-lg font-bold mb-4 text-foreground tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed max-w-[520px]">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* 하단 로고 (중앙 정렬) */}
                                        <div className="pt-8 flex justify-center items-end">
                                            <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                                {item.logo}
                                            </div>
                                        </div>

                                        {/* 배경 장식 (호버 시 은은한 강조) */}
                                        <div className="pointer-events-none absolute inset-0 rounded-[48px] bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        )
                    })()}
                </div>
            </div>
        </section>
    )
}
