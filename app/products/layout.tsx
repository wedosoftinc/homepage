import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/layout/footer'

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen">
            <MainNavigation />
            <main>{children}</main>
            <Footer />
        </div>
    )
}