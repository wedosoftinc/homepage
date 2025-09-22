# AGENTS.md - We Do Soft Homepage Project

## [CRITICAL] 모든 소통은 반드시 한국어로만 한다.

## 🧩 XML 기반 비즈니스 분석 및 shadcn/ui 방향성

### XML 분석 요약
WordPress.2025-09-11.xml을 기반으로 위두소프트의 비즈니스 모델은 다음과 같습니다:

- **B2B SaaS 전문 기업**: Google Workspace, Freshworks, Monday.com 등 글로벌 SaaS 솔루션을 국내외 기업에 공급
- **주요 타겟**: 기업, 조직#### 🛠 폰트 시스템 완성
- **Pretendard 완전 적용**: layout.tsx와 tailwind.config.js에서 나눔스퀘어 잔여 설정 제거
- **일관된 타이포그래피**: 사이트 전체에서 Pretendard 폰트만 사용하여 브랜드 일관성 확보
- **한글#### 🔗 4단계: 네비게이션 메뉴 연결
1. **메가메뉴 완성**: MainNavigation에서 솔루션/제품 페이지로 실제 라우팅 연결
2. **검색 기능 강화**: 현재 기본 검색을 제품명, 카테고리, 기능으로 확장
3. **사용자 플로우 최적화**: 홈 → 솔루션 → 제품 → 상담 경로 완성

#### 📄 5단계: 추가 필수 페이지 구현
1. **가격 페이지** (`/pricing`): 기존 PricingSection을 독립 페이지로 이전
2. **회사 소개** (`/company`): XML 기반 회사 정보와 팀 소개
3. **연락처** (`/contact`): 상담 신청 폼과 연락처 정보
4. **서비스 페이지** (`/services/*`): 컨설팅, 구축, 교육 서비스 상세

#### 🎯 6단계: 콘텐츠 품질 향상*: Variable font 기술로 최적화된 렌더링 품질 달성

### 2025년 9월 19일 오후 제품 페이지 개발 완료

#### 🎯 제품 페이지 템플릿 시스템 구축
- **ProductPageTemplate 컴포넌트**: 모든 제품 페이지에서 재사용 가능한 표준화된 템플릿 완성
- **브레드크럼 네비게이션**: 홈 > 제품 > [제품명] 경로 표시로 사용자 위치 명확화
- **공유 기능**: 모바일 네이티브 공유 API 지원으로 SNS 확산성 향상
- **아이콘 직렬화 문제 해결**: Server/Client Component 간 아이콘 전달을 문자열 매핑으로 해결
- **레이아웃 통합**: `/app/products/layout.tsx`로 모든 제품 페이지에 헤더/푸터 자동 적용

#### 📱 완성된 제품 페이지 (5개)
1. **Monday Service** (`/products/monday-service`) - AI 기반 서비스 관리 플랫폼
2. **Freshdesk Omni** (`/products/freshdesk-omni`) - 옴니채널 고객 지원
3. **Freshdesk** (`/products/freshdesk`) - 고객 지원의 새로운 기준  
4. **Google Workspace** (`/products/google-workspace`) - 클라우드 기반 협업 솔루션
5. **Freshservice** (`/products/freshservice`) - IT 서비스 관리의 혁신

#### 🏗 제품 페이지 구조 표준화
- **Hero 섹션**: 브레드크럼, 카테고리 배지, 제품명, 설명, CTA 버튼
- **핵심 기능**: 6개 주요 기능을 아이콘과 함께 카드 형태로 표시
- **비즈니스 혜택**: 구체적인 수치(메트릭)와 함께 실질적 가치 제시
- **활용 시나리오**: 타겟별 사용 사례와 주요 기능 리스트
- **FAQ**: 아코디언 형태의 자주 묻는 질문과 답변
- **최종 CTA**: 체험 및 상담 버튼으로 컨버전 유도

