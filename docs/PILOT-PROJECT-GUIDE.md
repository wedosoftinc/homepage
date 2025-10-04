# 문서 포털 파일럿 프로젝트 가이드

## 🎯 개요

Freshdesk FAQ > Ticketing Workflow 폴더 (97건) 문서로 파일럿 테스트 진행

**목표:**
- Supabase 벡터 검색 시스템 검증
- Claude 번역 파이프라인 검증
- 전체 시스템 아키텍처 검증

---

## 📋 사전 요구사항

### 1. API 키 준비
- ✅ **Supabase 프로젝트** - https://supabase.com/dashboard
- ✅ **Anthropic API 키** - https://console.anthropic.com/
- ✅ **OpenAI API 키** - https://platform.openai.com/api-keys

### 2. 환경 변수 설정

```bash
# .env.local 파일 생성 (프로젝트 루트)
cp .env.local.example .env.local
```

```.env
# Supabase (https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...your-anon-key
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...your-service-role-key

# AI APIs
ANTHROPIC_API_KEY=sk-ant-api03-...your-key
OPENAI_API_KEY=sk-...your-key
```

### 3. Dependencies 설치

```bash
npm install
```

---

## 🚀 실행 단계

### Phase 1: Supabase 설정 (수동, 15분)

#### 1-1. Supabase 프로젝트 생성

1. https://supabase.com/dashboard 접속
2. **New Project** 클릭
3. 프로젝트 설정:
   - Name: `wedosoft-docs-portal`
   - Database Password: 안전한 비밀번호 설정
   - Region: **Northeast Asia (Seoul)**
   - Pricing Plan: **Free** 선택
4. **Create new project** 클릭

#### 1-2. DB 스키마 실행

1. Supabase Dashboard → **SQL Editor** 메뉴
2. **New query** 클릭
3. `supabase/schema.sql` 파일 내용 전체 복사
4. SQL Editor에 붙여넣기
5. **Run** 버튼 클릭

**예상 결과:**
```
Success. No rows returned
```

#### 1-3. pgvector 확장 확인

SQL Editor에서 실행:
```sql
SELECT * FROM pg_extension WHERE extname = 'vector';
```

**예상 결과:**
```
extname | vector
```

---

### Phase 2: 파일럿 데이터 추출 (자동, 1분)

```bash
npm run pilot:extract
```

**예상 출력:**
```
🚀 파일럿 데이터 추출 시작...
📊 전체 문서: 1221건
✓ [196643] What is the size limit for attachments...
✓ [196889] I want to insert a footer...
...
✅ 파일럿 데이터: 97건
📁 Category: Freshdesk FAQ (freshdesk-faq)
📂 Folder: Ticketing Workflow (ticketing-workflow)
💾 파일럿 CSV 저장: data/pilot/pilot-data.csv
🎉 추출 완료!
```

---

### Phase 3: Supabase 임포트 (자동, 2분)

```bash
npm run pilot:import
```

**예상 출력:**
```
🚀 Supabase 임포트 시작...
📊 97건 임포트 준비
✅ Category: Freshdesk FAQ (id: uuid-...)
✅ Folder: Ticketing Workflow (id: uuid-...)
✅ [196643] What is the size limit for attachments...
✅ [196889] I want to insert a footer...
...
============================================================
📊 임포트 완료 통계:
✅ 성공: 97건
❌ 실패: 0건
📊 성공률: 100.0%
🎉 Supabase 임포트 완료!
```

---

### Phase 4: 문서 번역 (자동, 30-40분)

```bash
npm run pilot:translate
```

**예상 출력:**
```
🚀 문서 번역 시작...
📥 미번역 문서 조회 중...
📊 번역 대상: 97건
🔄 번역 진행 중... (동시 5개)

✅ [1/97] [196643] 티켓 답변에 첨부할 수 있는 파일 크기 제한은 무엇인가요?
✅ [2/97] [196889] 모든 답변에 푸터를 삽입하려면 어떻게 하나요?
...
📊 진행률: 50.0% (49/97)
...
============================================================
📊 번역 완료 통계:
✅ 성공: 97건
❌ 실패: 0건
📊 성공률: 100.0%
💰 예상 비용: ~$0.29
🎉 번역 완료!
```

**예상 소요:**
- 시간: 30-40분
- 비용: ~$0.29 (Claude 3.5 Sonnet)

---

### Phase 5: 벡터 임베딩 생성 (자동, 5-10분)

```bash
npm run pilot:embeddings
```

**예상 출력:**
```
🚀 벡터 임베딩 생성 시작...
📥 번역 완료된 문서 조회 중...
📊 임베딩 생성 대상: 97건
🔄 임베딩 생성 중... (동시 10개)

✅ [1/97] [196643] 티켓 답변에 첨부할 수 있는 파일 크기 제한은 무엇인가요?
...
📊 진행률: 50.0% (49/97)
...
============================================================
📊 임베딩 생성 완료 통계:
✅ 성공: 97건
❌ 실패: 0건
📊 성공률: 100.0%
💰 예상 비용: ~$0.0011 (53,350 tokens)
🎉 임베딩 생성 완료!
```

**예상 소요:**
- 시간: 5-10분
- 비용: ~$0.001 (OpenAI text-embedding-3-small)

---

### Phase 6: 테스트 & 검증 (자동, 1분)

```bash
npm run pilot:test
```

