"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import siteData from "@/data/site-structure.json"

export function MainNavigation() {
    const [isOpen, setIsOpen] = React.useState(false)

    // 솔루션 메뉴 데이터 구성
    const solutionsByCategory = {
        "먼데이닷컴": siteData.product_categories
            .find(cat => cat.id === "collaboration-productivity")
            ?.products.filter(p => p.category === "monday") || [],
        "Freshworks": siteData.product_categories
            .find(cat => cat.id === "customer-experience")
            ?.products.filter(p => p.category.startsWith("fresh")) || [],
        "기타 솔루션": [
            ...siteData.product_categories
                .find(cat => cat.id === "collaboration-productivity")
                ?.products.filter(p => p.category === "google-workspace") || [],
            ...siteData.product_categories
                .find(cat => cat.id === "it-infrastructure")
                ?.products || []
        ]
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                {/* 로고 */}
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold text-xl">We Do Soft</span>
                    </Link>
                </div>

                {/* 데스크톱 네비게이션 */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {/* 솔루션 메가메뉴 */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>솔루션</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                                    {Object.entries(solutionsByCategory).map(([category, products]) => (
                                        <div key={category} className="space-y-3">
                                            <h4 className="text-sm font-medium text-muted-foreground">
                                                {category}
                                            </h4>
                                            <div className="space-y-2">
                                                {products.map((product) => (
                                                    <NavigationMenuLink
                                                        key={product.name}
                                                        asChild
                                                    >
                                                        <Link
                                                            href={`/solutions/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className={cn(
                                                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            )}
                                                        >
                                                            <div className="text-sm font-medium leading-none">
                                                                {product.name}
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                {product.description}
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* 서비스 메뉴 */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>서비스</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                                    {siteData.services.map((service) => (
                                        <NavigationMenuLink key={service.id} asChild>
                                            <Link
                                                href={`/services/${service.id}`}
                                                className={cn(
                                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                )}
                                            >
                                                <div className="text-sm font-medium leading-none">
                                                    {service.title}
                                                </div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    {service.description}
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* 기타 메뉴 */}
                        <NavigationMenuItem>
                            <Link href="/pricing" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    가격
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/company" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    회사소개
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* 우측 버튼들 */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* 검색이나 기타 요소를 여기에 추가할 수 있습니다 */}
                    </div>
                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
                            <Link href="/contact">상담 신청</Link>
                        </Button>
                        <Button size="sm" asChild>
                            <Link href="/pricing">무료 체험</Link>
                        </Button>
                    </nav>
                </div>

                {/* 모바일 메뉴 */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">메뉴 토글</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <MobileNav onClose={() => setIsOpen(false)} />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

function MobileNav({ onClose }: { onClose: () => void }) {
    return (
        <div className="flex flex-col space-y-3">
            {/* 로고 */}
            <Link
                href="/"
                className="flex items-center space-x-2 pb-6"
                onClick={onClose}
            >
                <span className="font-bold text-xl">We Do Soft</span>
            </Link>

            {/* 솔루션 섹션 */}
            <div className="space-y-3">
                <h4 className="font-medium">솔루션</h4>
                <div className="space-y-2 pl-4">
                    {siteData.product_categories.map((category) =>
                        category.products.map((product) => (
                            <Link
                                key={product.name}
                                href={`/solutions/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                                onClick={onClose}
                            >
                                {product.name}
                            </Link>
                        ))
                    )}
                </div>
            </div>

            {/* 서비스 섹션 */}
            <div className="space-y-3">
                <h4 className="font-medium">서비스</h4>
                <div className="space-y-2 pl-4">
                    {siteData.services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                            onClick={onClose}
                        >
                            {service.title}
                        </Link>
                    ))}
                </div>
            </div>

            {/* 기타 메뉴 */}
            <div className="space-y-2">
                <Link
                    href="/pricing"
                    className="block py-2 font-medium hover:text-primary"
                    onClick={onClose}
                >
                    가격
                </Link>
                <Link
                    href="/company"
                    className="block py-2 font-medium hover:text-primary"
                    onClick={onClose}
                >
                    회사소개
                </Link>
                <Link
                    href="/contact"
                    className="block py-2 font-medium hover:text-primary"
                    onClick={onClose}
                >
                    상담 신청
                </Link>
            </div>
        </div>
    )
}