'use client'

import { cn } from '@/lib/utils'

interface ClientLogoProps {
    name: string
    logo: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export function ClientLogo({ name, logo, className, style }: ClientLogoProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center p-6 rounded-lg",
                "grayscale hover:grayscale-0 transition-all duration-300",
                "opacity-60 hover:opacity-100",
                "transform hover:scale-105",
                "bg-background/50 hover:bg-background",
                "border border-transparent hover:border-border",
                className
            )}
            style={style}
        >
            <div className="w-24 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300">
                {logo}
            </div>
            <span className="sr-only">{name}</span>
        </div>
    )
}