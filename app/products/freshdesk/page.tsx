import { Metadata } from 'next'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export const metadata: Metadata = {
    title: 'Freshdesk | 위두소프트 - 고객 지원의 새로운 기준',
    description: '모든 고객 문의를 체계적으로 관리하고 빠르게 해결할 수 있는 종합적인 고객 지원 플랫폼입니다.',
    keywords: 'Freshdesk, 고객지원, 헬프데스크, 티켓관리, 고객서비스',
    openGraph: {
        title: 'Freshdesk | 위두소프트 - 고객 지원의 새로운 기준',
        description: '체계적인 고객 문의 관리와 빠른 해결을 위한 종합 플랫폼',
        type: 'website',
        locale: 'ko_KR',
    },
}

// XML에서 추출한 실제 콘텐츠 기반 데이터
const freshdeskData: ProductPageData = {
    name: "Freshdesk",
    subtitle: "고객 지원의 새로운 기준",
    description: "모든 고객 문의를 체계적으로 관리하고 빠르게 해결할 수 있는 종합적인 고객 지원 플랫폼입니다.",
    category: "고객 경험 & 세일즈 관리",
    slug: "freshdesk",
    heroCTA: {
        primary: { text: "무료 체험 시작", href: "https://www.freshworks.com/ko/freshdesk/signup/?source=website" },
        secondary: { text: "상담 문의", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "messageSquare",
            title: "티켓 관리 및 자동화",
            description: "모든 고객 문의를 티켓으로 변환하여 체계적으로 관리하고 자동화 규칙으로 효율성을 높입니다."
        },
        {
            icon: "globe",
            title: "다채널 고객 지원",
            description: "이메일, 전화, 채팅, 소셜미디어 등 모든 채널의 문의를 하나의 플랫폼에서 통합 관리합니다."
        },
        {
            icon: "fileText",
            title: "지식베이스 구축",
            description: "FAQ와 가이드를 체계적으로 정리하여 고객 셀프서비스와 상담원 교육에 활용합니다."
        },
        {
            icon: "clock",
            title: "SLA 관리",
            description: "서비스 수준 협약을 설정하고 자동으로 모니터링하여 고객 만족도를 보장합니다."
        },
        {
            icon: "barChart3",
            title: "보고서 및 분석",
            description: "상세한 성과 리포트와 분석 데이터로 고객 지원 품질을 지속적으로 개선합니다."
        },
        {
            icon: "zap",
            title: "AI 기반 자동 응답",
            description: "AI 기술로 반복적인 문의에 자동으로 응답하고 적절한 상담원에게 배정합니다."
        }
    ],

    // 탭 기반 세부 기능
    detailedFeatureTabs: [
        {
            id: "ticketing",
            label: "티켓 관리",
            title: "스마트 티켓 관리 시스템",
            description: "모든 고객 문의를 체계적으로 관리하고 효율적으로 처리할 수 있는 완전한 솔루션입니다.",
            feature: {
                title: "자동 티켓 생성 및 분류",
                description: "이메일, 웹폼, 채팅, 전화 등 모든 채널의 문의를 자동으로 티켓으로 변환하고 AI가 자동 분류합니다.",
                items: [
                    "다채널 자동 티켓 생성",
                    "AI 기반 자동 분류",
                    "우선순위 자동 설정",
                    "상담원 자동 배정"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "티켓 처리 워크플로우",
                description: "문의 접수부터 해결까지의 전체 과정을 시각화합니다",
                placeholder: "티켓 생명주기 프로세스"
            }
        },
        {
            id: "automation",
            label: "자동화",
            title: "AI 기반 자동화 솔루션",
            description: "반복적인 업무를 자동화하고 AI가 상담원을 지원하여 업무 효율성을 극대화합니다.",
            feature: {
                title: "Freddy AI 자동 응답",
                description: "AI가 고객 문의를 분석하고 적절한 답변을 자동으로 생성하거나 상담원에게 답변을 제안합니다.",
                items: [
                    "자동 응답 생성",
                    "감정 분석",
                    "지식베이스 연동",
                    "에스컬레이션 자동화"
                ]
            },
            interactiveArea: {
                type: "demo",
                title: "AI 자동 응답 데모",
                description: "Freddy AI가 실시간으로 고객 응답을 생성하는 과정을 확인하세요",
                placeholder: "AI 응답 생성 시뮬레이션"
            }
        },
        {
            id: "analytics",
            label: "분석 및 보고",
            title: "고급 분석 및 보고서",
            description: "상세한 성과 분석과 맞춤형 보고서로 고객 지원 품질을 지속적으로 개선할 수 있습니다.",
            feature: {
                title: "실시간 성과 대시보드",
                description: "고객 지원팀의 성과를 실시간으로 모니터링하고 데이터 기반으로 의사결정을 내릴 수 있습니다.",
                items: [
                    "실시간 KPI 모니터링",
                    "고객 만족도 추적",
                    "상담원 성과 분석",
                    "맞춤형 보고서 생성"
                ]
            },
            interactiveArea: {
                type: "dashboard",
                title: "성과 분석 대시보드",
                description: "주요 지표와 트렌드를 한눈에 확인할 수 있는 대시보드입니다",
                placeholder: "실시간 분석 대시보드"
            }
        }
    ],

    benefits: [
        {
            title: "고객 만족도 향상",
            description: "체계적인 문의 관리와 빠른 응답으로 고객 만족도를 크게 개선할 수 있습니다.",
            metrics: "평균 고객 만족도 15% 향상"
        },
        {
            title: "응답 시간 단축",
            description: "자동화와 효율적인 워크플로우로 고객 문의 응답 시간을 대폭 줄입니다.",
            metrics: "평균 응답 시간 50% 단축"
        },
        {
            title: "운영 비용 절감",
            description: "자동화된 프로세스와 셀프서비스 옵션으로 고객 지원 운영 비용을 절감합니다.",
            metrics: "운영 비용 30% 절감"
        },
        {
            title: "상담원 생산성 증대",
            description: "통합된 플랫폼과 스마트한 도구로 상담원의 업무 효율성을 높입니다.",
            metrics: "상담원 생산성 40% 향상"
        },
        {
            title: "확장 가능한 구조",
            description: "비즈니스 성장에 따라 유연하게 확장할 수 있는 클라우드 기반 솔루션입니다.",
            metrics: "무제한 확장성"
        },
        {
            title: "통합 생태계",
            description: "기존 업무 도구들과 원활하게 연동하여 업무 연속성을 보장합니다.",
            metrics: "1000+ 앱 연동"
        }
    ],

    useCases: [
        {
            title: "중소기업 고객 지원팀",
            description: "제한된 인력으로도 전문적인 고객 지원 서비스를 제공하고 싶은 중소기업에 최적화되어 있습니다.",
            features: [
                "자동 티켓 생성 및 분류",
                "우선순위 기반 업무 배정",
                "고객 이력 통합 관리",
                "간편한 보고서 생성"
            ]
        },
        {
            title: "대기업 고객 서비스 센터",
            description: "대량의 고객 문의를 효율적으로 처리하고 품질을 관리해야 하는 대기업 환경에 적합합니다.",
            features: [
                "고급 SLA 모니터링",
                "다국가/다언어 지원",
                "고급 분석 및 리포팅",
                "커스텀 워크플로우"
            ]
        },
        {
            title: "E-commerce 비즈니스",
            description: "온라인 쇼핑몰과 전자상거래 업체의 고객 문의와 주문 관련 지원을 통합 관리합니다.",
            features: [
                "주문 정보 연동",
                "실시간 채팅 지원",
                "반품/교환 프로세스 자동화",
                "고객 만족도 추적"
            ]
        },
        {
            title: "SaaS 제품 회사",
            description: "기술 제품과 서비스를 제공하는 회사의 복잡한 기술 지원과 사용자 교육을 체계화합니다.",
            features: [
                "기술 문서 통합",
                "버그 추적 연동",
                "사용자 피드백 수집",
                "제품 업데이트 알림"
            ]
        }
    ],

    faqs: [
        {
            question: "Freshdesk는 어떤 기업에게 적합한가요?",
            answer: "스타트업부터 대기업까지 모든 규모의 기업에 적합합니다. 특히 체계적인 고객 지원이 필요한 서비스업, 전자상거래, SaaS 기업에게 최적화되어 있습니다."
        },
        {
            question: "기존 시스템과 연동이 가능한가요?",
            answer: "네, 1000개 이상의 앱과 연동이 가능합니다. CRM, 이메일 마케팅, 프로젝트 관리 도구 등 기존에 사용하는 도구들과 원활하게 통합할 수 있습니다."
        },
        {
            question: "한국어 지원이 되나요?",
            answer: "네, 완전한 한국어 인터페이스를 제공하며 한국 시간대와 업무 환경에 최적화되어 있습니다. 한국 고객을 위한 전용 지원도 제공합니다."
        },
        {
            question: "데이터 보안은 어떻게 보장되나요?",
            answer: "ISO 27001, SOC 2 Type II 등 국제 보안 인증을 획득했으며, 엔터프라이즈급 보안과 개인정보 보호 기능을 제공합니다."
        },
        {
            question: "도입 기간은 얼마나 걸리나요?",
            answer: "기본 설정은 1일 내에 완료할 수 있으며, 커스터마이징과 교육을 포함해도 보통 1-2주 내에 완전한 도입이 가능합니다."
        }
    ],

    finalCTA: {
        title: "Freshdesk로 고객 지원을 혁신하세요",
        description: "전 세계 60,000개 이상의 기업이 신뢰하는 고객 지원 플랫폼으로 고객 만족도를 높이고 운영 효율성을 극대화하세요.",
        primaryButton: { text: "무료 체험 시작", href: "https://www.freshworks.com/ko/freshdesk/signup/?source=website" },
        secondaryButton: { text: "전문 상담 받기", href: "/contact?product=freshdesk" }
    }
}

export default function FreshdeskPage() {
    return <ProductPageTemplate data={freshdeskData} />
}