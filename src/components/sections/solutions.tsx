'use client'

import { Container, Section } from '@/components/layout'
import { SolutionCard } from '@/components/ui/solution-card'

const solutions = [
    {
        title: "Google Workspace",
        description: "Gmail, Drive, Meet, Docs 등 통합된 협업 도구로 팀의 생산성을 극대화하세요. 언제 어디서나 안전하게 협업할 수 있습니다.",
        href: "/solutions/google-workspace",
        features: [
            "Gmail 비즈니스 이메일",
            "Google Drive 클라우드 스토리지",
            "Google Meet 화상회의",
            "Docs, Sheets, Slides 협업"
        ],
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        )
    },
    {
        title: "Freshworks",
        description: "고객 관리부터 지원까지, 통합된 CRM과 헬프데스크 솔루션으로 고객 경험을 혁신하세요.",
        href: "/solutions/freshworks",
        features: [
            "Freshdesk 고객 지원",
            "Freshsales CRM",
            "Freshservice IT 서비스",
            "Freshchat 실시간 채팅"
        ],
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        )
    },
    {
        title: "Monday.com",
        description: "프로젝트 관리와 팀 협업을 위한 직관적인 워크플로우 플랫폼으로 업무 효율성을 높이세요.",
        href: "/solutions/monday",
        features: [
            "프로젝트 관리 보드",
            "팀 협업 도구",
            "자동화 워크플로우",
            "실시간 대시보드"
        ],
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
            </svg>
        )
    },
    {
        title: "Splashtop",
        description: "안전하고 빠른 원격 접속 솔루션으로 언제 어디서나 업무용 컴퓨터에 접속하세요.",
        href: "/solutions/splashtop",
        features: [
            "고성능 원격 데스크톱",
            "멀티 플랫폼 지원",
            "엔터프라이즈 보안",
            "중앙 관리 콘솔"
        ],
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
            </svg>
        )
    }
]

export function SolutionsSection() {
    return (
        <Section variant="muted" padding="xl">
            <Container>
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        검증된 솔루션
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        비즈니스 성장을 위한{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                            핵심 솔루션
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        전 세계 수백만 기업이 신뢰하는 SaaS 솔루션으로
                        디지털 전환을 성공적으로 완성하세요
                    </p>
                </div>

                {/* Solutions grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {solutions.map((solution, index) => (
                        <SolutionCard
                            key={solution.title}
                            {...solution}
                            className={`animate-fade-in`}
                            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                            모든 솔루션 보기
                        </button>
                        <button className="px-8 py-4 border-2 border-border rounded-lg font-semibold hover:bg-muted/50 transition-colors duration-300">
                            무료 상담 받기
                        </button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}