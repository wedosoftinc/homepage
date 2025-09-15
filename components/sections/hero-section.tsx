'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, CheckCircle, TrendingUp, Users, Building2, Calendar, MessageSquare, BarChart3, Settings, Search, Bell, Plus, Filter, MoreHorizontal, CircleCheckBig, Clock, User } from "lucide-react"

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
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="px-3 py-1">
                                    <TrendingUp className="h-3 w-3 mr-1" />
                                    B2B SaaS 전문 기업
                                </Badge>
                                <Badge variant="outline" className="px-3 py-1">
                                    글로벌 파트너십
                                </Badge>
                            </div>

                            {/* 메인 타이틀 */}
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                    기업의 디지털 혁신을 위한{" "}
                                    <span className="text-primary">
                                        최적의 파트너
                                    </span>
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-2xl">
                                    Monday.com, Freshworks, Google Workspace 등 글로벌 SaaS 솔루션으로
                                    귀하의 비즈니스를 혁신하세요. 전문 컨설팅부터 구축, 교육까지 원스톱 서비스를 제공합니다.
                                </p>
                            </div>

                            {/* 주요 기능 리스트 */}
                            <div className="space-y-3">
                                {[
                                    "글로벌 SaaS 솔루션 공급 전문",
                                    "맞춤형 컨설팅 및 구축 서비스",
                                    "24/7 기술 지원 및 사용자 교육"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                                        <span className="text-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA 버튼들 */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="text-lg px-8">
                                    무료 상담 신청
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8">
                                    <Play className="mr-2 h-5 w-5" />
                                    데모 영상 보기
                                </Button>
                            </div>
                        </div>

                        {/* 우측 실제 대시보드 인터페이스 */}
                        <div className="relative flex items-center justify-center pt-4">
                            {/* 메인 3D 대시보드 컨테이너 */}
                            <div className="relative h-[600px] w-full perspective-1000 overflow-visible">

                                {/* Freshdesk 고객지원 대시보드 */}
                                <div
                                    className="absolute top-12 left-4 w-80 h-72 transform-gpu"
                                    style={{
                                        transform: 'rotateY(-12deg) rotateX(8deg) translateZ(60px)',
                                        animation: 'float1 8s ease-in-out infinite'
                                    }}
                                >
                                    <Card className="h-full bg-white dark:bg-slate-900 border shadow-2xl overflow-hidden">
                                        {/* Freshdesk 헤더 */}
                                        <div className="bg-green-600 text-white p-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                                                    <span className="text-xs font-bold">F</span>
                                                </div>
                                                <span className="font-semibold text-sm">Freshdesk</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Bell className="h-4 w-4" />
                                                <Settings className="h-4 w-4" />
                                            </div>
                                        </div>

                                        {/* 고객지원 메트릭스 */}
                                        <div className="p-4 space-y-4">
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-green-600">2.5분</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">평균 응답시간</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-blue-600">98%</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">고객 만족도</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-orange-600">156</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">오늘 해결건</div>
                                                </div>
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
                                    </Card>
                                </div>

                                {/* Freshservice IT 서비스 관리 대시보드 */}
                                <div
                                    className="absolute top-36 right-8 w-80 h-72 transform-gpu"
                                    style={{
                                        transform: 'rotateY(15deg) rotateX(-8deg) translateZ(40px)',
                                        animation: 'float2 7s ease-in-out infinite'
                                    }}
                                >
                                    <Card className="h-full bg-white dark:bg-slate-900 border shadow-2xl overflow-hidden">
                                        {/* Freshservice 헤더 */}
                                        <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                                                    <span className="text-xs font-bold">FS</span>
                                                </div>
                                                <span className="font-semibold text-sm">Freshservice</span>
                                            </div>
                                            <Filter className="h-4 w-4" />
                                        </div>

                                        {/* IT 서비스 현황 */}
                                        <div className="p-3 space-y-3">
                                            <div className="grid grid-cols-2 gap-3 text-xs">
                                                <div className="bg-blue-50 dark:bg-blue-950/20 p-2 rounded">
                                                    <div className="font-medium text-blue-600">인시던트</div>
                                                    <div className="text-lg font-bold text-blue-800 dark:text-blue-400">12</div>
                                                    <div className="text-xs text-blue-600">-25% 이번 주</div>
                                                </div>
                                                <div className="bg-green-50 dark:bg-green-950/20 p-2 rounded">
                                                    <div className="font-medium text-green-600">자산 관리</div>
                                                    <div className="text-lg font-bold text-green-800 dark:text-green-400">847</div>
                                                    <div className="text-xs text-green-600">추적 중인 자산</div>
                                                </div>
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
                                    </Card>
                                </div>

                                {/* Monday Sales CRM 대시보드 */}
                                <div
                                    className="absolute bottom-8 left-12 w-80 h-72 transform-gpu"
                                    style={{
                                        transform: 'rotateY(-8deg) rotateX(12deg) translateZ(25px)',
                                        animation: 'float3 9s ease-in-out infinite'
                                    }}
                                >
                                    <Card className="h-full bg-white dark:bg-slate-900 border shadow-2xl overflow-hidden">
                                        {/* Monday CRM 헤더 */}
                                        <div className="bg-teal-600 text-white p-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                                                    <span className="text-xs font-bold">M</span>
                                                </div>
                                                <span className="font-semibold text-sm">Monday Sales CRM</span>
                                            </div>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </div>

                                        {/* 세일즈 파이프라인 */}
                                        <div className="p-3">
                                            <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                                                <div className="text-center">
                                                    <div className="text-lg font-bold text-teal-600">₩2.4억</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">이번 분기 매출</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-lg font-bold text-blue-600">34</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">진행중 딜</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-lg font-bold text-green-600">78%</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">목표 달성률</div>
                                                </div>
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
                                    </Card>
                                </div>                                {/* 부가적인 플로팅 요소들 */}
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

            {/* 스크롤 인디케이터 */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    )
}