"use client"

import { ServicePageLayout } from "@/components/services/service-page-layout"
import { ServiceCard } from "@/components/services/service-card"
import {
  PhoneIcon as Headphones,
  ExclamationTriangleIcon as AlertTriangle,
  Cog8ToothIcon as Settings,
  ArrowTrendingUpIcon as TrendingUp,
  BookOpenIcon as BookOpen,
  ArrowPathIcon as RefreshCw
} from "@heroicons/react/24/outline"
import servicesData from "@/data/services.json"

const iconMap = {
  Headphones,
  AlertTriangle,
  Settings,
  TrendingUp,
  BookOpen,
  RefreshCw
}

export default function MaintenancePage() {
  const service = servicesData.maintenance

  return (
    <ServicePageLayout
      serviceName={service.name}
      serviceSlug={service.slug}
      badge={{
        icon: Headphones,
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
