import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
    title: string
    href?: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
    className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav
            aria-label="breadcrumb"
            className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
        >
            <Link
                href="/"
                className="flex items-center hover:text-foreground transition-colors"
                aria-label="홈으로 이동"
            >
                <Home className="h-4 w-4" />
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-1">
                    <ChevronRight className="h-4 w-4" />
                    {item.href && index < items.length - 1 ? (
                        <Link
                            href={item.href}
                            className="hover:text-foreground transition-colors"
                        >
                            {item.title}
                        </Link>
                    ) : (
                        <span className="text-foreground font-medium">
                            {item.title}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    )
}