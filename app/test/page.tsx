'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { ProductsSection } from '@/components/sections/products-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { CTASection } from '@/components/sections/cta-section'
import { Check, Palette, Monitor, Smartphone, Sun, Moon } from 'lucide-react'

export default function TestPage() {
    const [currentTheme, setCurrentTheme] = useState('default')

    const colorTests = [
        {
            name: 'Primary Colors',
            items: [
                { label: 'Primary', className: 'bg-primary text-primary-foreground' },
                { label: 'Secondary', className: 'bg-secondary text-secondary-foreground' },
                { label: 'Accent', className: 'bg-accent text-accent-foreground' },
                { label: 'Muted', className: 'bg-muted text-muted-foreground' },
            ]
        },
        {
            name: 'Status Colors',
            items: [
                { label: 'Destructive', className: 'bg-destructive text-destructive-foreground' },
                { label: 'Border', className: 'bg-border text-foreground border-2' },
                { label: 'Input', className: 'bg-input text-foreground border' },
                { label: 'Ring', className: 'bg-background text-foreground ring-2 ring-ring' },
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-background">
            <MainNavigation />

            <div className="container mx-auto px-4 py-8 mt-16">
                <div className="max-w-6xl mx-auto">
                    {/* 헤더 */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">
                            <Palette className="inline-block w-8 h-8 mr-2" />
                            디자인 시스템 테스트
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            shadcn/ui 기반 컴포넌트와 다크 모드를 테스트하고 비교하는 페이지입니다.
                        </p>
                    </div>

                    <Tabs defaultValue="colors" className="space-y-8">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="colors">색상 팔레트</TabsTrigger>
                            <TabsTrigger value="components">컴포넌트</TabsTrigger>
                            <TabsTrigger value="typography">타이포그래피</TabsTrigger>
                            <TabsTrigger value="layouts">레이아웃</TabsTrigger>
                        </TabsList>

                        {/* 색상 팔레트 테스트 */}
                        <TabsContent value="colors" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Palette className="w-5 h-5" />
                                        shadcn/ui 색상 시스템
                                    </CardTitle>
                                    <CardDescription>
                                        HSL 기반 CSS 변수 시스템 - 라이트/다크 모드 자동 전환
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {colorTests.map((group) => (
                                        <div key={group.name}>
                                            <h3 className="text-lg font-medium mb-3">{group.name}</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {group.items.map((item) => (
                                                    <div key={item.label} className="space-y-2">
                                                        <div className={`h-16 rounded-lg ${item.className} flex items-center justify-center text-sm font-medium`}>
                                                            {item.label}
                                                        </div>
                                                        <p className="text-xs text-muted-foreground text-center">
                                                            {item.label}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* 컴포넌트 테스트 */}
                        <TabsContent value="components" className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* 버튼 테스트 */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Button Variants</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            <Button>Default</Button>
                                            <Button variant="secondary">Secondary</Button>
                                            <Button variant="destructive">Destructive</Button>
                                            <Button variant="outline">Outline</Button>
                                            <Button variant="ghost">Ghost</Button>
                                            <Button variant="link">Link</Button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Button size="sm">Small</Button>
                                            <Button size="default">Default</Button>
                                            <Button size="lg">Large</Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* 배지 테스트 */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Badge Variants</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>Default</Badge>
                                            <Badge variant="secondary">Secondary</Badge>
                                            <Badge variant="destructive">Destructive</Badge>
                                            <Badge variant="outline">Outline</Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* 카드 테스트 */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Components</CardTitle>
                                    <CardDescription>
                                        다양한 카드 스타일과 콘텐츠 레이아웃
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 md:grid-cols-3">
                                        {[1, 2, 3].map((i) => (
                                            <Card key={i} className="border-border">
                                                <CardHeader>
                                                    <CardTitle className="text-lg">카드 {i}</CardTitle>
                                                    <CardDescription>
                                                        테스트 카드 설명
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-muted-foreground mb-4">
                                                        이것은 테스트용 카드입니다. 다크 모드에서의 표시를 확인하세요.
                                                    </p>
                                                    <div className="flex items-center gap-2">
                                                        <Check className="w-4 h-4 text-green-500" />
                                                        <span className="text-sm">기능 확인됨</span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* 타이포그래피 테스트 */}
                        <TabsContent value="typography" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Nanum Square 폰트 테스트</CardTitle>
                                    <CardDescription>
                                        한글 폰트 렌더링과 다양한 웨이트 확인
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <h1 className="text-4xl font-bold">Heading 1 - 나눔스퀘어 굵게</h1>
                                        <h2 className="text-3xl font-semibold">Heading 2 - 나눔스퀘어 중간</h2>
                                        <h3 className="text-2xl font-medium">Heading 3 - 나눔스퀘어 보통</h3>
                                        <h4 className="text-xl">Heading 4 - 나눔스퀘어 일반</h4>
                                        <p className="text-lg">
                                            본문 텍스트 Large - 위두소프트는 Google Workspace, Freshworks, Monday.com 등
                                            글로벌 SaaS 솔루션을 제공하는 전문 기업입니다.
                                        </p>
                                        <p className="text-base">
                                            본문 텍스트 Regular - 기업의 디지털 트랜스포메이션을 지원하며,
                                            협업과 생산성 향상을 위한 최적의 솔루션을 제안합니다.
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Small Text - 보조 정보나 캡션용 텍스트입니다.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* 레이아웃 테스트 */}
                        <TabsContent value="layouts" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>반응형 레이아웃 테스트</CardTitle>
                                    <CardDescription>
                                        다양한 화면 크기에서의 레이아웃 동작 확인
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid gap-4">
                                        <div className="p-4 bg-secondary rounded-lg">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Monitor className="w-4 h-4" />
                                                <span className="font-medium">Desktop Layout</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                1024px 이상에서 보이는 레이아웃
                                            </p>
                                        </div>

                                        <div className="p-4 bg-accent rounded-lg">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Smartphone className="w-4 h-4" />
                                                <span className="font-medium">Mobile Layout</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                768px 이하에서 보이는 레이아웃
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    {/* 다크 모드 안내 */}
                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sun className="w-5 h-5" />
                                <Moon className="w-5 h-5" />
                                다크 모드 테스트
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                우측 상단의 테마 토글 버튼을 클릭하여 라이트/다크 모드를 전환해보세요.
                                모든 컴포넌트가 자동으로 테마에 맞춰 색상이 변경됩니다.
                            </p>
                            <div className="flex gap-2">
                                <Badge variant="outline">next-themes</Badge>
                                <Badge variant="outline">shadcn/ui</Badge>
                                <Badge variant="outline">CSS Variables</Badge>
                                <Badge variant="outline">시스템 설정 연동</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}