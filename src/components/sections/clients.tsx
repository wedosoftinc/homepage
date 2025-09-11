'use client'

import { Container, Section } from '@/components/layout'
import { ClientLogo } from '@/components/ui/client-logo'

const clients = [
    {
        name: "Samsung",
        logo: (
            <svg className="w-20 h-8" viewBox="0 0 120 32" fill="currentColor">
                <path d="M20.5 2.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
                <path d="M8 15h24v2H8zm0 4h24v2H8zm0 4h16v2H8z" />
                <text x="40" y="20" className="text-sm font-bold">SAMSUNG</text>
            </svg>
        )
    },
    {
        name: "LG",
        logo: (
            <svg className="w-16 h-8" viewBox="0 0 64 32" fill="currentColor">
                <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M10 16h12M16 10v12" />
                <text x="32" y="20" className="text-sm font-bold">LG</text>
            </svg>
        )
    },
    {
        name: "Hyundai",
        logo: (
            <svg className="w-20 h-8" viewBox="0 0 80 32" fill="currentColor">
                <ellipse cx="16" cy="16" rx="12" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M8 16h16M12 12l8 8M12 20l8-8" />
                <text x="32" y="20" className="text-sm font-bold">HYUNDAI</text>
            </svg>
        )
    },
    {
        name: "SK",
        logo: (
            <svg className="w-16 h-8" viewBox="0 0 64 32" fill="currentColor">
                <rect x="4" y="8" width="8" height="16" rx="2" />
                <rect x="16" y="8" width="8" height="16" rx="2" />
                <text x="28" y="20" className="text-sm font-bold">SK</text>
            </svg>
        )
    },
    {
        name: "Naver",
        logo: (
            <svg className="w-20 h-8" viewBox="0 0 80 32" fill="currentColor">
                <rect x="4" y="8" width="4" height="16" />
                <rect x="12" y="8" width="4" height="16" />
                <rect x="20" y="8" width="4" height="16" />
                <text x="28" y="20" className="text-sm font-bold">NAVER</text>
            </svg>
        )
    },
    {
        name: "Kakao",
        logo: (
            <svg className="w-20 h-8" viewBox="0 0 80 32" fill="currentColor">
                <ellipse cx="16" cy="16" rx="10" ry="6" />
                <circle cx="12" cy="14" r="1" fill="white" />
                <circle cx="20" cy="14" r="1" fill="white" />
                <text x="30" y="20" className="text-sm font-bold">KAKAO</text>
            </svg>
        )
    },
    {
        name: "Coupang",
        logo: (
            <svg className="w-24 h-8" viewBox="0 0 96 32" fill="currentColor">
                <rect x="4" y="8" width="16" height="16" rx="8" />
                <circle cx="12" cy="16" r="4" fill="white" />
                <text x="24" y="20" className="text-sm font-bold">COUPANG</text>
            </svg>
        )
    },
    {
        name: "Baemin",
        logo: (
            <svg className="w-20 h-8" viewBox="0 0 80 32" fill="currentColor">
                <rect x="4" y="8" width="12" height="16" rx="6" />
                <circle cx="10" cy="12" r="2" fill="white" />
                <path d="M6 18h8" stroke="white" strokeWidth="2" />
                <text x="20" y="20" className="text-sm font-bold">BAEMIN</text>
            </svg>
        )
    },
    {
        name: "Toss",
        logo: (
            <svg className="w-16 h-8" viewBox="0 0 64 32" fill="currentColor">
                <circle cx="16" cy="16" r="8" />
                <circle cx="16" cy="16" r="4" fill="white" />
                <text x="28" y="20" className="text-sm font-bold">TOSS</text>
            </svg>
        )
    },
    {
        name: "Woowa Brothers",
        logo: (
            <svg className="w-24 h-8" viewBox="0 0 96 32" fill="currentColor">
                <rect x="4" y="8" width="8" height="16" rx="4" />
                <rect x="16" y="8" width="8" height="16" rx="4" />
                <text x="28" y="20" className="text-xs font-bold">WOOWA</text>
            </svg>
        )
    },
    {
        name: "Nexon",
        logo: (
            <svg className="w-20 h-8" viewBox="0 0 80 32" fill="currentColor">
                <polygon points="4,8 12,8 20,24 12,24" />
                <polygon points="12,8 20,8 20,16 12,16" />
                <text x="24" y="20" className="text-sm font-bold">NEXON</text>
            </svg>
        )
    },
    {
        name: "NCSoft",
        logo: (
            <svg className="w-20 h-8" viewBox="0 0 80 32" fill="currentColor">
                <rect x="4" y="8" width="12" height="16" rx="2" />
                <path d="M6 12h8M6 16h8M6 20h8" />
                <text x="20" y="20" className="text-sm font-bold">NC</text>
            </svg>
        )
    }
]

export function ClientsSection() {
    return (
        <Section padding="xl" className="bg-muted/30">
            <Container>
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        신뢰받는 파트너
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                            1000+
                        </span>{" "}
                        기업이 선택한 디지털 전환 파트너
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        대기업부터 스타트업까지, 다양한 규모의 기업들이 WeDoSoft와 함께
                        성공적인 디지털 전환을 이루어내고 있습니다
                    </p>
                </div>

                {/* Logos grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
                    {clients.map((client, index) => (
                        <ClientLogo
                            key={client.name}
                            name={client.name}
                            logo={client.logo}
                            className="animate-fade-in"
                            style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
                        />
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                        <div className="text-sm text-muted-foreground">성공 프로젝트</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
                        <div className="text-sm text-muted-foreground">고객 만족도</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-sm text-muted-foreground">기술 지원</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5년+</div>
                        <div className="text-sm text-muted-foreground">업계 경험</div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-muted-foreground mb-6">
                        당신의 기업도 디지털 전환의 성공 사례가 되어보세요
                    </p>
                    <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        성공 사례 더 보기
                    </button>
                </div>
            </Container>
        </Section>
    )
}