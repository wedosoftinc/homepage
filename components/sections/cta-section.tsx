'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    ArrowRightIcon as ArrowRight,
    PhoneIcon as Phone,
    EnvelopeIcon as Mail,
    ChatBubbleLeftRightIcon as MessageCircle,
    ClockIcon as Clock,
    UsersIcon as Users,
    ArrowTrendingUpIcon as TrendingUp
} from "@heroicons/react/24/outline"
import {
    MetricCard,
    FeatureList,
    CTAButtonGroup,
    BadgeGroup
} from "@/components/common"

export function CTASection() {
    return (
        <section className="pb-24 bg-muted/20">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* 메인 CTA */}
                    <div className="text-center mb-16">
                        <BadgeGroup
                            badges={[{ text: "지금 시작하세요", variant: "secondary" }]}
                            layout="horizontal"
                            className="mb-4 justify-center"
                        />
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            디지털 혁신의 첫걸음을
                            <span className="text-primary">
                                함께 시작하세요
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            전문 컨설턴트와의 무료 상담을 통해 귀하의 비즈니스에 최적화된 솔루션을 찾아보세요.
                            14일 무료 체험으로 효과를 직접 경험해보실 수 있습니다.
                        </p>

                        <CTAButtonGroup
                            buttons={[
                                {
                                    text: "무료 상담 신청",
                                    variant: "default",
                                    size: "lg",
                                    href: "/contact"
                                },
                                {
                                    text: "14일 무료 체험",
                                    variant: "outline",
                                    size: "lg",
                                    href: "/contact"
                                }
                            ]}
                            align="center"
                            className="mb-12"
                        />
                    </div>

                    {/* 추가 정보 */}
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="space-y-2">
                            <Clock className="h-8 w-8 mx-auto text-primary" />
                            <h4 className="font-semibold">빠른 구축</h4>
                            <p className="text-sm text-muted-foreground">평균 2주 내 구축 완료</p>
                        </div>
                        <div className="space-y-2">
                            <Users className="h-8 w-8 mx-auto text-primary" />
                            <h4 className="font-semibold">전문 지원</h4>
                            <p className="text-sm text-muted-foreground">인증된 전문가 팀</p>
                        </div>
                        <div className="space-y-2">
                            <TrendingUp className="h-8 w-8 mx-auto text-primary" />
                            <h4 className="font-semibold">성과 보장</h4>
                            <p className="text-sm text-muted-foreground">평균 40% 효율성 향상</p>
                        </div>
                        <div className="space-y-2">
                            <svg className="h-8 w-8 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="font-semibold">25년 경험</h4>
                            <p className="text-sm text-muted-foreground">축적된 노하우와 신뢰</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}