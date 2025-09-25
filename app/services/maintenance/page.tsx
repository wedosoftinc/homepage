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
  ArrowTrendingUpIcon as TrendingUp
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              도입 이후에도<br />
              <span className="text-primary">계속 곁에 있습니다</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              SaaS 도입은 시작일 뿐입니다. 지속적인 운영 지원과 최적화를 통해<br />
              장기적인 성공을 보장하는 것이 진짜 파트너십입니다.
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
              24/7 전문가
              <span className="text-primary"> 운영 지원</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              25년 경험의 전문가들이 귀하의 SaaS 환경을 지속적으로 모니터링하고
              최적화하여 안정적인 운영을 보장합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">24/7 기술 지원</CardTitle>
                <CardDescription>
                  언제든지 발생할 수 있는 기술적 문제를 신속하게 해결해드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    즉시 대응 헬프데스크
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    원격 기술 지원
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    문제 해결 가이드
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    예방적 모니터링
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">시스템 최적화</CardTitle>
                <CardDescription>
                  정기적인 성능 점검과 최적화로 최상의 시스템 상태를 유지합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    성능 모니터링
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    정기 점검 및 튜닝
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    용량 관리
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    보안 업데이트
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">지속적 개선</CardTitle>
                <CardDescription>
                  사용 패턴 분석을 통한 워크플로우 개선과 효율성 증대
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    사용량 분석 리포트
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    개선 방안 제안
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    신기능 활용 가이드
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    정기 컨설팅
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">보안 관리</CardTitle>
                <CardDescription>
                  지속적인 보안 모니터링과 위협 대응으로 안전한 환경을 보장합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    보안 상태 점검
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    취약점 스캔
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    보안 정책 업데이트
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    사고 대응 지원
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">정기 점검</CardTitle>
                <CardDescription>
                  정기적인 종합 점검으로 시스템 상태를 지속적으로 관리합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    월간 상태 리포트
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    분기별 종합 점검
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    연간 업그레이드 계획
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    예산 최적화 제안
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">전담 매니저</CardTitle>
                <CardDescription>
                  전담 고객 매니저가 귀하의 모든 요구사항을 일관되게 관리합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    1:1 전담 매니저 배정
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    정기 미팅 및 상담
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    요구사항 통합 관리
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    전략적 조언 제공
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
            안정적인 SaaS 운영, 혼자 하지 마세요
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            25년 경험의 전문가가 귀하의 SaaS 환경을 24시간 책임지고 관리합니다.
            전담 매니저와 함께하는 안심 운영 서비스를 경험해보세요.
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