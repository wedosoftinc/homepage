'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import {
    SwatchIcon as Palette,
    DocumentTextIcon as Type,
    Squares2X2Icon as Layout,
    CheckIcon as Check,
    ChevronRightIcon as ChevronRight,
    StarIcon as Star,
    BuildingOfficeIcon as Building2,
    UsersIcon as Users,
    ArrowTrendingUpIcon as TrendingUp,
    EnvelopeIcon as Mail,
    PhoneIcon as Phone,
    GlobeAltIcon as Globe
} from '@heroicons/react/24/outline'

export default function DesignSystemPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">WeDoSoft Design System</h1>
                        <p className="text-sm text-muted-foreground">B2B SaaS를 위한 디자인 시스템</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <Badge variant="outline">v1.0.0</Badge>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 md:px-8 lg:px-12 py-8">
                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="overview">개요</TabsTrigger>
                        <TabsTrigger value="colors">색상</TabsTrigger>
                        <TabsTrigger value="typography">타이포그래피</TabsTrigger>
                        <TabsTrigger value="components">컴포넌트</TabsTrigger>
                        <TabsTrigger value="patterns">패턴</TabsTrigger>
                    </TabsList>

                    {/* 개요 탭 */}
                    <TabsContent value="overview" className="space-y-8">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Palette className="h-5 w-5 text-primary" />
                                        <CardTitle>색상 시스템</CardTitle>
                                    </div>
                                    <CardDescription>
                                        다크 모드 우선의 HSL 기반 색상 팔레트
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex space-x-2">
                                        <div className="h-8 w-8 rounded bg-primary"></div>
                                        <div className="h-8 w-8 rounded bg-secondary"></div>
                                        <div className="h-8 w-8 rounded bg-accent"></div>
                                        <div className="h-8 w-8 rounded bg-muted"></div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Type className="h-5 w-5 text-primary" />
                                        <CardTitle>Pretendard 폰트</CardTitle>
                                    </div>
                                    <CardDescription>
                                        한글과 영문의 완벽한 조화
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <p className="text-2xl font-bold">제목 스타일</p>
                                        <p className="text-base">본문 텍스트 스타일</p>
                                        <p className="text-sm text-muted-foreground">보조 텍스트</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Layout className="h-5 w-5 text-primary" />
                                        <CardTitle>shadcn/ui</CardTitle>
                                    </div>
                                    <CardDescription>
                                        모던하고 접근성 높은 컴포넌트
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex space-x-2">
                                        <Button size="sm">Primary</Button>
                                        <Button size="sm" variant="secondary">Secondary</Button>
                                        <Button size="sm" variant="outline">Outline</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <Separator />

                        <div>
                            <h2 className="text-2xl font-bold mb-6">브랜드 가이드라인</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>브랜드 정체성</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Building2 className="h-5 w-5 text-primary" />
                                            <span>B2B SaaS 전문 기업</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Users className="h-5 w-5 text-primary" />
                                            <span>글로벌 파트너십</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <TrendingUp className="h-5 w-5 text-primary" />
                                            <span>디지털 혁신 리더</span>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>핵심 가치</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <Badge variant="secondary">신뢰성</Badge>
                                        <Badge variant="secondary">전문성</Badge>
                                        <Badge variant="secondary">혁신</Badge>
                                        <Badge variant="secondary">파트너십</Badge>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    {/* 색상 탭 */}
                    <TabsContent value="colors" className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">색상 팔레트</h2>
                            <p className="text-muted-foreground mb-8">
                                다크 모드를 우선으로 하는 HSL 기반 색상 시스템입니다.
                                각 색상은 접근성 가이드라인(WCAG)을 준수합니다.
                            </p>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Primary Colors */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Primary Colors</CardTitle>
                                        <CardDescription>주요 브랜드 색상</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between p-4 rounded bg-primary text-primary-foreground">
                                            <span className="font-medium">Primary</span>
                                            <span className="text-sm opacity-80">215 35% 65%</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded bg-secondary text-secondary-foreground">
                                            <span className="font-medium">Secondary</span>
                                            <span className="text-sm opacity-80">217 32% 17%</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded bg-accent text-accent-foreground">
                                            <span className="font-medium">Accent</span>
                                            <span className="text-sm opacity-80">215 25% 60%</span>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Neutral Colors */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Neutral Colors</CardTitle>
                                        <CardDescription>배경 및 텍스트 색상</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between p-4 rounded bg-background border text-foreground">
                                            <span className="font-medium">Background</span>
                                            <span className="text-sm opacity-60">222 84% 5%</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded bg-card text-card-foreground border">
                                            <span className="font-medium">Card</span>
                                            <span className="text-sm opacity-60">222 47% 11%</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded bg-muted text-muted-foreground">
                                            <span className="font-medium">Muted</span>
                                            <span className="text-sm opacity-80">217 32% 17%</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Separator className="my-8" />

                            {/* 색상 사용 예시 */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">색상 사용 예시</h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <Card>
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center space-x-2">
                                                <Check className="h-4 w-4 text-primary" />
                                                <CardTitle className="text-base">성공 메시지</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                설정이 성공적으로 저장되었습니다.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-primary">
                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-base text-primary">Featured 콘텐츠</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                중요한 정보나 추천 콘텐츠
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-muted">
                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-base">보조 정보</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                부가적인 설명이나 안내 문구
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* 타이포그래피 탭 */}
                    <TabsContent value="typography" className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">타이포그래피</h2>
                            <p className="text-muted-foreground mb-8">
                                Pretendard 폰트를 기반으로 한 일관성 있는 텍스트 시스템입니다.
                                한글과 영문 모두에서 뛰어난 가독성을 제공합니다.
                            </p>

                            {/* 폰트 정보 */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle>폰트 패밀리</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <code className="text-sm bg-muted p-2 rounded block">
                                        "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif
                                    </code>
                                </CardContent>
                            </Card>

                            {/* 제목 스타일 */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">제목 스타일</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 border rounded">
                                            <h1 className="text-h1 mb-2">H1 - 메인 제목 (40px/700)</h1>
                                            <p className="text-sm text-muted-foreground">기업의 디지털 혁신을 위한 최적의 파트너</p>
                                        </div>
                                        <div className="p-4 border rounded">
                                            <h2 className="text-h2 mb-2">H2 - 섹션 제목 (32px/600)</h2>
                                            <p className="text-sm text-muted-foreground">귀하의 비즈니스에 맞는 최적의 솔루션</p>
                                        </div>
                                        <div className="p-4 border rounded">
                                            <h3 className="text-h3 mb-2">H3 - 서브 제목 (24px/600)</h3>
                                            <p className="text-sm text-muted-foreground">고객 경험 & 세일즈 관리</p>
                                        </div>
                                        <div className="p-4 border rounded">
                                            <h4 className="text-h4 mb-2">H4 - 소제목 (20px/600)</h4>
                                            <p className="text-sm text-muted-foreground">주요 기능</p>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                {/* 본문 스타일 */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">본문 스타일</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 border rounded">
                                            <p className="text-body-lg mb-2">Large Body (18px/400)</p>
                                            <p className="text-sm text-muted-foreground">중요한 설명이나 소개 문구에 사용</p>
                                        </div>
                                        <div className="p-4 border rounded">
                                            <p className="text-body mb-2">Regular Body (16px/400)</p>
                                            <p className="text-sm text-muted-foreground">일반적인 본문 텍스트</p>
                                        </div>
                                        <div className="p-4 border rounded">
                                            <p className="text-body-sm mb-2">Small Body (14px/400)</p>
                                            <p className="text-sm text-muted-foreground">보조 설명이나 캡션</p>
                                        </div>
                                        <div className="p-4 border rounded">
                                            <p className="text-caption mb-2">Caption (12px/500)</p>
                                            <p className="text-sm text-muted-foreground">라벨이나 작은 정보</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* 컴포넌트 탭 */}
                    <TabsContent value="components" className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">UI 컴포넌트</h2>
                            <p className="text-muted-foreground mb-8">
                                shadcn/ui 기반의 재사용 가능한 컴포넌트들입니다.
                            </p>

                            {/* 버튼 */}
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>버튼</CardTitle>
                                    <CardDescription>다양한 상황에 맞는 버튼 스타일</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-4">
                                        <Button>Primary</Button>
                                        <Button variant="secondary">Secondary</Button>
                                        <Button variant="outline">Outline</Button>
                                        <Button variant="ghost">Ghost</Button>
                                        <Button variant="destructive">Destructive</Button>
                                    </div>
                                    <Separator className="my-4" />
                                    <div className="flex flex-wrap gap-4">
                                        <Button size="sm">Small</Button>
                                        <Button size="default">Default</Button>
                                        <Button size="lg">Large</Button>
                                        <Button size="icon"><Star className="h-4 w-4" /></Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* 배지 */}
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>배지</CardTitle>
                                    <CardDescription>상태나 카테고리 표시용 배지</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>Default</Badge>
                                        <Badge variant="secondary">Secondary</Badge>
                                        <Badge variant="outline">Outline</Badge>
                                        <Badge variant="destructive">Destructive</Badge>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* 카드 */}
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>카드</CardTitle>
                                    <CardDescription>콘텐츠 그룹핑용 카드 컴포넌트</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Freshdesk</CardTitle>
                                                <CardDescription>고객 지원 헬프데스크 솔루션</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center space-x-2 text-sm">
                                                    <Check className="h-4 w-4 text-green-500" />
                                                    <span>티켓 관리 시스템</span>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card className="border-primary">
                                            <CardHeader>
                                                <CardTitle className="flex items-center space-x-2">
                                                    <span>Freshsales</span>
                                                    <Badge>인기</Badge>
                                                </CardTitle>
                                                <CardDescription>CRM 및 세일즈 관리 솔루션</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Button className="w-full">
                                                    자세히 보기
                                                    <ChevronRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* 패턴 탭 */}
                    <TabsContent value="patterns" className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">디자인 패턴</h2>
                            <p className="text-muted-foreground mb-8">
                                WeDoSoft 사이트에서 자주 사용되는 디자인 패턴들입니다.
                            </p>

                            {/* 통계 카드 패턴 */}
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>통계 카드 패턴</CardTitle>
                                    <CardDescription>수치 정보를 강조하는 카드 디자인</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 md:grid-cols-3">
                                        <div className="text-center p-4 border rounded">
                                            <Building2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                                            <div className="text-3xl font-bold">500+</div>
                                            <div className="text-sm text-muted-foreground">기업 고객</div>
                                        </div>
                                        <div className="text-center p-4 border rounded">
                                            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                                            <div className="text-3xl font-bold">10,000+</div>
                                            <div className="text-sm text-muted-foreground">활성 사용자</div>
                                        </div>
                                        <div className="text-center p-4 border rounded">
                                            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                                            <div className="text-3xl font-bold">95%</div>
                                            <div className="text-sm text-muted-foreground">고객 만족도</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* 연락처 카드 패턴 */}
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>연락처 카드 패턴</CardTitle>
                                    <CardDescription>연락 방법을 제시하는 카드 디자인</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 md:grid-cols-3">
                                        <Card>
                                            <CardHeader className="text-center">
                                                <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
                                                <CardTitle className="text-lg">전화 상담</CardTitle>
                                                <CardDescription>전문 컨설턴트와 직접 통화</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Button className="w-full" variant="outline">
                                                    02-2135-3071
                                                </Button>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader className="text-center">
                                                <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                                                <CardTitle className="text-lg">이메일 문의</CardTitle>
                                                <CardDescription>상세한 문의사항 전송</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Button className="w-full" variant="outline">
                                                    support@wedosoft.net
                                                </Button>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader className="text-center">
                                                <Globe className="h-8 w-8 mx-auto mb-2 text-primary" />
                                                <CardTitle className="text-lg">실시간 채팅</CardTitle>
                                                <CardDescription>웹사이트에서 바로 문의</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Button className="w-full">
                                                    채팅 시작하기
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* 기능 리스트 패턴 */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>기능 리스트 패턴</CardTitle>
                                    <CardDescription>제품 기능을 체크리스트로 표시</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span>무제한 티켓 관리</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span>다채널 고객 지원</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span>자동화 워크플로우</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span>실시간 분석 대시보드</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span>24/7 기술 지원</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}