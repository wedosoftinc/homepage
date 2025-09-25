import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { designTokens } from "@/lib/design-tokens"

interface BadgeItem {
    text: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    variant?: "default" | "secondary" | "outline" | "destructive"
}

interface BadgeGroupProps {
    badges: BadgeItem[]
    layout?: 'horizontal' | 'vertical'
    spacing?: 'sm' | 'md' | 'lg'
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

const spacingStyles = {
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3"
}

const sizeStyles = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",    // Linear 스타일 패딩
    lg: "px-4 py-2 text-base"
}

export function BadgeGroup({
    badges,
    layout = 'horizontal',
    spacing = 'md',
    size = 'md',
    className
}: BadgeGroupProps) {
    return (
        <div
            className={cn(
                "flex items-center",
                layout === 'horizontal' ? "flex-row flex-wrap" : "flex-col items-start",
                spacingStyles[spacing],
                className
            )}
        >
            {badges.map((badge, index) => {
                const IconComponent = badge.icon

                return (
                    <Badge
                        key={index}
                        variant={badge.variant || "secondary"}
                        className={cn(
                            "font-medium transition-all duration-200 hover:scale-105",
                            sizeStyles[size]
                        )}
                        style={{
                            borderRadius: designTokens.radius.sm, // Linear 스타일 radius
                            transitionDuration: designTokens.animation.duration.fast
                        }}
                    >
                        {IconComponent && (
                            <IconComponent className={cn(
                                "mr-1",
                                size === 'sm' ? "h-3 w-3" : size === 'md' ? "h-3 w-3" : "h-4 w-4"
                            )} />
                        )}
                        {badge.text}
                    </Badge>
                )
            })}
        </div>
    )
}