#### 🎨 제품 목록 페이지 개선
- **카테고리별 구분**: 고객 경험 관리, 협업 및 생산성, IT 인프라 관리로 명확한 분류
- **일관된 카드 디자인**: 배지, 제품명, 설명, CTA 버튼의 통일된 레이아웃
- **반응형 그리드**: 모바일(1열), 태블릿(2열), 데스크탑(3열) 대응

### 주요 발견사항 (Playwright 비교 분석)관리자, 협업 및 생산성 향상에 관심 있는 고객
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
- input (검색 기능용)
- form (폼 처리용)
- theme-toggle (다크/라이트 모드)

---

## 📱 구현된 컴포넌트

### 1. MainNavigation (`components/navigation/main-navigation.tsx`)
**기능:**
- 고정 헤더 (sticky)
- 투명 배경 (backdrop-blur)
- 메가메뉴 (솔루션, 서비스)
- 반응형 모바일 메뉴
- **검색 기능**: 지능형 사이트 내 검색 및 라우팅
- **로고 확대**: 140px 브랜드 강화
- **중앙 배치**: 균형잡힌 네비게이션 레이아웃

**주요 특징:**
- NavigationMenu 컴포넌트 사용
- 컴팩트한 메가메뉴 (Linear App 스타일)
- Sheet 컴포넌트로 모바일 사이드바
- useState 기반 검색 상태 관리
- 검색어 기반 자동 라우팅 (freshdesk → /solutions/freshdesk 등)

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
9. ✅ 푸터 컴포넌트 (실제 연락처 정보 포함)
10. ✅ 인터랙티브 컴포넌트 갤러리 페이지 (`/components`)
11. ✅ 다크/라이트 모드 지원
12. ✅ Playwright 기반 원본 사이트 비교 분석 완료
13. ✅ **Pretendard 폰트 시스템 적용** (나눔고딕 교체, 향상된 가독성)
14. ✅ **디자인 시스템 통합** 페이지 구현 (`/design-system`) - 5개 탭 구조
15. ✅ **색상 시스템 최적화** (HSL 기반 blue monotone, 접근성 향상)
16. ✅ **헤더 완전 재구성** (로고 확대, 중앙 배치 메뉴, 검색+상담+토글)
17. ✅ **지능형 검색 기능** (사이트 내 콘텐츠 기반 라우팅)
18. ✅ **홈페이지 구조 최적화** (PricingSection 제거, CTA 섹션으로 마무리)
19. ✅ **CTA 섹션 간소화** (연락 방법 카드 및 통계 카드 제거, 25년 경험 추가)
20. ✅ **푸터 디자인 개선** (폰트 크기 조정, 중앙 정렬, 맨 위로 버튼 추가)
21. ✅ **Pretendard 폰트 완전 적용** (나눔스퀘어 잔여 설정 제거)

### 2025년 9월 22일 3D 인터랙티브 데모 시스템 구축 완료

#### 🎯 3D 인터랙티브 제품 데모 시스템 완성
- **ProductPageTemplate 통합**: Enhanced와 기존 템플릿을 하나로 통합하여 파일명 단순화 완료
- **3D 디바이스 프레임**: MacBook, iPhone, iPad의 현실적인 3D 목업 구현 (그림자, 카메라, 버튼 등 디테일)
- **Step-by-Step 워크플로우**: AI 자동 응답 워크플로우 4단계 인터랙티브 데모 완성
- **실제 UI 시뮬레이션**: 각 단계별로 실제 Freshdesk 소프트웨어처럼 보이는 UI 구현
- **제품 데모 섹션**: 히어로 섹션 아래 독립적인 데모 공간 확보로 애니메이션 삽입 준비

#### 📱 Freshdesk Omni AI 워크플로우 데모 구현
1. **Step 1: 고객 문의 접수** (블루 테마)
   - 이메일, 라이브 채팅, 전화 문의 시뮬레이션
   - 긴급도별 색상 구분 및 실시간 알림 표시
   - 멀티채널 통합 인터페이스 구현

