import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export default function FreddyAIPage() {
    const productData: ProductPageData = {
        // Hero 섹션
        name: 'Freddy AI',
        subtitle: 'GPT LLM 기반 고객 지원 자동화',
        description: '최신 GPT 대규모 언어 모델(LLM)을 기반으로 한 지능형 고객 지원 자동화 솔루션입니다.',
        category: '고객 경험 관리',
        slug: 'freddy-ai',
        heroCTA: {
            primary: { text: 'AI 체험하기', href: '/contact' },
            secondary: { text: '상담 문의', href: '/contact' }
        },

        // 주요 기능 (6개 - 문서 원본 그대로)
        keyFeatures: [
            {
                icon: 'messageSquare',
                title: '지능형 AI 챗봇',
                description: '자연어 처리로 인간과 같은 대화 경험'
            },
            {
                icon: 'fileText',
                title: '자동 문서 생성',
                description: 'AI가 티켓 요약, 해결 방안 등을 자동 작성'
            },
            {
                icon: 'target',
                title: '스마트 답변 추천',
                description: '상담원에게 최적의 답변을 실시간 제안'
            },
            {
                icon: 'barChart3',
                title: '감정 분석',
                description: '고객의 감정 상태를 분석하여 적절한 대응 전략 제시'
            },
            {
                icon: 'globe',
                title: '다국어 지원',
                description: '40개 이상 언어로 동시 고객 지원'
            },
            {
                icon: 'zap',
                title: '학습 능력',
                description: '기업별 데이터로 지속적인 성능 개선'
            }
        ],

        // 세부 기능 섹션
        detailedFeatures: [
            {
                title: '지능형 자동화',
                description: 'AI가 고객 문의를 자동으로 처리하고 답변합니다',
                features: [
                    '기본 문의사항 자동 처리',
                    'FAQ 자동 응답',
                    '고객 문의 분류',
                    '우선순위 자동 설정'
                ]
            },
            {
                title: '상담원 어시스턴트',
                description: '복잡한 문의에 대한 해결책을 실시간으로 제안합니다',
                features: [
                    '복잡한 문의 해결책 제안',
                    '상담원 업무 지원',
                    '실시간 답변 추천',
                    '고객 대응 최적화'
                ]
            },
            {
                title: '품질 관리',
                description: '응답 품질을 실시간으로 모니터링하고 개선합니다',
                features: [
                    '응답 품질 모니터링',
                    '고객 만족도 추적',
                    'AI 성능 분석',
                    '지속적인 학습 및 개선'
                ]
            }
        ],

        // 비즈니스 혜택 (4개 - 문서 원본 그대로)
        benefits: [
            {
                title: '자동화율',
                description: '달성',
                metrics: '80%'
            },
            {
                title: '고객 대기 시간',
                description: '단축',
                metrics: '90%'
            },
            {
                title: '상담원 업무 효율성',
                description: '향상',
                metrics: '70%'
            },
            {
                title: '무중단 고객 지원',
                description: '가능',
                metrics: '24/7'
            }
        ],

        // 활용 시나리오 (3개 - 문서 원본 그대로)
        useCases: [
            {
                title: '1차 고객 응답',
                description: '기본적인 문의사항 자동 처리',
                features: [
                    '기본 문의사항 자동 처리',
                    'FAQ 자동 응답',
                    '고객 문의 분류',
                    '우선순위 자동 설정'
                ]
            },
            {
                title: '상담원 보조',
                description: '복잡한 문의에 대한 해결책 제안',
                features: [
                    '복잡한 문의 해결책 제안',
                    '상담원 업무 지원',
                    '실시간 답변 추천',
                    '고객 대응 최적화'
                ]
            },
            {
                title: '품질 관리',
                description: '응답 품질 실시간 모니터링 및 개선',
                features: [
                    '응답 품질 모니터링',
                    '서비스 개선 분석',
                    '고객 만족도 측정',
                    '성과 지표 추적'
                ]
            }
        ],

        // FAQ (2개 - 문서 원본 그대로)
        faqs: [
            {
                question: 'AI가 잘못된 답변을 할 가능성은?',
                answer: '신뢰도 점수 시스템과 인간 검토 단계를 통해 정확성을 보장합니다.'
            },
            {
                question: '업계별 맞춤 설정이 가능한가요?',
                answer: '업계별 용어와 프로세스를 학습하여 전문적인 지원이 가능합니다.'
            }
        ],

        // 최종 CTA
        finalCTA: {
            title: 'Freddy AI로 고객 지원을 자동화하세요',
            description: 'GPT 기반 AI의 혁신적인 성능을 경험해보세요. 전문가가 귀사에 최적화된 AI 솔루션을 설계해드립니다.',
            primaryButton: { text: 'AI 데모 체험', href: '/contact' },
            secondaryButton: { text: '도입 상담하기', href: '/contact' }
        }
    }

    return <ProductPageTemplate data={productData} />
}