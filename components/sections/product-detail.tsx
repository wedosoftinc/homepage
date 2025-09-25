'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckIcon as Check, ArrowRightIcon as ArrowRight, ArrowTopRightOnSquareIcon as ExternalLink, ChatBubbleLeftRightIcon as MessageCircle } from "@heroicons/react/24/outline"
import Link from "next/link"

interface ProductDetailProps {
    product: {
        title: string
        subtitle: string
        category: string
        description: string
        features: string[]
        benefits: string[]
    }
    slug: string
}

export function ProductDetail({ product, slug }: ProductDetailProps) {
    const handleDemo = () => {
        // 데모 신청 로직 (추후 구현)
        console.log(`데모 신청: ${product.title}`)
    }

    const handleContact = () => {
        // 연락처 페이지로 이동 (추후 구현)
        console.log(`문의하기: ${product.title}`)
    }

    return (
        <>
            {/* Hero Section */}
            <section className="bg-muted/20 py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">
                            {product.category}
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                            {product.title}
                        </h1>
                        <p className="text-xl lg:text-2xl text-muted-foreground mb-6">
                            {product.subtitle}
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" onClick={handleDemo}>
                                데모 신청하기
                            </Button>
                            <Button variant="outline" size="lg" onClick={handleContact}>
                                <MessageCircle className="mr-2 h-4 w-4" />
                                문의하기
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                주요 기능
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {product.title}의 핵심 기능들을 확인해보세요
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.features.map((feature, index) => (
                                <Card key={index} className="text-center">
                                    <CardContent className="pt-6">
                                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                            <Check className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold">{feature}</h3>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                    왜 {product.title}을 선택해야 할까요?
                                </h2>
                                <div className="space-y-4">
                                    {product.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="mt-1">
                                                <Check className="h-5 w-5 text-primary" />
                                            </div>
                                            <p className="text-lg">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Card className="p-8">
                                <CardHeader>
                                    <CardTitle>지금 시작하세요</CardTitle>
                                    <CardDescription>
                                        {product.title}으로 비즈니스를 한 단계 업그레이드하세요
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <Button className="w-full" size="lg" onClick={handleDemo}>
                                            무료 데모 신청
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" className="w-full" size="lg" asChild>
                                            <Link href="/pricing">
                                                가격 정보 보기
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                관련 제품
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {product.category} 카테고리의 다른 제품들도 확인해보세요
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* 관련 제품 카드들 - 추후 동적으로 생성 */}
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-semibold mb-2">다른 제품</h3>
                                    <p className="text-muted-foreground mb-4">곧 업데이트 예정</p>
                                    <Button variant="outline" size="sm">
                                        자세히 보기
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {product.title} 도입을 고려 중이신가요?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            전문 컨설턴트와 상담하고 맞춤형 솔루션을 제안받으세요
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" onClick={handleDemo}>
                                무료 상담 신청
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/contact">
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    문의하기
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}