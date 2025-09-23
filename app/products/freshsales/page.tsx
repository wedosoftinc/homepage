import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export default function FreshsalesPage() {
    const productData: ProductPageData = {
        // Hero 섹션
        name: 'Freshsales',
        subtitle: 'CRM 및 세일즈 관리',
        description: '더 스마트하게 판매하고 더 빠르게 거래를 성사시키세요. 차세대 CRM 솔루션입니다.',
        category: '고객 경험 관리',
        slug: 'freshsales',
        heroCTA: {
            primary: { text: '무료 체험', href: '/contact' },
            secondary: { text: '상담 문의', href: '/contact' }
        },

        // 주요 기능 (10개 - 문서 원본 그대로)
        keyFeatures: [
            {
                icon: 'users',
                title: '고객 360° 뷰',
                description: '고객의 모든 상호작용 기록을 통합 관리'
            },
            {
                icon: 'zap',
                title: '영업 프로세스 간소화',
                description: '복잡한 영업 단계를 직관적으로 관리'
            },
            {
                icon: 'briefcase',
                title: '거래 관리',
                description: '영업 기회부터 계약 완료까지 전체 프로세스 추적'
            },
            {
                icon: 'settings',
                title: '영업 자동화 및 워크플로우',
                description: '반복적인 영업 업무 자동화'
            },
            {
                icon: 'barChart3',
                title: '파이프라인 관리',
                description: '시각적 파이프라인으로 거래 현황 실시간 파악'
            },
            {
                icon: 'users',
                title: '영업 조직 관리',
                description: '팀별, 지역별, 제품별 영업 성과 관리'
            },
            {
                icon: 'fileText',
                title: '거래 폼 자동 생성',
                description: '고객 정보 수집 및 리드 생성 자동화'
            },
            {
                icon: 'target',
                title: '스마트 마케팅 캠페인',
                description: '타겟팅된 이메일 마케팅 및 리드 육성'
            },
            {
                icon: 'messageSquare',
                title: '고객 소통 채널 통합',
                description: '이메일, 전화, SNS 등 모든 소통 기록 통합'
            },
            {
                icon: 'barChart3',
                title: '보고서 및 실시간 인사이트',
                description: 'AI 기반 영업 성과 분석 및 예측'
            }
        ],

        // 탭 기반 세부 기능
        detailedFeatureTabs: [
            {
                id: "crm",
                label: "CRM 핵심",
                title: "고객 관계 관리의 모든 것",
                description: "360도 고객 뷰와 지능형 분석으로 고객과의 모든 상호작용을 체계적으로 관리합니다.",
                feature: {
                    title: "통합 고객 관리 시스템",
                    description: "고객의 모든 정보와 상호작용 히스토리를 한 곳에서 관리하고 분석할 수 있습니다.",
                    items: [
                        "360도 고객 뷰",
                        "상호작용 히스토리 추적",
                        "고객 세그멘테이션",
                        "라이프사이클 관리"
                    ]
                },
                interactiveArea: {
                    type: "dashboard" as const,
                    title: "고객 관리 대시보드",
                    description: "실제 CRM 인터페이스에서 고객 정보가 어떻게 관리되는지 확인하세요",
                    placeholder: "고객 360도 뷰 대시보드"
                }
            },
            {
                id: "automation",
                label: "영업 자동화",
                title: "AI 기반 영업 프로세스 자동화",
                description: "반복적인 영업 업무를 자동화하고 AI가 최적의 영업 전략을 제안합니다.",
                feature: {
                    title: "Freddy AI 영업 어시스턴트",
                    description: "AI가 리드 점수 산정, 거래 예측, 다음 액션 추천 등을 자동으로 수행합니다.",
                    items: [
                        "리드 스코어링 자동화",
                        "거래 성사 확률 예측",
                        "다음 액션 자동 추천",
                        "최적 연락 시점 제안"
                    ]
                },
                interactiveArea: {
                    type: "demo" as const,
                    title: "AI 영업 자동화 데모",
                    description: "Freddy AI가 영업 프로세스를 어떻게 자동화하는지 체험해보세요",
                    placeholder: "AI 영업 자동화 시뮬레이션"
                }
            },
            {
                id: "analytics",
                label: "성과 분석",
                title: "데이터 기반 영업 인사이트",
                description: "상세한 영업 분석과 실시간 대시보드로 성과를 측정하고 개선점을 찾을 수 있습니다.",
                feature: {
                    title: "실시간 영업 성과 분석",
                    description: "영업팀의 모든 활동과 성과를 실시간으로 추적하고 분석합니다.",
                    items: [
                        "실시간 영업 파이프라인 분석",
                        "개인/팀별 성과 추적",
                        "예측 분석 및 트렌드",
                        "맞춤형 보고서 생성"
                    ]
                },
                interactiveArea: {
                    type: "dashboard" as const,
                    title: "영업 성과 대시보드",
                    description: "핵심 영업 지표와 성과를 실시간으로 확인할 수 있습니다",
                    placeholder: "영업 성과 분석 대시보드"
                }
            }
        ],

        // 비즈니스 혜택 (4개 - 문서 원본 그대로)
        benefits: [
            {
                title: '영업 성과',
                description: '향상',
                metrics: '45%'
            },
            {
                title: '거래 성사 시간',
                description: '단축',
                metrics: '30%'
            },
            {
                title: '리드 전환율',
                description: '증가',
                metrics: '50%'
            },
            {
                title: '고객 유지율',
                description: '개선',
                metrics: '40%'
            }
        ],

        // 활용 시나리오 (5개 - 문서 원본 그대로)
        useCases: [
            {
                title: 'B2B 영업',
                description: '복잡한 B2B 거래 프로세스의 체계적 관리',
                features: [
                    '복잡한 B2B 거래 프로세스 관리',
                    '다단계 의사결정 과정 추적',
                    '장기 거래 기회 육성',
                    '계약 협상 관리'
                ]
            },
            {
                title: '리드 관리',
                description: '마케팅 캠페인에서 생성된 리드의 효과적 육성',
                features: [
                    '마케팅 리드 효과적 육성',
                    '리드 스코어링 자동화',
                    '적절한 시점 연락',
                    '리드 전환율 최적화'
                ]
            },
            {
                title: '고객 관계 관리',
                description: '기존 고객과의 지속적인 관계 강화',
                features: [
                    '기존 고객 관계 강화',
                    '재구매 기회 발굴',
                    '고객 만족도 관리',
                    '장기 계약 갱신'
                ]
            },
            {
                title: '영업팀 관리',
                description: '영업팀의 성과 측정 및 목표 관리',
                features: [
                    '영업팀 성과 측정',
                    '목표 관리 및 추적',
                    '팀별 성과 비교',
                    '인센티브 관리'
                ]
            },
            {
                title: '파트너 영업',
                description: '채널 파트너와의 협력 영업 관리',
                features: [
                    '채널 파트너 협력 영업',
                    '파트너 성과 관리',
                    '공동 영업 활동',
                    '파트너 교육 지원'
                ]
            }
        ],

        // FAQ (3개 - 문서 원본 그대로)
        faqs: [
            {
                question: '기존 영업 데이터를 어떻게 이전하나요?',
                answer: 'CSV, Excel 파일 가져오기 및 API 연동을 통해 데이터 손실 없이 마이그레이션됩니다.'
            },
            {
                question: '마케팅팀과의 연동은 어떻게 하나요?',
                answer: 'Freshmarketer와 완벽 연동되어 마케팅에서 영업까지 통합 관리됩니다.'
            },
            {
                question: '모바일 앱의 기능은 어느 정도인가요?',
                answer: '전화 걸기, 미팅 스케줄링, 거래 업데이트 등 핵심 영업 활동을 모두 지원합니다.'
            }
        ],

        // 최종 CTA
        finalCTA: {
            title: 'Freshsales로 영업 성과를 극대화하세요',
            description: '더 스마트한 영업 관리로 거래 성사 시간을 단축하고 매출을 늘려보세요. 전문가가 귀사에 최적화된 CRM 솔루션을 제안해드립니다.',
            primaryButton: { text: '무료 체험 시작', href: '/contact' },
            secondaryButton: { text: '도입 상담하기', href: '/contact' }
        }
    }

    return <ProductPageTemplate data={productData} />
}