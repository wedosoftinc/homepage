import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    variant?: "default" | "muted" | "accent";
    padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, variant = "default", padding = "lg", ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    {
                        "bg-background": variant === "default",
                        "bg-muted": variant === "muted",
                        "bg-accent": variant === "accent",
                    },
                    {
                        "py-0": padding === "none",
                        "py-8": padding === "sm",
                        "py-12": padding === "md",
                        "py-16 lg:py-24": padding === "lg",
                        "py-20 lg:py-32": padding === "xl",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Section.displayName = "Section";

export { Section };