import { ProductPageTemplate } from "@/components/sections/product-page-template"

const splashtopData = {
    name: "Splashtop",
    subtitle: "안전한 원격 접속 솔루션",
    description: "언제 어디서나 안전하고 빠르게 원격으로 컴퓨터에 접속할 수 있는 고성능 원격 데스크탑 솔루션입니다.",
    category: "IT 인프라 최적화",
    slug: "splashtop",

    heroCTA: {
        primary: { text: "무료 체험 시작", href: "/contact" },
        secondary: { text: "상담 신청", href: "/contact" }
    },

    heroMedia: {
        type: "image" as const,
        src: "/splashtop-logo.svg",
        alt: "Splashtop 원격 접속 화면"
    },

    keyFeatures: [
        {
            icon: "zap" as const,
            title: "고성능 원격 접속",
            description: "4K 해상도에서도 지연 없는 부드러운 원격 접속 경험을 제공합니다."
        },
        {
            icon: "shield" as const,
            title: "엔터프라이즈 보안",
            description: "256비트 AES 암호화와 2단계 인증으로 최고 수준의 보안을 보장합니다."
        },
        {
            icon: "globe" as const,
            title: "멀티 플랫폼",
            description: "Windows, Mac, iOS, Android 등 모든 플랫폼에서 원활하게 작동합니다."
        },
        {
            icon: "users" as const,
            title: "팀 관리",
            description: "중앙 집중식 관리 콘솔로 팀의 원격 접속을 효율적으로 관리합니다."
        },
        {
            icon: "settings" as const,
            title: "파일 전송",
            description: "원격 접속 중에도 안전하게 파일을 주고받을 수 있습니다."
        },
        {
            icon: "clock" as const,
            title: "24/7 지원",
            description: "언제든지 연결 가능한 무인 접속과 실시간 기술 지원을 제공합니다."
        }
    ],

    detailedFeatures: [
        {
            title: "고성능 스트리밍 기술",
            description: "독자적인 고성능 엔진으로 지연 시간을 최소화하고 선명한 화질을 제공합니다.",
            features: [
                "4K UHD 해상도 지원",
                "초당 60프레임 스트리밍",
                "저대역폭 환경 최적화",
                "멀티 모니터 지원"
            ]
        },
        {
            title: "강화된 보안 기능",
            description: "기업 환경에 적합한 다층 보안 시스템으로 데이터와 시스템을 보호합니다.",
            features: [
                "256비트 AES 암호화",
                "2단계 인증 (2FA)",
                "SSO (Single Sign-On) 연동",
                "장치 인증 및 접근 제어"
            ]
        },
        {
            title: "중앙 집중식 관리",
            description: "IT 관리자를 위한 포괄적인 관리 도구로 모든 원격 접속을 제어합니다.",
            features: [
                "사용자 및 그룹 관리",
                "접속 로그 및 감사 추적",
                "정책 기반 접근 제어",
                "실시간 세션 모니터링"
            ]
        },
        {
            title: "크로스 플랫폼 호환성",
            description: "다양한 운영체제와 디바이스에서 일관된 경험을 제공합니다.",
            features: [
                "Windows, Mac, Linux 지원",
                "iOS, Android 모바일 앱",
                "웹 브라우저 접속",
                "Chromebook 지원"
            ]
        },
        {
            title: "협업 및 지원 도구",
            description: "원격 협업과 IT 지원을 위한 전문적인 도구를 제공합니다.",
            features: [
                "화면 공유 및 주석",
                "음성 채팅 내장",
                "원격 인쇄",
                "세션 녹화"
            ]
        }
    ],

    integrations: {
        title: "연동 가능한 플랫폼",
        description: "기존 IT 인프라와 완벽하게 통합되어 원활한 원격 업무 환경을 구축합니다.",
        platforms: [
            { name: "Active Directory", logo: "/logos/activedirectory.png", category: "디렉토리 서비스" },
            { name: "Azure AD", logo: "/logos/azuread.png", category: "클라우드 ID" },
            { name: "Google Workspace", logo: "/logos/googleworkspace.png", category: "생산성" },
            { name: "Okta", logo: "/logos/okta.png", category: "ID 관리" },
            { name: "SAML SSO", logo: "/logos/saml.png", category: "인증" },
            { name: "LDAP", logo: "/logos/ldap.png", category: "디렉토리" },
            { name: "Microsoft Teams", logo: "/logos/teams.png", category: "협업" },
            { name: "Slack", logo: "/logos/slack.png", category: "협업" }
        ]
    },

    faqs: [
        {
            question: "Splashtop은 다른 원격 접속 솔루션과 어떤 차이가 있나요?",
            answer: "Splashtop은 고성능 스트리밍 기술로 더 빠르고 선명한 원격 접속을 제공합니다. 특히 그래픽 작업이나 동영상 재생 시에도 끊김 없는 경험을 제공하며, 기업용 보안 기능이 강화되어 있습니다."
        },
        {
            question: "보안은 어느 정도 수준인가요?",
            answer: "Splashtop은 SOC 2, ISO 27001 인증을 받았으며, 256비트 AES 암호화, 2단계 인증, SSO 연동 등 엔터프라이즈급 보안 기능을 제공합니다. 모든 세션은 TLS로 암호화됩니다."
        },
        {
            question: "동시 접속자 수에 제한이 있나요?",
            answer: "플랜에 따라 동시 접속자 수가 결정됩니다. 비즈니스 플랜에서는 무제한 동시 접속을 지원하며, 필요에 따라 라이선스를 추가할 수 있습니다."
        },
        {
            question: "모바일에서도 완전한 기능을 사용할 수 있나요?",
            answer: "네, iOS와 Android 앱에서 대부분의 데스크톰 기능을 사용할 수 있습니다. 터치 최적화 인터페이스와 가상 키보드를 제공하여 모바일에서도 편리하게 작업할 수 있습니다."
        }
    ],

    finalCTA: {
        title: "Splashtop으로 안전한 원격 업무를 시작하세요",
        description: "고성능 원격 접속과 강화된 보안으로 언제 어디서나 생산적인 업무 환경을 구축하세요. 지금 바로 무료 체험을 시작해보세요.",
        primaryButton: { text: "무료 체험 시작", href: "/contact" },
        secondaryButton: { text: "상담 신청", href: "/contact" }
    }
}

export default function SplashtopPage() {
    return <ProductPageTemplate data={splashtopData} />
}