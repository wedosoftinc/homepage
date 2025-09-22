'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Pause, MessageCircle, Mail, Phone, Clock } from "lucide-react"
import Image from "next/image"

interface Step {
    id: number
    title: string
    description: string
    image?: string
    highlight?: string
}

// 각 단계별 UI 컴포넌트
const StepUI = ({ step, stepNumber }: { step: Step; stepNumber: number }) => {
    switch (stepNumber) {
        case 1: // 고객 문의 접수
            return (
                <div className="h-full bg-gradient-to-br from-blue-50 to-white p-4 space-y-3">
                    <div className="bg-white rounded-lg shadow-sm p-3 border-l-4 border-blue-500">
                        <div className="flex items-center gap-2 mb-2">
                            <Mail className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium">새로운 문의</span>
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">긴급</span>
                        </div>
                        <p className="text-xs text-gray-600">"결제가 안 되는데 도움이 필요해요"</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-3 border-l-4 border-green-500">
                        <div className="flex items-center gap-2 mb-2">
                            <MessageCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium">라이브 채팅</span>
                        </div>
                        <p className="text-xs text-gray-600">"로그인이 안 됩니다"</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-3 border-l-4 border-purple-500">
                        <div className="flex items-center gap-2 mb-2">
                            <Phone className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-medium">전화 문의</span>
                        </div>
                        <p className="text-xs text-gray-600">"계정 복구 요청"</p>
                    </div>
                </div>
            )
        case 2: // AI 분석 및 분류
            return (
                <div className="h-full bg-gradient-to-br from-purple-50 to-white p-4">
                    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">AI</span>
                            </div>
                            <span className="text-sm font-medium">Freddy AI 분석 중...</span>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-purple-100 rounded p-2">
                                <div className="text-xs font-medium text-purple-800">카테고리: 결제 문제</div>
                                <div className="text-xs text-purple-600">우선순위: 높음</div>
                            </div>
                            <div className="bg-blue-100 rounded p-2">
                                <div className="text-xs font-medium text-blue-800">감정 분석: 불만</div>
                                <div className="text-xs text-blue-600">긴급도: 즉시 처리 필요</div>
                            </div>
                            <div className="bg-green-100 rounded p-2">
                                <div className="text-xs font-medium text-green-800">추천 액션</div>
                                <div className="text-xs text-green-600">결제 담당자에게 즉시 배정</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 3: // 자동 응답 생성
            return (
                <div className="h-full bg-gradient-to-br from-green-50 to-white p-4">
                    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="text-sm font-medium">AI 응답 생성</span>
                        </div>
                        <div className="bg-gray-50 rounded p-3 mb-3">
                            <div className="text-xs font-medium mb-2">자동 생성된 응답:</div>
                            <div className="text-xs text-gray-700 leading-relaxed">
                                "안녕하세요! 결제 문제로 불편을 드려 죄송합니다.
                                결제 과정에서 오류가 발생한 것 같습니다.
                                다음 단계를 시도해 보시겠어요?
                                1. 브라우저 캐시 삭제
                                2. 다른 결제 수단 시도
                                곧바로 해결해 드리겠습니다."
                            </div>
                        </div>
                        <div className="text-xs text-green-600">✅ 지식베이스 기반 답변 완성</div>
                    </div>
                </div>
            )
        case 4: // 고객에게 즉시 응답
            return (
                <div className="h-full bg-gradient-to-br from-blue-50 to-white p-4">
                    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
                        <div className="flex items-center gap-2 mb-3">
                            <Clock className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium">고객 응답 완료</span>
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">해결됨</span>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-blue-100 rounded p-2">
                                <div className="text-xs font-medium text-blue-800">응답 시간: 0.8초</div>
                                <div className="text-xs text-blue-600">만족도: ⭐⭐⭐⭐⭐</div>
                            </div>
                            <div className="bg-green-100 rounded p-2">
                                <div className="text-xs font-medium text-green-800">고객 피드백</div>
                                <div className="text-xs text-green-600">"빠른 해결 감사합니다!"</div>
                            </div>
                            <div className="bg-gray-100 rounded p-2">
                                <div className="text-xs font-medium text-gray-800">다음 액션</div>
                                <div className="text-xs text-gray-600">AI 학습 데이터로 저장됨</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div className="h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-lg font-semibold text-gray-600">Step {stepNumber}</div>
                        <div className="text-sm text-gray-500">{step?.title}</div>
                    </div>
                </div>
            )
    }
}

interface StepByStepDemoProps {
    title: string
    description: string
    steps: Step[]
    autoPlay?: boolean
    interval?: number
}

export function StepByStepDemo({
    title,
    description,
    steps,
    autoPlay = false,
    interval = 3000
}: StepByStepDemoProps) {
    const [currentStep, setCurrentStep] = useState(0)
    const [isPlaying, setIsPlaying] = useState(autoPlay)

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying) return

        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length)
        }, interval)

        return () => clearInterval(timer)
    }, [isPlaying, steps.length, interval])

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
    }

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
    }

    const goToStep = (index: number) => {
        setCurrentStep(index)
    }

    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
                    {/* Left: 3D Mockup Area */}
                    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">
                        <div className="relative">
                            {/* MacBook Frame */}
                            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                <div className="bg-gray-800 rounded-lg p-2 shadow-2xl">
                                    <div className="bg-black rounded-md h-64 w-96 relative overflow-hidden">
                                        {/* Screen Content */}
                                        <div className="absolute inset-2 bg-white rounded-sm overflow-hidden">
                                            {steps[currentStep]?.image ? (
                                                <Image
                                                    src={steps[currentStep].image}
                                                    alt={steps[currentStep].title}
                                                    fill
                                                    className="object-cover rounded-sm"
                                                />
                                            ) : (
                                                <StepUI
                                                    step={steps[currentStep]}
                                                    stepNumber={currentStep + 1}
                                                />
                                            )}

                                            {/* Highlight Overlay */}
                                            {steps[currentStep]?.highlight && (
                                                <div className="absolute bottom-2 right-2">
                                                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs animate-pulse">
                                                        {steps[currentStep].highlight}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* MacBook keyboard area */}
                                    <div className="h-8 bg-gray-700 rounded-b-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Step Content */}
                    <div className="p-8 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                                <p className="text-muted-foreground">{description}</p>
                            </div>

                            {/* Current Step */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-lg font-semibold">
                                        Step {currentStep + 1}: {steps[currentStep]?.title}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setIsPlaying(!isPlaying)}
                                        >
                                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                        </Button>
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {steps[currentStep]?.description}
                                </p>
                            </div>

                            {/* Step Navigation */}
                            <div className="space-y-4">
                                {/* Progress Dots */}
                                <div className="flex justify-center gap-2">
                                    {steps.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToStep(index)}
                                            className={`w-3 h-3 rounded-full transition-colors ${index === currentStep
                                                ? 'bg-blue-600'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Navigation Buttons */}
                                <div className="flex justify-between">
                                    <Button
                                        variant="outline"
                                        onClick={prevStep}
                                        disabled={currentStep === 0}
                                    >
                                        <ChevronLeft className="h-4 w-4 mr-1" />
                                        이전
                                    </Button>
                                    <Button
                                        onClick={nextStep}
                                        disabled={currentStep === steps.length - 1}
                                    >
                                        다음
                                        <ChevronRight className="h-4 w-4 ml-1" />
                                    </Button>
                                </div>
                            </div>

                            {/* Step List */}
                            <div className="space-y-2">
                                <h5 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                                    모든 단계
                                </h5>
                                <div className="space-y-1">
                                    {steps.map((step, index) => (
                                        <button
                                            key={step.id}
                                            onClick={() => goToStep(index)}
                                            className={`w-full text-left p-2 rounded-md text-sm transition-colors ${index === currentStep
                                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                                : 'hover:bg-gray-50'
                                                }`}
                                        >
                                            {index + 1}. {step.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}