'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { StepByStepDemo } from "@/components/ui/step-by-step-demo"
import {
    CheckCircle, ArrowRight, Star, Users, Zap, Shield,
    MessageSquare, BarChart3, Settings, Headphones, Globe,
    Phone, Mail, FileText, Clock, Target, Briefcase,
    ChevronRight, Home, Share2, Play
} from "lucide-react"
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
                <div className="container mx-auto px-4">
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
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge variant="outline" className="mb-4">
                                    {data.category}
                                </Badge>
                                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                                    {data.name}
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {data.description}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
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

                        {/* Hero 애니메이션 영역 (추후 구현) */}
                        <div className="relative">
                            {data.heroMedia ? (
                                <div className="relative">
                                    {data.heroMedia.type === 'image' ? (
                                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                            <Image
                                                src={data.heroMedia.src}
                                                alt={data.heroMedia.alt || `${data.name} 스크린샷`}
                                                width={600}
                                                height={400}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                            <video
                                                className="w-full h-auto"
                                                controls
                                                poster={data.heroMedia.poster}
                                            >
                                                <source src={data.heroMedia.src} type="video/mp4" />
                                            </video>
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group hover:bg-black/10 transition-colors">
                                                <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="relative h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center border-2 border-dashed border-primary/20">
                                    <div className="text-center space-y-3">
                                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                            <Play className="h-8 w-8 text-primary/60" />
                                        </div>
                                        <p className="text-muted-foreground font-medium">애니메이션 영역</p>
                                        <p className="text-sm text-muted-foreground/70">추후 구현 예정</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 제품 데모 섹션 */}
            {data.stepByStepDemo && (
                <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
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
                            <div className="w-full max-w-4xl">
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
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">주요 특징</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            티켓팅 – 채팅 상담 – 고객 관리를 편리하게 넘나드는 {data.name}.
                            AI 자동화로 에이전트 없이 모든 채널에서 완벽한 고객 응대를 제공합니다.
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

            {/* 세부 기능 Section (원본 구조) */}
            {data.detailedFeatures && (
                <section className="py-16">
                    <div className="container mx-auto px-4">
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

            {/* 연동 플랫폼 Section */}
            {data.integrations && (
                <section className="py-16 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">{data.integrations.title}</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                {data.integrations.description}
                            </p>
                        </div>

                        {/* 카테고리별 플랫폼 그룹화 */}
                        {Object.entries(
                            data.integrations.platforms.reduce((acc, platform) => {
                                if (!acc[platform.category]) acc[platform.category] = []
                                acc[platform.category].push(platform)
                                return acc
                            }, {} as Record<string, typeof data.integrations.platforms>)
                        ).map(([category, platforms]) => (
                            <div key={category} className="mb-8">
                                <h3 className="text-lg font-semibold mb-4 text-center">{category}</h3>
                                <div className="flex flex-wrap justify-center items-center gap-6">
                                    {platforms.map((platform, index) => (
                                        <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <Image
                                                src={platform.logo}
                                                alt={`${platform.name} 로고`}
                                                width={120}
                                                height={40}
                                                className="h-8 w-auto object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
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

                <div className="container mx-auto px-4 relative">
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