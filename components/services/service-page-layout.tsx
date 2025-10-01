import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/common/breadcrumb"
import Link from "next/link"
import { ComponentType, ReactNode } from "react"
import { ArrowRightIcon as ArrowRight } from "@heroicons/react/24/outline"

interface ServicePageLayoutProps {
  serviceName: string
  serviceSlug: string
  badge: {
    icon: ComponentType<{ className?: string }>
    text: string
  }
  hero: {
    title: ReactNode
    subtitle: ReactNode
  }
  cardsSection: {
    title: ReactNode
    subtitle: ReactNode
    children: ReactNode
  }
  cta?: {
    title: string
    description: string
  }
}

export function ServicePageLayout({
  serviceName,
  serviceSlug,
  badge,
  hero,
  cardsSection,
  cta
}: ServicePageLayoutProps) {
  const BadgeIcon = badge.icon

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/20">
        <div className="container max-w-7xl py-4">
          <Breadcrumb
            items={[
              { title: "서비스", href: "/services" },
              { title: serviceName }
            ]}
          />
        </div>
      </div>

      {/* Hero Section - 새 디자인 토큰 적용 */}
      <section className="hero-spacing section-bg-primary">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge variant="secondary" className="mb-4">
              <BadgeIcon className="w-3 h-3 mr-1" />
              {badge.text}
            </Badge>
            <h1 className="heading-hero">
              {hero.title}
            </h1>
            <p className="text-body-large max-w-3xl mx-auto">
              {hero.subtitle}
            </p>
            <div className="button-group">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {serviceName} 상담
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section - 새 디자인 토큰 적용 */}
      <section className="section-spacing section-bg-primary">
        <div className="section-container">
          <div className="text-center section-container-narrow mb-16">
            <h2 className="heading-section mb-6">
              {cardsSection.title}
            </h2>
            <p className="text-body-large">
              {cardsSection.subtitle}
            </p>
          </div>

          <div className="card-grid-3">
            {cardsSection.children}
          </div>
        </div>
      </section>

      {/* CTA Section - 새 디자인 토큰 적용 */}
      {cta && (
        <section className="section-spacing section-bg-muted">
          <div className="section-container text-center">
            <h2 className="heading-section mb-6">
              {cta.title}
            </h2>
            <p className="text-body-large max-w-2xl mx-auto mb-8">
              {cta.description}
            </p>
            <div className="button-group">
              <Button size="lg" asChild>
                <Link href="/contact">
                  상담 신청
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
