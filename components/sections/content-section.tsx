import { ReactNode } from "react"

interface ContentSectionProps {
  /** 섹션 제목 */
  title: ReactNode
  /** 섹션 부제목 (선택) */
  subtitle?: ReactNode
  /** 섹션 내용 */
  children: ReactNode
  /** 배경 스타일 */
  background?: "default" | "muted" | "gradient" | "accent"
  /** 간격 크기 */
  spacing?: "small" | "default" | "large"
  /** 컨테이너 너비 */
  containerWidth?: "default" | "narrow" | "wide"
  /** 헤더 크기 */
  headerSize?: "default" | "large"
  /** 추가 클래스명 */
  className?: string
}

/**
 * 콘텐츠 섹션 - 제목, 부제목, 콘텐츠를 포함하는 표준 섹션
 * 
 * @example
 * <ContentSection
 *   title="왜 고객 경험이 중요할까요?"
 *   subtitle="뛰어난 고객 경험은 단순한 서비스를 넘어..."
 *   background="muted"
 *   spacing="large"
 * >
 *   <div className="card-grid-3">
 *     <Card>...</Card>
 *   </div>
 * </ContentSection>
 */
export function ContentSection({
  title,
  subtitle,
  children,
  background = "default",
  spacing = "default",
  containerWidth = "default",
  headerSize = "default",
  className = ""
}: ContentSectionProps) {
  
  const bgClasses = {
    default: "section-bg-primary",
    muted: "section-bg-muted",
    gradient: "section-bg-gradient",
    accent: "section-bg-accent"
  }

  const spacingClasses = {
    small: "section-spacing-small",
    default: "section-spacing",
    large: "section-spacing-large"
  }

  const containerClasses = {
    default: "section-container",
    narrow: "section-container-narrow",
    wide: "section-container-wide"
  }

  const headerClasses = {
    default: "section-header",
    large: "section-header-large"
  }

  return (
    <section className={`${spacingClasses[spacing]} ${bgClasses[background]} ${className}`}>
      <div className={containerClasses[containerWidth]}>
        <div className={headerClasses[headerSize]}>
          <h2 className="heading-section">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-body-large max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  )
}
