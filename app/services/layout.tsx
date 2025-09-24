import type { Metadata } from "next"
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: "전문 서비스 | WeDoSoft - 글로벌 SaaS 도입부터 운영까지 25년 경험",
  description: "Freshworks, Google Workspace, Monday.com, Splashtop 등 글로벌 SaaS 솔루션의 컨설팅, 구축, 교육, 운영지원 서비스. 25년 실무 경험으로 기업의 디지털 혁신을 지원합니다.",
  keywords: ["SaaS 컨설팅", "IT 컨설팅", "Freshworks 파트너", "Google Workspace 파트너", "Monday.com 파트너", "시스템 구축", "사용자 교육", "IT 운영지원"],
  openGraph: {
    title: "전문 서비스 | WeDoSoft",
    description: "글로벌 SaaS 솔루션의 도입부터 운영까지, 25년 경험의 전문 서비스",
    images: ["/og-services.jpg"],
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}