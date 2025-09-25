'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StepByStepDemo } from "@/components/ui/step-by-step-demo"
import { DashboardCard } from "@/components/dashboard"
import { MetricCard } from "@/components/common"
import {
    CheckCircleIcon as CheckCircle, ArrowRightIcon as ArrowRight, StarIcon as Star,
    UsersIcon as Users, BoltIcon as Zap, ShieldCheckIcon as Shield,
    ChatBubbleBottomCenterTextIcon as MessageSquare, ChartBarIcon as BarChart3,
    CogIcon as Settings, PhoneIcon as Headphones, GlobeAltIcon as Globe,
    PhoneIcon as Phone, EnvelopeIcon as Mail, DocumentTextIcon as FileText,
    ClockIcon as Clock, FlagIcon as Target, BriefcaseIcon as Briefcase,
    ChevronRightIcon as ChevronRight, HomeIcon as Home, ShareIcon as Share2,
    PlayIcon as Play, SparklesIcon as Sparkles, ComputerDesktopIcon as Monitor,
    RectangleGroupIcon as Workflow, BellIcon as Bell, FunnelIcon as Filter,
    ArrowTrendingUpIcon as TrendingUp
} from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

// 아이콘 매핑 객체
const iconMap = {
    'zap': Zap,
    'users': Users,
    'messageSquare': MessageSquare,
    'barChart3': BarChart3,
    'settings': Settings,
    'headphones': Headphones,
    'globe': Globe,
    'shield': Shield,
    'star': Star,
    'phone': Phone,
    'mail': Mail,
    'fileText': FileText,
    'clock': Clock,
    'target': Target,
    'briefcase': Briefcase,
    'checkCircle': CheckCircle
}

// 원본 구조 기반 제품 페이지 데이터 타입
export interface ProductPageData {
    // Hero 섹션
    name: string
    subtitle: string
    description: string
    category: string
    slug?: string
    heroCTA: {
        primary: { text: string; href: string }
        secondary: { text: string; href: string }
    }
    // Hero 이미지/비디오 (옵션)
    heroMedia?: {
        type: 'image' | 'video'
        src: string
        alt?: string
        poster?: string // 비디오용 포스터 이미지
    }

    // 주요 특징 (원본의 3개 구조)
    keyFeatures: {
        icon: keyof typeof iconMap
        title: string
        description: string
        // 각 특징별 이미지/스크린샷 (옵션)
        image?: {
            src: string
            alt: string
        }
    }[]

    // 세부 기능 (원본의 6개 구조)
    detailedFeatures?: {
        title: string
        description: string
        features: string[]
        // 기능별 스크린샷/데모 이미지 (옵션)
        media?: {
            type: 'image' | 'video'
            src: string
            alt?: string
            poster?: string
        }
        // Step-by-step 데모 (옵션)
        stepByStepDemo?: {
            title: string
            description: string
            steps: {
                id: number
                title: string
                description: string
                image?: string
                highlight?: string
            }[]
        }
    }[]

    // 새로운 탭 기반 세부 기능 구조 (detailedFeatures 대신 사용 가능)
    detailedFeatureTabs?: {
        id: string
        label: string
        title: string
        description: string
        feature: {
            title: string
            description: string
            items: string[]
        }
        interactiveArea: {
            type: 'demo' | 'feature-map' | 'dashboard' | 'workflow' | 'screenshot'
            title: string
            description: string
            placeholder?: string
        }
    }[]

    // 전체 제품용 Step-by-step 데모 (옵션)
    stepByStepDemo?: {
        title: string
        description: string
        steps: {
            id: number
            title: string
            description: string
            image?: string
            highlight?: string
        }[]
    }

    // 연동 플랫폼 섹션
    integrations?: {
        title: string
        description: string
        platforms: {
            name: string
            logo: string
            category: string
        }[]
    }

    // FAQ
    faqs: {
        question: string
        answer: string
    }[]

    // 기존 템플릿 호환성을 위한 선택적 속성들
    benefits?: {
        title: string
        description: string
        metrics?: string
    }[]

    useCases?: {
        title: string
        description: string
        features: string[]
        targetUser?: string
    }[]

    // 최종 CTA
    finalCTA: {
        title: string
        description: string
        primaryButton: { text: string; href: string }
        secondaryButton: { text: string; href: string }
        // CTA 배경 이미지 (옵션)
        backgroundImage?: string
    }
}

interface ProductPageTemplateProps {
    data: ProductPageData
}

