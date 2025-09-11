export interface PricingPlan {
    name: string
    price: string
    period: string
    description: string
    features: string[]
    popular: boolean
    ctaText?: string
}

export interface ProductPricing {
    title: string
    description: string
    plans: PricingPlan[]
}

export const pricingData: Record<string, ProductPricing> = {
    'google-workspace': {
        title: 'Google Workspace 요금제',
        description: '협업과 생산성을 위한 클라우드 오피스 솔루션',
        plans: [
            {
                name: 'Business Starter',
                price: '₩7,200',
                period: '/사용자/월',
                description: '소규모 팀을 위한 기본 플랜',
                features: [
                    'Gmail 비즈니스 이메일',
                    '30GB 클라우드 스토리지',
                    'Google Meet (100명)',
                    'Docs, Sheets, Slides',
                    '표준 보안 및 관리',
                    '24/7 온라인 지원'
                ],
                popular: false
            },
            {
                name: 'Business Standard',
                price: '₩14,400',
                period: '/사용자/월',
                description: '성장하는 기업을 위한 표준 플랜',
                features: [
                    'Gmail 비즈니스 이메일',
                    '2TB 클라우드 스토리지',
                    'Google Meet (150명)',
                    'Docs, Sheets, Slides',
                    '향상된 보안 및 관리',
                    '공유 드라이브',
                    '전자 검색 및 보관'
                ],
                popular: true
            },
            {
                name: 'Business Plus',
                price: '₩21,600',
                period: '/사용자/월',
                description: '대기업을 위한 고급 플랜',
                features: [
                    'Gmail 비즈니스 이메일',
                    '5TB 클라우드 스토리지',
                    'Google Meet (500명)',
                    'Docs, Sheets, Slides',
                    '고급 보안 및 관리',
                    '공유 드라이브',
                    'Vault (보관 및 eDiscovery)',
                    '고급 엔드포인트 관리'
                ],
                popular: false
            }
        ]
    },
    'freshworks': {
        title: 'Freshworks 요금제',
        description: '고객 관리와 지원을 위한 통합 플랫폼',
        plans: [
            {
                name: 'Growth',
                price: '$15',
                period: '/에이전트/월',
                description: '성장하는 팀을 위한 기본 플랜',
                features: [
                    'Freshdesk 헬프데스크',
                    '이메일 및 채팅 지원',
                    '기본 자동화 규칙',
                    '보고서 및 분석',
                    '모바일 앱',
                    '지식 베이스',
                    '소셜 미디어 통합'
                ],
                popular: false
            },
            {
                name: 'Pro',
                price: '$49',
                period: '/에이전트/월',
                description: '전문적인 고객 지원을 위한 플랜',
                features: [
                    'Freshdesk + Freshsales',
                    '고급 자동화 워크플로우',
                    '시간 추적 및 청구',
                    '고급 보고서 및 대시보드',
                    'API 액세스',
                    '전화 지원 통합',
                    '다국어 지원',
                    '사용자 정의 역할'
                ],
                popular: true
            },
            {
                name: 'Enterprise',
                price: '$79',
                period: '/에이전트/월',
                description: '대기업을 위한 엔터프라이즈 플랜',
                features: [
                    '모든 Freshworks 제품 통합',
                    '고급 보안 및 규정 준수',
                    '사용자 정의 객체 및 필드',
                    'IP 화이트리스트',
                    '전담 계정 관리자',
                    '24/7 우선 지원',
                    '온보딩 및 교육',
                    '무제한 API 호출'
                ],
                popular: false
            }
        ]
    },
    'monday': {
        title: 'Monday.com 요금제',
        description: '프로젝트 관리와 팀 협업을 위한 워크플로우 플랫폼',
        plans: [
            {
                name: 'Basic',
                price: '$8',
                period: '/시트/월',
                description: '소규모 팀을 위한 기본 플랜',
                features: [
                    '무제한 개인 보드',
                    '20+ 컬럼 타입',
                    'iOS 및 Android 앱',
                    '우선순위 고객 지원',
                    '기본 대시보드 및 보고서',
                    '무제한 무료 뷰어',
                    '250MB 파일 스토리지'
                ],
                popular: false
            },
            {
                name: 'Standard',
                price: '$10',
                period: '/시트/월',
                description: '성장하는 팀을 위한 표준 플랜',
                features: [
                    '타임라인 및 간트 차트',
                    '캘린더 뷰',
                    '게스트 액세스',
                    '자동화 (250개/월)',
                    '통합 (Gmail, Excel 등)',
                    '양식 생성',
                    '5GB 파일 스토리지'
                ],
                popular: true
            },
            {
                name: 'Pro',
                price: '$16',
                period: '/시트/월',
                description: '전문 팀을 위한 고급 플랜',
                features: [
                    '시간 추적',
                    '고급 대시보드',
                    '차트 뷰',
                    '자동화 (25,000개/월)',
                    '고급 통합 (Slack, Jira)',
                    '개인 보드 및 문서',
                    '종속성 관리',
                    '25GB 파일 스토리지'
                ],
                popular: false
            }
        ]
    },
    'splashtop': {
        title: 'Splashtop 요금제',
        description: '안전하고 빠른 원격 접속 솔루션',
        plans: [
            {
                name: 'Business Access',
                price: '$5',
                period: '/사용자/월',
                description: '개인 및 소규모 팀용 원격 접속',
                features: [
                    '무제한 컴퓨터 액세스',
                    'Windows, Mac, iOS, Android',
                    '파일 전송',
                    '원격 인쇄',
                    '세션 녹화',
                    '다중 모니터 지원',
                    '256비트 AES 암호화'
                ],
                popular: false
            },
            {
                name: 'Business Access Pro',
                price: '$8.25',
                period: '/사용자/월',
                description: '전문 팀을 위한 고급 기능',
                features: [
                    '모든 Business Access 기능',
                    '중앙 집중식 사용자 관리',
                    '그룹 관리 및 권한',
                    '세션 로그 및 감사',
                    '2단계 인증 (2FA)',
                    'SSO 통합 (SAML)',
                    '원격 재부팅',
                    '우선 기술 지원'
                ],
                popular: true
            },
            {
                name: 'Enterprise',
                price: '문의',
                period: '',
                description: '대기업을 위한 맞춤형 솔루션',
                features: [
                    '모든 Pro 기능',
                    '온프레미스 배포 옵션',
                    '고급 보안 정책',
                    'API 액세스',
                    '전담 고객 성공 관리자',
                    '맞춤형 브랜딩',
                    '무제한 동시 세션',
                    '24/7 전화 지원'
                ],
                popular: false,
                ctaText: '문의하기'
            }
        ]
    }
}

