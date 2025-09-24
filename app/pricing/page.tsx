"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CurrencyConverter } from "@/components/ui/currency-converter"
import {
    ArrowRight,
    ArrowLeft,
    Users,
    Building,
    Zap,
    MessageSquare,
    Headphones,
    Wrench,
    Calculator,
    CheckCircle,
    TrendingUp,
    Shield,
    Globe,
    BarChart3,
    FileText,
    Clock,
    Target,
    Lightbulb,
    Minus,
    Plus,
    Calendar,
    AlertTriangle
} from "lucide-react"

// 타입 정의
interface QuoteData {
    needs: string[]
    selectedProducts: string[]
    userCount: number
    selectedPlans: { [productId: string]: string } // 제품별 선택된 플랜
    billingCycle: 'monthly' | 'yearly'
}

interface ProductPlan {
    id: string
    name: string
    price: number
    features: string[]
    recommended?: boolean
    maxUsers?: number
}

interface Product {
    id: string
    name: string
    category: string
    description: string
    plans: ProductPlan[]
}

interface BusinessNeed {
    id: string
    title: string
    description: string
    icon: any
    color: string
    products: string[]
}

interface BillingCycle {
    id: 'monthly' | 'yearly'
    label: string
    discount: number
    description: string
}

export default function CustomQuotePage() {
    // 위저드 단계 상태 (6단계로 확장)
    const [currentStep, setCurrentStep] = useState(1)
    const [quoteData, setQuoteData] = useState<QuoteData>({
        needs: [],
        selectedProducts: [],
        userCount: 1,
        selectedPlans: {},
        billingCycle: 'monthly'
    })

    // 1단계: 비즈니스 니즈 파악
    const businessNeeds = [
        {
            id: 'customer-support',
            title: '고객 서비스 향상',
            description: '고객 응답 시간 단축, 만족도 향상, 옴니채널 지원',
            icon: Headphones,
            color: 'bg-blue-50 border-blue-200 text-blue-700',
            products: ['freshdesk', 'freshchat', 'freddy-ai']
        },
        {
            id: 'sales-growth',
            title: '매출 성장 가속화',
            description: 'CRM 최적화, 영업 프로세스 자동화, 리드 관리',
            icon: TrendingUp,
            color: 'bg-green-50 border-green-200 text-green-700',
            products: ['freshsales', 'monday-sales']
        },
        {
            id: 'team-productivity',
            title: '팀 생산성 향상',
            description: '협업 도구, 프로젝트 관리, 워크플로우 자동화',
            icon: Users,
            color: 'bg-purple-50 border-purple-200 text-purple-700',
            products: ['google-workspace', 'monday-work', 'monday-service']
        },
        {
            id: 'operational-efficiency',
            title: '운영 효율성 개선',
            description: '업무 프로세스 최적화, 데이터 통합, 자동화',
            icon: Zap,
            color: 'bg-yellow-50 border-yellow-200 text-yellow-700',
            products: ['monday-service', 'freshservice', 'google-workspace']
        },
        {
            id: 'data-analytics',
            title: '데이터 기반 의사결정',
            description: '비즈니스 인텔리전스, 대시보드, 성과 분석',
            icon: BarChart3,
            color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
            products: ['monday-work', 'freshservice', 'google-workspace']
        },
        {
            id: 'remote-work',
            title: '원격근무 환경 구축',
            description: '클라우드 협업, 원격 접속, 보안 강화',
            icon: Globe,
            color: 'bg-cyan-50 border-cyan-200 text-cyan-700',
            products: ['google-workspace', 'splashtop', 'monday-work']
        },
        {
            id: 'it-security',
            title: 'IT 보안 및 관리',
            description: 'IT 서비스 관리, 보안 강화, 시스템 모니터링',
            icon: Shield,
            color: 'bg-red-50 border-red-200 text-red-700',
            products: ['freshservice', 'splashtop', 'google-workspace']
        },
        {
            id: 'time-management',
            title: '시간 관리 최적화',
            description: '일정 관리, 리소스 계획, 업무 우선순위',
            icon: Clock,
            color: 'bg-pink-50 border-pink-200 text-pink-700',
            products: ['monday-work', 'google-workspace']
        }
    ]

    // 3단계: 결제 주기
    const billingCycles: BillingCycle[] = [
        {
            id: 'monthly',
            label: '월간 결제',
            discount: 0,
            description: '언제든 취소 가능, 유연한 요금제'
        },
        {
            id: 'yearly',
            label: '연간 결제',
            discount: 0.2, // 20% 할인
            description: '2개월 무료, 최대 20% 절약'
        }
    ]

    // 제품 데이터베이스 (플랜별 구조)
    const productDatabase: Record<string, Product> = {
        'freshdesk': {
            id: 'freshdesk',
            name: 'Freshdesk',
            category: 'customer-support',
            description: '고객 지원 및 헬프데스크 솔루션',
            plans: [
                { id: 'growth', name: 'Growth', price: 18, features: ['무제한 티켓', '이메일 지원', '기본 보고서', '모바일 앱'], maxUsers: 100 },
                { id: 'pro', name: 'Pro', price: 59, features: ['Growth 모든 기능', '전화 지원', '커스텀 앱', '고급 분석', '시간 추적'], recommended: true },
                { id: 'enterprise', name: 'Enterprise', price: 95, features: ['Pro 모든 기능', 'IP 화이트리스트', '감사 로그', '샌드박스', '24/7 지원'] }
            ]
        },
        'freshchat': {
            id: 'freshchat',
            name: 'Freshchat',
            category: 'customer-support',
            description: '실시간 채팅 및 메시징 플랫폼',
            plans: [
                { id: 'free', name: 'Free', price: 0, features: ['10 대화/월', '기본 챗봇', '웹 위젯'], maxUsers: 10 },
                { id: 'growth', name: 'Growth', price: 19, features: ['무제한 대화', '고급 챗봇', 'IntelliAssign', '모바일 SDK'], recommended: true },
                { id: 'pro', name: 'Pro', price: 59, features: ['Growth 모든 기능', '캠페인', '고급 보고서', 'API 액세스'] }
            ]
        },
        'freddy-ai': {
            id: 'freddy-ai',
            name: 'Freddy AI',
            category: 'customer-support',
            description: 'AI 기반 고객 지원 자동화',
            plans: [
                { id: 'starter', name: 'Starter', price: 29, features: ['AI 답변 제안', '감정 분석', '기본 인사이트'] },
                { id: 'growth', name: 'Growth', price: 59, features: ['Starter 모든 기능', 'AI 챗봇', '예측 연락처 점수', '통합 분석'], recommended: true },
                { id: 'enterprise', name: 'Enterprise', price: 119, features: ['Growth 모든 기능', '맞춤형 AI 모델', '고급 워크플로우', '우선 지원'] }
            ]
        },
        'freshsales': {
            id: 'freshsales',
            name: 'Freshsales',
            category: 'sales-management',
            description: 'CRM 및 영업 관리 솔루션',
            plans: [
                { id: 'growth', name: 'Growth', price: 18, features: ['리드/딜 관리', '연락처 관리', '이메일', '전화', '기본 보고서'] },
                { id: 'pro', name: 'Pro', price: 47, features: ['Growth 모든 기능', '영업 시퀀스', '파이프라인 관리', '고급 보고서', 'AI 기반 딜 인사이트'], recommended: true },
                { id: 'enterprise', name: 'Enterprise', price: 83, features: ['Pro 모든 기능', '영역 관리', '예측 연락처 점수', '고급 워크플로우', '감사 로그'] }
            ]
        },
        'google-workspace': {
            id: 'google-workspace',
            name: 'Google Workspace',
            category: 'team-collaboration',
            description: '클라우드 기반 생산성 및 협업 도구',
            plans: [
                { id: 'business-starter', name: 'Business Starter', price: 6, features: ['Gmail', 'Drive (30GB)', 'Meet (100명)', 'Docs, Sheets, Slides'] },
                { id: 'business-standard', name: 'Business Standard', price: 12, features: ['Business Starter 모든 기능', 'Drive (2TB)', 'Meet (150명)', '보안 관리'], recommended: true },
                { id: 'business-plus', name: 'Business Plus', price: 18, features: ['Business Standard 모든 기능', 'Drive (5TB)', 'Meet (500명)', '고급 보안', 'Vault'] }
            ]
        },
        'monday-work': {
            id: 'monday-work',
            name: 'Monday Work Management',
            category: 'team-collaboration',
            description: '프로젝트 관리 및 팀 협업 플랫폼',
            plans: [
                { id: 'basic', name: 'Basic', price: 8, features: ['무제한 보드', '기본 대시보드', '모바일 앱', '24/7 지원'], maxUsers: 1000 },
                { id: 'standard', name: 'Standard', price: 10, features: ['Basic 모든 기능', '타임라인 뷰', '캘린더 뷰', '게스트 액세스', '통합'], recommended: true },
                { id: 'pro', name: 'Pro', price: 16, features: ['Standard 모든 기능', '개인 보드', '차트 뷰', '시간 추적', '고급 검색'] }
            ]
        }
    }

    // 니즈 선택 핸들러
    const handleNeedsSelect = (needId: string) => {
        const updatedNeeds = quoteData.needs.includes(needId)
            ? quoteData.needs.filter(id => id !== needId)
            : [...quoteData.needs, needId]

        setQuoteData({ ...quoteData, needs: updatedNeeds })
    }

    // 사용자 수 선택 핸들러
    const handleUserCountChange = (userCount: number) => {
        setQuoteData({ ...quoteData, userCount })
    }

    // 결제 주기 선택 핸들러
    const handleBillingCycleSelect = (cycleId: 'monthly' | 'yearly') => {
        setQuoteData({ ...quoteData, billingCycle: cycleId })
    }

    // 다음/이전 단계 (5단계로 확장)
    const nextStep = () => setCurrentStep(Math.min(currentStep + 1, 5))
    const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1))

    // 추천 제품 계산
    const getRecommendedProducts = () => {
        const recommendedIds = quoteData.needs.flatMap(needId => {
            const need = businessNeeds.find(n => n.id === needId)
            return need ? need.products : []
        })
        return [...new Set(recommendedIds)]
    }

    // 총 가격 계산 (선택된 플랜 기반)
    const calculateTotalPrice = () => {
        let totalPerUserUSD = 0
        Object.entries(quoteData.selectedPlans).forEach(([productId, planId]) => {
            const product = productDatabase[productId]
            if (product) {
                const plan = product.plans.find(p => p.id === planId)
                if (plan) {
                    totalPerUserUSD += plan.price
                }
            }
        })

        // 사용자 수 기반 계산
        const totalMonthly = totalPerUserUSD * quoteData.userCount

        // 볼륨 할인 적용 (50명 이상 10%, 100명 이상 15%, 200명 이상 20%)
        let volumeDiscount = 0
        if (quoteData.userCount >= 200) volumeDiscount = 0.2
        else if (quoteData.userCount >= 100) volumeDiscount = 0.15
        else if (quoteData.userCount >= 50) volumeDiscount = 0.1

        const discountedMonthly = totalMonthly * (1 - volumeDiscount)

        // 연간 결제 할인 적용
        const billingCycle = billingCycles.find(c => c.id === quoteData.billingCycle)
        const billingDiscount = billingCycle?.discount || 0
        const finalMonthly = discountedMonthly * (1 - billingDiscount)

        return Math.round(finalMonthly)
    }

    // 연간 총액 계산
    const calculateYearlyTotal = () => {
        return calculateTotalPrice() * 12
    }

    // 진행률 계산 (6단계로 변경)
    const getProgress = () => (currentStep / 6) * 100

    return (
        <div className="min-h-screen bg-background">
            {/* 헤더 */}
            <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                <div className="container max-w-4xl mx-auto px-6 text-center">
                    <Badge variant="secondary" className="mb-4">
                        맞춤 견적 시스템
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        3분만에 받는
                        <span className="text-primary"> 맞춤 솔루션 견적</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        귀하의 비즈니스 니즈에 딱 맞는 솔루션과 실시간 원화 가격을 확인하세요
                    </p>

                    {/* 진행률 바 */}
                    <div className="w-full bg-muted rounded-full h-2 mb-4">
                        <div
                            className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${getProgress()}%` }}
                        />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {currentStep}/6 단계 완료
                    </p>
                </div>
            </section>

            {/* 메인 콘텐츠 */}
            <section className="py-16">
                <div className="container max-w-4xl mx-auto px-6" style={{ maxWidth: currentStep === 1 ? '72rem' : '64rem' }}>

                    {/* 1단계: 비즈니스 니즈 파악 */}
                    {currentStep === 1 && (
                        <Card className="p-8">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl">어떤 문제를 해결하고 싶으신가요?</CardTitle>
                                <CardDescription className="text-base">
                                    해당되는 항목을 모두 선택해주세요 (복수 선택 가능)
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {businessNeeds.map((need) => {
                                        const IconComponent = need.icon
                                        const isSelected = quoteData.needs.includes(need.id)
                                        return (
                                            <Card
                                                key={need.id}
                                                className={`cursor-pointer transition-all duration-200 hover:shadow-md h-full ${isSelected
                                                    ? `border-2 ${need.color} shadow-lg`
                                                    : 'border border-border hover:border-primary/50'
                                                    }`}
                                                onClick={() => handleNeedsSelect(need.id)}
                                            >
                                                <CardContent className="p-5 h-full flex flex-col">
                                                    <div className="flex items-start space-x-3 flex-1">
                                                        <div className={`p-2 rounded-lg flex-shrink-0 ${isSelected ? need.color : 'bg-muted'}`}>
                                                            <IconComponent className="h-5 w-5" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="font-semibold mb-2 text-sm leading-tight">{need.title}</h3>
                                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                                {need.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {isSelected && (
                                                        <div className="mt-3 pt-2 border-t border-border/50">
                                                            <div className="flex items-center text-xs text-primary font-medium">
                                                                <CheckCircle className="h-3 w-3 mr-1" />
                                                                선택됨
                                                            </div>
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        )
                                    })}
                                </div>

                                <div className="flex justify-between mt-8">
                                    <div></div>
                                    <Button
                                        onClick={nextStep}
                                        disabled={quoteData.needs.length === 0}
                                        size="lg"
                                    >
                                        다음 단계 <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* 2단계: 사용자 수 입력 */}
                    {currentStep === 2 && (
                        <Card className="p-8">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl">몇 명이 사용하실 예정인가요?</CardTitle>
                                <CardDescription className="text-base">
                                    사용자 수에 따라 정확한 견적을 계산해드립니다. 볼륨 할인도 자동 적용됩니다.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                {/* 선택된 제품 요약 */}
                                {quoteData.selectedProducts.length > 0 && (
                                    <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                                        <h3 className="font-semibold text-lg mb-4 text-center">선택하신 솔루션</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {quoteData.selectedProducts.map(productId => {
                                                const product = productDatabase[productId]
                                                if (!product) return null
                                                return (
                                                    <div key={productId} className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-lg">
                                                        <div className="p-2 bg-primary/10 rounded-lg">
                                                            <Zap className="h-4 w-4 text-primary" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-sm">{product.name}</h4>
                                                            <p className="text-xs text-muted-foreground">{product.description}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* 제품을 선택하지 않은 경우 안내 */}
                                {quoteData.selectedProducts.length === 0 && (
                                    <div className="bg-amber-50 dark:bg-amber-950 p-6 rounded-lg border border-amber-200 dark:border-amber-800 text-center">
                                        <div className="mb-4">
                                            <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                                            <h3 className="font-semibold text-amber-800 dark:text-amber-200">제품을 먼저 선택해주세요</h3>
                                            <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
                                                정확한 견적을 위해 이전 단계에서 필요한 제품들을 선택해주세요.
                                            </p>
                                        </div>
                                        <Button variant="outline" onClick={prevStep} className="border-amber-300 text-amber-700 hover:bg-amber-100">
                                            <ArrowLeft className="mr-2 h-4 w-4" /> 제품 선택하러 가기
                                        </Button>
                                    </div>
                                )}

                                {/* 사용자 수 입력 - 제품 선택시에만 표시 */}
                                {quoteData.selectedProducts.length > 0 && (
                                    <div className="max-w-md mx-auto">
                                        <div className="flex items-center justify-center space-x-4">
                                            <Button
                                                variant="outline"
                                                size="lg"
                                                onClick={() => handleUserCountChange(Math.max(1, quoteData.userCount - 1))}
                                                disabled={quoteData.userCount <= 1}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>

                                            <div className="text-center min-w-[120px]">
                                                <div className="text-4xl font-bold text-primary">{quoteData.userCount}</div>
                                                <div className="text-sm text-muted-foreground">사용자</div>
                                            </div>

                                            <Button
                                                variant="outline"
                                                size="lg"
                                                onClick={() => handleUserCountChange(quoteData.userCount + 1)}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        {/* 빠른 선택 버튼들 */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
                                            {[5, 10, 25, 50, 100, 200, 500, 1000].map((count) => (
                                                <Button
                                                    key={count}
                                                    variant={quoteData.userCount === count ? "default" : "outline"}
                                                    size="sm"
                                                    onClick={() => handleUserCountChange(count)}
                                                >
                                                    {count}명
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* 볼륨 할인 정보 */}
                                {quoteData.selectedProducts.length > 0 && (
                                    <div className="max-w-lg mx-auto">
                                        <h3 className="text-center text-lg font-semibold mb-4">볼륨 할인 혜택</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-sm">
                                            <div className={`p-3 rounded-lg border ${quoteData.userCount >= 50 ? 'bg-green-50 border-green-200 text-green-700' : 'bg-muted/50'}`}>
                                                <div className="font-semibold">50명 이상</div>
                                                <div>10% 할인</div>
                                            </div>
                                            <div className={`p-3 rounded-lg border ${quoteData.userCount >= 100 ? 'bg-green-50 border-green-200 text-green-700' : 'bg-muted/50'}`}>
                                                <div className="font-semibold">100명 이상</div>
                                                <div>15% 할인</div>
                                            </div>
                                            <div className={`p-3 rounded-lg border ${quoteData.userCount >= 200 ? 'bg-green-50 border-green-200 text-green-700' : 'bg-muted/50'}`}>
                                                <div className="font-semibold">200명 이상</div>
                                                <div>20% 할인</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-between mt-8">
                                    <Button variant="outline" onClick={prevStep} size="lg">
                                        <ArrowLeft className="mr-2 h-4 w-4" /> 이전 단계
                                    </Button>
                                    <Button
                                        onClick={nextStep}
                                        disabled={quoteData.userCount < 1}
                                        size="lg"
                                    >
                                        다음 단계 <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* 3단계: 결제 주기 선택 */}
                    {currentStep === 3 && (
                        <Card className="p-8">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl">결제 주기를 선택해주세요</CardTitle>
                                <CardDescription className="text-base">
                                    연간 결제 시 최대 20% 할인 혜택을 받을 수 있습니다
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                    {billingCycles.map((cycle) => {
                                        const isSelected = quoteData.billingCycle === cycle.id
                                        return (
                                            <Card
                                                key={cycle.id}
                                                className={`cursor-pointer transition-all duration-200 hover:shadow-md relative ${isSelected
                                                    ? 'border-2 border-primary bg-primary/5 shadow-lg'
                                                    : 'border border-border hover:border-primary/50'
                                                    }`}
                                                onClick={() => handleBillingCycleSelect(cycle.id)}
                                            >
                                                {cycle.id === 'yearly' && (
                                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                        <Badge className="bg-green-500 text-white">인기</Badge>
                                                    </div>
                                                )}
                                                <CardContent className="p-6 text-center">
                                                    <Calendar className={`h-8 w-8 mx-auto mb-3 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                                                    <h3 className="font-semibold text-lg mb-2">{cycle.label}</h3>
                                                    {cycle.discount > 0 && (
                                                        <div className="mb-2">
                                                            <Badge variant="secondary" className="bg-green-50 text-green-700">
                                                                {Math.round(cycle.discount * 100)}% 할인
                                                            </Badge>
                                                        </div>
                                                    )}
                                                    <p className="text-sm text-muted-foreground mb-4">
                                                        {cycle.description}
                                                    </p>
                                                    {isSelected && (
                                                        <div className="flex items-center justify-center text-sm text-primary">
                                                            <CheckCircle className="h-4 w-4 mr-1" />
                                                            선택됨
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        )
                                    })}
                                </div>

                                <div className="flex justify-between mt-8">
                                    <Button variant="outline" onClick={prevStep} size="lg">
                                        <ArrowLeft className="mr-2 h-4 w-4" /> 이전 단계
                                    </Button>
                                    <Button onClick={nextStep} size="lg">
                                        제품 보기 <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* 3단계: 제품 추천 및 선택 */}
                    {currentStep === 3 && (
                        <Card className="p-8">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl">추천 솔루션을 확인하세요</CardTitle>
                                <CardDescription className="text-base">
                                    선택하신 니즈에 맞는 제품들입니다. 필요한 제품을 선택해주세요
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {getRecommendedProducts().map((productId) => {
                                        const product = productDatabase[productId]
                                        if (!product) return null

                                        const isSelected = quoteData.selectedProducts.includes(productId)
                                        return (
                                            <Card
                                                key={productId}
                                                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${isSelected
                                                    ? 'border-2 border-primary bg-primary/5 shadow-lg'
                                                    : 'border border-border hover:border-primary/50'
                                                    }`}
                                                onClick={() => {
                                                    if (isSelected) {
                                                        // 제품 제거
                                                        const updatedProducts = quoteData.selectedProducts.filter(id => id !== productId)
                                                        const updatedPlans = { ...quoteData.selectedPlans }
                                                        delete updatedPlans[productId]
                                                        setQuoteData({
                                                            ...quoteData,
                                                            selectedProducts: updatedProducts,
                                                            selectedPlans: updatedPlans
                                                        })
                                                    } else {
                                                        // 제품 추가 (기본 플랜 자동 선택)
                                                        const updatedProducts = [...quoteData.selectedProducts, productId]
                                                        const recommendedPlan = product.plans.find(p => p.recommended) || product.plans[0]
                                                        const updatedPlans = {
                                                            ...quoteData.selectedPlans,
                                                            [productId]: recommendedPlan.id
                                                        }
                                                        setQuoteData({
                                                            ...quoteData,
                                                            selectedProducts: updatedProducts,
                                                            selectedPlans: updatedPlans
                                                        })
                                                    }
                                                }}
                                            >
                                                <CardContent className="p-6">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-4">
                                                            <div className={`p-3 rounded-lg ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                                                <Zap className="h-5 w-5" />
                                                            </div>
                                                            <div>
                                                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                                                <p className="text-muted-foreground">
                                                                    {product.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {isSelected && (
                                                            <CheckCircle className="h-6 w-6 text-primary" />
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )
                                    })}
                                </div>

                                <div className="flex justify-between mt-8">
                                    <Button variant="outline" onClick={prevStep} size="lg">
                                        <ArrowLeft className="mr-2 h-4 w-4" /> 이전 단계
                                    </Button>
                                    <Button
                                        onClick={nextStep}
                                        disabled={quoteData.selectedProducts.length === 0}
                                        size="lg"
                                    >
                                        사용자 수 입력하기 <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* 4단계: 사용자 수 설정 */}
                    {currentStep === 4 && (
                        <Card className="p-8">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                                    <Users className="h-6 w-6" />
                                    사용자 수를 입력하세요
                                </CardTitle>
                                <CardDescription className="text-base">
                                    조직의 예상 사용자 수에 따라 최적의 가격을 제안해드립니다
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="max-w-md mx-auto space-y-6">
                                    <div className="space-y-4">
                                        <label className="text-sm font-medium">사용자 수</label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="1000"
                                            value={quoteData.userCount}
                                            onChange={(e) => setQuoteData({ ...quoteData, userCount: parseInt(e.target.value) || 1 })}
                                            className="w-full p-4 text-lg border rounded-lg text-center focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="사용자 수를 입력하세요"
                                        />
                                        <p className="text-sm text-muted-foreground text-center">
                                            {quoteData.userCount >= 200 ? '200명 이상: 20% 볼륨 할인' :
                                                quoteData.userCount >= 100 ? '100명 이상: 15% 볼륨 할인' :
                                                    quoteData.userCount >= 50 ? '50명 이상: 10% 볼륨 할인' :
                                                        '50명 이상부터 볼륨 할인이 적용됩니다'}
                                        </p>
                                    </div>

                                    {/* 자주 선택되는 사용자 수 버튼들 */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {[10, 25, 50, 100, 200, 500].map(count => (
                                            <Button
                                                key={count}
                                                variant={quoteData.userCount === count ? "default" : "outline"}
                                                onClick={() => setQuoteData({ ...quoteData, userCount: count })}
                                                className="h-12"
                                            >
                                                {count}명
                                                {count >= 50 && (
                                                    <span className="ml-1 text-xs text-green-600">
                                                        -{count >= 200 ? '20' : count >= 100 ? '15' : '10'}%
                                                    </span>
                                                )}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between mt-8">
                                    <Button variant="outline" onClick={prevStep} size="lg">
                                        <ArrowLeft className="mr-2 h-4 w-4" /> 이전 단계
                                    </Button>
                                    <Button onClick={nextStep} size="lg">
                                        플랜 선택하기 <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* 5단계: 플랜 선택 */}
                    {currentStep === 5 && (
                        <Card className="p-8">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                                    <Zap className="h-6 w-6" />
                                    플랜을 선택하세요
                                </CardTitle>
                                <CardDescription className="text-base">
                                    각 제품별로 적합한 플랜을 선택해주세요
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8">
                                    {quoteData.selectedProducts.map(productId => {
                                        const product = productDatabase[productId]
                                        const selectedPlanId = quoteData.selectedPlans[productId]

                                        return (
                                            <div key={productId} className="space-y-4">
                                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    {product.plans.map(plan => (
                                                        <Card
                                                            key={plan.id}
                                                            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${selectedPlanId === plan.id
                                                                ? 'border-2 border-primary bg-primary/5 shadow-lg'
                                                                : 'border border-border hover:border-primary/50'
                                                                } ${plan.recommended ? 'ring-2 ring-primary/20' : ''}`}
                                                            onClick={() => {
                                                                setQuoteData({
                                                                    ...quoteData,
                                                                    selectedPlans: {
                                                                        ...quoteData.selectedPlans,
                                                                        [productId]: plan.id
                                                                    }
                                                                })
                                                            }}
                                                        >
                                                            <CardContent className="p-4">
                                                                <div className="space-y-3">
                                                                    <div className="flex items-center justify-between">
                                                                        <h4 className="font-semibold">{plan.name}</h4>
                                                                        {plan.recommended && (
                                                                            <Badge variant="default" className="text-xs">추천</Badge>
                                                                        )}
                                                                    </div>
                                                                    <div className="text-2xl font-bold">
                                                                        ${plan.price}
                                                                        <span className="text-sm font-normal text-muted-foreground">/월</span>
                                                                    </div>
                                                                    <ul className="space-y-1 text-sm">
                                                                        {plan.features.map((feature, idx) => (
                                                                            <li key={idx} className="flex items-center gap-2">
                                                                                <CheckCircle className="h-3 w-3 text-green-600" />
                                                                                {feature}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="flex justify-between mt-8">
                                    <Button variant="outline" onClick={prevStep} size="lg">
                                        <ArrowLeft className="mr-2 h-4 w-4" /> 이전 단계
                                    </Button>
                                    <Button onClick={nextStep} size="lg">
                                        결제 주기 선택 <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* 6단계: 최종 견적서 */}
                    {currentStep === 6 && (
                        <div className="space-y-6">
                            <Card className="p-8">
                                <CardHeader className="text-center pb-8">
                                    <CardTitle className="text-2xl flex items-center justify-center gap-2">
                                        <Calculator className="h-6 w-6" />
                                        맞춤 견적서
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        선택하신 솔루션의 예상 비용입니다
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    {/* 결제 주기 선택 */}
                                    <div>
                                        <h3 className="font-semibold mb-4">결제 주기를 선택하세요</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {billingCycles.map(cycle => (
                                                <Card
                                                    key={cycle.id}
                                                    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${quoteData.billingCycle === cycle.id
                                                        ? 'border-2 border-primary bg-primary/5 shadow-lg'
                                                        : 'border border-border hover:border-primary/50'
                                                        }`}
                                                    onClick={() => setQuoteData({ ...quoteData, billingCycle: cycle.id })}
                                                >
                                                    <CardContent className="p-4">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <h4 className="font-semibold">{cycle.label}</h4>
                                                                <p className="text-sm text-muted-foreground">{cycle.description}</p>
                                                            </div>
                                                            {cycle.discount > 0 && (
                                                                <Badge variant="secondary" className="bg-green-100 text-green-700">
                                                                    -{Math.round(cycle.discount * 100)}%
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 선택된 제품들 */}
                                    <div>
                                        <h3 className="font-semibold mb-4">선택된 제품</h3>
                                        <div className="space-y-3">
                                            {Object.entries(quoteData.selectedPlans).map(([productId, planId]) => {
                                                const product = productDatabase[productId]
                                                const plan = product?.plans.find(p => p.id === planId)
                                                return (
                                                    <div key={productId} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                                                        <div>
                                                            <span className="font-medium">{product?.name}</span>
                                                            <span className="text-sm text-muted-foreground ml-2">({plan?.name})</span>
                                                        </div>
                                                        <Badge variant="secondary">${plan?.price}/월</Badge>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* 가격 계산 */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span>제품 월 단가 (USD)</span>
                                            <span className="font-mono">${Object.entries(quoteData.selectedPlans).reduce((sum, [productId, planId]) => {
                                                const product = productDatabase[productId]
                                                const plan = product?.plans.find(p => p.id === planId)
                                                return sum + (plan?.price || 0)
                                            }, 0)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>사용자 수</span>
                                            <span className="font-mono">{quoteData.userCount}명</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>기본 월 총액</span>
                                            <span className="font-mono">${Object.entries(quoteData.selectedPlans).reduce((sum, [productId, planId]) => {
                                                const product = productDatabase[productId]
                                                const plan = product?.plans.find(p => p.id === planId)
                                                return sum + (plan?.price || 0)
                                            }, 0) * quoteData.userCount}</span>
                                        </div>
                                        {quoteData.userCount >= 50 && (
                                            <div className="flex justify-between text-green-600">
                                                <span>볼륨 할인 ({quoteData.userCount >= 200 ? '20' : quoteData.userCount >= 100 ? '15' : '10'}%)</span>
                                                <span className="font-mono">-${Math.round((Object.entries(quoteData.selectedPlans).reduce((sum, [productId, planId]) => {
                                                    const product = productDatabase[productId]
                                                    const plan = product?.plans.find(p => p.id === planId)
                                                    return sum + (plan?.price || 0)
                                                }, 0) * quoteData.userCount) * (quoteData.userCount >= 200 ? 0.2 : quoteData.userCount >= 100 ? 0.15 : 0.1))}</span>
                                            </div>
                                        )}
                                        {quoteData.billingCycle === 'yearly' && (
                                            <div className="flex justify-between text-green-600">
                                                <span>연간 결제 할인 (20%)</span>
                                                <span className="font-mono">추가 할인 적용됨</span>
                                            </div>
                                        )}
                                        <Separator />
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>{quoteData.billingCycle === 'yearly' ? '월 평균' : '월'} 사용료 (USD)</span>
                                            <span className="font-mono">${calculateTotalPrice()}</span>
                                        </div>
                                        {quoteData.billingCycle === 'yearly' && (
                                            <div className="flex justify-between text-sm text-muted-foreground">
                                                <span>연간 총액 (USD)</span>
                                                <span className="font-mono">${calculateYearlyTotal()}</span>
                                            </div>
                                        )}
                                    </div>

                                    <Separator />

                                    {/* 환율 변환 */}
                                    <CurrencyConverter
                                        usdPrice={calculateTotalPrice()}
                                        productName="선택된 솔루션 패키지"
                                    />

                                    <div className="flex justify-between mt-8">
                                        <Button variant="outline" onClick={prevStep} size="lg">
                                            <ArrowLeft className="mr-2 h-4 w-4" /> 수정하기
                                        </Button>
                                        <div className="space-x-2">
                                            <Button variant="outline" size="lg">
                                                견적서 다운로드
                                            </Button>
                                            <Button size="lg">
                                                상담 신청하기
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* 추가 정보 */}
                            <Card className="p-6 bg-blue-50 dark:bg-blue-950 border-blue-200">
                                <div className="text-center">
                                    <h3 className="font-semibold mb-2">🎉 견적 완료!</h3>
                                    <p className="text-sm text-muted-foreground">
                                        전문 컨설턴트와 상담하시면 더 정확한 견적과 특별 할인 혜택을 받아보실 수 있습니다.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}