export function ProductPageTemplate({ data }: ProductPageTemplateProps) {
    return (
        <div className="min-h-screen">
            {/* Breadcrumb Navigation */}
            <section className="py-4 border-b">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground">
                            <Home className="h-4 w-4" />
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/products" className="hover:text-foreground">
                            제품
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-foreground">{data.name}</span>
                    </nav>
                </div>
            </section>

            {/* Hero Section */}
            <section className="py-8 lg:py-12">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="space-y-6">
                            <Badge variant="outline" className="mb-4">
                                {data.category}
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                                {data.name}
                            </h1>
                            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                {data.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button size="lg" asChild>
                                    <Link href={data.heroCTA.primary.href}>
                                        {data.heroCTA.primary.text}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href={data.heroCTA.secondary.href}>
                                        {data.heroCTA.secondary.text}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 인터랙티브 데모 섹션 */}
            {data.stepByStepDemo && (
                <section className="py-20 bg-muted/30 border-t">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                {data.stepByStepDemo.title}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                {data.stepByStepDemo.description}
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-5xl bg-background rounded-2xl shadow-lg border p-8">
                                <StepByStepDemo
                                    title={data.stepByStepDemo.title}
                                    description={data.stepByStepDemo.description}
                                    steps={data.stepByStepDemo.steps}
                                    autoPlay={true}
                                    interval={5000}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 주요 특징 Section (원본 구조) */}
            <section className="py-16 bg-muted/20">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">주요 특징</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            AI와 클라우드 기반의 강력한 도구로, {data.name}는 당신의 업무를 통합하고 혁신을 돕습니다.
                            스마트하고 안전한 통합 워크스페이스로 비즈니스 성장을 이끌어 나가세요.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {data.keyFeatures.map((feature, index) => {
                            const IconComponent = iconMap[feature.icon]
                            return (
                                <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                                            <IconComponent className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <CardDescription className="text-base leading-relaxed">
                                            {feature.description}
                                        </CardDescription>

                                        {/* 특징별 이미지 */}
                                        {feature.image && (
                                            <div className="relative rounded-lg overflow-hidden">
                                                <Image
                                                    src={feature.image.src}
                                                    alt={feature.image.alt}
                                                    width={300}
                                                    height={200}
                                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 인터랙티브 데모 섹션 (주요 특징과 세부 기능 사이) */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10 border-y">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            {data.name} 실시간 체험
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {data.name}의 핵심 기능들을 직접 체험해보세요.
                            실제 업무 환경에서 어떻게 작동하는지 인터랙티브 데모를 통해 확인할 수 있습니다.
                        </p>
                    </div>

                    {/* 인터랙티브 데모 컨테이너 */}
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-background rounded-2xl shadow-2xl border p-8 lg:p-12">
                            {/* 데모 플레이스홀더 */}
                            <div className="flex items-center justify-center min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl border-2 border-dashed border-primary/20">
                                <div className="text-center space-y-6 p-8">
                                    <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                        <Play className="h-10 w-10 text-primary" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-foreground">
                                            인터랙티브 데모
                                        </h3>
                                        <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                                            곧 추가될 {data.name}의 실시간 체험 데모입니다.
                                            실제 워크플로우를 단계별로 확인할 수 있습니다.
                                        </p>
                                    </div>

                                    {/* 데모 기능 미리보기 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
                                        <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg border">
                                            <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium">실시간 시뮬레이션</span>
                                        </div>
                                        <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg border">
                                            <Monitor className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium">3D 인터페이스</span>
                                        </div>
                                        <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg border">
                                            <Workflow className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium">워크플로우 체험</span>
                                        </div>
                                    </div>

                                    <Button size="lg" className="mt-6">
                                        <Play className="h-5 w-5 mr-2" />
                                        데모 체험 예정
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 세부 기능 Section (원본 구조) */}
            {data.detailedFeatures && (
                <section className="py-16">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">세부 기능</h2>
                            <p className="text-lg text-muted-foreground">
                                통합 채널 지원 솔루션 {data.name}로 고객 문의에 가장 빠르게 대응합니다
                            </p>
                        </div>

                        <div className="grid gap-12">
                            {data.detailedFeatures.map((feature, index) => (
                                <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>

                                        <ul className="space-y-3">
                                            {feature.features.map((item, idx) => (
                                                <li key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-muted-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 기능별 미디어 또는 Step-by-step 데모 */}
                                    {feature.stepByStepDemo ? (
                                        <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                            <StepByStepDemo
                                                title={feature.stepByStepDemo.title}
                                                description={feature.stepByStepDemo.description}
                                                steps={feature.stepByStepDemo.steps}
                                                autoPlay={true}
                                                interval={4000}
                                            />
                                        </div>
                                    ) : feature.media && (
                                        <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                            {feature.media.type === 'image' ? (
                                                <div className="relative rounded-lg overflow-hidden shadow-lg">
                                                    <Image
                                                        src={feature.media.src}
                                                        alt={feature.media.alt || `${feature.title} 스크린샷`}
                                                        width={500}
                                                        height={350}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="relative rounded-lg overflow-hidden shadow-lg">
                                                    <video
                                                        className="w-full h-auto"
                                                        controls
                                                        poster={feature.media.poster}
                                                    >
                                                        <source src={feature.media.src} type="video/mp4" />
                                                    </video>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 새로운 탭 기반 세부 기능 Section */}
            {data.detailedFeatureTabs && (
                <section className="py-16">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">세부 기능</h2>
                        </div>

                        <Tabs defaultValue={data.detailedFeatureTabs?.[0]?.id} className="w-full">
                            <TabsList className="grid w-full max-w-3xl mx-auto mb-12 h-14" style={{ gridTemplateColumns: `repeat(${data.detailedFeatureTabs.length}, 1fr)` }}>
                                {data.detailedFeatureTabs.map((tab) => (
                                    <TabsTrigger key={tab.id} value={tab.id} className="text-base font-medium px-6 py-3 h-12">
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {data.detailedFeatureTabs.map((tab) => (
                                <TabsContent key={tab.id} value={tab.id} className="space-y-8">
                                    {/* 탭 콘텐츠 - 3:7 비율 레이아웃 */}
                                    <div className="grid lg:grid-cols-10 gap-8 items-stretch">
                                        {/* 좌측: 기능 설명 (3/10 비율) */}
                                        <div className="lg:col-span-3">
                                            <Card className="p-6 h-full">
                                                <div className="space-y-6 h-full flex flex-col">
                                                    <div className="space-y-4 flex-1">
                                                        <div>
                                                            <h4 className="text-base font-medium mb-3">{tab.feature.title}</h4>
                                                            <p className="text-muted-foreground leading-relaxed text-base">
                                                                {tab.feature.description}
                                                            </p>
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {tab.feature.items.map((item, idx) => (
                                                                <li key={idx} className="flex items-start space-x-3">
                                                                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                                    <span className="text-muted-foreground text-base">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>

                                        {/* 우측: 인터랙티브 영역 (7/10 비율) */}
                                        <div className="lg:col-span-7">
                                            <div className="h-full min-h-[500px]">
                                                <InteractiveArea interactiveArea={tab.interactiveArea} />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">FAQ</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {data.name} 도입과 관련된 주요 궁금증을 해결해드립니다.
                            기술적 세부사항부터 비즈니스 활용까지 실무진이 궁금해하는 내용을 정리했습니다.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-4">
                            {data.faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                                    <AccordionTrigger className="text-left py-6 hover:no-underline">
                                        <span className="font-medium">{faq.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className={`py-16 relative ${data.finalCTA.backgroundImage ? 'text-white' : 'bg-muted/20'}`}>
                {data.finalCTA.backgroundImage && (
                    <div className="absolute inset-0">
                        <Image
                            src={data.finalCTA.backgroundImage}
                            alt="CTA 배경"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                )}

                <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold">
                                {data.finalCTA.title}
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
                                {data.finalCTA.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className={data.finalCTA.backgroundImage ? 'bg-white text-black hover:bg-white/90' : ''}>
                                <Link href={data.finalCTA.primaryButton.href}>
                                    {data.finalCTA.primaryButton.text}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className={data.finalCTA.backgroundImage ? 'border-white text-white hover:bg-white hover:text-black' : ''}>
                                <Link href={data.finalCTA.secondaryButton.href}>
                                    {data.finalCTA.secondaryButton.text}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 공유 버튼 */}
            <div className="fixed bottom-8 right-8">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full shadow-lg"
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: data.name,
                                text: data.description,
                                url: window.location.href,
                            })
                        }
                    }}
                >
                    <Share2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

// 인터랙티브 영역 컴포넌트
function InteractiveArea({ interactiveArea }: {
    interactiveArea: {
        type: 'demo' | 'feature-map' | 'dashboard' | 'workflow' | 'screenshot'
        title: string
        description: string
        placeholder?: string
    }
}) {
    const getIcon = () => {
        switch (interactiveArea.type) {
            case 'demo':
                return <Sparkles className="h-8 w-8 text-primary/60" />
            case 'feature-map':
                return <Monitor className="h-8 w-8 text-primary/60" />
            case 'dashboard':
                return <BarChart3 className="h-8 w-8 text-primary/60" />
            case 'workflow':
                return <Workflow className="h-8 w-8 text-primary/60" />
            case 'screenshot':
                return <FileText className="h-8 w-8 text-primary/60" />
            default:
                return <Play className="h-8 w-8 text-primary/60" />
        }
    }

    const getTypeLabel = () => {
        switch (interactiveArea.type) {
            case 'demo':
                return '인터랙티브 데모'
            case 'feature-map':
                return '기능 맵'
            case 'dashboard':
                return '실시간 대시보드'
            case 'workflow':
                return '워크플로우 시뮬레이션'
            case 'screenshot':
                return '제품 스크린샷'
            default:
                return '인터랙티브 영역'
        }
    }

    return (
        <Card className="h-full min-h-[500px] flex items-center justify-center border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    {getIcon()}
                </div>
                <div className="space-y-2">
                    <div className="text-xs font-medium text-primary/80 uppercase tracking-wide">
                        {getTypeLabel()}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                        {interactiveArea.title}
                    </h4>
                    <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                        {interactiveArea.description}
                    </p>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                    <Play className="h-4 w-4 mr-2" />
                    체험하기
                </Button>
            </div>
        </Card>
    )
}