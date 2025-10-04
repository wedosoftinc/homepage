# HTML 번역 파이프라인 가이드

Freshworks 문서의 HTML 콘텐츠를 한국어로 번역하는 자동화 파이프라인입니다.

## 🎯 핵심 기능

### 1. 지능형 문서 분할
- **짧은 문서** (<16,000자): 단일 번역
- **중간 문서** (16,000-40,000자): 2-3개 청크로 분할
- **긴 문서** (>40,000자): 4개 이상 청크로 분할

### 2. HTML 구조 100% 보존
- 모든 태그, 속성, 이미지, 링크 유지
- 텍스트만 한국어로 번역
- 번역 가이드라인 준수

### 3. 자동 검증 및 재처리
- 이미지 태그 개수 검증
- 번역 길이 비율 체크 (최소 50%)
- 실패한 문서 자동 감지

## 📁 파일 구조

```
scripts/data/
├── lib/
│   └── html-splitter.ts          # HTML 분할/재조립 유틸리티
├── 07-translate-html-pipeline.ts # 메인 번역 파이프라인
└── README-TRANSLATION.md          # 이 문서

docs/
└── TRANSLATION-GUIDELINES.md      # 번역 가이드라인
```

## 🚀 사용 방법

### 1단계: 번역할 문서 확인

```bash
# Freshservice 문서 중 번역되지 않은 문서 확인
npx tsx scripts/data/check-untranslated.ts
```

### 2단계: 번역 파이프라인 실행

```bash
# 번역 파이프라인 실행 (50건씩 처리)
npx tsx scripts/data/07-translate-html-pipeline.ts
```

### 3단계: 결과 확인

스크립트 실행 중 실시간 로그:
```
[1/50]
HTML 번역 중: [154123] Setting up your support email address...
  📏 원본 HTML 길이: 41,316자
  📊 분석: 41,316자, 예상 10,329 토큰
  📈 전략: split-medium, 권장 분할: 3개
  ✂️  3개 청크로 분할...
  📦 실제 분할: 3개 청크 (평균 13,772자)
  🌐 청크 1/3 번역 중... (14,230자)
  🌐 청크 2/3 번역 중... (13,562자)
  🌐 청크 3/3 번역 중... (13,524자)
  🔧 청크 재조립 중...
  📏 번역 HTML 길이: 38,245자 (92.6%)
  ✅ 완료 (이미지: 12개 보존, 길이: 92.6%, 청크: 3개)
```

최종 통계:
```
============================================================
📊 HTML 번역 완료 통계:
✅ 성공: 48건
❌ 실패: 2건
📊 성공률: 96.0%

실패한 문서:
  - csv_id 154126: 이미지 태그 불일치
  - csv_id 234567: 번역 길이 부족
============================================================
```

## ⚙️ 설정 및 최적화

### 청크 크기 조정

`lib/html-splitter.ts`의 `analyzeHtmlComplexity()` 함수:

```typescript
if (estimatedTokens < 4000) {
  strategy = 'single'          // 단일 번역
  recommendedChunks = 1
} else if (estimatedTokens < 10000) {
  strategy = 'split-small'     // 2개 분할
  recommendedChunks = 2
} else if (estimatedTokens < 20000) {
  strategy = 'split-medium'    // 3-4개 분할
  recommendedChunks = Math.ceil(estimatedTokens / 6000)
} else {
  strategy = 'split-large'     // 5개 이상 분할
  recommendedChunks = Math.ceil(estimatedTokens / 5000)
}
```

### API Rate Limit 조정

`07-translate-html-pipeline.ts`:

```typescript
// 청크 간 딜레이 (기본: 1.5초)
await new Promise(resolve => setTimeout(resolve, 1500))

// 문서 간 딜레이 (기본: 2초)
await new Promise(resolve => setTimeout(resolve, 2000))
```

### 배치 크기 조정

```typescript
// 한 번에 처리할 문서 개수 (기본: 50건)
.limit(50)
```

## 🔍 검증 기준

### 1. 이미지 태그 검증
```typescript
if (originalImgCount !== translatedImgCount) {
  // ❌ 실패: 이미지 태그가 누락되거나 추가됨
  return { success: false, error: '이미지 태그 불일치' }
}
```

### 2. 길이 비율 검증
```typescript
const lengthRatio = translatedHtml.length / html.length

if (lengthRatio < 0.5) {
  // ❌ 실패: 번역 길이가 원본의 50% 미만
  // (심각한 데이터 손실 가능성)
  return { success: false, error: '번역 길이 부족' }
}

if (lengthRatio < 0.7) {
  // ⚠️  경고: 번역 길이가 원본의 70% 미만
  // (저장은 되지만 검토 필요)
  console.warn('번역 길이가 짧습니다')
}
```

