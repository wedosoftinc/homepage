import { MainNavigation } from "@/components/navigation/main-navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ProductsSection } from "@/components/sections/products-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  InformationCircleIcon as Info,
  SparklesIcon as Sparkles,
  XMarkIcon as X
} from "@heroicons/react/24/outline"
import Link from "next/link"

// 사이트 업데이트 알림 배너 컴포넌트
function SiteUpdateBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-primary text-white py-3 px-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              NEW
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-medium text-sm sm:text-base">
              🚀 새로운 홈페이지 오픈!
            </span>
            <span className="text-sm opacity-90">
              더 자세한 정보가 곧 업데이트 예정입니다
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/20 text-sm hidden sm:inline-flex"
            asChild
          >
            <Link href="/contact">
              <Info className="h-4 w-4 mr-2" />
              전문 컨설턴트와 상담받기
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/20 sm:hidden"
            asChild
          >
            <Link href="/contact">상담받기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <SiteUpdateBanner />
      <main>
        <HeroSection />
        <ProductsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
