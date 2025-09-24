"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Target,
  Settings,
  Users,
  Shield,
  CheckCircle,
  MessageSquare,
  Clock,
  Globe,
  TrendingUp
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">홈</Link>
            <span>/</span>
            <span className="text-foreground font-medium">전문 서비스</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-background dark:to-purple-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              <Globe className="w-3 h-3 mr-1" />
              Professional Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              도입부터 운영까지<br />
              <span className="text-foreground">25년 경험의 전문 서비스</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              4,000여 기업의 디지털 혁신을 이끌어온 위두소프트가<br />
              글로벌 SaaS 솔루션의 성공적인 정착을 위한 원스톱 서비스를 제공합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">
                  전문 서비스 상담
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

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              SaaS 성공의 핵심은<br />
              <span className="text-blue-600">올바른 프로세스</span>입니다
            </h2>
            <p className="text-xl text-muted-foreground">
              컨설팅부터 구축, 교육, 운영지원까지<br />
              체계적인 4단계 프로세스로 SaaS 도입의 성공을 보장합니다
            </p>
          </div>

          {/* Service Flow */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">컨설팅</h3>
                <p className="text-sm text-muted-foreground">
                  도입 전에 물어야 할 질문들을 대신 생각해드립니다
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">구축</h3>
                <p className="text-sm text-muted-foreground">
                  기술적인 설정은 우리 몫입니다
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">교육</h3>
                <p className="text-sm text-muted-foreground">
                  잘 도입했다면, 잘 쓰게 만들어야죠
                </p>
              </div>

              {/* Arrow down to step 4 */}
              <div className="md:col-span-4 flex justify-center my-6">
                <div className="border-l-2 border-dashed border-muted-foreground h-12 md:hidden"></div>
                <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
              </div>

              {/* Step 4 - Centered */}
              <div className="md:col-span-4 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">운영지원</h3>
                <p className="text-sm text-muted-foreground">
                  도입 이후에도 계속 곁에 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              전문 서비스 상세
            </h2>
            <p className="text-xl text-muted-foreground">
              각 단계별 전문 서비스로 SaaS 도입의 성공을 보장합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Consulting Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">Strategic</Badge>
                    <CardTitle className="text-2xl">컨설팅 서비스</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  도입 전에 물어야 할 질문들을, 대신 생각해드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>비즈니스 분석</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>솔루션 설계</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>도입 전략 수립</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>비용 최적화</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href="/services/consulting">
                        컨설팅 서비스 자세히 보기
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Settings className="h-7 w-7 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">Technical</Badge>
                    <CardTitle className="text-2xl">구축 서비스</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  기술적인 설정은 우리 몫입니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>시스템 설치 & 설정</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>데이터 마이그레이션</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>시스템 통합</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>보안 강화</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                      <Link href="/services/implementation">
                        구축 서비스 자세히 보기
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Training Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">Educational</Badge>
                    <CardTitle className="text-2xl">교육 서비스</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  잘 도입했다면, 잘 쓰게 만들어야죠
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>관리자 교육</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>사용자 교육</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>온라인 교육</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>인증 과정</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                      <Link href="/services/training">
                        교육 서비스 자세히 보기
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maintenance Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="h-7 w-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">Ongoing</Badge>
                    <CardTitle className="text-2xl">운영지원</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  도입 이후에도 계속 곁에 있습니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>24/7 기술 지원</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>시스템 최적화</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>보안 관리</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>전담 매니저</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                      <Link href="/services/maintenance">
                        운영지원 자세히 보기
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              왜 위두소프트의 전문 서비스를<br />
              <span className="text-blue-600">선택해야 할까요?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">공식 파트너십</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  4개 글로벌 벤더의 공식 파트너로서 최신 정보와 베스트 프랙티스를 보유
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline" className="text-xs">Freshworks</Badge>
                  <Badge variant="outline" className="text-xs">Google</Badge>
                  <Badge variant="outline" className="text-xs">Monday.com</Badge>
                  <Badge variant="outline" className="text-xs">Splashtop</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl">25년 실무 경험</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  1999년부터 4,000여 기업의 디지털 혁신을 이끌어온 풍부한 경험
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-green-600">4,000+</div>
                    <div className="text-muted-foreground">프로젝트</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">25년</div>
                    <div className="text-muted-foreground">경험</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">원스톱 서비스</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  컨설팅부터 운영지원까지 모든 과정을 한 곳에서 해결
                </p>
                <div className="flex justify-center">
                  <div className="text-2xl font-bold text-purple-600">1→4</div>
                  <div className="ml-2 text-muted-foreground text-sm flex items-center">단계 통합 지원</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SaaS 도입, 성공적으로 시작하세요
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            25년 경험의 전문가가 귀하의 비즈니스에 최적화된 SaaS 도입 전략부터 
            안정적인 운영까지 모든 과정을 책임집니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                전문 서비스 상담
                <MessageSquare className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
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