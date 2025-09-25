import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export const metadata: Metadata = {
    title: 'Freshdesk Omni | 위두소프트 - 옴니채널 고객 지원',
    description: '실시간 채팅부터 고급화된 티켓팅 시스템까지, 최적의 전문성으로 고객 문의에 가장 빠르게 대응합니다.',
    keywords: 'Freshdesk Omni, 옴니채널, 고객지원, 실시간채팅, 티켓팅',
    openGraph: {
        title: 'Freshdesk Omni | 위두소프트 - 옴니채널 고객 지원',
        description: '실시간 채팅부터 고급화된 티켓팅 시스템까지 통합 고객 응대 솔루션',
        type: 'website',
        locale: 'ko_KR',
    },
}

const Omni3DExperience = dynamic(() => import('@/components/interactive/omni/Omni3DExperience'), { ssr: false })

const freshdeskOmniData: ProductPageData = {
    name: "Freshdesk Omni",
    subtitle: "옴니채널 고객 지원",
    description: "실시간 채팅부터 고급화된 티켓팅 시스템까지, 최적의 전문성으로 고객 문의에 가장 빠르게 대응합니다.",
    category: "customer experience",
    slug: "freshdesk-omni",
    heroCTA: {
        primary: { text: "데모 신청하기", href: "/contact?demo=freshdesk-omni" },
        secondary: { text: "자세히 보기", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "messageSquare",
            title: "AI 자동 챗봇",
            description: "보편적이지 않은 전문 기술 답변도 문제 없습니다! 나만의 지식 베이스에 맞춰 커스텀 AI로 학습시켜보세요."
        },
        {
            icon: "zap",
            title: "통합 에이전트 워크스페이스",
            description: "모든 채널의 상호작용을 한 화면에서 관리합니다."
        },
        {
            icon: "users",
            title: "고객 관리",
            description: "한눈에 고객 이력을 확인하고 맞춤화된 최상의 고객 지원을 전달합니다."
        }
    ],

    detailedFeatureTabs: [
        {
            id: "ai-response",
            label: "AI 실시간 응답",
            title: "AI 기반 실시간 고객 응답",
            description: "AI 챗봇으로 실시간 상담을 지원합니다. Freddy AI Agent가 우선적으로 고객 문의에 답변하고 상담원 개입을 효과적으로 감소시킵니다.",
            feature: {
                title: "Freddy AI 지원 시스템",
                description: "AI가 에이전트의 업무를 보조하여 더 많은 고객 문의를 빠르고 정확하게 처리할 수 있습니다.",
                items: [
                    "AI 챗봇 실시간 상담",
                    "어조 개선 및 맞춤법 확인",
                    "실시간 응답 제안",
                    "고객 감정 분석",
                    "지식베이스 문서 추천"
                ]
            },
            interactiveArea: {
                type: "demo",
                title: "AI 챗봇 실시간 응답 데모",
                description: "Freddy AI가 고객 문의에 자동으로 응답하는 과정을 확인하세요",
                placeholder: "AI 자동 응답 시뮬레이션"
            }
        },
        {
            id: "ticket-conversion",
            label: "채팅 티켓 전환",
            title: "채팅 및 전화 티켓 전환",
            description: "채팅 또는 전화로 인입된 고객 문의를 티켓으로 변환합니다. 고객 전화 내용을 기록하고, 티켓으로 변환할 수 있습니다.",
            feature: {
                title: "다채널 티켓 변환 시스템",
                description: "모든 커뮤니케이션 채널에서 들어온 문의를 체계적으로 티켓화하여 관리합니다.",
                items: [
                    "채팅 자동 티켓 변환",
                    "전화 내용 기록",
                    "음성 티켓 자동 생성",
                    "채널별 우선순위 설정",
                    "원본 대화 이력 보존"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "채널별 티켓 변환 워크플로우",
                description: "다양한 채널의 문의가 티켓으로 변환되는 과정을 확인하세요",
                placeholder: "채널 통합 티켓 시스템"
            }
        },
        {
            id: "cti-integration",
            label: "전화 통합 (CTI)",
            title: "전화 통합 (CTI)",
            description: "Freshcaller 제품과 연동하여 음성 지원을 제공합니다. IVR 구성, 통화 녹음, 자동 티켓 생성, 콜백 스케줄링 등을 하나의 플랫폼에서 통합 처리합니다.",
            feature: {
                title: "통합 음성 지원 시스템",
                description: "국내 통신사와의 연결도 문제없이 전화 상담까지 한번에 해결합니다.",
                items: [
                    "IVR 시스템 구성",
                    "통화 녹음 자동 저장",
                    "콜백 스케줄링",
                    "자동 티켓 생성",
                    "국내 통신사 연동"
                ]
            },
            interactiveArea: {
                type: "feature-map",
                title: "CTI 통합 시스템 맵",
                description: "전화 상담부터 티켓 생성까지의 전체 프로세스를 확인하세요",
                placeholder: "CTI 통합 커뮤니케이션 허브"
            }
        },
        {
            id: "marketplace",
            label: "마켓플레이스 확장",
            title: "마켓플레이스 확장",
            description: "Slack, 카카오톡, Instagram, Shopify, WhatsApp, Facebook Messenger, Salesforce, Jira 등 다양한 플랫폼과 연동 가능합니다.",
            feature: {
                title: "무제한 확장 생태계",
                description: "필요한 모든 비즈니스 도구와 연결하여 통합 워크플로우를 구성합니다.",
                items: [
                    "Slack, Teams 협업 툴 연동",
                    "카카오톡, WhatsApp 메신저 연동",
                    "Instagram, Facebook 소셜 연동",
                    "Shopify, WooCommerce 커머스 연동",
                    "Salesforce, Jira 엔터프라이즈 연동"
                ]
            },
            interactiveArea: {
                type: "feature-map",
                title: "확장 생태계 매트릭스",
                description: "다양한 플랫폼과의 연동 구조를 시각화합니다",
                placeholder: "마켓플레이스 통합 생태계"
            }
        },
        {
            id: "customer-360",
            label: "360도 고객 뷰",
            title: "360도 고객 뷰",
            description: "고객이 선택한 모든 채널에서 이루어지는 소통을 한 눈에 확인해보세요. 고객 정보, 이메일, 최근 티켓 문의 내역까지 360도 고객 뷰로 빠르게 확인합니다.",
            feature: {
                title: "통합 고객 프로파일 시스템",
                description: "고객과의 모든 상호작용을 시간순으로 정리하여 맥락을 유지합니다.",
                items: [
                    "전채널 통합 이력 관리",
                    "고객 정보 통합 뷰",
                    "실시간 상호작용 추적",
                    "개인화된 고객 프로필",
                    "과거 문의 패턴 분석"
                ]
            },
            interactiveArea: {
                type: "dashboard",
                title: "360도 고객 뷰 대시보드",
                description: "고객의 전체 여정을 한눈에 확인할 수 있는 통합 뷰를 체험하세요",
                placeholder: "고객 360도 뷰 대시보드"
            }
        }
    ],

    faqs: [
        {
            question: "기존에 사용하던 티켓팅 시스템에서 Freshdesk Omni로 데이터 이관이 가능한가요?",
            answer: "안전한 데이터 마이그레이션 서비스를 제공하며, 기존 티켓, 고객 정보, 지식베이스 등을 무손실로 이관할 수 있습니다."
        },
        {
            question: "어떤 부서 또는 팀에 적합한 솔루션인가요?",
            answer: "고객 지원팀(전화+채팅 동시 응대), 세일즈 팀(전화 소통+채팅 정보 공유), 콜센터(다채널 문제 해결) 등에 적합합니다."
        },
        {
            question: "함께 사용하는 AI는 어떤 제품이 있나요?",
            answer: "Freddy AI Agent(Freshchat AI 챗봇)와 Freddy Copilot(Freshdesk 티켓팅 보조 도구)를 제공합니다."
        },
        {
            question: "CTI 솔루션 (Freshcaller) 와 연동하고 싶어요",
            answer: "CTI 솔루션(Freshcaller)와 연동하여 전화 상담까지 한번에 해결하세요. 국내 통신사와의 연결도 문제 없습니다."
        }
    ],

    finalCTA: {
        title: "여러 채널의 고객 문의를 놓치지 마세요",
        description: "Freshdesk Omni로 다양한 채널의 고객을 한 플랫폼에서 응대합니다. AI 자동화로 에이전트 없이 모든 채널에서 완벽한 고객 응대를 제공합니다.",
        primaryButton: { text: "데모 신청하기", href: "/contact?demo=freshdesk-omni" },
        secondaryButton: { text: "전문 상담 받기", href: "/contact?product=freshdesk-omni" }
    }
}

export default function FreshdeskOmniPage() {
    return (
        <>
            <ProductPageTemplate data={freshdeskOmniData} />
            <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold">다채널을 중앙에서 효율적으로 처리</h2>
                    <p className="mt-2 text-muted-foreground">
                        이메일, 채팅, 전화, 소셜 등 다양한 채널에서 인입되는 문의가 중앙 인박스로 자동 라우팅됩니다. 아래 3D 인터랙티브에서 채널을
                        토글해 보며 중앙 허브로 수집·분류되는 흐름을 직접 확인해 보세요.
                    </p>
                </div>
                <div className="rounded-xl border bg-card">
                    <Omni3DExperience />
                </div>
            </section>
        </>
    )
}