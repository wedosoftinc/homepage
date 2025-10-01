'use client'

import Link from "next/link"
import { ChevronUpIcon as ChevronUp } from "@heroicons/react/24/outline"

export function Footer() {
    return (
        <footer className="bg-secondary/80 dark:bg-muted border-t">
            <div className="container py-12">
                {/* 원본 사이트와 동일한 4컬럼 구조 - 중앙 배치 */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
                        {/* PRODUCT */}
                        <div className="space-y-4">
                            <h3 className="text-base font-medium text-foreground/80">PRODUCT</h3>
                            <nav className="space-y-2">
                                <Link
                                    href="/solutions/customer-experience"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    Freshworks
                                </Link>
                                <Link
                                    href="/products/google-workspace"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    Google Workspace
                                </Link>
                                <Link
                                    href="/solutions/collaboration"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    Monday.com
                                </Link>
                                <Link
                                    href="/products/splashtop"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    Splashtop
                                </Link>
                            </nav>
                        </div>

                        {/* SOLUTIONS */}
                        <div className="space-y-4">
                            <h3 className="text-base font-medium text-foreground/80">SOLUTIONS</h3>
                            <nav className="space-y-2">
                                <Link
                                    href="/solutions/customer-experience"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    고객 경험 관리
                                </Link>
                                <Link
                                    href="/solutions/collaboration"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    업무 생산성
                                </Link>
                                <Link
                                    href="/solutions/infrastructure"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    IT 인프라 관리
                                </Link>
                            </nav>
                        </div>

                        {/* SERVICES */}
                        <div className="space-y-4">
                            <h3 className="text-base font-medium text-foreground/80">SERVICES</h3>
                            <nav className="space-y-2">
                                <Link
                                    href="/services/consulting"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    컨설팅
                                </Link>
                                <Link
                                    href="/services/implementation"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    솔루션 구축
                                </Link>
                                <Link
                                    href="/services/migration"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    마이그레이션
                                </Link>
                                <Link
                                    href="/services/support"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    유지보수
                                </Link>
                            </nav>
                        </div>

                        {/* RESOURCES */}
                        <div className="space-y-4">
                            <h3 className="text-base font-medium text-foreground/80">RESOURCES</h3>
                            <nav className="space-y-2">
                                <a
                                    href="https://support.wedosoft.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    고객 센터
                                </a>
                                <a
                                    href="https://docs.wedosoft.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    문서 포털
                                </a>
                                <span className="block text-base text-muted-foreground/50 cursor-not-allowed">
                                    블로그 (준비중)
                                </span>
                                <a
                                    href="https://developers.freshworks.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    개발자 포털
                                </a>
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