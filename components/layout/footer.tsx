import Link from "next/link"
import { Mail, Phone, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-secondary/80 dark:bg-muted border-t">
            <div className="container px-4 py-12">
                {/* 원본 사이트와 동일한 4컬럼 구조 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* PRODUCT */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">PRODUCT</h3>
                        <nav className="space-y-1">
                            <div className="text-sm text-muted-foreground">Freshworks</div>
                            <div className="text-sm text-muted-foreground">Google Workspace</div>
                            <div className="text-sm text-muted-foreground">Monday.com</div>
                            <div className="text-sm text-muted-foreground">Splashtop</div>
                        </nav>
                    </div>

                    {/* SOLUTIONS */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">SOLUTIONS</h3>
                        <nav className="space-y-1">
                            <div className="text-sm text-muted-foreground">고객 경험 관리</div>
                            <div className="text-sm text-muted-foreground">업무 생산성</div>
                            <div className="text-sm text-muted-foreground">IT 인프라 관리</div>
                        </nav>
                    </div>

                    {/* SERVICES */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">SERVICES</h3>
                        <nav className="space-y-1">
                            <div className="text-sm text-muted-foreground">컨설팅</div>
                            <div className="text-sm text-muted-foreground">솔루션 구축</div>
                            <div className="text-sm text-muted-foreground">교육</div>
                            <div className="text-sm text-muted-foreground">유지보수</div>
                        </nav>
                    </div>

                    {/* RESOURCES */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">RESOURCES</h3>
                        <nav className="space-y-1">
                            <div className="text-sm text-muted-foreground">고객센터</div>
                            <div className="text-sm text-muted-foreground">문서 포털</div>
                            <div className="text-sm text-muted-foreground">블로그</div>
                            <div className="text-sm text-muted-foreground">개발자 포털</div>
                        </nav>
                    </div>
                </div>

                {/* 하단 정보 - 원본 사이트와 동일한 구조 */}
                <div className="mt-12 pt-8 border-t border-muted">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                        {/* 왼쪽: 개인정보처리방침과 주소, 저작권 */}
                        <div className="text-sm text-muted-foreground">
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

                        {/* 오른쪽: 연락처 아이콘들 */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="mailto:support@wedosoft.net"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                            <a
                                href="tel:+82-2-2135-3071"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Phone"
                            >
                                <Phone className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/wedosoft/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}