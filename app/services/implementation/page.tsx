"use client"

import { ServicePageLayout } from "@/components/services/service-page-layout"
import { ServiceCard } from "@/components/services/service-card"
import {
  ServerIcon as Server,
  LinkIcon as Link,
  CircleStackIcon as Database,
  Cog8ToothIcon as Workflow,
  ShieldCheckIcon as Shield,
  CheckCircleIcon as CheckCircle
} from "@heroicons/react/24/outline"
import servicesData from "@/data/services.json"

const iconMap = {
  Server,
  Link,
  Database,
  Workflow,
  Shield,
  CheckCircle
}

export default function ImplementationPage() {
  const service = servicesData.implementation

  return (
    <ServicePageLayout
      serviceName={service.name}
      serviceSlug={service.slug}
      badge={{
        icon: Server,
        text: service.badge
      }}
      hero={{
        title: service.hero.title.split('\n').map((line, i) => (
          <span key={i}>
            {i === 1 ? <span className="text-primary">{line}</span> : line}
            {i === 0 && <br />}
          </span>
        )),
        subtitle: service.hero.subtitle.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br />}
          </span>
        ))
      }}
      cardsSection={{
        title: service.cardsSection.title.split('\n').map((line, i) => (
          <span key={i}>
            {i === 0 ? line : <span className="text-primary"> {line}</span>}
            {i === 0 && <br />}
          </span>
        )),
        subtitle: service.cardsSection.subtitle.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br />}
          </span>
        )),
        children: service.cards.map((card, index) => (
          <ServiceCard
            key={index}
            icon={iconMap[card.icon as keyof typeof iconMap]}
            title={card.title}
            description={card.description}
            features={card.features}
          />
        ))
      }}
      cta={service.cta}
    />
  )
}
