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
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">실무 경험 기반 분석</CardTitle>
                <CardDescription>
                  12개 제품을 실제로 구축해본 경험으로 책이나 매뉴얼에 없는 진짜 함정들과 해결책을 알려드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Freshdesk vs Freshservice 실무 차이점
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Monday.com 4개 제품 조합 전략
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Google Workspace 연동 시나리오
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실제 구축 시 만나는 함정들
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 제품 조합 최적화 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">제품 조합 최적화</CardTitle>
                <CardDescription>
                  12개 제품 중 정말 필요한 것만 골라서 예산 대비 최대 효과를 낼 수 있는 조합을 찾아드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    불필요한 기능 중복 제거
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    단계별 도입 우선순위
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    라이선스 비용 최적화
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    연동 복잡도 고려 설계
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 현실적 도입 계획 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">현실적 도입 계획</CardTitle>
                <CardDescription>
                  이상적인 계획이 아니라 실제 조직에서 실행 가능한 현실적인 단계별 도입 전략을 제시합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    조직 저항 최소화 전략
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    파일럿 테스트 설계
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    업무 중단 없는 전환 계획
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실패 시 백업 전략
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 벤더 협상 지원 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">벤더 협상 지원</CardTitle>
                <CardDescription>
                  공식 파트너로서 일반 고객이 받기 어려운 특별 할인과 조건을 협상해드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    파트너 특별 할인 적용
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    계약 조건 검토 및 개선
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    라이선스 최적화 방안
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    장기 계약 전략 수립
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 솔직한 단점 공유 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">솔직한 단점 공유</CardTitle>
                <CardDescription>
                  벤더에서 말하지 않는 각 제품의 한계와 제약사항을 미리 알려드려 예상치 못한 문제를 방지합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    제품별 알려진 제약사항
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    한국 환경 적용 시 이슈들
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    확장 시 예상 문제점
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    대안 솔루션 제시
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 성과 측정 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">성과 측정과 개선</CardTitle>
                <CardDescription>
                  도입 후 실제 성과를 측정하고 지속적인 개선 방안을 제시하는 사후 관리까지 포함합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실제 사용률 모니터링
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    ROI 측정 및 보고
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    사용자 만족도 조사
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    지속적 최적화 방안
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                소규모 전문팀이라서<br />
                <span className="text-primary">가능한 진짜 컨설팅</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 글로벌 파트너십 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">실무진 직접 컨설팅</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    대기업 컨설팅처럼 주니어가 자료 만들고 시니어가 PT하는 게 아니라,
                    실제로 구축할 사람이 직접 컨설팅합니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">구축할 사람이 컨설팅</Badge>
                    <Badge variant="outline">실무진 직접 미팅</Badge>
                    <Badge variant="outline">솔직한 조언</Badge>
                    <Badge variant="outline">빠른 의사결정</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* 25년 경험 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">실제 구축 경험</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    12개 제품을 직접 써보고 수십 번 구축해본 경험으로, 
                    매뉴얼에 없는 실제 노하우와 함정들을 알려드립니다.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-2xl text-primary">100+</div>
                      <div className="text-muted-foreground">직접 구축 프로젝트</div>
                    </div>
                    <div>
                      <div className="font-semibold text-2xl text-primary">12개</div>
                      <div className="text-muted-foreground">제품 실사용 경험</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 맞춤형 접근 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">빠르고 유연한 대응</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    소규모 팀이라 고객별 상황에 맞춰 유연하게 접근하고,
                    불필요한 컨설팅 페이지 수를 늘리지 않습니다.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      복잡한 결재라인 없음
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      빠른 의사결정과 수정
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      고객 상황에 맞춘 조정
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* 지속적 지원 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">같은 팀의 연속 지원</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    컨설팅으로 끝나지 않고 실제 구축, 교육, 운영지원까지 
                    같은 팀이 연속해서 담당하므로 일관성 있는 서비스를 받을 수 있습니다.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-blue-600">
                      <ArrowRight className="h-3 w-3" />
                      <span>구축 지원</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowRight className="h-3 w-3" />
                      <span>교육 프로그램</span>
                    </div>
                    <div className="flex items-center gap-1 text-purple-600">
                      <ArrowRight className="h-3 w-3" />
                      <span>운영 지원</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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