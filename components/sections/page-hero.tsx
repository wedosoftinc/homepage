import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ComponentType, ReactNode } from "react"

interface PageHeroProps {
  badge?: {
    icon?: ComponentType<{ className?: string }>
    text: string
  }
  title: ReactNode
  subtitle: ReactNode
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
  className?: string
}

/**
 * 페이지 히어로 섹션 - 모든 페이지의 상단 영역 표준화
 * 
 * @example
 * <PageHero
 *   badge={{ icon: Target, text: "Solutions" }}
 *   title={<>고객의 <span className="text-primary">마음을 사로잡는</span><br />경험을 만드세요</>}
 *   subtitle="Freshworks의 AI 기반 통합 플랫폼으로..."
 *   buttons={{
 *     primary: { text: "무료 상담 받기", href: "/contact", icon: PhoneIcon },
 *     secondary: { text: "가격 정보", href: "/pricing" }
 *   }}
 * />
 */
export function PageHero({ badge, title, subtitle, buttons, className = "" }: PageHeroProps) {
  const BadgeIcon = badge?.icon
  const PrimaryIcon = buttons?.primary?.icon
  const SecondaryIcon = buttons?.secondary?.icon

  return (
    <section className={`hero-spacing ${className}`}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {badge && (
            <Badge variant="secondary" className="mb-2">
              {BadgeIcon && <BadgeIcon className="w-3 h-3 mr-1" />}
              {badge.text}
            </Badge>
          )}
          
          <h1 className="heading-hero">
            {title}
          </h1>
          
          <p className="text-body-large max-w-3xl mx-auto">
            {subtitle}
          </p>

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
