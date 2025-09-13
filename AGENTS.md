# AGENTS.md - We Do Soft Homepage Project

## 🧩 XML 기반 비즈니스 분석 및 shadcn/ui 방향성

### XML 분석 요약
WordPress.2025-09-11.xml을 기반으로 위두소프트의 비즈니스 모델은 다음과 같습니다:

- **B2B SaaS 전문 기업**: Google Workspace, Freshworks, Monday.com 등 글로벌 SaaS 솔루션을 국내외 기업에 공급
- **주요 타겟**: 기업, 조직, IT 관리자, 협업 및 생산성 향상에 관심 있는 고객
- **주요 서비스**: 고객 경험 관리, 협업/생산성, IT 인프라, 컨설팅/구축/교육
- **브랜드 가치**: 신뢰성, 전문성, 글로벌 파트너십, 최신 IT 트렌드

### shadcn/ui 적용 전략
- **디자인 시스템**: shadcn/ui의 HSL 기반 색상 팔레트와 컴포넌트 시스템을 활용해, 글로벌 SaaS 기업에 어울리는 신뢰감과 전문성 강조
- **추천 색상**: Blue 테마(신뢰, 안정, 글로벌 IT 표준) + 기본/중성 색상(콘텐츠 집중)
- **컴포넌트 구조**: 메가메뉴, 제품/서비스 카드, 가격 테이블, CTA 등 B2B SaaS에 최적화된 UI 설계
- **접근성/반응성**: shadcn/ui의 접근성 표준과 반응형 디자인을 적극 활용
- **브랜드 일관성**: Google Workspace, Freshworks 등 파트너사와의 색상/스타일 조화

### 프로젝트 핵심 방향
1. **B2B SaaS 전문성**이 드러나는 UI/UX
2. **신뢰와 안정감**을 주는 색상(Blue, Neutral)
3. **글로벌 표준 컴포넌트**(shadcn/ui 기반)
4. **기업 고객 중심 정보구조**(메가메뉴, 제품군별 섹션)
5. **확장성/유지보수성** 높은 Next.js 구조

---

## 📋 프로젝트 개요

### 프로젝트 목표
WordPress 기반 사이트를 GitHub Pages 기반 Next.js로 리뉴얼하는 프로젝트입니다. shadcn/ui 디자인 시스템을 기반으로 모던하고 세련된 글로벌 SaaS 솔루션 판매 사이트를 구축했습니다.

### 주요 특징
- **기술 스택**: Next.js 15 + TypeScript + shadcn/ui + Tailwind CSS
- **디자인 시스템**: shadcn/ui 기반 HSL 색상 팔레트
- **콘텐츠**: WordPress XML에서 추출한 한국어 콘텐츠
- **컴포넌트**: 재사용 가능한 모듈화된 컴포넌트 시스템

---

## 🏗 프로젝트 구조

```
homepage/
├── app/                          # Next.js App Router
│   ├── components/              # 컴포넌트 갤러리 페이지
│   │   └── page.tsx
│   ├── globals.css              # Tailwind + shadcn 스타일
│   ├── layout.tsx               # 루트 레이아웃
│   └── page.tsx                 # 메인 홈페이지
├── components/                   # 재사용 컴포넌트
│   ├── navigation/
│   │   └── main-navigation.tsx  # 메가메뉴 네비게이션
│   ├── sections/                # 페이지 섹션들
│   │   ├── hero-section.tsx     # 히어로 섹션
│   │   ├── products-section.tsx # 제품 소개
│   │   ├── pricing-section.tsx  # 가격 테이블
│   │   └── cta-section.tsx      # CTA 섹션
│   └── ui/                      # shadcn/ui 기본 컴포넌트
├── lib/
│   └── utils.ts                 # shadcn 유틸리티
├── styles/
│   └── global.css               # shadcn/ui 기반 CSS 변수
├── WordPress.2025-09-11.xml     # 원본 콘텐츠
├── wedosoft.WordPress.2025-09-11.xml # 원본 콘텐츠
└── components.json              # shadcn 설정
```

---

## 🎨 디자인 시스템

### 색상 팔레트 (shadcn/ui 기반)
프로젝트는 shadcn/ui의 표준 색상 시스템을 사용하여 일관성 있고 접근성이 뛰어난 UI를 제공합니다.

**주요 색상 (HSL 형식):**
- **Light Mode:**
  - `--background`: 0 0% 100% - 메인 배경 (흰색)
  - `--foreground`: 222.2 84% 4.9% - 메인 텍스트 (진한 회색)
  - `--primary`: 222.2 47.4% 11.2% - 브랜드 컬러 (진한 파랑)

- **Dark Mode:**
  - `--background`: 222.2 84% 4.9% - 메인 배경 (진한 회색)
  - `--foreground`: 210 40% 98% - 메인 텍스트 (밝은 회색)
  - `--primary`: 210 40% 98% - 브랜드 컬러 (밝은 파랑)

