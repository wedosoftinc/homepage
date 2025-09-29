"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
    Bars3Icon as Menu,
    XMarkIcon as X,
    MagnifyingGlassIcon as Search,
    ChevronDownIcon as ChevronDown
} from "@heroicons/react/24/outline"

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
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useTheme } from "next-themes"

// JSON 데이터 import
import solutionsMenuData from "@/data/solutions-menu.json"

export function MainNavigation() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // 검색 핸들러 - 사이트 내 콘텐츠 검색
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            // 검색어에 따라 적절한 페이지로 이동
            const query = searchQuery.toLowerCase().trim()

            // 솔루션/제품 관련 검색 - 카테고리 페이지로 이동
            if (query.includes('freshdesk omni') || query.includes('옴니채널')) {
                window.location.href = '/solutions/customer-experience#freshdesk-omni'
            } else if (query.includes('freshdesk') || query.includes('고객지원') || query.includes('헬프데스크')) {
                window.location.href = '/solutions/customer-experience#freshdesk'
            } else if (query.includes('freshcaller') || query.includes('pbx') || query.includes('통화') || query.includes('전화')) {
                window.location.href = '/solutions/customer-experience#freshcaller'
            } else if (query.includes('freshchat') || query.includes('채팅') || query.includes('실시간')) {
                window.location.href = '/solutions/customer-experience#freshchat'
            } else if (query.includes('freddy') || query.includes('ai') || query.includes('인공지능')) {
                window.location.href = '/solutions/customer-experience#freddy-ai'
            } else if (query.includes('freshsales') || query.includes('crm') || query.includes('영업')) {
                window.location.href = '/solutions/customer-experience#freshsales'
            } else if (query.includes('freshservice') || query.includes('it서비스') || query.includes('itsm')) {
                window.location.href = '/solutions/infrastructure#freshservice'
            } else if (query.includes('splashtop') || query.includes('원격접속') || query.includes('리모트')) {
                window.location.href = '/solutions/infrastructure#splashtop'
            } else if (query.includes('google workspace') || query.includes('구글') || query.includes('워크스페이스')) {
                window.location.href = '/solutions/collaboration-productivity#google-workspace'
            } else if (query.includes('monday work') || query.includes('먼데이 워크') || query.includes('프로젝트 관리')) {
                window.location.href = '/solutions/collaboration-productivity#monday-work-management'
            } else if (query.includes('monday dev') || query.includes('먼데이 데브') || query.includes('개발팀')) {
                window.location.href = '/solutions/infrastructure#monday-dev'
            } else if (query.includes('monday sales') || query.includes('먼데이 세일즈') || query.includes('세일즈 crm')) {
                window.location.href = '/solutions/collaboration-productivity#monday-sales-crm'
            } else if (query.includes('monday') || query.includes('먼데이')) {
                window.location.href = '/solutions/collaboration-productivity'
            } else if (query.includes('고객 경험') || query.includes('고객 지원') || query.includes('freshworks')) {
                window.location.href = '/solutions/customer-experience'
            } else if (query.includes('협업') || query.includes('생산성') || query.includes('프로젝트')) {
                window.location.href = '/solutions/collaboration-productivity'
            } else if (query.includes('it 인프라') || query.includes('인프라') || query.includes('시스템 관리')) {
                window.location.href = '/solutions/infrastructure'
            } else if (query.includes('가격') || query.includes('요금') || query.includes('price') || query.includes('플랜') || query.includes('견적') || query.includes('맞춤')) {
                window.location.href = '/pricing'
            } else if (query.includes('상담') || query.includes('문의') || query.includes('contact')) {
                window.location.href = '/contact'
            } else if (query.includes('회사') || query.includes('소개') || query.includes('about')) {
                window.location.href = '/company'
            } else {
                // 기본 Google 사이트 검색
                window.open(`https://www.google.com/search?q=site:wedosoft.net ${query}`, '_blank')
            }
            setSearchQuery("")
        }
    }

    // 로고 렌더링 최적화: CSS로 테마별 로고 전환
    const logoComponent = mounted ? (
        <div className="relative h-8 md:h-10 w-auto flex items-center">
            <Image
                src="/logo-light.webp"
                alt="WeDoSoft"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto dark:hidden"
                style={{ height: "auto" }}
                priority
            />
            <Image
                src="/logo-dark.webp"
                alt="WeDoSoft"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto hidden dark:block"
                style={{ height: "auto" }}
                priority
            />
        </div>
    ) : (
        // SSR 시 기본 로고 (빈 공간 방지)
        <div className="h-8 md:h-10 w-[120] md:w-[140px] bg-muted animate-pulse rounded" />
    )

    // JSON 데이터를 기존 형식으로 변환
    const solutionsByCategory = React.useMemo(() => {
        const result: Record<string, Array<{name: string, href: string, description: string}>> = {}
        
        solutionsMenuData.categories.forEach(category => {
            result[category.name] = category.products.map(product => ({
                name: product.name,
                href: product.href,
                description: product.description
            }))
        })
        
        return result
    }, [])

    // 서비스 메뉴 구조 (원본 사이트 기준으로 간소화)
    const services = [
        {
            name: "컨설팅",
            href: "/services/consulting",
            description: "도입 전에 물어야 할 질문들을, 대신 생각해드립니다",
            icon: "🎯"
        },
        {
            name: "구축",
            href: "/services/implementation",
            description: "기술적인 설정은 우리 몫입니다",
            icon: "⚙️"
        },
        {
            name: "교육",
            href: "/services/training",
            description: "잘 도입했다면, 잘 쓰게 만들어야죠",
            icon: "📚"
        },
        {
            name: "운영지원",
            href: "/services/maintenance",
            description: "도입 이후에도 계속 곁에 있습니다",
            icon: "🤝"
        }
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* 로고 */}
                <div className="flex">
                    <Link href="/" className="flex items-center space-x-2">
                        {logoComponent}
                    </Link>
                </div>

                {/* 가운데 데스크톱 네비게이션 */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {/* 솔루션 메가메뉴 - 심플하고 확장 가능한 디자인 */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="h-10 px-4 py-2 text-base font-medium">솔루션</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[650px] p-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        {solutionsMenuData.categories.map((category) => (
                                            <div key={category.id} className="space-y-2">
                                                {/* 카테고리 헤더 - 깔끔하고 간단 */}
                                                <div className="bg-primary/5 border border-primary/10 rounded-lg p-3">
                                                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                                                        {category.name}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground leading-tight">
                                                        {category.description}
                                                    </p>
                                                </div>
                                                
                                                {/* 제품 리스트 - 유지보수 친화적 */}
                                                <div className="space-y-0.5">
                                                    {category.products.map((product) => (
                                                        <NavigationMenuLink key={product.name} asChild>
                                                            <Link
                                                                href={product.href}
                                                                className={cn(
                                                                    "group block select-none rounded-md px-2 py-2 text-sm leading-tight no-underline outline-none transition-all duration-150",
                                                                    "hover:bg-accent/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                                                    "border border-transparent hover:border-border/30"
                                                                )}
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="font-medium text-foreground text-sm group-hover:text-primary transition-colors truncate">
                                                                            {product.name}
                                                                        </div>
                                                                        <p className="text-sm text-muted-foreground leading-tight mt-0.5 truncate">
                                                                            {product.description}
                                                                        </p>
                                                                    </div>
                                                                    <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* 서비스 메가메뉴 */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="h-10 px-4 py-2 text-base font-medium">서비스</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[480px] p-4">
                                    <div className="mb-3">
                                        <div className="bg-primary/5 border border-primary/10 rounded-lg p-2.5">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                                                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
                                                    전문 서비스
                                                </h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-tight">
                                                도입부터 운영까지 25년 실무 경험
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {services.map((service) => (
                                            <NavigationMenuLink key={service.name} asChild>
                                                <Link
                                                    href={service.href}
                                                    className={cn(
                                                        "group block select-none rounded-md p-2.5 text-sm leading-tight no-underline outline-none transition-all duration-150",
                                                        "hover:bg-accent/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                                        "border border-transparent hover:border-border/30"
                                                    )}
                                                >
                                                    <div className="flex items-start space-x-2">
                                                        <div className="text-sm opacity-50 mt-0.5">
                                                            {service.icon}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                                                                {service.name}
                                                            </div>
                                                            <p className="text-sm text-muted-foreground leading-tight mt-0.5 line-clamp-2">
                                                                {service.description}
                                                            </p>
                                                        </div>
                                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>

                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* 기타 메뉴 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/pricing" className={cn(navigationMenuTriggerStyle(), "text-base font-medium")}>
                                맞춤 견적
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        {/* 블로그 메뉴 - 임시 숨김 */}
                        {/* <NavigationMenuItem>
                            <NavigationMenuLink href="/blog" className={cn(navigationMenuTriggerStyle(), "text-base font-medium")}>
                                블로그
                            </NavigationMenuLink>
                        </NavigationMenuItem> */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/company" className={cn(navigationMenuTriggerStyle(), "text-base font-medium")}>
                                회사소개
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* 우측 검색바 및 버튼들 - 검색 기능 임시 숨김 */}
                <div className="flex items-center space-x-2">
                    {/* 검색 기능 임시 숨김 - 추후 복원 예정 */}

                    {/* 상담신청 버튼 */}
                    <Button variant="default" size="sm" asChild className="hidden md:inline-flex">
                        <Link href="/contact">상담신청</Link>
                    </Button>

                    {/* 테마 토글 */}
                    <ThemeToggle />

                    {/* 모바일 메뉴 */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                aria-label="메뉴 열기"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">메뉴</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 max-w-[85vw] p-0 overflow-y-auto">
                            <SheetHeader className="border-b p-4 sm:p-6 sticky top-0 bg-background z-10">
                                <SheetTitle className="text-left flex items-center justify-between">
                                    {/* 왼쪽: 재미있는 문구 */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-muted-foreground">
                                            모든 비즈니스 툴이 여기에
                                        </span>
                                    </div>

                                    {/* 오른쪽: 액션 버튼들 */}
                                    <div className="flex items-center space-x-1">
                                        {/* 검색 버튼 - 임시 숨김 */}
                                        {/* <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => {
                                                const query = prompt("검색어를 입력하세요:")
                                                if (query) {
                                                    setSearchQuery(query)
                                                    handleSearch(new Event('submit') as any)
                                                }
                                            }}
                                            aria-label="검색"
                                            className="h-8 w-8"
                                        >
                                            <Search className="h-4 w-4" />
                                        </Button> */}

                                        {/* 닫기 버튼 */}
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setIsOpen(false)}
                                            aria-label="메뉴 닫기"
                                            className="h-8 w-8"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="px-4 sm:px-6 pb-6">
                                <MobileNav onClose={() => setIsOpen(false)} />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

function MobileNav({ onClose }: { onClose: () => void }) {
    const [expandedSection, setExpandedSection] = React.useState<string | null>(null)

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    // 서비스 메뉴 데이터 (데스크톱과 동일하게 동기화)
    const servicesByCategory = {
        "컨설팅 & 전략": [
            {
                name: "컨설팅",
                href: "/services/consulting",
                description: "도입 전에 물어야 할 질문들을, 대신 생각해드립니다"
            },
            {
                name: "구축",
                href: "/services/implementation",
                description: "기술적인 설정은 우리 몫입니다"
            }
        ],
        "교육 & 지원": [
            {
                name: "교육",
                href: "/services/training",
                description: "잘 도입했다면, 잘 쓰게 만들어야죠"
            },
            {
                name: "운영지원",
                href: "/services/maintenance",
                description: "도입 이후에도 계속 곁에 있습니다"
            }
        ]
    }

    return (
        <div className="flex flex-col py-4">
            {/* 모든 메뉴를 하나의 컨테이너로 통합하여 균등한 간격 적용 */}
            <div className="space-y-2">
                {/* 솔루션 섹션 */}
                <div>
                    <button
                        onClick={() => toggleSection('solutions')}
                        className="w-full flex items-center justify-between py-3 px-3 text-left font-semibold text-foreground hover:bg-accent/50 rounded-md transition-colors"
                        aria-expanded={expandedSection === 'solutions'}
                    >
                        <span>솔루션</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedSection === 'solutions' ? 'rotate-180' : ''}`} />
                    </button>

                    <div
                        className={`transition-all duration-300 ease-in-out ${expandedSection === 'solutions'
                            ? 'opacity-100 scale-y-100 max-h-screen'
                            : 'opacity-0 scale-y-0 max-h-0'
                            } origin-top overflow-hidden`}
                    >
                        <div className="space-y-3 pl-4 border-l-2 border-primary/20 pt-2 pb-2">
                            {solutionsMenuData.categories.map((category) => (
                                <div key={category.id} className="space-y-1">
                                    <h4 className="text-sm font-medium text-primary px-2 py-1 bg-primary/5 rounded-md">
                                        {category.name}
                                    </h4>
                                    <div className="space-y-0.5">
                                        {category.products.map((product) => (
                                            <Link
                                                key={product.name}
                                                href={product.href}
                                                className="block py-1.5 px-2 text-sm hover:bg-accent/50 rounded-md transition-colors"
                                                onClick={onClose}
                                            >
                                                <div className="font-medium text-foreground text-sm">{product.name}</div>
                                                <div className="text-sm text-muted-foreground leading-tight">{product.description}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 서비스 섹션 */}
                <div>
                    <button
                        onClick={() => toggleSection('services')}
                        className="w-full flex items-center justify-between py-3 px-3 text-left font-semibold text-foreground hover:bg-accent/50 rounded-md transition-colors"
                        aria-expanded={expandedSection === 'services'}
                    >
                        <span>서비스</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedSection === 'services' ? 'rotate-180' : ''}`} />
                    </button>

                    <div
                        className={`transition-all duration-300 ease-in-out ${expandedSection === 'services'
                            ? 'opacity-100 scale-y-100 max-h-screen'
                            : 'opacity-0 scale-y-0 max-h-0'
                            } origin-top overflow-hidden`}
                    >
                        <div className="space-y-3 pl-4 border-l-2 border-primary/20 pt-2 pb-2">
                            {Object.entries(servicesByCategory).map(([category, services]) => (
                                <div key={category} className="space-y-1">
                                    <h4 className="text-sm font-medium text-primary px-2 py-1 bg-primary/5 rounded-md">
                                        {category}
                                    </h4>
                                    <div className="space-y-0.5">
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="block py-1.5 px-2 text-sm hover:bg-accent/50 rounded-md transition-colors"
                                                onClick={onClose}
                                            >
                                                <div className="font-medium text-foreground text-sm">{service.name}</div>
                                                <div className="text-sm text-muted-foreground leading-tight">{service.description}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 맞춤 견적 메뉴 */}
                <Link
                    href="/pricing"
                    className="block py-3 px-3 font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                    onClick={onClose}
                >
                    맞춤 견적
                </Link>

                {/* 블로그 메뉴 - 임시 숨김 */}
                {/* <Link
                    href="/blog"
                    className="block py-3 px-3 font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                    onClick={onClose}
                >
                    블로그
                </Link> */}

                {/* 회사소개 메뉴 */}
                <Link
                    href="/company"
                    className="block py-3 px-3 font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                    onClick={onClose}
                >
                    회사소개
                </Link>
            </div>

            {/* CTA 버튼들 */}
            <div className="space-y-3 pt-4 border-t border-border/50">
                <Link
                    href="/contact"
                    className="block py-2 px-4 text-center text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors"
                    onClick={onClose}
                >
                    상담신청
                </Link>

                {/* 빠른 연락 버튼들 */}
                <div className="grid grid-cols-2 gap-2">
                    <button
                        onClick={() => {
                            window.location.href = 'tel:02-2135-3071'
                            onClose()
                        }}
                        className="py-2 px-3 text-sm font-medium text-foreground bg-accent hover:bg-accent/80 rounded-md transition-colors flex items-center justify-center gap-1"
                    >
                        📞 전화
                    </button>
                    <button
                        onClick={() => {
                            window.open('mailto:support@wedosoft.net')
                            onClose()
                        }}
                        className="py-2 px-3 text-sm font-medium text-foreground bg-accent hover:bg-accent/80 rounded-md transition-colors flex items-center justify-center gap-1"
                    >
                        ✉️ 메일
                    </button>
                </div>
            </div>
        </div>
    );
}