2. **Step 2: AI 분석 및 분류** (퍼플 테마)
   - Freddy AI 브랜딩과 로고 적용
   - 카테고리 자동 분류, 감정 분석, 우선순위 설정
   - 실시간 AI 분석 과정 시각화

3. **Step 3: 자동 응답 생성** (그린 테마)
   - 지식베이스 기반 응답 자동 생성 과정
   - 실제 고객 응답 텍스트 시뮬레이션
   - AI 생성 완료 상태 표시

4. **Step 4: 고객에게 즉시 응답** (블루 테마)
   - 0.8초 응답 시간, 5점 만족도 표시
   - 고객 피드백 및 AI 학습 데이터 저장 과정
   - 완전한 해결 상태 시각화

#### 🎨 인터랙티브 기능 구현
- **자동 재생**: 3초 간격으로 단계별 자동 전환
- **수동 네비게이션**: 이전/다음 버튼과 단계별 직접 선택
- **진행 표시기**: 4개 단계의 현재 위치를 점(dot)으로 표시
- **일시정지/재생**: 사용자가 원하는 속도로 데모 조절 가능

#### 🏗 기술적 구현 사항
- **파일 구조 최적화**: `/components/sections/product-page-template.tsx`로 통합
- **3D CSS Transform**: GPU 가속 적용으로 부드러운 3D 효과
- **React Hooks**: useState/useEffect 기반 상태 관리와 자동 재생
- **조건부 렌더링**: 제품별 stepByStepDemo 데이터 유무에 따른 섹션 표시
- **CSS Grid Pattern**: Tailwind config에 grid-pattern 추가로 CSS 경고 해결

### 최근 주요 업데이트 (2025년 9월 19일)

#### � 홈페이지 구조 최적화
- **PricingSection 제거**: 메인 페이지에서 가격 테이블 제거하여 흐름 개선
- **CTA 섹션 간소화**: 연락 방법 카드와 통계 카드 제거로 핵심 메시지에 집중
- **25년 경험 추가**: CTA 섹션 하단에 "25년 경험" 항목 추가로 신뢰도 강화
- **배경색 조정**: CTA 섹션 배경을 `bg-muted/20`으로 변경, 상단 패딩 제거로 자연스러운 연결

#### 🎨 푸터 디자인 개선
- **폰트 크기 최적화**: 타이틀을 `text-base`로, 하위 항목을 `text-base`로 통일하여 가독성 향상
- **레이아웃 중앙 정렬**: 개인정보처리방침 라인 중앙 정렬로 균형감 개선
- **소셜 아이콘 제거**: 불필요한 소셜 미디어 아이콘 제거로 깔끔한 디자인
- **맨 위로 버튼**: ChevronUp 아이콘과 부드러운 스크롤 애니메이션으로 사용성 향상
- **Client Component 적용**: 'use client' 지시어 추가로 인터랙티브 기능 지원

#### � 폰트 시스템 완성
- **Pretendard 완전 적용**: layout.tsx와 tailwind.config.js에서 나눔스퀘어 잔여 설정 제거
- **일관된 타이포그래피**: 사이트 전체에서 Pretendard 폰트만 사용하여 브랜드 일관성 확보
- **한글/영문 통합**: Variable font 기술로 최적화된 렌더링 품질 달성
### 주요 발견사항 (Playwright 비교 분석)
- **콘텐츠 격차**: 원본 사이트의 차별화 메시지와 스토리텔링이 새 사이트에 부족
- **푸터 레이아웃**: 원본은 4컬럼 간결 구조, 새 사이트는 과도하게 복잡
- **메시지 차이**: 원본의 "SaaS는 도입보다, 그 이후가 더 중요합니다" 같은 핵심 메시지 누락

### 🎯 현재 진행 상황 (2025년 9월 22일)
- ✅ **완료**: 3D 인터랙티브 데모 시스템 구축 완료 (Freshdesk Omni AI 워크플로우)
- 🔄 **진행 중**: 3D 데모 시스템 시각적 개선 및 다른 제품들로 확장
- 📋 **대기 중**: 솔루션 카테고리 페이지 개발, 메가메뉴 라우팅 연결

