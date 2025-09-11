# Implementation Plan

## 1. 프로젝트 셋업 및 기본 구조
- [x] 1.1 Next.js 14 프로젝트 초기화 및 TypeScript 설정
  - Next.js App Router 구조로 프로젝트 생성
  - TypeScript, ESLint, Prettier 설정
  - GitHub repository 연결 및 기본 CI/CD 설정
  - _Requirements: 1.1, 1.2_

- [x] 1.2 Tailwind CSS 및 디자인 시스템 기본 설정
  - Tailwind CSS 설치 및 설정
  - 다크/라이트 테마 CSS 변수 정의
  - 기본 컴포넌트 구조 생성 (ui, layout, theme 폴더)
  - _Requirements: 6.1, 6.2_

- [x] 1.3 테마 시스템 구현
  - ThemeProvider 컨텍스트 생성
  - 테마 토글 컴포넌트 구현
  - localStorage 기반 테마 저장 기능
  - 시스템 다크모드 감지 기능
  - _Requirements: 6.4_

## 2. 기본 레이아웃 및 네비게이션 구현
- [x] 2.1 헤더 컴포넌트 구현
  - Linear 스타일 헤더 레이아웃
  - 로고, 네비게이션 메뉴, 테마 토글 버튼
  - 반응형 모바일 메뉴
  - _Requirements: 3.1, 3.2_

- [x] 2.2 메가메뉴 컴포넌트 구현
  - 솔루션 메가메뉴 (Google Workspace, Freshworks, Monday.com, Splashtop)
  - 서비스 메가메뉴 (컨설팅, 교육, 마이그레이션 등)
  - 호버 애니메이션 및 인터랙션
  - _Requirements: 3.1_

- [x] 2.3 푸터 컴포넌트 구현
  - Linear 스타일 푸터 레이아웃
  - 회사 정보, 링크 그룹, 소셜 미디어 링크
  - 다크/라이트 테마 지원
  - _Requirements: 3.1_

## 3. 홈페이지 구현
- [x] 3.1 히어로 섹션 구현
  - Linear 스타일 대형 헤드라인
  - 3D 원근감 이미지 컴포넌트
  - 듀얼 CTA 버튼 (Get Started, Contact Sales)
  - _Requirements: 3.3, 6.3_

- [x] 3.2 솔루션 소개 섹션 구현
  - 4개 주요 솔루션 카드 (Google Workspace, Freshworks, Monday.com, Splashtop)
  - 각 카드에서 해당 제품 페이지로 연결
  - 호버 애니메이션 효과
  - _Requirements: 3.3_

- [x] 3.3 고객 로고 그리드 구현
  - Linear 스타일 고객사 로고 표시
  - 그레이스케일 기본, 호버 시 컬러
  - 애니메이션 효과
  - _Requirements: 3.3_

## 4. 가격 페이지 구현
- [x] 4.1 탭 기반 가격 테이블 구조 구현
  - 4개 제품 탭 (Google Workspace, Freshworks, Monday.com, Splashtop)
  - URL 파라미터 기반 딥링킹 (?tab=google-workspace)
  - 탭 전환 애니메이션
  - _Requirements: 2.1, 2.4_

- [x] 4.2 가격 카드 컴포넌트 구현
  - Linear 스타일 가격 카드 디자인
  - 기능 체크리스트, 가격 표시, CTA 버튼
  - 추천 플랜 하이라이트 기능
  - _Requirements: 2.1_

- [-] 4.3 제품별 가격 데이터 구조 및 표시
  - Google Workspace 플랜별 가격 정보
  - Freshworks 제품군별 가격 정보
  - Monday.com 플랜별 가격 정보
  - Splashtop 플랜별 가격 정보
  - _Requirements: 2.1_

## 5. 솔루션 페이지 구현
- [ ] 5.1 Google Workspace 페이지 구현
  - 제품 소개, 기능 설명, 가격 보기 버튼
  - 가격 보기 버튼 클릭 시 /pricing?tab=google-workspace로 이동
  - 3D 이미지 효과로 제품 스크린샷 표시
  - _Requirements: 3.3, 2.4_

- [ ] 5.2 Freshworks 페이지 구현
  - Freshdesk, Freshsales, Freshservice, Freshchat 소개
  - 각 제품별 상세 정보 및 기능
  - 통합 가격 페이지로 연결
  - _Requirements: 3.3, 2.4_

- [ ] 5.3 Monday.com 페이지 구현
  - Work Management, Dev, Service 제품 소개
  - 프로젝트 관리 기능 강조
  - 가격 페이지 연동
  - _Requirements: 3.3, 2.4_

- [ ] 5.4 Splashtop 페이지 구현
  - 원격 접속 솔루션 소개
  - 보안 기능 및 성능 강조
  - 가격 정보 연결
  - _Requirements: 3.3, 2.4_

