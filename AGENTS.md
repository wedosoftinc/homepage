# AGENTS.md - We Do Soft Homepage Project

## [CRITICAL] 작업 지침

### 기본 원칙
1. **모든 소통은 반드시 한국어로만 진행**
2. **모든 제안과 작업은 사용자의 의견을 구하고 컨펌을 받은 후 시작**
3. **절대로 제안하는 순서대로 일일이 작업하여 모든 제안을 자동 실행하지 않음**

### 비즈니스 개요
- **B2B SaaS 전문 기업**: Google Workspace, Freshworks, Monday.com 등 글로벌 SaaS 솔루션을 국내외 기업에 공급
- **주요 타겟**: 기업, 조직 관리자, 협업 및 생산성 향상에 관심 있는 고객
- **주요 서비스**: 고객 경험 관리, 협업/생산성, IT 인프라, 컨설팅/구축/교육
- **브랜드 가치**: 신뢰성, 전문성, 글로벌 파트너십, 최신 IT 트렌드

### 프로젝트 핵심 방향
1. **B2B SaaS 전문성**이 드러나는 UI/UX
2. **신뢰와 안정감**을 주는 색상(Blue, Neutral)
3. **글로벌 표준 컴포넌트**(shadcn/ui 기반)
4. **기업 고객 중심 정보구조**(메가메뉴, 제품군별 섹션)
5. **확장성/유지보수성** 높은 Next.js 구조

---

## 📋 프로젝트 개요

### 프로젝트 목표
WordPress 기반 사이트를 Next.js로 리뉴얼하는 프로젝트. shadcn/ui 디자인 시스템을 기반으로 글로벌 SaaS 솔루션 판매 사이트를 구축.

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

## 📊 제품 구조

### 4개 주요 제품군
1. **고객 경험 & 세일즈 관리**: Freshdesk, Freshsales, Freshchat, Freddy AI
2. **협업 및 생산성 향상**: Monday Work Management, Monday Dev, Monday Sales CRM, Google Workspace
3. **IT 인프라 관리**: Freshservice, Splashtop
4. **컨설팅 & 전문 서비스**: 컨설팅, 구축, 교육

### 메뉴 구조
- 솔루션 (메가메뉴): 고객 경험, 협업/생산성, IT 인프라
- 서비스 (메가메뉴): 컨설팅, 구축, 교육
- 가격, 회사소개

---

## 🔧 기술 스택

### 개발 환경
```bash
npm install  # 의존성 설치
npm run dev  # 개발 서버 실행 (localhost:3000)
npm run build  # 빌드
```

### 주요 기술
- **Next.js 15** + TypeScript + Tailwind CSS
- **shadcn/ui**: 디자인 시스템 컴포넌트
- **Lucide React**: 아이콘 시스템
- **Pretendard**: 폰트 시스템

---

## 📝 개발 가이드라인

### 🚨 중요: 콘텐츠 무결성 규칙
**절대 지켜야 할 원칙:**
1. **원본 데이터 절대 준수**: XML 파일과 원본 사이트(wedosoft0527.mycafe24.com)에 있는 내용만 사용
2. **임의 콘텐츠 생성 금지**: 가상의 고객 후기, 임의의 통계, 존재하지 않는 서비스 내용 절대 생성 금지
3. **실제 정보만 사용**: 연락처, 주소, 회사 정보는 XML에서 확인된 정보만 사용
4. **Placeholder 명시**: 추후 추가될 콘텐츠는 명확히 "추후 추가 예정" 또는 "실제 데이터 필요" 표시

### 원본 데이터 소스
- **XML 파일**: `WordPress.2025-09-11.xml`, `wedosoft.WordPress.2025-09-11.xml`
- **원본 사이트**: https://wedosoft0527.mycafe24.com/
- **검증된 연락처**: 02-2135-3071, support@wedosoft.net, www.wedosoft.net
- **확인된 주소**: 서울시 마포구 양화로 186 5층

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

##  연락처 및 리소스

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

*이 문서는 프로젝트를 빠르게 파악하고 개발 지침을 제공합니다.*