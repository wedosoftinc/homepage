import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/layout/footer'

export default function SolutionsLayout({
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