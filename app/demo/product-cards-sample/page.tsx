'use client'

import { ProductCard3Step } from "@/components/ui/product-card-3-step"
import productsData from "@/data/products.json"

export default function ProductCardsSamplePage() {
  // Freshdesk 제품 데이터 추출
  const freshdesk = productsData["customer-experience"].find(
    (p) => p.id === "freshdesk"
  )

  // Google Workspace 제품 데이터 추출
  const googleWorkspace = productsData["collaboration-productivity"].find(
    (p) => p.id === "google-workspace"
  )

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container">
        {/* 페이지 헤더 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            제품 카드 샘플 데모
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            3단계 정보 노출 시스템을 가진 ProductCard3Step 컴포넌트 데모입니다.
            각 카드의 "더 알아보기" 버튼을 클릭하여 레벨 1 → 2 → 3 단계로 진행해보세요.
          </p>
        </div>

        {/* 사용 방법 안내 */}
        <div className="mb-12 p-6 bg-muted/50 rounded-lg border">
          <h2 className="text-lg font-semibold mb-3">💡 카드 사용 방법</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <strong className="text-primary">레벨 1 (파랑 배지):</strong> 제품 기본 정보 - 설명, 타겟 고객, 배포 방식, 주요 기능 3개
            </li>
            <li>
              <strong className="text-green-600">레벨 2 (초록 배지):</strong> 상세 기능 목록 - 전체 기능을 아이콘과 설명으로 제공 (스크롤 가능)
            </li>
            <li>
              <strong className="text-orange-600">레벨 3 (주황 배지):</strong> 고급 정보 - 시스템 요구사항, 보안/규정 준수, 통합 연동, 3개 CTA 버튼
            </li>
            <li className="pt-2">
              • 하단의 점(●)을 클릭하여 원하는 레벨로 바로 이동할 수 있습니다
            </li>
            <li>
              • "이전" / "다음" 버튼으로 단계를 이동할 수 있습니다
            </li>
          </ul>
        </div>

        {/* 제품 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Freshdesk 카드 */}
          {freshdesk && <ProductCard3Step product={freshdesk} />}

          {/* Google Workspace 카드 */}
          {googleWorkspace && <ProductCard3Step product={googleWorkspace} />}
        </div>

        {/* 하단 설명 */}
        <div className="mt-16 p-8 bg-muted/30 rounded-lg border-l-4 border-l-primary">
          <h2 className="text-2xl font-bold mb-4">🎯 제안 접근 방식</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">최소 수정 방식 (권장):</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Tier 1:</strong> <code className="bg-muted px-1 py-0.5 rounded">/solutions</code> - 3개 카테고리 개요 카드
              </li>
              <li>
                <strong>Tier 2:</strong> <code className="bg-muted px-1 py-0.5 rounded">/solutions/{`{category}`}</code> - ProductCard3Step으로 각 제품 표시
              </li>
              <li>
                <strong>Tier 3:</strong> 카드 내부 3단계 정보 노출 (위에서 체험한 시스템)
              </li>
            </ul>
            <p className="pt-4">
              이 방식의 장점:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>개별 제품 페이지 14개를 유지보수할 필요 없음</li>
              <li>ProductCard3Step가 모든 제품 정보, CTA, 가격 모달을 제공</li>
              <li>일관된 UX로 모든 제품을 동일하게 표시</li>
              <li>낮은 유지보수 비용</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
