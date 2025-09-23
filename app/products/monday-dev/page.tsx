import { ProductPageTemplate } from "@/components/sections/product-page-template"

const mondayDevData = {
    name: "Monday Dev",
    subtitle: "개발팀 전용 프로젝트 관리",
    description: "개발팀의 워크플로우에 최적화된 애자일 프로젝트 관리와 협업 플랫폼입니다.",
    category: "IT 인프라 최적화",
    slug: "monday-dev",

    heroCTA: {
        primary: { text: "무료 체험 시작", href: "/contact" },
        secondary: { text: "상담 신청", href: "/contact" }
    },

    heroMedia: {
        type: "image" as const,
        src: "/monday-logo.svg",
        alt: "Monday Dev 대시보드 스크린샷"
    },

    keyFeatures: [
        {
            icon: "settings" as const,
            title: "스프린트 관리",
            description: "애자일 방법론에 최적화된 스프린트 계획과 진행 상황 추적을 제공합니다."
        },
        {
            icon: "fileText" as const,
            title: "백로그 관리",
            description: "사용자 스토리와 작업을 체계적으로 관리하고 우선순위를 설정합니다."
        },
        {
            icon: "target" as const,
            title: "버그 추적",
            description: "버그 리포팅부터 해결까지 전체 과정을 체계적으로 관리합니다."
        },
        {
            icon: "globe" as const,
            title: "코드 리뷰",
            description: "GitHub, GitLab과 연동하여 코드 리뷰 프로세스를 효율화합니다."
        },
        {
            icon: "barChart3" as const,
            title: "개발 메트릭",
            description: "팀의 개발 생산성과 품질 지표를 실시간으로 추적하고 분석합니다."
        },
        {
            icon: "users" as const,
            title: "팀 협업",
            description: "개발자, 디자이너, PM이 함께 협업할 수 있는 통합 환경을 제공합니다."
        }
    ],

    detailedFeatures: [
        {
            title: "애자일 프로젝트 관리",
            description: "스크럼과 칸반 방법론을 지원하여 팀의 개발 프로세스를 최적화합니다.",
            features: [
                "스프린트 계획 및 추적",
                "백로그 우선순위 관리",
                "번다운 차트 및 속도 측정",
                "데일리 스탠드업 지원"
            ]
        },
        {
            title: "개발 도구 통합",
            description: "개발팀이 사용하는 주요 도구들과 완벽하게 연동하여 워크플로우를 중단 없이 관리합니다.",
            features: [
                "GitHub, GitLab, Bitbucket 연동",
                "Jira, Linear 마이그레이션",
                "CI/CD 파이프라인 통합",
                "Slack, Discord 알림"
            ]
        },
        {
            title: "코드 품질 관리",
            description: "코드 리뷰부터 배포까지 품질 관리 프로세스를 체계화합니다.",
            features: [
                "풀 리퀘스트 추적",
                "코드 리뷰 워크플로우",
                "자동화된 테스트 결과 연동",
                "배포 승인 프로세스"
            ]
        },
        {
            title: "팀 성과 분석",
            description: "데이터 기반 인사이트로 팀의 개발 생산성과 품질을 지속적으로 개선합니다.",
            features: [
                "개발 속도 및 처리량 분석",
                "버그 발생률 및 해결 시간 추적",
                "코드 리뷰 효율성 측정",
                "팀원별 기여도 분석"
            ]
        },
        {
            title: "릴리스 관리",
            description: "계획부터 배포까지 릴리스 전체 라이프사이클을 체계적으로 관리합니다.",
            features: [
                "릴리스 로드맵 관리",
                "기능 플래그 연동",
                "배포 스케줄링",
                "롤백 계획 수립"
            ]
        }
    ],

    integrations: {
        title: "연동 가능한 개발 도구",
        description: "개발팀이 사용하는 모든 도구와 완벽하게 연동하여 통합된 개발 환경을 구축합니다.",
        platforms: [
            { name: "GitHub", logo: "/logos/github.png", category: "버전 관리" },
            { name: "GitLab", logo: "/logos/gitlab.png", category: "버전 관리" },
            { name: "Bitbucket", logo: "/logos/bitbucket.png", category: "버전 관리" },
            { name: "Jira", logo: "/logos/jira.png", category: "이슈 추적" },
            { name: "Linear", logo: "/logos/linear.png", category: "이슈 추적" },
            { name: "Jenkins", logo: "/logos/jenkins.png", category: "CI/CD" },
            { name: "CircleCI", logo: "/logos/circleci.png", category: "CI/CD" },
            { name: "Slack", logo: "/logos/slack.png", category: "협업" }
        ]
    },

    faqs: [
        {
            question: "기존 Jira에서 데이터를 마이그레이션할 수 있나요?",
            answer: "네, Jira에서 이슈, 스프린트, 사용자 데이터를 자동으로 마이그레이션할 수 있는 도구를 제공합니다. Linear, Asana 등 다른 도구에서도 마이그레이션이 가능합니다."
        },
        {
            question: "GitHub와 어떻게 연동되나요?",
            answer: "GitHub 앱을 통해 풀 리퀘스트, 커밋, 이슈를 자동으로 동기화합니다. 코드 변경사항이 자동으로 작업 항목에 연결되어 개발 진행 상황을 실시간으로 추적할 수 있습니다."
        },
        {
            question: "팀 규모에 제한이 있나요?",
            answer: "소규모 스타트업부터 대규모 엔터프라이즈까지 모든 규모의 개발팀에 적합합니다. 사용자 수에 따라 유연하게 확장할 수 있으며, 다중 팀 관리도 지원합니다."
        },
        {
            question: "CI/CD 파이프라인 정보도 볼 수 있나요?",
            answer: "네, Jenkins, CircleCI, GitHub Actions 등과 연동하여 빌드 상태, 테스트 결과, 배포 현황을 대시보드에서 확인할 수 있습니다."
        }
    ],

    finalCTA: {
        title: "Monday Dev로 개발팀의 생산성을 극대화하세요",
        description: "애자일 방법론과 현대적인 개발 도구들을 완벽하게 통합한 플랫폼으로 더 나은 소프트웨어를 더 빠르게 개발하세요.",
        primaryButton: { text: "무료 체험 시작", href: "/contact" },
        secondaryButton: { text: "상담 신청", href: "/contact" }
    }
}

export default function MondayDevPage() {
    return <ProductPageTemplate data={mondayDevData} />
}