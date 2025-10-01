'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    ArrowRightIcon as ArrowRight,
    PhoneIcon as Phone,
    EnvelopeIcon as Mail,
    ChatBubbleLeftRightIcon as MessageCircle
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
            <div className="container">
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
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}