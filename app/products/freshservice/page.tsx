import { Metadata } from 'next'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export const metadata: Metadata = {
    title: 'Freshservice | 위두소프트 - IT 서비스 관리의 혁신',
    description: 'ITIL 기반의 종합적인 IT 서비스 관리 플랫폼으로 IT 운영의 효율성을 극대화하고 사용자 만족도를 높이세요.',
    keywords: 'Freshservice, ITSM, IT서비스관리, 헬프데스크, ITIL, IT운영',
    openGraph: {
        title: 'Freshservice | 위두소프트 - IT 서비스 관리의 혁신',
        description: 'ITIL 기반의 종합적인 IT 서비스 관리 플랫폼으로 IT 운영 효율성을 극대화하세요',
        type: 'website',
        locale: 'ko_KR',
    },
}

// XML에서 추출한 실제 콘텐츠 기반 데이터
const freshserviceData: ProductPageData = {
    name: "Freshservice",
    subtitle: "IT 서비스 관리의 혁신",
    description: "ITIL 기반의 종합적인 IT 서비스 관리 플랫폼으로 IT 운영의 효율성을 극대화하고 사용자 만족도를 높이세요.",
    category: "IT 인프라 관리",
    slug: "freshservice",
    heroCTA: {
        primary: { text: "무료 체험 시작", href: "https://www.freshworks.com/ko/freshservice/signup/" },
        secondary: { text: "상담 문의", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "headphones",
            title: "IT 헬프데스크",
            description: "직관적인 인터페이스로 모든 IT 요청과 사고를 효율적으로 관리하고 추적합니다."
        },
        {
            icon: "settings",
            title: "자산 관리 (CMDB)",
            description: "하드웨어, 소프트웨어, 클라우드 자산을 통합적으로 관리하고 라이프사이클을 추적합니다."
        },
        {
            icon: "zap",
            title: "변경 관리",
            description: "IT 변경 사항을 체계적으로 승인, 계획, 구현하여 시스템 안정성을 보장합니다."
        },
        {
            icon: "fileText",
            title: "지식 관리",
            description: "IT 문서와 절차를 체계화하여 셀프서비스와 팀 지식 공유를 활성화합니다."
        },
        {
            icon: "barChart3",
            title: "분석 및 리포팅",
            description: "상세한 성과 지표와 SLA 모니터링으로 IT 서비스 품질을 지속적으로 개선합니다."
        },
        {
            icon: "users",
            title: "셀프서비스 포털",
            description: "직원들이 스스로 IT 요청을 제출하고 상태를 확인할 수 있는 사용자 친화적 포털을 제공합니다."
        }
    ],

    benefits: [
        {
            title: "IT 운영 효율성 향상",
            description: "자동화된 워크플로우와 ITIL 모범 사례로 IT 운영의 효율성을 크게 향상시킵니다.",
            metrics: "운영 효율성 60% 향상"
        },
        {
            title: "문제 해결 시간 단축",
            description: "체계적인 사고 관리와 지식베이스 활용으로 문제 해결 시간을 대폭 단축합니다.",
            metrics: "평균 해결 시간 45% 단축"
        },
        {
            title: "IT 비용 최적화",
            description: "자산 최적화와 예방적 유지보수로 IT 운영 비용을 효과적으로 관리합니다.",
            metrics: "IT 비용 25% 절감"
        },
        {
            title: "사용자 만족도 증대",
            description: "빠른 응답과 투명한 소통으로 내부 사용자의 IT 서비스 만족도를 높입니다.",
            metrics: "사용자 만족도 80% 향상"
        },
        {
            title: "컴플라이언스 강화",
            description: "ITIL, ISO 20000 등 IT 거버넌스 표준을 준수하고 감사 준비를 간소화합니다.",
            metrics: "100% 컴플라이언스 달성"
        },
        {
            title: "비즈니스 연속성",
            description: "신속한 사고 대응과 체계적인 변경 관리로 비즈니스 서비스의 연속성을 보장합니다.",
            metrics: "99.9% 서비스 가용성"
        }
    ],

    useCases: [
        {
            title: "중견기업 IT 팀",
            description: "성장하는 기업의 복잡해지는 IT 환경을 체계적으로 관리하고 싶은 IT 팀에 최적입니다.",
            features: [
                "통합 IT 자산 관리",
                "표준화된 IT 프로세스",
                "자동화된 워크플로우",
                "성과 측정 대시보드"
            ]
        },
        {
            title: "대기업 IT 서비스 센터",
            description: "복잡한 IT 인프라와 다양한 비즈니스 요구사항을 효율적으로 관리해야 하는 대기업 환경에 적합합니다.",
            features: [
                "엔터프라이즈급 보안",
                "고급 SLA 관리",
                "다국가 지원",
                "커스텀 워크플로우"
            ]
        },
        {
            title: "MSP 서비스 제공업체",
            description: "여러 고객사의 IT 서비스를 통합 관리하는 매니지드 서비스 프로바이더에게 필수적인 도구입니다.",
            features: [
                "멀티 테넌트 구조",
                "고객별 서비스 구분",
                "통합 빌링 시스템",
                "브랜딩 커스터마이징"
            ]
        },
        {
            title: "클라우드 우선 기업",
            description: "클라우드 전환을 추진하는 기업의 하이브리드 IT 환경 관리를 지원합니다.",
            features: [
                "클라우드 자산 관리",
                "DevOps 프로세스 통합",
                "API 기반 자동화",
                "클라우드 비용 최적화"
            ]
        }
    ],

    faqs: [
        {
            question: "Freshservice는 ITIL을 완전히 지원하나요?",
            answer: "네, Freshservice는 ITIL v4 프레임워크를 완전히 지원하며, 사고 관리, 문제 관리, 변경 관리, 자산 관리 등 모든 ITIL 프로세스를 포함합니다."
        },
        {
            question: "기존 IT 도구들과 연동이 가능한가요?",
            answer: "네, Active Directory, LDAP, SCCM, VMware, AWS, Azure 등 주요 IT 도구들과 기본 연동을 제공하며, REST API를 통한 커스텀 연동도 가능합니다."
        },
        {
            question: "클라우드와 온프레미스 환경을 모두 지원하나요?",
            answer: "Freshservice는 클라우드 기반 SaaS 솔루션이지만, 에이전트를 통해 온프레미스 자산도 완벽하게 관리할 수 있습니다."
        },
        {
            question: "모바일에서도 사용할 수 있나요?",
            answer: "네, iOS와 Android 전용 앱을 제공하며, 웹 인터페이스도 모바일에 최적화되어 있어 언제 어디서나 IT 서비스를 관리할 수 있습니다."
        },
        {
            question: "도입 교육과 지원은 어떻게 받을 수 있나요?",
            answer: "위두소프트에서 Freshservice 전문 컨설팅과 교육을 제공하며, 도입부터 운영까지 전 과정을 지원합니다. 온라인 교육 자료와 커뮤니티도 제공됩니다."
        }
    ],

    finalCTA: {
        title: "Freshservice로 IT 운영을 혁신하세요",
        description: "전 세계 13,000개 이상의 기업이 신뢰하는 Freshservice로 IT 서비스 관리를 현대화하고 비즈니스 가치를 창출하세요.",
        primaryButton: { text: "무료 체험 시작", href: "https://www.freshworks.com/ko/freshservice/signup/" },
        secondaryButton: { text: "IT 컨설팅 받기", href: "/contact?product=freshservice" }
    }
}

export default function FreshservicePage() {
    return <ProductPageTemplate data={freshserviceData} />
}