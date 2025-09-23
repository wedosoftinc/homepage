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

// docs에서 추출한 실제 콘텐츠 기반 데이터
const googleWorkspaceData: ProductPageData = {
    name: "Google Workspace",
    subtitle: "수백만 기업의 선택",
    description: "수백만 기업의 선택, AI가 통합된 Google Workspace로 생산성의 미래를 경험하세요",
    category: "Elevate Your Business",
    slug: "google-workspace",
    heroCTA: {
        primary: { text: "무료 체험 시작", href: "/contact?product=google-workspace" },
        secondary: { text: "상담 문의", href: "/contact" }
    },

    keyFeatures: [
        {
            icon: "zap",
            title: "프리미엄 AI 탑재",
            description: "Gemini 앱, NotebookLM은 물론 Gmail, Docs, Sheets 등의 Gemini 기능을 통합하여 활용해 더 빠르게 최상의 성과 달성"
        },
        {
            icon: "globe",
            title: "클라우드 기반 도구",
            description: "언제 어디서나 실시간 공동작업이 가능한 클라우드 기반 도구로 항상 최신 정보 공유 가능"
        },
        {
            icon: "briefcase",
            title: "통합 워크스페이스",
            description: "이메일, 문서, 화상회의, 캘린더 등 모든 업무 도구를 하나로 통합"
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

    // 탭 기반 세부 기능 (docs 원본 콘텐츠 기반 5개 탭)
    detailedFeatureTabs: [
        {
            id: "ai-productivity",
            label: "AI 생산성",
            title: "AI 기반의 생산성 도구",
            description: "Gemini를 활용하여 혁신적인 콘텐츠를 빠르게 생성하고, 데이터 분석을 가속화하여 비즈니스 의사결정을 향상시키세요.",
            feature: {
                title: "Gemini AI 통합",
                description: "마케팅 문구부터 보고서 작성까지, AI가 업무 효율을 극대화합니다.",
                items: [
                    "AI 기반 콘텐츠 생성",
                    "데이터 분석 가속화",
                    "비즈니스 의사결정 향상",
                    "마케팅 문구 자동 생성",
                    "보고서 작성 자동화"
                ]
            },
            interactiveArea: {
                type: "demo",
                title: "Gemini AI 워크플로우 데모",
                description: "AI 기반 콘텐츠 생성 과정을 직접 체험해보세요",
                placeholder: "Gemini AI 콘텐츠 생성 화면"
            }
        },
        {
            id: "cloud-storage",
            label: "클라우드 저장소",
            title: "클라우드 스토리지",
            description: "최대 5TB의 넉넉한 저장 공간과 강력한 보안 기능으로 중요한 데이터를 안전하게 보관하세요.",
            feature: {
                title: "Google Drive 클라우드 스토리지",
                description: "언제 어디서든 필요한 정보에 안전하게 접근하고 팀과 유연하게 공유할 수 있습니다.",
                items: [
                    "최대 5TB 저장 공간",
                    "강력한 보안 기능",
                    "실시간 파일 공유",
                    "버전 관리 자동화",
                    "오프라인 접근 지원"
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
            id: "business-email",
            label: "비즈니스 이메일",
            title: "맞춤 비즈니스 이메일",
            description: "회사 도메인을 사용한 업무용 이메일로 전문성을 높이고, Gmail의 편리한 기능으로 효율적인 커뮤니케이션을 경험하세요.",
            feature: {
                title: "Gmail 비즈니스 이메일",
                description: "브랜드 레이아웃과 발송 기능의 맞춤 설정으로 신뢰성을 더할 수 있습니다.",
                items: [
                    "커스텀 도메인 이메일",
                    "브랜드 맞춤 설정",
                    "강력한 스팸 필터링",
                    "대용량 첨부파일",
                    "모바일 최적화"
                ]
            },
            interactiveArea: {
                type: "feature-map",
                title: "Gmail 비즈니스 기능",
                description: "전문적인 이메일 관리 기능을 확인하세요",
                placeholder: "Gmail 비즈니스 기능 구성도"
            }
        },
        {
            id: "video-collaboration",
            label: "화상 회의",
            title: "화상 회의 & 일정 관리",
            description: "고품질 영상과 AI 기반의 스마트 기능으로 원활한 회의를 진행하고, 원격 팀과의 효과적인 협업을 지원합니다.",
            feature: {
                title: "Google Meet & Calendar 통합",
                description: "녹화 및 스크립트 작성으로 회의록 작성 부담을 덜고, 개인 및 팀 일정을 손쉽게 관리할 수 있습니다.",
                items: [
                    "고품질 화상 회의",
                    "AI 기반 회의록 생성",
                    "스마트 일정 조율",
                    "팀 캘린더 공유",
                    "고객 예약 관리"
                ]
            },
            interactiveArea: {
                type: "workflow",
                title: "회의 & 일정 관리 워크플로우",
                description: "통합된 커뮤니케이션 환경을 체험하세요",
                placeholder: "Google Meet & Calendar 연동 화면"
            }
        },
        {
            id: "document-collaboration",
            label: "문서 협업",
            title: "다양한 문서 협업 도구",
            description: "Docs, Sheets, Slides 등 익숙한 도구들을 통해 실시간 공동 편집하며 파일 공유 번거로움 없이 업무 효율성을 높이세요.",
            feature: {
                title: "Google Workspace 문서 도구",
                description: "실시간 공동 편집과 원활한 협업으로 팀의 생산성을 극대화합니다.",
                items: [
                    "실시간 공동 편집",
                    "버전 기록 자동 저장",
                    "댓글 및 제안 모드",
                    "템플릿 갤러리",
                    "오프라인 편집 지원"
                ]
            },
            interactiveArea: {
                type: "demo",
                title: "실시간 문서 협업 데모",
                description: "여러 사용자가 동시에 편집하는 과정을 확인하세요",
                placeholder: "Google Docs 실시간 협업 화면"
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
            question: "어떤 앱과 함께 사용할 수 있나요?",
            answer: "Gmail, Docs 등 Google의 다양한 핵심 앱은 물론, 타사 앱과의 광범위한 통합 및 API를 통한 확장성을 제공합니다."
        },
        {
            question: "Google Workspace의 주요 강점은 무엇인가요?",
            answer: "강력한 보안 및 관리 기능과 99.9% 가동률을 제공하며, 직관적 UI와 AI 기반의 스마트한 기능으로 최고의 생산성을 제공합니다. 어떤 기기에서든 일관된 업무 환경을 경험하세요."
        },
        {
            question: "어떤 기업에 적합한가요?",
            answer: "클라우드 기반 협업을 원하는 기업, 원격 및 하이브리드 근무 환경을 운영하는 조직, IT 인프라 효율 증대를 고민하는 모든 기업에 적합합니다."
        },
        {
            question: "사용자 데이터의 보안 및 개인 정보 보호를 어떻게 보장하나요?",
            answer: "Google Workspace는 전송 및 저장 중인 데이터를 암호화하며, 다단계 인증 및 고급 위협 보호 기능을 제공하여 강력한 보안을 유지합니다. 또한 GDPR, ISO 27001 등 글로벌 개인 정보 보호 및 보안 규정을 준수합니다."
        },
        {
            question: "다른 협업 도구에서 Google Workspace로 기존 데이터를 쉽게 이전할 수 있나요?",
            answer: "네, 이메일, 캘린더, 파일을 포함한 기존 데이터를 Google Workspace로 쉽고 안전하게 이전할 수 있도록 다양한 마이그레이션 도구와 자세한 안내를 제공합니다."
        }
    ],

    finalCTA: {
        title: "업무 혁신의 시작, Google Workspace와 함께하세요",
        description: "AI 기반의 스마트한 협업 도구와 안전한 클라우드 환경으로 팀의 생산성을 극대화하고 비즈니스 성장을 가속화하세요.",
        primaryButton: { text: "무료 체험 시작", href: "/contact?product=google-workspace" },
        secondaryButton: { text: "도입 상담 받기", href: "/contact?consultation=google-workspace" }
    }
}

export default function GoogleWorkspacePage() {
    return <ProductPageTemplate data={googleWorkspaceData} />
}