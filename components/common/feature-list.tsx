import { CheckCircleIcon as CheckCircle } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"
import { designTokens } from "@/lib/design-tokens"

interface FeatureListProps {
    features: Array<{
        text: string
        icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    }>
    iconColor?: string
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

const sizeStyles = {
    sm: {
        container: "space-y-2",
        item: "gap-2",
        icon: "h-4 w-4",
        text: "text-sm"
    },
    md: {
        container: "space-y-3",
        item: "gap-3",
        icon: "h-5 w-5",
        text: "text-base"
    },
    lg: {
        container: "space-y-4",
        item: "gap-4",
        icon: "h-6 w-6",
        text: "text-lg"
    }
}

export function FeatureList({
    features,
    iconColor = "text-primary",
    size = 'md',
    className
}: FeatureListProps) {
    const styles = sizeStyles[size]

    return (
        <div className={cn(styles.container, className)}>
            {features.map((feature, index) => {
                const IconComponent = feature.icon || CheckCircle

                return (
                    <div key={index} className={cn("flex items-center", styles.item)}>
                        <div
                            className={cn(
                                "rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                size === 'sm' ? "w-5 h-5" : size === 'md' ? "w-6 h-6" : "w-8 h-8"
                            )}
                            style={{ borderRadius: designTokens.radius.full }}
                        >
                            <IconComponent className={cn(styles.icon, iconColor)} />
                        </div>
                        <span className={cn("font-medium text-foreground", styles.text)}>
                            {feature.text}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}