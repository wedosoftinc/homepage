import Link from "next/link"
import { BuildingOfficeIcon as Building2, EnvelopeIcon as Mail, PhoneIcon as Phone, MapPinIcon as MapPin } from "@heroicons/react/24/outline"

const footerSections = [
    {
        title: "솔루션",
        links: [
            { label: "Monday.com", href: "/solutions/monday" },
            { label: "Freshworks", href: "/solutions/freshworks" },
            { label: "Google Workspace", href: "/solutions/google-workspace" },
            { label: "Splashtop", href: "/solutions/splashtop" }
        ]
    },
    {
        title: "서비스",
        links: [
            { label: "컨설팅", href: "/services/consulting" },
            { label: "구축 & 구현", href: "/services/implementation" },
            { label: "교육 & 지원", href: "/services/education" },
            { label: "기술 지원", href: "/services/support" }
        ]
    },
    {
        title: "회사",
        links: [
            { label: "회사소개", href: "/company" },
            { label: "파트너십", href: "/company/partners" },
            { label: "채용정보", href: "/company/careers" },
            { label: "보도자료", href: "/company/news" }
        ]
    },
    {
        title: "지원",
        links: [
            { label: "도움말", href: "/help" },
            { label: "문서", href: "/docs" },
            { label: "커뮤니티", href: "/community" },
            { label: "상담 신청", href: "/contact" }
        ]
    }
]

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
                {/* 메인 푸터 콘텐츠 */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* 회사 정보 */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Building2 className="h-4 w-4" />
                                </div>
                                <span className="font-bold text-xl">위두소프트</span>
                            </div>

                            <p className="text-slate-300 max-w-md">
                                기업의 디지털 혁신을 위한 최적의 파트너.
                                글로벌 SaaS 솔루션으로 귀하의 비즈니스를 혁신하세요.
                            </p>

                            {/* 연락처 정보 */}
                            <div className="space-y-3 pt-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-slate-400" />
                                    <span className="text-sm text-slate-300">contact@wedosoft.net</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-slate-400" />
                                    <span className="text-sm text-slate-300">02-1234-5678</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-slate-400" />
                                    <span className="text-sm text-slate-300">서울특별시 강남구</span>
                                </div>
                            </div>
                        </div>

                        {/* 링크 섹션들 */}
                        <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
                            {footerSections.map((section) => (
                                <div key={section.title} className="space-y-4">
                                    <h3 className="font-semibold text-white">{section.title}</h3>
                                    <ul className="space-y-2">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className="text-sm text-slate-300 hover:text-white transition-colors">
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 하단 구분선 및 저작권 */}
                <div className="border-t border-slate-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-slate-400">
                            © 2025 (주)위두소프트. All rights reserved.
                        </div>

                        <div className="flex items-center gap-6">
                            <Link
                                href="/privacy"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                개인정보처리방침
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                이용약관
                            </Link>
                            <Link
                                href="/sitemap"
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                사이트맵
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}