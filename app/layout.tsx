import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL('https://wedosoft.net'),
    title: "(주)위두소프트 - 기업의 디지털 혁신을 위한 최적의 파트너",
    description: "Monday.com, Freshworks, Google Workspace 등 글로벌 SaaS 솔루션으로 귀하의 비즈니스를 혁신하세요. 전문 컨설팅부터 구축, 교육까지 원스톱 서비스를 제공합니다.",
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
