import { ProductPageTemplate } from "@/components/sections/product-page-template"

const mondayWorkManagementData = {
    name: "Monday Work Management",
    subtitle: "올인원 워크 OS",
    description: "팀의 모든 프로젝트와 업무를 하나의 플랫폼에서 관리하는 차세대 워크 관리 솔루션입니다.",
    category: "협업 및 생산성 향상",
    slug: "monday-work-management",

    heroCTA: {
        primary: { text: "무료 체험 시작", href: "/contact" },
        secondary: { text: "상담 신청", href: "/contact" }
    },

    heroMedia: {
        type: "image" as const,
        src: "/monday-logo.svg",
        alt: "Monday Work Management 대시보드 스크린샷"
    },

    keyFeatures: [
        {
            icon: "settings" as const,
            title: "프로젝트 관리",
            description: "직관적인 칸반 보드와 간트 차트로 프로젝트 진행 상황을 한눈에 파악하고 관리합니다."
        },
        {
            icon: "users" as const,
            title: "팀 협업",
            description: "실시간 업데이트와 댓글 시스템으로 팀원들과 원활하게 소통하고 협업합니다."
        },
        {
            icon: "zap" as const,
            title: "자동화 워크플로우",
            description: "반복적인 작업을 자동화하여 효율성을 극대화하고 실수를 방지합니다."
        },
        {
            icon: "barChart3" as const,
            title: "데이터 분석",
            description: "실시간 대시보드와 보고서로 팀 성과를 분석하고 인사이트를 도출합니다."
        },
        {
            icon: "globe" as const,
            title: "통합 연동",
            description: "200개 이상의 앱과 연동하여 기존 워크플로우에 자연스럽게 통합됩니다."
        },
        {
            icon: "target" as const,
            title: "목표 추적",
            description: "개인 및 팀 목표를 설정하고 진행 상황을 실시간으로 추적합니다."
        }
    ],

    // 탭 기반 세부 기능
    detailedFeatureTabs: [
        {
            id: "project-management",
            label: "프로젝트 관리",
            title: "시각적 프로젝트 관리",
            description: "직관적인 인터페이스와 다양한 뷰로 복잡한 프로젝트도 쉽게 관리할 수 있습니다.",
            feature: {
                title: "다중 뷰 프로젝트 관리",
                description: "칸반, 간트, 타임라인, 달력 등 다양한 뷰로 프로젝트를 시각화하고 관리할 수 있습니다.",
                items: [
                    "다중 뷰 지원 (칸반, 간트, 타임라인, 달력)",
                    "드래그 앤 드롭으로 쉬운 작업 관리",
                    "마일스톤 및 종속성 설정",
                    "프로젝트 템플릿 라이브러리"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "프로젝트 뷰 전환 데모",
                description: "다양한 프로젝트 뷰를 전환하며 최적의 관리 방식을 찾아보세요",
                placeholder: "프로젝트 뷰 인터페이스"
            }
        },
        {
            id: "automation",
            label: "자동화",
            title: "강력한 워크플로우 자동화",
            description: "반복적인 작업을 자동화하여 팀이 더 중요한 업무에 집중할 수 있도록 지원합니다.",
            feature: {
                title: "스마트 자동화 시스템",
                description: "200개 이상의 자동화 템플릿으로 복잡한 워크플로우도 쉽게 자동화할 수 있습니다.",
                items: [
                    "200개 이상의 자동화 템플릿",
                    "조건부 자동화 규칙 설정",
                    "이메일 및 알림 자동화",
                    "상태 변경 기반 자동 액션"
                ]
            },
            interactiveArea: {
                type: "workflow" as const,
                title: "자동화 워크플로우 빌더",
                description: "노코드 방식으로 복잡한 자동화 규칙을 쉽게 설정할 수 있습니다",
                placeholder: "자동화 설정 인터페이스"
            }
        },
        {
            id: "collaboration",
            label: "팀 협업",
            title: "실시간 팀 협업 플랫폼",
            description: "팀원들과 실시간으로 소통하고 협업할 수 있는 종합적인 도구를 제공합니다.",
            feature: {
                title: "통합 협업 허브",
                description: "모든 팀 커뮤니케이션과 협업을 하나의 플랫폼에서 관리할 수 있습니다.",
                items: [
                    "실시간 업데이트 및 알림",
                    "파일 공유 및 버전 관리",
                    "댓글 및 멘션 시스템",
                    "화상 회의 통합"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "팀 협업 시뮬레이션",
                description: "실제 팀 협업 시나리오를 통해 Monday.com의 협업 기능을 체험하세요",
                placeholder: "실시간 협업 인터페이스"
            }
        }
    ],

    detailedFeatures: [
        {
            title: "시각적 프로젝트 관리",
            description: "칸반, 간트, 타임라인, 달력 등 다양한 뷰로 프로젝트를 시각화하고 관리할 수 있습니다.",
            features: [
                "다중 뷰 지원 (칸반, 간트, 타임라인, 달력)",
                "드래그 앤 드롭으로 쉬운 작업 관리",
                "마일스톤 및 종속성 설정",
                "프로젝트 템플릿 라이브러리"
            ]
        },
        {
            title: "강력한 자동화",
            description: "반복적인 작업을 자동화하여 팀이 더 중요한 업무에 집중할 수 있도록 지원합니다.",
            features: [
                "200개 이상의 자동화 템플릿",
                "조건부 자동화 규칙 설정",
                "이메일 및 알림 자동화",
                "상태 변경 기반 자동 액션"
            ]
        },
        {
            title: "실시간 협업",
            description: "팀원들과 실시간으로 소통하고 협업할 수 있는 종합적인 도구를 제공합니다.",
            features: [
                "실시간 업데이트 및 알림",
                "파일 공유 및 버전 관리",
                "댓글 및 멘션 시스템",
                "화상 회의 통합"
            ]
        },
        {
            title: "데이터 기반 인사이트",
            description: "상세한 분석과 보고서로 팀 성과를 측정하고 개선점을 찾을 수 있습니다.",
            features: [
                "맞춤형 대시보드 생성",
                "실시간 성과 추적",
                "워크로드 분석",
                "생산성 보고서"
            ]
        },
        {
            title: "광범위한 연동",
            description: "기존에 사용하던 도구들과 완벽하게 연동하여 통합된 워크스페이스를 구축합니다.",
            features: [
                "Slack, Microsoft Teams 연동",
                "Google Drive, Dropbox 연동",
                "Zoom, Outlook 연동",
                "개발자 도구 (GitHub, Jira) 연동"
            ]
        }
    ],

    integrations: {
        title: "연동 가능한 플랫폼",
        description: "200개 이상의 비즈니스 도구와 완벽하게 연동되어 기존 워크플로우에 자연스럽게 통합됩니다.",
        platforms: [
            { name: "Slack", logo: "/logos/slack.png", category: "협업 도구" },
            { name: "Microsoft Teams", logo: "/logos/teams.png", category: "협업 도구" },
            { name: "Google Drive", logo: "/logos/googledrive.png", category: "클라우드 저장소" },
            { name: "Dropbox", logo: "/logos/dropbox.png", category: "클라우드 저장소" },
            { name: "Zoom", logo: "/logos/zoom.png", category: "화상 회의" },
            { name: "GitHub", logo: "/logos/github.png", category: "개발 도구" },
            { name: "Jira", logo: "/logos/jira.png", category: "개발 도구" },
            { name: "Outlook", logo: "/logos/outlook.png", category: "이메일" }
        ]
    },

    faqs: [
        {
            question: "Monday Work Management는 어떤 규모의 팀에 적합한가요?",
            answer: "소규모 스타트업부터 대기업까지 모든 규모의 팀에 적합합니다. 사용자 수에 따라 유연하게 확장할 수 있으며, 각 팀의 워크플로우에 맞게 커스터마이징이 가능합니다."
        },
        {
            question: "기존 도구에서 데이터를 마이그레이션할 수 있나요?",
            answer: "네, Excel, Trello, Asana, Jira 등 다양한 도구에서 데이터를 쉽게 가져올 수 있습니다. 전용 임포트 도구와 CSV 업로드 기능을 제공합니다."
        },
        {
            question: "모바일에서도 사용할 수 있나요?",
            answer: "iOS와 Android 전용 모바일 앱을 제공하여 언제 어디서나 프로젝트를 관리하고 팀과 소통할 수 있습니다. 모든 데스크톱 기능이 모바일에서도 지원됩니다."
        },
        {
            question: "보안은 어떻게 관리되나요?",
            answer: "엔터프라이즈급 보안을 제공합니다. SOC 2 Type II 인증, ISO 27001 인증을 받았으며, 2단계 인증, IP 제한, SAML SSO 등의 고급 보안 기능을 지원합니다."
        }
    ],

    finalCTA: {
        title: "Monday Work Management로 팀의 생산성을 혁신하세요",
        description: "직관적인 인터페이스와 강력한 기능으로 팀의 협업과 프로젝트 관리를 한 단계 업그레이드하세요. 지금 바로 무료 체험을 시작해보세요.",
        primaryButton: { text: "무료 체험 시작", href: "/contact" },
        secondaryButton: { text: "상담 신청", href: "/contact" }
    }
}

export default function MondayWorkManagementPage() {
    return <ProductPageTemplate data={mondayWorkManagementData} />
}