**위치**: `/styles/global.css` 파일에 모든 CSS 변수 정의

### 컴포넌트 라이브러리
- **shadcn/ui**: 기본 UI 컴포넌트 시스템
- **Lucide React**: 아이콘 시스템 (이모지 사용 금지)
- **Tailwind CSS**: 스타일링 유틸리티

---

## 📊 콘텐츠 구조

### 비즈니스 모델
글로벌 SaaS 솔루션 판매 사이트로, 4개 주요 제품군을 운영:

1. **고객 경험 & 세일즈 관리**
   - Freshdesk (고객 지원)
   - Freshsales (CRM)
   - Freshchat (실시간 채팅)
   - Freddy AI (AI 어시스턴트)

2. **협업 및 생산성 향상**
   - Monday Work Management
   - Monday Dev
   - Monday Sales CRM
   - Google Workspace

3. **IT 인프라 관리**
   - Freshservice (IT 서비스 관리)
   - Splashtop (원격 접속)

4. **컨설팅 & 전문 서비스**
   - 컨설팅 서비스
   - 구축 & 구현
   - 교육 & 지원

### 메뉴 구조
```
- 솔루션 (메가메뉴)
  ├── 고객 경험 & 세일즈 관리
  ├── 협업 및 생산성 향상
  └── IT 인프라 관리
- 서비스 (메가메뉴)
  ├── 컨설팅 서비스
  ├── 구축 & 구현
  └── 교육 & 지원
- 가격
- 회사소개
```

---

## 🔧 기술 세부사항

### 개발 환경 설정
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

### 주요 의존성
```json
{
  "next": "^15.5.3",
  "react": "^18.3.1",
  "tailwindcss": "^3.4.0",
  "shadcn/ui": "latest",
  "lucide-react": "latest",
  "class-variance-authority": "latest",
  "clsx": "latest",
  "tailwindcss-animate": "latest"
}
```

### shadcn/ui 컴포넌트
설치된 컴포넌트들:
- navigation-menu (메가메뉴용)
- button
- card
- dropdown-menu
- hover-card
- tabs (가격 테이블용)
- separator
- sheet (모바일 메뉴용)
- badge
- scroll-area

---

## 📱 구현된 컴포넌트

### 1. MainNavigation (`components/navigation/main-navigation.tsx`)
**기능:**
- 고정 헤더 (sticky)
- 투명 배경 (backdrop-blur)
- 메가메뉴 (솔루션, 서비스)
- 반응형 모바일 메뉴
- Client Component ('use client')

**주요 특징:**
- NavigationMenu 컴포넌트 사용
- 메가메뉴는 적당한 크기 (full-width 아님)
- Sheet 컴포넌트로 모바일 사이드바

### 2. HeroSection (`components/sections/hero-section.tsx`)
**기능:**
- shadcn/ui 스타일 3D 효과
- 그라디언트 배경
- 페이드아웃 효과
- 플로팅 카드 요소
- 스크롤 인디케이터

**주요 특징:**
- 배경 그리드 패턴
- 그라디언트 텍스트 효과
- 통계 정보 표시
- 임시 샘플 이미지 (추후 교체 예정)

### 3. ProductsSection (`components/sections/products-section.tsx`)
**기능:**
- 4개 제품군 표시
- 각 제품별 상세 정보
- 가격 보기 링크 (가격 테이블 연동)
- 기능 체크리스트

**주요 특징:**
- Card 컴포넌트 그리드
- Badge로 제품 라벨링
- CheckCircle 아이콘으로 기능 표시
- 카테고리별 그룹핑

### 4. PricingSection (`components/sections/pricing-section.tsx`)
**기능:**
- 4개 탭 (제품군별)
- 각 탭당 3개 가격 플랜
- 추천 플랜 하이라이트
- 기능 비교표

**주요 특징:**
- Tabs 컴포넌트 사용
- 동적 탭 전환 (useState)
- 추천 플랜 시각적 강조
- Check 아이콘 기능 리스트

### 5. CTASection (`components/sections/cta-section.tsx`)
**기능:**
- 다양한 연락 방법
- 통계 정보
- 부가 정보 링크

**주요 특징:**
- 3가지 CTA 옵션
- 연락처 정보 카드
- 신뢰도 통계 표시

---

## 🔄 작업 플로우

### 현재 완료된 작업
1. ✅ WordPress XML 분석 및 콘텐츠 추출
2. ✅ Next.js + shadcn/ui 프로젝트 설정
3. ✅ shadcn/ui 디자인 시스템 적용
4. ✅ 네비게이션 컴포넌트 (메가메뉴 포함)
5. ✅ 히어로 섹션 (3D 효과)
6. ✅ 제품 소개 섹션
7. ✅ 가격 테이블 (4개 탭)
8. ✅ CTA 섹션
9. ✅ 인터랙티브 컴포넌트 갤러리 페이지 (`/components`)
10. ✅ 다크/라이트 모드 지원

