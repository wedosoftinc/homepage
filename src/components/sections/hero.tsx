'use client'

import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/layout'
import { PerspectiveImage } from '@/components/ui/perspective-image'

export function HeroSection() {
    return (
        <Section padding="xl" className="relative overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left content */}
                    <div className="text-center lg:text-left">
                        <div className="space-y-6">
                            {/* Badge */}
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                                디지털 전환 전문가
                            </div>

                            {/* Main headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                                비즈니스의{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                                    디지털 혁신
                                </span>
                                을 시작하세요
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Google Workspace, Freshworks, Monday.com, Splashtop 등
                                검증된 SaaS 솔루션으로 기업의 생산성과 효율성을 극대화하세요.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Button
                                    size="lg"
                                    className="text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    무료 상담 시작하기
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg px-8 py-4 h-auto font-semibold border-2 hover:bg-muted/50 transition-all duration-300"
                                >
                                    솔루션 둘러보기
                                </Button>
                            </div>

                            {/* Trust indicators */}
                            <div className="pt-8 space-y-4">
                                <p className="text-sm text-muted-foreground font-medium">
                                    1000+ 기업이 신뢰하는 디지털 전환 파트너
                                </p>
                                <div className="flex items-center justify-center lg:justify-start space-x-6 opacity-60">
                                    {/* Trust badges - placeholder for now */}
                                    <div className="text-xs font-semibold text-muted-foreground">Google Partner</div>
                                    <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                    <div className="text-xs font-semibold text-muted-foreground">Freshworks Certified</div>
                                    <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                    <div className="text-xs font-semibold text-muted-foreground">Monday.com Expert</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right content - Hero image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <PerspectiveImage
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                                alt="WeDoSoft 솔루션 대시보드 미리보기"
                                className="w-full max-w-2xl mx-auto"
                            />
                        </div>

                        {/* Background decorations */}
                        <div className="absolute inset-0 -z-10">
                            {/* Gradient orbs */}
                            <div className="absolute top-1/4 -right-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-1/4 -left-12 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                            {/* Grid pattern */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--foreground) / 0.15) 1px, transparent 0)`,
                                    backgroundSize: '20px 20px'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Background gradient */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-br from-background via-background to-muted/30"></div>
        </Section>
    )
}