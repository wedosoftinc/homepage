"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/common/breadcrumb"
import Link from "next/link"
import {
  ArrowRightIcon as ArrowRight,
  CheckCircleIcon as CheckCircle,
  ShieldCheckIcon as Shield,
  PhoneIcon as HeadphonesIcon,
  ChatBubbleLeftRightIcon as MessageSquare,
  ClockIcon as Clock,
  CogIcon as Settings,
  ArrowTrendingUpIcon as TrendingUp,
  UsersIcon as Users
} from "@heroicons/react/24/outline"

export default function MaintenancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/20">
        <div className="container max-w-7xl py-4">
          <Breadcrumb
            items={[
              { title: "서비스", href: "/services" },
              { title: "운영지원" }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-3 h-3 mr-1" />
              Maintenance & Support
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              도입 이후에도<br />
              <span className="text-primary">계속 곁에 있습니다</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              대기업처럼 담당자가 계속 바뀌지 않습니다.<br />
              처음 구축한 사람이 계속 책임지고 관리해드리니까 안심하고 맡기세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  운영지원 상담
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  지원 가격 보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Support Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              같은 사람이 계속
              <span className="text-primary"> 책임지고 관리</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              구축한 사람이 그대로 운영지원까지 담당하니까<br />
              시스템을 잘 알고 있어서 문제 해결이 빠르고 정확합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">전화 한 통이면 해결</CardTitle>
                <CardDescription>
                  복잡한 티켓 시스템 없이 전화나 카톡으로 바로 연락하면 아는 사람이 바로 도와드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    전화, 카톡, 이메일 편한 방법으로
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    시스템 아는 사람이 직접 대응
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    원격 접속으로 직접 해결
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    문제 발생 전 미리미리 체크
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">더 좋게 쓸 수 있는 방법 제안</CardTitle>
                <CardDescription>
                  사용하시는 모습을 보고 "이렇게 하시면 더 편할 것 같은데요" 하고 먼저 제안해드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    느려지거나 이상한 부분 먼저 발견
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    더 효율적인 사용법 제안
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    새로운 기능 나오면 바로 안내
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    보안 설정 정기 점검
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">점점 더 잘 쓰실 수 있도록</CardTitle>
                <CardDescription>
                  처음엔 기본 기능만 쓰시다가 점점 고급 기능까지 활용하실 수 있도록 단계별로 가이드해드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    매월 사용 현황 리포트
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    더 효율적인 방법 제안
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    새 기능 활용법 안내
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    분기별 개선 컨설팅
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">보안도 알아서 챙겨드립니다</CardTitle>
                <CardDescription>
                  보안 관련해서 어려운 건 신경 쓰지 마시고, 중요한 설정 변경이나 위험한 상황은 미리 알려드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    위험한 로그인 시도 모니터링
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    권한 설정 정기 검토
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    중요 보안 업데이트 알림
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    문제 발생 시 즉시 대응
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">정기적으로 안부 인사</CardTitle>
                <CardDescription>
                  몇 달에 한 번씩 "잘 쓰고 계신가요?" 하고 연락드려서 불편한 점은 없는지 체크해드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    "잘 쓰고 계신가요?" 정기 연락
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    불편한 점 없는지 체크
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    새로운 기능 소개
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    비용 절약 방안 제안
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">아는 사람이 계속 담당</CardTitle>
                <CardDescription>
                  처음부터 끝까지 같은 담당자가 관리해서 매번 상황 설명할 필요 없이 편하게 연락하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    담당자 휴대폰 번호 직접 제공
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    시스템 히스토리를 모두 기억
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    회사 상황을 이해하고 조언
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    담당자가 바뀌지 않음
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Long-term Partnership Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                왜 저희와 계속<br />
                <span className="text-primary">함께 하시는 걸까요?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">편하게 연락할 수 있어서</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    복잡한 콜센터나 티켓 시스템 없이 전화나 카톡으로 바로 연락하면 
                    아는 사람이 바로 답해주니까 스트레스가 없습니다.
                  </p>
                  <div className="text-sm space-y-1">
                    <div className="text-green-600">✓ 담당자 직통 번호 제공</div>
                    <div className="text-green-600">✓ 카카오톡으로도 편하게 연락</div>
                    <div className="text-green-600">✓ 상황 설명할 필요 없이 바로 해결</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">사람이 안 바뀌어서</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    대기업처럼 담당자가 계속 바뀌지 않고 처음 구축한 사람이 
                    계속 관리해주니까 시스템을 잘 알고 있어서 안심됩니다.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-2xl text-primary">5년+</div>
                      <div className="text-muted-foreground">평균 담당 기간</div>
                    </div>
                    <div>
                      <div className="font-semibold text-2xl text-primary">98%</div>
                      <div className="text-muted-foreground">고객 유지율</div>
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
            이제 시스템 걱정은 저희가 할게요
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            복잡한 관리나 문제 해결은 저희가 알아서 하고, 
            여러분은 원래 업무에만 집중하시면 됩니다. 편하게 맡겨주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                운영지원 상담
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
    </div>
  )
}