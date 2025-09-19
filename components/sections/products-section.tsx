'use client'

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Headphones,
    Calendar,
    Shield,
    CheckCircle2,
    Lightbulb,
    Settings,
    GraduationCap,
    Wrench
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
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

                </div>
            </div>

            {/* 업계별 글로벌 SaaS 솔루션 포트폴리오 섹션 */}
            <div className="container mx-auto px-4 pt-20">
                <div className="max-w-7xl mx-auto">
                    {/* 섹션 헤더 */}
                    <div className="text-center mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            업계별 글로벌 SaaS 솔루션 포트폴리오
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            위두소프트가 업계별 최고의 글로벌 SaaS 솔루션을 소개합니다. 각 분야에서 검증된 이
                            솔루션들은 귀사의 특정 요구사항에 맞게 최적화됩니다.
                        </p>
                    </div>

                    {/* 4개 브랜드 솔루션 카드 */}
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

            {/* SaaS 도입부터 운영까지 섹션 - 원본 사이트와 동일 */}
            <div className="bg-muted/30 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* 섹션 헤더 */}
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                SaaS 도입부터 운영까지
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                툴만 소개하는 게 아니라, 우리 팀의 상황에 맞춰{" "}
                                <span className="font-semibold text-foreground">도입부터 교육, 운영지원까지 직접 챙깁니다.</span>{" "}
                                복잡한 SaaS, 저희와 함께라면 다르게 시작할 수 있습니다.
                            </p>
                        </div>

                        {/* 4단계 서비스 프로세스 (원본 사이트와 동일한 2열 구조) */}
                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* 왼쪽 컬럼 */}
                            <div className="space-y-8">
                                {/* 컨설팅 */}
                                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <CardHeader className="relative pb-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Lightbulb className="h-8 w-8 text-yellow-600" />
                                        </div>

                                        <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                            <strong>컨설팅</strong>
                                        </CardTitle>

                                        <CardDescription className="text-foreground font-medium text-base leading-relaxed mb-4">
                                            <strong>도입 전에 물어야 할 질문들을, 대신 생각해드립니다.</strong>
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="relative">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            우리 팀에 맞는 툴은 뭘까? 예산 안에서 가능한 최선은 뭘까?<br />
                                            업무 흐름과 니즈를 분석해,{" "}
                                            <strong>실제로 잘 맞는 SaaS 조합</strong>을 제안합니다.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* 교육 */}
                                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <CardHeader className="relative pb-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <GraduationCap className="h-8 w-8 text-green-600" />
                                        </div>

                                        <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                            <strong>교육</strong>
                                        </CardTitle>

                                        <CardDescription className="text-foreground font-medium text-base leading-relaxed mb-4">
                                            <strong>잘 도입했다면, 잘 쓰게 만들어야죠.</strong>
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="relative">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            관리자와 사용자 대상 맞춤형 교육을 제공하고,<br />
                                            필요하면 영상, 문서, 실습 자료까지 준비해드립니다.<br />
                                            <strong>모두가 제대로 쓸 수 있어야 진짜 도입입니다.</strong>
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* 오른쪽 컬럼 */}
                            <div className="space-y-8">
                                {/* 구축 */}
                                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <CardHeader className="relative pb-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Settings className="h-8 w-8 text-blue-600" />
                                        </div>

                                        <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                            <strong>구축</strong>
                                        </CardTitle>

                                        <CardDescription className="text-foreground font-medium text-base leading-relaxed mb-4">
                                            <strong>기술적인 설정은 우리 몫입니다.</strong>
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="relative">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            계정 생성, 데이터 마이그레이션, SSO 연동, 자동화 설정 등{" "}
                                            <strong>빠르고 오류 없이 시작할 수 있도록 환경을 완성해드립니다.</strong>
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* 운영지원 */}
                                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <CardHeader className="relative pb-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Wrench className="h-8 w-8 text-purple-600" />
                                        </div>

                                        <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                            <strong>운영지원</strong>
                                        </CardTitle>

                                        <CardDescription className="text-foreground font-medium text-base leading-relaxed mb-4">
                                            <strong>도입 이후에도 계속 곁에 있습니다.</strong>
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="relative">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            계정 변경, 정책 수정, 오류 대응, 신규 기능 안내까지<br />
                                            운영팀이 없어도 괜찮도록{" "}
                                            <strong>지속적인 지원 체계</strong>를 제공합니다.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
