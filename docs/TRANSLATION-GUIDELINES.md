# Freshworks 문서 번역 가이드라인

## 핵심 원칙

### 1. HTML 구조 완전 보존
- **모든 HTML 태그 유지**: `<p>`, `<div>`, `<span>`, `<table>`, `<img>`, `<a>` 등
- **모든 속성 보존**: `class`, `id`, `style`, `data-*`, `href`, `src` 등
- **태그 중첩 구조 유지**: 원본과 동일한 DOM 구조
- **이미지 보존**: `<img>` 태그의 `src`, `alt` 속성 그대로 유지
- **링크 보존**: `<a>` 태그의 `href` 속성 그대로 유지

### 2. 텍스트만 번역
- HTML 태그 내부의 텍스트 콘텐츠만 한국어로 번역
- 태그 이름, 속성 이름, 속성 값은 절대 변경하지 않음
- 이미지 파일명, URL은 변경하지 않음

### 3. 번역 품질
- **자연스러운 한국어**: 직역이 아닌 의역으로 자연스럽게
- **기술 용어 처리**:
  - 널리 알려진 용어: 한국어 표기 (예: 티켓, 에이전트, 워크플로우)
  - 복잡한 기술 용어: 한국어 + 영문 병기 (예: 서비스 수준 협약(SLA))
  - 제품명/브랜드명: 원문 유지 (예: Freshdesk, Freshservice, WordPress)
- **일관성 유지**: 동일 용어는 항상 같은 번역 사용

## 번역 예시

### ✅ 올바른 예

**원본:**
```html
<p data-identifyelement="542" dir="ltr">
  This article provides details about the various scenarios why your
  <strong>mailbox</strong> needs reauthorization.
  <img src="https://example.com/image.png" alt="screenshot" />
</p>
```

**번역:**
```html
<p data-identifyelement="542" dir="ltr">
  이 문서는 <strong>메일함</strong> 재인증이 필요한 다양한 시나리오에 대해 설명합니다.
  <img src="https://example.com/image.png" alt="screenshot" />
</p>
```

### ❌ 잘못된 예

**잘못된 번역 (태그 누락):**
```html
<p>
  이 문서는 메일함 재인증이 필요한 다양한 시나리오에 대해 설명합니다.
</p>
```
→ `data-identifyelement`, `dir` 속성 누락, `<strong>` 태그 누락, `<img>` 태그 누락

## 주요 용어 번역 표준

### A-C
- Agent → 상담원
- API → API (그대로)
- Attachment → 첨부파일
- Authentication → 인증
- Authorization → 권한 부여
- Business Hours → 업무 시간
- Category → 카테고리
- Configuration → 구성/설정
- Custom Field → 사용자 정의 필드

### D-H
- Dashboard → 대시보드
- Escalation → 에스컬레이션
- Feedback → 피드백
- Filter → 필터
- Folder → 폴더
- Helpdesk → 헬프데스크

### I-P
- Integration → 통합
- Mailbox → 메일함
- Notification → 알림
- Portal → 포털
- Priority → 우선순위

### Q-T
- Request → 요청
- Resolution → 해결
- SLA (Service Level Agreement) → 서비스 수준 협약(SLA)
- Status → 상태
- Ticket → 티켓
- Template → 템플릿

### U-Z
- View → 보기
- Workflow → 워크플로우

## 처리 원칙

### 코드 블록
- 코드, 명령어, 파일명, 경로는 번역하지 않음
- 예: `admin@example.com`, `/api/v1/tickets`, `config.json`

### UI 요소
- 버튼, 메뉴 이름은 번역
- 예: "Create Ticket" → "티켓 생성"

### 특수 문자
- HTML 엔티티 유지: `&nbsp;`, `&lt;`, `&gt;`, `&quot;`
- 특수 기호 유지: `→`, `•`, `©`

## 품질 검증

번역 완료 후 확인사항:
1. ✅ 모든 HTML 태그가 원본과 동일한가?
2. ✅ 모든 이미지가 표시되는가?
3. ✅ 모든 링크가 작동하는가?
4. ✅ 표(table) 구조가 유지되는가?
5. ✅ 한국어가 자연스러운가?
6. ✅ 기술 용어가 일관되게 번역되었는가?

## 주의사항

### 절대 하지 말아야 할 것
- ❌ HTML 태그 제거
- ❌ 속성 제거 또는 변경
- ❌ 이미지 URL 변경
- ❌ 링크 URL 변경
- ❌ 태그 순서 변경
- ❌ CSS 클래스명 변경
- ❌ data-* 속성 제거

### 반드시 해야 할 것
- ✅ 원본 HTML 구조 100% 보존
- ✅ 텍스트만 한국어로 번역
- ✅ 기술 용어 일관성 유지
- ✅ 자연스러운 한국어 표현
