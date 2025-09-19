import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
    title: '제품 소개 | 위두소프트 - 글로벌 SaaS 솔루션',
    description: 'Freshworks, Monday.com, Google Workspace 등 검증된 글로벌 SaaS 솔루션으로 비즈니스 성장을 가속화하세요. 25년 경험의 전문 컨설팅 제공.',
    keywords: 'SaaS, 클라우드 솔루션, 협업툴, CRM, 고객지원, IT관리, Freshworks, Monday.com, Google Workspace',
    openGraph: {
        title: '제품 소개 | 위두소프트 - 글로벌 SaaS 솔루션',
        description: 'Freshworks, Monday.com, Google Workspace 등 검증된 글로벌 SaaS 솔루션으로 비즈니스 성장을 가속화하세요.',
        type: 'website',
        locale: 'ko_KR',
    },
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">제품 소개</h1>
                    <p className="text-lg text-muted-foreground">
                        글로벌 SaaS 솔루션으로 비즈니스 성장을 가속화하세요
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">협업 및 생산성</Badge>
                            <CardTitle>Monday Service</CardTitle>
                            <CardDescription>
                                AI 기반의 혁신적인 서비스 관리 플랫폼
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/monday-service">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">고객 경험 관리</Badge>
                            <CardTitle>Freshdesk Omni</CardTitle>
                            <CardDescription>
                                옴니채널 고객 지원의 새로운 기준
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/freshdesk-omni">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}