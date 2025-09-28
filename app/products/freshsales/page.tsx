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

        // 주요 기능 (3개 - docs 기반)
        keyFeatures: [
            {
                icon: 'users',
                title: '고객 360° 뷰',
                description: '이메일, 통화 기록, 채팅, 웹사이트 방문 이력 등 다양한 데이터를 한 화면에 통합해 고객을 입체적으로 파악할 수 있습니다. 이러한 전방위적 고객 이해를 바탕으로, 고객 니즈를 정확히 대응하고 분석합니다.'
            },
            {
                icon: 'zap',
                title: '영업 프로세스 간소화',
                description: '세일즈 담당자는 수작업 없이도 가장 효과적인 다음 단계로 넘어갑니다. 반복 업무를 줄이고 리드 관리·후속 조치를 더 빠르게 실행합니다. 병목 구간을 사전에 방지하고 세일즈 사이클을 단축시킵니다.'
            },
            {
                icon: 'barChart3',
                title: '한눈에 파악하는 거래 관리',
                description: 'Freshsales는 시각적인 파이프라인 보드를 통해 거래의 현재 단계, 예상 수익, 다음 조치 등을 한눈에 확인할 수 있도록 도와줍니다. 각 거래에 대한 커뮤니케이션 내역, 활동 기록, 관련 연락처 정보가 자동으로 연동됩니다.'
            }
        ],

        // docs 원본 콘텐츠 기반 4개 탭
        detailedFeatureTabs: [
            {
                id: "customer-360",
                label: "고객 360° 뷰",
                title: "고객 360° 뷰",
                description: "이메일, 통화 기록, 채팅, 웹사이트 방문 이력 등 다양한 데이터를 한 화면에 통합해 고객을 입체적으로 파악할 수 있습니다.",
                feature: {
                    title: "전방위적 고객 이해를 바탕으로 정확한 니즈 대응",
                    description: "이러한 전방위적 고객 이해를 바탕으로, 고객 니즈를 정확히 대응하고 분석합니다.",
                    items: [
                        "이메일, 통화 기록, 채팅 통합",
                        "웹사이트 방문 이력 추적",
                        "다양한 데이터 한 화면 통합",
                        "고객 입체적 파악",
                        "고객 니즈 정확한 대응 및 분석"
                    ]
                },
                interactiveArea: {
                    type: "dashboard",
                    title: "고객 360도 뷰 대시보드",
                    description: "모든 고객 정보가 통합된 인터페이스를 확인하세요"
                }
            },
            {
                id: "sales-automation",
                label: "영업 자동화 & 워크플로우",
                title: "영업 자동화 및 워크플로우 설정",
                description: "리드 생성, 알림 발송, 상태 변경 등 반복적인 업무를 자동화할 수 있습니다.",
                feature: {
                    title: "업무 자동화로 시간은 줄이고, 고객 대응은 더 빨라집니다",
                    description: "조건 기반 워크플로우를 통해 세일즈 과정을 효율적으로 운영해보세요. 제품군, 팀, 지역에 따라 여러 개의 파이프라인을 구성해 거래를 체계적으로 관리할 수 있습니다. 각 단계별 거래 현황을 시각적으로 추적하고 병목 현상을 쉽게 발견할 수 있습니다.",
                    items: [
                        "리드 생성, 알림 발송, 상태 변경 자동화",
                        "조건 기반 워크플로우 구성",
                        "제품군, 팀, 지역별 파이프라인 관리",
                        "단계별 거래 현황 시각적 추적",
                        "병목 현상 발견 및 해결"
                    ]
                },
                interactiveArea: {
                    type: "workflow",
                    title: "영업 자동화 워크플로우",
                    description: "자동화된 영업 프로세스와 파이프라인을 확인하세요"
                }
            },
            {
                id: "deal-management",
                label: "거래 폼 자동 생성 & 추적",
                title: "거래 폼 자동 생성 및 추적",
                description: "사용자 정의 거래 폼을 통해 정보를 표준화하고, 고객의 세부 요구사항을 빠짐없이 수집합니다.",
                feature: {
                    title: "세일즈 데이터의 일관성과 정확성을 동시에 확보",
                    description: "폼에 입력된 내용은 자동으로 거래에 연동되어, 후속 조치가 간편해집니다.",
                    items: [
                        "사용자 정의 거래 폼 생성",
                        "정보 표준화 및 체계화",
                        "고객 세부 요구사항 수집",
                        "자동 거래 연동",
                        "후속 조치 간편화"
                    ]
                },
                interactiveArea: {
                    type: "demo",
                    title: "거래 폼 빌더",
                    description: "맞춤형 거래 폼 생성과 관리 과정을 확인하세요"
                }
            },
            {
                id: "reports-insights",
                label: "보고서 & 실시간 인사이트",
                title: "보고서 및 실시간 인사이트",
                description: "맞춤형 대시보드와 다양한 리포트로 실시간으로 성과를 분석할 수 있습니다.",
                feature: {
                    title: "데이터 기반 의사결정으로 전략을 빠르게 조정",
                    description: "리드 소스, 팀 성과, 거래 진행 상황 등을 한눈에 파악할 수 있습니다.",
                    items: [
                        "맞춤형 대시보드 구성",
                        "다양한 실시간 리포트",
                        "리드 소스, 팀 성과 분석",
                        "거래 진행 상황 추적",
                        "데이터 기반 전략 수립"
                    ]
                },
                interactiveArea: {
                    type: "dashboard",
                    title: "실시간 성과 대시보드",
                    description: "영업 성과와 인사이트를 실시간으로 확인하세요"
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

        // FAQ (4개 - docs 기반)
        faqs: [
            {
                question: '개인/ 팀 메일함을 Freshsales에 연동할 수 있나요?',
                answer: 'Freshsales는 개인 메일함과 팀 메일함을 연결할 수 있습니다. 세일즈 팀과 고객을 더욱 긴밀하게 연결하고 고객의 반응을 놓치지 않고 대응합니다.(Gmail 이나 Office365와 같은 사용자 지정 이메일을 연결할 수 있습니다.)'
            },
            {
                question: 'Freshsales에서 견적서를 작성할 수 있나요?',
                answer: '네, 가능합니다. Freshsales에서는 거래와 연동된 견적서를 생성하고, 이를 고객에게 전송할 수 있습니다. 또한, 전자서명 기능으로 문서 승인 절차를 간편하게 디지털로 처리할 수 있습니다.'
            },
            {
                question: 'Freshsales에서 전화를 걸 수 있나요?',
                answer: '네, 가능합니다. Freshsales는 CTI(Computer Telephony Integration) 기능을 통해 전화 통화 기능을 연동할 수 있습니다. 이 기능은 애드온(추가 기능)으로 제공되며, 외부 전화 시스템(PBX, Twilio, Aircall 등)과 연결하여 앱 내에서 바로 통화하고, 통화 기록 및 메모도 남길 수 있습니다.'
            },
            {
                question: '마케팅 이메일 전송은 제한이 있나요?',
                answer: '요금제에 따라 일일 또는 월간 이메일 전송 한도가 설정되어 있습니다. 대량 이메일 캠페인을 계획하고 있다면, 요금제별 한도를 사전에 확인하는 것이 좋습니다.'
            }
        ],

        // 최종 CTA (docs 기반)
        finalCTA: {
            title: '더 스마트한 판매, 손쉬운 고객 관리',
            description: 'Freshsales로 다양한 채널의 고객 데이터를 통합해 세일즈 프로세스를 단순화하세요.',
            primaryButton: { text: '가격표 보기', href: '/contact?product=freshsales' },
            secondaryButton: { text: '데모 신청하기', href: '/contact?demo=freshsales' }
        }
    }

    return <ProductPageTemplate data={productData} />
}