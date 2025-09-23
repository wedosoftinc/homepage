// 가격 테이블 구조 예시 - 솔루션 카테고리 우선 방식
// TypeScript 인터페이스 정의

export interface PricingPlan {
    name: string;
    monthly: number;
    annual: number;
    popular?: boolean;
    userLimit?: string;
    minSeats?: number;
    features: string[];
}

export interface Product {
    name: string;
    description: string;
    plans: PricingPlan[];
}

export interface VendorGroup {
    vendor: string;
    productGroup: string;
    products: Product[];
}

export interface Category {
    id: string;
    title: string;
    description: string;
    products: VendorGroup[];
}

export interface PricingStructure {
    billingToggle: {
        monthly: string;
        annual: string;
    };
    categories: Category[];
}

export const pricingStructure: PricingStructure = {
    // 전역 월/연간 토글
    billingToggle: {
        monthly: "월간 결제",
        annual: "연간 결제 (할인 적용)"
    },

    // 솔루션 카테고리별 탭
    categories: [
        {
            id: "customer-experience",
            title: "고객 경험 관리",
            description: "고객 지원, 라이브 채팅, 콜센터 솔루션",
            products: [
                {
                    vendor: "Freshworks",
                    productGroup: "고객 서비스 제품군",
                    products: [
                        {
                            name: "Freshdesk Omni",
                            description: "옴니채널 고객 지원",
                            plans: [
                                {
                                    name: "Growth",
                                    monthly: 29,
                                    annual: 348, // 월간 * 12
                                    features: ["옴니채널 지원", "지능형 챗봇", "웹/SMS/메시징"]
                                },
                                {
                                    name: "Pro",
                                    monthly: 69,
                                    annual: 828,
                                    popular: true,
                                    features: ["Growth 모든 기능", "맞춤형 포털", "커스텀 객체"]
                                },
                                {
                                    name: "Enterprise",
                                    monthly: 109,
                                    annual: 1308,
                                    features: ["Pro 모든 기능", "감사 로그", "승인 워크플로우"]
                                }
                            ]
                        },
                        {
                            name: "Freshdesk",
                            description: "기존 헬프데스크",
                            plans: [
                                {
                                    name: "Free",
                                    monthly: 0,
                                    annual: 0,
                                    userLimit: "2명까지",
                                    features: ["기본 티켓팅", "이메일 지원"]
                                },
                                {
                                    name: "Growth",
                                    monthly: 15,
                                    annual: 180,
                                    features: ["무제한 에이전트", "시간 추적"]
                                }
                                // ... 더 많은 플랜
                            ]
                        }
                        // ... Freshchat, Freshcaller
                    ]
                }
            ]
        },
        {
            id: "collaboration",
            title: "협업 & 생산성",
            description: "프로젝트 관리, 클라우드 오피스, 커뮤니케이션",
            products: [
                {
                    vendor: "Google",
                    productGroup: "클라우드 오피스",
                    products: [
                        {
                            name: "Google Workspace",
                            description: "클라우드 기반 협업 솔루션",
                            plans: [
                                {
                                    name: "Business Starter",
                                    monthly: 6,
                                    annual: 72,
                                    features: ["Gmail", "Drive 30GB", "Meet 100명"]
                                },
                                {
                                    name: "Business Standard",
                                    monthly: 12,
                                    annual: 144,
                                    popular: true,
                                    features: ["2TB 저장공간", "Meet 150명", "녹화 기능"]
                                }
                                // ... 더 많은 플랜
                            ]
                        }
                    ]
                },
                {
                    vendor: "Monday.com",
                    productGroup: "프로젝트 관리",
                    products: [
                        {
                            name: "Monday Work Management",
                            description: "팀 협업 및 프로젝트 관리",
                            plans: [
                                {
                                    name: "Basic",
                                    monthly: 12,
                                    annual: 144,
                                    minSeats: 3,
                                    features: ["기본 대시보드", "5GB 저장공간"]
                                }
                                // ... 더 많은 플랜
                            ]
                        }
                    ]
                }
            ]
        }
        // ... IT 인프라, 영업 관리 카테고리
    ]
};

// 이 파일은 가격 테이블 UI 구조 설계를 위한 TypeScript 인터페이스와 
// 데이터 구조 예시를 포함합니다.
// 실제 구현은 /app/pricing/page.tsx에서 확인하세요.