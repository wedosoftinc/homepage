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
                    {/* 고객 경험 & 세일즈 관리 */}
                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">고객 경험 관리</Badge>
                            <CardTitle>Freshdesk</CardTitle>
                            <CardDescription>
                                고객 지원의 새로운 기준
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/freshdesk">자세히 보기</Link>
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

                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">고객 경험 관리</Badge>
                            <CardTitle>Freshsales</CardTitle>
                            <CardDescription>
                                CRM 및 세일즈 관리
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/freshsales">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">고객 경험 관리</Badge>
                            <CardTitle>Freshchat</CardTitle>
                            <CardDescription>
                                실시간 채팅 솔루션
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/freshchat">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">고객 경험 관리</Badge>
                            <CardTitle>Freddy AI</CardTitle>
                            <CardDescription>
                                GPT LLM 기반 고객 지원 자동화
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/freddy-ai">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* 협업 및 생산성 향상 */}
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
                            <Badge className="w-fit mb-2">협업 및 생산성</Badge>
                            <CardTitle>Monday Work Management</CardTitle>
                            <CardDescription>
                                팀 협업과 프로젝트 관리의 혁신
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/monday-work-management">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">협업 및 생산성</Badge>
                            <CardTitle>Monday Sales CRM</CardTitle>
                            <CardDescription>
                                직관적인 세일즈 CRM 솔루션
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/monday-sales-crm">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">협업 및 생산성</Badge>
                            <CardTitle>Monday Dev</CardTitle>
                            <CardDescription>
                                개발팀을 위한 프로젝트 관리
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/monday-dev">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">협업 및 생산성</Badge>
                            <CardTitle>Google Workspace</CardTitle>
                            <CardDescription>
                                클라우드 기반 협업의 완성
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/google-workspace">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* IT 인프라 관리 */}
                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">IT 인프라 관리</Badge>
                            <CardTitle>Freshservice</CardTitle>
                            <CardDescription>
                                IT 서비스 관리의 혁신
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/freshservice">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Badge className="w-fit mb-2">IT 인프라 관리</Badge>
                            <CardTitle>Splashtop</CardTitle>
                            <CardDescription>
                                원격 접속 및 지원 솔루션
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="/products/splashtop">자세히 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}