import { MainNavigation } from "@/components/navigation/main-navigation"
import { Footer } from "@/components/layout/footer"

interface ProductsLayoutProps {
    children: React.ReactNode
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
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