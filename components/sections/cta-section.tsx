'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, MessageCircle, Clock, Users, TrendingUp } from "lucide-react"
import {
    MetricCard,
    FeatureList,
    CTAButtonGroup,
    BadgeGroup
} from "@/components/common"

export function CTASection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
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
                                    size: "lg"
                                },
                                {
                                    text: "14일 무료 체험",
                                    variant: "outline",
                                    size: "lg"
                                }
                            ]}
                            align="center"
                            className="mb-12"
                        />
                    </div>

                    {/* 연락 방법 카드들 */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">전화 상담</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    전문 컨설턴트와 직접 통화로 상담받으세요
                                </p>
                                <Button variant="outline" className="w-full">
                                    02-1234-5678
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">이메일 문의</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    상세한 문의사항을 이메일로 보내주세요
                                </p>
                                <Button variant="outline" className="w-full">
                                    contact@wedosoft.net
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <MessageCircle className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">실시간 채팅</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    웹사이트에서 실시간으로 문의하세요
                                </p>
                                <Button variant="outline" className="w-full">
                                    채팅 시작하기
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* 통계 및 신뢰도 정보 */}
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <MetricCard
                            value="500+"
                            label="기업 고객"
                            variant="default"
                            size="md"
                        />
                        <MetricCard
                            value="10,000+"
                            label="활성 사용자"
                            variant="success"
                            size="md"
                        />
                        <MetricCard
                            value="95%"
                            label="고객 만족도"
                            variant="default"
                            size="md"
                        />
                        <MetricCard
                            value="24/7"
                            label="기술 지원"
                            variant="info"
                            size="md"
                        />
                    </div>

                    {/* 추가 정보 */}
                    <div className="grid md:grid-cols-3 gap-6 text-center">
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
                    </div>
                </div>
            </div>
        </section>
    )
}