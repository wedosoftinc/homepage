import { ProductPageTemplate } from "@/components/sections/product-page-template"

const splashtopData = {
    name: "Splashtop",
    subtitle: "rEMOTE ACCESS",
    description: "빠르고 안전한 원격 액세스, 어디서나 업무를 이어가세요. 고성능 원격 데스크탑 솔루션으로, 언제 어디서든 장치에 안전하고 빠르게 접속합니다. 기업 수준의 보안과 고속 스트리밍 성능으로, 원격 근무와 IT 지원을 최적화하세요.",
    category: "IT 인프라 최적화",
    slug: "splashtop",

    heroCTA: {
        primary: { text: "데모 신청하기", href: "/contact" },
        secondary: { text: "자세히 보기", href: "/contact" }
    },

    heroMedia: {
        type: "image" as const,
        src: "/splashtop-logo.svg",
        alt: "Splashtop 원격 접속 화면"
    },

    keyFeatures: [
        {
            icon: "shield" as const,
            title: "강력한 보안",
            description: "2단계 인증, 싱글사인온(SSO), 엔드포인트 MFA, 빈화면, 유휴 세션 시간 초과, 원격 연결 알림, 전체 세션 감사 로깅 등 포함합니다."
        },
        {
            icon: "zap" as const,
            title: "뛰어난 성능",
            description: "고속 연결로 HD 품질의 원격 세션 제공, 최대 60fps의 원격 화면을 지원합니다."
        },
        {
            icon: "globe" as const,
            title: "다양한 플랫폼 지원",
            description: "Windows, Mac, iOS, Android, Chromebook 등 모든 기기에서 접속이 가능합니다."
        }
    ],

    // 탭 기반 세부 기능 (6개 - docs 기반)
    detailedFeatureTabs: [
        {
            id: "security",
            label: "강력한 보안",
            title: "강력한 보안",
            description: "TLS 및 256비트 AES 암호화, 2단계 인증, 장치 인증 등 최고 수준의 보안 체계를 제공합니다. 모든 연결은 엔드투엔드로 보호되며, 기업용 기준에 부합하는 보안 컴플라이언스를 갖추고 있습니다.",
            feature: {
                title: "엔터프라이즈급 보안 시스템",
                description: "2단계 인증, 싱글사인온(SSO), 엔드포인트 MFA 등 포괄적인 보안 기능을 제공합니다.",
                items: [
                    "TLS 및 256비트 AES 암호화",
                    "2단계 인증 (2FA)",
                    "싱글사인온(SSO) 지원",
                    "전체 세션 감사 로깅"
                ]
            },
            interactiveArea: {
                type: "dashboard" as const,
                title: "보안 관리 대시보드",
                description: "포괄적인 보안 설정과 모니터링을 확인하세요",
                placeholder: "보안 관리 인터페이스"
            }
        },
        {
            id: "cross-platform",
            label: "플랫폼 지원",
            title: "다양한 플랫폼 지원",
            description: "Windows, macOS, Linux는 물론 iOS, Android, Chromebook까지 폭넓은 운영체제를 지원합니다. 기기 간 경계 없이 자유롭게 접속할 수 있어, 유연한 업무 환경을 실현할 수 있습니다.",
            feature: {
                title: "완벽한 크로스 플랫폼 지원",
                description: "모든 기기에서 동일한 품질의 원격 제어 경험을 제공합니다.",
                items: [
                    "Windows, macOS, Linux 지원",
                    "iOS, Android 모바일 앱",
                    "Chromebook 지원",
                    "기기 간 자유로운 접속"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "멀티 플랫폼 데모",
                description: "다양한 기기에서의 원격 접속 경험을 확인하세요",
                placeholder: "크로스 플랫폼 접속 인터페이스"
            }
        },
        {
            id: "performance",
            label: "뛰어난 성능",
            title: "뛰어난 성능",
            description: "4K HD 품질의 원격 화면, 초저지연 응답, 최대 60fps의 프레임 속도를 제공합니다. 그래픽 작업, 영상 편집, 소프트웨어 개발 등 고성능이 요구되는 업무도 무리 없이 처리할 수 있습니다.",
            feature: {
                title: "고성능 스트리밍 엔진",
                description: "업계 최고 수준의 속도와 안정성으로 비즈니스 연속성을 보장합니다.",
                items: [
                    "4K HD 품질 원격 화면",
                    "초저지연 응답 시스템",
                    "최대 60fps 프레임 속도",
                    "고성능 작업 지원"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "고성능 스트리밍 데모",
                description: "실제 원격 접속 화질과 성능을 직접 체험해보세요",
                placeholder: "고성능 원격 화면 데모"
            }
        },
        {
            id: "multi-channel",
            label: "다채널 확장",
            title: "다채널 확장",
            description: "단일 사용자부터 대규모 기업까지 맞춤형 라이선스와 구조를 지원합니다. IT 지원, 고객 서비스, 교육, 방송 등 다양한 산업 환경에 최적화된 채널 연동이 가능합니다.",
            feature: {
                title: "확장 가능한 솔루션",
                description: "필요에 따라 API나 SSO 연동도 손쉽게 설정할 수 있어 확장성이 뛰어납니다.",
                items: [
                    "맞춤형 라이선스 지원",
                    "다양한 산업 환경 지원",
                    "API 및 SSO 연동",
                    "뛰어난 확장성"
                ]
            },
            interactiveArea: {
                type: "dashboard" as const,
                title: "확장성 관리 도구",
                description: "다양한 환경에서의 유연한 배포와 관리를 경험하세요",
                placeholder: "확장성 관리 대시보드"
            }
        },
        {
            id: "ar-support",
            label: "AR 기술",
            title: "AR 기술 지원",
            description: "Splashtop AR은 스마트폰 카메라를 활용한 실시간 AR 원격 지원 기능을 제공합니다. 현장의 장비나 기기를 고객이 보여주면, 원격 지원자가 AR 화살표나 주석으로 직접 가이드를 줄 수 있습니다.",
            feature: {
                title: "혁신적인 AR 원격 지원",
                description: "비대면 상황에서도 정확하고 효율적인 기술 지원이 가능합니다.",
                items: [
                    "스마트폰 카메라 활용",
                    "실시간 AR 지원",
                    "AR 화살표 및 주석",
                    "효율적인 원격 가이드"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "AR 지원 데모",
                description: "혁신적인 AR 기술을 활용한 원격 지원을 체험하세요",
                placeholder: "AR 원격 지원 인터페이스"
            }
        },
        {
            id: "session-recording",
            label: "세션 녹화",
            title: "세션 녹화",
            description: "원격 세션 전체를 자동으로 녹화해 감사 추적, 품질 관리, 교육 목적 등으로 활용할 수 있습니다. 녹화 파일은 안전하게 저장되며, 필요한 경우 언제든지 재생해 확인할 수 있습니다.",
            feature: {
                title: "포괄적인 세션 관리",
                description: "보안성과 투명성을 동시에 확보할 수 있는 중요한 기능입니다.",
                items: [
                    "전체 세션 자동 녹화",
                    "감사 추적 및 품질 관리",
                    "안전한 파일 저장",
                    "언제든지 재생 가능"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "세션 녹화 도구",
                description: "세션 녹화 및 관리 기능을 확인하세요",
                placeholder: "세션 녹화 관리 인터페이스"
            }
        }
    ],

    faqs: [
        {
            question: "Splashtop을 사용하면 어떤 기기들을 원격 제어할 수 있나요?",
            answer: "Windows, macOS, Linux (모니터 환경 포함)에서 원격 접속이 가능하며 Windows/Mac 컴퓨터, Chromebook, iOS/Android 장치에서도 사용할 수 있습니다."
        },
        {
            question: "무인 지원과 유인 지원의 차이는 무엇인가요?",
            answer: "무인 지원: Splashtop Streamer(에이전트)를 원격 장치에 미리 설치한 뒤, 사용자 개입 없이도 24/7 액세스할 수 있습니다. 유인 지원: 기술자가 사전 에이전트 없이도 사용자의 세션 생성(일회용 코드 입력)을 통해 원격 지원할 수 있는 방식입니다."
        },
        {
            question: "Splashtop은 공공기관에도 적합한 솔루션인가요?",
            answer: "온프레미스 지원: 공공기관을 비롯한 보안이 중요한 조직에 대해, Splashtop은 온프레미스 배포를 제공하여 데이터를 조직의 내부 서버에 저장하고 관리할 수 있습니다. 이는 클라우드 기반 솔루션을 사용하지 않고 자체 인프라 내에서 완벽한 제어를 원하는 기관에 적합합니다."
        },
        {
            question: "보안은 어떻게 보장되나요? 규정 준수도 가능한가요?",
            answer: "보안 기능: TLS 및 256‑bit AES 암호화, 2단계 인증, 싱글 사인온(SSO), 세션 감사 로그, 원격 연결 알림 등을 제공합니다. 준수 기준: GDPR, SOC 2는 물론 HIPAA, FERPA, PCI 등 다양한 산업 규정 준수를 지원합니다."
        },
        {
            question: "모든 규모에 적합한가요?",
            answer: "네, 소규모 스타트업부터 대기업까지 모든 규모에 적합합니다. 플랜별 지원 기능과 Add-on으로 구분되어 있어 규모에 맞게 필요한 기능을 합리적인 가격으로 구매할 수 있습니다."
        }
    ],

    finalCTA: {
        title: "글로벌 원격 지원의 새로운 패러다임",
        description: "기업 수준의 보안과 고속 스트리밍 성능으로, 원격 근무를 안전하게 이어갑니다.",
        primaryButton: { text: "가격표 보기", href: "/pricing" },
        secondaryButton: { text: "데모 신청하기", href: "/contact" }
    }
}

export default function SplashtopPage() {
    return <ProductPageTemplate data={splashtopData} />
}