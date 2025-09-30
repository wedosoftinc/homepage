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

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <BadgeIcon className="w-3 h-3 mr-1" />
              {badge.text}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {serviceName} 상담
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  서비스 가격 보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {cardsSection.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {cardsSection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSection.children}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {cta && (
        <section className="py-12 bg-muted/20">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {cta.title}
            </h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  무료 상담 신청하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/services/${serviceSlug}`}>
                  자세히 알아보기
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
