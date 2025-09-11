"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuItem {
    title: string;
    href: string;
    description: string;
    icon?: React.ReactNode;
    badge?: string;
}

interface MegaMenuSection {
    title: string;
    items: MegaMenuItem[];
}

interface MegaMenuProps {
    title: string;
    href: string;
    sections: MegaMenuSection[];
    className?: string;
}

export function MegaMenu({ title, href, sections, className }: MegaMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={cn("relative", className)}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Trigger */}
            <Link
                href={href}
                className="flex items-center space-x-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
                <span>{title}</span>
                <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isOpen && "rotate-180"
                )} />
            </Link>

            {/* Mega Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-background border rounded-xl shadow-xl p-8 animate-slide-down z-50">
                    <div className="grid grid-cols-2 gap-8">
                        {sections.map((section) => (
                            <div key={section.title} className="space-y-4">
                                <h3 className="font-semibold text-lg text-foreground border-b border-border pb-2">
                                    {section.title}
                                </h3>
                                <div className="space-y-3">
                                    {section.items.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="group block p-3 rounded-lg hover:bg-muted transition-colors"
                                        >
                                            <div className="flex items-start space-x-3">
                                                {item.icon && (
                                                    <div className="flex-shrink-0 mt-1 text-primary-500">
                                                        {item.icon}
                                                    </div>
                                                )}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center space-x-2">
                                                        <h4 className="font-medium text-sm text-foreground group-hover:text-primary-500 transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        {item.badge && (
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary-500 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 pt-6 border-t border-border">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium text-sm">모든 솔루션 보기</h4>
                                <p className="text-xs text-muted-foreground">
                                    WedoSoft의 전체 솔루션 포트폴리오를 확인하세요
                                </p>
                            </div>
                            <Link
                                href="/solutions"
                                className="inline-flex items-center px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors"
                            >
                                전체 보기
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// 솔루션 메가메뉴 데이터
export const solutionsMegaMenu = {
    title: "솔루션",
    href: "/solutions",
    sections: [
        {
            title: "협업 & 생산성",
            items: [
                {
                    title: "Google Workspace",
                    href: "/solutions/google-workspace",
                    description: "Gmail, Drive, Meet, Docs 등 통합 협업 플랫폼으로 팀 생산성 극대화",
                    badge: "인기"
                },
                {
                    title: "Microsoft 365",
                    href: "/solutions/microsoft-365",
                    description: "Office 앱과 클라우드 서비스로 어디서나 협업 가능한 환경 구축"
                }
            ]
        },
        {
            title: "고객 관리 & 지원",
            items: [
                {
                    title: "Freshworks",
                    href: "/solutions/freshworks",
                    description: "CRM, 헬프데스크, 마케팅 자동화를 하나의 플랫폼에서 통합 관리"
                },
                {
                    title: "Zendesk",
                    href: "/solutions/zendesk",
                    description: "고객 서비스와 지원 업무를 효율적으로 관리하는 헬프데스크 솔루션"
                }
            ]
        }
    ]
};

// 서비스 메가메뉴 데이터
export const servicesMegaMenu = {
    title: "서비스",
    href: "/services",
    sections: [
        {
            title: "컨설팅 & 분석",
            items: [
                {
                    title: "IT 현황 진단",
                    href: "/services/assessment",
                    description: "현재 IT 인프라와 업무 프로세스를 분석하여 개선점 도출"
                },
                {
                    title: "디지털 전환 컨설팅",
                    href: "/services/digital-transformation",
                    description: "기업의 디지털 혁신을 위한 전략 수립 및 로드맵 제시"
                }
            ]
        },
        {
            title: "구축 & 지원",
            items: [
                {
                    title: "시스템 구축",
                    href: "/services/implementation",
                    description: "선택한 솔루션의 안전하고 효율적인 도입 및 구축 서비스"
                },
                {
                    title: "데이터 마이그레이션",
                    href: "/services/migration",
                    description: "기존 시스템에서 새로운 플랫폼으로 안전한 데이터 이전"
                },
                {
                    title: "교육 & 트레이닝",
                    href: "/services/training",
                    description: "관리자 및 사용자 대상 맞춤형 교육 프로그램 제공"
                }
            ]
        }
    ]
};