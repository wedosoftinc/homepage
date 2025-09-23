import { Metadata } from 'next'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export const metadata: Metadata = {
    title: 'Monday Service | 위두소프트 - AI 기반 서비스 관리 플랫폼',
    description: 'Monday Service는 AI 기반의 혁신적인 기능과 맞춤형 워크플로우로, 효율적인 서비스 운영과 뛰어난 고객 경험을 제공합니다.',
    keywords: 'Monday Service, AI 서비스 관리, 워크플로우, 고객 서비스, 자동화',
    openGraph: {
        title: 'Monday Service | 위두소프트 - AI 기반 서비스 관리 플랫폼',
        description: 'AI 기반의 혁신적인 기능과 맞춤형 워크플로우로 서비스 효율을 극대화하세요',
        type: 'website',
        locale: 'ko_KR',
    },
}

// XML에서 추출한 실제 콘텐츠 기반 데이터 (docs 기반)
const mondayServiceData: ProductPageData = {
    name: "Monday Service",
    subtitle: "AI, at your service",
    description: "강력한 AI와 유연한 플랫폼으로 서비스 효율을 대규모로 제공할 수 있도록 지원합니다.",
    category: "협업 및 생산성 향상",
    slug: "monday-service",
    heroCTA: {
        primary: { text: "데모 신청하기", href: "/contact?demo=monday-service" },
        secondary: { text: "자세히 보기", href: "/contact?product=monday-service" }
    },

    keyFeatures: [
        {
            icon: "barChart3",
            title: "명확한 가시성",
            description: "서비스 성능에 대한 명확한 가시성과 인사이트를 제공하여 데이터 기반의 의사결정 제공"
        },
        {
            icon: "settings",
            title: "유연한 통합 플랫폼",
            description: "몇 분 안에 서비스 워크플로우를 구축하고 커스터마이징이 가능. 티켓팅, 지식 관리, 운영 등 모든 것을 하나의 플랫폼으로 통합 관리"
        },
        {
            icon: "zap",
            title: "강력한 AI 기반의 자동화",
            description: "AI를 활용하여 티켓 해결을 가속화하고 반복적인 수동 작업을 자동화하여 서비스 효율성을 극대화"
        }
    ],

    // 탭 기반 세부 기능 (6개 - docs 기반)
    detailedFeatureTabs: [
        {
            id: "ai-service-agent",
            label: "AI 서비스 에이전트",
            title: "AI 서비스 에이전트",
            description: "내장된 AI 에이전트가 티켓 기록과 지식 베이스를 활용합니다.",
            feature: {
                title: "개인화되고 정확한 솔루션을 즉시 제시",
                description: "고객 문의에 대해 빠른 문제 해결을 돕습니다.",
                items: [
                    "티켓 기록 분석",
                    "지식 베이스 활용",
                    "개인화된 솔루션 제시",
                    "즉시 문제 해결 지원"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "AI 서비스 에이전트",
                description: "AI가 고객 문의를 분석하고 최적의 솔루션을 제시하는 과정을 확인하세요",
                placeholder: "AI 서비스 에이전트 시뮬레이션"
            }
        },
        {
            id: "auto-classification",
            label: "자동 분류",
            title: "자동 분류",
            description: "AI 기반의 시스템을 활용하여 문의 유형, 우선순위 등에 따라 티켓을 자동으로 분류합니다.",
            feature: {
                title: "지능적인 티켓 분류 시스템",
                description: "문의 유형과 우선순위를 자동으로 판단하여 효율적인 처리를 지원합니다.",
                items: [
                    "AI 기반 문의 유형 분석",
                    "자동 우선순위 설정",
                    "카테고리별 자동 분류",
                    "처리 시간 예측"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "자동 분류 시스템",
                description: "들어오는 티켓이 AI에 의해 자동으로 분류되는 과정을 체험하세요",
                placeholder: "AI 자동 분류 인터페이스"
            }
        },
        {
            id: "smart-routing",
            label: "스마트 라우팅",
            title: "스마트 라우팅",
            description: "AI를 활용하여 적절한 담당자에게 자동으로 티켓을 할당합니다.",
            feature: {
                title: "최적의 라우팅으로 해결 시간 단축 및 서비스 품질 향상",
                description: "각 담당자의 전문성과 업무량을 고려한 지능적인 할당 시스템입니다.",
                items: [
                    "담당자 전문성 매칭",
                    "업무량 균등 배분",
                    "자동 티켓 할당",
                    "해결 시간 최적화"
                ]
            },
            interactiveArea: {
                type: "dashboard" as const,
                title: "스마트 라우팅 대시보드",
                description: "AI가 티켓을 적절한 담당자에게 배정하는 과정을 확인하세요",
                placeholder: "스마트 라우팅 관리 대시보드"
            }
        },
        {
            id: "ai-suggestions",
            label: "AI 제안",
            title: "AI 제안",
            description: "티켓 해결에 필요한 지능적인 제안을 제공합니다.",
            feature: {
                title: "업무 처리 속도를 높입니다",
                description: "과거 데이터와 지식 베이스 기반으로 효과적인 해결책을 제시합니다.",
                items: [
                    "과거 데이터 분석",
                    "지식 베이스 검색",
                    "해결책 자동 제안",
                    "처리 시간 단축"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "AI 제안 시스템",
                description: "AI가 문제 해결을 위한 최적의 제안을 제공하는 과정을 경험하세요",
                placeholder: "AI 제안 인터페이스"
            }
        },
        {
            id: "service-workflow",
            label: "서비스 워크플로우",
            title: "서비스 워크플로우",
            description: "팀의 필요에 맞추어 맞춤형 서비스 프로세스를 구축하고 자동화할 수 있습니다.",
            feature: {
                title: "팀 맞춤형 프로세스 자동화",
                description: "각 팀의 업무 스타일에 맞는 워크플로우를 쉽게 설정하고 관리할 수 있습니다.",
                items: [
                    "맞춤형 프로세스 구축",
                    "워크플로우 자동화",
                    "단계별 진행 관리",
                    "성과 추적 및 분석"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "워크플로우 빌더",
                description: "드래그 앤 드롭으로 나만의 서비스 워크플로우를 구축해보세요",
                placeholder: "서비스 워크플로우 설계 도구"
            }
        },
        {
            id: "customer-portal",
            label: "고객 포털",
            title: "고객 포털",
            description: "고객이 직접 요청을 제출하고, 티켓 상태를 실시간으로 확인할 수 있는 맞춤형 포털을 제공합니다.",
            feature: {
                title: "셀프 서비스 및 실시간 상태 확인",
                description: "고객이 스스로 문제를 해결하고 진행 상황을 투명하게 확인할 수 있습니다.",
                items: [
                    "요청 제출 인터페이스",
                    "실시간 상태 추적",
                    "셀프 서비스 리소스",
                    "피드백 및 평가 시스템"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "고객 포털 인터페이스",
                description: "고객이 사용하는 포털의 실제 모습을 확인해보세요",
                placeholder: "고객 서비스 포털"
            }
        }
    ],

    benefits: [
        {
            title: "서비스 효율성 극대화",
            description: "AI 자동화와 스마트 워크플로우로 서비스 처리 시간을 대폭 단축",
            metrics: "처리 시간 60% 단축"
        },
        {
            title: "고객 만족도 향상",
            description: "신속하고 정확한 서비스 제공으로 고객 경험을 혁신적으로 개선",
            metrics: "고객 만족도 40% 증가"
        },
        {
            title: "운영 비용 절감",
            description: "자동화된 프로세스와 효율적인 리소스 배분으로 운영 비용 최적화",
            metrics: "운영 비용 30% 절감"
        }
    ],

    useCases: [
        {
            title: "IT 서비스 데스크",
            description: "내부 IT 요청과 장애 처리를 체계적으로 관리",
            features: [
                "자동 티켓 분류 및 우선순위 설정",
                "SLA 기반 자동 에스컬레이션",
                "지식베이스 연동으로 빠른 문제 해결",
                "성과 대시보드로 팀 효율성 모니터링"
            ]
        },
        {
            title: "고객 서비스 운영",
            description: "외부 고객 문의와 요청사항을 효율적으로 처리",
            features: [
                "다채널 통합 고객 문의 관리",
                "AI 기반 자동 응답 및 해결책 제안",
                "고객 포털을 통한 셀프 서비스 지원",
                "실시간 만족도 조사 및 피드백 수집"
            ]
        },
        {
            title: "프로젝트 서비스 관리",
            description: "복잡한 프로젝트의 서비스 요청을 체계적으로 관리",
            features: [
                "프로젝트별 맞춤형 워크플로우 설정",
                "리소스 배분 및 일정 최적화",
                "이해관계자 간 투명한 소통 채널",
                "예산 및 진행률 실시간 추적"
            ]
        },
        {
            title: "시설 관리 서비스",
            description: "사무실 및 시설 관련 요청을 통합 관리",
            features: [
                "시설 예약 및 유지보수 요청 관리",
                "자동 워크오더 생성 및 배정",
                "예방적 유지보수 일정 관리",
                "비용 추적 및 예산 최적화"
            ]
        }
    ],

    faqs: [
        {
            question: "어떤 팀/기업에 적합한가요?",
            answer: "IT 및 지원 팀, 고객 서비스 부서를 포함해, 서비스 운영 효율성 및 통합을 원하는 모든 기업에 최적화되어 있습니다."
        },
        {
            question: "Monday Service의 AI 기능은 어떤 도움을 주나요?",
            answer: "AI 에이전트, 자동 분류, 스마트 라우팅, AI 제안 등을 통해 티켓 해결을 가속화하고 수동 작업을 자동화하여 서비스 효율을 극대화합니다."
        },
        {
            question: "다른 Monday 제품이나 외부 도구와 연동되나요?",
            answer: "네, monday work management 플랫폼과 완벽 통합되며, API를 통해 다양한 외부 도구와의 유연한 연동 및 확장을 지원합니다."
        },
        {
            question: "서비스 운영 현황을 어떻게 파악하고 개선할 수 있나요?",
            answer: "명확한 서비스 성능 가시성과 실시간 서비스 분석으로 데이터 기반의 의사결정을 지원하며, 병목 현상을 제거하여 지속적인 개선을 돕습니다."
        },
        {
            question: "고객들이 직접 문의하고 정보를 찾을 수 있는 기능이 있나요?",
            answer: "네, 맞춤형 고객 포털에서 고객이 요청 제출, 티켓 상태 확인, 셀프 서비스 리소스 접근을 통해 편리하게 정보를 얻을 수 있습니다."
        }
    ],

    finalCTA: {
        title: "AI 기반의 서비스 혁신 경험하세요",
        description: "Monday Service는 강력한 AI와 유연한 워크플로우로 서비스 효율을 극대화하고, 뛰어난 고객 경험을 제공합니다. 지금 바로 혁신적인 서비스 운영을 시작하세요.",
        primaryButton: { text: "가격표 보기", href: "/contact?product=monday-service" },
        secondaryButton: { text: "데모 신청하기", href: "/contact?demo=monday-service" }
    }
}

export default function MondayServicePage() {
    return <ProductPageTemplate data={mondayServiceData} />
}