"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/common/breadcrumb"
import Link from "next/link"
import {
  ArrowRightIcon as ArrowRight,
  CheckCircleIcon as CheckCircle,
  FlagIcon as Target,
  UsersIcon as Users,
  ChartBarIcon as BarChart3,
  ChatBubbleBottomCenterTextIcon as MessageSquare,
  ShieldCheckIcon as Shield,
  ClockIcon as Clock,
  BriefcaseIcon as Briefcase,
  ArrowTrendingUpIcon as TrendingUp,
  GlobeAltIcon as Globe,
  CogIcon as Settings
} from "@heroicons/react/24/outline"

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/20">
        <div className="container max-w-7xl py-4">
          <Breadcrumb
            items={[
              { title: "서비스", href: "/services" },
              { title: "컨설팅" }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Target className="w-3 h-3 mr-1" />
              Strategic Consulting
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              도입 전에 물어야 할 질문들을,<br />
              <span className="text-primary">대신 생각해드립니다</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              12개 글로벌 SaaS 제품을 직접 운영해본 소규모 전문팀이<br />
              대기업 컨설팅사에서는 불가능한 세밀하고 실용적인 조언을 제공합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  무료 컨설팅 신청
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  서비스 가격 보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              12개 제품을 실제로 써본 사람들의
              <span className="text-primary"> 진짜 조언</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Freshworks 5개, Monday.com 4개, Google Workspace, Splashtop, Freshcaller까지<br />
              각각의 장단점과 실제 구축 경험을 바탕으로 한 솔직한 컨설팅을 받아보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 실무 경험 기반 분석 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl">실무 경험 기반 분석</CardTitle>
                <CardDescription>
                  12개 제품을 실제로 구축해본 경험으로 책이나 매뉴얼에 없는 진짜 함정들과 해결책을 알려드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    Freshdesk vs Freshservice 실무 차이점
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    Monday.com 4개 제품 조합 전략
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    Google Workspace 연동 시나리오
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    실제 구축 시 만나는 함정들
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 제품 조합 최적화 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl">제품 조합 최적화</CardTitle>
                <CardDescription>
                  12개 제품 중 정말 필요한 것만 골라서 예산 대비 최대 효과를 낼 수 있는 조합을 찾아드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    불필요한 기능 중복 제거
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    단계별 도입 우선순위
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    라이선스 비용 최적화
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    연동 복잡도 고려 설계
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 현실적 도입 계획 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl">현실적 도입 계획</CardTitle>
                <CardDescription>
                  이상적인 계획이 아니라 실제 조직에서 실행 가능한 현실적인 단계별 도입 전략을 제시합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    조직 저항 최소화 전략
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    파일럿 테스트 설계
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    업무 중단 없는 전환 계획
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    실패 시 백업 전략
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 벤더 협상 지원 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl">벤더 협상 지원</CardTitle>
                <CardDescription>
                  공식 파트너로서 일반 고객이 받기 어려운 특별 할인과 조건을 협상해드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    파트너 특별 할인 적용
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    계약 조건 검토 및 개선
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    라이선스 최적화 방안
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    장기 계약 전략 수립
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 솔직한 단점 공유 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl">솔직한 단점 공유</CardTitle>
                <CardDescription>
                  벤더에서 말하지 않는 각 제품의 한계와 제약사항을 미리 알려드려 예상치 못한 문제를 방지합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    제품별 알려진 제약사항
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    한국 환경 적용 시 이슈들
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    확장 시 예상 문제점
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    대안 솔루션 제시
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 성과 측정 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl">성과 측정과 개선</CardTitle>
                <CardDescription>
                  도입 후 실제 성과를 측정하고 지속적인 개선 방안을 제시하는 사후 관리까지 포함합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    KPI 설정 및 모니터링
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    사용자 만족도 조사
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    프로세스 개선 제안
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    정기 리뷰 미팅
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            한 번쯤은 솔직한 전문가와 대화해보세요
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            벤더 영업이 말하지 않는 진짜 이야기와 실제 구축 경험을 바탕으로 한 현실적인 조언을 받아보세요. 
            무료 상담이니까 부담 없이 한번 들어보시면 어떨까요?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                무료 컨설팅 신청
                <MessageSquare className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:02-2135-3071">
                전화 상담: 02-2135-3071
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation to other services */}
      <section className="py-12 bg-muted/20">
        <div className="container">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">다른 서비스도 확인해보세요</h3>
            <p className="text-muted-foreground">컨설팅부터 운영지원까지, 원스톱 서비스를 제공합니다</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">구축 서비스</h4>
                  <p className="text-sm text-muted-foreground mb-4">기술적인 설정은 우리 몫입니다</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services/implementation">
                      자세히 보기
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">교육 서비스</h4>
                  <p className="text-sm text-muted-foreground mb-4">잘 도입했다면, 잘 쓰게 만들어야죠</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services/training">
                      자세히 보기
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">운영지원</h4>
                  <p className="text-sm text-muted-foreground mb-4">도입 이후에도 계속 곁에 있습니다</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services/maintenance">
                      자세히 보기
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}