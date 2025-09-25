"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/common/breadcrumb"
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
      <div className="border-b bg-muted/20">
        <div className="container max-w-7xl py-4">
          <Breadcrumb
            items={[
              { title: "서비스", href: "/services" },
              { title: "교육" }
            ]}
          />
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
              구축만 하고 끝나면 90%는 제대로 쓰지 못합니다.<br />
              12개 제품을 실제로 쓰면서 알게 된 꿀팁들을 현실적인 업무 시나리오로 교육해드립니다.
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
              매뉴얼에 없는 진짜
              <span className="text-primary"> 사용법 교육</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              공식 문서에는 없지만 실제로 업무할 때 꼭 알아야 하는<br />
              실무 꿀팁과 숨겨진 기능들을 직접 경험한 사람이 알려드립니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">관리자 꿀팁 전수</CardTitle>
                <CardDescription>
                  시스템 관리하면서 "이런 걸 미리 알았으면" 싶었던 것들을 실제 관리 경험자가 알려드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    사용자들이 자주 물어보는 질문 미리 해결
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    권한 설정할 때 놓치기 쉬운 부분들
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    자동화 설정으로 관리 업무 줄이기
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    문제 생겼을 때 빠르게 해결하는 법
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">실무자를 위한 핵심 교육</CardTitle>
                <CardDescription>
                  "이것만 알면 된다"는 핵심 기능들과 실제 업무에서 자주 쓰이는 기능들 위주로 가르쳐드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    복잡한 기능 말고 정말 필요한 것만
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실제 업무 시나리오로 연습
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    시간 절약하는 단축키와 꿀팁
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실수하기 쉬운 부분 미리 체크
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">동영상 + 실습 교육</CardTitle>
                <CardDescription>
                  온라인으로 미리 기본기를 익히고, 실제 시스템에서 직접 해보면서 확실하게 배웁니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실제 화면 녹화로 따라하기 쉽게
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    테스트 계정으로 직접 실습
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    막히는 부분 1:1 질문 가능
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    회사별 맞춤 설정 가이드
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">우리 회사 맞춤 교육</CardTitle>
                <CardDescription>
                  회사의 실제 업무 프로세스와 데이터를 가지고 교육해서 바로 적용할 수 있게 만듭니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실제 회사 데이터로 교육 진행
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    회사별 업무 플로우 반영
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    현장에서 바로 써먹을 수 있는 내용
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    교육 후 실무 적용 지원
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">전문가 인증 준비</CardTitle>
                <CardDescription>
                  벤더 공식 인증 시험을 준비하는 분들을 위해 합격 노하우와 실무 경험을 함께 전수합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    시험에 나오는 포인트 집중 공략
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    실제 시험 환경과 유사한 모의시험
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    인증 후 실무 활용 가이드
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    재시험 지원 및 보완 교육
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">궁금한 것 언제든 물어보세요</CardTitle>
                <CardDescription>
                  교육 받고 끝이 아니라, 실제로 사용하면서 생기는 궁금한 점들을 언제든 물어볼 수 있습니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    카카오톡으로 간편 질문
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    업데이트 소식 및 새 기능 알림
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    다른 회사 사용 사례 공유
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    추가 교육 필요시 우선 연락
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Our Training Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                왜 우리 교육을 받으면<br />
                <span className="text-primary">정말 잘 쓰게 될까요?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">실제 현장 경험을 바탕으로</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    12개 제품을 실제로 운영하면서 겪은 "이런 건 매뉴얼에 없는데" 하는 
                    경험들을 교육에 녹여서 현실적으로 가르쳐드립니다.
                  </p>
                  <div className="text-sm space-y-1">
                    <div className="text-green-600">✓ 실무에서 자주 겪는 상황들 위주</div>
                    <div className="text-green-600">✓ 문제 해결 방법을 미리 알려드림</div>
                    <div className="text-green-600">✓ 시간 절약하는 꿀팁들 전수</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">사용자 눈높이에 맞춰서</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    IT 전문가가 아닌 일반 직장인들도 쉽게 이해할 수 있도록 
                    어려운 용어 없이 쉽고 친근하게 설명해드립니다.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-2xl text-primary">95%</div>
                      <div className="text-muted-foreground">교육 만족도</div>
                    </div>
                    <div>
                      <div className="font-semibold text-2xl text-primary">80%</div>
                      <div className="text-muted-foreground">실무 활용률</div>
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
            이제 진짜로 잘 써보시지 않겠어요?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            구축해놓고 제대로 못 쓰고 있다면, 이제 그만! 
            실제로 업무에 써먹을 수 있는 진짜 교육을 받아보세요.
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