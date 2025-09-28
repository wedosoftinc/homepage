import { Metadata } from 'next'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
    RocketLaunchIcon as Rocket,
    EnvelopeIcon as Mail,
    BellIcon as Bell,
    ClockIcon as Clock,
    DocumentTextIcon as FileText
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '블로그 | 위두소프트 - SaaS 인사이트 & 업계 동향',
    description: 'SaaS 도입 성공 사례, 업계 트렌드, 실무 노하우를 공유하는 위두소프트 블로그입니다.',
    keywords: 'SaaS, 디지털전환, Freshworks, Google Workspace, Monday.com, 기업솔루션',
}

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            <MainNavigation />
            <main className="container py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <Rocket className="h-4 w-4" />
                        곧 오픈됩니다
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        SaaS 인사이트 &<br />
                        <span className="text-primary">실무 노하우 블로그</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        25년 실무 경험을 바탕으로 한 SaaS 도입 성공 사례, 업계 동향, 
                        실전 팁을 공유할 예정입니다.
                    </p>
                </div>

                {/* 예상 콘텐츠 미리보기 */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                    <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                        <CardHeader>
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <Badge variant="secondary" className="w-fit">성공 사례</Badge>
                            <CardTitle className="text-xl">SaaS 도입 성공 스토리</CardTitle>
                            <CardDescription>
                                실제 고객사의 디지털 전환 과정과 성과를 상세하게 공유
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• 중소기업 Freshdesk 도입 사례</li>
                                <li>• 스타트업 Google Workspace 전환기</li>
                                <li>• 제조업 Monday.com 프로젝트 관리</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                        <CardHeader>
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Bell className="h-6 w-6 text-green-500" />
                            </div>
                            <Badge variant="secondary" className="w-fit">업계 동향</Badge>
                            <CardTitle className="text-xl">SaaS 트렌드 & 인사이트</CardTitle>
                            <CardDescription>
                                글로벌 SaaS 시장 동향과 새로운 기술 트렌드 분석
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• AI 기반 고객 서비스 혁신</li>
                                <li>• 하이브리드 워크 솔루션 동향</li>
                                <li>• 2025 SaaS 시장 전망</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Clock className="h-6 w-6 text-blue-500" />
                            </div>
                            <Badge variant="secondary" className="w-fit">실무 가이드</Badge>
                            <CardTitle className="text-xl">실전 도입 가이드</CardTitle>
                            <CardDescription>
                                단계별 도입 프로세스와 실무에서 겪는 문제 해결법
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• SaaS 선택 체크리스트</li>
                                <li>• 데이터 마이그레이션 노하우</li>
                                <li>• 사용자 교육 전략</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* 이메일 구독 섹션 */}
                <Card className="max-w-2xl mx-auto">
                    <CardHeader className="text-center">
                        <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                        <CardTitle className="text-2xl">블로그 오픈 알림 받기</CardTitle>
                        <CardDescription>
                            새로운 블로그 포스트와 SaaS 인사이트를 가장 먼저 받아보세요
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <Input 
                                type="email" 
                                placeholder="이메일 주소를 입력하세요" 
                                className="flex-1"
                            />
                            <Button type="submit" className="sm:w-auto">
                                구독 신청
                            </Button>
                        </form>
                        <p className="text-sm text-muted-foreground mt-4 text-center">
                            언제든지 구독을 취소할 수 있습니다. 스팸 메일은 절대 보내지 않습니다.
                        </p>
                    </CardContent>
                </Card>

                {/* 임시 연락처 CTA */}
                <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">지금 당장 도움이 필요하신가요?</h3>
                    <p className="text-muted-foreground mb-6">
                        블로그를 기다리지 마시고, 바로 전문 컨설턴트와 상담받으세요
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild>
                            <Link href="/contact">무료 상담 신청</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/products">솔루션 둘러보기</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}