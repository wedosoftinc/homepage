"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/common/breadcrumb"
import Link from "next/link"
import {
  ArrowRightIcon as ArrowRight,
  CheckCircleIcon as CheckCircle,
  CogIcon as Settings,
  CircleStackIcon as Database,
  ChatBubbleLeftRightIcon as MessageSquare,
  ServerIcon as Server,
  CodeBracketIcon as Code
} from "@heroicons/react/24/outline"

export default function ImplementationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/20">
        <div className="container max-w-7xl py-4">
          <Breadcrumb
            items={[
              { title: "서비스", href: "/services" },
              { title: "구축" }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Settings className="w-3 h-3 mr-1" />
              Implementation & Setup
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              기술적인 설정은<br />
              <span className="text-primary">우리 몫입니다</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              매뉴얼만 보고 설정하면 90%는 실패합니다.<br />
              실제로 수백 번 구축해본 경험으로 한 번에 제대로 설정해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  구축 서비스 상담
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

      {/* Core Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              실패 없는 구축을 위한
              <span className="text-primary"> 실전 노하우</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              12개 제품 각각의 구축 함정과 해결법을 알고 있기 때문에<br />
              처음부터 올바르게 설정하여 나중에 다시 할 필요가 없습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">첫 설정부터 올바르게</CardTitle>
                <CardDescription>
                  매뉴얼대로 하면 놓치는 중요한 설정들을 처음부터 제대로 잡아서 나중에 문제가 생기지 않게 합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    한국 환경 최적화 설정
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    확장성 고려한 초기 구조
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실무진이 알아야 할 숨겨진 옵션들
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    나중에 바꾸기 어려운 설정 미리 고려
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">기존 시스템 연동</CardTitle>
                <CardDescription>
                  기존에 쓰던 시스템과의 연동에서 자주 발생하는 문제들을 미리 파악하고 해결책을 준비합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Excel, CSV 데이터 깔끔하게 정리
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    기존 이메일 계정 연동
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Active Directory 연결
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    API 연동 및 자동화 설정
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">제품간 연동 최적화</CardTitle>
                <CardDescription>
                  12개 제품을 서로 연결할 때 생기는 복잡한 설정들을 깔끔하게 정리해서 관리하기 쉽게 만듭니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Freshworks ↔ Google Workspace 연동
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Monday.com ↔ Freshdesk 티켓 연결
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Splashtop 원격지원 통합 설정
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Zapier/Make.com 자동화 구축
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 추가 카드들 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">사용자 권한 체계</CardTitle>
                <CardDescription>
                  누가 뭘 할 수 있는지 명확하게 정리해서 보안은 지키면서도 업무는 편하게 할 수 있도록 설정합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    역할별 권한 매트릭스 설계
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Single Sign-On (SSO) 구축
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    2단계 인증 설정
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    외부 협력사 계정 관리
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">워크플로우 자동화</CardTitle>
                <CardDescription>
                  반복되는 업무들을 자동으로 처리되도록 설정해서 실수도 줄이고 시간도 절약할 수 있게 만듭니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    티켓 자동 분류 및 배정
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    프로젝트 상태 자동 업데이트
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    정기 리포트 자동 생성
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    알림 및 에스컬레이션 규칙
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">테스트 및 검수</CardTitle>
                <CardDescription>
                  구축 완료 후 실제 업무 시나리오로 철저히 테스트해서 문제없이 운영될 수 있도록 검증합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실무 시나리오 테스트
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    성능 및 안정성 검증
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    사용자 피드백 반영
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    문서화 및 인수인계
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Our Implementation Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                왜 우리 구축이<br />
                <span className="text-primary">한번에 성공할까요?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">실패 사례를 알고 있습니다</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    다른 업체들이 실패한 이유와 고객들이 구축 후 겪는 문제점들을 미리 알고 있어서 
                    같은 실수를 반복하지 않습니다.
                  </p>
                  <div className="text-sm space-y-1">
                    <div className="text-red-600">❌ 권한 설정 실수로 보안 문제</div>
                    <div className="text-red-600">❌ 데이터 연동 오류로 중복 입력</div>
                    <div className="text-red-600">❌ 자동화 설정 누락으로 수작업 증가</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">검증된 템플릿 사용</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    수십 번의 구축 경험으로 만들어진 검증된 설정 템플릿을 사용해서 
                    빠르고 안정적으로 구축할 수 있습니다.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-2xl text-primary">7일</div>
                      <div className="text-muted-foreground">평균 구축 기간</div>
                    </div>
                    <div>
                      <div className="font-semibold text-2xl text-primary">99%</div>
                      <div className="text-muted-foreground">첫 구축 성공률</div>
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
            기술적인 것들은 이제 걱정하지 마세요
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            복잡한 설정과 연동 작업은 저희가 처리하고, 여러분은 완성된 시스템으로 
            바로 업무를 시작하시면 됩니다. 구축 과정의 모든 스트레스를 덜어드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                구축 서비스 상담
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