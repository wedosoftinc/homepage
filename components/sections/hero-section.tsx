'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
            {/* 배경 그라디언트 효과 */}
            <div className="absolute inset-0 bg-grid-small-white/[0.02] bg-[size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            {/* 메인 컨테이너 */}
            <div className="container relative z-10 mx-auto px-4 py-32">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                        {/* 좌측 콘텐츠 */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted/50 text-muted-foreground">
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    DIGITAL TRANSFORMATION
                                </div>
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                    글로벌 SaaS로{" "}
                                    <span className="bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
                                        혁신을 가속화
                                    </span>
                                    하세요
                                </h1>
                                <p className="mx-auto max-w-[600px] text-lg text-muted-foreground md:text-xl">
                                    최신 AI 기술부터 검증된 비즈니스 도구까지, 귀사의 성장을 위한 최적의 솔루션
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 min-[400px]:flex-row">
                                <Button size="lg" className="text-base px-8" asChild>
                                    <Link href="/contact">
                                        지금 문의하기
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-base px-8 group"
                                    asChild
                                >
                                    <Link href="/demo">
                                        둘러보기
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>

                            {/* 통계 정보 */}
                            <div className="flex flex-wrap gap-8 pt-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">1000+</div>
                                    <div className="text-sm text-muted-foreground">성공 구축 사례</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">99.9%</div>
                                    <div className="text-sm text-muted-foreground">서비스 가용성</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">24/7</div>
                                    <div className="text-sm text-muted-foreground">전문 지원</div>
                                </div>
                            </div>
                        </div>

                        {/* 우측 이미지/그래픽 */}
                        <div className="relative">
                            {/* 3D 효과를 위한 배경 요소들 */}
                            <div className="relative">
                                {/* 메인 이미지 컨테이너 */}
                                <div className="relative z-10 overflow-hidden rounded-2xl bg-gradient-to-br from-muted/20 to-muted/40 p-8 backdrop-blur-sm border">
                                    <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                                        {/* 임시 샘플 이미지 */}
                                        <div className="text-center space-y-4">
                                            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                                <Sparkles className="w-16 h-16 text-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-semibold">혁신적인 솔루션</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    AI 기반 자동화와 클라우드 플랫폼
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 플로팅 카드들 */}
                                <div className="absolute -top-4 -right-4 z-20 rounded-lg bg-card border p-3 shadow-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-medium">실시간 연동</span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 -left-4 z-20 rounded-lg bg-card border p-3 shadow-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                        <span className="text-xs font-medium">클라우드 기반</span>
                                    </div>
                                </div>

                                {/* 백그라운드 효과 */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl"></div>
                                <div className="absolute inset-0 -z-20 bg-gradient-to-l from-secondary/5 to-muted/5 blur-2xl transform rotate-12 scale-110"></div>
                            </div>

                            {/* 페이드아웃 효과 */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 스크롤 인디케이터 */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}