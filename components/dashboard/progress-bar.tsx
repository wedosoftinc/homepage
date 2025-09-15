import { cn } from "@/lib/utils"
import { designTokens } from "@/lib/design-tokens"

interface ProgressBarProps {
    value: number // 0-100
    label?: string
    showValue?: boolean
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
    size?: 'sm' | 'md' | 'lg'
    animated?: boolean
    className?: string
}

const variantStyles = {
    default: "bg-primary",
    success: "bg-green-500",
    warning: "bg-orange-500",
    error: "bg-red-500",
    info: "bg-blue-500"
}

const sizeStyles = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3"
}

export function ProgressBar({
    value,
    label,
    showValue = false,
    variant = 'default',
    size = 'md',
    animated = false,
    className
}: ProgressBarProps) {
    const clampedValue = Math.min(Math.max(value, 0), 100)

    return (
        <div className={cn("space-y-2", className)}>
            {(label || showValue) && (
                <div className="flex items-center justify-between text-sm">
                    {label && <span className="text-muted-foreground">{label}</span>}
                    {showValue && (
                        <span className="font-semibold">{Math.round(clampedValue)}%</span>
                    )}
                </div>
            )}

            <div
                className={cn(
                    "w-full bg-muted rounded-full overflow-hidden",
                    sizeStyles[size]
                )}
                style={{ borderRadius: designTokens.radius.full }}
            >
                <div
                    className={cn(
                        "h-full rounded-full transition-all duration-300 ease-out",
                        variantStyles[variant],
                        animated && "transition-all duration-1000"
                    )}
                    style={{
                        width: `${clampedValue}%`,
                        borderRadius: designTokens.radius.full
                    }}
                />
            </div>
        </div>
    )
}