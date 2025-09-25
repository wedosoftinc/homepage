'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

// 폼 스키마 정의
const contactFormSchema = z.object({
    name: z.string().min(2, '이름은 최소 2글자 이상이어야 합니다'),
    email: z.string().email('올바른 이메일 주소를 입력해주세요'),
    phone: z.string().optional(),
    company: z.string().min(1, '회사명을 입력해주세요'),
    position: z.string().optional(),
    inquiryType: z.string().min(1, '문의 유형을 선택해주세요'),
    interestedProduct: z.string().optional(),
    subject: z.string().min(1, '제목을 입력해주세요'),
    message: z.string().min(10, '문의 내용은 최소 10글자 이상 입력해주세요'),
    privacyConsent: z.boolean().refine(val => val === true, {
        message: '개인정보 수집 및 이용에 동의해주세요',
    }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
    className?: string
}

export function ContactForm({ className }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            position: '',
            inquiryType: '',
            interestedProduct: '',
            subject: '',
            message: '',
            privacyConsent: false,
        },
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (result.success) {
                setSubmitStatus('success')
                setSubmitMessage('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.')
                form.reset()
            } else {
                setSubmitStatus('error')
                setSubmitMessage(result.message || '문의 전송에 실패했습니다.')
            }
        } catch (error) {
            setSubmitStatus('error')
            setSubmitMessage('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={className}>
            <Card className="w-full">
                <CardContent className="pt-6">
                    {/* 상태 메시지 */}
                    {submitStatus !== 'idle' && (
                        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                                ? 'bg-green-50 text-green-700 border border-green-200'
                                : 'bg-red-50 text-red-700 border border-red-200'
                            }`}>
                            {submitStatus === 'success' ? (
                                <CheckCircleIcon className="h-5 w-5" />
                            ) : (
                                <ExclamationCircleIcon className="h-5 w-5" />
                            )}
                            <span>{submitMessage}</span>
                        </div>
                    )}

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {/* 개인정보 섹션 */}
                            <div className="space-y-3">
                                <h3 className="text-base font-semibold border-b pb-1">개인정보</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>이름 *</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="홍길동" 
                                                        className="placeholder:text-muted-foreground/40"
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>이메일 *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="example@company.com"
                                                        className="placeholder:text-muted-foreground/40"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>연락처</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="010-1234-5678" 
                                                        className="placeholder:text-muted-foreground/40"
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="position"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>직책</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="팀장, 과장 등" 
                                                        className="placeholder:text-muted-foreground/40"
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>회사명 *</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="(주)위두소프트" 
                                                    className="placeholder:text-muted-foreground/40"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* 문의내용 섹션 */}
                            <div className="space-y-3">
                                <h3 className="text-base font-semibold border-b pb-1">문의내용</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="inquiryType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>문의 유형 *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="문의 유형을 선택하세요" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="제품문의">제품 문의</SelectItem>
                                                        <SelectItem value="가격문의">가격 문의</SelectItem>
                                                        <SelectItem value="도입상담">도입 상담</SelectItem>
                                                        <SelectItem value="기술지원">기술 지원</SelectItem>
                                                        <SelectItem value="파트너십">파트너십</SelectItem>
                                                        <SelectItem value="기타">기타</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="interestedProduct"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>관심 제품</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="관심 있는 제품을 선택하세요" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Freshdesk">Freshdesk</SelectItem>
                                                        <SelectItem value="Freshdesk Omni">Freshdesk Omni</SelectItem>
                                                        <SelectItem value="Freshservice">Freshservice</SelectItem>
                                                        <SelectItem value="Monday Service">Monday Service</SelectItem>
                                                        <SelectItem value="Google Workspace">Google Workspace</SelectItem>
                                                        <SelectItem value="기타">기타</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>제목 *</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="문의 제목을 입력하세요" 
                                                    className="placeholder:text-muted-foreground/40"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>상세 문의 내용 *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="궁금한 사항이나 요청사항을 자세히 작성해주세요. (최소 10글자 이상)"
                                                    className="min-h-[80px] resize-none placeholder:text-muted-foreground/40"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* 개인정보 처리방침 동의 */}
                            <FormField
                                control={form.control}
                                name="privacyConsent"
                                render={({ field }) => (
                                    <FormItem className="bg-muted/20 p-3 rounded-lg">
                                        <div className="flex items-start space-x-3">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="mt-0.5"
                                                />
                                            </FormControl>
                                            <div className="flex-1">
                                                <FormLabel className="text-sm font-medium cursor-pointer">
                                                    개인정보 수집 및 이용에 동의합니다. (필수)
                                                </FormLabel>
                                                <p className="text-xs text-muted-foreground mt-0.5">
                                                    문의 처리를 위해 개인정보를 수집하며, 처리 완료 후 관련 법령에 따라 보관됩니다.{' '}
                                                    <Link 
                                                        href="/privacy-policy" 
                                                        target="_blank"
                                                        className="text-primary hover:underline"
                                                    >
                                                        자세한 내용 보기
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* 제출 버튼 */}
                            <Button
                                type="submit"
                                className="w-full mt-6"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                        전송 중...
                                    </>
                                ) : (
                                    <>
                                        <PaperAirplaneIcon className="h-4 w-4 mr-2" />
                                        문의 전송하기
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}