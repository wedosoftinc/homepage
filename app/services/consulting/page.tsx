"use client"

import { ServicePageLayout } from "@/components/services/service-page-layout"
import { ServiceCard } from "@/components/services/service-card"
import {
  TrophyIcon as Award,
  ChartBarIcon as BarChart3,
  FlagIcon as Target,
  CurrencyDollarIcon as DollarSign,
  UsersIcon as Users,
  DocumentTextIcon as FileText
} from "@heroicons/react/24/outline"
import servicesData from "@/data/services.json"

const iconMap = {
  Award,
  BarChart3,
  Target,
  DollarSign,
  Users,
  FileText
}

export default function ConsultingPage() {
  const service = servicesData.consulting

  return (
    <ServicePageLayout
      serviceName={service.name}
      serviceSlug={service.slug}
      badge={{
        icon: Target,
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
