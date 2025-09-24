"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  BarChart3,
  MessageSquare,
  Shield,
  Clock,
  Briefcase,
  TrendingUp,
  Globe,
  Settings
} from "lucide-react"

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">홈</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">서비스</Link>
            <span>/</span>
            <span className="text-foreground font-medium">컨설팅</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Target className="w-3 h-3 mr-1" />
              Strategic Consulting
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              도입 전에 물어야 할 질문들을,<br />
              <span className="text-primary">대신 생각해드립니다</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              25년간 4,000여 기업의 디지털 혁신을 이끌어온 전문가들이<br />
              귀하의 비즈니스에 최적화된 SaaS 도입 전략을 설계합니다
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
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              글로벌 SaaS 파트너십 기반
              <span className="text-primary"> 전략 컨설팅</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Freshworks, Google, Monday.com, Splashtop 공식 파트너로서 
              검증된 방법론과 실무 경험을 바탕으로 최적의 솔루션을 제안합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 비즈니스 분석 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">비즈니스 분석</CardTitle>
                <CardDescription>
                  현재 업무 프로세스와 시스템 현황을 면밀히 분석하여 개선점을 도출합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    현재 워크플로우 매핑
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    병목 지점 식별
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    ROI 예측 분석
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    리스크 평가
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 솔루션 설계 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">솔루션 설계</CardTitle>
                <CardDescription>
                  12개 글로벌 SaaS 제품 중 귀하의 비즈니스에 최적화된 조합을 설계합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    4개 벤더 포트폴리오 분석
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    맞춤형 아키텍처 설계
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    통합 시나리오 계획
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    확장성 고려 설계
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 전략 수립 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">도입 전략 수립</CardTitle>
                <CardDescription>
                  단계별 도입 계획과 변화 관리 전략을 구체적으로 수립합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    단계별 로드맵 작성
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    변화 관리 전략
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    교육 계획 수립
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    성공 지표 정의
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 비용 최적화 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">비용 최적화</CardTitle>
                <CardDescription>
                  라이선스 최적화와 운영 비용을 절감하는 방안을 제시합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    라이선스 최적화
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    운영 비용 절감
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    벤더 협상 지원
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    TCO 분석
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 위험 관리 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">위험 관리</CardTitle>
                <CardDescription>
                  도입 과정에서 발생할 수 있는 위험 요소를 사전에 식별하고 대응합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    위험 요소 식별
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    대응 방안 수립
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    백업 계획 준비
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    보안 검토
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
                <CardTitle className="text-xl">성과 측정 체계</CardTitle>
                <CardDescription>
                  도입 후 성과를 객관적으로 측정할 수 있는 KPI 체계를 구축합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    KPI 정의 및 설정
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    대시보드 구성
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    정기 리포팅 체계
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    개선 방안 도출
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                왜 위두소프트의 컨설팅을<br />
                <span className="text-primary">선택해야 할까요?</span>
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
                    <CardTitle className="text-xl">공식 파트너십</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    4개 글로벌 벤더의 공식 파트너로서 최신 제품 정보와 베스트 프랙티스를 보유하고 있습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Freshworks Partner</Badge>
                    <Badge variant="outline">Google Partner</Badge>
                    <Badge variant="outline">Monday.com Partner</Badge>
                    <Badge variant="outline">Splashtop Partner</Badge>
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
                    <CardTitle className="text-xl">25년 실무 경험</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    1999년부터 4,000여 기업의 디지털 혁신을 이끌어온 풍부한 경험과 노하우를 보유하고 있습니다.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-2xl text-primary">4,000+</div>
                      <div className="text-muted-foreground">프로젝트 수행</div>
                    </div>
                    <div>
                      <div className="font-semibold text-2xl text-primary">25년</div>
                      <div className="text-muted-foreground">경험 노하우</div>
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
                    <CardTitle className="text-xl">맞춤형 접근</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    천편일률적인 솔루션이 아닌, 각 기업의 고유한 상황과 목표에 맞춘 맞춤형 전략을 제공합니다.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      업종별 특화 솔루션
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      규모별 최적화
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      예산 고려 설계
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
                    <CardTitle className="text-xl">지속적 지원</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    컨설팅 완료 후에도 구축, 교육, 운영지원까지 원스톱 서비스로 지속적인 파트너십을 유지합니다.
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SaaS 도입, 혼자 고민하지 마세요
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            25년 경험의 전문가가 귀하의 비즈니스에 최적화된 솔루션을 찾아드립니다.
            무료 컨설팅으로 시작해보세요.
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
        <div className="container mx-auto px-4">
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