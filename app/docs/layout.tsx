import { DocsNavigation } from '@/components/navigation/docs-navigation'
import { Footer } from '@/components/layout/footer'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DocsNavigation />
      {children}
      <Footer />
    </>
  )
}
