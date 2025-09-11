"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Container } from "./container";
import { MegaMenu, solutionsMegaMenu, servicesMegaMenu } from "./mega-menu";
import { Logo } from "@/components/ui/logo";

const navigation = [
    { name: "가격", href: "/pricing" },
    { name: "블로그", href: "/blog" },
    { name: "회사소개", href: "/about" }
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Logo size="lg" showText={false} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <MegaMenu {...solutionsMegaMenu} />
                        <MegaMenu {...servicesMegaMenu} />
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <Link href="/contact">
                            <Button size="sm" className="hidden md:inline-flex">
                                문의하기
                            </Button>
                        </Link>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t bg-background animate-slide-down">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {/* Solutions Mobile Menu */}
                            <div>
                                <Link
                                    href="/solutions"
                                    className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    솔루션
                                </Link>
                                <div className="ml-4 space-y-1">
                                    {solutionsMegaMenu.sections.flatMap(section => section.items).map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Services Mobile Menu */}
                            <div>
                                <Link
                                    href="/services"
                                    className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    서비스
                                </Link>
                                <div className="ml-4 space-y-1">
                                    {servicesMegaMenu.sections.flatMap(section => section.items).map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Other Navigation Items */}
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="pt-4 border-t">
                                <Link href="/contact">
                                    <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                                        문의하기
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}