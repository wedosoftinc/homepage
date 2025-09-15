import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { designTokens } from "@/lib/design-tokens"

interface TicketItemProps {
    title: string
    customer?: string
    assignee?: string
    status: {
        label: string
        variant: 'default' | 'secondary' | 'outline' | 'destructive'
        color?: string
    }
    timestamp: string
    priority?: 'low' | 'medium' | 'high' | 'urgent'
    icon?: LucideIcon
    onClick?: () => void
    className?: string
}

const priorityColors = {
    low: "bg-green-500",
    medium: "bg-blue-500",
    high: "bg-orange-500",
    urgent: "bg-red-500"
}

const priorityBgColors = {
    low: "bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900/50",
    medium: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50",
    high: "bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50",
    urgent: "bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50"
}

export function TicketItem({
    title,
    customer,
    assignee,
    status,
    timestamp,
    priority = 'medium',
    icon: IconComponent,
    onClick,
    className
}: TicketItemProps) {
    return (
        <Card
            className={cn(
                "p-4 border transition-all duration-200 cursor-pointer hover:shadow-md",
                priorityBgColors[priority],
                onClick && "hover:bg-muted/50",
                className
            )}
            onClick={onClick}
            style={{
                borderRadius: designTokens.radius.md,
                transitionDuration: designTokens.animation.duration.normal
            }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* 우선순위 인디케이터 */}
                    <div
                        className={cn("w-3 h-3 rounded-full flex-shrink-0", priorityColors[priority])}
                        style={{ borderRadius: designTokens.radius.full }}
                    />

                    {/* 아이콘 (선택사항) */}
                    {IconComponent && (
                        <IconComponent className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}

                    {/* 티켓 정보 */}
                    <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground truncate">{title}</div>
                        <div className="text-sm text-muted-foreground">
                            {customer && <span>고객: {customer}</span>}
                            {customer && assignee && <span> • </span>}
                            {assignee && <span>담당자: {assignee}</span>}
                        </div>
                    </div>
                </div>

                {/* 상태 및 시간 */}
                <div className="text-right flex-shrink-0 ml-4">
                    <Badge
                        variant={status.variant}
                        className="mb-1"
                        style={{
                            borderRadius: designTokens.radius.xs,
                            backgroundColor: status.color
                        }}
                    >
                        {status.label}
                    </Badge>
                    <div className="text-xs text-muted-foreground">{timestamp}</div>
                </div>
            </div>
        </Card>
    )
}