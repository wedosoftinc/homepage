'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, MessageCircle, Calendar, FileText, Users, Phone, Mail } from "lucide-react"

const ctaOptions = [
    {
        title: "무료 상담 예약",
        description: "전문가와 1:1 맞춤 상담을 받아보세요",
        icon: Calendar,
        href: "/consultation",
        primary: true,
        action: "상담 예약하기"
    },
    {
        title: "솔루션 데모",
        description: "실제 동작하는 솔루션을 직접 체험해보세요",
        icon: FileText,
        href: "/demo",
        primary: false,
        action: "데모 신청"
    },
    {
        title: "라이브 채팅",
        description: "지금 바로 궁금한 점을 문의하세요",
        icon: MessageCircle,
        href: "/chat",
        primary: false,
        action: "채팅 시작"
    }
]

const contactMethods = [
    {
        title: "전화 문의",
        description: "02-1234-5678",
        icon: Phone,
        href: "tel:02-1234-5678",
        details: "평일 09:00 - 18:00"
    },
    {
        title: "이메일 문의",
        description: "contact@wedosoft.net",
        icon: Mail,
        href: "mailto:contact@wedosoft.net",
        details: "24시간 접수 가능"
    },
    {
        title: "파트너 문의",
        description: "비즈니스 제휴를 원하시나요?",
        icon: Users,
        href: "/partnership",
        details: "파트너십 안내"
    }
]

export function CTASection() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                {/* 메인 CTA */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        지금 시작하세요
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
                        귀사의 디지털 혁신 여정을 함께 시작할 준비가 되었습니다.
                        어떤 방식으로든 도움을 드릴 수 있습니다.
                    </p>
                </div>

                {/* CTA 옵션 카드들 */}
                <div className="grid gap-6 md:grid-cols-3 mb-16">
                    {ctaOptions.map((option) => (
                        <Card key={option.title} className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${option.primary ? 'border-primary bg-primary/5' : ''}`}>
                            <CardContent className="p-6 text-center space-y-4">
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${option.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                    <option.icon className="h-6 w-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold">{option.title}</h3>
                                    <p className="text-sm text-muted-foreground">{option.description}</p>
                                </div>
                                <Button
                                    className={`w-full group ${option.primary ? 'bg-primary hover:bg-primary/90' : ''}`}
                                    variant={option.primary ? "default" : "outline"}
                                    asChild
                                >
                                    <Link href={option.href}>
                                        {option.action}
                                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* 연락처 정보 */}
                <div className="grid gap-6 md:grid-cols-3 mb-16">
                    {contactMethods.map((method) => (
                        <Card key={method.title} className="group hover:shadow-md transition-all duration-300">
                            <CardContent className="p-6 text-center space-y-3">
                                <method.icon className="h-8 w-8 mx-auto text-primary" />
                                <div className="space-y-1">
                                    <h4 className="font-medium">{method.title}</h4>
                                    <p className="text-sm font-mono">{method.description}</p>
                                    <p className="text-xs text-muted-foreground">{method.details}</p>
                                </div>
                                <Button variant="ghost" size="sm" className="w-full" asChild>
                                    <Link href={method.href}>
                                        연결하기
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* 추가 정보 섹션 */}
                <div className="text-center space-y-8">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-xl font-semibold mb-4">
                            왜 We Do Soft와 함께해야 할까요?
                        </h3>
                        <div className="grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
                            <div className="space-y-2">
                                <div className="text-2xl font-bold text-primary">1000+</div>
                                <div>성공적인 프로젝트</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-2xl font-bold text-primary">99.9%</div>
                                <div>고객 만족도</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-2xl font-bold text-primary">24/7</div>
                                <div>전문가 지원</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="outline" asChild>
                            <Link href="/case-studies">
                                고객 성공 사례
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/resources">
                                자료 다운로드
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/webinar">
                                웨비나 참여
                            </Link>
                        </Button>
                    </div>

                    <div className="pt-8 border-t">
                        <p className="text-sm text-muted-foreground">
                            <strong>신뢰할 수 있는 파트너:</strong> 글로벌 SaaS 솔루션의 공식 파트너로서
                            최신 기술과 검증된 서비스를 제공합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}