## 6. 서비스 페이지 구현
- [ ] 6.1 컨설팅 & 진단 서비스 페이지
  - IT 현황 진단, 디지털 전환 컨설팅 소개
  - 서비스 프로세스 설명
  - 문의하기 CTA
  - _Requirements: 3.3_

- [ ] 6.2 구축 & 마이그레이션 서비스 페이지
  - 각 솔루션별 구축 서비스 소개
  - 마이그레이션 프로세스 설명
  - 성공 사례 포함
  - _Requirements: 3.3_

- [ ] 6.3 교육 & 트레이닝 서비스 페이지
  - 관리자/사용자 교육 프로그램 소개
  - 온라인/오프라인 교육 옵션
  - 교육 일정 및 신청 방법
  - _Requirements: 3.3_

## 7. 블로그 시스템 구현
- [ ] 7.1 MDX 기반 블로그 시스템 구축
  - MDX 파일 파싱 및 렌더링
  - 블로그 포스트 목록 페이지
  - 개별 포스트 페이지 레이아웃
  - _Requirements: 7.1, 7.2_

- [ ] 7.2 카테고리 및 태그 시스템 구현
  - 기존 워드프레스 카테고리 구조 유지
  - 카테고리별 포스트 필터링
  - 태그 기반 관련 포스트 추천
  - _Requirements: 7.2_

- [ ] 7.3 검색 기능 구현
  - 전문 검색 기능 (제목, 내용, 태그)
  - 검색 결과 하이라이트
  - 검색 자동완성 기능
  - _Requirements: 7.3_

## 8. 콘텐츠 마이그레이션
- [ ] 8.1 XML 파싱 도구 개발
  - 워드프레스 XML 파일 파싱
  - 포스트, 페이지, 메타데이터 추출
  - 카테고리 및 태그 매핑
  - _Requirements: 2.1, 2.2_

- [ ] 8.2 HTML to MDX 변환 도구 개발
  - HTML 콘텐츠를 MDX 형식으로 변환
  - 이미지 경로 수정 및 최적화
  - 코드 블록 및 특수 요소 처리
  - _Requirements: 2.2_

- [ ] 8.3 이미지 최적화 및 이전
  - 기존 이미지 다운로드 및 최적화
  - WebP 형식 변환
  - 반응형 이미지 생성
  - _Requirements: 2.3, 4.2_

## 9. SEO 및 성능 최적화
- [ ] 9.1 메타데이터 및 SEO 설정
  - 페이지별 메타 태그 설정
  - Open Graph 및 Twitter Card 메타태그
  - sitemap.xml 및 robots.txt 생성
  - _Requirements: 5.1, 5.2_

- [ ] 9.2 성능 최적화 구현
  - 이미지 lazy loading 및 최적화
  - 코드 스플리팅 및 번들 최적화
  - Core Web Vitals 개선
  - _Requirements: 4.1, 4.2, 4.3_

- [ ] 9.3 접근성 개선
  - WCAG 2.1 AA 수준 접근성 준수
  - 키보드 네비게이션 지원
  - 스크린 리더 호환성
  - _Requirements: 5.3_

## 10. 스타일 가이드 페이지 구현
- [ ] 10.1 컴포넌트 라이브러리 문서화
  - 모든 UI 컴포넌트 예시 페이지
  - 다크/라이트 테마별 컴포넌트 표시
  - 사용법 및 props 문서화
  - _Requirements: 6.3_

- [ ] 10.2 디자인 토큰 문서화
  - 색상 팔레트 표시
  - 타이포그래피 스케일
  - 간격 및 그리드 시스템
  - _Requirements: 6.2_

## 11. 배포 및 최종 설정
- [ ] 11.1 GitHub Pages 배포 설정
  - GitHub Actions 워크플로우 구성
  - 정적 사이트 빌드 및 배포 자동화
  - 커스텀 도메인 설정
  - _Requirements: 1.2_

- [ ] 11.2 리다이렉트 및 URL 매핑
  - 기존 워드프레스 URL에서 새 URL로 리다이렉트
  - 404 페이지 구현
  - URL 구조 최적화
  - _Requirements: 2.4_

- [ ] 11.3 분석 도구 연동
  - Google Analytics 4 설정
  - 성능 모니터링 도구 연동
  - 사용자 행동 분석 설정
  - _Requirements: 5.1_

## 12. 테스트 및 품질 보증
- [ ] 12.1 컴포넌트 단위 테스트
  - 주요 컴포넌트 테스트 작성
  - 테마 전환 기능 테스트
  - 가격 페이지 탭 기능 테스트
  - _Requirements: 모든 요구사항_

- [ ] 12.2 통합 테스트 및 E2E 테스트
  - 페이지 간 네비게이션 테스트
  - 폼 제출 및 인터랙션 테스트
  - 반응형 디자인 테스트
  - _Requirements: 3.1, 3.4_

- [ ] 12.3 성능 및 접근성 테스트
  - Lighthouse 점수 최적화
  - 다양한 디바이스에서 테스트
  - 브라우저 호환성 확인
  - _Requirements: 4.1, 4.2, 5.3_