"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, Star, Zap } from "lucide-react"

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16">
                {/* 헤더 섹션 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">요금제</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        귀하의 비즈니스에 맞는 최적의 솔루션을 찾아보세요
                    </p>

                    {/* 월/연간 토글 */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={`text-sm ${billingCycle === 'monthly' ? 'font-semibold' : 'text-muted-foreground'}`}>
                            월간 결제
                        </span>
                        <Switch
                            checked={billingCycle === 'annual'}
                            onCheckedChange={(checked) => setBillingCycle(checked ? 'annual' : 'monthly')}
                        />
                        <span className={`text-sm ${billingCycle === 'annual' ? 'font-semibold' : 'text-muted-foreground'}`}>
                            연간 결제
                        </span>
                        {billingCycle === 'annual' && (
                            <Badge variant="secondary" className="ml-2">
                                <Zap className="w-3 h-3 mr-1" />
                                최대 20% 할인
                            </Badge>
                        )}
                    </div>
                </div>

                {/* 솔루션 카테고리 탭 */}
                <Tabs defaultValue="customer-experience" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-12">
                        <TabsTrigger value="customer-experience">고객 경험 관리</TabsTrigger>
                        <TabsTrigger value="collaboration">협업 & 생산성</TabsTrigger>
                        <TabsTrigger value="infrastructure">IT 인프라</TabsTrigger>
                        <TabsTrigger value="sales">영업 관리</TabsTrigger>
                    </TabsList>

                    {/* 고객 경험 관리 */}
                    <TabsContent value="customer-experience">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold mb-4">고객 경험 관리</h2>
                            <p className="text-muted-foreground text-lg">
                                고객 지원, 라이브 채팅, 콜센터 솔루션으로 완벽한 고객 경험을 제공하세요
                            </p>
                        </div>

                        {/* Freshworks 고객 서비스 제품군 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">🌟</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Freshworks</h3>
                                    <p className="text-muted-foreground">고객 서비스 제품군</p>
                                </div>
                            </div>

                            <div className="grid gap-8 lg:grid-cols-2">
                                {/* Freshdesk Omni */}
                                <Card className="relative overflow-hidden">
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="secondary">
                                            <Star className="w-3 h-3 mr-1" />
                                            추천
                                        </Badge>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Freshdesk Omni</CardTitle>
                                        <CardDescription>옴니채널 고객 지원 플랫폼</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {/* Growth 플랜 */}
                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Growth</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '29' : '35'}
                                                    <span className="text-sm font-normal text-muted-foreground">/agent/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        옴니채널 고객 지원
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        지능형 챗봇
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Pro 플랜 */}
                                            <div className="p-4 rounded-lg border border-primary bg-primary/5 relative">
                                                <Badge className="absolute -top-2 left-4" variant="default">
                                                    인기
                                                </Badge>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Pro</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '69' : '83'}
                                                    <span className="text-sm font-normal text-muted-foreground">/agent/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        Growth 모든 기능
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        맞춤형 지원 포털
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        커스텀 리포팅
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Enterprise 플랜 */}
                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Enterprise</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '109' : '131'}
                                                    <span className="text-sm font-normal text-muted-foreground">/agent/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        Pro 모든 기능
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        감사 로그
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        승인 워크플로우
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-2">
                                        <Button className="flex-1">무료 체험</Button>
                                        <Button variant="outline" className="flex-1">문의하기</Button>
                                    </CardFooter>
                                </Card>

                                {/* Freshdesk */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Freshdesk</CardTitle>
                                        <CardDescription>검증된 헬프데스크 솔루션</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {/* Free 플랜 */}
                                            <div className="p-4 rounded-lg border border-green-200 bg-green-50">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Free</span>
                                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                                        무료
                                                    </Badge>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    $0
                                                    <span className="text-sm font-normal text-muted-foreground">/agent/month</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-1">최대 2명 에이전트</p>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        기본 티켓팅
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        이메일 지원
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Growth 플랜 */}
                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Growth</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '15' : '18'}
                                                    <span className="text-sm font-normal text-muted-foreground">/agent/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        무제한 에이전트
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        시간 추적
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Pro 플랜 */}
                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Pro</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '49' : '59'}
                                                    <span className="text-sm font-normal text-muted-foreground">/agent/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        Growth 모든 기능
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        고급 리포팅
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-2">
                                        <Button className="flex-1">무료 체험</Button>
                                        <Button variant="outline" className="flex-1">문의하기</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    {/* 협업 & 생산성 */}
                    <TabsContent value="collaboration">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold mb-4">협업 & 생산성</h2>
                            <p className="text-muted-foreground text-lg">
                                팀 협업과 생산성을 높이는 클라우드 기반 솔루션
                            </p>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Google Workspace */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🌐</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Google Workspace</h3>
                                        <p className="text-muted-foreground">클라우드 기반 협업 솔루션</p>
                                    </div>
                                </div>

                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="space-y-4">
                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Business Starter</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '6' : '7'}
                                                    <span className="text-sm font-normal text-muted-foreground">/user/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        Gmail, Drive 30GB
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        Meet 최대 100명
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-lg border border-primary bg-primary/5 relative">
                                                <Badge className="absolute -top-2 left-4" variant="default">
                                                    인기
                                                </Badge>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Business Standard</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '12' : '14'}
                                                    <span className="text-sm font-normal text-muted-foreground">/user/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        2TB 저장공간
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        Meet 150명, 녹화 기능
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Business Plus</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '18' : '22'}
                                                    <span className="text-sm font-normal text-muted-foreground">/user/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        5TB 저장공간
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        Meet 500명, 고급 보안
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-2">
                                        <Button className="flex-1">무료 체험</Button>
                                        <Button variant="outline" className="flex-1">문의하기</Button>
                                    </CardFooter>
                                </Card>
                            </div>

                            {/* Monday Work Management */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📊</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Monday.com</h3>
                                        <p className="text-muted-foreground">팀 협업 및 프로젝트 관리</p>
                                    </div>
                                </div>

                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="space-y-4">
                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Basic</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '12' : '14'}
                                                    <span className="text-sm font-normal text-muted-foreground">/seat/month</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">최소 3 seats</p>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        기본 대시보드
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        5GB 저장공간
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-lg border border-primary bg-primary/5 relative">
                                                <Badge className="absolute -top-2 left-4" variant="default">
                                                    인기
                                                </Badge>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Standard</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '14' : '17'}
                                                    <span className="text-sm font-normal text-muted-foreground">/seat/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        타임라인 및 캘린더 뷰
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        250GB 저장공간
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Pro</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '24' : '29'}
                                                    <span className="text-sm font-normal text-muted-foreground">/seat/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        시간 추적, 커스텀 필드
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        1TB 저장공간
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-2">
                                        <Button className="flex-1">무료 체험</Button>
                                        <Button variant="outline" className="flex-1">문의하기</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    {/* IT 인프라 */}
                    <TabsContent value="infrastructure">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold mb-4">IT 인프라 관리</h2>
                            <p className="text-muted-foreground text-lg">
                                IT 서비스 관리와 원격 접속 솔루션
                            </p>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Freshservice */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🔧</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Freshservice</h3>
                                        <p className="text-muted-foreground">IT 서비스 관리 플랫폼</p>
                                    </div>
                                </div>

                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="space-y-4">
                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Starter</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '19' : '23'}
                                                    <span className="text-sm font-normal text-muted-foreground">/agent/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        IT 헬프데스크
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        자산 관리
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-lg border border-primary bg-primary/5 relative">
                                                <Badge className="absolute -top-2 left-4" variant="default">
                                                    인기
                                                </Badge>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Growth</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '49' : '59'}
                                                    <span className="text-sm font-normal text-muted-foreground">/agent/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        변경 관리
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        프로젝트 관리
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Pro</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '99' : '119'}
                                                    <span className="text-sm font-normal text-muted-foreground">/agent/month</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        고급 분석
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        비즈니스 규칙
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-2">
                                        <Button className="flex-1">무료 체험</Button>
                                        <Button variant="outline" className="flex-1">문의하기</Button>
                                    </CardFooter>
                                </Card>
                            </div>

                            {/* Splashtop */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🖥️</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Splashtop</h3>
                                        <p className="text-muted-foreground">원격 접속 솔루션</p>
                                    </div>
                                </div>

                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="space-y-4">
                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Solo</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '5' : '6'}
                                                    <span className="text-sm font-normal text-muted-foreground">/user/month</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">1 user, 연간 결제</p>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        개인용
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        무제한 컴퓨터 액세스
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-lg border border-primary bg-primary/5 relative">
                                                <Badge className="absolute -top-2 left-4" variant="default">
                                                    인기
                                                </Badge>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Pro</span>
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    ${billingCycle === 'annual' ? '10' : '12'}
                                                    <span className="text-sm font-normal text-muted-foreground">/user/month</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">1 user, 연간 결제</p>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        비즈니스용
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        고급 기능, 파일 전송
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-lg border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">Enterprise</span>
                                                </div>
                                                <div className="text-2xl font-bold">
                                                    맞춤 가격
                                                </div>
                                                <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        대기업용
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        SSO, 고급 보안
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-2">
                                        <Button className="flex-1">무료 체험</Button>
                                        <Button variant="outline" className="flex-1">문의하기</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    {/* 영업 관리 */}
                    <TabsContent value="sales">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold mb-4">영업 관리</h2>
                            <p className="text-muted-foreground text-lg">
                                CRM과 영업 프로세스 관리 솔루션
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">💼</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Freshsales</h3>
                                    <p className="text-muted-foreground">CRM 영업 관리 플랫폼</p>
                                </div>
                            </div>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                        {/* Free 플랜 */}
                                        <div className="p-4 rounded-lg border border-green-200 bg-green-50">
                                            <div className="text-center">
                                                <Badge variant="secondary" className="bg-green-100 text-green-800 mb-2">
                                                    무료
                                                </Badge>
                                                <div className="text-2xl font-bold">$0</div>
                                                <p className="text-sm text-muted-foreground">최대 3명 사용자</p>
                                            </div>
                                            <ul className="text-sm text-muted-foreground mt-4 space-y-2">
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    기본 CRM
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    이메일 템플릿
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Growth 플랜 */}
                                        <div className="p-4 rounded-lg border">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">
                                                    ${billingCycle === 'annual' ? '9' : '11'}
                                                </div>
                                                <p className="text-sm text-muted-foreground">/user/month</p>
                                                <p className="text-xs text-muted-foreground mt-1">Growth</p>
                                            </div>
                                            <ul className="text-sm text-muted-foreground mt-4 space-y-2">
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    칸반 뷰
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    기본 워크플로우
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    CPQ 라이선스
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Pro 플랜 */}
                                        <div className="p-4 rounded-lg border border-primary bg-primary/5 relative">
                                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2" variant="default">
                                                인기
                                            </Badge>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">
                                                    ${billingCycle === 'annual' ? '39' : '47'}
                                                </div>
                                                <p className="text-sm text-muted-foreground">/user/month</p>
                                                <p className="text-xs text-muted-foreground mt-1">Pro</p>
                                            </div>
                                            <ul className="text-sm text-muted-foreground mt-4 space-y-2">
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    Freddy AI 기능
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    영업 시퀀스
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    고급 워크플로우
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Enterprise 플랜 */}
                                        <div className="p-4 rounded-lg border">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">
                                                    ${billingCycle === 'annual' ? '59' : '71'}
                                                </div>
                                                <p className="text-sm text-muted-foreground">/user/month</p>
                                                <p className="text-xs text-muted-foreground mt-1">Enterprise</p>
                                            </div>
                                            <ul className="text-sm text-muted-foreground mt-4 space-y-2">
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    예측 인사이트
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    감사 로그
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    샌드박스
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                                        <p className="text-sm text-center text-muted-foreground">
                                            <Zap className="w-4 h-4 inline mr-1" />
                                            모든 유료 플랜에 500 무료 AI Agent 세션 포함
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4 justify-center">
                                    <Button size="lg">21일 무료 체험</Button>
                                    <Button variant="outline" size="lg">문의하기</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* 하단 CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-muted/30 rounded-2xl p-12">
                        <h2 className="text-3xl font-bold mb-4">아직 결정하지 못하셨나요?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            전문가와 상담하여 귀하의 비즈니스에 맞는 최적의 솔루션을 찾아보세요
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" className="px-8">
                                전문가 상담 신청
                            </Button>
                            <Button variant="outline" size="lg" className="px-8">
                                데모 요청
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                            25년 경험의 전문가가 직접 상담해 드립니다
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}