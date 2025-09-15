"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search, ChevronDown } from "lucide-react"

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

            // 솔루션/제품 관련 검색
            if (query.includes('freshdesk') || query.includes('고객지원') || query.includes('헬프데스크')) {
                window.location.href = '/solutions/freshdesk'
            } else if (query.includes('freshsales') || query.includes('crm') || query.includes('세일즈')) {
                window.location.href = '/solutions/freshsales'
            } else if (query.includes('freshchat') || query.includes('채팅') || query.includes('실시간')) {
                window.location.href = '/solutions/freshchat'
            } else if (query.includes('google workspace') || query.includes('구글') || query.includes('워크스페이스')) {
                window.location.href = '/solutions/google-workspace'
            } else if (query.includes('monday') || query.includes('먼데이') || query.includes('프로젝트')) {
                window.location.href = '/solutions/monday'
            } else if (query.includes('가격') || query.includes('요금') || query.includes('price') || query.includes('플랜')) {
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
        <div className="relative h-10 w-auto">
            <Image
                src="/logo-light.webp"
                alt="WeDoSoft"
                width={140}
                height={40}
                className="h-10 w-auto dark:hidden"
                priority
            />
            <Image
                src="/logo-dark.webp"
                alt="WeDoSoft"
                width={140}
                height={40}
                className="h-10 w-auto hidden dark:block"
                priority
            />
        </div>
    ) : (
        // SSR 시 기본 로고 (빈 공간 방지)
        <div className="h-10 w-[140px] bg-muted animate-pulse rounded" />
    )

    // Linear.app 스타일 적용한 3컬럼 솔루션 메뉴 (비즈니스 카테고리 보존)
    const solutionsByCategory = {
        "고객 경험 & 세일즈": [
            {
                name: "Freshdesk",
                href: "/freshdesk/",
                description: "통합 고객지원 플랫폼"
            },
            {
                name: "Freshsales",
                href: "/freshsales/",
                description: "스마트 CRM 솔루션"
            },
            {
                name: "Freshchat",
                href: "/freshchat/",
                description: "실시간 고객 상담"
            },
            {
                name: "Freddy AI",
                href: "/freddy-ai/",
                description: "AI 기반 업무 자동화"
            }
        ],
        "협업 & 생산성": [
            {
                name: "Google Workspace",
                href: "/google-workspace/",
                description: "클라우드 협업 도구"
            },
            {
                name: "Monday.com",
                href: "/monday/",
                description: "프로젝트 관리 플랫폼"
            },
            {
                name: "Monday Dev",
                href: "/monday-dev/",
                description: "개발팀 전용 워크플로우"
            },
            {
                name: "Monday Sales CRM",
                href: "/monday-sales/",
                description: "세일즈 파이프라인 관리"
            }
        ],
        "IT 인프라": [
            {
                name: "Splashtop",
                href: "/splashtop/",
                description: "원격 접속 솔루션"
            },
            {
                name: "Freshservice",
                href: "/freshservice/",
                description: "IT 서비스 관리"
            }
        ]
    }

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
                        {/* 솔루션 메가메뉴 */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="h-10 px-4 py-2">솔루션</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[650px] p-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        {Object.entries(solutionsByCategory).map(([category, products]) => (
                                            <div key={category} className="space-y-2">
                                                {/* 범주 헤더 - 배경색과 아이콘으로 구분 */}
                                                <div className="bg-primary/5 border border-primary/10 rounded-lg p-2.5">
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                                                        <h4 className="text-xs font-semibold text-primary uppercase tracking-wide">
                                                            {category}
                                                        </h4>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground leading-tight">
                                                        {category === "고객 경험 & 세일즈" && "고객 지원부터 영업까지"}
                                                        {category === "협업 & 생산성" && "팀워크와 효율성 극대화"}
                                                        {category === "IT 인프라" && "안전하고 유연한 IT 환경"}
                                                    </p>
                                                </div>
                                                {/* 제품 리스트 - 컴팩트한 스타일 */}
                                                <div className="space-y-0.5">
                                                    {products.map((product) => (
                                                        <NavigationMenuLink
                                                            key={product.name}
                                                            asChild
                                                        >
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
                                                                        <div className="font-medium text-foreground text-xs group-hover:text-primary transition-colors truncate">
                                                                            {product.name}
                                                                        </div>
                                                                        <p className="text-xs text-muted-foreground leading-tight mt-0.5 truncate">
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
                                    <div className="mt-3 pt-3 border-t border-border/20">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-muted-foreground">
                                                <span className="inline-flex items-center space-x-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                    <span className="font-medium text-foreground">새소식:</span>
                                                    <span>Freshworks 파트너 프로그램 갱신</span>
                                                </span>
                                            </div>
                                            <Link
                                                href="/solutions"
                                                className={cn(
                                                    "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md",
                                                    "bg-primary text-primary-foreground hover:bg-primary/90",
                                                    "transition-colors duration-200"
                                                )}
                                            >
                                                전체 보기
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* 서비스 메가메뉴 */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="h-10 px-4 py-2">서비스</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[480px] p-4">
                                    <div className="mb-3">
                                        <div className="bg-primary/5 border border-primary/10 rounded-lg p-2.5">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                                                <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
                                                    전문 서비스
                                                </h3>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-tight">
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
                                                            <div className="font-medium text-foreground text-xs group-hover:text-primary transition-colors">
                                                                {service.name}
                                                            </div>
                                                            <p className="text-xs text-muted-foreground leading-tight mt-0.5 line-clamp-2">
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
                                    <div className="mt-3 pt-3 border-t border-border/20">
                                        <Link
                                            href="/services"
                                            className={cn(
                                                "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md",
                                                "bg-primary text-primary-foreground hover:bg-primary/90",
                                                "transition-colors duration-200"
                                            )}
                                        >
                                            전체 보기
                                        </Link>
                                    </div>
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
                            <NavigationMenuLink href="/blog" className={navigationMenuTriggerStyle()}>
                                블로그
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/company" className={navigationMenuTriggerStyle()}>
                                회사소개
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* 우측 검색바 및 버튼들 */}
                <div className="flex items-center space-x-2">
                    {/* 모바일 검색 버튼 */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => {
                            const query = prompt("검색어를 입력하세요:")
                            if (query) {
                                setSearchQuery(query)
                                handleSearch(new Event('submit') as any)
                            }
                        }}
                        aria-label="검색"
                    >
                        <Search className="h-4 w-4" />
                    </Button>

                    {/* 데스크톱 검색바 */}
                    <form onSubmit={handleSearch} className="relative hidden lg:flex">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="사이트 검색..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-48 pl-10 bg-background/50 border-border/50 h-9"
                        />
                    </form>

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
                                        {/* 검색 버튼 */}
                                        <Button
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
                                        </Button>

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

    // 솔루션 메뉴 데이터 (데스크톱과 동일)
    const solutionsByCategory = {
        "고객 경험 & 세일즈": [
            {
                name: "Freshdesk",
                href: "/freshdesk/",
                description: "통합 고객지원 플랫폼"
            },
            {
                name: "Freshsales",
                href: "/freshsales/",
                description: "스마트 CRM 솔루션"
            },
            {
                name: "Freshchat",
                href: "/freshchat/",
                description: "실시간 고객 상담"
            },
            {
                name: "Freddy AI",
                href: "/freddy-ai/",
                description: "AI 기반 업무 자동화"
            }
        ],
        "협업 & 생산성": [
            {
                name: "Google Workspace",
                href: "/google-workspace/",
                description: "클라우드 협업 도구"
            },
            {
                name: "Monday Work Management",
                href: "/monday-work-management-2/",
                description: "프로젝트 관리 플랫폼"
            },
            {
                name: "Monday Dev",
                href: "/monday-dev/",
                description: "개발팀 협업 도구"
            },
            {
                name: "Monday Sales CRM",
                href: "/monday-sales-crm/",
                description: "영업팀 관리 도구"
            }
        ],
        "IT 인프라": [
            {
                name: "Freshservice",
                href: "/freshservice/",
                description: "IT 서비스 관리"
            },
            {
                name: "Splashtop",
                href: "/splashtop/",
                description: "원격 접속 솔루션"
            }
        ]
    }

    const servicesByCategory = {
        "컨설팅 & 전략": [
            {
                name: "컨설팅",
                href: "/services/consulting",
                description: "도입 전 전략 수립"
            },
            {
                name: "구축 & 구현",
                href: "/services/implementation",
                description: "기술적 설정 및 구축"
            }
        ],
        "교육 & 지원": [
            {
                name: "교육 & 트레이닝",
                href: "/services/training",
                description: "사용자 교육 프로그램"
            },
            {
                name: "운영 지원",
                href: "/services/maintenance",
                description: "지속적인 운영 지원"
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
                            {Object.entries(solutionsByCategory).map(([category, products]) => (
                                <div key={category} className="space-y-1">
                                    <h4 className="text-xs font-medium text-primary px-2 py-1 bg-primary/5 rounded-md">
                                        {category}
                                    </h4>
                                    <div className="space-y-0.5">
                                        {products.map((product) => (
                                            <Link
                                                key={product.name}
                                                href={product.href}
                                                className="block py-1.5 px-2 text-sm hover:bg-accent/50 rounded-md transition-colors"
                                                onClick={onClose}
                                            >
                                                <div className="font-medium text-foreground text-xs">{product.name}</div>
                                                <div className="text-xs text-muted-foreground leading-tight">{product.description}</div>
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
                                    <h4 className="text-xs font-medium text-primary px-2 py-1 bg-primary/5 rounded-md">
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
                                                <div className="font-medium text-foreground text-xs">{service.name}</div>
                                                <div className="text-xs text-muted-foreground leading-tight">{service.description}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 가격 메뉴 */}
                <Link
                    href="/pricing"
                    className="block py-3 px-3 font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                    onClick={onClose}
                >
                    가격
                </Link>

                {/* 블로그 메뉴 */}
                <Link
                    href="/blog"
                    className="block py-3 px-3 font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                    onClick={onClose}
                >
                    블로그
                </Link>

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