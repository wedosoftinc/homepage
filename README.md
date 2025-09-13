# We Do Soft Homepage

## 🚀 프로젝트 소개

**We Do Soft**는 글로벌 SaaS 솔루션을 제공하는 기업의 공식 홈페이지입니다. Next.js 15와 shadcn/ui를 기반으로 구축된 모던하고 반응형 웹사이트입니다.

### ✨ 주요 특징

- 🎨 **shadcn/ui 디자인 시스템** - 일관되고 접근성 높은 UI 컴포넌트
- 🌙 **다크/라이트 모드** - 사용자 선호에 따른 테마 전환
- 📱 **완전 반응형** - 모든 디바이스에서 최적화된 경험
- ⚡ **Next.js 15** - 최신 React 기반 프레임워크
- 🔧 **TypeScript** - 타입 안전성과 개발자 경험
- 🎯 **SEO 최적화** - 검색 엔진 친화적 구조

## 🏗 기술 스택

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (예정)

## 📦 설치 및 실행

### 개발 환경 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 로컬 개발 환경 설정

```bash
# 저장소 클론
git clone <repository-url>
cd homepage

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 사용 가능한 스크립트

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

## 📁 프로젝트 구조

```
homepage/
├── app/                          # Next.js App Router
│   ├── components/              # 컴포넌트 갤러리 페이지
│   ├── globals.css              # 글로벌 스타일
│   ├── layout.tsx               # 루트 레이아웃
│   └── page.tsx                 # 메인 페이지
├── components/                   # 재사용 컴포넌트
│   ├── navigation/              # 네비게이션 컴포넌트
│   ├── sections/                # 페이지 섹션들
│   └── ui/                      # shadcn/ui 기본 컴포넌트
├── lib/                         # 유틸리티 함수
├── styles/                      # 스타일 파일
└── public/                      # 정적 파일
```

## 🎨 디자인 시스템

### 색상 팔레트

프로젝트는 shadcn/ui의 표준 색상 시스템을 사용합니다:

- **Light Mode**: 깔끔하고 밝은 인터페이스
- **Dark Mode**: 어두운 배경과 높은 대비의 텍스트

### 컴포넌트

모든 UI 컴포넌트는 shadcn/ui를 기반으로 구현되어 일관성과 접근성을 보장합니다:

- 🧭 **Navigation**: 메가메뉴와 반응형 모바일 메뉴
- 🦸 **Hero Section**: 동적 그라디언트와 3D 효과
- 📦 **Product Cards**: 제품 정보와 기능 설명
- 💰 **Pricing Tables**: 탭 기반 가격 비교
- 📞 **CTA Section**: 다양한 연락 방법 제공

## 📱 페이지 구성

### 구현된 페이지
- `/` - 메인 홈페이지
- `/components` - 인터랙티브 컴포넌트 갤러리

### 계획된 페이지
- `/solutions/*` - 솔루션별 상세 페이지
- `/products/*` - 제품별 상세 페이지  
- `/services/*` - 서비스별 상세 페이지
- `/pricing` - 통합 가격 페이지
- `/company` - 회사 소개
- `/contact` - 연락처 및 문의 폼

## 🛠 주요 컴포넌트

### MainNavigation
```tsx
import { MainNavigation } from "@/components/navigation/main-navigation"

// 메가메뉴와 모바일 반응형 네비게이션
```

### HeroSection
```tsx
import { HeroSection } from "@/components/sections/hero-section"

// 3D 효과와 그라디언트 배경의 히어로 섹션
```

### ProductsSection
```tsx
import { ProductsSection } from "@/components/sections/products-section"

// 4개 제품군별 제품 소개 섹션
```

### PricingSection
```tsx
import { PricingSection } from "@/components/sections/pricing-section"

// 탭 기반 가격 테이블 컴포넌트
```

## 🎯 비즈니스 모델

We Do Soft는 다음 4개 영역의 글로벌 SaaS 솔루션을 제공합니다:

### 1. 고객 경험 & 세일즈 관리
- **Freshdesk**: 통합 고객 지원 플랫폼
- **Freshsales**: 스마트 CRM 솔루션
- **Freshchat**: 실시간 고객 채팅
- **Freddy AI**: AI 어시스턴트

### 2. 협업 및 생산성 향상
- **Monday Work Management**: 프로젝트 관리 플랫폼
- **Monday Dev**: 개발팀 전용 관리도구
- **Monday Sales CRM**: 세일즈 관리 시스템
- **Google Workspace**: 통합 협업 도구

### 3. IT 인프라 관리
- **Freshservice**: IT 서비스 관리
- **Splashtop**: 원격 접속 솔루션

### 4. 컨설팅 & 전문 서비스
- 디지털 전환 컨설팅
- 솔루션 구축 및 구현
- 교육 및 기술 지원

## 🔧 개발 가이드

### 코딩 컨벤션
- **TypeScript 엄격 모드** 사용
- **Server Components 우선**, 필요시에만 'use client' 사용
- **shadcn/ui 컴포넌트** 활용
- **Tailwind CSS 클래스** 사용, 인라인 스타일 금지

### 새 컴포넌트 추가
```bash
# shadcn/ui 컴포넌트 설치
npx shadcn-ui@latest add button

# 커스텀 컴포넌트 생성
# components/ 디렉토리에 적절한 위치에 생성
```

### 스타일링 가이드
```tsx
// 추천: CSS 변수 사용
<div className="bg-background text-foreground border-border">

// 피하기: 직접 색상값 사용
<div className="bg-gray-900 text-white border-gray-700">
```

## 📊 성능 및 최적화

- **Next.js App Router** 활용한 효율적인 라우팅
- **Server Components** 우선 사용으로 번들 크기 최적화
- **Tailwind CSS** 사용하지 않는 스타일 자동 제거
- **TypeScript** 컴파일 타임 오류 방지

## 🚀 배포

### GitHub Pages 배포 준비
```bash
# 정적 파일 생성
npm run build
npm run export  # (추후 설정 필요)
```

### 환경별 설정
- **개발환경**: `npm run dev`
- **스테이징**: GitHub Pages 자동 배포
- **프로덕션**: 도메인 연결 후 배포

## 🤝 기여하기

1. 이슈 생성 또는 기존 이슈 확인
2. 새 브랜치 생성 (`git checkout -b feature/새기능`)
3. 변경사항 커밋 (`git commit -m '새기능 추가'`)
4. 브랜치에 푸시 (`git push origin feature/새기능`)
5. Pull Request 생성

## 📄 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE) 하에 배포됩니다.

## 📞 연락처

- **회사**: We Do Soft
- **이메일**: contact@wedosoft.net  
- **전화**: 02-1234-5678
- **웹사이트**: [wedosoft.net](https://wedosoft.net)

---

**Built with ❤️ using Next.js, shadcn/ui, and TypeScript**