"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useTheme } from "next-themes"

export function MainNavigation() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // 현재 테마에 따라 로고 결정 (마운트 전에는 light 로고 사용)
    const currentTheme = mounted ? (resolvedTheme || theme) : 'light'
    const logoSrc = currentTheme === 'dark' ? '/logo-dark.png' : '/logo-light.png'

    // 실제 메뉴 구조에 맞게 솔루션 메뉴 데이터 구성
    const solutionsByCategory = {
        "고객 경험 & 세일즈 관리": [
            { name: "Freshdesk", href: "/solutions/customer-experience/freshdesk" },
            { name: "Freshdesk Omni", href: "/solutions/customer-experience/freshdesk-omni" },
            { name: "Freshchat", href: "/solutions/customer-experience/freshchat" },
            { name: "Freddy AI", href: "/solutions/customer-experience/freddy-ai" },
            { name: "Freshsales", href: "/solutions/customer-experience/freshsales" },
            { name: "Monday Sales CRM", href: "/solutions/customer-experience/monday-sales-crm" }
        ],
        "협업 & 업무 생산성": [
            { name: "Monday Work Management", href: "/solutions/collaboration/monday-work-management" },
            { name: "Monday Dev", href: "/solutions/collaboration/monday-dev" },
            { name: "Monday Service", href: "/solutions/collaboration/monday-service" },
            { name: "Google Workspace", href: "/solutions/collaboration/google-workspace" }
        ],
        "IT 인프라 관리": [
            { name: "Freshservice", href: "/solutions/it-infrastructure/freshservice" },
            { name: "Splashtop", href: "/solutions/it-infrastructure/splashtop" }
        ]
    }

    // 서비스 메뉴 구조
    const services = [
        { name: "컨설팅", href: "/services/consulting" },
        { name: "구축", href: "/services/implementation" },
        { name: "교육", href: "/services/training" },
        { name: "유지보수", href: "/services/maintenance" }
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                {/* 로고 */}
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Image
                            src={logoSrc}
                            alt="WeDoSoft"
                            width={140}
                            height={40}
                            className="h-10 w-auto object-contain transition-all duration-200"
                            priority
                        />
                    </Link>
                </div>

                {/* 데스크톱 네비게이션 */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {/* 솔루션 메가메뉴 */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>솔루션</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid grid-cols-3 gap-6 p-6 w-[800px]">
                                    {Object.entries(solutionsByCategory).map(([category, products]) => (
                                        <div key={category} className="space-y-3">
                                            <h4 className="text-sm font-semibold text-foreground border-b border-border pb-2">
                                                {category}
                                            </h4>
                                            <div className="space-y-1">
                                                {products.map((product) => (
                                                    <NavigationMenuLink
                                                        key={product.name}
                                                        asChild
                                                    >
                                                        <Link
                                                            href={product.href}
                                                            className={cn(
                                                                "block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            )}
                                                        >
                                                            {product.name}
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
                                <div className="grid grid-cols-4 gap-4 p-6 w-[600px]">
                                    {services.map((service) => (
                                        <NavigationMenuLink key={service.name} asChild>
                                            <Link
                                                href={service.href}
                                                className={cn(
                                                    "block select-none rounded-md px-3 py-4 text-center text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                )}
                                            >
                                                {service.name}
                                            </Link>
                                        </NavigationMenuLink>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* 기타 메뉴 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/pricing" className={navigationMenuTriggerStyle()}>
                                가격
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/company" className={navigationMenuTriggerStyle()}>
                                회사소개
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* 우측 버튼들 */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* 검색이나 기타 요소를 여기에 추가할 수 있습니다 */}
                    </div>
                    <nav className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
                            <Link href="/components-demo">컴포넌트</Link>
                        </Button>
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
                        <SheetHeader>
                            <SheetTitle className="flex items-center">
                                <Image
                                    src={logoSrc}
                                    alt="WeDoSoft"
                                    width={120}
                                    height={35}
                                    className="h-8 w-auto object-contain transition-all duration-200"
                                />
                            </SheetTitle>
                        </SheetHeader>
                        <MobileNav onClose={() => setIsOpen(false)} />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

function MobileNav({ onClose }: { onClose: () => void }) {
    // 동일한 메뉴 구조 사용
    const solutionsByCategory = {
        "고객 경험 & 세일즈 관리": [
            { name: "Freshdesk", href: "/solutions/customer-experience/freshdesk" },
            { name: "Freshdesk Omni", href: "/solutions/customer-experience/freshdesk-omni" },
            { name: "Freshchat", href: "/solutions/customer-experience/freshchat" },
            { name: "Freddy AI", href: "/solutions/customer-experience/freddy-ai" },
            { name: "Freshsales", href: "/solutions/customer-experience/freshsales" },
            { name: "Monday Sales CRM", href: "/solutions/customer-experience/monday-sales-crm" }
        ],
        "협업 & 업무 생산성": [
            { name: "Monday Work Management", href: "/solutions/collaboration/monday-work-management" },
            { name: "Monday Dev", href: "/solutions/collaboration/monday-dev" },
            { name: "Monday Service", href: "/solutions/collaboration/monday-service" },
            { name: "Google Workspace", href: "/solutions/collaboration/google-workspace" }
        ],
        "IT 인프라 관리": [
            { name: "Freshservice", href: "/solutions/it-infrastructure/freshservice" },
            { name: "Splashtop", href: "/solutions/it-infrastructure/splashtop" }
        ]
    }

    const services = [
        { name: "컨설팅", href: "/services/consulting" },
        { name: "구축", href: "/services/implementation" },
        { name: "교육", href: "/services/training" },
        { name: "유지보수", href: "/services/maintenance" }
    ]

    return (
        <div className="flex flex-col space-y-3">
            {/* 솔루션 섹션 */}
            <div className="space-y-3">
                <h4 className="font-medium">솔루션</h4>
                {Object.entries(solutionsByCategory).map(([category, products]) => (
                    <div key={category} className="space-y-2 pl-4">
                        <h5 className="text-sm font-medium text-muted-foreground">{category}</h5>
                        <div className="space-y-1 pl-2">
                            {products.map((product) => (
                                <Link
                                    key={product.name}
                                    href={product.href}
                                    className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                                    onClick={onClose}
                                >
                                    {product.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* 서비스 섹션 */}
            <div className="space-y-3">
                <h4 className="font-medium">서비스</h4>
                <div className="space-y-2 pl-4">
                    {services.map((service) => (
                        <Link
                            key={service.name}
                            href={service.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                            onClick={onClose}
                        >
                            {service.name}
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
                <Link
                    href="/components-demo"
                    className="block py-2 font-medium hover:text-primary"
                    onClick={onClose}
                >
                    컴포넌트 데모
                </Link>
            </div>
        </div>
    );
}