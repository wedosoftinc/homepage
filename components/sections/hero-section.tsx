'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Play, TrendingUp, CheckCircle, Bell, Settings, Filter, MoreHorizontal, Calendar, Cog, Headphones, Award } from "lucide-react"
import {
    MetricCard,
    FeatureList,
    CTAButtonGroup,
    BadgeGroup
} from "@/components/common"
import { DashboardCard } from "@/components/dashboard"

export function HeroSection() {

    return (
        <section className="relative overflow-visible bg-background py-8 sm:py-12">
            {/* 3D 그리드 배경 */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(0deg, hsl(var(--border)) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        transform: 'perspective(500px) rotateX(45deg)',
                        transformOrigin: 'center bottom'
                    }}
                />
            </div>

            <div className="container relative z-10 mx-auto px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    {/* 메인 히어로 콘텐츠 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[600px] pt-16">
                        {/* 좌측 텍스트 콘텐츠 */}
                        <div className="flex flex-col justify-center space-y-6">
                            {/* 배지 */}
                            <BadgeGroup
                                badges={[
                                    {
                                        text: "25년 실무 경험",
                                        variant: "secondary"
                                    },
                                    {
                                        text: "글로벌 SaaS 파트너",
                                        variant: "outline"
                                    }
                                ]}
                            />

                            {/* 메인 타이틀 */}
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                    <span className="text-primary">
                                        SaaS는 도입보다,
                                    </span>
                                    <br />
                                    그 이후가 더 중요합니다
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-2xl">
                                    툴보다 일하는 방식을 바꾸는 파트너. Google Workspace, Freshworks, Monday.com 등
                                    글로벌 SaaS 솔루션의 성공적인 도입과 정착을 위한 전문 컨설팅부터 구축, 교육까지 원스톱 서비스를 제공합니다.
                                </p>
                            </div>

                            {/* 주요 기능 리스트 */}
                            <FeatureList
                                features={[
                                    { text: "25년 IT 컨설팅 실무 경험", icon: Calendar },
                                    { text: "4단계 체계적 서비스 프로세스", icon: Cog },
                                    { text: "도입 후 정착까지 전문 지원", icon: Headphones },
                                    { text: "글로벌 파트너사 직접 인증", icon: Award }
                                ]}
                                iconColor="text-primary"
                            />

                            {/* CTA 버튼들 */}
                            <CTAButtonGroup
                                buttons={[
                                    {
                                        text: "무료 상담 신청",
                                        variant: "default",
                                        iconPosition: "right"
                                    },
                                    {
                                        text: "성공사례 보기",
                                        variant: "outline",
                                        icon: Play,
                                        iconPosition: "left"
                                    }
                                ]}
                            />
                        </div>

                        {/* 우측 실제 대시보드 인터페이스 */}
                        <div className="relative flex items-center justify-center pt-4">
                            {/* 메인 3D 대시보드 컨테이너 */}
                            <div className="relative h-[600px] w-full perspective-1000 overflow-visible">

                                {/* Freshdesk 고객지원 대시보드 */}
                                <DashboardCard
                                    title="Freshdesk"
                                    headerColor="bg-green-600"
                                    size="md"
                                    transform={{
                                        rotateY: -12,
                                        rotateX: 8,
                                        translateZ: 60
                                    }}
                                    animation="float1 8s ease-in-out infinite"
                                    className="absolute top-12 left-4"
                                    actions={
                                        <>
                                            <Bell className="h-4 w-4" />
                                            <Settings className="h-4 w-4" />
                                        </>
                                    }
                                >
                                    {/* 고객지원 메트릭스 */}
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <MetricCard
                                                value="2.5분"
                                                label="평균 응답시간"
                                                variant="success"
                                                size="sm"
                                            />
                                            <MetricCard
                                                value="98%"
                                                label="고객 만족도"
                                                variant="info"
                                                size="sm"
                                            />
                                            <MetricCard
                                                value="156"
                                                label="오늘 해결건"
                                                variant="warning"
                                                size="sm"
                                            />
                                        </div>

                                        {/* 실시간 티켓 현황 */}
                                        <div className="space-y-2">
                                            <div className="text-xs font-medium text-gray-600 dark:text-gray-400">실시간 티켓 현황</div>
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                        <span className="text-xs font-medium">결제 문의</span>
                                                    </div>
                                                    <Badge variant="secondary" className="h-4 px-2 text-xs">해결완료</Badge>
                                                </div>
                                                <div className="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-950/20 rounded">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                        <span className="text-xs font-medium">기술지원 요청</span>
                                                    </div>
                                                    <Badge variant="outline" className="h-4 px-2 text-xs">진행중</Badge>
                                                </div>
                                                <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                        <span className="text-xs font-medium">계정 설정 도움</span>
                                                    </div>
                                                    <Badge variant="outline" className="h-4 px-2 text-xs">대기중</Badge>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 만족도 트렌드 */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span>고객 만족도</span>
                                                <span className="font-medium text-green-600">↗ 98%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </DashboardCard>

                                {/* Freshservice IT 서비스 관리 대시보드 */}
                                <DashboardCard
                                    title="Freshservice"
                                    headerColor="bg-blue-600"
                                    size="md"
                                    transform={{
                                        rotateY: 15,
                                        rotateX: -8,
                                        translateZ: 40
                                    }}
                                    animation="float2 7s ease-in-out infinite"
                                    className="absolute top-36 right-8"
                                    actions={<Filter className="h-4 w-4" />}
                                >
                                    {/* IT 서비스 현황 */}
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-2 gap-3">
                                            <MetricCard
                                                value="12"
                                                label="인시던트"
                                                trend={{ value: "-25% 이번 주", direction: "down" }}
                                                variant="info"
                                                size="sm"
                                            />
                                            <MetricCard
                                                value="847"
                                                label="추적 중인 자산"
                                                variant="success"
                                                size="sm"
                                            />
                                        </div>

                                        {/* SLA 준수율 */}
                                        <div className="space-y-2">
                                            <div className="text-xs font-medium text-gray-600 dark:text-gray-400">SLA 준수율</div>
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-xs">
                                                    <span>긴급 요청</span>
                                                    <span className="font-medium text-red-600">95%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                    <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                                                </div>

                                                <div className="flex justify-between text-xs">
                                                    <span>일반 요청</span>
                                                    <span className="font-medium text-blue-600">99%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '99%' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 최근 활동 */}
                                        <div className="space-y-1">
                                            <div className="text-xs font-medium text-gray-600 dark:text-gray-400">최근 해결</div>
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-xs p-1">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span>VPN 연결 이슈 해결</span>
                                                    <span className="text-gray-400 ml-auto">3분 전</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs p-1">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span>소프트웨어 라이센스 갱신</span>
                                                    <span className="text-gray-400 ml-auto">12분 전</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DashboardCard>

                                {/* Monday Sales CRM 대시보드 */}
                                <DashboardCard
                                    title="Monday Sales CRM"
                                    headerColor="bg-teal-600"
                                    size="md"
                                    transform={{
                                        rotateY: -8,
                                        rotateX: 12,
                                        translateZ: 25
                                    }}
                                    animation="float3 9s ease-in-out infinite"
                                    className="absolute bottom-8 left-12"
                                    actions={<MoreHorizontal className="h-4 w-4" />}
                                >
                                    {/* 세일즈 파이프라인 */}
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-3 gap-2">
                                            <MetricCard
                                                value="₩2.4억"
                                                label="이번 분기 매출"
                                                variant="success"
                                                size="sm"
                                            />
                                            <MetricCard
                                                value="34"
                                                label="진행중 딜"
                                                variant="info"
                                                size="sm"
                                            />
                                            <MetricCard
                                                value="78%"
                                                label="목표 달성률"
                                                variant="success"
                                                size="sm"
                                            />
                                        </div>

                                        {/* 파이프라인 단계별 현황 */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-xs">
                                                <span>신규 리드</span>
                                                <span className="font-medium">18건</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                                            </div>

                                            <div className="flex items-center justify-between text-xs">
                                                <span>계약 체결</span>
                                                <span className="font-medium">12건</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '80%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </DashboardCard>                                {/* 부가적인 플로팅 요소들 */}
                                <div
                                    className="absolute top-24 right-20 w-16 h-16 transform-gpu"
                                    style={{
                                        transform: 'rotateY(25deg) rotateX(-15deg) translateZ(80px)',
                                        animation: 'float1 5s ease-in-out infinite reverse'
                                    }}
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center">
                                        <TrendingUp className="h-8 w-8 text-white" />
                                    </div>
                                </div>

                                <div
                                    className="absolute bottom-32 right-4 w-12 h-12 transform-gpu"
                                    style={{
                                        transform: 'rotateY(-20deg) rotateX(20deg) translateZ(60px)',
                                        animation: 'float2 6s ease-in-out infinite reverse'
                                    }}
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 rounded-full shadow-lg flex items-center justify-center">
                                        <CheckCircle className="h-6 w-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}