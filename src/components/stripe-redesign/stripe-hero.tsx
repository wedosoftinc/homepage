'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function StripeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* 상단 뱃지 */}
          <div className="mb-8 inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
            Enterprise Solutions • Trusted by 1000+ companies
          </div>
          
          {/* 메인 헤딩 */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            비즈니스 성장을 위한{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              통합 솔루션
            </span>
          </h1>
          
          {/* 서브 헤딩 */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            ERP, CRM, HRM, SCM까지. 기업이 필요한 모든 시스템을 하나의 플랫폼에서 
            관리하세요. WeDoSoft와 함께 디지털 전환을 시작하세요.
          </p>
          
          {/* CTA 버튼들 */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full bg-slate-900 px-8 py-3 text-white hover:bg-slate-800 sm:w-auto">
              무료 체험 시작하기
            </Button>
            <Button variant="outline" size="lg" className="w-full px-8 py-3 sm:w-auto">
              영업팀 상담
            </Button>
          </div>
          
          {/* 신뢰성 지표 */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">1000+</div>
              <div className="text-sm text-slate-600">기업 고객</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">99.9%</div>
              <div className="text-sm text-slate-600">시스템 가용성</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-sm text-slate-600">기술 지원</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">ISO 27001</div>
              <div className="text-sm text-slate-600">보안 인증</div>
            </div>
          </div>
        </div>
        
        {/* 제품 미리보기 카드 */}
        <div className="mt-20">
          <Card className="mx-auto max-w-5xl overflow-hidden border-0 bg-white shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-900">WeDoSoft Dashboard</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">ERP 매출</span>
                      <span className="text-sm font-bold text-green-600">+12.5%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">CRM 활성 고객</span>
                      <span className="text-sm font-bold text-blue-600">2,847</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">HRM 직원 만족도</span>
                      <span className="text-sm font-bold text-purple-600">94%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="h-64 w-full rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-slate-300"></div>
                      <p className="text-sm text-slate-500">Dashboard Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
