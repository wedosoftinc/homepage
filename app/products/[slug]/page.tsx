import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ProductDetail } from '@/components/sections/product-detail'

// 제품 데이터 정의
const products = {
    // 고객 경험 & 세일즈 관리
    'freshdesk': {
        title: 'Freshdesk',
        subtitle: '고객 지원의 새로운 기준',
        category: '고객 경험 & 세일즈 관리',
        description: '모든 고객 문의를 체계적으로 관리하고 빠르게 해결할 수 있는 종합적인 고객 지원 플랫폼입니다.',
        features: [
            '티켓 관리 및 자동화',
            '다채널 고객 지원',
            '지식베이스 구축',
            'SLA 관리',
            '보고서 및 분석',
            'AI 기반 자동 응답'
        ],
        benefits: [
            '고객 만족도 향상',
            '응답 시간 단축',
            '상담사 업무 효율 증대',
            '체계적인 문의 관리'
        ]
    },
    'freshdesk-omni': {
        title: 'Freshdesk Omni',
        subtitle: '여러 채널의 고객 문의를 놓치지 마세요',
        category: '고객 경험 & 세일즈 관리',
        description: 'Freshdesk Omni로 다양한 채널의 고객을 한 플랫폼에서 응대합니다.',
        features: [
            '옴니채널 통합 관리',
            '실시간 채팅 지원',
            '소셜 미디어 연동',
            '전화 상담 통합',
            'AI 기반 챗봇',
            '통합 대시보드'
        ],
        benefits: [
            '채널별 일관된 고객 경험',
            '상담사 업무 통합',
            '실시간 고객 응대',
            '효율적인 리소스 관리'
        ]
    },
    'freshsales': {
        title: 'Freshsales',
        subtitle: '스마트한 세일즈 CRM',
        category: '고객 경험 & 세일즈 관리',
        description: '영업 프로세스를 체계화하고 고객 관계를 효과적으로 관리할 수 있는 CRM 솔루션입니다.',
        features: [
            '리드 관리 및 추적',
            '세일즈 파이프라인',
            '이메일 자동화',
            '고객 프로필 관리',
            '영업 보고서',
            '모바일 앱 지원'
        ],
        benefits: [
            '영업 생산성 향상',
            '고객 전환율 증가',
            '데이터 기반 의사결정',
            '체계적인 고객 관리'
        ]
    },
    'freshchat': {
        title: 'Freshchat',
        subtitle: '고객 감동은 채팅에서 시작됩니다',
        category: '고객 경험 & 세일즈 관리',
        description: '웹, 모바일, 소셜 채널에서 들어오는 고객 메시지를 하나의 창에서 관리하세요.',
        features: [
            'AI 기반 자동 챗봇',
            '다양한 채널 플랫폼 연동',
            '팀 협업 중심 인터페이스',
            'Freddy AI Agent',
            '모바일 앱 지원',
            '통합 메시지 인박스'
        ],
        benefits: [
            '실시간 고객 응대',
            'AI를 통한 자동화',
            '다채널 통합 관리',
            '상담사 업무 효율성'
        ]
    },

    // 협업 및 생산성 향상
    'monday-service': {
        title: 'Monday Service',
        subtitle: 'AI 기반의 서비스 혁신 경험하세요',
        category: '협업 및 생산성 향상',
        description: '강력한 AI와 유연한 워크플로우로 서비스 효율을 극대화하고, 뛰어난 고객 경험을 제공합니다.',
        features: [
            'AI 제안 시스템',
            '서비스 워크플로우',
            '고객 포털',
            '강력한 AI 기반 자동화',
            '실시간 대시보드',
            '팀 협업 도구'
        ],
        benefits: [
            '서비스 효율성 극대화',
            'AI 기반 스마트 자동화',
            '고객 만족도 향상',
            '팀 생산성 증대'
        ]
    },
    'monday-sales-crm': {
        title: 'Monday Sales CRM',
        subtitle: '파이프라인 가시성 확보로 생산성을 높이고, 모든 세일즈 프로세스를 완벽하게 관리하세요',
        category: '협업 및 생산성 향상',
        description: 'Monday Sales CRM으로 영업 프로세스를 체계화하고 팀 협업을 강화하세요.',
        features: [
            '세일즈 파이프라인 관리',
            '리드 추적 및 관리',
            '팀 협업 도구',
            '자동화 워크플로우',
            '커스터마이징 가능한 대시보드',
            '모바일 지원'
        ],
        benefits: [
            '영업 프로세스 최적화',
            '팀 협업 강화',
            '데이터 기반 의사결정',
            '생산성 향상'
        ]
    },
    'google-workspace': {
        title: 'Google Workspace',
        subtitle: '협업의 새로운 차원',
        category: '협업 및 생산성 향상',
        description: 'Gmail, Drive, Meet, Calendar 등 구글의 모든 협업 도구를 하나로 통합한 비즈니스 솔루션입니다.',
        features: [
            'Gmail 비즈니스 이메일',
            'Google Drive 클라우드 스토리지',
            'Google Meet 화상회의',
            'Google Calendar 일정 관리',
            'Google Docs/Sheets/Slides',
            '고급 보안 및 관리 기능'
        ],
        benefits: [
            '언제 어디서나 협업',
            '클라우드 기반 작업 환경',
            '강력한 보안',
            '확장 가능한 솔루션'
        ]
    },

    // IT 인프라 관리
    'freshservice': {
        title: 'Freshservice',
        subtitle: 'IT 서비스 관리의 혁신',
        category: 'IT 인프라 관리',
        description: 'ITIL 기반의 포괄적인 IT 서비스 관리 솔루션으로 IT 운영을 효율화하세요.',
        features: [
            'IT 헬프데스크',
            '인시던트 관리',
            '변경 관리',
            '자산 관리',
            '지식 관리',
            'SLA 관리'
        ],
        benefits: [
            'IT 운영 효율성 향상',
            '다운타임 최소화',
            '체계적인 IT 자산 관리',
            '사용자 만족도 개선'
        ]
    },
    'splashtop': {
        title: 'Splashtop',
        subtitle: '안전하고 빠른 원격 접속',
        category: 'IT 인프라 관리',
        description: '어디서나 안전하게 컴퓨터에 원격 접속할 수 있는 고성능 원격 데스크톱 솔루션입니다.',
        features: [
            '고성능 원격 접속',
            '멀티 플랫폼 지원',
            '파일 전송',
            '원격 인쇄',
            '세션 기록',
            '고급 보안 기능'
        ],
        benefits: [
            '재택근무 지원',
            'IT 지원 효율성',
            '비용 절감',
            '보안성 강화'
        ]
    }
}

type ProductSlug = keyof typeof products

interface PageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const product = products[params.slug as ProductSlug]

    if (!product) {
        return {
            title: '제품을 찾을 수 없습니다',
        }
    }

    return {
        title: `${product.title} - ${product.subtitle} | 위두소프트`,
        description: product.description,
    }
}

export async function generateStaticParams() {
    return Object.keys(products).map((slug) => ({
        slug,
    }))
}

export default function ProductPage({ params }: PageProps) {
    const product = products[params.slug as ProductSlug]

    if (!product) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            <ProductDetail product={product} slug={params.slug} />
        </div>
    )
}