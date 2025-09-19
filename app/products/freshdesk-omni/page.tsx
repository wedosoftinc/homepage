import { Metadata } from 'next'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export const metadata: Metadata = {
    title: 'Freshdesk Omni | 위두소프트 - 옴니채널 고객 지원 플랫폼',
    description: '티켓팅, 채팅 상담, 고객 관리를 편리하게 넘나드는 Freshdesk Omni. AI 자동화로 에이전트 없이 모든 채널에서 완벽한 고객 응대를 제공합니다.',
    keywords: 'Freshdesk Omni, 옴니채널, 고객지원, 채팅상담, AI 자동화, 티켓관리',
    openGraph: {
        title: 'Freshdesk Omni | 위두소프트 - 옴니채널 고객 지원 플랫폼',
        description: 'AI 자동화로 모든 채널에서 완벽한 고객 응대를 제공하는 통합 솔루션',
        type: 'website',
        locale: 'ko_KR',
    },
}

// XML에서 추출한 실제 콘텐츠 기반 데이터
const freshdeskOmniData: ProductPageData = {
    name: "Freshdesk Omni",
    subtitle: "옴니채널 고객 지원의 새로운 기준",
    description: "티켓팅, 채팅 상담, 고객 관리를 편리하게 넘나드는 Freshdesk Omni. AI 자동화로 에이전트 없이 모든 채널에서 완벽한 고객 응대를 제공합니다.",
    category: "고객 경험 & 세일즈 관리",
    heroCTA: {
        primary: { text: "무료 체험 시작", href: "https://www.freshworks.com/ko/freshdesk/omnichannel-signup/?source=freshdeskpricing&medium=fdomnigrowth" },
        secondary: { text: "상담 문의", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "globe",
            title: "옴니채널 통합",
            description: "이메일, 전화, 채팅, 소셜미디어 등 모든 채널의 고객 문의를 하나의 플랫폼에서 관리합니다."
        },
        {
            icon: "messageSquare",
            title: "실시간 채팅",
            description: "웹사이트, 모바일 앱, 소셜 채널에서 실시간으로 고객과 소통할 수 있습니다."
        },
        {
            icon: "zap",
            title: "AI 챗봇",
            description: "AI 기반 자동 응답으로 24시간 즉시 고객 문의에 대응하고 복잡한 문의는 에이전트에게 전달합니다."
        },
        {
            icon: "users",
            title: "팀 협업",
            description: "여러 에이전트가 실시간으로 협업하여 고객 문의를 빠르고 정확하게 처리할 수 있습니다."
        },
        {
            icon: "barChart3",
            title: "성과 분석",
            description: "응답 시간, 해결률, 만족도 등 다양한 지표를 실시간으로 모니터링하고 분석합니다."
        },
        {
            icon: "headphones",
            title: "고급 라우팅",
            description: "고객 문의를 적절한 에이전트나 부서로 자동 배정하여 해결 효율성을 극대화합니다."
        }
    ], benefits: [
        {
            title: "응답 시간 단축",
            description: "AI 자동화와 스마트 라우팅으로 고객 문의에 즉시 대응",
            metrics: "평균 응답 시간 70% 단축"
        },
        {
            title: "고객 만족도 향상",
            description: "일관된 서비스 품질과 빠른 문제 해결로 고객 경험 개선",
            metrics: "고객 만족도 45% 증가"
        },
        {
            title: "운영 효율성 증대",
            description: "옴니채널 통합으로 에이전트 생산성 향상 및 운영 비용 절감",
            metrics: "에이전트 생산성 50% 향상"
        }
    ],

    useCases: [
        {
            title: "이커머스 고객 지원",
            description: "온라인 쇼핑몰의 주문, 배송, 반품 문의를 통합 관리",
            features: [
                "주문 상태 실시간 조회 및 업데이트",
                "카카오톡, 라이브챗 연동으로 즉시 응답",
                "AI 챗봇으로 FAQ 자동 처리",
                "배송 추적 및 반품 프로세스 자동화"
            ]
        },
        {
            title: "SaaS 기술 지원",
            description: "소프트웨어 서비스의 기술 문의와 사용자 지원",
            features: [
                "티켓 우선순위 자동 분류",
                "전문가 에이전트 자동 배정",
                "지식베이스 연동으로 빠른 해결",
                "고객 사용 패턴 분석 및 개선 제안"
            ]
        },
        {
            title: "금융 서비스 상담",
            description: "은행, 보험사의 고객 상담 및 민원 처리",
            features: [
                "보안 강화된 고객 인증 시스템",
                "규정 준수 자동 체크 기능",
                "VIP 고객 우선 처리 워크플로우",
                "상담 내역 완전 기록 및 분석"
            ]
        },
        {
            title: "제조업 A/S 센터",
            description: "제품 문의, 수리 접수, 기술 지원을 통합 운영",
            features: [
                "제품 시리얼 번호 기반 자동 정보 조회",
                "A/S 진행 상황 실시간 업데이트",
                "기술자 배정 및 일정 관리",
                "부품 재고 연동 및 주문 자동화"
            ]
        }
    ],

    faqs: [
        {
            question: "Freshdesk Omni는 어떤 채널을 지원하나요?",
            answer: "이메일, 전화, 웹 채팅, 카카오톡 비즈니스, 페이스북 메신저, 인스타그램, 트위터, 모바일 앱 등 다양한 채널을 지원합니다. 모든 채널의 대화를 하나의 통합 인터페이스에서 관리할 수 있습니다."
        },
        {
            question: "AI 챗봇은 어떤 기능을 제공하나요?",
            answer: "AI 챗봇은 자연어 처리를 통해 고객 의도를 파악하고, FAQ 자동 응답, 주문 조회, 간단한 업무 처리 등을 수행합니다. 복잡한 문의는 적절한 에이전트에게 자동으로 전달되며, 대화 맥락도 함께 전달됩니다."
        },
        {
            question: "기존 시스템과의 연동이 가능한가요?",
            answer: "네, REST API와 Webhook을 통해 CRM, ERP, 이커머스 플랫폼 등 다양한 시스템과 연동 가능합니다. 또한 Freshworks 생태계의 다른 제품들(Freshsales, Freshservice 등)과 seamless하게 통합됩니다."
        },
        {
            question: "보안은 어떻게 보장되나요?",
            answer: "ISO 27001, SOC 2 Type II 인증을 받았으며, 데이터 암호화, 2단계 인증, 역할 기반 접근 제어 등 엔터프라이즈급 보안 기능을 제공합니다. GDPR, CCPA 등 글로벌 개인정보보호 규정을 완전히 준수합니다."
        },
        {
            question: "도입 후 교육과 지원은 어떻게 받을 수 있나요?",
            answer: "위두소프트에서 초기 설정부터 사용자 교육까지 전 과정을 지원합니다. 온라인 교육 자료, 맞춤형 워크숍, 지속적인 기술 지원을 통해 Freshdesk Omni의 효과를 극대화할 수 있도록 도와드립니다."
        }
    ],

    finalCTA: {
        title: "통합 채널 지원으로 고객 응대를 혁신하세요",
        description: "Freshdesk Omni로 모든 채널의 고객 문의를 하나로 통합하고, AI 자동화로 24시간 완벽한 고객 서비스를 제공하세요.",
        primaryButton: { text: "무료 체험 신청", href: "https://www.freshworks.com/ko/freshdesk/omnichannel-signup/?source=freshdeskpricing&medium=fdomnigrowth" },
        secondaryButton: { text: "상담 문의", href: "/contact" }
    }
}

export default function FreshdeskOmniPage() {
    return <ProductPageTemplate data={freshdeskOmniData} />
}