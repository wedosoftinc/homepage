// 가격 테이블 구조 예시 - 솔루션 카테고리 우선 방식

export const pricingStructure = {
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

// UI 컴포넌트 구조
const PricingPage = () => {
    const [billingCycle, setBillingCycle] = useState('annual');
    const [activeCategory, setActiveCategory] = useState('customer-experience');

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* 전역 월/연간 토글 */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">요금제</h1>
                <BillingToggle value={billingCycle} onChange={setBillingCycle} />
            </div>

            {/* 솔루션 카테고리 탭 */}
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                <TabsList className="grid w-full grid-cols-4">
                    {categories.map(category => (
                        <TabsTrigger key={category.id} value={category.id}>
                            {category.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {categories.map(category => (
                    <TabsContent key={category.id} value={category.id}>
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
                            <p className="text-muted-foreground">{category.description}</p>
                        </div>

                        {/* 벤더별 제품 그룹 */}
                        {category.products.map(vendorGroup => (
                            <div key={vendorGroup.vendor} className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <VendorLogo vendor={vendorGroup.vendor} />
                                    <div>
                                        <h3 className="text-xl font-semibold">{vendorGroup.vendor}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {vendorGroup.productGroup}
                                        </p>
                                    </div>
                                </div>

                                {/* 제품별 가격 카드 그리드 */}
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {vendorGroup.products.map(product => (
                                        <ProductPricingCard
                                            key={product.name}
                                            product={product}
                                            billingCycle={billingCycle}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

// 개별 제품 가격 카드 컴포넌트
const ProductPricingCard = ({ product, billingCycle }) => {
    return (
        <Card className="relative">
            <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
                {/* 플랜별 가격 표시 - 아코디언이나 미니 테이블 */}
                <div className="space-y-4">
                    {product.plans.map(plan => (
                        <div key={plan.name} className={`p-4 rounded-lg border ${plan.popular ? 'border-primary bg-primary/5' : ''}`}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">{plan.name}</span>
                                {plan.popular && <Badge>인기</Badge>}
                            </div>
                            <div className="text-2xl font-bold">
                                ${billingCycle === 'monthly' ? plan.monthly : Math.round(plan.annual / 12)}
                                <span className="text-sm font-normal text-muted-foreground">
                                    /user/month
                                </span>
                            </div>
                            {billingCycle === 'annual' && (
                                <div className="text-sm text-green-600">
                                    연간 결제 시 할인 적용
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">무료 체험 시작</Button>
            </CardFooter>
        </Card>
    );
};