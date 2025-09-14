import { MainNavigation } from "@/components/navigation/main-navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ProductsSection } from "@/components/sections/products-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
