'use client'

import * as React from "react"
import Link from "next/link"
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
import { Menu, Phone, Zap, Database, Users } from "lucide-react"

const solutions = [
    {
        title: "고객 경험 & 세일즈 관리",
        href: "/solutions/customer-experience",
        description: "고객과의 모든 접점을 혁신하는 통합 지원 및 영업 솔루션",
        icon: Phone,
        products: [
            { name: "Freshdesk", href: "/products/freshdesk", description: "고객 지원 플랫폼" },
            { name: "Freshsales", href: "/products/freshsales", description: "CRM 솔루션" },
            { name: "Freshchat", href: "/products/freshchat", description: "실시간 채팅" },
            { name: "Freddy AI", href: "/products/freddy-ai", description: "AI 어시스턴트" },
        ]
    },
    {
        title: "협업 및 업무 생산성",
        href: "/solutions/productivity",
        description: "팀워크와 프로젝트 관리를 위한 올인원 생산성 플랫폼",
        icon: Zap,
        products: [
            { name: "Monday Work Management", href: "/products/monday-work", description: "프로젝트 관리" },
            { name: "Monday Dev", href: "/products/monday-dev", description: "개발팀 관리" },
            { name: "Monday Sales CRM", href: "/products/monday-sales", description: "세일즈 CRM" },
            { name: "Google Workspace", href: "/products/google-workspace", description: "협업 도구" },
        ]
    },
    {
        title: "IT 인프라 관리",
        href: "/solutions/infrastructure",
        description: "안정적 IT 운영과 효율적 원격 지원을 위한 스마트 인프라 솔루션",
        icon: Database,
        products: [
            { name: "Freshservice", href: "/products/freshservice", description: "IT 서비스 관리" },
            { name: "Splashtop", href: "/products/splashtop", description: "원격 접속 솔루션" },
        ]
    },
]

const services = [
    {
        title: "컨설팅 서비스",
        href: "/services/consulting",
        description: "디지털 전환을 위한 전문 컨설팅",
        icon: Users,
    },
    {
        title: "구축 & 구현",
        href: "/services/implementation",
        description: "솔루션 도입 및 구축 서비스",
        icon: Database,
    },
    {
        title: "교육 & 지원",
        href: "/services/support",
        description: "사용자 교육 및 기술 지원",
        icon: Phone,
    },
]

export function MainNavigation() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center">
                {/* 로고 */}
                <div className="mr-4 hidden md:flex">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden font-bold sm:inline-block text-xl">
                            We Do Soft
                        </span>
                    </Link>
                </div>

                {/* 데스크톱 네비게이션 */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {/* 솔루션 메가메뉴 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>솔루션</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-6 md:w-[500px] lg:w-[800px] lg:grid-cols-2">
                                        <div className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/solutions"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        비즈니스 솔루션
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        귀사의 디지털 혁신을 위한 최적의 SaaS 솔루션을 찾아보세요.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </div>
                                        <div className="grid gap-2">
                                            {solutions.map((solution) => (
                                                <ListItem
                                                    key={solution.title}
                                                    title={solution.title}
                                                    href={solution.href}
                                                    icon={solution.icon}
                                                >
                                                    {solution.description}
                                                </ListItem>
                                            ))}
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* 서비스 메가메뉴 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>서비스</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <div className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/services"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        전문 서비스
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        도입부터 운영까지, 완벽한 디지털 전환을 지원합니다.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </div>
                                        <div className="grid gap-2">
                                            {services.map((service) => (
                                                <ListItem
                                                    key={service.title}
                                                    title={service.title}
                                                    href={service.href}
                                                    icon={service.icon}
                                                >
                                                    {service.description}
                                                </ListItem>
                                            ))}
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* 일반 메뉴 */}
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
                </div>

                {/* 우측 버튼들 */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* 모바일 로고 */}
                        <Link className="flex items-center space-x-2 md:hidden" href="/">
                            <span className="font-bold">We Do Soft</span>
                        </Link>
                    </div>
                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
                            <Link href="/contact">
                                문의하기
                            </Link>
                        </Button>
                        <Button size="sm" asChild className="hidden md:inline-flex">
                            <Link href="/demo">
                                무료 체험
                            </Link>
                        </Button>

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
                                <MobileNav setIsOpen={setIsOpen} />
                            </SheetContent>
                        </Sheet>
                    </nav>
                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: React.ComponentType<any> }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center space-x-2">
                        {Icon && <Icon className="h-4 w-4" />}
                        <div className="text-sm font-medium leading-none">{title}</div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

function MobileNav({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
    return (
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-2">
                <h4 className="font-medium">솔루션</h4>
                {solutions.map((solution) => (
                    <Link
                        key={solution.href}
                        href={solution.href}
                        className="text-muted-foreground"
                        onClick={() => setIsOpen(false)}
                    >
                        {solution.title}
                    </Link>
                ))}
            </div>
            <div className="flex flex-col space-y-2 pt-6">
                <h4 className="font-medium">서비스</h4>
                {services.map((service) => (
                    <Link
                        key={service.href}
                        href={service.href}
                        className="text-muted-foreground"
                        onClick={() => setIsOpen(false)}
                    >
                        {service.title}
                    </Link>
                ))}
            </div>
            <div className="flex flex-col space-y-2 pt-6">
                <Link
                    href="/pricing"
                    className="text-muted-foreground"
                    onClick={() => setIsOpen(false)}
                >
                    가격
                </Link>
                <Link
                    href="/company"
                    className="text-muted-foreground"
                    onClick={() => setIsOpen(false)}
                >
                    회사소개
                </Link>
                <Link
                    href="/contact"
                    className="text-muted-foreground"
                    onClick={() => setIsOpen(false)}
                >
                    문의하기
                </Link>
            </div>
        </div>
    )
}