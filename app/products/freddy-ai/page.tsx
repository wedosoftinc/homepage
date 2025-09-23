import { ProductPageTemplate, ProductPageData } from '@/components/sections/product-page-template'

export default function FreddyAIPage() {
    const productData: ProductPageData = {
        // Hero 섹션 (docs 기반)
        name: 'Freddy AI',
        subtitle: 'GPT LLM 기반의 고객 지원 및 업무 자동화 도구',
        description: 'Freddy AI는 Freshworks의 AI 자동화 도구로, 신속한 고객 지원을 제공하고 에이전트 생산성을 높입니다. AI 챗봇, 답변 추천, 텍스트 생성, 자동 티켓 회신 등을 경험하세요.',
        category: 'Freshworks Generative AI',
        slug: 'freddy-ai',
        heroCTA: {
            primary: { text: '데모 신청하기', href: '/contact?demo=freddy-ai' },
            secondary: { text: '자세히 보기', href: '/contact?product=freddy-ai' }
        },

        // 주요 기능 (3개 - docs 기반)
        keyFeatures: [
            {
                icon: 'messageSquare',
                title: 'AI 챗봇',
                description: 'Freddy는 LLM 모델을 기반으로 고객 문의에 직접 답변하며 자연스러운 소통을 지원합니다. 실시간 번역 기능으로 언어 장벽을 허물어, 전 세계 어디서든 에이전트와 고객이 문제 없이 대화할 수 있습니다.'
            },
            {
                icon: 'fileText',
                title: '자동 문서 생성',
                description: '수많은 상담 기록과 보고서를 일일이 정리하는 데 시간이 너무 많이 걸리진 않나요? Freddy의 자동 문서 생성 기능은 대화 내용을 실시간으로 요약하고, 필요한 문서를 자동으로 만들어줍니다.'
            },
            {
                icon: 'target',
                title: '에이전트 답변 추천',
                description: '같은 질문에도 상담원마다 답변이 달라 혼란이 생긴 경험 있으신가요? Freddy는 고객 문의에 최적화된 답변을 에이전트에게 실시간 추천해줘, 누구나 빠르고 일관된 응대가 가능합니다.'
            }
        ],

        // 탭 기반 세부 기능 (6개 - docs 기반)
        detailedFeatureTabs: [
            {
                id: "solution-recommendation",
                label: "솔루션 제안",
                title: "솔루션 제안",
                description: "고객 문의와 가장 유사한 솔루션 문서를 자동으로 찾아 최적의 답변을 제안합니다.",
                feature: {
                    title: "복잡한 문제도 체계적으로 해결",
                    description: "에이전트는 빠르고 정확한 정보를 바탕으로 신속하게 대응할 수 있어 업무 효율이 크게 향상됩니다.",
                    items: [
                        "유사 솔루션 자동 검색",
                        "최적 답변 자동 제안",
                        "빠른 정보 제공",
                        "체계적 문제 해결"
                    ]
                },
                interactiveArea: {
                    type: "demo" as const,
                    title: "AI 솔루션 제안 시스템",
                    description: "고객 문의에 맞는 최적의 솔루션을 실시간으로 찾아보세요",
                    placeholder: "AI 솔루션 추천 엔진"
                }
            },
            {
                id: "writing-assistant",
                label: "작성 보조",
                title: "에이전트 작성 보조",
                description: "어조 개선, 문맥 수정, 텍스트 확장, 맞춤법 검사 등 다양한 작성 보조 기능을 제공합니다.",
                feature: {
                    title: "효과적인 커뮤니케이션으로 고객 만족도를 높여보세요",
                    description: "에이전트가 더욱 전문적이고 매끄러운 답변을 쉽게 작성할 수 있도록 돕습니다.",
                    items: [
                        "어조 개선",
                        "문맥 수정",
                        "텍스트 확장",
                        "맞춤법 검사"
                    ]
                },
                interactiveArea: {
                    type: "demo" as const,
                    title: "AI 작성 보조 도구",
                    description: "전문적이고 매끄러운 고객 응답을 빠르게 작성해보세요",
                    placeholder: "AI 작성 보조 인터페이스"
                }
            },
            {
                id: "ticket-summary",
                label: "티켓 요약",
                title: "티켓 요약",
                description: "고객과 주고 받은 대화의 맥락을 놓치지 마세요. 한눈에 파악되는 요점으로 티켓 내용을 누구나 빠르게 이해하고 즉시 협력할 수 있게 만듭니다.",
                feature: {
                    title: "에이전트의 업무 부담감을 줄이고, 가시성을 높여보세요",
                    description: "복잡한 대화 내용도 핵심만 추려서 명확하게 정리됩니다.",
                    items: [
                        "대화 맥락 유지",
                        "핵심 요점 추출",
                        "빠른 이해 지원",
                        "즉시 협력 가능"
                    ]
                },
                interactiveArea: {
                    type: "dashboard" as const,
                    title: "티켓 요약 대시보드",
                    description: "복잡한 고객 대화를 한눈에 파악할 수 있는 요약을 확인하세요",
                    placeholder: "AI 티켓 요약 시스템"
                }
            },
            {
                id: "realtime-translation",
                label: "실시간 번역",
                title: "실시간 번역 (다국어 지원)",
                description: "상담원과 고객 간 언어 장벽을 실시간 번역 기능으로 완벽하게 허물어줍니다.",
                feature: {
                    title: "글로벌 비즈니스 확장도 Freddy와 함께 하세요",
                    description: "다양한 언어를 즉시 상호 번역해 전 세계 고객과 원활한 소통이 가능합니다.",
                    items: [
                        "실시간 언어 번역",
                        "다국어 동시 지원",
                        "언어 장벽 해소",
                        "글로벌 고객 소통"
                    ]
                },
                interactiveArea: {
                    type: "demo" as const,
                    title: "실시간 번역 시스템",
                    description: "다양한 언어로 동시에 고객과 소통하는 경험을 해보세요",
                    placeholder: "다국어 실시간 번역 인터페이스"
                }
            },
            {
                id: "custom-learning",
                label: "맞춤 학습",
                title: "AI 챗봇 맞춤 학습",
                description: "AI 챗봇에게 FAQ 문서, URL, 파일을 손쉽게 자동 학습시킵니다.",
                feature: {
                    title: "쉽고 빠른 맞춤화 고객지원을 제공",
                    description: "빠르게 학습한 AI는 일반적인 답변이 아닌 엔지니어가 입력한 전문적인 기술 지원 답변도 가능합니다.",
                    items: [
                        "FAQ 문서 자동 학습",
                        "URL 기반 정보 수집",
                        "파일 업로드 학습",
                        "전문 기술 답변 지원"
                    ]
                },
                interactiveArea: {
                    type: "demo" as const,
                    title: "AI 학습 관리 도구",
                    description: "나만의 지식 베이스로 AI 챗봇을 빠르게 학습시켜보세요",
                    placeholder: "AI 맞춤 학습 시스템"
                }
            },
            {
                id: "auto-email",
                label: "자동 이메일",
                title: "이메일 자동 회신",
                description: "티켓이 접수되면 Freddy가 저장된 솔루션 문서를 기반으로 가장 적합한 1차 답변을 자동으로 발송합니다.",
                feature: {
                    title: "현재 6개 언어를 지원하며 점차 확대 중",
                    description: "에이전트가 개입하기 전 신속한 초기 응대로 고객 만족도를 높이고 업무 부담을 줄여줍니다.",
                    items: [
                        "1차 답변 자동 발송",
                        "솔루션 문서 기반 응답",
                        "신속한 초기 응대",
                        "6개 언어 지원"
                    ]
                },
                interactiveArea: {
                    type: "demo" as const,
                    title: "자동 이메일 회신 시스템",
                    description: "티켓 접수부터 자동 응답까지의 과정을 확인해보세요",
                    placeholder: "자동 이메일 회신 워크플로우"
                }
            }
        ],

        // 비즈니스 혜택 (4개 - 문서 원본 그대로)
        benefits: [
            {
                title: '자동화율',
                description: '달성',
                metrics: '80%'
            },
            {
                title: '고객 대기 시간',
                description: '단축',
                metrics: '90%'
            },
            {
                title: '상담원 업무 효율성',
                description: '향상',
                metrics: '70%'
            },
            {
                title: '무중단 고객 지원',
                description: '가능',
                metrics: '24/7'
            }
        ],

        // 활용 시나리오 (3개 - 문서 원본 그대로)
        useCases: [
            {
                title: '1차 고객 응답',
                description: '기본적인 문의사항 자동 처리',
                features: [
                    '기본 문의사항 자동 처리',
                    'FAQ 자동 응답',
                    '고객 문의 분류',
                    '우선순위 자동 설정'
                ]
            },
            {
                title: '상담원 보조',
                description: '복잡한 문의에 대한 해결책 제안',
                features: [
                    '복잡한 문의 해결책 제안',
                    '상담원 업무 지원',
                    '실시간 답변 추천',
                    '고객 대응 최적화'
                ]
            },
            {
                title: '품질 관리',
                description: '응답 품질 실시간 모니터링 및 개선',
                features: [
                    '응답 품질 모니터링',
                    '서비스 개선 분석',
                    '고객 만족도 측정',
                    '성과 지표 추적'
                ]
            }
        ],

        // FAQ (5개 - docs 기반)
        faqs: [
            {
                question: 'Freddy는 모두 유료인가요?',
                answer: 'Freddy AI Agent: Freshchat AI 챗봇 (무료, 봇 세션 구매 필요) / Freddy Copilot: Freshdesk 티켓팅 서비스 보조 도구 (Add-on제품, 라이선스 구매 필요)'
            },
            {
                question: '요금제가 궁금해요',
                answer: 'Freddy AI Copilot: $29 / 에이전트 / 월 (연간 청구 기준), 봇 세션: $100 / 1000 세션'
            },
            {
                question: 'Freddy 챗봇이 소스를 학습하기까지 오랜 시간이 걸릴까요?',
                answer: 'FAQ 페이지의 URL만 입력한다면 하루 안에 Freddy는 고객 Q&A 페이지 내부의 텍스트를 채팅 답변으로 전달할 수 있습니다. 또한 버튼 클릭 한번만으로 Freddy는 Freshworks 제품에 저장된 모든 솔루션(FAQ) 문서를 학습합니다.'
            },
            {
                question: '보안은 어떻게 보장되나요?',
                answer: 'Freddy AI는 고객 데이터의 안전과 프라이버시를 최우선으로 생각합니다. 모든 데이터는 암호화되어 저장 및 전송되며, 엄격한 접근 통제와 보안 프로토콜을 통해 외부 위협으로부터 보호됩니다.'
            }
        ],

        // 최종 CTA (docs 기반)
        finalCTA: {
            title: 'AI 고객 지원, 이제 선택이 아닌 필수입니다.',
            description: 'Freddy AI 자동화 도구로, 신속한 고객 지원을 제공하고 에이전트 생산성을 높입니다. AI 챗봇, 답변 추천, 텍스트 생성, 자동 티켓 회신 등을 AI 기능을 체험하세요.',
            primaryButton: { text: '가격표 보기', href: '/contact?product=freddy-ai' },
            secondaryButton: { text: '데모 신청하기', href: '/contact?demo=freddy-ai' }
        }
    }

    return <ProductPageTemplate data={productData} />
}