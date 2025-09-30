# 디자인 시스템 템플릿 가이드

## 📚 개요

모든 페이지에서 **일관된 디자인과 간격**을 유지하기 위한 템플릿 시스템입니다.  
**한 곳만 수정하면 전체 사이트에 적용**되는 구조입니다.

---

## 🎨 1. 디자인 토큰 (globals.css)

### 타이포그래피 유틸리티 클래스

```css
.heading-hero          /* 페이지 메인 타이틀 - text-3xl md:text-4xl lg:text-5xl */
.heading-section       /* 섹션 제목 - text-2xl md:text-3xl lg:text-4xl */
.heading-subsection    /* 서브섹션 제목 - text-xl md:text-2xl lg:text-3xl */
.heading-card          /* 카드 제목 - text-lg md:text-xl */

.text-body-large       /* 큰 본문 - text-lg md:text-xl + text-muted-foreground */
.text-body-medium      /* 중간 본문 - text-base md:text-lg + text-muted-foreground */
```

**장점**: 폰트 크기를 바꾸려면 `globals.css`만 수정하면 끝!

### 섹션 간격 시스템

```css
.section-spacing         /* 기본 간격 - py-16 md:py-20 lg:py-24 */
.section-spacing-small   /* 작은 간격 - py-12 md:py-16 lg:py-20 */
.section-spacing-large   /* 큰 간격 - py-20 md:py-24 lg:py-32 */
```

### 배경 패턴

```css
.section-bg-primary     /* 기본 배경 - bg-background */
.section-bg-muted       /* 연한 배경 - bg-muted/30 */
.section-bg-gradient    /* 그라데이션 - bg-gradient-to-b from-muted/30 to-background */
.section-bg-accent      /* 강조 배경 - 그라데이션 accent */
```

### 컨테이너 시스템

```css
.section-container         /* 기본 - container mx-auto */
.section-container-narrow  /* 좁은 - container mx-auto max-w-4xl */
.section-container-wide    /* 넓은 - container mx-auto max-w-7xl */
```

### 카드 그리드

```css
.card-grid-2   /* 2열 그리드 - grid md:grid-cols-2 gap-6 md:gap-8 */
.card-grid-3   /* 3열 그리드 - grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 */
.card-grid-4   /* 4열 그리드 - grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 */
```

### 공통 카드 스타일

```css
.card-hover      /* 호버 효과 - hover:shadow-lg hover:-translate-y-1 */
.card-bordered   /* 테두리 - border-2 border-border hover:border-primary/20 */
```

---

## 🧩 2. 섹션 컴포넌트

### PageHero - 페이지 히어로 섹션

**용도**: 모든 페이지의 상단 영역 표준화

```tsx
import { PageHero } from '@/components/sections'

<PageHero
  badge={{ icon: SparklesIcon, text: "Solutions" }}
  title={<>고객의 <span className="text-primary">마음을 사로잡는</span> 경험</>}
  subtitle="Freshworks의 AI 기반 통합 플랫폼으로..."
  buttons={{
    primary: { text: "무료 상담 받기", href: "/contact", icon: HeartIcon },
    secondary: { text: "가격 정보", href: "/pricing" }
  }}
  className="bg-gradient-to-br from-primary/5 via-background to-secondary/5"
/>
```

**Props**:
- `badge?`: 아이콘 + 텍스트 배지
- `title`: 제목 (ReactNode - JSX 가능)
- `subtitle`: 부제목
- `buttons?`: primary/secondary 버튼
- `className?`: 추가 스타일

### ContentSection - 콘텐츠 섹션

**용도**: 제목, 부제목, 콘텐츠를 포함하는 표준 섹션

```tsx
import { ContentSection } from '@/components/sections'

<ContentSection
  title="왜 고객 경험이 중요할까요?"
  subtitle="뛰어난 고객 경험은 단순한 서비스를 넘어..."
  background="muted"          // "default" | "muted" | "gradient" | "accent"
  spacing="large"             // "small" | "default" | "large"
  containerWidth="narrow"     // "default" | "narrow" | "wide"
  headerSize="large"          // "default" | "large"
>
  <div className="card-grid-3">
    <Card>...</Card>
    <Card>...</Card>
    <Card>...</Card>
  </div>
</ContentSection>
```

**Props**:
- `title`: 섹션 제목 (자동으로 `.heading-section` 적용)
- `subtitle?`: 부제목
- `children`: 섹션 내용
- `background?`: 배경 스타일
- `spacing?`: 위아래 간격
- `containerWidth?`: 컨테이너 너비
- `headerSize?`: 헤더 크기

### PageCTASection - 행동 유도 섹션