**예상 출력:**
```
🧪 파일럿 테스트 시작...
============================================================

📊 Test 1: 문서 수 확인
------------------------------------------------------------
✅ PASS: 문서 수 = 97건 (예상: ~97건)

🌐 Test 2: 번역 완료율
------------------------------------------------------------
✅ PASS: 번역 완료율 = 100.0% (97/97건)

🧬 Test 3: 임베딩 생성율
------------------------------------------------------------
✅ PASS: 임베딩 생성율 = 100.0% (97/97건)

✨ Test 4: 번역 품질 샘플 확인
------------------------------------------------------------
샘플 번역 (첫 3건):

  [196643] 품질: 70%
  EN: What is the size limit for attachments to a ticket reply?
  KO: 티켓 답변에 첨부할 수 있는 파일 크기 제한은 무엇인가요?

  [196889] 품질: 70%
  EN: I want to insert a footer into all my replies. How do I do this?
  KO: 모든 답변에 푸터를 삽입하려면 어떻게 하나요?

  [196897] 품질: 70%
  EN: What are tags? How can I add/merge tags?
  KO: 태그란 무엇인가요? 태그를 추가하거나 병합하려면 어떻게 하나요?

✅ PASS: 번역 샘플 확인 완료

🔍 Test 5: 벡터 검색 테스트
------------------------------------------------------------
쿼리: "티켓 첨부파일 크기 제한"

검색 결과 (상위 5건):

1. 티켓 답변에 첨부할 수 있는 파일 크기 제한은 무엇인가요?
   유사도: 87.3%
   경로: /freshdesk/freshdesk-faq/ticketing-workflow/...

2. 첨부파일 관련 모범 사례
   유사도: 76.2%
   경로: /freshdesk/freshdesk-faq/ticketing-workflow/...

✅ PASS: 벡터 검색 정상 동작

🗄️  Test 6: 데이터베이스 스키마 검증
------------------------------------------------------------
✅ PASS: Categories 테이블 정상 (1건 이상)
✅ PASS: Folders 테이블 정상 (1건 이상)
✅ PASS: Documents 테이블 정상 (97건)

============================================================
📊 테스트 결과 요약
============================================================
✅ 모든 테스트 통과!

🎉 파일럿 구현 검증 완료!

다음 단계:
  1. Next.js 문서 페이지 구현
  2. 검색 API 구현
  3. 개발 서버 실행 및 테스트
============================================================
```

---

## 🏃‍♂️ 빠른 실행 (모든 단계 자동)

```bash
# Phase 2-6 한 번에 실행 (Phase 1은 수동)
npm run pilot:all
```

**예상 소요:**
- 시간: 40-50분
- 비용: ~$0.30

---

## 📊 비용 요약

| 항목 | 단가 | 수량 | 총비용 |
|------|------|------|--------|
| Claude 3.5 Sonnet (번역) | $0.003/doc | 97건 | $0.29 |
| OpenAI Embedding (임베딩) | $0.02/1M tokens | ~54K tokens | $0.001 |
| Supabase | 무료 | - | $0.00 |
| **총계** | | | **$0.29** |

---

## 🔍 문제 해결

### 환경변수 에러

```bash
❌ Supabase 환경변수가 설정되지 않았습니다.
```

**해결:** `.env.local` 파일이 프로젝트 루트에 있는지 확인

---

### Supabase 연결 에러

```bash
❌ 문서 조회 실패: Invalid API key
```

**해결:**
1. Supabase Dashboard → Settings → API
2. `service_role` 키 복사 (NOT `anon` 키!)
3. `.env.local`에 `SUPABASE_SERVICE_ROLE_KEY` 업데이트

---

### pgvector 에러

```bash
❌ relation "documents" does not exist
```

**해결:**
1. Supabase Dashboard → SQL Editor
2. `supabase/schema.sql` 재실행
3. 에러 메시지 확인 후 해결

---

### 번역 실패

```bash
❌ [196643] 번역 실패: Invalid API key
```

**해결:**
1. Anthropic Console에서 API 키 확인
2. `.env.local`에 `ANTHROPIC_API_KEY` 업데이트
3. 스크립트 재실행: `npm run pilot:translate`

---

### 임베딩 생성 실패

```bash
❌ [196643] 임베딩 생성 실패: Incorrect API key
```

**해결:**
1. OpenAI Platform에서 API 키 확인
2. `.env.local`에 `OPENAI_API_KEY` 업데이트
3. 스크립트 재실행: `npm run pilot:embeddings`

---

## 📁 생성되는 파일

```
homepage/
├── .env.local                    # 환경변수 (생성 필요, gitignore됨)
├── data/
│   └── pilot/
│       └── pilot-data.csv        # 추출된 97건 CSV
├── supabase/
│   └── schema.sql                # DB 스키마
└── scripts/
    └── pilot/
        ├── 01-extract-pilot-data.ts
        ├── 02-import-to-supabase.ts
        ├── 03-translate-documents.ts
        ├── 04-generate-embeddings.ts
        └── 05-test-pilot.ts
```

---

## ✅ 성공 기준

- [x] 97건 문서 Supabase 임포트 완료
- [x] 100% 한국어 번역 완료 (품질 70%+)
- [x] 100% 벡터 임베딩 생성 완료
- [x] 벡터 검색 정상 동작 (유사도 60%+)
- [x] 모든 테스트 통과

---

## 🔜 다음 단계

1. **Next.js 문서 페이지 구현**
   - 동적 라우팅: `/docs/[category]/[folder]/[slug]`
   - 피드백 위젯
   - 언어 전환 (EN/KO)

2. **검색 API 구현**
   - 하이브리드 검색 (키워드 + 벡터)
   - AI 답변 생성 (RAG)
   - 검색 결과 캐싱

3. **나머지 Freshdesk 문서 확장**
   - 1,124건 추가 번역 및 임베딩

4. **Monday.com, Google Workspace 추가**
   - 전체 7,000건 완성

---

## 📞 지원

문제가 발생하면 다음 정보와 함께 문의:
- 실행한 명령어
- 에러 메시지 전체
- `.env.local` 파일 설정 상태 (API 키 제외)
