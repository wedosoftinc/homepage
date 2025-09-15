import { Button } from "@/components/ui/button"
import { ArrowRight, Play, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { designTokens } from "@/lib/design-tokens"

interface CTAButton {
    text: string
    href?: string
    onClick?: () => void
    variant?: "default" | "secondary" | "outline" | "ghost"
    size?: "sm" | "default" | "lg"
    icon?: LucideIcon
    iconPosition?: 'left' | 'right'
}

interface CTAButtonGroupProps {
    buttons: CTAButton[]
    layout?: 'horizontal' | 'vertical'
    align?: 'left' | 'center' | 'right'
    spacing?: 'sm' | 'md' | 'lg'
    className?: string
}

const spacingStyles = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6"
}

const alignStyles = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
}

export function CTAButtonGroup({
    buttons,
    layout = 'horizontal',
    align = 'left',
    spacing = 'md',
    className
}: CTAButtonGroupProps) {
    return (
        <div
            className={cn(
                "flex",
                layout === 'horizontal' ? "flex-col sm:flex-row" : "flex-col",
                alignStyles[align],
                spacingStyles[spacing],
                className
            )}
        >
            {buttons.map((button, index) => {
                const IconComponent = button.icon

                return (
                    <Button
                        key={index}
                        variant={button.variant || "default"}
                        size={button.size || "lg"}
                        className={cn(
                            "font-medium transition-all duration-200 h-auto",
                            // Linear 스타일 패딩 적용
                            button.size === "sm" && "px-3 py-2 text-sm",
                            (!button.size || button.size === "default" || button.size === "lg") && "px-5 py-3 text-base",
                            // Linear 스타일 hover 효과
                            button.variant === "default" && "shadow-sm hover:shadow-md hover:scale-[1.02]",
                            button.variant === "outline" && "border hover:bg-muted/50 hover:scale-[1.02]"
                        )}
                        onClick={button.onClick}
                        asChild={!!button.href}
                        style={{
                            borderRadius: designTokens.radius.sm,
                            transitionDuration: designTokens.animation.duration.normal
                        }}
                    >
                        {button.href ? (
                            <a href={button.href}>
                                {IconComponent && button.iconPosition === 'left' && (
                                    <IconComponent className="mr-2 h-5 w-5" />
                                )}
                                {button.text}
                                {IconComponent && button.iconPosition === 'right' && (
                                    <IconComponent className="ml-2 h-5 w-5" />
                                )}
                                {!IconComponent && button.variant === "default" && (
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                )}
                            </a>
                        ) : (
                            <>
                                {IconComponent && button.iconPosition === 'left' && (
                                    <IconComponent className="mr-2 h-5 w-5" />
                                )}
                                {button.text}
                                {IconComponent && button.iconPosition === 'right' && (
                                    <IconComponent className="ml-2 h-5 w-5" />
                                )}
                                {!IconComponent && button.variant === "default" && (
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                )}
                            </>
                        )}
                    </Button>
                )
            })}
        </div>
    )
}