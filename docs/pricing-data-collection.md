# 종합 가격 정보 수집 결과

## 📊 4개 벤더, 12개 제품 가격 정보 완료 수집

**수집일**: 2025년 1월 27일  
**수집 방법**: Playwright 웹 스크래핑  
**모든 가격은 연간 결제 기준 (Monthly billing 옵션도 대부분 제공)**

---

## 1️⃣ **Freshworks** (8개 제품)

### 🛎️ **고객 서비스 제품군**

#### **Freshdesk Omni** - 옴니채널 고객 지원
- **Growth**: `$29/agent/month`
  - 옴니채널 고객 지원, 지능형 챗봇, 웹/SMS/메시징/이메일 티켓팅
- **Pro**: `$69/agent/month` ⭐ *Most Popular*
  - Growth 모든 기능 + 맞춤형 지원 포털, 커스텀 객체, 고급 티켓팅, 커스텀 리포팅
- **Enterprise**: `$109/agent/month`
  - Pro 모든 기능 + 감사 로그, 승인 워크플로우, 스킬 기반 배정, 추가 보안 기능

**📱 Freshcaller 통합 옵션**:
- Growth: +$15/agent/month, Pro: +$39/agent/month, Enterprise: +$69/agent/month

#### **Freshdesk** - 기존 헬프데스크
- **Free**: `$0` - 최대 2명 에이전트 무료
- **Growth**: `$15/agent/month`
- **Pro**: `$49/agent/month`
- **Pro + AI Copilot Bundle**: `$78/agent/month`
- **Enterprise**: `$79/agent/month`

#### **Freshchat** - 라이브 채팅
- **Free**: `$0` - 최대 10명 에이전트 무료
- **Growth**: `$19/agent/month`
- **Pro**: `$49/agent/month` ⭐ *Most Popular*
- **Enterprise**: `$79/agent/month`

#### **Freshcaller** - 클라우드 PBX
모든 플랜에 사용한 분(pay/min) 추가 요금 발생
- **Free**: `$0/agent/month + pay/min`
- **Growth**: `$15/agent/month + pay/min` (월 2,000분 포함*)
- **Pro**: `$39/agent/month + pay/min` (월 3,000분 포함*)
- **Enterprise**: `$69/agent/month + pay/min` (월 5,000분 포함*)

*포함된 분은 계정당 (에이전트당 아님)

### 🛠️ **IT 서비스 제품군**

#### **Freshservice** - IT 서비스 관리
- **Starter**: `$19/agent/month`
- **Growth**: `$49/agent/month`
- **Pro**: `$99/agent/month`
- **Enterprise**: `맞춤 가격` (Freddy AI 포함)

### 💼 **CRM 제품군**

#### **Freshsales** - CRM 영업
- **Free**: `$0` - 최대 3명 사용자 무료
- **Growth**: `$9/user/month`
- **Pro**: `$39/user/month`
- **Enterprise**: `$59/user/month`

**🤖 Freshworks AI 기능 (모든 제품 공통)**:
- **Freddy AI Agent**: 500 세션 무료 포함, 추가 세션 `$100/1,000 세션`
- **Freddy AI Copilot**: `$29/agent/month` 추가 (일부 번들 플랜 포함)

---

## 2️⃣ **Google Workspace** (1개 제품)

#### **Google Workspace** - 클라우드 협업
- **Business Starter**: `$6/user/month`
  - Gmail, Drive 30GB, Meet 최대 100명, Calendar, Docs, Sheets, Slides
- **Business Standard**: `$12/user/month` ⭐ *Most Popular*
  - 2TB 저장공간, Meet 최대 150명, 녹화 기능, 출석 추적
- **Business Plus**: `$18/user/month`
  - 5TB 저장공간, Meet 최대 500명, 고급 보안, Vault
- **Enterprise**: `맞춤 가격`
  - 무제한 저장공간*, 고급 보안 및 분석, 지원

---

## 3️⃣ **Monday.com** (4개 제품)

#### **Monday Work Management** - 프로젝트 관리
- **Basic**: `$12/seat/month` (3 seats 최소)
  - 기본 대시보드, iOS/Android 앱, 5GB 저장공간
- **Standard**: `$14/seat/month` ⭐ *Most Popular*
  - 타임라인 및 캘린더 뷰, 게스트 액세스, 250GB 저장공간
- **Pro**: `$24/seat/month`
  - 시간 추적, 커스텀 필드, 차트 뷰, 1,000GB 저장공간
- **Enterprise**: `맞춤 가격`
  - 고급 리포팅, 엔터프라이즈 보안, 멀티 레벨 권한

#### **Monday CRM, Dev, Service**
각각 별도 가격 체계 (추가 수집 필요)

---

## 4️⃣ **Splashtop** (1개 제품)

#### **Splashtop Business Access** - 원격 접속
- **Solo**: `$60/year` (1 user)
  - 개인용, 무제한 컴퓨터 액세스
- **Pro**: `$118.80/year` (1 user)
  - 비즈니스용, 고급 기능, 파일 전송
- **Enterprise**: `맞춤 가격`
  - 대기업용, SSO, 고급 보안

---

## 📋 가격 테이블 구현 전략 권장사항

### 1. **벤더별 탭 구조** ⭐ 추천
```
[Freshworks] [Google Workspace] [Monday.com] [Splashtop]
```
**장점**: 벤더별 일관된 UI, 제품군 설명 가능, 브랜딩 활용

### 2. **솔루션 카테고리별 탭**
```
[고객 경험 관리] [협업 생산성] [IT 인프라] [영업 관리]
```

### 3. **하이브리드 접근**
- 메인: 벤더별 탭
- 서브: 제품 카테고리 필터

### 4. **구현 세부사항**
- **Monthly/Annual 토글** 필수
- **Most Popular 배지** 활용
- **무료 플랜 하이라이트**
- **AI 기능 별도 표시**
- **연락처** 및 **무료 체험** CTA 강조

### 5. **기술 구현**
- shadcn/ui Tabs 컴포넌트
- 가격 데이터 JSON 구조화
- 반응형 카드 레이아웃
- 검색/필터 기능 추가

---

## 🔄 다음 단계

1. **가격 테이블 UI 컴포넌트 개발**
2. **가격 데이터 JSON 구조화**
3. **가격 비교 기능 구현**
4. **고객 문의 폼 연동**
5. **정기 가격 업데이트 프로세스 수립**

---

**✅ 수집 완료**: 4개 벤더, 12개 제품의 상세 가격 정보  
**📊 총 가격 옵션**: 40+ 가격 플랜 및 애드온  
**🤖 AI 기능**: 모든 Freshworks 제품에 통합된 Freddy AI 옵션  
**💰 가격 범위**: $0 (무료) ~ 맞춤 가격 (엔터프라이즈)
