# We Do Soft 메뉴 구조 (WordPress XML 기반)

## 개요
wedosoft.WordPress.2025-09-22.pages.xml에서 추출한 실제 메뉴 구조와 현재 Next.js 프로젝트의 네비게이션 구조를 비교하여 정리했습니다.

---

## 📋 WordPress XML에서 발견된 페이지 구조

### 메인 페이지들
```
├── 🏠 Home (홈)
├── 📄 개인정보 처리방침
├── 🏢 Services (서비스)
├── 🏢 Company (회사소개)
├── � Blog (블로그)
├── �📞 Contact (연락처)
└── 🔍 Solution Finder (솔루션 파인더)
```

### 제품 페이지들 (솔루션)
```
📦 솔루션/제품
├── 고객 경험 & 세일즈 관리
│   ├── Freshdesk Omni (고객 경험 혁신의 완성)
│   ├── Freshdesk (고객 지원)
│   ├── Freshchat (실시간 채팅)
│   ├── Freddy AI (AI 어시스턴트)
│   └── Freshsales (CRM)
├── 협업 및 생산성 향상
│   ├── Google Workspace (클라우드 협업의 새로운 기준)
│   ├── Monday Service (AI 기반 서비스 관리)
│   ├── Monday Sales CRM (영업 관리)
│   ├── Monday Work Management (프로젝트 관리)
│   └── Monday Dev (개발팀 협업)
└── IT 인프라 최적화
    ├── Freshservice (IT 서비스 관리)
    └── Splashtop (원격 접속 솔루션)
```

---

## 🎯 현재 Next.js 프로젝트 메뉴 구조

### 메인 네비게이션 (MainNavigation.tsx)
```
We Do Soft 로고
├── 🔍 검색창 (지능형 사이트 내 검색)
├── 📦 솔루션 (메가메뉴)
│   ├── 고객 경험 & 세일즈 관리
│   │   ├── Freshdesk (고객 지원)
│   │   ├── Freshsales (CRM) 
│   │   ├── Freshchat (실시간 채팅)
│   │   └── Freddy AI (AI 어시스턴트)
│   ├── 협업 및 생산성 향상
│   │   ├── Monday Work Management
│   │   ├── Monday Dev
│   │   ├── Monday Sales CRM
│   │   └── Google Workspace
│   └── IT 인프라 관리
│       ├── Freshservice (IT 서비스 관리)
│       └── Splashtop (원격 접속)
├── 🛠️ 서비스 (메가메뉴)
│   ├── 컨설팅 서비스
│   ├── 구축 & 구현
│   └── 교육 & 지원
├── 💰 가격
├── 🏢 회사소개
├── � 블로그
├── �📞 상담 문의
└── 🌓 다크/라이트 모드 토글
```

### 모바일 메뉴 (Sheet 컴포넌트)
```
☰ 햄버거 메뉴
├── 🏠 홈
├── 📦 솔루션
│   ├── 고객 경험 & 세일즈 관리 ▼
│   ├── 협업 및 생산성 향상 ▼
│   └── IT 인프라 관리 ▼
├── 🛠️ 서비스
│   ├── 컨설팅 서비스
│   ├── 구축 & 구현
│   └── 교육 & 지원
├── 💰 가격
├── 🏢 회사소개
├── 📝 블로그
└── 📞 연락처
```

---

## 🎨 메뉴 시각화 (트리 구조)

