"use client"

import * as React from "react"
import Link from "next/link"
import {
    ChatBubbleLeftRightIcon,
    RocketLaunchIcon,
    ServerIcon
} from "@heroicons/react/24/outline"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface SolutionsDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function SolutionsDialog({ open, onOpenChange }: SolutionsDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[850px] p-0">
                <DialogHeader className="p-6 pb-4">
                    <DialogTitle className="text-2xl font-bold">
                        솔루션 둘러보기
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mt-2">
                        카테고리별로 최적화된 비즈니스 솔루션을 확인하세요
                    </DialogDescription>
                </DialogHeader>

                <div className="p-6 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* 고객 경험 & 세일즈 관리 카드 */}
                        <Link
                            href="/solutions/customer-experience"
                            className="group block rounded-lg border-2 border-border/50 p-4 transition-all duration-300 hover:border-primary hover:shadow-lg hover:scale-[1.02]"
                            onClick={() => onOpenChange(false)}
                        >
                            <div className="space-y-3">
                                <div className="flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                        7개 제품
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                                        고객 경험 관리
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Freshworks로 고객 지원부터 영업까지 완벽한 경험 제공
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Freshdesk</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Freshsales</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">+5</span>
                                </div>
                            </div>
                        </Link>

                        {/* 협업 및 생산성 향상 카드 */}
                        <Link
                            href="/solutions/collaboration"
                            className="group block rounded-lg border-2 border-border/50 p-4 transition-all duration-300 hover:border-primary hover:shadow-lg hover:scale-[1.02]"
                            onClick={() => onOpenChange(false)}
                        >
                            <div className="space-y-3">
                                <div className="flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <RocketLaunchIcon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                        5개 제품
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                                        협업 및 생산성
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Google, Monday로 팀워크와 효율성을 극대화
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Google</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Monday</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">+3</span>
                                </div>
                            </div>
                        </Link>

                        {/* IT 인프라 관리 카드 */}
                        <Link
                            href="/solutions/infrastructure"
                            className="group block rounded-lg border-2 border-border/50 p-4 transition-all duration-300 hover:border-primary hover:shadow-lg hover:scale-[1.02]"
                            onClick={() => onOpenChange(false)}
                        >
                            <div className="space-y-3">
                                <div className="flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <ServerIcon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                        2개 제품
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                                        IT 인프라 관리
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        안전하고 유연한 IT 서비스 및 원격 지원
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Freshservice</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Splashtop</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
