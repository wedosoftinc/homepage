import { MainNavigation } from "@/components/navigation/main-navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ProductsSection } from "@/components/sections/products-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CTASection } from "@/components/sections/cta-section"
import { Separator } from "@/components/ui/separator"

export const metadata = {
    title: "컴포넌트 갤러리 - We Do Soft",
    description: "We Do Soft 웹사이트의 모든 컴포넌트를 한눈에 확인하세요.",
}

const sections = [
    {
        id: "navigation",
        title: "네비게이션",
        description: "고정 헤더와 메가메뉴가 포함된 반응형 네비게이션 시스템",
        component: MainNavigation
    },
    {
        id: "hero",
        title: "히어로 섹션",
        description: "3D 효과, 그라디언트, 페이드아웃이 포함된 메인 히어로 섹션",
        component: HeroSection
    },
    {
        id: "products",
        title: "제품 소개",
        description: "4개 제품군별 제품 소개 및 기능 설명 섹션",
        component: ProductsSection
    },
    {
        id: "pricing",
        title: "가격 테이블",
        description: "4개 탭으로 구성된 제품별 가격 테이블 컴포넌트",
        component: PricingSection
    },
    {
        id: "cta",
        title: "CTA 섹션",
        description: "다양한 연락 방법이 포함된 행동 유도 섹션",
        component: CTASection
    }
]

export default function ComponentsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* 페이지 헤더 */}
            <div className="border-b bg-muted/40">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            컴포넌트 갤러리
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            We Do Soft 웹사이트의 모든 컴포넌트를 한눈에 확인하고 체험해보세요.
                            각 컴포넌트는 shadcn/ui 기반으로 구현되었으며, Linear.app 디자인 시스템을 적용했습니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* 컴포넌트 섹션들 */}
            <div className="container mx-auto px-4 py-8">
                <div className="space-y-16">
                    {sections.map((section, index) => {
                        const Component = section.component
                        return (
                            <div key={section.id} className="space-y-8">
                                {/* 섹션 제목 */}
                                <div className="text-center space-y-4">
                                    <div className="flex items-center justify-center space-x-4">
                                        <Separator className="flex-1" />
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm font-medium text-muted-foreground">
                                                {index + 1}.
                                            </span>
                                            <h2 className="text-2xl font-bold tracking-tight">
                                                {section.title}
                                            </h2>
                                        </div>
                                        <Separator className="flex-1" />
                                    </div>
                                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                                        {section.description}
                                    </p>
                                </div>

                                {/* 컴포넌트 렌더링 */}
                                <div className="relative">
                                    {/* 컴포넌트 배경 */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-muted/20 via-transparent to-muted/20 rounded-lg" />

                                    {/* 실제 컴포넌트 */}
                                    <div className="relative">
                                        <Component />
                                    </div>
                                </div>

                                {/* 구분선 (마지막 섹션 제외) */}
                                {index < sections.length - 1 && (
                                    <div className="pt-8">
                                        <Separator />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* 페이지 푸터 */}
            <div className="border-t bg-muted/40 mt-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center space-y-4">
                        <h3 className="text-lg font-semibold">
                            더 많은 정보가 필요하신가요?
                        </h3>
                        <p className="text-muted-foreground">
                            각 컴포넌트의 소스 코드는 TypeScript와 Tailwind CSS로 구현되었습니다.
                            shadcn/ui 컴포넌트 라이브러리를 기반으로 하여 일관성 있고 접근성이 뛰어난 UI를 제공합니다.
                        </p>
                        <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                            <span>• React 18+</span>
                            <span>• Next.js 14+</span>
                            <span>• shadcn/ui</span>
                            <span>• Tailwind CSS</span>
                            <span>• TypeScript</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}