import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ErrorMessageProps {
    title?: string
    message?: string
    showRetry?: boolean
    showHome?: boolean
    onRetry?: () => void
    className?: string
}

export function ErrorMessage({
    title = "오류가 발생했습니다",
    message = "요청을 처리하는 중에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    showRetry = true,
    showHome = false,
    onRetry,
    className
}: ErrorMessageProps) {
    return (
        <Card className={cn("max-w-md mx-auto", className)}>
            <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{message}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                {showRetry && onRetry && (
                    <Button onClick={onRetry} variant="outline" className="w-full">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        다시 시도
                    </Button>
                )}
                {showHome && (
                    <Button variant="outline" className="w-full" asChild>
                        <a href="/">
                            <Home className="h-4 w-4 mr-2" />
                            홈으로 이동
                        </a>
                    </Button>
                )}
            </CardContent>
        </Card>
    )
}