## 📊 번역 전략별 예상 처리 시간

| 문서 길이 | 전략 | 청크 수 | 예상 시간 |
|----------|------|---------|-----------|
| 1-10K자 | single | 1 | ~10초 |
| 10-20K자 | split-small | 2 | ~25초 |
| 20-40K자 | split-medium | 3-4 | ~40-55초 |
| 40K자+ | split-large | 5+ | ~70초+ |

*청크당 약 8-10초 + 청크 간 딜레이 1.5초*

## 🔄 재처리 워크플로우

실패한 문서는 자동으로 감지되어 다음 실행 시 재처리됩니다:

```typescript
// 번역이 필요한 문서: NULL이거나 영문 그대로인 경우
const docsToTranslate = docs.filter(doc =>
  !doc.content_html_ko || doc.content_html_ko === doc.content_html_en
)
```

### 수동 재처리

특정 csv_id 문서만 재처리:

```typescript
// 07-translate-html-pipeline.ts 수정
.in('csv_id', [154126, 234567])  // 실패한 문서 csv_id
```

## 📝 번역 품질 체크리스트

번역 후 반드시 확인:

- [ ] 이미지가 모두 표시되는가?
- [ ] 링크가 작동하는가?
- [ ] 표(table) 구조가 유지되는가?
- [ ] 코드 블록이 보존되는가?
- [ ] 한국어가 자연스러운가?
- [ ] 기술 용어가 일관되게 번역되었는가?

## 🛠️ 트러블슈팅

### 문제: "max_tokens 초과" 오류

```
Error: max_tokens: 8000 > 8192
```

**해결**: 더 많은 청크로 분할
```typescript
// lib/html-splitter.ts에서 청크 크기 축소
recommendedChunks = Math.ceil(estimatedTokens / 4000)  // 더 작은 청크
```

### 문제: 번역 길이가 너무 짧음

```
⚠️  경고: 번역 길이가 너무 짧습니다 (45.2%)
```

**원인**:
1. HTML 구조가 복잡하여 응답이 잘림
2. 특정 섹션만 번역됨

**해결**:
1. 더 많은 청크로 분할
2. max_tokens를 8,192까지 증가 (현재: 8,000)
3. 프롬프트 최적화 (가이드라인 압축)

### 문제: 이미지 태그 누락

```
❌ 이미지 태그 개수 불일치! 원본: 7, 번역: 0
```

**원인**: 청크 분할 시 `<img>` 태그가 불완전하게 분할됨

**해결**: `lib/html-splitter.ts`의 분할 로직 개선
```typescript
// 이미지 태그는 분할하지 않도록 경계 조정
const imgTagPattern = /<img[^>]*>/g
```

## 📈 대량 번역 최적화 팁

### 1. 병렬 처리 (고급)

여러 문서를 동시에 처리하여 속도 향상:

```typescript
const PARALLEL_LIMIT = 3  // 동시에 3개 문서 처리

for (let i = 0; i < docsToTranslate.length; i += PARALLEL_LIMIT) {
  const batch = docsToTranslate.slice(i, i + PARALLEL_LIMIT)
  await Promise.all(batch.map(doc => translateDocument(doc)))
}
```

### 2. 캐싱 활용

동일한 HTML 패턴이 반복되는 경우 캐싱:

```typescript
const translationCache = new Map<string, string>()
// HTML 해시를 키로 사용하여 중복 번역 방지
```

### 3. 프롬프트 최적화

번역 가이드라인을 압축하여 토큰 절약:

```typescript
// 전체 가이드라인 대신 핵심 규칙만 포함
const CORE_GUIDELINES = `
1. HTML 태그/속성 100% 보존
2. 텍스트만 한국어 번역
3. 용어: Agent→상담원, Ticket→티켓
`
```

## 🎯 다음 단계

1. **Freshservice 50건 완료** → 품질 검증
2. **나머지 Freshservice 문서** → 전체 1,557건 번역
3. **Freshdesk 문서** → 1,221건 번역
4. **임베딩 생성** → 04-generate-embeddings.ts 실행
5. **검색 기능 테스트** → 하이브리드 검색 검증

## 📞 문의 및 이슈

번역 파이프라인 관련 문제가 발생하면:
1. 실패한 문서의 csv_id 기록
2. 에러 로그 전문 복사
3. 원본 HTML 길이 및 복잡도 확인
