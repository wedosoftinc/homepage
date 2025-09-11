'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PerspectiveImageProps {
    src: string
    alt: string
    className?: string
    width?: number
    height?: number
}

export function PerspectiveImage({
    src,
    alt,
    className,
    width = 800,
    height = 600
}: PerspectiveImageProps) {
    return (
        <div className={cn(
            "relative group",
            "transform-gpu transition-all duration-700 ease-out",
            "perspective-[1200px] transform-style-preserve-3d",
            className
        )}>
            {/* 3D Container */}
            <div className={cn(
                "relative transform-gpu transition-all duration-700 ease-out",
                "rotate-x-[15deg] rotate-y-[-10deg] scale-95",
                "group-hover:rotate-x-[10deg] group-hover:rotate-y-[-5deg] group-hover:scale-100",
                "shadow-[0_25px_50px_rgba(0,0,0,0.25)] group-hover:shadow-[0_35px_70px_rgba(0,0,0,0.35)]"
            )}>
                <div className="relative overflow-hidden rounded-lg bg-background border">
                    {/* Main image */}
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Glass-like overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />

                    {/* Highlight effect */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    {/* Reflection shimmer */}
                    <div className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                        "bg-gradient-to-br from-white/10 via-transparent to-transparent"
                    )} />
                </div>

                {/* Enhanced shadow */}
                <div className={cn(
                    "absolute -bottom-8 left-1/2 transform -translate-x-1/2 -translate-z-4",
                    "w-[85%] h-8 bg-black/30 rounded-full blur-2xl",
                    "transition-all duration-700 group-hover:w-[90%] group-hover:h-10 group-hover:bg-black/40"
                )} />
            </div>
        </div>
    )
}