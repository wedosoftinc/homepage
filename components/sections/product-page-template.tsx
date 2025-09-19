'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
    CheckCircle, ArrowRight, Star, Users, Zap, Shield,
    MessageSquare, BarChart3, Settings, Headphones, Globe,
    Phone, Mail, FileText, Clock, Target, Briefcase,
    ChevronRight, Home, Share2
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

// 제품 페이지 데이터 타입 정의
export interface ProductPageData {
    // Hero 섹션
    name: string
    subtitle: string
    description: string
    category: string
    logoPath?: string
    heroCTA: {
        primary: { text: string; href: string }
        secondary: { text: string; href: string }
    }

    // 주요 기능
    keyFeatures: {
        icon: keyof typeof iconMap
        title: string
        description: string
    }[]

    // 비즈니스 혜택
    benefits: {
        title: string
        description: string
        metrics?: string
    }[]

    // 활용 시나리오
    useCases: {
        title: string
        description: string
        features: string[]
    }[]

    // FAQ
    faqs: {
        question: string
        answer: string
    }[]

    // 최종 CTA
    finalCTA: {
        title: string
        description: string
        primaryButton: { text: string; href: string }
        secondaryButton: { text: string; href: string }
    }

    // 추가: 브레드크럼을 위한 슬러그
    slug?: string
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
                        <span className="text-foreground font-medium">{data.name}</span>
                    </nav>
                </div>
            </section>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-between items-start mb-4">
                            <Badge variant="outline">
                                {data.category}
                            </Badge>

                            {/* Share Button */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: data.name,
                                            text: data.subtitle,
                                            url: window.location.href
                                        })
                                    }
                                }}
                            >
                                <Share2 className="h-4 w-4 mr-2" />
                                공유
                            </Button>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                            {data.name}
                        </h1>

                        <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
                            {data.subtitle}
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                            {data.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </section>

            {/* Key Features Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                핵심 기능
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {data.name}의 강력한 기능들을 확인해보세요
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.keyFeatures.map((feature, index) => {
                                const IconComponent = iconMap[feature.icon]
                                return (
                                    <Card key={index} className="h-full">
                                        <CardHeader>
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                                <IconComponent className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                비즈니스 혜택
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {data.name}로 얻을 수 있는 실질적인 가치
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.benefits.map((benefit, index) => (
                                <div key={index} className="bg-card p-6 rounded-lg border">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                                            <p className="text-muted-foreground mb-2">{benefit.description}</p>
                                            {benefit.metrics && (
                                                <div className="text-sm font-medium text-primary">
                                                    {benefit.metrics}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                활용 시나리오
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                다양한 비즈니스 상황에서 {data.name}를 활용하세요
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {data.useCases.map((useCase, index) => (
                                <Card key={index} className="h-full">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                                        <CardDescription className="text-base">
                                            {useCase.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {useCase.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center space-x-3">
                                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 lg:py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                자주 묻는 질문
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {data.name}에 대해 궁금한 점을 해결해보세요
                            </p>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            {data.faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {data.finalCTA.title}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            {data.finalCTA.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href={data.finalCTA.primaryButton.href}>
                                    {data.finalCTA.primaryButton.text}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href={data.finalCTA.secondaryButton.href}>
                                    {data.finalCTA.secondaryButton.text}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}