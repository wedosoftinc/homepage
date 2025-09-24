import { Metadata } from 'next'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export const metadata: Metadata = {
    title: 'Freshcaller | 위두소프트 - 클라우드 PBX 솔루션',
    description: '직관적이고 확장 가능한 클라우드 기반 PBX로 전문적인 음성 서비스를 제공하고 AI 기반 자동화로 고객 만족도를 향상시키세요.',
    keywords: 'Freshcaller, 클라우드 PBX, 컨택센터, 음성 서비스, AI 음성봇, IVR',
    openGraph: {
        title: 'Freshcaller | 위두소프트 - 클라우드 PBX 솔루션',
        description: '직관적이고 확장 가능한 클라우드 기반 PBX로 전문적인 음성 서비스를 제공하세요',
        type: 'website',
        locale: 'ko_KR',
    },
}

// docs에서 추출한 실제 콘텐츠 기반 데이터
const freshcallerData: ProductPageData = {
    name: "Freshcaller",
    subtitle: "클라우드 PBX 솔루션",
    description: "빠르고 쉬운 대화로 고객 서비스를 향상시키세요. 직관적인 올인원 컨택센터 솔루션으로 뛰어난 음성 서비스를 제공하세요.",
    category: "Cloud PBX Solution",
    slug: "freshcaller",
    heroCTA: {
        primary: { text: "14일 무료 체험", href: "/contact?product=freshcaller" },
        secondary: { text: "상담 문의", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "zap",
            title: "직관적이고 확장 가능",
            description: "설정부터 일일 운영, 확장까지 모든 것을 몇 번의 직관적인 클릭으로 달성하세요."
        },
        {
            icon: "messageSquare",
            title: "쉬워진 대화",
            description: "고급 음성 AI 기능을 사용하여 빠른 답변으로 고객을 기쁘게 하세요."
        },
        {
            icon: "barChart3",
            title: "손쉬운 성능 관리",
            description: "컨택센터 성능에 대한 완전한 가시성을 얻고 운영을 쉽게 최적화하세요."
        }
    ],

    benefits: [
        {
            title: "컨택센터 효율성 향상",
            description: "AI 기반 음성 봇과 스마트 라우팅으로 에이전트 생산성을 크게 향상시킵니다.",
            metrics: "대기시간 50% 단축"
        },
        {
            title: "글로벌 확장성",
            description: "90개 이상 국가에서 현지 번호 제공으로 글로벌 비즈니스를 지원합니다.",
            metrics: "90+ 국가 지원"
        },
        {
            title: "완벽한 통합",
            description: "Freshdesk와의 완벽한 연동으로 옴니채널 고객 서비스를 구현합니다.",
            metrics: "원클릭 티켓 변환"
        },
        {
            title: "원격 근무 지원",
            description: "브라우저 기반 솔루션으로 어디서든 전문적인 고객 서비스가 가능합니다.",
            metrics: "하드웨어 불필요"
        }
    ],

    useCases: [
        {
            title: "중소기업 고객 지원팀",
            description: "복잡한 하드웨어 설치 없이 전문적인 전화 시스템을 구축하려는 기업",
            features: [
                "빠른 설정 (몇 시간 내 완료)",
                "저렴한 도입 비용",
                "직관적인 사용자 인터페이스",
                "확장 가능한 구조"
            ],
            targetUser: "중소기업 IT 관리자"
        },
        {
            title: "글로벌 기업 컨택센터",
            description: "전 세계 고객을 대상으로 일관된 음성 서비스를 제공하려는 기업",
            features: [
                "90+ 국가 현지 번호 제공",
                "다국어 IVR 지원",
                "글로벌 데이터 센터",
                "24/7 기술 지원"
            ],
            targetUser: "글로벌 기업 운영팀"
        },
        {
            title: "원격 근무 환경",
            description: "재택근무나 분산된 팀으로 운영되는 고객 서비스 조직",
            features: [
                "브라우저 기반 통화",
                "실시간 팀 협업 도구",
                "원격 성능 모니터링",
                "클라우드 기반 데이터 저장"
            ],
            targetUser: "원격 근무 팀 리더"
        }
    ],

    detailedFeatureTabs: [
        {
            id: "global-setup",
            label: "글로벌 설정",
            title: "몇 시간 만에 글로벌 컨택센터 구축",
            description: "복잡한 하드웨어 설치 없이 전 세계 어디서든 전문적인 컨택센터를 운영하세요.",
            feature: {
                title: "빠른 글로벌 확장",
                description: "90개 이상 국가에서 현지 번호를 구매하거나 기존 통신사를 연동하여 즉시 서비스를 시작할 수 있습니다.",
                items: [
                    "90+ 국가 현지 번호 제공",
                    "BYOC (기존 통신사 연동) 지원",
                    "고급 인바운드 라우팅",
                    "하드웨어 설치 불필요",
                    "몇 시간 내 서비스 시작"
                ]
            },
            interactiveArea: {
                type: "feature-map",
                title: "글로벌 번호 커버리지",
                description: "전 세계 90개 이상 국가에서 현지 번호를 제공합니다",
                placeholder: "세계 지도와 지원 국가 표시"
            }
        },
        {
            id: "ai-features",
            label: "AI 음성 봇",
            title: "AI 기반 자동화로 효율성 극대화",
            description: "Freddy AI 음성 봇이 반복적인 문의를 자동으로 처리하여 에이전트 업무량을 줄입니다.",
            feature: {
                title: "스마트 음성 자동화",
                description: "고급 음성 인식과 자연어 처리로 고객 문의를 정확하게 이해하고 적절한 응답을 제공합니다.",
                items: [
                    "AI 기반 음성봇 응답",
                    "음성 인식 IVR 시스템",
                    "자동 에이전트 배정",
                    "다국어 음성 지원",
                    "학습 기반 응답 개선"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "AI 음성봇 워크플로우",
                description: "고객 문의부터 해결까지의 자동화 과정을 확인하세요",
                placeholder: "AI 음성봇 처리 과정 시각화"
            }
        },
        {
            id: "remote-work",
            label: "원격 근무",
            title: "어디서든 전문적인 고객 서비스",
            description: "브라우저 기반 솔루션으로 원격 팀도 마치 한 사무실에 있는 것처럼 협업할 수 있습니다.",
            feature: {
                title: "완전한 원격 근무 지원",
                description: "특별한 하드웨어나 소프트웨어 설치 없이 웹 브라우저에서 모든 통화 기능을 사용할 수 있습니다.",
                items: [
                    "브라우저 기반 통화",
                    "실시간 팀 협업",
                    "원격 성능 모니터링",
                    "클라우드 데이터 동기화",
                    "모바일 앱 지원"
                ]
            },
            interactiveArea: {
                type: "dashboard",
                title: "원격 근무 대시보드",
                description: "분산된 팀의 성과를 실시간으로 모니터링하고 관리하세요",
                placeholder: "원격 팀 관리 대시보드 UI"
            }
        },
        {
            id: "analytics",
            label: "통화 분석",
            title: "데이터 기반 고객 서비스 최적화",
            description: "모든 통화를 녹음하고 분석하여 고객 만족도를 지속적으로 개선합니다.",
            feature: {
                title: "완전한 통화 인사이트",
                description: "통화 녹음, 대본, 고객 감정 분석을 통해 서비스 품질을 지속적으로 모니터링하고 개선합니다.",
                items: [
                    "모든 통화 자동 녹음",
                    "AI 기반 통화 대본 생성",
                    "실시간 성과 대시보드",
                    "고객 만족도 추적",
                    "에이전트 코칭 도구"
                ]
            },
            interactiveArea: {
                type: "demo",
                title: "통화 분석 리포트",
                description: "실제 통화 데이터를 기반으로 한 상세 분석 리포트를 확인하세요",
                placeholder: "통화 분석 대시보드 데모"
            }
        },
        {
            id: "integration",
            label: "Freshdesk 통합",
            title: "완벽한 옴니채널 경험",
            description: "Freshdesk와의 완벽한 통합으로 전화, 이메일, 채팅을 하나로 관리합니다.",
            feature: {
                title: "통합된 고객 서비스 플랫폼",
                description: "한 번의 클릭으로 통화를 티켓으로 변환하고, 모든 고객 상호작용 히스토리를 통합 관리할 수 있습니다.",
                items: [
                    "원클릭 통화-티켓 변환",
                    "통합 고객 프로필 관리",
                    "옴니채널 대화 기록",
                    "Freshworks 생태계 연동",
                    "통합 워크플로우 자동화"
                ]
            },
            interactiveArea: {
                type: "screenshot",
                title: "Freshdesk 통합 인터페이스",
                description: "Freshcaller가 Freshdesk와 어떻게 통합되어 작동하는지 확인하세요",
                placeholder: "Freshdesk 내 Freshcaller 통합 UI 스크린샷"
            }
        },
        {
            id: "call-routing",
            label: "콜 라우팅",
            title: "스마트한 통화 배정 시스템",
            description: "고급 라우팅 규칙으로 적절한 에이전트에게 적절한 시간에 통화를 연결합니다.",
            feature: {
                title: "지능형 통화 배정",
                description: "스킬 기반, 시간대별, 우선순위별 라우팅으로 최적의 고객 경험을 제공하고 에이전트 효율성을 극대화합니다.",
                items: [
                    "스킬 기반 라우팅",
                    "시간대별 자동 배정",
                    "우선순위 기반 처리",
                    "라운드로빈 배정",
                    "에스컬레이션 규칙 설정"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "콜 라우팅 플로우",
                description: "고객 통화가 어떻게 최적의 에이전트에게 연결되는지 확인하세요",
                placeholder: "콜 라우팅 로직 플로우차트"
            }
        }
    ],

    faqs: [
        {
            question: "기존 전화 시스템에서 Freshcaller로 전환이 어렵나요?",
            answer: "전혀 그렇지 않습니다. 몇 시간 만에 설정이 완료되며, 기존 번호 이전이나 새 번호 구매 모두 가능합니다. BYOC (Bring Your Own Carrier) 옵션으로 기존 통신사를 그대로 사용할 수도 있습니다."
        },
        {
            question: "원격 근무 팀도 사용할 수 있나요?",
            answer: "네, Freshcaller는 완전한 클라우드 기반 솔루션입니다. 에이전트들은 어디서든 브라우저를 통해 통화를 받고 걸 수 있으며, 데스크폰이나 특별한 하드웨어가 필요하지 않습니다."
        },
        {
            question: "다른 Freshworks 제품과 어떻게 연동되나요?",
            answer: "Freshcaller는 Freshdesk, Freshservice 등 다른 Freshworks 제품과 완벽하게 통합됩니다. 통화를 티켓으로 변환하거나, 기존 고객 정보를 바탕으로 개인화된 서비스를 제공할 수 있습니다."
        },
        {
            question: "AI 음성 봇은 어떤 기능을 제공하나요?",
            answer: "Freddy AI가 반복적인 문의에 자동으로 응답하고, 복잡한 문의는 적절한 에이전트에게 연결합니다. 음성 인식 IVR과 함께 고객 대기 시간을 크게 단축시킵니다."
        },
        {
            question: "전 세계 어느 국가에서나 사용할 수 있나요?",
            answer: "네, 90개 이상 국가에서 현지 번호를 구매할 수 있어 글로벌 비즈니스에 최적화되어 있습니다. 각 지역별 규정을 준수하며 고품질의 음성 서비스를 제공합니다."
        }
    ],

    finalCTA: {
        title: "클라우드로 전화 시스템을 업그레이드하세요",
        description: "직관적이고 확장 가능한 Freshcaller로 고객과의 모든 음성 상호작용을 향상시키고, AI의 힘으로 더 스마트한 고객 서비스를 경험하세요.",
        primaryButton: { text: "14일 무료 체험", href: "/contact?product=freshcaller" },
        secondaryButton: { text: "상담 문의", href: "/contact" }
    }
}

export default function FreshcallerPage() {
    return <ProductPageTemplate data={freshcallerData} />
}