### ⚡ 3D 인터랙티브 데모 개선 필요사항 (우선순위)

#### 🎨 1단계: 시각적 개선 (즉시 실행 가능)
1. **애니메이션 강화**
   - 단계 전환 시 부드러운 fade/slide 애니메이션 추가
   - 타이핑 효과로 텍스트가 나타나는 애니메이션 구현
   - 프로그래스 바 애니메이션 개선
   - 데이터 로딩/처리 상태 표시 애니메이션

2. **UI 디자인 개선**
   - 실제 Freshdesk 인터페이스와 더 유사한 색상과 레이아웃
   - 더 세밀한 그림자와 깊이 효과
   - 실제 아바타나 프로필 이미지 추가
   - 보다 현실적인 아이콘과 버튼 스타일

3. **데이터 풍부화**
   - 실제 고객 이름, 시간 정보 추가
   - 더 구체적인 메트릭 (응답 시간, 만족도, 처리 건수 등)
   - 실제 Freshworks 브랜딩 요소 강화
   - 지역화된 한국어 콘텐츠 (고객명, 회사명 등)

#### 🚀 2단계: 기능 확장 (중기 계획)
1. **다른 제품들로 확장**
   - Google Workspace: 협업 워크플로우 데모
   - Monday Service: 프로젝트 관리 워크플로우 데모
   - Freshservice: IT 헬프데스크 워크플로우 데모

2. **인터랙션 개선**
   - 사용자가 직접 클릭/터치할 수 있는 요소 추가
   - 실시간 반응형 UI 요소
   - 사용자 맞춤형 시나리오 선택 기능

#### 🔧 3단계: 기술적 최적화 (장기 계획)
1. **성능 최적화**
   - 3D 애니메이션 GPU 가속 최적화
   - 컴포넌트 지연 로딩 구현
   - 이미지 및 에셋 최적화

2. **접근성 개선**
   - 키보드 네비게이션 지원
   - 스크린 리더 대응
   - 모션 감소 옵션 제공

### 앞으로 해야 할 작업 (우선순위별)

#### 🎨 1단계: 3D 데모 시스템 시각적 개선 (즉시 실행 가능)
1. **애니메이션 강화**: 단계 전환 시 fade/slide 효과, 타이핑 애니메이션, 프로그래스 바 개선
2. **UI 현실화**: 실제 Freshdesk 스타일, 아바타/프로필 이미지, 세밀한 그림자와 깊이 효과
3. **데이터 풍부화**: 한국어 고객명/회사명, 구체적 메트릭, Freshworks 브랜딩 강화

#### 🚀 2단계: 다른 제품들로 데모 시스템 확장
1. **Google Workspace**: 협업 워크플로우 데모 구현
2. **Monday Service**: 프로젝트 관리 워크플로우 데모 구현  
3. **Freshservice**: IT 헬프데스크 워크플로우 데모 구현

#### 🔗 3단계: 솔루션 카테고리 페이지 개발
1. **솔루션 랜딩 페이지**: 제품군별 상세 페이지 구현
   - `/solutions/customer-experience` - 고객 경험 & 세일즈 관리
   - `/solutions/collaboration` - 협업 및 생산성 향상  
   - `/solutions/infrastructure` - IT 인프라 관리
2. **솔루션 레이아웃**: `/app/solutions/layout.tsx` 생성으로 헤더/푸터 적용
3. **카테고리별 제품 연동**: 각 솔루션 페이지에서 관련 제품들로 자연스러운 플로우 구성

#### � 4단계: 네비게이션 메뉴 연결
1. **가격 페이지** (`/pricing`): 기존 PricingSection을 독립 페이지로 이전
2. **회사 소개** (`/company`): XML 기반 회사 정보와 팀 소개
3. **연락처** (`/contact`): 상담 신청 폼과 연락처 정보
4. **서비스 페이지** (`/services/*`): 컨설팅, 구축, 교육 서비스 상세

