"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    Bars3Icon as Menu,
    XMarkIcon as X,
    MagnifyingGlassIcon as Search,
    HomeIcon,
    BookOpenIcon,
    ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { SearchDialog } from "@/components/search/search-dialog"

// Freshworks 제품 목록 (문서가 있는 제품만)
const FRESHWORKS_PRODUCTS = [
    { id: 'freshdesk', name: 'Freshdesk', description: '고객 지원 솔루션' },
    { id: 'freshservice', name: 'Freshservice', description: 'IT 서비스 관리' },
    { id: 'freshsales', name: 'Freshsales', description: 'AI 기반 CRM' },
    { id: 'freshchat', name: 'Freshchat', description: '실시간 채팅' },
    { id: 'freddy-ai', name: 'Freddy AI', description: 'GPT 기반 자동화' },
    { id: 'freshcaller', name: 'Freshcaller', description: '클라우드 PBX' },
]

export function DocsNavigation() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState('')
    const [searchOpen, setSearchOpen] = React.useState(false)
    const pathname = usePathname()

    // 현재 선택된 제품 파악
    const currentProduct = FRESHWORKS_PRODUCTS.find(p =>
        pathname.includes(`/docs/${p.id}`)
    )

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-7xl flex h-16 items-center gap-4">
                {/* 왼쪽: 로고 */}
                <Link href="/" className="flex items-center flex-shrink-0">
                    <Image
                        src="/logo-light.webp"
                        alt="WeDoSoft"
                        width={140}
                        height={40}
                        className="h-7 md:h-8 w-auto dark:hidden"
                        priority
                    />
                    <Image
                        src="/logo-dark.webp"
                        alt="WeDoSoft"
                        width={140}
                        height={40}
                        className="h-7 md:h-8 w-auto hidden dark:block"
                        priority
                    />
                </Link>

                {/* 중앙: 검색창 */}
                <div className="hidden md:flex flex-1 max-w-md mx-auto">
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="relative w-full"
                    >
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                        <div className="w-full rounded-lg border bg-background/50 py-2 pl-10 pr-4 text-sm text-left text-muted-foreground hover:border-primary hover:bg-background transition-all cursor-pointer">
                            문서 검색...
                        </div>
                    </button>
                </div>

                {/* 우측: Family 네비게이션 + 테마 토글 */}
                <nav className="hidden md:flex items-center gap-4 flex-shrink-0">
                    <Link
                        href="/docs"
                        className={cn(
                            "flex items-center gap-1.5 text-sm font-medium transition-colors",
                            pathname === '/docs' || pathname.startsWith('/docs/')
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <BookOpenIcon className="h-4 w-4" />
                        <span>문서</span>
                    </Link>

                    <Link
                        href="/blog"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <span>블로그</span>
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <HomeIcon className="h-4 w-4" />
                        <span>홈</span>
                    </Link>

                    <a
                        href="https://support.wedosoft.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ChatBubbleLeftRightIcon className="h-4 w-4" />
                        <span>고객센터</span>
                    </a>

                    <div className="h-4 w-px bg-border" />

                    <ThemeToggle />
                </nav>

                {/* 모바일: 검색 + 메뉴 */}
                <div className="flex md:hidden items-center gap-2 ml-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                        aria-label="검색"
                        onClick={() => setSearchOpen(true)}
                    >
                        <Search className="h-5 w-5" />
                    </Button>

                    <ThemeToggle />

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9"
                                aria-label="메뉴 열기"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72 max-w-[65vw] p-0 overflow-y-auto">
                            <SheetHeader className="border-b p-4 sm:p-6">
                                <SheetTitle className="text-left flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <BookOpenIcon className="h-5 w-5 text-primary" />
                                        <span className="text-sm font-medium">문서센터</span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsOpen(false)}
                                        className="h-8 w-8"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="px-4 sm:px-6 pb-6">
                                <MobileDocsNav
                                    onClose={() => setIsOpen(false)}
                                    currentProduct={currentProduct?.id}
                                    onSearchClick={() => setSearchOpen(true)}
                                />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Search Dialog */}
            <SearchDialog
                open={searchOpen}
                onOpenChange={setSearchOpen}
                productFilter={currentProduct?.id}
            />
        </header>
    )
}

function MobileDocsNav({ onClose, currentProduct, onSearchClick }: { onClose: () => void; currentProduct?: string; onSearchClick: () => void }) {
    return (
        <div className="flex flex-col py-4 space-y-2">
            {/* 검색 */}
            <div className="px-3 pb-2">
                <button
                    onClick={() => {
                        onSearchClick()
                        onClose()
                    }}
                    className="relative w-full"
                >
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                    <div className="w-full rounded-lg border bg-background py-2 pl-10 pr-4 text-sm text-left text-muted-foreground hover:border-primary transition-all cursor-pointer">
                        문서 검색...
                    </div>
                </button>
            </div>

            {/* Family 사이트 링크 */}
            <Link
                href="/docs"
                className="flex items-center gap-2 py-3 px-3 font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                onClick={onClose}
            >
                <BookOpenIcon className="h-5 w-5" />
                문서
            </Link>

            <Link
                href="/blog"
                className="block py-3 px-3 font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                onClick={onClose}
            >
                블로그
            </Link>

            <Link
                href="/"
                className="flex items-center gap-2 py-3 px-3 font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                onClick={onClose}
            >
                <HomeIcon className="h-5 w-5" />
                홈
            </Link>

            <a
                href="https://support.wedosoft.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-3 font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                onClick={onClose}
            >
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                고객센터
            </a>

            <div className="h-px bg-border my-2" />

            {/* Freshworks 제품 */}
            <div className="px-3 pt-2">
                <p className="text-xs font-semibold text-muted-foreground mb-2">FRESHWORKS 제품</p>
                <div className="space-y-1">
                    {FRESHWORKS_PRODUCTS.map((product) => (
                        <Link
                            key={product.id}
                            href={`/docs/${product.id}`}
                            className={cn(
                                "block py-2 px-3 rounded-md transition-colors",
                                currentProduct === product.id
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "hover:bg-accent/50"
                            )}
                            onClick={onClose}
                        >
                            <div className="font-medium text-sm">{product.name}</div>
                            <div className="text-xs text-muted-foreground">{product.description}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
