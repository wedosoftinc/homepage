"use client";

import Image from "next/image";
import { useTheme } from "@/components/theme";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    variant?: "light" | "dark" | "auto";
    size?: "sm" | "md" | "lg";
    showText?: boolean;
}

export function Logo({ className, variant = "auto", size = "md", showText = false }: LogoProps) {
    const { theme } = useTheme();

    // 테마에 따른 로고 선택
    const getLogoSrc = () => {
        if (variant === "light") return "/images/logos/logo-dark.png"; // 라이트 배경에는 다크 로고
        if (variant === "dark") return "/images/logos/logo-light.png"; // 다크 배경에는 라이트 로고

        // auto 모드일 때 현재 테마에 따라 결정
        if (theme === "dark") return "/images/logos/logo-dark.png"; // 다크 테마에는 흰색 로고
        if (theme === "light") return "/images/logos/logo-light.png"; // 라이트 테마에는 어두운 로고

        // 시스템 테마일 때는 CSS로 처리 (기본값은 라이트 테마용)
        return "/images/logos/logo-light.png";
    };

    const textSizeClasses = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-3xl"
    };

    return (
        <div className={cn("flex items-center", showText && "space-x-3", className)}>
            {/* Logo Image */}
            <div className={cn(
                "relative flex items-center justify-center",
                size === "sm" && "h-6 w-6",
                size === "md" && "h-8 w-8",
                size === "lg" && "h-20 w-20"
            )}>
                <Image
                    src={getLogoSrc()}
                    alt="WedoSoft 로고"
                    width={80}
                    height={80}
                    className={cn(
                        "max-w-full max-h-full object-contain",
                        variant === "auto" && theme === "system" && "dark:hidden"
                    )}
                />
                {/* 시스템 테마일 때 다크모드용 로고 */}
                {variant === "auto" && theme === "system" && (
                    <Image
                        src="/images/logos/logo-dark.png"
                        alt="WedoSoft 로고"
                        width={80}
                        height={80}
                        className={cn(
                            "max-w-full max-h-full object-contain hidden dark:block absolute inset-0"
                        )}
                    />
                )}
            </div>

            {/* Company Name */}
            {showText && (
                <div className="flex flex-col">
                    <span className={cn(
                        "font-bold tracking-tight leading-none",
                        textSizeClasses[size],
                        variant === "light" && "text-white",
                        variant === "dark" && "text-gray-900",
                        variant === "auto" && "text-foreground"
                    )}>
                        WedoSoft
                    </span>
                    {size === "lg" && (
                        <span className={cn(
                            "text-xs font-medium tracking-wide opacity-70 mt-0.5",
                            variant === "light" && "text-white",
                            variant === "dark" && "text-gray-600",
                            variant === "auto" && "text-muted-foreground"
                        )}>
                            디지털 전환 파트너
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

// 아이콘만 사용하는 경우
export function LogoIcon({ className, variant = "auto", size = "md" }: { className?: string; variant?: "light" | "dark" | "auto"; size?: "sm" | "md" | "lg" }) {
    const { theme } = useTheme();

    const getLogoSrc = () => {
        if (variant === "light") return "/images/logos/logo-dark.png"; // 라이트 배경에는 다크 로고
        if (variant === "dark") return "/images/logos/logo-light.png"; // 다크 배경에는 라이트 로고

        if (theme === "dark") return "/images/logos/logo-dark.png"; // 다크 테마에는 흰색 로고
        if (theme === "light") return "/images/logos/logo-light.png"; // 라이트 테마에는 어두운 로고

        return "/images/logos/logo-light.png";
    };

    return (
        <div className={cn(
            "relative flex items-center justify-center",
            size === "sm" && "h-6 w-6",
            size === "md" && "h-8 w-8",
            size === "lg" && "h-20 w-20",
            className
        )}>
            <Image
                src={getLogoSrc()}
                alt="WedoSoft 로고"
                width={80}
                height={80}
                className={cn(
                    "max-w-full max-h-full object-contain",
                    variant === "auto" && theme === "system" && "dark:hidden"
                )}
            />
            {variant === "auto" && theme === "system" && (
                <Image
                    src="/images/logos/logo-dark.png"
                    alt="WedoSoft 로고"
                    width={80}
                    height={80}
                    className={cn(
                        "max-w-full max-h-full object-contain hidden dark:block absolute inset-0"
                    )}
                />
            )}
        </div>
    );
}

// 텍스트만 사용하는 경우
export function LogoText({ className, variant = "auto", size = "md" }: LogoProps) {
    const textSizeClasses = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-3xl"
    };

    return (
        <div className={cn("flex flex-col", className)}>
            <span className={cn(
                "font-bold tracking-tight leading-none",
                textSizeClasses[size],
                variant === "light" && "text-white",
                variant === "dark" && "text-gray-900",
                variant === "auto" && "text-foreground"
            )}>
                WedoSoft
            </span>
            {size === "lg" && (
                <span className={cn(
                    "text-xs font-medium tracking-wide opacity-70 mt-0.5",
                    variant === "light" && "text-white",
                    variant === "dark" && "text-gray-600",
                    variant === "auto" && "text-muted-foreground"
                )}>
                    디지털 전환 파트너
                </span>
            )}
        </div>
    );
}