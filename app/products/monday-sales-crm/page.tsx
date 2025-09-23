import { ProductPageTemplate } from "@/components/sections/product-page-template"

const mondaySalesCrmData = {
    name: "Monday Sales CRM",
    subtitle: "세일즈 파이프라인 관리",
    description: "영업 프로세스를 체계화하고 거래를 더 빠르게 성사시키는 스마트한 CRM 솔루션입니다.",
    category: "협업 및 생산성 향상",
    slug: "monday-sales-crm",

    heroCTA: {
        primary: { text: "무료 체험 시작", href: "/contact" },
        secondary: { text: "상담 신청", href: "/contact" }
    },

    heroMedia: {
        type: "image" as const,
        src: "/monday-logo.svg",
        alt: "Monday Sales CRM 대시보드 스크린샷"
    },

    keyFeatures: [
        {
            icon: "users" as const,
            title: "리드 관리",
            description: "리드 획득부터 고객 전환까지 모든 과정을 체계적으로 관리합니다."
        },
        {
            icon: "barChart3" as const,
            title: "세일즈 파이프라인",
            description: "시각적인 파이프라인으로 영업 기회를 추적하고 성과를 분석합니다."
        },
        {
            icon: "target" as const,
            title: "영업 자동화",
            description: "반복적인 영업 활동을 자동화하여 더 많은 시간을 고객에게 집중합니다."
        },
        {
            icon: "phone" as const,
            title: "활동 추적",
            description: "통화, 이메일, 미팅 등 모든 고객 접촉 이력을 한 곳에서 관리합니다."
        },
        {
            icon: "star" as const,
            title: "성과 분석",
            description: "실시간 대시보드로 영업 성과를 측정하고 개선점을 찾습니다."
        },
        {
            icon: "globe" as const,
            title: "팀 협업",
            description: "영업팀 전체가 고객 정보와 진행 상황을 실시간으로 공유합니다."
        }
    ],

    detailedFeatures: [
        {
            title: "지능형 리드 관리",
            description: "리드 스코어링과 자동 분류로 가장 가능성 높은 영업 기회에 집중할 수 있습니다.",
            features: [
                "자동 리드 스코어링",
                "리드 소스 추적",
                "리드 너처링 자동화",
                "중복 리드 자동 병합"
            ]
        },
        {
            title: "시각적 파이프라인 관리",
            description: "드래그 앤 드롭으로 쉽게 거래를 관리하고 진행 상황을 한눈에 파악합니다.",
            features: [
                "커스터마이징 가능한 파이프라인 단계",
                "거래 확률 및 예상 마감일 설정",
                "파이프라인별 성과 분석",
                "예측 분석 및 포케스팅"
            ]
        },
        {
            title: "영업 활동 자동화",
            description: "반복적인 작업을 자동화하여 영업 효율성을 극대화합니다.",
            features: [
                "이메일 템플릿 및 자동 발송",
                "후속 조치 자동 알림",
                "미팅 스케줄링 자동화",
                "제안서 자동 생성"
            ]
        },
        {
            title: "고객 360도 뷰",
            description: "고객의 모든 정보를 한 곳에서 확인하여 개인화된 영업 접근이 가능합니다.",
            features: [
                "완전한 고객 프로필",
                "상호작용 이력 추적",
                "구매 패턴 분석",
                "커스텀 필드 및 태그"
            ]
        },
        {
            title: "실시간 성과 분석",
            description: "데이터 기반 인사이트로 영업 전략을 최적화하고 성과를 향상시킵니다.",
            features: [
                "개인 및 팀 성과 대시보드",
                "전환율 및 수익 분석",
                "활동 추적 및 생산성 측정",
                "맞춤형 보고서 생성"
            ]
        }
    ],

    integrations: {
        title: "연동 가능한 플랫폼",
        description: "기존에 사용하던 영업 도구들과 완벽하게 연동하여 통합된 영업 환경을 구축합니다.",
        platforms: [
            { name: "Gmail", logo: "/logos/gmail.png", category: "이메일" },
            { name: "Outlook", logo: "/logos/outlook.png", category: "이메일" },
            { name: "Zoom", logo: "/logos/zoom.png", category: "화상 회의" },
            { name: "Calendly", logo: "/logos/calendly.png", category: "스케줄링" },
            { name: "Slack", logo: "/logos/slack.png", category: "협업" },
            { name: "Microsoft Teams", logo: "/logos/teams.png", category: "협업" },
            { name: "LinkedIn", logo: "/logos/linkedin.png", category: "소셜 네트워킹" },
            { name: "HubSpot", logo: "/logos/hubspot.png", category: "마케팅" }
        ]
    },

    faqs: [
        {
            question: "기존 CRM에서 데이터를 가져올 수 있나요?",
            answer: "네, Salesforce, HubSpot, Pipedrive 등 주요 CRM 시스템에서 데이터를 쉽게 가져올 수 있습니다. CSV 파일을 통한 일괄 업로드도 지원합니다."
        },
        {
            question: "영업팀 규모에 제한이 있나요?",
            answer: "소규모 영업팀부터 대규모 영업 조직까지 모든 규모에 적합합니다. 사용자 수에 따라 유연하게 확장할 수 있으며, 팀별 권한 관리도 가능합니다."
        },
        {
            question: "모바일에서도 사용할 수 있나요?",
            answer: "iOS와 Android 전용 앱을 제공하여 이동 중에도 리드를 관리하고 고객과 소통할 수 있습니다. 오프라인에서도 일부 기능을 사용할 수 있습니다."
        },
        {
            question: "이메일 마케팅 기능도 있나요?",
            answer: "기본적인 이메일 자동화와 템플릿 기능을 제공하며, Mailchimp, Constant Contact 등 전문 이메일 마케팅 도구와 연동할 수 있습니다."
        }
    ],

    finalCTA: {
        title: "Monday Sales CRM으로 영업 성과를 극대화하세요",
        description: "체계적인 파이프라인 관리와 자동화 기능으로 더 많은 거래를 성사시키고 수익을 늘려보세요. 지금 바로 무료 체험을 시작하세요.",
        primaryButton: { text: "무료 체험 시작", href: "/contact" },
        secondaryButton: { text: "상담 신청", href: "/contact" }
    }
}

export default function MondaySalesCrmPage() {
    return <ProductPageTemplate data={mondaySalesCrmData} />
}