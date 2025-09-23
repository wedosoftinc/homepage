import { ProductPageTemplate } from "@/components/sections/product-page-template"

const mondayDevData = {
    name: "Monday Dev",
    subtitle: "Build Better Products, Faster",
    description: "더 나은 제품을 더 빠르게, 복잡한 개발을 단순하게 관리하세요. 맞춤형 워크플로우 자동화와 GitHub 통합을 통해 개념화부터 출시까지 애자일 워크플로우를 간소화하고, 더 빠르고 쉽게 제품을 구축할 수 있도록 지원합니다.",
    category: "IT 인프라 최적화",
    slug: "monday-dev",

    heroCTA: {
        primary: { text: "데모 신청하기", href: "/contact" },
        secondary: { text: "자세히 보기", href: "/contact" }
    },

    heroMedia: {
        type: "image" as const,
        src: "/monday-logo.svg",
        alt: "Monday Dev 대시보드 스크린샷"
    },

    keyFeatures: [
        {
            icon: "settings" as const,
            title: "기존 제품 관리의 한계 제거",
            description: "고유한 제품 전략에 따라 제품 개발 프로세스를 조정하여 개발팀의 니즈에 완벽히 부응합니다."
        },
        {
            icon: "zap" as const,
            title: "워크플로우 자동화",
            description: "커스텀 자동화와 도구 연동으로 반복 작업을 줄여 개발 프로젝트 출시 시간을 단축할 수 있습니다."
        },
        {
            icon: "globe" as const,
            title: "GitHub 통합",
            description: "주요 개발 도구(GitHub 등)와 워크플로우를 연동하여 자동화를 가속화하고, 팀 생산성을 극대화합니다."
        }
    ],

    // 탭 기반 세부 기능 (6개 - docs 기반)
    detailedFeatureTabs: [
        {
            id: "roadmap-planning",
            label: "로드맵 계획",
            title: "로드맵 계획",
            description: "제품의 장기적인 비전을 명확히 하고, 전체 개발 과정을 직관적으로 시각화하여 관리합니다. 팀원들과 쉽게 공유하고 실시간으로 업데이트하여 일관된 방향성을 유지할 수 있습니다.",
            feature: {
                title: "직관적인 제품 로드맵 관리",
                description: "장기적인 제품 비전을 시각화하고 팀원들과 실시간으로 공유할 수 있습니다.",
                items: [
                    "제품 비전 시각화",
                    "팀원과 실시간 공유",
                    "일관된 방향성 유지",
                    "전체 개발 과정 관리"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "로드맵 플래닝 도구",
                description: "제품의 장기 계획을 시각적으로 설계하고 관리하세요",
                placeholder: "제품 로드맵 관리 인터페이스"
            }
        },
        {
            id: "backlog-management",
            label: "백로그 관리",
            title: "스마트한 Backlog 관리",
            description: "제품 백로그를 효율적으로 수집 및 관리합니다. 중요도와 우선순위를 명확하게 지정하여 가장 필요한 곳에 집중할 수 있도록 돕습니다.",
            feature: {
                title: "효율적인 백로그 우선순위 관리",
                description: "중요도와 우선순위를 체계적으로 관리하여 핵심 작업에 집중할 수 있습니다.",
                items: [
                    "백로그 수집 및 관리",
                    "중요도 우선순위 지정",
                    "핵심 작업 집중",
                    "효율적인 업무 분배"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "백로그 관리 시스템",
                description: "제품 백로그를 체계적으로 관리하고 우선순위를 설정하세요",
                placeholder: "백로그 우선순위 관리 도구"
            }
        },
        {
            id: "scrum-management",
            label: "스크럼 관리",
            title: "스크럼 소프트웨어 관리",
            description: "유연한 스프린트 계획 수립부터 실시간 진행 상황 추적까지, 애자일 개발 방법론을 완벽하게 지원합니다.",
            feature: {
                title: "완벽한 애자일 스크럼 지원",
                description: "스프린트 계획부터 진행 상황 추적까지 애자일 방법론을 완전 지원합니다.",
                items: [
                    "유연한 스프린트 계획",
                    "실시간 진행 상황 추적",
                    "애자일 방법론 지원",
                    "팀 협업 최적화"
                ]
            },
            interactiveArea: {
                type: "dashboard" as const,
                title: "스크럼 대시보드",
                description: "스프린트 진행 상황을 실시간으로 추적하고 관리하세요",
                placeholder: "스크럼 관리 대시보드"
            }
        },
        {
            id: "retrospective",
            label: "회고",
            title: "Retrospective",
            description: "효과적인 팀 회고를 통해 지속적인 개선 방안을 도출합니다. 이를 통해 팀의 역량을 강화할 수 있습니다.",
            feature: {
                title: "지속적인 팀 개선을 위한 회고",
                description: "정기적인 팀 회고를 통해 개선점을 찾고 팀 역량을 지속적으로 강화합니다.",
                items: [
                    "효과적인 팀 회고",
                    "지속적인 개선 방안 도출",
                    "팀 역량 강화",
                    "프로세스 최적화"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "회고 도구",
                description: "팀의 성과를 돌아보고 개선 방안을 찾아보세요",
                placeholder: "팀 회고 관리 시스템"
            }
        },
        {
            id: "bug-tracking",
            label: "버그 추적",
            title: "버그 추적",
            description: "발견된 버그를 효과적으로 추적하고 관리하여 신속하게 해결합니다. 제품 품질을 지속적으로 향상시키고 사용자 만족도를 높입니다.",
            feature: {
                title: "체계적인 버그 관리 시스템",
                description: "버그 발견부터 해결까지 전체 과정을 체계적으로 관리하고 추적합니다.",
                items: [
                    "버그 효과적 추적",
                    "신속한 문제 해결",
                    "제품 품질 향상",
                    "사용자 만족도 증대"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "버그 추적 시스템",
                description: "발견된 버그를 체계적으로 관리하고 해결 과정을 추적하세요",
                placeholder: "버그 관리 인터페이스"
            }
        },
        {
            id: "release-planning",
            label: "출시 계획",
            title: "출시 계획",
            description: "제품 출시를 사전에 계획하고 관리합니다. 관련 부서와 긴밀한 협력을 통해 성공적인 제품 런칭을 보장합니다.",
            feature: {
                title: "성공적인 제품 출시 관리",
                description: "체계적인 출시 계획과 부서간 협력으로 성공적인 제품 런칭을 지원합니다.",
                items: [
                    "제품 출시 사전 계획",
                    "관련 부서 긴밀 협력",
                    "성공적인 런칭 보장",
                    "출시 후 관리 지원"
                ]
            },
            interactiveArea: {
                type: "demo" as const,
                title: "출시 계획 도구",
                description: "제품 출시를 체계적으로 계획하고 관리하세요",
                placeholder: "제품 출시 관리 시스템"
            }
        }
    ],

    faqs: [
        {
            question: "어떤 앱과 함께 사용할 수 있나요?",
            answer: "GitHub, Jira 등과 같은 주요 개발 도구와 광범위하게 연동됩니다. 또한 monday work management 플랫폼과도 완벽하게 통합됩니다. 강력한 API를 통해 다양한 타사 앱과의 맞춤형 연결 및 확장이 가능합니다."
        },
        {
            question: "기존 데이터를 Monday Dev로 쉽게 이전할 수 있나요?",
            answer: "네, 기존 프로젝트 관리 도구에서 사용하던 모든 데이터나 진행 중인 프로젝트를 쉽고 안전하게 이전할 수 있습니다. 이메일, 캘린더, 파일 등 원활하게 가져와 바로 업무에 적용 가능합니다."
        },
        {
            question: "어떤 기업 혹은 팀에 적합한가요?",
            answer: "애자일 방법론을 사용하는 소프트웨어 개발 조직, 제품 관리자/개발 팀 리더 등 모든 규모의 팀에 적합합니다. 원격/하이브리드 근무 환경에도 최적화된 솔루션입니다."
        },
        {
            question: "사용자 데이터 보안은 어떻게 이루어지나요?",
            answer: "모든 데이터는 최신 암호화 기술로 보호되며, 다단계 인증 및 고급 위협 방어 시스템을 갖추고 있습니다. GDPR, ISO 27001 등 글로벌 보안 및 개인 정보 보호 규정을 준수하여 사용자 데이터를 안전하게 보호합니다."
        },
        {
            question: "팀의 고유한 개발 프로세스에 맞게 맞춤화할 수 있나요?",
            answer: "네, 팀의 고유한 제품 전략과 개발 프로세스에 맞춰 워크플로우를 완벽하게 커스터마이징할 수 있습니다. 커스텀 자동화와 유연한 설정으로 팀의 니즈에 최적화된 환경을 구축합니다."
        }
    ],

    finalCTA: {
        title: "팀의 제품 개발 역량을 한 차원 높여보세요",
        description: "비효율적인 워크플로우와 분산된 협업으로 고민이신가요? Monday Dev는 통합된 환경에서 팀의 생산성을 극대화하고, 더 나은 제품을 더욱 효율적으로 구축하도록 지원합니다.",
        primaryButton: { text: "가격표 보기", href: "/pricing" },
        secondaryButton: { text: "데모 신청하기", href: "/contact" }
    }
}

export default function MondayDevPage() {
    return <ProductPageTemplate data={mondayDevData} />
}