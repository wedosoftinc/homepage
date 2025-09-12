import { Inter } from 'next/font/google'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'We Do Soft - 기업의 디지털 혁신을 위한 최적의 파트너',
    description: '글로벌 SaaS로 혁신을 가속화하세요. 최신 AI 기술부터 검증된 비즈니스 도구까지, 귀사의 성장을 위한 최적의 솔루션',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body className={inter.className}>{children}</body>
        </html>
    )
}