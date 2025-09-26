'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
    BoltIcon as Zap,
    EnvelopeIcon as Mail,
    ChatBubbleBottomCenterTextIcon as MessageSquare,
    CheckCircleIcon as CheckCircle,
    ClockIcon as Clock,
    SparklesIcon as Sparkles,
    UserIcon as User,
    CogIcon as Settings,
    DocumentTextIcon as FileText,
    FaceSmileIcon as Smile
} from "@heroicons/react/24/outline"

interface Step {
    id: number
    title: string
    description: string
    status: 'pending' | 'processing' | 'completed'
    icon: React.ReactNode
    color: string
    details: string[]
}

export function AIAgentDemo() {
    const [currentStep, setCurrentStep] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [progress, setProgress] = useState(0)

    const steps: Step[] = [
        {
            id: 1,
            title: "고객 문의 접수",
            description: "김민수님이 제품 환불에 대해 문의했습니다",
            status: 'pending',
            icon: <Mail className="h-5 w-5" />,
            color: "bg-blue-50 border-blue-200 text-blue-800",
            details: [
                "채널: 이메일",
                "고객: 김민수 (VIP)",
                "카테고리: 환불 문의",
                "긴급도: 보통"
            ]
        },
        {
            id: 2,
            title: "AI 에이전트 분석",
            description: "Freddy AI가 문의 내용과 고객 히스토리를 분석 중입니다",
            status: 'pending',
            icon: <Sparkles className="h-5 w-5" />,
            color: "bg-purple-50 border-purple-200 text-purple-800",
            details: [
                "감정 분석: 중립적",
                "구매 히스토리: 3회",
                "이전 문의: 0건",
                "고객 등급: VIP"
            ]
        },
        {
            id: 3,
            title: "자동 해결책 검색",
            description: "지식베이스에서 최적의 해결책을 찾았습니다",
            status: 'pending',
            icon: <FileText className="h-5 w-5" />,
            color: "bg-green-50 border-green-200 text-green-800",
            details: [
                "매칭된 문서: 5개",
                "신뢰도: 98%",
                "적용 가능한 정책: 환불 규정 3조",
                "예상 처리 시간: 즉시"
            ]
        },
        {
            id: 4,
            title: "자동 응답 발송",
            description: "개인화된 해결책과 함께 고객에게 응답을 보냈습니다",
            status: 'pending',
            icon: <MessageSquare className="h-5 w-5" />,
            color: "bg-blue-50 border-blue-200 text-blue-800",
            details: [
                "응답 시간: 0.8초",
                "개인화 요소: 3개",
                "첨부 파일: 환불 신청서",
                "후속 액션: 자동 설정됨"
            ]
        },
        {
            id: 5,
            title: "티켓 완료 처리",
            description: "문제가 완전히 해결되었고 만족도 조사를 발송했습니다",
            status: 'pending',
            icon: <CheckCircle className="h-5 w-5" />,
            color: "bg-green-50 border-green-200 text-green-800",
            details: [
                "해결 시간: 0.8초",
                "고객 만족도: 5/5",
                "에이전트 개입: 불필요",
                "자동 학습: 완료"
            ]
        }
    ]

    useEffect(() => {
        if (!isPlaying) return

        const timer = setInterval(() => {
            setCurrentStep(prev => {
                if (prev >= steps.length - 1) {
                    // 모든 단계 완료 후 3초 대기 후 재시작
                    setTimeout(() => {
                        setCurrentStep(0)
                        setProgress(0)
                    }, 3000)
                    return prev
                }
                return prev + 1
            })
        }, 4000) // 4초마다 다음 단계

        return () => clearInterval(timer)
    }, [isPlaying, steps.length])

    useEffect(() => {
        if (isPlaying) {
            const progressTimer = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        return 0
                    }
                    return prev + 2.5 // 4초에 걸쳐 0에서 100으로
                })
            }, 100)

            return () => clearInterval(progressTimer)
        }
    }, [isPlaying, currentStep])

    const getCurrentSteps = () => {
        return steps.map((step, index) => ({
            ...step,
            status: index < currentStep ? 'completed' :
                   index === currentStep ? 'processing' : 'pending'
        }))
    }

    const resetDemo = () => {
        setCurrentStep(0)
        setProgress(0)
        setIsPlaying(true)
    }

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                    <CardTitle className="text-xl">Freddy AI 에이전트 자동 해결 데모</CardTitle>
                </div>
                <p className="text-muted-foreground">
                    AI 에이전트가 고객 문의를 접수부터 해결까지 완전 자동으로 처리하는 과정
                </p>
                
                <div className="flex items-center justify-center gap-4 mt-4">
                    <Button
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? '일시정지' : '재생'}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm" 
                        onClick={resetDemo}
                    >
                        처음부터
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* 진행 상황 표시 */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>진행 상황</span>
                        <span>{currentStep + 1} / {steps.length}</span>
                    </div>
                    <Progress value={(currentStep / (steps.length - 1)) * 100} className="h-2" />
                </div>

                {/* 단계별 카드 */}
                <div className="grid gap-4">
                    {getCurrentSteps().map((step, index) => (
                        <Card 
                            key={step.id}
                            className={`transition-all duration-500 ${
                                step.status === 'processing' 
                                    ? 'ring-2 ring-purple-200 shadow-lg scale-105' 
                                    : step.status === 'completed'
                                    ? 'bg-muted/30'
                                    : ''
                            }`}
                        >
                            <CardContent className="p-4">
                                <div className="flex items-start gap-4">
                                    {/* 상태 아이콘 */}
                                    <div className={`
                                        rounded-full p-2 flex items-center justify-center
                                        ${step.status === 'completed' ? 'bg-green-100 text-green-600' :
                                          step.status === 'processing' ? 'bg-purple-100 text-purple-600 animate-pulse' :
                                          'bg-gray-100 text-gray-400'}
                                    `}>
                                        {step.status === 'completed' ? (
                                            <CheckCircle className="h-5 w-5" />
                                        ) : step.status === 'processing' ? (
                                            <div className="flex items-center justify-center">
                                                {step.icon}
                                            </div>
                                        ) : (
                                            step.icon
                                        )}
                                    </div>

                                    {/* 단계 정보 */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold">{step.title}</h3>
                                            <Badge 
                                                variant="secondary"
                                                className={step.status === 'processing' ? step.color : ''}
                                            >
                                                {step.status === 'completed' ? '완료' :
                                                 step.status === 'processing' ? '처리중' : '대기중'}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {step.description}
                                        </p>

                                        {/* 세부 정보 - 현재 처리중이거나 완료된 단계만 표시 */}
                                        {(step.status === 'processing' || step.status === 'completed') && (
                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                {step.details.map((detail, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-1 h-1 rounded-full bg-current opacity-60" />
                                                        <span className="text-muted-foreground">{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* 처리 시간 표시 */}
                                    {step.status === 'processing' && (
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Clock className="h-3 w-3" />
                                            <Progress value={progress} className="w-16 h-1" />
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* 완료 메시지 */}
                {currentStep >= steps.length - 1 && (
                    <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                        <CardContent className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Smile className="h-6 w-6 text-green-600" />
                                <h3 className="font-semibold text-green-800">AI 에이전트 처리 완료!</h3>
                            </div>
                            <p className="text-sm text-green-700">
                                총 처리 시간: 0.8초 | 에이전트 개입: 불필요 | 고객 만족도: 5/5
                            </p>
                        </CardContent>
                    </Card>
                )}
            </CardContent>
        </Card>
    )
}