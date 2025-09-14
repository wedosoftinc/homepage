'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, CheckCircle, TrendingUp, Users, Building2 } from "lucide-react"

export function HeroSection() {

    return (
        <section className="relative overflow-hidden bg-background py-20 sm:py-32">
            {/* 워드프레스 원본 스타일 적용 */}
            <div className="absolute inset-0 -z-10 custom-grid-bg" />

            <div className="container relative mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    {/* 메인 히어로 콘텐츠 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* 좌측 텍스트 콘텐츠 */}
                        <div className="space-y-8">
                            {/* 배지 */}
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="px-3 py-1">
                                    <TrendingUp className="h-3 w-3 mr-1" />
                                    B2B SaaS 전문 기업
                                </Badge>
                                <Badge variant="outline" className="px-3 py-1">
                                    글로벌 파트너십
                                </Badge>
                            </div>

                            {/* 메인 타이틀 */}
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                    기업의 디지털 혁신을 위한{" "}
                                    <span className="text-primary">
                                        최적의 파트너
                                    </span>
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-2xl">
                                    Monday.com, Freshworks, Google Workspace 등 글로벌 SaaS 솔루션으로
                                    귀하의 비즈니스를 혁신하세요. 전문 컨설팅부터 구축, 교육까지 원스톱 서비스를 제공합니다.
                                </p>
                            </div>

                            {/* 주요 기능 리스트 */}
                            <div className="space-y-3">
                                {[
                                    "글로벌 SaaS 솔루션 공급 전문",
                                    "맞춤형 컨설팅 및 구축 서비스",
                                    "24/7 기술 지원 및 사용자 교육"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA 버튼들 */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="text-lg px-8">
                                    무료 상담 신청
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8">
                                    <Play className="mr-2 h-5 w-5" />
                                    데모 영상 보기
                                </Button>
                            </div>
                        </div>

                        {/* 우측 비주얼 콘텐츠 */}
                        <div className="space-y-6">
                            {/* 통계 카드들 */}
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-6 text-center">
                                    <CardContent className="p-0">
                                        <div className="space-y-2">
                                            <Building2 className="h-8 w-8 mx-auto text-muted-foreground" />
                                            <div className="text-2xl font-bold">500+</div>
                                            <div className="text-sm text-muted-foreground">기업 고객</div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="p-6 text-center">
                                    <CardContent className="p-0">
                                        <div className="space-y-2">
                                            <Users className="h-8 w-8 mx-auto text-muted-foreground" />
                                            <div className="text-2xl font-bold">10,000+</div>
                                            <div className="text-sm text-muted-foreground">사용자</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* 플로팅 카드 */}
                            <Card className="p-6">
                                <CardContent className="p-0">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                                <TrendingUp className="h-5 w-5 text-muted-foreground" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">비즈니스 성장률</div>
                                                <div className="text-sm text-muted-foreground">평균 40% 향상</div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>업무 효율성</span>
                                                <span className="font-medium">85%</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <div className="bg-foreground h-2 rounded-full" style={{ width: '85%' }} />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>고객 만족도</span>
                                                <span className="font-medium">95%</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <div className="bg-foreground h-2 rounded-full" style={{ width: '95%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* 파트너 로고 섹션 */}
                            <Card className="p-4">
                                <CardContent className="p-0">
                                    <div className="text-center space-y-3">
                                        <div className="text-sm text-muted-foreground font-medium">
                                            글로벌 파트너
                                        </div>
                                        <div className="flex justify-center items-center gap-6 text-muted-foreground">
                                            <div className="text-lg font-bold">Monday.com</div>
                                            <div className="text-lg font-bold">Freshworks</div>
                                            <div className="text-lg font-bold">Google</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* 스크롤 인디케이터 */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    )
}