'use client'

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ArrowRightIcon as ArrowRight,
    PhoneIcon as Headphones,
    CalendarIcon as Calendar,
    ShieldCheckIcon as Shield,
    CheckCircleIcon as CheckCircle2,
    LightBulbIcon as Lightbulb,
    CogIcon as Settings,
    AcademicCapIcon as GraduationCap,
    WrenchScrewdriverIcon as Wrench
} from "@heroicons/react/24/outline"
import { FreshworksLogo } from "@/components/logos/freshworks-logo"
import { GoogleWorkspaceLogo } from "@/components/logos/google-workspace-logo"
import { MondayLogo } from "@/components/logos/monday-logo"
import { SplashtopLogo } from "@/components/logos/splashtop-logo"

export function ProductsSection() {
    // 원본 화면 기반 3개 솔루션
    const solutions = [
        {
            icon: <Headphones className="h-12 w-12 text-primary" />,
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
            icon: <Calendar className="h-12 w-12 text-primary" />,
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
            icon: <Shield className="h-12 w-12 text-primary" />,
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
        <section className="py-20 bg-muted/20">
            <div className="container">
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

                                    {/* CTA 버튼 제거됨 - 요청에 따라 링크 삭제 */}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>

            {/* 업계별 글로벌 SaaS 솔루션 포트폴리오 섹션 */}
            <div className="container pt-20 pb-20">
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
            <div className="bg-muted/40 py-24">
                <div className="container">
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

                        {/* 메인 컨텐츠 - 왼쪽 큰 카드 + 오른쪽 2x2 그리드 */}
                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* 왼쪽 큰 카드 - 메인 메시지 */}
                            <div className="lg:col-span-1">
                                <Card className="h-full group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-primary/10 via-primary/5 to-background">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <CardContent className="relative p-8 h-full flex flex-col justify-center">
                                        <div className="space-y-6">
                                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight text-center">
                                                SaaS는 도입보다,{" "}
                                                <span className="text-primary">그 이후가 더 중요합니다</span>.
                                            </h3>

                                            <div className="space-y-4 text-muted-foreground">
                                                <p className="leading-relaxed">
                                                    툴을 도입하는 것만으로는 일하는 방식이 바뀌지 않아요.
                                                </p>
                                                <p className="leading-relaxed">
                                                    우리는 단순한 리셀러가 아닌,{" "}
                                                    <span className="font-semibold text-foreground">고객의 상황을 함께 고민하고, 도입부터 운영까지 함께하는 파트너</span>입니다.
                                                </p>
                                                <p className="leading-relaxed">
                                                    복잡한 설정부터 사용자 교육, 도입 후 운영 지원까지 —{" "}
                                                    <span className="font-semibold text-foreground">한 번 맡기면 끝까지 책임지는 서비스</span>를 경험해보세요.
                                                </p>
                                            </div>

                                            <div className="pt-4">
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
                                                    지금 상담해보기
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* 오른쪽 2x2 그리드 - 4가지 서비스 (간단한 배경 스타일) */}
                            <div className="lg:col-span-2">
                                <div className="grid gap-8 sm:grid-cols-2">
                                    {/* 컨설팅 */}
                                    <div className="group p-6 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                                                    <Lightbulb className="h-6 w-6 text-primary" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-2 text-foreground">
                                                    컨설팅
                                                </h3>
                                                <p className="text-sm font-medium text-foreground mb-3 leading-relaxed">
                                                    도입 전에 물어야 할 질문들을, 대신 생각해드립니다.
                                                </p>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    우리 팀에 맞는 툴은 뭘까? 예산 안에서 가능한 최선은 뭘까? 업무 흐름과 니즈를 분석해, 실제로 잘 맞는 SaaS 조합을 제안합니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 구축 */}
                                    <div className="group p-6 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                                                    <Settings className="h-6 w-6 text-primary" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-2 text-foreground">
                                                    구축
                                                </h3>
                                                <p className="text-sm font-medium text-foreground mb-3 leading-relaxed">
                                                    기술적인 설정은 우리 몫입니다.
                                                </p>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    계정 생성, 데이터 마이그레이션, SSO 연동, 자동화 설정 등 빠르고 오류 없이 시작할 수 있도록 환경을 완성해드립니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 교육 */}
                                    <div className="group p-6 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                                                    <GraduationCap className="h-6 w-6 text-primary" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-2 text-foreground">
                                                    교육
                                                </h3>
                                                <p className="text-sm font-medium text-foreground mb-3 leading-relaxed">
                                                    잘 도입했다면, 잘 쓰게 만들어야죠.
                                                </p>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    관리자와 사용자 대상 맞춤형 교육을 제공하고, 필요하면 영상, 문서, 실습 자료까지 준비해드립니다. 모두가 제대로 쓸 수 있어야 진짜 도입입니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 운영지원 */}
                                    <div className="group p-6 rounded-lg hover:bg-muted/30 transition-colors duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                                                    <Wrench className="h-6 w-6 text-primary" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-2 text-foreground">
                                                    운영지원
                                                </h3>
                                                <p className="text-sm font-medium text-foreground mb-3 leading-relaxed">
                                                    도입 이후에도 계속 곁에 있습니다.
                                                </p>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    계정 변경, 정책 수정, 오류 대응, 신규 기능 안내까지 운영팀이 없어도 괜찮도록 지속적인 지원 체계를 제공합니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 회사 소개 인사이트 섹션 - 특별한 디자인 */}
            <div className="py-24 bg-background relative overflow-hidden">
                {/* 미묘한 배경 패턴 */}
                <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px]" />

                <div className="container relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* 섹션 헤더 */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                왜 위두소프트인가요?
                            </h2>
                            <div className="space-y-3 text-xl text-muted-foreground max-w-4xl mx-auto">
                                <p>25년의 실무 경험과 수백 건의 전문 SaaS 프로젝트,</p>
                                <p>우리는 단지 파는 회사가 아니라 <strong className="text-primary">직접 실행하는 파트너</strong>입니다.</p>
                            </div>
                        </div>

                        {/* 메인 히어로 메시지 - 부드러운 디자인 */}
                        <div className="relative mb-20">
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/80 via-primary/70 to-primary/60 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 text-white shadow-xl">
                                {/* 배경 패턴 - 더 미묘하게 */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/0.05)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.white/0.02)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

                                {/* 플로팅 요소들 - 더 부드럽게 */}
                                <div className="absolute top-12 right-16 w-24 h-24 bg-white/10 dark:bg-slate-400/10 rounded-full blur-2xl animate-pulse" />
                                <div className="absolute bottom-12 left-16 w-20 h-20 bg-white/8 dark:bg-slate-400/8 rounded-full blur-xl animate-pulse delay-1000" />

                                <div className="relative p-10 lg:p-14 text-center">
                                    <div className="max-w-4xl mx-auto space-y-6">
                                        <div className="text-xs text-primary-foreground/70 dark:text-white/80 tracking-widest uppercase font-medium">
                                            우리는 다릅니다
                                        </div>

                                        <h3 className="text-2xl lg:text-4xl font-bold leading-tight text-white">
                                            툴보다, 일하는 방식을<br />
                                            바꾸는 파트너입니다.
                                        </h3>

                                        <p className="text-lg text-primary-foreground/85 dark:text-white/90 max-w-2xl mx-auto leading-relaxed">
                                            25년간 도입하고, 운영하고, 실패도 해봤습니다.<br />
                                            그래서 진짜 필요한 걸 압니다.
                                        </p>

                                        <div className="pt-3">
                                            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
                                                회사소개 보기
                                                <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 통계 섹션 - 카드 스타일 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* SaaS 구축 */}
                            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl dark:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <CardContent className="p-8 text-center relative">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>

                                    <h4 className="text-xl font-bold mb-3 text-foreground">SaaS 구축</h4>
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                        중소기업부터 교육기관까지,<br />
                                        현장 중심으로 성공적으로 완성
                                    </p>

                                    <div className="text-4xl font-black text-primary mb-1">
                                        200<span className="text-2xl">+</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium">건의 프로젝트</div>
                                </CardContent>
                            </Card>

                            {/* 평균 1차 응답 속도 */}
                            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl dark:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <CardContent className="p-8 text-center relative">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <h4 className="text-xl font-bold mb-3 text-foreground">평균 1차 응답 속도</h4>
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                        도입 문의부터 질문 이후까지,<br />
                                        실제 도움이 되는 답변을 지향합니다
                                    </p>

                                    <div className="text-4xl font-black text-primary mb-1">
                                        4<span className="text-2xl">hr</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium">빠른 응답</div>
                                </CardContent>
                            </Card>

                            {/* 파트너십 유지율 */}
                            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl dark:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <CardContent className="p-8 text-center relative">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>

                                    <h4 className="text-xl font-bold mb-3 text-foreground">파트너십 유지율</h4>
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                        도입만 하고 끝나지 않습니다.<br />
                                        10개 중 8개 이상이 지속 함께하고 있습니다
                                    </p>

                                    <div className="text-4xl font-black text-primary mb-1">
                                        85<span className="text-2xl">%</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium">높은 신뢰도</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}