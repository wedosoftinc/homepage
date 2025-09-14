import { cn } from "@/lib/utils"

interface PageHeaderProps {
    title: string
    description?: string
    className?: string
    children?: React.ReactNode
}

export function PageHeader({
    title,
    description,
    className,
    children,
}: PageHeaderProps) {
    return (
        <div className={cn("space-y-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32", className)}>
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                <h1 className="font-bold text-3xl leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
                    {title}
                </h1>
                {description && (
                    <p className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
                        {description}
                    </p>
                )}
                {children}
            </div>
        </div>
    )
}