### 앞으로 해야 할 작업
1. **이미지 교체**: 히어로 섹션 샘플 이미지를 실제 이미지로 교체
2. **라우팅**: 개별 제품 페이지 구현 (`/products/*`)
3. **솔루션 페이지**: 제품군별 상세 페이지 (`/solutions/*`)
4. **서비스 페이지**: 서비스별 상세 페이지 (`/services/*`)
5. **회사 소개**: `/company` 페이지 구현
6. **연락처**: `/contact` 페이지 및 폼 구현
7. **SEO 최적화**: 메타데이터 및 구조화된 데이터
8. **성능 최적화**: 이미지 최적화, 코드 스플리팅
9. **애니메이션**: 스크롤 애니메이션 및 인터랙션 개선
10. **데이터 연동**: 실제 가격 정보 API 연동 (필요시)

---

## 🐛 알려진 이슈 및 해결방법

### 1. Tailwind CSS 버전 이슈
**문제**: 초기에 Tailwind v4가 설치되어 @tailwind 구문 오류 발생
**해결**: v3.4.0으로 다운그레이드
```bash
npm uninstall tailwindcss && npm install tailwindcss@^3.4.0
```

### 2. Next.js 설정 경고
**문제**: next.config.js에서 experimental.appDir 설정 경고
**해결**: Next.js 15에서는 App Router가 기본이므로 설정 제거

### 3. Link 컴포넌트 경고
**문제**: legacyBehavior deprecated 경고
**해결**: 향후 codemod 실행 예정
```bash
npx @next/codemod@latest new-link .
```

---

## 📝 개발 가이드라인

### 코딩 컨벤션
1. **컴포넌트 명명**: PascalCase (예: `MainNavigation`)
2. **파일 명명**: kebab-case (예: `main-navigation.tsx`)
3. **TypeScript 엄격 모드** 사용
4. **Server Components 우선**: 필요시에만 'use client' 사용
5. **아이콘**: Lucide React 사용, 이모지 금지
6. **스타일링**: Tailwind CSS 클래스 사용, 인라인 스타일 금지

### 컴포넌트 구조
```tsx
'use client' // 필요시에만 추가

import { ComponentName } from "@/components/ui/component-name"
import { IconName } from "lucide-react"

interface Props {
  // 타입 정의
}

export function ComponentName({ prop }: Props) {
  return (
    <div className="tailwind-classes">
      {/* JSX 구조 */}
    </div>
  )
}
```

### 색상 사용법
```tsx
// 올바른 방법: CSS 변수 사용
<div className="bg-background text-foreground border-border">

// 피해야 할 방법: 직접 색상값
<div className="bg-gray-900 text-white border-gray-700">
```

---

## 🔍 디버깅 및 유지보수

### 로컬 개발 서버
```bash
npm run dev
# http://localhost:3000 에서 확인
```

### 주요 확인 포인트
1. **컴포넌트 갤러리**: `http://localhost:3000/components`
2. **메인 페이지**: `http://localhost:3000`
3. **네비게이션 작동**: 메가메뉴 및 모바일 메뉴
4. **반응형 디자인**: 다양한 화면 크기에서 테스트

### 자주 사용하는 개발 도구
- **VS Code Extensions**: 
  - Tailwind CSS IntelliSense
  - TypeScript Hero
  - Auto Rename Tag
- **브라우저 개발자 도구**: 반응형 테스트
- **Lighthouse**: 성능 및 접근성 체크

---

## 📞 연락처 및 리소스

### 관련 문서 및 링크
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Themes](https://ui.shadcn.com/themes) - 디자인 참조
- [Lucide Icons](https://lucide.dev) - 아이콘 검색

### 프로젝트 파일 위치
- **원본 WordPress 데이터**: `/WordPress.2025-09-11.xml`, `/wedosoft.WordPress.2025-09-11.xml`
- **디자인 시스템**: `/styles/global.css`
- **컴포넌트**: `/components/` 디렉토리
- **페이지**: `/app/` 디렉토리

---

## 🚀 배포 준비사항

### GitHub Pages 배포
1. **Static Export 설정**: next.config.js에 export 옵션 추가
2. **이미지 최적화**: Next.js Image 컴포넌트 설정 수정
3. **환경변수**: 필요한 환경변수 설정
4. **GitHub Actions**: 자동 배포 워크플로우 설정

### 성능 최적화 체크리스트
- [ ] 이미지 최적화 (WebP, AVIF)
- [ ] 코드 스플리팅 확인
- [ ] 번들 크기 분석
- [ ] 접근성 테스트 (a11y)
- [ ] SEO 메타데이터 완성
- [ ] Core Web Vitals 측정

---

*이 문서는 프로젝트의 현재 상태를 정확히 반영하며, 새로운 개발자가 빠르게 프로젝트를 이해하고 개발을 이어갈 수 있도록 작성되었습니다.*

**Last Updated**: 2025년 1월 15일  
**Project Status**: shadcn/ui 기반 컴포넌트 시스템 완료, 추가 페이지 및 기능 개발 필요