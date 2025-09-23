import { Metadata } from 'next'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export const metadata: Metadata = {
    title: 'Freshservice | 위두소프트 - IT 서비스 관리의 혁신',
    description: 'ITIL 기반의 종합적인 IT 서비스 관리 플랫폼으로 IT 운영의 효율성을 극대화하고 사용자 만족도를 높이세요.',
    keywords: 'Freshservice, ITSM, IT서비스관리, 헬프데스크, ITIL, IT운영',
    openGraph: {
        title: 'Freshservice | 위두소프트 - IT 서비스 관리의 혁신',
        description: 'ITIL 기반의 종합적인 IT 서비스 관리 플랫폼으로 IT 운영 효율성을 극대화하세요',
        type: 'website',
        locale: 'ko_KR',
    },
}

// docs에서 추출한 실제 콘텐츠 기반 데이터
const freshserviceData: ProductPageData = {
    name: "Freshservice",
    subtitle: "모든 비즈니스를 위한 엔터프라이즈급 ITSM 솔루션",
    description: "티켓부터 자산, 변경 관리까지 모든 IT 서비스를 하나의 플랫폼에서 자동화 운영하세요. IT 팀의 업무 부담을 줄이고, 직원들의 문제 해결 속도와 만족도를 높입니다.",
    category: "IT SERVICE MANAGEMENT",
    slug: "freshservice",
    heroCTA: {
        primary: { text: "데모 신청하기", href: "/contact?demo=freshservice" },
        secondary: { text: "자세히 보기", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "settings",
            title: "IT 서비스 관리",
            description: "AI 기반 자동화와 셀프서비스 포털을 통해 IT 팀의 업무 부담을 줄이고, 직원들의 문제 해결 속도와 만족도를 높입니다"
        },
        {
            icon: "users",
            title: "통합 워크스페이스",
            description: "IT, 운영 및 비즈니스 등 다양한 팀이 하나의 플랫폼에서 협업하며, 조직 전체의 생산성이 향상됩니다."
        },
        {
            icon: "shield",
            title: "리스크 관리",
            description: "업무 중단 리스크를 사전에 식별하고 변경 관련 사고를 40% 이상 감소시킵니다."
        }
    ],

    // docs 원본 콘텐츠 기반 5개 탭
    detailedFeatureTabs: [
        {
            id: "change-release",
            label: "변경 및 릴리즈 관리",
            title: "변경 및 릴리즈 관리 체계화",
            description: "변경 요청부터 승인, 배포까지 전 과정을 체계적으로 추적하고 관리합니다. 리스크를 사전에 식별하고 업무 중단 가능성을 최소화하는 프로세스를 구현합니다.",
            feature: {
                title: "체계적인 변경 관리 프로세스",
                description: "변경 관련 사고가 40% 이상 감소하며, 안정적인 서비스 운영이 가능합니다.",
                items: [
                    "변경 요청 표준화",
                    "승인 워크플로우 자동화",
                    "리스크 사전 식별",
                    "배포 일정 관리",
                    "변경 이력 추적"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "변경 관리 워크플로우",
                description: "요청부터 배포까지의 전체 변경 관리 과정을 시각화합니다",
                placeholder: "변경 관리 프로세스 플로우"
            }
        },
        {
            id: "self-service",
            label: "셀프서비스 포털",
            title: "셀프서비스 포털 활용률 향상",
            description: "직원들이 FAQ나 워크플로우를 통해 직접 문제를 해결하여, 티켓 발생률을 최대 30% 감소시킵니다.",
            feature: {
                title: "지능형 셀프서비스 시스템",
                description: "사용자가 스스로 문제를 해결할 수 있는 직관적인 포털을 제공합니다.",
                items: [
                    "지능형 FAQ 검색",
                    "자동화된 워크플로우",
                    "요청 상태 실시간 추적",
                    "개인화된 서비스 카탈로그",
                    "모바일 최적화 인터페이스"
                ]
            },
            interactiveArea: {
                type: "demo",
                title: "셀프서비스 포털 데모",
                description: "직원들이 직접 문제를 해결하는 과정을 체험하세요",
                placeholder: "셀프서비스 포털 시뮬레이션"
            }
        },
        {
            id: "asset-management",
            label: "통합 자산 관리",
            title: "통합 자산 관리",
            description: "하드웨어, 소프트웨어 자산을 하나의 플랫폼에서 통합 관리하여 자산 현황을 실시간으로 파악합니다.",
            feature: {
                title: "CMDB 기반 자산 관리",
                description: "모든 IT 자산의 라이프사이클을 추적하고 최적화된 자산 운영을 지원합니다.",
                items: [
                    "자동 자산 탐지",
                    "라이선스 관리",
                    "자산 관계 매핑",
                    "감가상각 추적",
                    "구매 및 계약 관리"
                ]
            },
            interactiveArea: {
                type: "dashboard",
                title: "자산 관리 대시보드",
                description: "IT 자산 현황을 실시간으로 확인하고 관리하세요",
                placeholder: "통합 자산 관리 대시보드"
            }
        },
        {
            id: "automation-workflow",
            label: "자동화 워크플로우",
            title: "자동화된 승인 및 워크플로우",
            description: "Freddy AI가 들어오는 티켓을 자동으로 분류하고 중요도에 따라 우선순위를 지정합니다. 이를 통해 반복적인 수작업을 줄여보세요.",
            feature: {
                title: "AI 기반 티켓 분류 및 자동 응답",
                description: "Freddy AI가 티켓을 자동 분류하고 우선순위를 지정하여, 처리 시간을 최대 80% 단축시킵니다.",
                items: [
                    "AI 기반 자동 분류",
                    "우선순위 자동 지정",
                    "지능형 티켓 라우팅",
                    "자동 응답 생성",
                    "SLA 자동 관리"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "AI 자동화 워크플로우",
                description: "Freddy AI가 티켓을 처리하는 자동화 과정을 확인하세요",
                placeholder: "AI 기반 자동화 프로세스"
            }
        },
        {
            id: "multi-team",
            label: "멀티팀 협업",
            title: "멀티팀 협업 지원",
            description: "HR, 총무, 시설관리 등 비IT 부서도 동일한 서비스 포털을 활용해 요청을 처리할 수 있습니다. 하나의 플랫폼에서 협업하며, 조직 전체의 생산성이 향상됩니다.",
            feature: {
                title: "통합 협업 플랫폼",
                description: "IT 팀뿐만 아니라 모든 부서가 함께 사용할 수 있는 통합 서비스 관리 플랫폼입니다.",
                items: [
                    "부서별 서비스 카탈로그",
                    "크로스 팀 협업 도구",
                    "통합 승인 프로세스",
                    "역할 기반 접근 제어",
                    "조직 전체 대시보드"
                ]
            },
            interactiveArea: {
                type: "feature-map",
                title: "멀티팀 협업 구조",
                description: "다양한 부서가 하나의 플랫폼에서 협업하는 구조를 확인하세요",
                placeholder: "조직 전체 협업 생태계"
            }
        }
    ],

    benefits: [
        {
            title: "IT 운영 효율성 향상",
            description: "자동화된 워크플로우와 ITIL 모범 사례로 IT 운영의 효율성을 크게 향상시킵니다.",
            metrics: "운영 효율성 60% 향상"
        },
        {
            title: "문제 해결 시간 단축",
            description: "체계적인 사고 관리와 지식베이스 활용으로 문제 해결 시간을 대폭 단축합니다.",
            metrics: "평균 해결 시간 45% 단축"
        },
        {
            title: "IT 비용 최적화",
            description: "자산 최적화와 예방적 유지보수로 IT 운영 비용을 효과적으로 관리합니다.",
            metrics: "IT 비용 25% 절감"
        },
        {
            title: "사용자 만족도 증대",
            description: "빠른 응답과 투명한 소통으로 내부 사용자의 IT 서비스 만족도를 높입니다.",
            metrics: "사용자 만족도 80% 향상"
        },
        {
            title: "컴플라이언스 강화",
            description: "ITIL, ISO 20000 등 IT 거버넌스 표준을 준수하고 감사 준비를 간소화합니다.",
            metrics: "100% 컴플라이언스 달성"
        },
        {
            title: "비즈니스 연속성",
            description: "신속한 사고 대응과 체계적인 변경 관리로 비즈니스 서비스의 연속성을 보장합니다.",
            metrics: "99.9% 서비스 가용성"
        }
    ],

    useCases: [
        {
            title: "중견기업 IT 팀",
            description: "성장하는 기업의 복잡해지는 IT 환경을 체계적으로 관리하고 싶은 IT 팀에 최적입니다.",
            features: [
                "통합 IT 자산 관리",
                "표준화된 IT 프로세스",
                "자동화된 워크플로우",
                "성과 측정 대시보드"
            ]
        },
        {
            title: "대기업 IT 서비스 센터",
            description: "복잡한 IT 인프라와 다양한 비즈니스 요구사항을 효율적으로 관리해야 하는 대기업 환경에 적합합니다.",
            features: [
                "엔터프라이즈급 보안",
                "고급 SLA 관리",
                "다국가 지원",
                "커스텀 워크플로우"
            ]
        },
        {
            title: "MSP 서비스 제공업체",
            description: "여러 고객사의 IT 서비스를 통합 관리하는 매니지드 서비스 프로바이더에게 필수적인 도구입니다.",
            features: [
                "멀티 테넌트 구조",
                "고객별 서비스 구분",
                "통합 빌링 시스템",
                "브랜딩 커스터마이징"
            ]
        },
        {
            title: "클라우드 우선 기업",
            description: "클라우드 전환을 추진하는 기업의 하이브리드 IT 환경 관리를 지원합니다.",
            features: [
                "클라우드 자산 관리",
                "DevOps 프로세스 통합",
                "API 기반 자동화",
                "클라우드 비용 최적화"
            ]
        }
    ],

    faqs: [
        {
            question: "Freshservice의 자산관리 및 기타 데이터는 어떻게 이관하나요?",
            answer: "CSV 업로드로 손쉽게 자산 데이터를 가져오세요. 데이터 필드를 Freshservice 필드와 동일하게 매핑하고 태그도 추가할 수 있습니다. 가져오기 진행 상황과 발생 오류도 실시간으로 안내드립니다."
        },
        {
            question: "서비스 관리가 실제로 효과적인 이유는 무엇일까요?",
            answer: "Freshservice를 사용하는 100개 이상의 국가와 9,000개 이상의 조직에 걸쳐 14개 산업의 주요 정보를 토대로 구식 도구 개선 및 IT 효율성 향상을 통해 6개월 이내에 356%의 ROI 달성, 자동화된 워크플로를 통해 평균 해결 시간(ART) 26.63% 단축 등의 효과를 제공합니다."
        },
        {
            question: "ITSM에서 요청자와 승인자란?",
            answer: "Freshservice에서 요청자는 IT 서비스나 자원을 요청하는 사용자입니다. 예를 들어, 새로운 하드웨어 장비나 소프트웨어 설치를 요청하는 사람이 요청자가 됩니다. 승인자는 해당 요청에 대해 승인이나 거부 결정을 내리는 역할을 합니다. 보통 팀 리더나 관리자급 사용자가 승인자로 설정됩니다."
        },
        {
            question: "마켓플레이스에서 Freshservice와의 연동을 지원하는 대표적인 앱은?",
            answer: "Freshservice는 대표적으로 다음 앱과 연동을 지원합니다: Slack, Microsoft Teams, Github, Splashtop 등 다수의 비즈니스 도구와 연동 가능합니다."
        }
    ],

    finalCTA: {
        title: "IT 운영 전반을 혁신합니다",
        description: "Freshservice로 IT 팀의 업무 부담을 줄이고, 직원들의 문제 해결 속도와 만족도를 높여보세요. AI 자동화, 셀프서비스, 자산 및 워크플로우 관리로 반복 업무를 줄이고 처리 시간을 단축합니다.",
        primaryButton: { text: "데모 신청하기", href: "/contact?demo=freshservice" },
        secondaryButton: { text: "가격표 보기", href: "/contact?product=freshservice" }
    }
}

export default function FreshservicePage() {
    return <ProductPageTemplate data={freshserviceData} />
}