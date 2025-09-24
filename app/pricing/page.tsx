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
    Lightbulb
} from "lucide-react"

// 타입 정의
interface QuoteData {
    needs: string[]
    companySize: string
    selectedProducts: string[]
}

interface Product {
    name: string
    price: number
    category: string
}

interface BusinessNeed {
    id: string
    title: string
    description: string
    icon: any
    color: string
    products: string[]
}

interface CompanySize {
    id: string
    label: string
    range: string
    multiplier: number
}

export default function CustomQuotePage() {
    // 위저드 단계 상태
    const [currentStep, setCurrentStep] = useState(1)
    const [quoteData, setQuoteData] = useState<QuoteData>({
        needs: [],
        companySize: '',
        selectedProducts: []
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
            id: 'compliance-governance',
            title: '컴플라이언스 & 거버넌스',
            description: '규정 준수, 문서 관리, 감사 대응',
            icon: FileText,
            color: 'bg-gray-50 border-gray-200 text-gray-700',
            products: ['google-workspace', 'freshservice']
        },
        {
            id: 'time-management',
            title: '시간 관리 최적화',
            description: '일정 관리, 리소스 계획, 업무 우선순위',
            icon: Clock,
            color: 'bg-pink-50 border-pink-200 text-pink-700',
            products: ['monday-work', 'google-workspace']
        },
        {
            id: 'innovation-growth',
            title: '혁신 및 성장 지원',
            description: '새로운 비즈니스 모델, 디지털 전환, 확장성',
            icon: Lightbulb,
            color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
            products: ['google-workspace', 'monday-work', 'freshservice']
        }
    ]

    // 2단계: 회사 규모
    const companySizes = [
        { id: 'startup', label: '스타트업 (1-10명)', range: '1-10', multiplier: 1 },
        { id: 'small', label: '중소기업 (11-50명)', range: '11-50', multiplier: 1.2 },
        { id: 'medium', label: '중견기업 (51-200명)', range: '51-200', multiplier: 1.5 },
        { id: 'enterprise', label: '대기업 (200명+)', range: '200+', multiplier: 2 }
    ]

    // 제품 데이터베이스
    const productDatabase: Record<string, Product> = {
        'freshdesk': { name: 'Freshdesk', price: 79, category: 'customer-support' },
        'freshchat': { name: 'Freshchat', price: 19, category: 'customer-support' },
        'freddy-ai': { name: 'Freddy AI', price: 50, category: 'customer-support' },
        'freshsales': { name: 'Freshsales', price: 65, category: 'sales-management' },
        'freshservice': { name: 'Freshservice', price: 89, category: 'it-infrastructure' },
        'google-workspace': { name: 'Google Workspace', price: 18, category: 'team-collaboration' },
        'monday-work': { name: 'Monday Work Management', price: 24, category: 'team-collaboration' },
        'monday-service': { name: 'Monday Service', price: 50, category: 'team-collaboration' },
        'monday-sales': { name: 'Monday Sales CRM', price: 32, category: 'sales-management' },
        'splashtop': { name: 'Splashtop', price: 60, category: 'it-infrastructure' }
    }

    // 니즈 선택 핸들러
    const handleNeedsSelect = (needId: string) => {
        const updatedNeeds = quoteData.needs.includes(needId)
            ? quoteData.needs.filter(id => id !== needId)
            : [...quoteData.needs, needId]

        setQuoteData({ ...quoteData, needs: updatedNeeds })
    }

    // 회사 규모 선택 핸들러
    const handleCompanySizeSelect = (sizeId: string) => {
        setQuoteData({ ...quoteData, companySize: sizeId })
    }

    // 다음/이전 단계
    const nextStep = () => setCurrentStep(Math.min(currentStep + 1, 4))
    const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1))

    // 추천 제품 계산
    const getRecommendedProducts = () => {
        const recommendedIds = quoteData.needs.flatMap(needId => {
            const need = businessNeeds.find(n => n.id === needId)
            return need ? need.products : []
        })
        return [...new Set(recommendedIds)]
    }

    // 총 가격 계산
    const calculateTotalPrice = () => {
        const totalUSD = quoteData.selectedProducts.reduce((sum, productId) => {
            return sum + (productDatabase[productId]?.price || 0)
        }, 0)

        const sizeMultiplier = companySizes.find(s => s.id === quoteData.companySize)?.multiplier || 1
        return Math.round(totalUSD * sizeMultiplier)
    }

    // 진행률 계산
    const getProgress = () => (currentStep / 4) * 100

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
                        {currentStep}/4 단계 완료
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

                    {/* 2단계: 회사 규모 */}
                    {currentStep === 2 && (
                        <Card className="p-8">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl">회사 규모를 알려주세요</CardTitle>
                                <CardDescription className="text-base">
                                    사용자 수에 따라 최적의 플랜을 추천해드립니다
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {companySizes.map((size) => {
                                        const isSelected = quoteData.companySize === size.id
                                        return (
                                            <Card
                                                key={size.id}
                                                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${isSelected
                                                    ? 'border-2 border-primary bg-primary/5 shadow-lg'
                                                    : 'border border-border hover:border-primary/50'
                                                    }`}
                                                onClick={() => handleCompanySizeSelect(size.id)}
                                            >
                                                <CardContent className="p-6 text-center">
                                                    <Building className={`h-8 w-8 mx-auto mb-3 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                                                    <h3 className="font-semibold mb-1">{size.label}</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {size.range}명 규모
                                                    </p>
                                                    {isSelected && (
                                                        <div className="mt-2 flex items-center justify-center text-sm text-primary">
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
                                    <Button
                                        onClick={nextStep}
                                        disabled={!quoteData.companySize}
                                        size="lg"
                                    >
                                        다음 단계 <ArrowRight className="ml-2 h-4 w-4" />
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
                                                    const updatedProducts = isSelected
                                                        ? quoteData.selectedProducts.filter(id => id !== productId)
                                                        : [...quoteData.selectedProducts, productId]
                                                    setQuoteData({ ...quoteData, selectedProducts: updatedProducts })
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
                                                                    월 ${product.price} (사용자당)
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
                                        견적 확인하기 <Calculator className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* 4단계: 최종 견적서 */}
                    {currentStep === 4 && (
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
                                <CardContent className="space-y-6">
                                    {/* 선택된 제품들 */}
                                    <div>
                                        <h3 className="font-semibold mb-4">선택된 제품</h3>
                                        <div className="space-y-3">
                                            {quoteData.selectedProducts.map(productId => {
                                                const product = productDatabase[productId]
                                                return (
                                                    <div key={productId} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                                                        <span className="font-medium">{product.name}</span>
                                                        <Badge variant="secondary">${product.price}/월</Badge>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* 가격 계산 */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span>기본 월 사용료 (USD)</span>
                                            <span className="font-mono">${quoteData.selectedProducts.reduce((sum, id) => sum + productDatabase[id].price, 0)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>규모별 할인/할증</span>
                                            <span className="font-mono">x{companySizes.find(s => s.id === quoteData.companySize)?.multiplier}</span>
                                        </div>
                                        <Separator />
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>총 월 사용료 (USD)</span>
                                            <span className="font-mono">${calculateTotalPrice()}</span>
                                        </div>
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