import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { designTokens } from "@/lib/design-tokens"

interface DashboardCardProps {
    title: string
    icon?: LucideIcon
    iconBg?: string
    headerColor?: string
    children: React.ReactNode
    actions?: React.ReactNode
    size?: 'sm' | 'md' | 'lg'
    transform?: {
        rotateY?: number
        rotateX?: number
        translateZ?: number
    }
    animation?: string
    className?: string
}

const sizeStyles = {
    sm: "w-72 h-64",
    md: "w-80 h-72",
    lg: "w-96 h-80"
}

export function DashboardCard({
    title,
    icon: IconComponent,
    iconBg = "bg-white/20",
    headerColor = "bg-slate-600",
    children,
    actions,
    size = 'md',
    transform,
    animation,
    className
}: DashboardCardProps) {
    const transformStyle = transform ? {
        transform: `rotateY(${transform.rotateY || 0}deg) rotateX(${transform.rotateX || 0}deg) translateZ(${transform.translateZ || 0}px)`,
        animation: animation || undefined
    } : {}

    return (
        <div
            className={cn("transform-gpu", sizeStyles[size], className)}
            style={{
                ...transformStyle,
                filter: 'drop-shadow(0 25px 60px rgba(0, 0, 0, 0.12))'
            }}
        >
            <Card
                className="h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-0 shadow-2xl overflow-hidden"
                style={{ borderRadius: designTokens.radius.xl }}
            >
                {/* 헤더 */}
                <div
                    className={cn("text-white p-4 flex items-center justify-between", headerColor)}
                    style={{ borderRadius: `${designTokens.radius.xl} ${designTokens.radius.xl} 0 0` }}
                >
                    <div className="flex items-center gap-3">
                        {IconComponent && (
                            <div
                                className={cn("w-7 h-7 rounded-lg flex items-center justify-center backdrop-blur", iconBg)}
                                style={{ borderRadius: designTokens.radius.sm }}
                            >
                                <IconComponent className="h-4 w-4" />
                            </div>
                        )}
                        <span className="font-semibold">{title}</span>
                    </div>

                    {actions && (
                        <div className="flex items-center gap-2 opacity-80">
                            {actions}
                        </div>
                    )}
                </div>

                {/* 콘텐츠 */}
                <div className="p-5 h-[calc(100%-4rem)] overflow-auto">
                    {children}
                </div>
            </Card>
        </div>
    )
}