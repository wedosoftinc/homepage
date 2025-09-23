import { Footer } from '@/components/layout/footer'

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen">
            <main>{children}</main>
            <Footer />
        </div>
    )
}