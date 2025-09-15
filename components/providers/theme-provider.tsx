"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

interface ThemeProviderProps {
    children: React.ReactNode
    attribute?: "class" | "data-theme"
    defaultTheme?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
}

export function ThemeProvider({
    children,
    attribute = "class",
    defaultTheme = "dark",  // 🌙 다크모드를 기본값으로 설정
    enableSystem = true,
    disableTransitionOnChange = false,
    ...props
}: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            disableTransitionOnChange={disableTransitionOnChange}
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
}