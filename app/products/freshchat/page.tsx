import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export default function FreshchatPage() {
    const productData: ProductPageData = {
        // Hero 섹션 (docs 기반)
        name: 'Freshchat',
        subtitle: '고객 감동은 채팅에서 시작됩니다',
        description: '웹, 모바일, 소셜 채널에서 들어오는 고객 메시지를 하나의 창에서 관리하세요. AI 챗봇과 자동화된 워크플로우로 빠르고 일관된 응대를 제공하고, 상담 팀의 효율성과 고객 만족도를 함께 높입니다.',
        category: '고객 경험 관리',
        slug: 'freshchat',
        heroCTA: {
            primary: { text: '데모 신청하기', href: '/contact?demo=freshchat' },
            secondary: { text: '자세히 보기', href: '/contact?product=freshchat' }
        },

        // 주요 기능 (3개 - docs 기반)
        keyFeatures: [
            {
                icon: 'messageSquare',
                title: 'AI 기반 자동 챗봇',
                description: '보편적이지 않은 전문 기술 답변도 문제 없습니다! 나만의 지식 베이스에 맞춰 커스텀 AI로 학습시켜보세요.'
            },
            {
                icon: 'globe',
                title: '다양한 채널 플랫폼',
                description: '웹, 모바일을 포함하여 카카오톡, WhatsApp, Facebook Messenger, Instagram 까지 다양한 채널을 하나의 플랫폼에서 응대합니다.'
            },
            {
                icon: 'users',
                title: '팀 협업 중심 인터페이스',
                description: '상담사 간 티켓 공유, 내부 메모, 태스크 분배 등 협업 기능 강화.'
            }
        ],

        // docs 원본 콘텐츠 기반 4개 탭
        detailedFeatureTabs: [
            {
                id: "multi-channel",
                label: "다양한 채널 플랫폼 연동",
                title: "다양한 채널 플랫폼 연동",
                description: "Freshchat은 웹사이트, 모바일 앱은 물론 카카오톡, WhatsApp, Facebook Messenger, Instagram 등 다양한 채널을 연동하여 하나의 플랫폼에서 통합 관리할 수 있습니다.",
                feature: {
                    title: "단일 창에서 모든 채널의 메시지를 응대하여 업무 효율 향상",
                    description: "고객은 원하는 채널로 편리하게 소통하고, 상담사는 단일 창에서 모든 채널의 메시지를 응대할 수 있어 업무 효율이 향상됩니다.",
                    items: [
                        "웹사이트, 모바일 앱 채팅 연동",
                        "카카오톡, WhatsApp, Facebook Messenger",
                        "Instagram 등 다양한 채널 지원",
                        "하나의 플랫폼에서 통합 관리",
                        "단일 창에서 모든 메시지 응대"
                    ]
                },
                interactiveArea: {
                    type: "dashboard",
                    title: "멀티 채널 메시지 허브",
                    description: "다양한 채널을 통한 상호작용 과정을 확인하세요"
                }
            },
            {
                id: "freddy-ai",
                label: "Freddy AI Agent",
                title: "Freddy AI Agent",
                description: "보편적이지 않은 전문 기술 답변도 AI Agent가 답변합니다.",
                feature: {
                    title: "문서 파일, URL, 지식 베이스 문서를 빠르게 학습하여 실시간 답변 제공",
                    description: "나만의 지식 베이스에 맞춰 커스텀 AI로 학습시켜보세요! 문서 파일, URL, 지식 베이스 문서를 빠르게 학습하고, 고객에게 실시간 답변을 전달합니다.",
                    items: [
                        "전문 기술 답변까지 AI가 지원",
                        "나만의 지식 베이스 맞춤 학습",
                        "문서 파일, URL 빠른 학습",
                        "지식 베이스 문서 자동 통합",
                        "고객에게 실시간 답변 전달"
                    ]
                },
                interactiveArea: {
                    type: "demo",
                    title: "Freddy AI 에이전트 대화",
                    description: "AI 기반 자동 응답과 문제 해결 과정을 확인하세요"
                }
            },
            {
                id: "chatbot-builder",
                label: "챗봇 빌더 (Freddy AI Bot Builder)",
                title: "챗봇 빌더 (Freddy AI Bot Builder)",
                description: "코드 없이 챗봇을 구성할 수 있도록 워크플로우 및 AI 챗봇 빌더를 제공합니다.",
                feature: {
                    title: "코드 없는 직관적 챗봇 구축 도구",
                    description: "코드 없이 챗봇을 구성할 수 있도록 워크플로우 및 AI 챗봇 빌더를 제공합니다.",
                    items: [
                        "코드 없는 챗봇 구성",
                        "워크플로우 기반 설계",
                        "AI 챗봇 빌더 제공",
                        "직관적 인터페이스",
                        "손쉬운 봇 관리 및 수정"
                    ]
                },
                interactiveArea: {
                    type: "demo",
                    title: "지능형 챗봇 빌더",
                    description: "지식 기반 챗봇의 작동 방식을 확인하세요"
                }
            },
            {
                id: "unified-inbox",
                label: "통합 메시지 인박스",
                title: "통합 메시지 인박스",
                description: "여러 채널의 메시지를 하나의 인박스에서 확인하고 대응합니다.",
                feature: {
                    title: "상담 그룹, 업무 시간에 따라 맞춤 자동화 메시지 안내",
                    description: "상담사 간 채팅을 이관할 수 있습니다. 국가별 상담 그룹에 따라 맞춤 업무시간을 설정합니다. 상담 그룹, 업무 시간에 따라 유저에게 다른 자동화 메세지를 안내합니다.",
                    items: [
                        "여러 채널 메시지 통합 관리",
                        "하나의 인박스에서 확인 및 대응",
                        "상담사 간 채팅 이관 기능",
                        "국가별 상담 그룹 맞춤 설정",
                        "업무시간별 자동화 메시지 안내"
                    ]
                },
                interactiveArea: {
                    type: "dashboard",
                    title: "통합 인박스 대시보드",
                    description: "모든 커뮤니케이션이 통합된 인터페이스를 확인하세요"
                }
            }
        ],

        // 비즈니스 혜택 (4개 - 문서 원본 그대로)
        benefits: [
            {
                title: '고객 응답 시간',
                description: '단축',
                metrics: '85%'
            },
            {
                title: '실시간 문의 해결률',
                description: '향상',
                metrics: '75%'
            },
            {
                title: '고객 만족도',
                description: '증가',
                metrics: '60%'
            },
            {
                title: '상담원 동시 처리 용량',
                description: '확대',
                metrics: '300%'
            }
        ],

        // 활용 시나리오 (4개 - 문서 원본 그대로)
        useCases: [
            {
                title: 'E-commerce',
                description: '실시간 상품 문의 및 구매 지원',
                features: [
                    '실시간 상품 문의 대응',
                    '구매 지원 서비스',
                    '주문 관련 안내',
                    '고객 만족도 향상'
                ]
            },
            {
                title: 'SaaS 기업',
                description: '제품 온보딩 및 기술 지원',
                features: [
                    '신규 사용자 온보딩',
                    '제품 기능 안내',
                    '기술 지원 서비스',
                    '사용법 가이드 제공'
                ]
            },
            {
                title: '금융 서비스',
                description: '실시간 상담 및 계좌 관련 문의 처리',
                features: [
                    '금융 상품 상담',
                    '계좌 관련 문의',
                    '실시간 고객 지원',
                    '보안 문의 대응'
                ]
            },
            {
                title: '여행/숙박',
                description: '예약 문의 및 고객 서비스',
                features: [
                    '예약 문의 처리',
                    '여행 정보 제공',
                    '숙박 서비스 안내',
                    '고객 서비스 지원'
                ]
            }
        ],

        // FAQ (3개 - docs 기반)
        faqs: [
            {
                question: '카카오톡 연동은 오랜 기간이 소요되나요?',
                answer: '카카오톡 연동은 먼저 카카오톡 비즈니스 채널을 생성해주셔야 합니다. 이후 Freshchat과의 연동까지 영업일 기준 2-3일이 소요됩니다.'
            },
            {
                question: 'Freshchat의 Freddy AI Agent는 유료인가요?',
                answer: 'Freddy AI Agent는 무료로 제공하고 있으며, 채팅 세션 생성을 위한 봇 세션 구매만 필요합니다. (1000세션 당 $100)'
            },
            {
                question: '다른 Freshworks 제품과의 연동이 가능한가요?',
                answer: '네, 모두 가능합니다. Freshdesk와의 연동이 대표적으로, Freshdesk와 Freshchat이 합쳐진 Freshdesk Omni 제품으로 보다 저렴하게 이용해보시길 추천드립니다.'
            }
        ],

        // 최종 CTA (docs 기반)
        finalCTA: {
            title: 'AI 챗봇은 선택이 아닌 필수입니다.',
            description: 'Freshchat으로 고객과 실시간으로 연결되고 전문적인 답변까지도 빠르게 전달합니다.',
            primaryButton: { text: '가격표 보기', href: '/contact?product=freshchat' },
            secondaryButton: { text: '데모 신청하기', href: '/contact?demo=freshchat' }
        }
    }

    return <ProductPageTemplate data={productData} />
}