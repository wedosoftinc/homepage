'use client'

import Link from "next/link"
import { ChevronUp } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-secondary/80 dark:bg-muted border-t">
            <div className="container px-4 py-12">
                {/* 원본 사이트와 동일한 4컬럼 구조 - 중앙 배치 */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
                        {/* PRODUCT */}
                        <div className="space-y-4">
                            <h3 className="text-base font-medium text-foreground/80">PRODUCT</h3>
                            <nav className="space-y-2">
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Freshworks</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Google Workspace</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Monday.com</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Splashtop</div>
                            </nav>
                        </div>

                        {/* SOLUTIONS */}
                        <div className="space-y-4">
                            <h3 className="text-base font-medium text-foreground/80">SOLUTIONS</h3>
                            <nav className="space-y-2">
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">고객 경험 관리</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">업무 생산성</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">IT 인프라 관리</div>
                            </nav>
                        </div>

                        {/* SERVICES */}
                        <div className="space-y-4">
                            <h3 className="text-base font-medium text-foreground/80">SERVICES</h3>
                            <nav className="space-y-2">
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">컨설팅</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">솔루션 구축</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">교육</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">유지보수</div>
                            </nav>
                        </div>

                        {/* RESOURCES */}
                        <div className="space-y-4">
                            <h3 className="text-base font-medium text-foreground/80">RESOURCES</h3>
                            <nav className="space-y-2">
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">고객센터</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">문서 포털</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">블로그</div>
                                <div className="text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">개발자 포털</div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* 하단 정보 - 중앙 정렬 */}
                <div className="mt-12 pt-8 border-t border-muted">
                    <div className="flex flex-col items-center space-y-4">
                        {/* 개인정보처리방침과 주소, 저작권 - 중앙 정렬 */}
                        <div className="text-sm text-muted-foreground text-center">
                            <Link
                                href="/privacy-policy"
                                className="hover:text-foreground transition-colors"
                            >
                                개인정보 처리방침
                            </Link>
                            <span className="mx-2">|</span>
                            <span>서울시 마포구 양화로 186 5층</span>
                            <span className="mx-2">|</span>
                            <span>© 2025 We Do Soft Inc.</span>
                        </div>

                        {/* 맨 위로 올라가는 버튼 */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-muted hover:border-foreground/20 rounded-lg transition-all duration-200 hover:bg-muted/20"
                            aria-label="맨 위로 이동"
                        >
                            <ChevronUp className="h-4 w-4" />
                            맨 위로
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}