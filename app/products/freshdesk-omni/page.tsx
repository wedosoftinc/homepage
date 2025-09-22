import { ProductPageTemplate } from "@/components/sections/product-page-template"
import { StepByStepDemo } from "@/components/ui/step-by-step-demo"

const freshdeskOmniData = {
    name: "Freshdesk Omni",
    subtitle: "옴니채널 고객 지원 플랫폼",
    description: "이메일, 채팅, 전화, 소셜 미디어를 하나의 플랫폼에서 통합 관리하는 옴니채널 고객 지원 솔루션입니다.",
    category: "고객 경험 관리",
    slug: "freshdesk-omni",

    heroCTA: {
        primary: { text: "무료 체험 시작", href: "/contact" },
        secondary: { text: "상담 신청", href: "/contact" }
    },

    // Hero 이미지 추가
    heroMedia: {
        type: "image" as const,
        src: "/freshdesk-logo.png",
        alt: "Freshdesk Omni 대시보드 스크린샷"
    },

    keyFeatures: [
        {
            icon: "messageSquare" as const,
            title: "AI 자동 챗봇",
            description: "보편적이지 않은 전문 기술 답변도 문제 없습니다! 나만의 지식 베이스에 맞춰 커스텀 AI로 학습시켜보세요.",
            // 특징별 이미지 추가 (실제 이미지 있을 때 활성화)
            // image: {
            //   src: "/freshdesk-ai-chatbot.png",
            //   alt: "AI 자동 챗봇 인터페이스"
            // }
        },
        {
            icon: "users" as const,
            title: "통합 에이전트 워크스페이스",
            description: "모든 채널의 상호작용을 한 화면에서 관리합니다.",
            // image: {
            //   src: "/freshdesk-agent-workspace.png",
            //   alt: "통합 에이전트 워크스페이스"
            // }
        },
        {
            icon: "headphones" as const,
            title: "고객 관리",
            description: "한눈에 고객 이력을 확인하고 맞춤화된 최상의 고객 지원을 전달합니다.",
            // image: {
            //   src: "/freshdesk-customer-management.png",
            //   alt: "고객 관리 화면"
            // }
        }
    ],

    // 제품 메인 데모
    stepByStepDemo: {
        title: "AI 자동 응답 워크플로우",
        description: "고객 문의부터 AI 해결까지의 전체 과정을 3D 목업으로 체험해보세요",
        steps: [
            {
                id: 1,
                title: "고객 문의 접수",
                description: "다양한 채널(이메일, 채팅, 소셜미디어)에서 고객 문의가 들어옵니다.",
                highlight: "멀티채널 통합"
            },
            {
                id: 2,
                title: "AI 분석 및 분류",
                description: "Freddy AI가 문의 내용을 분석하고 카테고리별로 자동 분류합니다.",
                highlight: "지능형 분류"
            },
            {
                id: 3,
                title: "자동 응답 생성",
                description: "AI가 지식베이스를 활용해 정확한 답변을 자동으로 생성합니다.",
                highlight: "AI 답변 생성"
            },
            {
                id: 4,
                title: "고객에게 즉시 응답",
                description: "생성된 답변이 고객에게 실시간으로 전달되어 즉시 문제를 해결합니다.",
                highlight: "즉시 해결"
            }
        ]
    },

    detailedFeatures: [
        {
            title: "AI 기반 실시간 고객 응답",
            description: "AI 챗봇으로 실시간 상담을 지원합니다. Freddy AI Agent가 우선적으로 고객 문의에 답변하고 상담원 개입을 효과적으로 감소시킵니다.",
            features: [
                "Freddy AI Agent 우선 응답",
                "어조 개선, 맞춤법 확인",
                "실시간 응답 제안, 감정 분석",
                "지식베이스 문서 추천으로 평균 응답 시간 감소와 품질 향상"
            ]
        },
        {
            title: "에이전트 성과 관리",
            description: "상담원의 성과를 실시간으로 추적하고 개선할 수 있는 포괄적인 분석 도구를 제공합니다.",
            features: [
                "에이전트별 성과 대시보드",
                "실시간 워크로드 모니터링",
                "응답 시간 및 품질 분석",
                "개별 피드백 및 코칭 도구"
            ],
            // media: {
            //   type: "image",
            //   src: "/freshdesk-agent-performance.png",
            //   alt: "에이전트 성과 관리"
            // }
        },
        {
            title: "다채널 통합 상담",
            description: "이메일, 채팅, 전화, 소셜미디어까지 모든 채널을 하나의 플랫폼에서 관리합니다.",
            features: [
                "이메일, 채팅, 전화 통합",
                "소셜미디어 연동 (Facebook, Twitter, Instagram)",
                "채널 간 대화 컨텍스트 유지",
                "통합 고객 프로필 관리"
            ],
            // media: {
            //   type: "image",
            //   src: "/freshdesk-multichannel.png",
            //   alt: "다채널 통합 상담"
            // }
        },
        {
            title: "자동화 워크플로우",
            description: "반복적인 작업을 자동화하여 에이전트가 더 중요한 업무에 집중할 수 있도록 지원합니다.",
            features: [
                "티켓 자동 분류 및 할당",
                "우선순위 자동 설정",
                "SLA 기반 에스컬레이션",
                "맞춤형 워크플로우 설정"
            ],
            // media: {
            //   type: "image",
            //   src: "/freshdesk-automation.png",
            //   alt: "자동화 워크플로우"
            // }
        },
        {
            title: "고급 분석 및 보고서",
            description: "상세한 분석과 인사이트로 고객 서비스 품질을 지속적으로 개선할 수 있습니다.",
            features: [
                "실시간 대시보드 및 KPI 추적",
                "고객 만족도 조사 및 분석",
                "트렌드 분석 및 예측",
                "커스터마이즈 가능한 보고서"
            ],
            // media: {
            //   type: "image",
            //   src: "/freshdesk-analytics.png",
            //   alt: "고급 분석 및 보고서"
            // }
        },
        {
            title: "지식 베이스 통합",
            description: "포괄적인 지식 베이스로 고객 셀프 서비스를 강화하고 에이전트 효율성을 높입니다.",
            features: [
                "직관적인 지식 베이스 에디터",
                "AI 기반 문서 추천",
                "고객 셀프 서비스 포털",
                "내부 지식 공유 시스템"
            ],
            // media: {
            //   type: "image",
            //   src: "/freshdesk-knowledge-base.png",
            //   alt: "지식 베이스 통합"
            // }
        }
    ],

    // 연동 플랫폼 섹션 추가
    integrations: {
        title: "연동 가능한 플랫폼",
        description: "200개 이상의 비즈니스 도구와 완벽하게 연동되어 기존 워크플로우에 자연스럽게 통합됩니다.",
        platforms: [
            // CRM 도구
            { name: "Salesforce", logo: "/logos/salesforce.png", category: "CRM" },
            { name: "HubSpot", logo: "/logos/hubspot.png", category: "CRM" },
            { name: "Pipedrive", logo: "/logos/pipedrive.png", category: "CRM" },

            // 협업 도구
            { name: "Slack", logo: "/logos/slack.png", category: "협업 도구" },
            { name: "Microsoft Teams", logo: "/logos/teams.png", category: "협업 도구" },
            { name: "Zoom", logo: "/logos/zoom.png", category: "협업 도구" },

            // 이메일 서비스
            { name: "Gmail", logo: "/logos/gmail.png", category: "이메일 서비스" },
            { name: "Outlook", logo: "/logos/outlook.png", category: "이메일 서비스" },

            // 소셜 미디어
            { name: "Facebook", logo: "/logos/facebook.png", category: "소셜 미디어" },
            { name: "Twitter", logo: "/logos/twitter.png", category: "소셜 미디어" },
            { name: "Instagram", logo: "/logos/instagram.png", category: "소셜 미디어" },
            { name: "WhatsApp", logo: "/logos/whatsapp.png", category: "소셜 미디어" }
        ]
    },

    faqs: [
        {
            question: "Freshdesk Omni는 기존 Freshdesk와 어떤 차이가 있나요?",
            answer: "Freshdesk Omni는 기존 Freshdesk의 모든 기능에 추가로 옴니채널 통합, 고급 AI 자동화, 실시간 협업 도구를 제공합니다. 특히 여러 채널에서 들어오는 고객 문의를 하나의 뷰에서 관리할 수 있어 더욱 효율적입니다."
        },
        {
            question: "어떤 채널들이 지원되나요?",
            answer: "이메일, 웹 채팅, 전화, Facebook, Twitter, Instagram, WhatsApp, SMS 등 주요 커뮤니케이션 채널을 모두 지원합니다. API를 통해 커스텀 채널 연동도 가능합니다."
        },
        {
            question: "AI 기능은 어떻게 작동하나요?",
            answer: "AI는 고객 문의의 내용과 감정을 분석하여 적절한 담당자에게 자동 라우팅하고, 자주 묻는 질문에 대한 자동 응답을 생성합니다. 또한 고객의 과거 이력을 바탕으로 개인화된 응대를 제안합니다."
        },
        {
            question: "기존 시스템과의 연동이 가능한가요?",
            answer: "네, 200개 이상의 앱과 연동이 가능하며, REST API와 웹훅을 통해 기존 CRM, ERP, 회계 시스템 등과 완벽하게 통합할 수 있습니다. Salesforce, HubSpot, Slack, Microsoft Teams 등과의 연동이 특히 원활합니다."
        }
    ],

    finalCTA: {
        title: "Freshdesk Omni로 고객 경험을 혁신하세요",
        description: "통합된 옴니채널 플랫폼으로 고객 만족도를 높이고 팀 효율성을 극대화하세요. 지금 바로 무료 체험을 시작해보세요.",
        primaryButton: { text: "무료 체험 시작", href: "/contact" },
        secondaryButton: { text: "상담 신청", href: "/contact" },
        // 배경 이미지 추가 (실제 이미지 있을 때 활성화)
        // backgroundImage: "/freshdesk-omni-cta-bg.jpg"
    }
}

export default function FreshdeskOmniPage() {
    return <ProductPageTemplate data={freshdeskOmniData} />
}