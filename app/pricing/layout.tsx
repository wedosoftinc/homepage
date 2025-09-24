import { MainNavigation } from "@/components/navigation/main-navigation"
import { Footer } from "@/components/layout/footer"

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNavigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}