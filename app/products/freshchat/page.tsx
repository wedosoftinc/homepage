import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export default function FreshchatPage() {
    const productData: ProductPageData = {
        // Hero 섹션
        name: 'Freshchat',
        subtitle: '실시간 채팅 솔루션',
        description: '고객과 실시간으로 연결되는 스마트한 메시징 솔루션으로, 현대적인 고객 소통의 새로운 기준을 제시합니다.',
        category: '고객 경험 관리',
        slug: 'freshchat',
        heroCTA: {
            primary: { text: '무료 체험 시작', href: '/contact' },
            secondary: { text: '상담 문의', href: '/contact' }
        },

        // 주요 기능 (7개 - 문서 원본 그대로)
        keyFeatures: [
            {
                icon: 'messageSquare',
                title: 'AI 기반 자동 챗봇',
                description: 'Freddy AI Agent를 통한 지능형 고객 응대'
            },
            {
                icon: 'globe',
                title: '다양한 채널 플랫폼 연동',
                description: '카카오톡, WhatsApp, Facebook Messenger, Instagram 등 모든 메시징 채널 통합'
            },
            {
                icon: 'users',
                title: '팀 협업 중심 인터페이스',
                description: '실시간 팀원 협업 및 내부 메모 공유'
            },
            {
                icon: 'phone',
                title: '모바일 앱 지원',
                description: 'iOS/Android 전용 앱으로 이동 중에도 완벽한 고객 지원'
            },
            {
                icon: 'settings',
                title: '챗봇 빌더',
                description: '코딩 없이 드래그 앤 드롭으로 맞춤형 챗봇 구축'
            },
            {
                icon: 'mail',
                title: '통합 메시지 인박스',
                description: '모든 채널의 메시지를 하나의 인박스에서 관리'
            },
            {
                icon: 'clock',
                title: '업무시간 설정',
                description: '자동 응답 및 에스컬레이션 규칙 설정'
            }
        ],

        // 세부 기능 섹션
        detailedFeatures: [
            {
                title: '실시간 메시징',
                description: '고객과 즉시 소통할 수 있는 라이브 채팅 기능',
                features: [
                    '실시간 채팅',
                    '파일 공유',
                    '이모지 지원',
                    '타이핑 인디케이터'
                ]
            },
            {
                title: '팀 협업',
                description: '팀원들과 효율적으로 협업하여 고객을 지원',
                features: [
                    '내부 메모 공유',
                    '팀원 태그',
                    '대화 전달',
                    '실시간 협업'
                ]
            },
            {
                title: '자동화 도구',
                description: '챗봇과 자동 응답으로 효율성 극대화',
                features: [
                    '코딩 없는 챗봇 빌더',
                    '자동 응답 설정',
                    '업무시간 자동 관리',
                    '에스컬레이션 규칙'
                ]
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

        // FAQ (3개 - 문서 원본 그대로)
        faqs: [
            {
                question: '기존 웹사이트에 쉽게 설치할 수 있나요?',
                answer: '한 줄의 JavaScript 코드만으로 모든 웹사이트에 즉시 설치 가능합니다.'
            },
            {
                question: '채팅 기록이 안전하게 보관되나요?',
                answer: '엔터프라이즈급 보안과 GDPR 준수로 모든 데이터를 안전하게 보호합니다.'
            },
            {
                question: '다국어 고객도 지원할 수 있나요?',
                answer: '실시간 번역 기능과 다국어 챗봇으로 글로벌 고객 지원이 가능합니다.'
            }
        ],

        // 최종 CTA
        finalCTA: {
            title: 'Freshchat으로 고객과의 소통을 혁신하세요',
            description: '실시간 채팅의 힘을 경험해보세요. 전문 컨설턴트가 귀사에 최적화된 채팅 솔루션을 제안해드립니다.',
            primaryButton: { text: '무료 체험 시작', href: '/contact' },
            secondaryButton: { text: '상담 문의하기', href: '/contact' }
        }
    }

    return <ProductPageTemplate data={productData} />
}