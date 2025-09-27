import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

// 3D 컴포넌트를 동적 임포트 (SSR 방지)
const Omni3DExperience = dynamic(
  () => import('@/components/interactive/omni/Omni3DExperience').then(mod => ({ default: mod.Omni3DExperience })),
  { 
    loading: () => (
      <div className="h-[600px] bg-muted/20 rounded-xl flex items-center justify-center">
        <p>3D 인터랙티브를 로딩 중...</p>
      </div>
    )
  }
)

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

const freshdeskOmniData: ProductPageData = {
    name: "Freshdesk Omni",
    subtitle: "옴니채널 고객 지원",
    description: "실시간 채팅부터 고급화된 티켓팅 시스템까지, 최적의 전문성으로 고객 문의에 가장 빠르게 대응합니다.",
    category: "customer experience",
    slug: "freshdesk-omni",
    heroCTA: {
        primary: { text: "라이브 체험하기", href: "https://scaling-meme-v679p57qx4562wgp-5001.app.github.dev/", target: "_blank" },
        secondary: { text: "데모 신청하기", href: "/contact?demo=freshdesk-omni" }
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
            label: "AI 에이전트",
            title: "문제를 자동으로 해결하는 AI 에이전트",
            description: "AI 에이전트는 단순한 제안을 넘어 직접 행동합니다. 일상적인 문의 해결부터 기록 업데이트, 요청 처리까지 이 디지털 팀원들이 24시간 자동으로 처리해드려요.",
            feature: {
                title: "자동 문제 해결 AI 시스템",
                description: "사람의 개입 없이 AI가 직접 고객 문제를 해결하고 업무를 자동화합니다.",
                items: [
                    "일상적인 문의 자동 해결",
                    "고객 기록 자동 업데이트",
                    "요청사항 자동 처리",
                    "24시간 무중단 서비스",
                    "대기시간 완전 제거"
                ]
            },
            interactiveArea: {
                type: "video",
                title: "AI 에이전트 실시간 작동 영상",
                description: "Freddy AI Agent가 고객 문의를 자동으로 해결하는 실제 과정",
                videoUrl: "https://dam.freshworks.com/m/3f4f0cf65ec45bed/original/AI-Agent_X2-50.webm"
            }
        },
        {
            id: "ai-copilot",
            label: "AI 코파일럿",
            title: "상담사를 도와주는 똑똑한 AI 어시스턴트",
            description: "AI가 상담사 옆에서 실시간으로 도움을 줍니다. 대화 요약, 실시간 번역, 답변 제안까지 자동으로 해주니까 상담사는 고객과의 대화에만 집중할 수 있어요.",
            feature: {
                title: "실시간 AI 상담 도우미",
                description: "상담사가 더 빠르고 정확하게 고객 응대를 할 수 있도록 AI가 실시간으로 지원합니다.",
                items: [
                    "대화 내용 자동 요약",
                    "실시간 다국어 번역",
                    "맞춤형 답변 제안",
                    "고객 감정 상태 분석",
                    "관련 문서 자동 검색"
                ]
            },
            interactiveArea: {
                type: "video",
                title: "AI 코파일럿 실시간 지원 영상",
                description: "상담사를 도와 더 나은 고객 서비스를 제공하는 AI의 모습",
                videoUrl: "https://dam.freshworks.com/m/5985bfde388a455d/original/Resolution-AI-Assist_Omni_X2-50.webm"
            }
        },
        {
            id: "omnichannel-inbox",
            label: "옴니채널 인박스",
            title: "고객이 있는 곳 어디든 만나보세요",
            description: "모든 채널의 고객 대화를 하나의 스마트 인박스에서 확인하세요. 상담사는 모든 지원 문제를 놓치지 않고, 고객 선호도에 따라 채널을 전환하며, 여러 탭이나 도구를 오가지 않고도 더 빠르게 응답할 수 있습니다.",
            feature: {
                title: "통합 고객 커뮤니케이션 허브",
                description: "모든 채널의 대화를 한 곳에서 관리하여 효율적이고 일관된 고객 서비스를 제공합니다.",
                items: [
                    "모든 채널 통합 관리",
                    "스마트 인박스 시스템",
                    "채널별 우선순위 설정",
                    "고객 선호 채널 자동 인식",
                    "실시간 대화 전환"
                ]
            },
            interactiveArea: {
                type: "image",
                title: "옴니채널 인박스 화면",
                description: "다양한 채널의 고객 대화가 하나로 통합된 인박스를 확인하세요",
                imageUrl: "/SB-3-Omnichannel-Inbox.webp"
            }
        },
        {
            id: "integration",
            label: "비즈니스 앱 연동",
            title: "팀이 사용하는 모든 도구와 연결하세요",
            description: "팀이 의존하는 도구들과 연동하세요. Freshdesk에 기본 내장된 연동 기능으로 추가 비용이나 복잡함 없이 바로 시작할 수 있습니다.",
            feature: {
                title: "네이티브 통합 생태계",
                description: "별도 설치나 복잡한 설정 없이 필요한 도구들과 즉시 연동됩니다.",
                items: [
                    "Slack, Teams 협업 도구",
                    "Salesforce, HubSpot CRM",
                    "Jira, Asana 프로젝트 관리",
                    "Shopify, WooCommerce 이커머스",
                    "추가 비용 없는 기본 연동"
                ]
            },
            interactiveArea: {
                type: "image",
                title: "비즈니스 앱 연동 화면",
                description: "다양한 비즈니스 도구들과의 네이티브 연동을 확인하세요",
                imageUrl: "/Integration_2x.webp"
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
            
            {/* 3D 인터랙티브 섹션 */}
            <section className="py-16 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
                <div className="container max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            다채널을 중앙에서 효율적으로 처리
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            이메일, 라이브 채팅, 전화, WhatsApp, Instagram, Messenger, KakaoTalk, SMS 등 
                            모든 채널의 고객 문의가 하나의 중앙 인박스로 통합되어 상담원이 효율적으로 처리할 수 있습니다.
                        </p>
                        <div className="mt-6 text-center">
                            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-background/60 px-4 py-2 rounded-full">
                                <span className="text-primary font-semibold">다채널</span>
                                <span>→</span>
                                <span className="text-secondary font-semibold">중앙 인박스</span>
                                <span>→</span>
                                <span className="text-accent font-semibold">효율적 상담</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* 3D 인터랙티브 체험 */}
                    <div className="max-w-5xl mx-auto">
                        <Omni3DExperience />
                    </div>
                    
                    {/* 추가 설명 */}
                    <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="text-center p-4">
                            <div className="text-2xl mb-2">🔄</div>
                            <h4 className="font-semibold mb-2">실시간 통합</h4>
                            <p className="text-sm text-muted-foreground">
                                모든 채널의 메시지가 실시간으로 중앙 인박스에 통합됩니다
                            </p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-2xl mb-2">⚡</div>
                            <h4 className="font-semibold mb-2">빠른 응답</h4>
                            <p className="text-sm text-muted-foreground">
                                상담원은 여러 도구를 오가지 않고 한 화면에서 모든 문의에 응답합니다
                            </p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-2xl mb-2">📊</div>
                            <h4 className="font-semibold mb-2">통합 관리</h4>
                            <p className="text-sm text-muted-foreground">
                                채널별 우선순위와 고객 히스토리를 한눈에 파악할 수 있습니다
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}