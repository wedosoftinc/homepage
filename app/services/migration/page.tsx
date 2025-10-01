"use client"

import { ServicePageLayout } from "@/components/services/service-page-layout"
import { ServiceCard } from "@/components/services/service-card"
import servicesData from "@/data/services.json"
import {
  CircleStackIcon as Database,
  ShieldCheckIcon as Shield,
  BoltIcon as Zap,
  ClockIcon as Clock,
  UsersIcon as Users,
  DocumentCheckIcon as FileCheck
} from "@heroicons/react/24/outline"

export default function MigrationPage() {
  const service = servicesData.migration
  const iconMap = {
    Database,
    Shield,
    Zap,
    Clock,
    Users,
    FileCheck
  }

  const heroTitle = service.hero.title.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < service.hero.title.split('\n').length - 1 && <br />}
    </span>
  ))

  const heroSubtitle = service.hero.subtitle.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < service.hero.subtitle.split('\n').length - 1 && <br />}
    </span>
  ))

  const cardsSectionTitle = service.cardsSection.title.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < service.cardsSection.title.split('\n').length - 1 && <br />}
    </span>
  ))

  const cardsSectionSubtitle = service.cardsSection.subtitle.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < service.cardsSection.subtitle.split('\n').length - 1 && <br />}
    </span>
  ))

  return (
    <ServicePageLayout
      serviceName={service.name}
      serviceSlug={service.slug}
      badge={{ icon: Database, text: service.badge }}
      hero={{ title: heroTitle, subtitle: heroSubtitle }}
      cardsSection={{
        title: cardsSectionTitle,
        subtitle: cardsSectionSubtitle,
        children: service.cards.map((card, index) => {
          const IconComponent = iconMap[card.icon as keyof typeof iconMap]
          return (
            <ServiceCard
              key={index}
              icon={IconComponent}
              title={card.title}
              description={card.description}
              features={card.features}
            />
          )
        })
      }}
      cta={service.cta}
    />
  )
}
