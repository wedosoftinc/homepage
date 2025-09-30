/**
 * 페이지 섹션 컴포넌트 - 템플릿 시스템
 * 
 * 모든 페이지에서 일관된 레이아웃과 스타일을 사용하기 위한 재사용 가능한 섹션 컴포넌트들
 */

export { PageHero } from './page-hero'
export { ContentSection } from './content-section'
export { PageCTASection } from './page-cta-section'

/**
 * 사용 예시:
 * 
 * import { PageHero, ContentSection, PageCTASection } from '@/components/sections'
 * 
 * <PageHero
 *   badge={{ text: "Solutions" }}
 *   title="고객의 마음을 사로잡는 경험을 만드세요"
 *   subtitle="Freshworks의 AI 기반..."
 *   buttons={{
 *     primary: { text: "무료 상담", href: "/contact" }
 *   }}
 * />
 * 
 * <ContentSection
 *   title="왜 필요할까요?"
 *   subtitle="설명..."
 *   background="muted"
 *   spacing="large"
 * >
 *   <div className="card-grid-3">...</div>
 * </ContentSection>
 * 
 * <PageCTASection
 *   title="지금 시작하세요"
 *   description="전문 컨설턴트가..."
 *   buttons={{ primary: {...}, secondary: {...} }}
 *   background="accent"
 * />
 */
