import { Header, Footer } from "@/components/layout";
import { HeroSection } from "@/components/sections/hero";
import { SolutionsSection } from "@/components/sections/solutions";
import { ClientsSection } from "@/components/sections/clients";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <SolutionsSection />
        <ClientsSection />
      </main>
      <Footer />
    </>
  );
}
