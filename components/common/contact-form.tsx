"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Send } from "lucide-react"

interface ContactFormProps {
    title?: string
    description?: string
    showContactInfo?: boolean
}

export function ContactForm({
    title = "문의하기",
    description = "궁금한 사항이 있으시면 언제든지 연락주세요.",
    showContactInfo = true
}: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // 실제 폼 제출 로직을 여기에 구현
        console.log("폼 데이터:", formData)

        // 임시 딜레이
        await new Promise(resolve => setTimeout(resolve, 1000))

        alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.")
        setIsSubmitting(false)

        // 폼 초기화
        setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            message: ""
        })
    }

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            {/* 연락처 정보 */}
            {showContactInfo && (
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{title}</h3>
                        <p className="text-muted-foreground mb-6">{description}</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-primary" />
                            <div>
                                <p className="font-medium">전화 문의</p>
                                <p className="text-sm text-muted-foreground">02-2135-3071</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-primary" />
                            <div>
                                <p className="font-medium">이메일 문의</p>
                                <p className="text-sm text-muted-foreground">support@wedosoft.net</p>
                            </div>
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">운영 시간</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex justify-between">
                                <span>평일</span>
                                <span>09:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>토요일</span>
                                <span>09:00 - 13:00</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>일요일/공휴일</span>
                                <span>휴무</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* 문의 폼 */}
            <Card>
                <CardHeader>
                    <CardTitle>온라인 문의</CardTitle>
                    <CardDescription>
                        아래 양식을 작성해주시면 담당자가 빠르게 연락드리겠습니다.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">이름 *</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">이메일 *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="company">회사명</Label>
                                <Input
                                    id="company"
                                    value={formData.company}
                                    onChange={(e) => handleChange("company", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">연락처</Label>
                                <Input
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject">문의 유형</Label>
                            <Select onValueChange={(value) => handleChange("subject", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="문의 유형을 선택해주세요" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">일반 문의</SelectItem>
                                    <SelectItem value="demo">데모 요청</SelectItem>
                                    <SelectItem value="pricing">가격 문의</SelectItem>
                                    <SelectItem value="support">기술 지원</SelectItem>
                                    <SelectItem value="partnership">파트너십</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">문의 내용 *</Label>
                            <Textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={(e) => handleChange("message", e.target.value)}
                                placeholder="궁금한 사항을 자세히 작성해주세요."
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                "전송 중..."
                            ) : (
                                <>
                                    <Send className="h-4 w-4 mr-2" />
                                    문의 보내기
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}