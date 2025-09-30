import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ComponentType, ReactNode } from "react"

interface PageCTASectionProps {
  /** CTA 제목 */
  title: ReactNode
  /** CTA 설명 */
  description: ReactNode
  /** 버튼 설정 */
  buttons?: {
    primary?: {
      text: string
      href: string
      icon?: ComponentType<{ className?: string }>
    }
    secondary?: {
      text: string
      href: string
      icon?: ComponentType<{ className?: string }>
    }
  }
  /** 배경 스타일 */
  background?: "default" | "accent"
  /** 추가 클래스명 */
  className?: string
}

/**
 * 페이지 CTA 섹션 - 행동 유도 섹션 표준화
 * 
 * @example
 * <PageCTASection
 *   title="고객 경험 혁신을 시작하세요"
 *   description="전문 컨설턴트가 귀하의 비즈니스에 최적화된..."
 *   buttons={{
 *     primary: { text: "무료 상담 신청", href: "/contact" },
 *     secondary: { text: "가격 정보", href: "/pricing" }
 *   }}
 *   background="accent"
 * />
 */
export function PageCTASection({
  title,
  description,
  buttons,
  background = "default",
  className = ""
}: PageCTASectionProps) {
  
  const PrimaryIcon = buttons?.primary?.icon
  const SecondaryIcon = buttons?.secondary?.icon

  const bgClasses = {
    default: "section-bg-primary",
    accent: "section-bg-accent relative"
  }

  return (
    <section className={`section-spacing ${bgClasses[background]} ${className}`}>
      {background === "accent" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      )}
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="heading-section">
              {title}
            </h2>
            
            <p className="text-body-large max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {buttons && (
            <div className="button-group">
              {buttons.primary && (
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href={buttons.primary.href}>
                    {PrimaryIcon && <PrimaryIcon className="w-5 h-5 mr-2" />}
                    {buttons.primary.text}
                  </Link>
                </Button>
              )}
              
              {buttons.secondary && (
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href={buttons.secondary.href}>
                    {SecondaryIcon && <SecondaryIcon className="w-5 h-5 mr-2" />}
                    {buttons.secondary.text}
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
