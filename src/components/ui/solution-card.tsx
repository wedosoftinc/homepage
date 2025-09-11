'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SolutionCardProps {
    title: string
    description: string
    href: string
    icon?: React.ReactNode
    features?: string[]
    className?: string
    style?: React.CSSProperties
}

export function SolutionCard({
    title,
    description,
    href,
    icon,
    features = [],
    className,
    style
}: SolutionCardProps) {
    return (
        <Link href={href} className="group block">
            <div
                className={cn(
                    "relative bg-background rounded-xl p-6 border border-border",
                    "hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20",
                    "transition-all duration-300 transform hover:-translate-y-1",
                    "overflow-hidden",
                    className
                )}
                style={style}
            >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    {icon && (
                        <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                            {icon}
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {description}
                    </p>

                    {/* Features */}
                    {features.length > 0 && (
                        <ul className="space-y-2 mb-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-muted-foreground">
                                    <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* CTA */}
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary-600 transition-colors duration-300">
                        자세히 보기
                        <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
            </div>
        </Link>
    )
}