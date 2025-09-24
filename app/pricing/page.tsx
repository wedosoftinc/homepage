"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CurrencyConverter } from "@/components/ui/currency-converter"
import { 
    Check, 
    Star, 
    ArrowRight, 
    ArrowLeft, 
    Users, 
    Building, 
    Zap, 
    MessageSquare, 
    Headphones, 
    Wrench,
    Globe,
    Calendar,
    Calculator
} from "lucide-react"

export default function CustomQuotePage() {
    // 위저드 단계 상태
    const [currentStep, setCurrentStep] = useState(1)
    const [quoteData, setQuoteData] = useState({
        needs: [],
        companySize: '',
        selectedProducts: [],
        customizations: {},
        finalQuote: null
    })

    // 1단계: 비즈니스 니즈 파악
    const businessNeeds = [
        {
            id: 'customer-support',
            title: '고객 지원 개선',
            description: '고객 응답 시간 단축 및 만족도 향상',
            icon: Headphones,
            color: 'bg-blue-50 border-blue-200 text-blue-700',
            products: ['freshdesk', 'freshchat', 'freddy-ai']
        },
        {
            id: 'team-collaboration',
            title: '팀 협업 강화',
            description: '프로젝트 관리 및 협업 효율성 증대',
            icon: Users,
            color: 'bg-green-50 border-green-200 text-green-700',
            products: ['google-workspace', 'monday-work', 'monday-service']
        },
        {
            id: 'sales-management',
            title: '영업 프로세스 최적화',
            description: 'CRM 및 영업 관리 체계화',
            icon: MessageSquare,
            color: 'bg-purple-50 border-purple-200 text-purple-700',
            products: ['freshsales', 'monday-sales']
        },
        {
            id: 'it-infrastructure',
            title: 'IT 인프라 관리',
            description: 'IT 서비스 및 원격 접속 환경 구축',
            icon: Wrench,
            color: 'bg-orange-50 border-orange-200 text-orange-700',
            products: ['freshservice', 'splashtop']
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
    const productDatabase = {
        {
            id: 'customer-experience',
            title: '고객 경험 관리',
            icon: '🎯',
            description: '옴니채널 고객 지원, 라이브 채팅, 콜센터로 완벽한 고객 경험을 제공하세요',
        },
        {
            id: 'collaboration',
            title: '협업 & 생산성',
            icon: '🚀',
            description: '클라우드 기반 협업과 프로젝트 관리로 팀 생산성을 극대화하세요',
        },
        {
            id: 'infrastructure',
            title: 'IT 인프라 관리',
            icon: '🛠️',
            description: 'ITSM과 원격 접속으로 안정적이고 효율적인 IT 인프라를 구축하세요',
        }
    ]

    // 모든 제품 데이터
    const allProducts = [
        // 고객 경험 관리
        {
            category: 'customer-experience',
            vendor: 'Freshworks',
            name: 'Freshdesk Omni',
            description: '옴니채널 고객 지원 플랫폼',
            popular: true,
            plans: [
                { name: 'Growth', price: '$29/월', originalPrice: '$35/월', features: ['옴니채널 통합', 'AI 자동 응답', '무제한 에이전트', '기본 자동화'], popular: false },
                { name: 'Pro', price: '$69/월', originalPrice: '$83/월', features: ['Growth 기능 포함', '맞춤형 포털', 'API 액세스', '고급 자동화'], popular: true },
                { name: 'Enterprise', price: '$109/월', originalPrice: '$131/월', features: ['Pro 기능 포함', '감사 로그', '고급 보안', '무제한 통합'], popular: false }
            ]
        },
        {
            category: 'customer-experience',
            vendor: 'Freshworks',
            name: 'Freshchat',
            description: '실시간 라이브 채팅',
            popular: false,
            plans: [
                { name: 'Free', price: '무료', originalPrice: null, features: ['10명 에이전트', '기본 채팅', '모바일 앱', '기본 보고서'], popular: false },
                { name: 'Growth', price: '$19/월', originalPrice: '$23/월', features: ['무제한 에이전트', '팀 받은편지함', 'FAQ 봇', '방문자 정보'], popular: true },
                { name: 'Pro', price: '$49/월', originalPrice: '$59/월', features: ['Growth 기능 포함', '고급 자동화', 'CRM 통합', 'API 액세스'], popular: false }
            ]
        },
        {
            category: 'customer-experience',
            vendor: 'Freshworks',
            name: 'Freshcaller',
            description: '클라우드 콜센터',
            popular: false,
            plans: [
                { name: 'Free', price: '무료', originalPrice: null, features: ['기본 콜센터', '종량제 요금', 'IVR 시스템', '통화 녹음'], popular: false },
                { name: 'Growth', price: '$15/월', originalPrice: '$18/월', features: ['월 2,000분', '기본 라우팅', '통화 대기열', '실시간 대시보드'], popular: true },
                { name: 'Pro', price: '$39/월', originalPrice: '$47/월', features: ['월 3,000분', '고급 라우팅', 'CRM 연동', '고급 분석'], popular: false }
            ]
        },
        // 협업 & 생산성
        {
            category: 'collaboration',
            vendor: 'Monday.com',
            name: 'Monday Work Management',
            description: '직관적인 프로젝트 관리',
            popular: true,
            plans: [
                { name: 'Basic', price: '$12/월', originalPrice: '$14/월', features: ['기본 대시보드', '5GB 저장공간', '무제한 보드', '200+ 템플릿'], popular: false },
                { name: 'Standard', price: '$14/월', originalPrice: '$17/월', features: ['타임라인 뷰', '게스트 액세스', '250GB 저장', '캘린더 뷰'], popular: true },
                { name: 'Pro', price: '$24/월', originalPrice: '$29/월', features: ['시간 추적', '커스텀 필드', '1TB 저장공간', '고급 검색'], popular: false }
            ]
        },
        {
            category: 'collaboration',
            vendor: 'Google',
            name: 'Google Workspace',
            description: '클라우드 협업 솔루션',
            popular: false,
            plans: [
                { name: 'Business Starter', price: '$6/월', originalPrice: null, features: ['Gmail', '30GB 저장공간', 'Meet 100명', '표준 보안'], popular: false },
                { name: 'Business Standard', price: '$12/월', originalPrice: null, features: ['2TB 저장공간', 'Meet 150명', '녹화 기능', '공유 드라이브'], popular: true },
                { name: 'Business Plus', price: '$18/월', originalPrice: null, features: ['5TB 저장공간', 'Meet 500명', 'Vault 보관', '고급 보안'], popular: false }
            ]
        },
        // IT 인프라 관리
        {
            category: 'infrastructure',
            vendor: 'Freshworks',
            name: 'Freshservice',
            description: 'IT 서비스 관리 (ITSM)',
            popular: true,
            plans: [
                { name: 'Starter', price: '$19/월', originalPrice: '$23/월', features: ['티켓 관리', 'ITIL 프로세스', '에셋 관리', '기본 자동화'], popular: false },
                { name: 'Growth', price: '$49/월', originalPrice: '$59/월', features: ['워크플로우 자동화', 'SLA 관리', '고급 리포팅', '문제 관리'], popular: true },
                { name: 'Pro', price: '$99/월', originalPrice: '$119/월', features: ['변경 관리', '릴리즈 관리', '프로젝트 관리', '고급 분석'], popular: false }
            ]
        },
        {
            category: 'infrastructure',
            vendor: 'Splashtop',
            name: 'Splashtop Business Access',
            description: '원격 데스크톱 액세스',
            popular: false,
            plans: [
                { name: 'Solo', price: '$5/월', originalPrice: null, features: ['1 사용자', '무제한 컴퓨터', '파일 전송', '인쇄 지원'], popular: false },
                { name: 'Pro', price: '$8.25/월', originalPrice: '$9.90/월', features: ['비즈니스 기능', '세션 녹화', '원격 재부팅', '그룹 관리'], popular: true }
            ]
        }
    ]

    // 현재 선택된 카테고리의 제품들
    const categoryProducts = allProducts.filter(product => product.category === selectedCategory)
    const currentCategory = categories.find(cat => cat.id === selectedCategory)

    // 벤더 단위로 그룹화하여 UX 가독성 향상
    const vendorGroups = categoryProducts.reduce((groups, product) => {
        const group = groups.find((item) => item.vendor === product.vendor)

        if (group) {
            group.products.push(product)
        } else {
            groups.push({
                vendor: product.vendor,
                products: [product]
            })
        }

        return groups
    }, [] as { vendor: string; products: typeof categoryProducts }[])

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16">
                {/* 헤더 섹션 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">요금제</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        귀하의 비즈니스에 맞는 최적의 솔루션을 찾아보세요
                    </p>
                </div>

                {/* 카테고리 탭 네비게이션 */}
                <div className="grid w-full grid-cols-3 mb-12 h-14 p-1 bg-muted rounded-lg">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all ${selectedCategory === category.id
                                ? 'bg-background text-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            <span className="text-base">{category.icon}</span>
                            <span className="hidden sm:inline">{category.title}</span>
                        </button>
                    ))}
                </div>

                {/* 카테고리 설명 */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold mb-2">{currentCategory?.title}</h2>
                    <p className="text-muted-foreground">{currentCategory?.description}</p>
                </div>

                {/* 솔루션 파인더 섹션 */}
                <div className="mb-16">
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2">🔍 솔루션 파인더</h3>
                            <p className="text-muted-foreground">
                                몇 가지 질문으로 귀하에게 최적화된 솔루션과 가격을 찾아드립니다
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <Button
                                variant="outline"
                                className="h-20 p-4 flex flex-col items-center gap-2"
                                onClick={() => {/* TODO: 솔루션 파인더 로직 */ }}
                            >
                                <span className="text-2xl">📞</span>
                                <span className="font-medium">고객 응답 속도 개선</span>
                            </Button>
                            <Button
                                variant="outline"
                                className="h-20 p-4 flex flex-col items-center gap-2"
                            >
                                <span className="text-2xl">🤝</span>
                                <span className="font-medium">팀 협업 효율성 향상</span>
                            </Button>
                            <Button
                                variant="outline"
                                className="h-20 p-4 flex flex-col items-center gap-2"
                            >
                                <span className="text-2xl">🔧</span>
                                <span className="font-medium">IT 인프라 안정화</span>
                            </Button>
                        </div>

                        <div className="text-center">
                            <Button size="lg">
                                맞춤 솔루션 찾기 시작
                            </Button>
                        </div>
                    </Card>
                </div>

                {/* 벤더 그룹 섹션 */}
                <div className="space-y-16 mb-16">
                    {vendorGroups.map((group) => (
                        <section key={group.vendor} className="space-y-8">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold">{group.vendor}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {currentCategory?.title} 카테고리의 {group.products.length}개 솔루션
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span>위두소프트 추천 포트폴리오</span>
                                    <span className="hidden sm:inline">·</span>
                                    <span>전문가 상담 연계</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                {group.products.map((product) => (
                                    <Card key={product.name} className="relative h-full">
                                        {product.popular && (
                                            <div className="absolute -top-3 left-4 z-10">
                                                <Badge variant="default" className="bg-primary text-primary-foreground">
                                                    <Star className="w-3 h-3 mr-1" />
                                                    인기 제품
                                                </Badge>
                                            </div>
                                        )}

                                        <CardHeader className="pb-4">
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Badge variant="outline" className="w-fit">
                                                        {product.vendor}
                                                    </Badge>
                                                    <span>{product.plans.length}개 요금제 제공</span>
                                                </div>
                                                <CardTitle className="text-2xl">
                                                    {product.name}
                                                </CardTitle>
                                                <CardDescription>{product.description}</CardDescription>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {product.plans.map((plan, index) => (
                                                    <div
                                                        key={index}
                                                        className={`relative rounded-lg border p-4 transition-all ${plan.popular
                                                            ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                                                            : 'border-border hover:border-primary/40'
                                                            }`}
                                                    >
                                                        {plan.popular && (
                                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                                                                <Badge variant="default" className="text-xs">
                                                                    추천 요금제
                                                                </Badge>
                                                            </div>
                                                        )}

                                                        <div className="mb-4 text-center">
                                                            <h4 className="mb-1 text-sm font-semibold tracking-tight">{plan.name}</h4>
                                                            <div className="space-y-1">
                                                                <p className="text-lg font-bold text-primary">{plan.price}</p>
                                                                {plan.originalPrice && (
                                                                    <span className="text-xs text-muted-foreground line-through">
                                                                        {plan.originalPrice}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <ul className="mb-5 space-y-1">
                                                            {plan.features.slice(0, 3).map((feature, featureIndex) => (
                                                                <li key={featureIndex} className="flex items-start gap-2 text-xs">
                                                                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-green-500" />
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                            {plan.features.length > 3 && (
                                                                <li className="text-xs text-muted-foreground">
                                                                    +{plan.features.length - 3}개 기능 더 보기
                                                                </li>
                                                            )}
                                                        </ul>

                                                        <Button
                                                            className="w-full"
                                                            size="sm"
                                                            variant={plan.popular ? 'default' : 'outline'}
                                                        >
                                                            {plan.price === '무료' ? '무료 시작' : '상담 요청'}
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-col gap-3 rounded-lg border border-dashed p-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                                                <span>이 제품군의 도입과 운영까지 위두소프트 컨설턴트가 함께합니다.</span>
                                                <Button size="sm" variant="ghost" className="self-start md:self-auto">
                                                    파트너 지원 문의
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* 하단 CTA */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">궁금한 점이 있으신가요?</h3>
                    <p className="text-muted-foreground mb-6">
                        전문 컨설턴트가 귀하의 비즈니스에 최적화된 솔루션을 제안해드립니다
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">무료 상담 신청</Button>
                        <Button size="lg" variant="outline">데모 체험하기</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}