// 추가 정보 및 FAQ
export const pricingFAQ = [
    {
        question: '요금제를 언제든지 변경할 수 있나요?',
        answer: '네, 언제든지 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 변경사항은 다음 청구 주기부터 적용됩니다.'
    },
    {
        question: '무료 체험 기간이 있나요?',
        answer: '모든 솔루션에 대해 14일 무료 체험을 제공합니다. 신용카드 정보 없이도 체험 가능합니다.'
    },
    {
        question: '설정 및 마이그레이션 지원을 받을 수 있나요?',
        answer: '네, 전문 컨설턴트가 초기 설정부터 데이터 마이그레이션까지 전 과정을 지원합니다.'
    },
    {
        question: '할인 혜택이 있나요?',
        answer: '연간 결제 시 최대 20% 할인, 100명 이상 대량 구매 시 추가 할인 혜택을 제공합니다.'
    }
]

// 각 제품별 추가 정보
export const productInfo = {
    'google-workspace': {
        benefits: [
            '99.9% 가동 시간 보장',
            '무제한 Gmail 스토리지',
            '고급 보안 기능',
            '24/7 고객 지원'
        ],
        addOns: [
            { name: 'Google Vault', price: '₩6,000/사용자/월' },
            { name: 'Cloud Identity Premium', price: '₩7,200/사용자/월' }
        ]
    },
    'freshworks': {
        benefits: [
            '통합 고객 플랫폼',
            'AI 기반 자동화',
            '다채널 지원',
            '실시간 분석'
        ],
        addOns: [
            { name: 'Freshchat Pro', price: '$19/에이전트/월' },
            { name: 'Freddy AI', price: '$29/에이전트/월' }
        ]
    },
    'monday': {
        benefits: [
            '직관적인 인터페이스',
            '200+ 템플릿',
            '강력한 자동화',
            '실시간 협업'
        ],
        addOns: [
            { name: 'Advanced Analytics', price: '$5/시트/월' },
            { name: 'Enterprise Scale', price: '$16/시트/월' }
        ]
    },
    'splashtop': {
        benefits: [
            '고성능 원격 접속',
            '엔터프라이즈 보안',
            '크로스 플랫폼 지원',
            '간편한 배포'
        ],
        addOns: [
            { name: 'SOS (긴급 지원)', price: '$2/세션' },
            { name: 'Augmented Reality', price: '$10/사용자/월' }
        ]
    }
}