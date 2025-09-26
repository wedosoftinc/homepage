import { Metadata } from 'next'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export const metadata: Metadata = {
    title: 'Freshdesk | 위두소프트 - 고객 지원의 새로운 기준',
    description: '직관적인 고객 지원 티켓팅 솔루션으로 응대 시간 단축, 만족도 향상',
    keywords: 'Freshdesk, 고객지원, 헬프데스크, 티켓관리, 고객서비스',
    openGraph: {
        title: 'Freshdesk | 위두소프트 - 고객 지원의 새로운 기준',
        description: '직관적인 고객 지원 티켓팅 솔루션으로 응대 시간 단축, 만족도 향상',
        type: 'website',
        locale: 'ko_KR',
    },
}

// docs에서 추출한 실제 콘텐츠 기반 데이터
const freshdeskData: ProductPageData = {
    name: "Freshdesk",
    subtitle: "고객 지원의 새로운 기준",
    description: "직관적인 고객 지원 티켓팅 솔루션으로 응대 시간 단축, 만족도 향상",
    category: "customer experience",
    slug: "freshdesk",
    heroCTA: {
        primary: { text: "데모 신청하기", href: "/contact?demo=freshdesk" },
        secondary: { text: "자세히 보기", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "phone",
            title: "AI 기반 티켓 관리",
            description: "Freddy AI로 티켓 분류, 우선순위 지정, 자동 응답으로 처리 시간 최대 80% 단축"
        },
        {
            icon: "zap",
            title: "통합 에이전트 워크스페이스",
            description: "모든 고객 정보와 상호작용을 한 화면에서 관리하여 해결 시간 단축"
        },
        {
            icon: "settings",
            title: "지능형 자동화",
            description: "반복 작업 자동화로 에이전트가 복잡한 문제 해결에 집중할 수 있는 환경 제공"
        }
    ],

    // docs 원본 콘텐츠 기반 5개 탭
    detailedFeatureTabs: [
        {
            id: "advanced-ticketing",
            label: "고급 티켓팅",
            title: "고급 티켓팅 기능",
            description: "모든 고객 문의를 체계적으로 분류하고 추적하는 중앙 시스템. 자동 분류, 우선순위 지정, 라우팅으로 응대 시간 단축 및 처리 효율성 증대.",
            feature: {
                title: "스마트 티켓 관리 시스템",
                description: "복잡한 문의도 적절한 팀원에게 자동 배정되어 해결 속도가 크게 향상됩니다.",
                items: [
                    "자동 티켓 분류 및 라우팅",
                    "우선순위 자동 지정",
                    "SLA 기반 에스컬레이션",
                    "실시간 티켓 추적",
                    "커스텀 티켓 필드"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "티켓 처리 워크플로우",
                description: "문의 접수부터 해결까지의 전체 과정을 시각화합니다",
                placeholder: "스마트 티켓 라우팅 시스템"
            }
        },
        {
            id: "omnichannel",
            label: "다채널 통합",
            title: "다채널 통합 관리",
            description: "이메일, 전화, 소셜 미디어, 웹 채팅을 하나의 통합 플랫폼에서 관리. 모든 채널에서 일관된 고객 경험 제공으로 만족도 향상.",
            feature: {
                title: "통합 커뮤니케이션 플랫폼",
                description: "채널 간 전환 시에도 대화 맥락이 유지되어 원활한 고객 지원이 가능합니다.",
                items: [
                    "이메일 티켓 자동 생성",
                    "소셜 미디어 통합 모니터링",
                    "웹 채팅 실시간 응답",
                    "전화 통합 (CTI)",
                    "채널 간 대화 이력 동기화"
                ]
            },
            interactiveArea: {
                type: "feature-map",
                title: "다채널 통합 맵",
                description: "모든 커뮤니케이션 채널이 하나로 통합되는 구조를 확인하세요",
                placeholder: "옴니채널 커뮤니케이션 허브"
            }
        },
        {
            id: "automation-workflows",
            label: "자동화 & 워크플로우",
            title: "자동화 규칙 & 워크플로우",
            description: "티켓 생성, 상태 변경, 시간 기반 트리거를 활용한 자동 응답, 에스컬레이션, 알림 발송 등으로 반복 업무를 자동화합니다.",
            feature: {
                title: "지능형 워크플로우 엔진",
                description: "SLA 관리와 연동하여 약속된 응답 시간을 준수합니다.",
                items: [
                    "조건 기반 자동화 규칙",
                    "시간 기반 트리거 설정",
                    "자동 에스컬레이션",
                    "SLA 위반 방지 알림",
                    "커스텀 워크플로우 구성"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "자동화 워크플로우 빌더",
                description: "드래그 앤 드롭으로 워크플로우를 구성하는 과정을 체험하세요",
                placeholder: "비주얼 워크플로우 에디터"
            }
        },
        {
            id: "csat-analytics",
            label: "만족도 & 분석",
            title: "고객 만족도 조사 (CSAT) & 분석",
            description: "티켓 해결 후 자동 만족도 설문 발송으로 서비스 품질을 측정하고, 실시간 대시보드로 성과를 추적합니다.",
            feature: {
                title: "통합 성과 분석 시스템",
                description: "2-7점 평점 척도와 추가 질문 설정을 지원하며, 실시간 대시보드로 피드백을 확인할 수 있습니다.",
                items: [
                    "자동 만족도 조사 발송",
                    "실시간 CSAT 대시보드",
                    "상담사별 성과 분석",
                    "고객 피드백 트렌드 분석",
                    "커스텀 보고서 생성"
                ]
            },
            interactiveArea: {
                type: "dashboard",
                title: "실시간 성과 대시보드",
                description: "고객 만족도와 팀 성과 지표를 한눈에 확인하세요",
                placeholder: "CSAT & 성과 분석 대시보드"
            }
        }
    ],

    faqs: [
        {
            question: "Freshdesk 도입 시 기존 데이터는 어떻게 이관하나요?",
            answer: "안전한 데이터 마이그레이션 서비스를 제공하며, 기존 티켓, 고객 정보, 지식베이스 등을 무손실로 이관할 수 있습니다."
        },
        {
            question: "어떤 규모의 팀에 적합한가요?",
            answer: "소규모 스타트업부터 대기업까지 모든 규모에 적합하며, 2명부터 시작하여 무제한 상담사까지 확장 가능합니다."
        },
        {
            question: "보안은 어떻게 보장되나요?",
            answer: "TLS 1.2 암호화, IP 화이트리스트, SAML SSO, 2단계 인증 등 엔터프라이즈급 보안 기능을 제공합니다."
        },
        {
            question: "다른 Freshworks 제품과의 연동은 어떻게 되나요?",
            answer: "원클릭으로 Freshchat, Freshsales, Freshmarketer와 연동하여 고객 데이터를 중앙에서 통합 관리할 수 있습니다."
        }
    ],

    finalCTA: {
        title: "Freshdesk로 고객 지원을 체계화하세요",
        description: "모든 채널의 고객 문의를 하나로 통합하여 효율적인 고객 서비스를 제공합니다. 자동화와 협업 도구로 상담사의 생산성을 극대화하고 고객 만족도를 향상시킵니다.",
        primaryButton: { text: "데모 신청하기", href: "/contact?demo=freshdesk" },
        secondaryButton: { text: "전문 상담 받기", href: "/contact?product=freshdesk" }
    }
}

export default function FreshdeskPage() {
    return <ProductPageTemplate data={freshdeskData} />
}