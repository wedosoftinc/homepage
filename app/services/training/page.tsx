"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRightIcon as ArrowRight,
  CheckCircleIcon as CheckCircle,
  UsersIcon as Users,
  BookOpenIcon as BookOpen,
  ChatBubbleLeftRightIcon as MessageSquare,
  VideoCameraIcon as Video,
  TrophyIcon as Award,
  ClockIcon as Clock
} from "@heroicons/react/24/outline"

export default function TrainingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">홈</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">서비스</Link>
            <span>/</span>
            <span className="text-foreground font-medium">교육</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-3 h-3 mr-1" />
              Training & Education
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              잘 도입했다면,<br />
              <span className="text-primary">잘 쓰게 만들어야죠</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              SaaS 도입 성공의 핵심은 사용자 교육입니다.<br />
              25년 경험의 전문가가 설계한 맞춤형 교육 프로그램으로 투자 효과를 극대화하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  교육 프로그램 상담
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  교육 가격 보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Training Programs */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              실무 중심
              <span className="text-primary"> 맞춤형 교육</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              각 직무와 역할에 최적화된 교육 커리큘럼으로
              모든 사용자가 전문가 수준의 활용 능력을 갖출 수 있도록 지원합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">관리자 교육</CardTitle>
                <CardDescription>
                  시스템 관리자와 팀 리더를 위한 고급 설정 및 관리 교육
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    시스템 설정 및 커스터마이징
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    사용자 권한 관리
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    워크플로우 설계
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    리포팅 및 분석
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">일반 사용자 교육</CardTitle>
                <CardDescription>
                  모든 사용자가 기본 기능을 효과적으로 활용할 수 있도록 하는 교육
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    기본 인터페이스 이해
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    핵심 기능 활용법
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    효율적인 업무 플로우
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    팁 & 트릭
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">온라인 교육</CardTitle>
                <CardDescription>
                  언제 어디서나 학습할 수 있는 온라인 교육 플랫폼 제공
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    HD 영상 강의
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    단계별 실습 자료
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    진도 관리 시스템
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    수료증 발급
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">맞춤형 워크숍</CardTitle>
                <CardDescription>
                  기업의 특정 요구사항에 맞춘 집중 워크숍 프로그램
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    업종별 맞춤 커리큘럼
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실제 업무 시나리오 교육
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Q&A 및 토론
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    후속 지원
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">인증 과정</CardTitle>
                <CardDescription>
                  공식 인증서를 취득할 수 있는 전문가 과정
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    벤더 공식 인증 과정
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    체계적인 학습 로드맵
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    모의시험 및 실습
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    인증서 취득 지원
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">지속 지원</CardTitle>
                <CardDescription>
                  교육 완료 후에도 지속적인 학습 지원과 업데이트 교육
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    정기 리프레시 교육
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    신기능 업데이트 교육
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    온라인 Q&A 지원
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    학습 자료 업데이트
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
            투자한 SaaS, 100% 활용하고 계신가요?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            전문적인 교육을 통해 사용자 만족도와 업무 효율성을 극대화하세요.
            맞춤형 교육 프로그램으로 SaaS 투자 효과를 배가시켜드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                교육 프로그램 상담
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