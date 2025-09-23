import { Metadata } from 'next'
import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export const metadata: Metadata = {
    title: 'Google Workspace | 위두소프트 - 클라우드 기반 협업 솔루션',
    description: '구글의 강력한 클라우드 기반 생산성 도구로 팀 협업을 혁신하고 업무 효율성을 극대화하세요.',
    keywords: 'Google Workspace, Gmail, Google Drive, 협업툴, 클라우드 오피스',
    openGraph: {
        title: 'Google Workspace | 위두소프트 - 클라우드 기반 협업 솔루션',
        description: '구글의 강력한 클라우드 기반 생산성 도구로 팀 협업을 혁신하세요',
        type: 'website',
        locale: 'ko_KR',
    },
}

// XML에서 추출한 실제 콘텐츠 기반 데이터
const googleWorkspaceData: ProductPageData = {
    name: "Google Workspace",
    subtitle: "클라우드 기반 협업의 완성",
    description: "구글의 강력한 클라우드 기반 생산성 도구로 팀 협업을 혁신하고 업무 효율성을 극대화하세요.",
    category: "협업 및 생산성 향상",
    slug: "google-workspace",
    heroCTA: {
        primary: { text: "무료 체험 시작", href: "/contact?product=google-workspace" },
        secondary: { text: "상담 문의", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "mail",
            title: "Gmail 비즈니스",
            description: "전문적인 도메인 이메일과 강력한 스팸 차단 기능으로 안전하고 효율적인 커뮤니케이션을 제공합니다."
        },
        {
            icon: "fileText",
            title: "Google Drive 클라우드 스토리지",
            description: "안전한 클라우드 저장소에서 파일을 실시간으로 공유하고 협업할 수 있습니다."
        },
        {
            icon: "users",
            title: "Google Meet 화상회의",
            description: "HD 화질의 안정적인 화상회의로 원격 팀과 효과적으로 소통할 수 있습니다."
        },
        {
            icon: "fileText",
            title: "Google Docs, Sheets, Slides",
            description: "실시간 공동 편집이 가능한 온라인 오피스 도구로 생산성을 극대화합니다."
        },
        {
            icon: "clock",
            title: "Google Calendar 일정 관리",
            description: "스마트한 일정 관리와 팀 캘린더 공유로 업무 조율을 효율화합니다."
        },
        {
            icon: "shield",
            title: "엔터프라이즈급 보안",
            description: "2단계 인증, 데이터 암호화, 고급 관리 콘솔로 기업 데이터를 안전하게 보호합니다."
        }
    ],

    benefits: [
        {
            title: "업무 생산성 향상",
            description: "어디서나 접근 가능한 클라우드 기반 도구로 팀의 생산성을 크게 향상시킵니다.",
            metrics: "생산성 25% 향상"
        },
        {
            title: "IT 비용 절감",
            description: "서버 구축과 유지보수가 불필요하여 IT 인프라 비용을 대폭 절감할 수 있습니다.",
            metrics: "IT 비용 40% 절감"
        },
        {
            title: "협업 효율성 증대",
            description: "실시간 공동 작업과 즉시 공유 기능으로 팀 협업이 더욱 원활해집니다.",
            metrics: "협업 효율성 50% 향상"
        },
        {
            title: "원격 근무 지원",
            description: "언제 어디서나 안전하게 업무할 수 있는 환경을 제공합니다.",
            metrics: "100% 원격 근무 지원"
        },
        {
            title: "확장성과 유연성",
            description: "사용자 수에 따라 유연하게 확장하고 필요한 기능만 선택할 수 있습니다.",
            metrics: "무제한 확장성"
        },
        {
            title: "데이터 백업과 복구",
            description: "자동 백업과 99.9% 가용성으로 비즈니스 연속성을 보장합니다.",
            metrics: "99.9% 가용성 보장"
        }
    ],

    // 탭 기반 세부 기능 (템플릿 테스트용)
    detailedFeatureTabs: [
        {
            id: "collaboration",
            label: "협업 도구",
            title: "협업 도구",
            description: "실시간 공동 작업과 원활한 소통을 위한 Google의 협업 솔루션을 경험하세요.",
            feature: {
                title: "Google Docs 실시간 공동 편집",
                description: "여러 사용자가 동시에 문서를 편집하고 실시간으로 변경사항을 확인할 수 있습니다.",
                items: [
                    "실시간 동시 편집",
                    "댓글 및 제안 모드",
                    "버전 기록 자동 저장",
                    "오프라인 편집 지원"
                ]
            },
            interactiveArea: {
                type: "demo",
                title: "Google Docs 협업 데모",
                description: "실시간 문서 편집 협업을 직접 체험해보세요",
                placeholder: "Google Docs 실시간 편집 화면"
            }
        },
        {
            id: "productivity",
            label: "생산성 향상",
            title: "생산성 향상",
            description: "클라우드 기반의 강력한 생산성 도구로 업무 효율성을 극대화하세요.",
            feature: {
                title: "Google Drive 클라우드 저장소",
                description: "안전한 클라우드 저장소로 어디서나 파일에 접근하고 공유할 수 있습니다.",
                items: [
                    "무제한 저장 공간",
                    "고급 검색 기능",
                    "파일 공유 권한 관리",
                    "자동 백업"
                ]
            },
            interactiveArea: {
                type: "dashboard",
                title: "Google Drive 대시보드",
                description: "직관적인 파일 관리 인터페이스를 경험하세요",
                placeholder: "Google Drive 파일 관리 화면"
            }
        },
        {
            id: "management",
            label: "관리 및 보안",
            title: "관리 및 보안",
            description: "엔터프라이즈급 보안과 중앙화된 관리 기능으로 안전한 업무 환경을 구축하세요.",
            feature: {
                title: "관리 콘솔",
                description: "중앙화된 관리 콘솔로 사용자, 보안, 설정을 효율적으로 관리할 수 있습니다.",
                items: [
                    "사용자 계정 관리",
                    "보안 정책 설정",
                    "사용량 분석",
                    "감사 로그"
                ]
            },
            interactiveArea: {
                type: "feature-map",
                title: "관리 콘솔 기능 맵",
                description: "Google Workspace 관리 기능을 한눈에 확인하세요",
                placeholder: "관리 콘솔 기능 구성도"
            }
        }
    ],

    useCases: [
        {
            title: "스타트업과 중소기업",
            description: "제한된 IT 예산으로도 대기업 수준의 협업 도구를 사용하고 싶은 스타트업에 최적입니다.",
            features: [
                "초기 투자 비용 최소화",
                "빠른 도입과 설정",
                "사업 성장에 따른 확장",
                "전문적인 브랜드 이미지"
            ]
        },
        {
            title: "원격 근무 중심 기업",
            description: "재택근무와 하이브리드 근무 환경에서 효과적인 협업이 필요한 기업에 적합합니다.",
            features: [
                "어디서나 안전한 접속",
                "실시간 협업 도구",
                "화상회의 통합",
                "모바일 최적화"
            ]
        },
        {
            title: "교육 기관",
            description: "학교와 교육 기관의 디지털 학습 환경 구축과 학사 관리에 활용할 수 있습니다.",
            features: [
                "Google Classroom 연동",
                "학생 계정 관리",
                "과제 제출 시스템",
                "원격 수업 지원"
            ]
        },
        {
            title: "프로젝트 중심 조직",
            description: "다양한 프로젝트를 동시에 진행하는 조직의 협업과 문서 관리를 효율화합니다.",
            features: [
                "프로젝트별 공간 구성",
                "버전 관리 자동화",
                "실시간 피드백",
                "진행 상황 추적"
            ]
        }
    ],

    faqs: [
        {
            question: "Google Workspace와 무료 Gmail의 차이점은 무엇인가요?",
            answer: "Google Workspace는 비즈니스용으로 설계되어 커스텀 도메인, 고급 보안, 24/7 지원, 대용량 저장소, 관리 콘솔 등 기업에 필요한 기능들을 제공합니다."
        },
        {
            question: "기존 Microsoft Office 파일과 호환되나요?",
            answer: "네, Word, Excel, PowerPoint 파일을 직접 열고 편집할 수 있으며, Google 형식으로 자동 변환하거나 원본 형식을 유지할 수 있습니다."
        },
        {
            question: "오프라인에서도 사용할 수 있나요?",
            answer: "네, Gmail, Drive, Docs, Sheets, Slides는 모두 오프라인 모드를 지원합니다. 인터넷 연결이 복구되면 자동으로 동기화됩니다."
        },
        {
            question: "데이터 보안은 어떻게 보장되나요?",
            answer: "Google은 군사급 암호화, 2단계 인증, ISO 27001 인증 등 최고 수준의 보안을 제공하며, 기업용 데이터 손실 방지 기능도 포함되어 있습니다."
        },
        {
            question: "기존 시스템에서 마이그레이션이 어렵나요?",
            answer: "Google은 전문 마이그레이션 도구와 지원 서비스를 제공하며, 위두소프트에서도 원활한 이전을 위한 컨설팅과 기술 지원을 제공합니다."
        }
    ],

    finalCTA: {
        title: "Google Workspace로 협업을 혁신하세요",
        description: "전 세계 9백만 개 이상의 기업이 선택한 Google Workspace로 팀의 생산성을 극대화하고 미래의 업무 방식을 경험하세요.",
        primaryButton: { text: "무료 체험 시작", href: "/contact?product=google-workspace" },
        secondaryButton: { text: "도입 상담 받기", href: "/contact?consultation=google-workspace" }
    }
}

export default function GoogleWorkspacePage() {
    return <ProductPageTemplate data={googleWorkspaceData} />
}