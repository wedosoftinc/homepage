"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 공통 컴포넌트 임포트
import { PageHeader } from "@/components/common/page-header"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { ContactForm } from "@/components/common/contact-form"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import { ErrorMessage } from "@/components/common/error-message"

// 아이콘 임포트
import { Component, Palette, Code, Eye, ArrowRight, CheckCircle } from "lucide-react"

// 테마 토글 임포트
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function ComponentsDemoPage() {
    const [activeDemo, setActiveDemo] = useState<string | null>(null)
    const [showError, setShowError] = useState(false)

    const components = [
        {
            id: "page-header",
            name: "PageHeader",
            description: "페이지의 제목과 설명을 표시하는 헤더 컴포넌트",
            category: "Layout",
            features: ["반응형 디자인", "커스텀 제목/설명", "일관된 스타일링"]
        },
        {
            id: "breadcrumb",
            name: "Breadcrumb",
            description: "사용자의 현재 위치를 표시하는 네비게이션 컴포넌트",
            category: "Navigation",
            features: ["홈 아이콘", "링크 지원", "접근성 준수"]
        },
        {
            id: "contact-form",
            name: "ContactForm",
            description: "완전한 연락처 폼과 연락 정보를 포함하는 컴포넌트",
            category: "Forms",
            features: ["폼 유효성 검사", "연락처 정보", "운영시간 표시"]
        },
        {
            id: "loading-spinner",
            name: "LoadingSpinner",
            description: "로딩 상태를 표시하는 스피너 컴포넌트",
            category: "Feedback",
            features: ["3가지 크기", "접근성 지원", "커스텀 스타일"]
        },
        {
            id: "error-message",
            name: "ErrorMessage",
            description: "에러 상태를 표시하고 복구 옵션을 제공하는 컴포넌트",
            category: "Feedback",
            features: ["재시도 버튼", "홈 이동", "아이콘 표시"]
        }
    ]

    const categories = ["All", "Layout", "Navigation", "Forms", "Feedback"]
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredComponents = selectedCategory === "All"
        ? components
        : components.filter(comp => comp.category === selectedCategory)

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 py-8">
                {/* 헤더 */}
                <div className="text-center mb-12 relative">
                    {/* 다크모드 토글 - 우상단 */}
                    <div className="absolute top-0 right-0">
                        <ThemeToggle />
                    </div>

                    <div className="flex items-center justify-center mb-4">
                        <Component className="h-8 w-8 text-primary mr-3" />
                        <h1 className="text-4xl font-bold">공통 컴포넌트 라이브러리</h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        위두소프트 홈페이지에서 사용되는 재사용 가능한 공통 컴포넌트들을 확인해보세요
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <Badge variant="secondary">
                            <Palette className="h-3 w-3 mr-1" />
                            shadcn/ui 기반
                        </Badge>
                        <Badge variant="secondary">
                            <Code className="h-3 w-3 mr-1" />
                            TypeScript
                        </Badge>
                        <Badge variant="secondary">
                            <Eye className="h-3 w-3 mr-1" />
                            반응형
                        </Badge>
                    </div>
                </div>

                {/* 카테고리 필터 */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* 컴포넌트 그리드 */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {filteredComponents.map((component) => (
                        <Card key={component.id} className="h-full">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg">{component.name}</CardTitle>
                                    <Badge variant="outline">{component.category}</Badge>
                                </div>
                                <CardDescription>{component.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-medium text-sm mb-2">주요 기능:</h4>
                                        <ul className="space-y-1">
                                            {component.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-sm text-muted-foreground">
                                                    <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button
                                        className="w-full"
                                        onClick={() => setActiveDemo(component.id)}
                                    >
                                        데모 보기
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Separator className="my-12" />

                {/* 라이브 데모 섹션 */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">라이브 데모</h2>
                        <p className="text-muted-foreground">
                            실제로 동작하는 컴포넌트들을 확인해보세요
                        </p>
                    </div>

                    <Tabs value={activeDemo || "page-header"} onValueChange={setActiveDemo} className="w-full">
                        <TabsList className="grid w-full grid-cols-5">
                            <TabsTrigger value="page-header">PageHeader</TabsTrigger>
                            <TabsTrigger value="breadcrumb">Breadcrumb</TabsTrigger>
                            <TabsTrigger value="contact-form">ContactForm</TabsTrigger>
                            <TabsTrigger value="loading-spinner">LoadingSpinner</TabsTrigger>
                            <TabsTrigger value="error-message">ErrorMessage</TabsTrigger>
                        </TabsList>

                        <TabsContent value="page-header" className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>PageHeader 컴포넌트</CardTitle>
                                    <CardDescription>
                                        페이지의 제목과 설명을 일관성 있게 표시합니다
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="border rounded-lg p-6">
                                        <PageHeader
                                            title="솔루션 페이지"
                                            description="글로벌 SaaS 솔루션으로 비즈니스 혁신을 경험하세요"
                                        />
                                    </div>
                                    <div className="border rounded-lg p-6">
                                        <PageHeader
                                            title="서비스 안내"
                                            description="25년 경험의 전문 컨설팅부터 완전한 구축까지"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="breadcrumb" className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Breadcrumb 컴포넌트</CardTitle>
                                    <CardDescription>
                                        사용자의 현재 위치를 명확하게 표시합니다
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="border rounded-lg p-6">
                                        <Breadcrumb
                                            items={[
                                                { title: "솔루션", href: "/solutions" },
                                                { title: "고객 경험 관리", href: "/solutions/cx" },
                                                { title: "Freshdesk" }
                                            ]}
                                        />
                                    </div>
                                    <div className="border rounded-lg p-6">
                                        <Breadcrumb
                                            items={[
                                                { title: "회사 소개" }
                                            ]}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="contact-form" className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>ContactForm 컴포넌트</CardTitle>
                                    <CardDescription>
                                        완전한 연락처 폼과 정보를 제공합니다
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="border rounded-lg p-6">
                                        <ContactForm
                                            title="데모 문의"
                                            description="컴포넌트 데모를 위한 문의 폼입니다"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="loading-spinner" className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>LoadingSpinner 컴포넌트</CardTitle>
                                    <CardDescription>
                                        다양한 크기의 로딩 스피너를 제공합니다
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="border rounded-lg p-6">
                                        <div className="flex items-center gap-8">
                                            <div className="text-center">
                                                <LoadingSpinner size="sm" />
                                                <p className="text-sm mt-2 text-muted-foreground">Small</p>
                                            </div>
                                            <div className="text-center">
                                                <LoadingSpinner size="md" />
                                                <p className="text-sm mt-2 text-muted-foreground">Medium</p>
                                            </div>
                                            <div className="text-center">
                                                <LoadingSpinner size="lg" />
                                                <p className="text-sm mt-2 text-muted-foreground">Large</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="error-message" className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>ErrorMessage 컴포넌트</CardTitle>
                                    <CardDescription>
                                        에러 상황을 표시하고 복구 옵션을 제공합니다
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="border rounded-lg p-6">
                                        <div className="space-y-4">
                                            <Button
                                                variant="destructive"
                                                onClick={() => setShowError(!showError)}
                                            >
                                                {showError ? "에러 숨기기" : "에러 표시하기"}
                                            </Button>
                                            {showError && (
                                                <ErrorMessage
                                                    title="데모 에러"
                                                    message="이것은 데모용 에러 메시지입니다. 실제 에러가 아닙니다."
                                                    showRetry={true}
                                                    showHome={true}
                                                    onRetry={() => {
                                                        console.log("재시도 클릭")
                                                        setShowError(false)
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* 사용법 가이드 */}
                <Separator className="my-12" />

                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">사용법</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        모든 컴포넌트는 <code className="bg-muted px-2 py-1 rounded">@/components/common</code>에서
                        임포트할 수 있으며, TypeScript 인터페이스와 함께 제공됩니다.
                    </p>
                    <div className="bg-muted p-4 rounded-lg text-left max-w-2xl mx-auto">
                        <code className="text-sm">
                            {`import { PageHeader, Breadcrumb, ContactForm } from "@/components/common"`}
                        </code>
                    </div>
                </div>
            </div>
        </div>
    )
}