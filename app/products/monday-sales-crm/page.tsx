import { ProductPageTemplate } from "@/components/sections/product-page-template"

const mondaySalesCrmData = {
    name: "Monday Sales CRM",
    subtitle: "Elevate Your Sales",
    description: "파이프라인 가시성 확보로 생산성을 높이고, 모든 세일즈 프로세스를 완벽하게 관리하세요. 유연한 맞춤 설정, 강력한 자동화, 그리고 완벽한 통합 커뮤니케이션을 통해 영업팀의 생산성을 극대화하고, 궁극적으로 더 많은 거래를 성사시키도록 돕습니다.",
    category: "협업 및 생산성 향상",
    slug: "monday-sales-crm",

    heroCTA: {
        primary: { text: "데모 신청하기", href: "/contact" },
        secondary: { text: "자세히 보기", href: "/contact" }
    },

    heroMedia: {
        type: "image" as const,
        src: "/monday-logo.svg",
        alt: "Monday Sales CRM 대시보드 스크린샷"
    },

    keyFeatures: [
        {
            icon: "settings" as const,
            title: "유연하고 직관적인 CRM",
            description: "영업 사이클에 맞춰 개발 지원 없이도 유연하게 커스터마이징 가능한 직관적인 CRM 플랫폼입니다."
        },
        {
            icon: "zap" as const,
            title: "자동화된 워크플로우",
            description: "반복적인 영업 작업을 자동화하여 시간을 절약하고 리드 할당, 알림 등으로 더 많은 거래를 성사시킵니다."
        },
        {
            icon: "messageSquare" as const,
            title: "통합된 커뮤니케이션",
            description: "이메일 연동 및 상호작용 기록을 통해 고객 커뮤니케이션을 효율적으로 관리할 수 있습니다."
        }
    ],

    // 탭 기반 세부 기능 (6개 - docs 기반)
    detailedFeatureTabs: [
        {
            id: "sales-pipeline",
            label: "파이프라인 관리",
            title: "세일즈 파이프라인 관리",
            description: "거래 단계를 유연하게 편집하고 원하는 컬럼을 추가하여 최적화된 파이프라인을 구축할 수 있습니다. 여러 파이프라인을 한 번에 관리할 수 있습니다.",
            feature: {
                title: "최적화된 영업 파이프라인 구축",
                description: "거래 단계별 관리와 여러 파이프라인 동시 운영으로 영업 효율성을 극대화합니다.",
                items: [
                    "거래 단계 유연한 편집",
                    "원하는 컬럼 추가",
                    "최적화된 파이프라인 구축",
                    "여러 파이프라인 동시 관리"
                ]
            },
            interactiveArea: {
                type: "dashboard" as const,
                title: "파이프라인 관리 대시보드",
                description: "다양한 영업 파이프라인을 시각적으로 관리하고 추적하세요",
                placeholder: "영업 파이프라인 관리 인터페이스"
            }
        },
        {
            id: "contact-management",
            label: "연락처 관리",
            title: "연락처 관리",
            description: "모든 고객 데이터를 한 곳에서 모아 손쉽게 관리하며, 개발 지원 없이 사용자에 맞게 CRM을 쉽게 조정하여 최적의 고객 관계를 유지합니다.",
            feature: {
                title: "통합 고객 데이터 관리",
                description: "모든 고객 정보를 중앙화하여 효율적인 고객 관계 관리를 실현합니다.",
                items: [
                    "모든 고객 데이터 통합",
                    "손쉬운 데이터 관리",
                    "개발 지원 없는 CRM 조정",
                    "최적의 고객 관계 유지"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "연락처 관리 시스템",
                description: "고객 정보를 체계적으로 관리하고 개인화된 서비스를 제공하세요",
                placeholder: "고객 연락처 관리 도구"
            }
        },
        {
            id: "lead-management",
            label: "리드 관리",
            title: "리드 관리",
            description: "새로운 리드를 자동으로 담당자에게 할당하고, 예정된 활동에 대한 리마인더를 설정하여 모든 잠재 고객을 놓치지 않고 체계적으로 관리합니다.",
            feature: {
                title: "체계적인 리드 관리 시스템",
                description: "자동 할당과 리마인더를 통해 모든 잠재 고객을 효과적으로 관리합니다.",
                items: [
                    "자동 담당자 할당",
                    "예정된 활동 리마인더",
                    "잠재 고객 누락 방지",
                    "체계적인 리드 관리"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "리드 관리 도구",
                description: "잠재 고객을 체계적으로 관리하고 전환율을 높여보세요",
                placeholder: "리드 추적 및 관리 시스템"
            }
        },
        {
            id: "lead-capturing",
            label: "리드 캡처링",
            title: "리드 캡처링",
            description: "웹사이트 방문자를 잠재 고객으로 손쉽게 전환합니다. 리드 수집부터 CRM 유입까지 모든 과정을 자동화하여, 잠재 고객 정보를 놓치지 않고 바로 영업 활동에 활용할 수 있습니다.",
            feature: {
                title: "자동화된 리드 수집 시스템",
                description: "웹사이트에서 CRM까지 완전 자동화된 리드 수집 프로세스를 제공합니다.",
                items: [
                    "웹사이트 방문자 전환",
                    "리드 수집 자동화",
                    "CRM 유입 자동화",
                    "즉시 영업 활동 활용"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "리드 캡처링 도구",
                description: "웹사이트 방문자를 자동으로 수집하고 관리하세요",
                placeholder: "리드 캡처링 자동화 시스템"
            }
        },
        {
            id: "automation",
            label: "자동화",
            title: "자동화 기능",
            description: "반복적이고 시간이 많이 소요되는 영업 작업을 자동화하여 시간을 절약하세요. 루틴한 업무 부담을 줄이고, 영업팀이 더 많은 거래를 성사시키는 데 집중할 수 있도록 돕습니다.",
            feature: {
                title: "영업 프로세스 완전 자동화",
                description: "반복 업무를 자동화하여 핵심 영업 활동에 집중할 수 있도록 지원합니다.",
                items: [
                    "반복 작업 자동화",
                    "시간 절약 최적화",
                    "루틴 업무 부담 경감",
                    "거래 성사 집중 지원"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "영업 자동화 도구",
                description: "복잡한 영업 프로세스를 자동화하고 효율성을 높여보세요",
                placeholder: "영업 자동화 워크플로우"
            }
        },
        {
            id: "email-integration",
            label: "이메일 통합",
            title: "이메일 통합",
            description: "이메일을 CRM과 연동하여 연락처를 통해 효율적으로 커뮤니케이션하고, 맞춤형 이메일 템플릿 사용으로 시간 절약 및 일관된 고객 소통을 이룹니다.",
            feature: {
                title: "완벽한 이메일 통합 시스템",
                description: "CRM과 이메일 시스템을 완전 통합하여 효율적인 고객 커뮤니케이션을 실현합니다.",
                items: [
                    "CRM 이메일 연동",
                    "효율적인 커뮤니케이션",
                    "맞춤형 이메일 템플릿",
                    "일관된 고객 소통"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "이메일 통합 도구",
                description: "CRM과 이메일을 연동하여 고객과의 소통을 체계화하세요",
                placeholder: "이메일 통합 커뮤니케이션 허브"
            }
        }
    ],

    faqs: [
        {
            question: "Monday Sales CRM 도입은 얼마나 걸리나요?",
            answer: "직관적인 인터페이스로 빠른 적응과 도입이 가능하며, 팀의 규모에 맞춰 효율적인 영업 프로세스를 즉시 구축할 수 있습니다."
        },
        {
            question: "회사의 영업 프로세스에 맞춰 커스터마이징이 가능한가요?",
            answer: "네, 개발 지원 없이도 영업 사이클에 맞춰 워크플로우를 완벽하게 커스터마이징하여 팀의 고유한 니즈에 최적화할 수 있습니다."
        },
        {
            question: "현재 사용 중인 다른 업무 도구들과 연동되나요?",
            answer: "네, Gmail, Outlook 등 이메일 서비스와 Google Drive, Slack, Excel, MailChimp, Dropbox 등 다양한 업무 도구들과 통합되어 효율적인 연동이 가능합니다."
        },
        {
            question: "어떤 규모의 기업/팀에 적합한가요?",
            answer: "영업 및 마케팅 팀은 물론, 고객 관계 관리가 필요한 모든 규모의 기업(소규모 스타트업부터 대기업까지)에 적합합니다."
        },
        {
            question: "영업 데이터 분석 및 보고서 기능이 제공되나요?",
            answer: "네, 실시간 데이터 시각화 및 강력한 분석 기능을 제공하여 영업 성과를 효과적으로 추적하고 전략적 의사결정을 지원합니다."
        }
    ],

    finalCTA: {
        title: "성공적인 영업의 새로운 기준을 경험하세요",
        description: "직관적인 관리와 강력한 기능으로 모든 영업 활동을 한곳에 집중하여, 더 많은 거래를 성사시킬 수 있습니다.",
        primaryButton: { text: "가격표 보기", href: "/pricing" },
        secondaryButton: { text: "데모 신청하기", href: "/contact" }
    }
}

export default function MondaySalesCrmPage() {
    return <ProductPageTemplate data={mondaySalesCrmData} />
}