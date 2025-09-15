import { cn } from "@/lib/utils"
import { designTokens } from "@/lib/design-tokens"

interface MetricCardProps {
    value: string | number
    label: string
    trend?: {
        value: string
        direction: 'up' | 'down' | 'neutral'
    }
    icon?: React.ReactNode
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

const variantStyles = {
    default: "bg-background border-border text-foreground",
    success: "bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900/50 text-green-700 dark:text-green-400",
    warning: "bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50 text-orange-700 dark:text-orange-400",
    error: "bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50 text-red-700 dark:text-red-400",
    info: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50 text-blue-700 dark:text-blue-400"
}

const sizeStyles = {
    sm: "p-5",
    md: "p-6",
    lg: "p-8"
}

const trendStyles = {
    up: "text-green-600 dark:text-green-400",
    down: "text-red-600 dark:text-red-400",
    neutral: "text-muted-foreground"
}

export function MetricCard({
    value,
    label,
    trend,
    icon,
    variant = 'default',
    size = 'md',
    className
}: MetricCardProps) {
    return (
        <div
            className={cn(
                "border rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
            style={{ borderRadius: designTokens.radius.md }}
        >
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-sm font-medium opacity-80">{label}</div>
                    {trend && (
                        <div className={cn("text-xs font-medium", trendStyles[trend.direction])}>
                            {trend.direction === 'up' && '↗'}
                            {trend.direction === 'down' && '↘'}
                            {trend.value}
                        </div>
                    )}
                </div>
                {icon && (
                    <div className="opacity-60">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    )
}