```
🌐 We Do Soft 홈페이지
│
├── 🏠 홈 (/)
│   ├── 히어로 섹션
│   ├── 솔루션 카테고리 (3개)
│   ├── 글로벌 SaaS 포트폴리오
│   ├── 서비스 프로세스 (4단계)
│   └── CTA 섹션
│
├── 📦 솔루션 (/solutions)
│   │
│   ├── 🎯 고객 경험 & 세일즈 관리 (/solutions/customer-experience)
│   │   ├── 📊 Freshdesk Omni (/products/freshdesk-omni)
│   │   ├── 🎧 Freshdesk (/products/freshdesk)
│   │   ├── 💬 Freshchat (/products/freshchat) [미구현]
│   │   ├── 🤖 Freddy AI (/products/freddy-ai) [미구현]
│   │   └── 📈 Freshsales (/products/freshsales) [미구현]
│   │
│   ├── ⚡ 협업 및 생산성 향상 (/solutions/collaboration)
│   │   ├── 🌐 Google Workspace (/products/google-workspace)
│   │   ├── 📋 Monday Work Management (/products/monday-work-management) [미구현]
│   │   ├── 👨‍💻 Monday Dev (/products/monday-dev) [미구현]
│   │   ├── 🎯 Monday Service (/products/monday-service)
│   │   └── 💼 Monday Sales CRM (/products/monday-sales-crm) [미구현]
│   │
│   └── 🔧 IT 인프라 최적화 (/solutions/infrastructure)
│       ├── 🛠️ Freshservice (/products/freshservice)
│       └── 🖥️ Splashtop (/products/splashtop) [미구현]
│
├── 🛠️ 서비스 (/services) [미구현]
│   ├── 💡 컨설팅 서비스 (/services/consulting)
│   ├── 🔨 구축 & 구현 (/services/implementation)
│   └── 📚 교육 & 지원 (/services/training)
│
├── 💰 가격 (/pricing) [미구현]
│   ├── 제품별 가격 정보
│   ├── 패키지 옵션
│   └── 커스텀 견적
│
├── 🏢 회사소개 (/company) [미구현]
│   ├── 회사 연혁
│   ├── 팀 소개
│   ├── 비전 & 미션
│   └── 파트너십
│
├── 📝 블로그 (/blog) [미구현]
│   ├── 📰 최신 소식 (/blog/news)
│   ├── 💡 기술 인사이트 (/blog/tech)
│   ├── 📊 업계 트렌드 (/blog/trends)
│   ├── 📚 사용법 가이드 (/blog/guides)
│   └── 🎯 성공 사례 (/blog/success-stories)
│
└── 📞 연락처 (/contact) [미구임]
    ├── 상담 신청 폼
    ├── 연락처 정보
    ├── 오시는 길
    └── FAQ
```

---

## 🔍 메뉴 검색 기능

### 확장 예정 검색 기능
```javascript
// MainNavigation.tsx 검색 핸들러
const searchMappings = {
  // 제품명 검색
  'freshdesk': '/solutions/freshdesk',
  'freshsales': '/solutions/freshsales', 
  'freshchat': '/solutions/freshchat',
  'google workspace': '/solutions/google-workspace',
  'monday': '/solutions/monday-*',
  'splashtop': '/solutions/splashtop',
  
  // 카테고리 검색
  '고객지원': '/solutions/customer-experience',
  '협업': '/solutions/collaboration',
  'IT관리': '/solutions/infrastructure',
  
  // 서비스 검색
  '컨설팅': '/services/consulting',
  '구축': '/services/implementation',
  '교육': '/services/training',
  
  // 블로그 검색
  '블로그': '/blog',
  '소식': '/blog/news',
  '기술': '/blog/tech',
  '트렌드': '/blog/trends',
  '가이드': '/blog/guides',
  '사례': '/blog/success-stories'
}
```

### 확장 예정 검색 기능
- 한글/영문 동의어 처리
- 오타 교정 기능
- 검색 자동완성
- 검색 결과 페이지
- 블로그 포스트 내용 검색
- 태그 기반 블로그 필터링

---

## 💡 메뉴 구조 개선 제안

### 사용자 경험 개선
1. **브레드크럼 네비게이션**: 모든 페이지에 위치 표시
2. **관련 제품 추천**: 각 제품 페이지에서 유사 솔루션 제안
3. **카테고리 간 이동**: 솔루션 카테고리 간 쉬운 탐색

### 기술적 개선
1. **메가메뉴 지연 로딩**: 성능 최적화
2. **모바일 UX**: 터치 친화적 네비게이션
3. **키보드 네비게이션**: 접근성 향상

### SEO 최적화
1. **구조화된 데이터**: 메뉴 구조를 검색엔진에 명확히 전달
2. **사이트맵 생성**: XML 사이트맵 자동 생성
3. **내부 링크 최적화**: 관련 페이지 간 연결 강화

---

*마지막 업데이트: 2025년 9월 22일*  
*문서 상태: WordPress XML 기반 완전 분석 완료*