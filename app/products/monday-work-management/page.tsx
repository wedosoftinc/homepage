import { ProductPageTemplate } from "@/components/sections/product-page-template"

const mondayWorkManagementData = {
    name: "Monday Work Management",
    subtitle: "The All-in-One Visual OS",
    description: "팀의 모든 업무를 통합하고 시각화하는 올인원 운영 체제",
    category: "협업 및 생산성 향상",
    slug: "monday-work-management",

    heroCTA: {
        primary: { text: "데모 신청하기", href: "/contact?demo=monday-work-management" },
        secondary: { text: "자세히 보기", href: "/contact?product=monday-work-management" }
    },

    heroMedia: {
        type: "image" as const,
        src: "/monday-logo.svg",
        alt: "Monday Work Management 대시보드 스크린샷"
    },

    keyFeatures: [
        {
            icon: "settings" as const,
            title: "직관적인 인터페이스",
            description: "쉽고 직관적인 사용법으로 별도의 트레이닝이 필요 없어 팀이 빠르게 적응하고 생산성 증가 가능"
        },
        {
            icon: "zap" as const,
            title: "유연한 워크플로우",
            description: "몇 분 만에 이상적인 워크플로우를 만들거나, 200개 이상의 전문가 템플릿에서 선택하여 빠르게 시작 가능"
        },
        {
            icon: "users" as const,
            title: "통합된 협업 도구",
            description: "팀원 및 외부 게스트와 원활하게 소통, 파일 첨부및 화상회의 연동으로 모든 협업을 한 곳에서 완성"
        }
    ],

    // 탭 기반 세부 기능 (6개 - docs 기반)
    detailedFeatureTabs: [
        {
            id: "custom-workflow",
            label: "맞춤형 워크플로우",
            title: "맞춤형 워크플로우",
            description: "그룹, 아이템, 하위 아이템, 업데이트까지 모든 것을 실제 프로젝트 및 프로세스와 실시간으로 동기화하여 맞춤형 워크플로우를 구축합니다.",
            feature: {
                title: "실제 업무에 맞춘 완벽한 워크플로우",
                description: "팀의 실제 업무 프로세스를 그대로 반영한 워크플로우를 구축할 수 있습니다.",
                items: [
                    "그룹 및 아이템 구조화",
                    "하위 아이템 계층 관리",
                    "실시간 업데이트 동기화",
                    "프로세스 맞춤 설정"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "워크플로우 구축 도구",
                description: "드래그 앤 드롭으로 나만의 워크플로우를 구축해보세요",
                placeholder: "맞춤형 워크플로우 설계"
            }
        },
        {
            id: "status-management",
            label: "상태 관리",
            title: "상태 관리",
            description: "팀의 실제 업무 진행 상황을 반영하는 상태 버튼으로 모든 업데이트 진행상황을 한눈에 파악하고 직관적으로 관리할 수 있습니다.",
            feature: {
                title: "직관적인 진행 상황 추적",
                description: "시각적인 상태 표시로 업무 진행 상황을 즉시 파악할 수 있습니다.",
                items: [
                    "시각적 상태 버튼",
                    "실시간 진행 상황 추적",
                    "직관적인 상태 변경",
                    "팀 전체 현황 파악"
                ]
            },
            interactiveArea: {
                type: "dashboard" as const,
                title: "상태 관리 대시보드",
                description: "팀의 모든 업무 상태를 한눈에 확인하고 관리하세요",
                placeholder: "업무 상태 추적 대시보드"
            }
        },
        {
            id: "integrated-communication",
            label: "통합 커뮤니케이션",
            title: "통합 커뮤니케이션",
            description: "각 업무 아이템 내에서 직접 대화하고 협업하여, 모든 대화가 업무 맥락에 맞춰 효율적으로 이루어집니다.",
            feature: {
                title: "업무 맥락에 맞춘 소통",
                description: "업무별로 구분된 대화 공간에서 효율적인 커뮤니케이션이 가능합니다.",
                items: [
                    "업무별 대화 공간",
                    "맥락 기반 협업",
                    "실시간 소통",
                    "효율적인 정보 공유"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "통합 커뮤니케이션 허브",
                description: "업무와 연결된 대화 시스템을 경험해보세요",
                placeholder: "업무별 커뮤니케이션 인터페이스"
            }
        },
        {
            id: "automation",
            label: "자동화",
            title: "자동화",
            description: "반복적인 작업을 자동화하여 팀의 시간을 절약하고, 생산성을 극대화합니다.",
            feature: {
                title: "시간 절약과 생산성 극대화",
                description: "반복 업무를 자동화하여 팀이 더 중요한 일에 집중할 수 있도록 지원합니다.",
                items: [
                    "반복 작업 자동화",
                    "시간 절약 솔루션",
                    "생산성 최적화",
                    "스마트 워크플로우"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "자동화 설정 도구",
                description: "복잡한 자동화 규칙을 쉽게 설정하고 관리하세요",
                placeholder: "자동화 워크플로우 빌더"
            }
        },
        {
            id: "data-visualization",
            label: "데이터 시각화",
            title: "데이터 시각화",
            description: "다양한 보드, 컬럼, 뷰 기능으로 데이터를 원하는 방식으로 쉽게 시각화하여, 팀의 의사결정을 빠르게 지원합니다.",
            feature: {
                title: "빠른 의사결정을 위한 시각화",
                description: "복잡한 데이터도 직관적인 형태로 변환하여 신속한 판단을 도와줍니다.",
                items: [
                    "다양한 보드 뷰",
                    "커스텀 컬럼 설정",
                    "유연한 데이터 표현",
                    "의사결정 지원"
                ]
            },
            interactiveArea: {
                type: "dashboard" as const,
                title: "데이터 시각화 도구",
                description: "다양한 방식으로 데이터를 시각화하고 분석하세요",
                placeholder: "데이터 시각화 대시보드"
            }
        },
        {
            id: "template-library",
            label: "템플릿 라이브러리",
            title: "템플릿 라이브러리",
            description: "약 200개 이상의 전문 템플릿 제공으로 프로젝트, 캠페인 등의 업무를 복잡한 설정 없이 빠르게 시작할 수 있습니다.",
            feature: {
                title: "빠른 시작을 위한 전문 템플릿",
                description: "업계 전문가들이 만든 템플릿으로 즉시 업무를 시작할 수 있습니다.",
                items: [
                    "200개 이상의 전문 템플릿",
                    "복잡한 설정 불필요",
                    "빠른 프로젝트 시작",
                    "업종별 맞춤 템플릿"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "템플릿 갤러리",
                description: "다양한 업무 템플릿을 둘러보고 선택해보세요",
                placeholder: "템플릿 라이브러리 브라우저"
            }
        }
    ],

    faqs: [
        {
            question: "Monday Work Management의 가격은 어떻게 되나요?",
            answer: "Basic 플랜 월 $8/사용자부터 시작하며, Standard 플랜 월 $10/사용자, Pro 플랜 월 $16/사용자, Enterprise 플랜 월 $24/사용자까지 다양한 요금제를 제공합니다. 모든 플랜에서 14일 무료 체험이 가능합니다."
        },
        {
            question: "다른 툴과의 연동이 가능한가요?",
            answer: "네, Slack, Microsoft Teams, Google Workspace, Outlook, Jira, Trello, Salesforce 등 40개 이상의 인기 도구와 연동이 가능합니다. API를 통한 커스텀 연동도 지원합니다."
        },
        {
            question: "데이터 보안은 어떻게 보장되나요?",
            answer: "SOC 2 Type II, ISO 27001 인증을 받았으며, 업계 최고 수준의 암호화와 보안 프로토콜을 사용합니다. GDPR 및 HIPAA 규정을 준수하여 데이터를 안전하게 보호합니다."
        },
        {
            question: "팀원이 많은 조직에서도 사용할 수 있나요?",
            answer: "네, 소규모 팀부터 수천 명의 대기업까지 모든 규모의 조직에서 사용할 수 있습니다. Enterprise 플랜에서는 고급 보안, 관리 기능, 전담 지원 등을 제공합니다."
        },
        {
            question: "Monday Work Management를 사용하기 위해 특별한 교육이 필요한가요?",
            answer: "직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다. 추가로 온라인 교육, 웨비나, 전담 고객 성공 관리자를 통한 지원도 제공하여 빠른 도입을 돕습니다."
        }
    ],

    finalCTA: {
        title: "Monday Work Management로 업무 효율성을 혁신하세요",
        description: "약 200개의 전문 템플릿과 강력한 자동화 기능으로 팀의 생산성을 극대화하고, 복잡한 프로젝트도 쉽게 관리할 수 있습니다. 지금 무료 체험으로 시작해보세요.",
        primaryButton: { text: "무료 체험 시작", href: "/contact" },
        secondaryButton: { text: "전문가 상담", href: "/contact" }
    }
}

export default function MondayWorkManagementPage() {
    return <ProductPageTemplate data={mondayWorkManagementData} />
}