#### 🎯 4단계: 콘텐츠 품질 향상
1. **원본 사이트 메시지 반영**: "툴보다 일하는 방식을 바꾸는 파트너", "SaaS는 도입보다, 그 이후가 더 중요합니다"
2. **실제 통계 데이터**: XML과 원본 사이트의 검증된 데이터만 사용
3. **고객 사례/후기**: 원본 사이트에서 확인된 실제 사례만 추가
4. **SEO 최적화**: 메타데이터, 구조화된 데이터, sitemap 생성

#### 🎯 6단계: 콘텐츠 품질 향상
1. **원본 사이트 메시지 반영**: "툴보다 일하는 방식을 바꾸는 파트너", "SaaS는 도입보다, 그 이후가 더 중요합니다"
2. **실제 통계 데이터**: XML과 원본 사이트의 검증된 데이터만 사용
3. **고객 사례/후기**: 원본 사이트에서 확인된 실제 사례만 추가
4. **SEO 최적화**: 메타데이터, 구조화된 데이터, sitemap 생성

#### ⚡ 7단계: 성능 및 배포 최적화
1. **이미지 최적화**: WebP/AVIF 변환, 적절한 사이즈 최적화
2. **코드 스플리팅**: 페이지별 번들 최적화와 지연 로딩 적용
3. **GitHub Pages 배포**: Static export 설정 및 CI/CD 파이프라인 구축
4. **성능 모니터링**: Core Web Vitals 측정 및 개선

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

**Last Updated**: 2025년 9월 22일 오후  
**Project Status**: 3D 인터랙티브 데모 시스템 구축 완료 (Freshdesk Omni AI 워크플로우), 시각적 개선 및 다른 제품들로 확장 준비

## 📋 현재 작업 상태 요약 (2025년 9월 22일)

### ✅ 완료된 주요 성과
1. **3D 디바이스 프레임 시스템**: MacBook, iPhone, iPad의 현실적인 3D 목업 완성
2. **Step-by-Step 워크플로우 데모**: Freshdesk Omni AI 자동 응답 4단계 인터랙티브 시연
3. **실제 UI 시뮬레이션**: 각 단계별로 실제 소프트웨어처럼 보이는 UI 컴포넌트 구현
4. **템플릿 통합 완료**: Enhanced와 기존 템플릿을 하나로 통합하여 파일 구조 단순화
5. **인터랙티브 기능**: 자동재생, 수동 네비게이션, 진행 표시기, 일시정지/재생 구현

### 🎯 핵심 컴포넌트 현황
- `/components/sections/product-page-template.tsx`: 통합 제품 페이지 템플릿
- `/components/ui/step-by-step-demo.tsx`: 인터랙티브 워크플로우 데모 시스템  
- `/components/ui/device-frame.tsx`: 3D 디바이스 목업 프레임
- `/app/products/freshdesk-omni/page.tsx`: Freshdesk Omni AI 워크플로우 데이터

### 🚀 다음 작업자를 위한 가이드
1. **즉시 개선 가능**: 애니메이션 효과 (fade/slide), 타이핑 효과, 프로그래스 바 개선
2. **UI 현실화**: 실제 Freshworks 색상 적용, 아바타/프로필 이미지, 더 세밀한 그림자 효과
3. **데이터 풍부화**: 한국어 고객명/회사명, 구체적 메트릭, 실제 브랜딩 요소
4. **다른 제품 확장**: Google Workspace, Monday Service, Freshservice에도 유사한 데모 적용

### 💡 개발 팁
- 현재 3D 프레임과 워크플로우 시스템이 완전히 작동하므로 시각적 개선에 집중 가능
- Freshdesk Omni 데모가 성공 사례이므로 이를 템플릿으로 다른 제품들에 적용 권장
- StepUI 컴포넌트를 수정하여 더 현실적인 인터페이스 구현 가능
- Playwright 스크린샷에서 확인된 대로 전체적인 구조와 기능은 완성된 상태