**용도**: 페이지 하단 CTA 섹션 표준화

```tsx
import { PageCTASection } from '@/components/sections'

<PageCTASection
  title="고객 경험 혁신을 시작하세요"
  description="전문 컨설턴트가 귀하의 비즈니스에 최적화된..."
  buttons={{
    primary: { text: "무료 상담 신청", href: "/contact" },
    secondary: { text: "가격 정보", href: "/pricing" }
  }}
  background="accent"  // "default" | "accent"
/>
```

---

## 📝 3. 사용 예시

### Before (기존 방식) - 260라인

```tsx
<section className="py-20 lg:py-32">
  <div className="container">
    <div className="max-w-3xl mx-auto text-center space-y-16">
      <div className="space-y-6">
        <h2 className="text-4xl lg:text-5xl font-bold">
          왜 고객 경험이 중요할까요?
        </h2>
        <p className="text-xl text-muted-foreground">
          뛰어난 고객 경험은...
        </p>
      </div>
      {/* 카드 그리드... */}
    </div>
  </div>
</section>
```

### After (새 방식) - 15라인

```tsx
<ContentSection
  title="왜 고객 경험이 중요할까요?"
  subtitle="뛰어난 고객 경험은..."
  spacing="large"
  containerWidth="narrow"
>
  <div className="card-grid-3">
    {/* 카드들... */}
  </div>
</ContentSection>
```

**코드 감소**: 260라인 → 120라인 (54% 감소)  
**유지보수**: 한 곳만 수정하면 모든 페이지 적용

---

## 🎯 4. 일반적인 페이지 구조

```tsx
import { PageHero, ContentSection, PageCTASection } from '@/components/sections'

export default function SolutionPage() {
  return (
    <>
      {/* 1. 히어로 섹션 */}
      <PageHero
        badge={{ text: "Solutions" }}
        title="메인 타이틀"
        subtitle="설명..."
        buttons={{ primary: {...}, secondary: {...} }}
      />

      {/* 2. 가치 제안 섹션 */}
      <ContentSection
        title="왜 필요한가요?"
        subtitle="설명..."
        spacing="large"
      >
        <div className="card-grid-3">
          <Card>...</Card>
        </div>
      </ContentSection>

      {/* 3. 제품/서비스 섹션 */}
      <ContentSection
        title="솔루션 소개"
        subtitle="상세 설명..."
        background="gradient"
        spacing="large"
      >
        <div className="card-grid-3">
          {/* 제품 카드들... */}
        </div>
      </ContentSection>

      {/* 4. 통계/실적 섹션 */}
      <ContentSection
        title="수치로 증명된 성과"
        subtitle="실제 성과 지표"
        containerWidth="narrow"
      >
        <div className="card-grid-3">
          {/* 통계 카드들... */}
        </div>
      </ContentSection>

      {/* 5. CTA 섹션 */}
      <PageCTASection
        title="지금 시작하세요"
        description="무료 상담..."
        buttons={{ primary: {...}, secondary: {...} }}
        background="accent"
      />
    </>
  )
}
```

---

## 💡 5. 전역 수정 방법

### 모든 페이지의 타이틀 크기를 한 번에 바꾸려면?

**`app/globals.css` 파일 수정** (1곳만!)

```css
.heading-hero {
  @apply text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight;
  /* 기존: text-3xl md:text-4xl lg:text-5xl */
  /* 전체 사이트의 모든 히어로 타이틀이 동시에 작아짐! */
}
```

### 모든 섹션의 간격을 넓히려면?

```css
.section-spacing {
  @apply py-20 md:py-24 lg:py-28;
  /* 기존: py-16 md:py-20 lg:py-24 */
}
```

### 모든 카드의 간격을 줄이려면?

```css
.card-grid-3 {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6;
  /* 기존: gap-6 md:gap-8 */
}
```

---

## ✅ 6. 장점 요약

1. **일관성**: 모든 페이지가 동일한 디자인 언어 사용
2. **효율성**: 코드 50% 이상 감소
3. **유지보수**: 한 곳만 수정하면 전체 적용
4. **확장성**: 새 페이지 만들 때 빠르게 구성
5. **가독성**: 코드가 간결하고 의미 명확

---

## 🔗 7. 파일 위치

- **디자인 토큰**: `/app/globals.css` (라인 299부터)
- **섹션 컴포넌트**: `/components/sections/`
  - `page-hero.tsx`
  - `content-section.tsx`
  - `page-cta-section.tsx`
  - `index.ts` (통합 export)

---

**이제 타이틀 크기나 섹션 간격을 바꾸려면 `globals.css` 파일 하나만 수정하면 됩니다!** 🎉
