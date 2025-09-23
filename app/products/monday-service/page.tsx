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

// XML에서 추출한 실제 콘텐츠 기반 데이터
const mondayServiceData: ProductPageData = {
    name: "Monday Service",
    subtitle: "AI 기반 서비스 관리의 혁신",
    description: "AI 기반의 혁신적인 기능과 맞춤형 워크플로우로, 효율적인 서비스 운영과 뛰어난 고객 경험을 제공합니다.",
    category: "협업 및 생산성 향상",
    slug: "monday-service",
    heroCTA: {
        primary: { text: "무료 체험 시작", href: "/contact?product=monday-service" },
        secondary: { text: "상담 문의", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "zap",
            title: "AI 제안 기능",
            description: "인공지능이 서비스 패턴을 분석하여 최적화된 업무 방식을 자동으로 제안합니다."
        },
        {
            icon: "settings",
            title: "맞춤형 워크플로우",
            description: "팀의 업무 스타일에 맞춰 유연하게 조정할 수 있는 워크플로우를 제공합니다."
        },
        {
            icon: "users",
            title: "고객 포털",
            description: "고객이 직접 요청을 제출하고 진행 상황을 확인할 수 있는 전용 포털을 제공합니다."
        },
        {
            icon: "barChart3",
            title: "실시간 분석",
            description: "서비스 성과와 팀 효율성을 실시간으로 모니터링하고 개선점을 파악합니다."
        },
        {
            icon: "messageSquare",
            title: "통합 커뮤니케이션",
            description: "팀 내부 및 고객과의 모든 소통을 하나의 플랫폼에서 관리합니다."
        },
        {
            icon: "headphones",
            title: "24/7 지원",
            description: "AI 기반 자동 응답과 에스컬레이션으로 연중무휴 고객 지원을 제공합니다."
        }
    ],

    // 탭 기반 세부 기능
    detailedFeatureTabs: [
        {
            id: "automation",
            label: "AI 자동화",
            title: "AI 기반 서비스 자동화",
            description: "인공지능이 반복적인 서비스 요청을 자동으로 처리하고 복잡한 케이스는 적절한 담당자에게 배정합니다.",
            feature: {
                title: "스마트 요청 처리 시스템",
                description: "AI가 서비스 요청을 분석하여 자동으로 분류하고 우선순위를 설정합니다.",
                items: [
                    "AI 기반 자동 분류",
                    "스마트 우선순위 설정",
                    "자동 담당자 배정",
                    "예측적 리소스 할당"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "AI 자동화 워크플로우",
                description: "요청 접수부터 해결까지 AI가 관리하는 전체 프로세스를 확인하세요",
                placeholder: "AI 기반 서비스 요청 처리 과정"
            }
        },
        {
            id: "tracking",
            label: "실시간 추적",
            title: "실시간 서비스 추적 및 모니터링",
            description: "모든 서비스 요청의 진행 상황을 실시간으로 추적하고 SLA 준수를 보장합니다.",
            feature: {
                title: "통합 서비스 대시보드",
                description: "진행 중인 모든 서비스를 한 화면에서 모니터링하고 관리할 수 있습니다.",
                items: [
                    "실시간 진행 상황 추적",
                    "SLA 위반 조기 경고",
                    "팀 워크로드 분산",
                    "성과 지표 모니터링"
                ]
            },
            interactiveArea: {
                type: "dashboard",
                title: "서비스 관리 대시보드",
                description: "팀의 서비스 현황과 성과를 실시간으로 확인하세요",
                placeholder: "실시간 서비스 현황 대시보드"
            }
        },
        {
            id: "collaboration",
            label: "팀 협업",
            title: "효율적인 팀 협업 도구",
            description: "팀원 간의 원활한 소통과 협업을 통해 서비스 품질을 향상시킵니다.",
            feature: {
                title: "통합 커뮤니케이션 허브",
                description: "서비스 관련 모든 소통을 중앙화하여 정보 손실을 방지하고 투명성을 보장합니다.",
                items: [
                    "실시간 팀 채팅",
                    "서비스별 토론 스레드",
                    "파일 공유 및 버전 관리",
                    "고객과의 직접 소통"
                ]
            },
            interactiveArea: {
                type: "demo",
                title: "팀 협업 시뮬레이션",
                description: "실제 서비스 시나리오에서의 팀 협업 과정을 경험해보세요",
                placeholder: "팀 협업 인터페이스"
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
            question: "Monday Service의 AI 기능은 어떤 도움을 주나요?",
            answer: "Monday Service의 AI는 서비스 패턴을 분석하여 업무 우선순위를 자동으로 설정하고, 과거 데이터를 기반으로 해결책을 제안하며, 반복적인 작업을 자동화합니다. 또한 고객 만족도를 예측하고 개선 방안을 추천해줍니다."
        },
        {
            question: "기존 시스템과 연동이 가능한가요?",
            answer: "네, Monday Service는 다양한 third-party 도구들과 연동 가능합니다. API를 통해 기존 CRM, ERP, 커뮤니케이션 도구들과 seamless하게 연결할 수 있어 기존 워크플로우를 그대로 유지하면서 효율성을 높일 수 있습니다."
        },
        {
            question: "팀 규모에 제한이 있나요?",
            answer: "Monday Service는 소규모 팀부터 대기업까지 모든 규모의 조직에 적합합니다. 사용자 수와 요구사항에 따라 유연하게 확장 가능하며, 각 팀의 워크플로우에 맞춰 커스터마이징할 수 있습니다."
        },
        {
            question: "도입 과정은 얼마나 걸리나요?",
            answer: "기본 설정은 1-2주 내에 완료할 수 있습니다. 복잡한 워크플로우나 third-party 연동이 필요한 경우 4-6주 정도 소요됩니다. 위두소프트의 전문 컨설턴트가 전 과정을 지원하여 빠르고 안전한 도입을 보장합니다."
        },
        {
            question: "교육 및 지원은 어떻게 제공되나요?",
            answer: "포괄적인 온보딩 교육, 맞춤형 워크숍, 온라인 리소스를 제공합니다. 도입 후에도 지속적인 기술 지원과 정기적인 최적화 컨설팅을 통해 Monday Service의 효과를 극대화할 수 있도록 도와드립니다."
        }
    ],

    finalCTA: {
        title: "Monday Service로 서비스 효율을 극대화하세요",
        description: "강력한 AI와 유연한 워크플로우로 서비스 운영을 혁신하고, 뛰어난 고객 경험을 제공하세요. 지금 바로 시작하세요.",
        primaryButton: { text: "무료 체험 신청", href: "/contact?product=monday-service" },
        secondaryButton: { text: "상담 문의", href: "/contact" }
    }
}

export default function MondayServicePage() {
    return <ProductPageTemplate data={mondayServiceData} />
}