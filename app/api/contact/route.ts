import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// 폼 데이터 검증 스키마
const contactSchema = z.object({
    name: z.string().min(2, '이름은 최소 2글자 이상이어야 합니다'),
    email: z.string().email('올바른 이메일 주소를 입력해주세요'),
    phone: z.string().optional(),
    company: z.string().min(1, '회사명을 입력해주세요'),
    position: z.string().optional(),
    inquiryType: z.string().min(1, '문의 유형을 선택해주세요'),
    interestedProduct: z.string().optional(),
    subject: z.string().min(1, '제목을 입력해주세요'),
    message: z.string().min(10, '문의 내용은 최소 10글자 이상 입력해주세요'),
})

// Gmail SMTP 설정
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // 데이터 검증
        const validatedData = contactSchema.parse(body)

        // 이메일 내용 구성
        const emailContent = `
새로운 문의가 접수되었습니다.

■ 고객 정보
- 이름: ${validatedData.name}
- 이메일: ${validatedData.email}
- 전화번호: ${validatedData.phone || '미입력'}
- 회사명: ${validatedData.company}
- 직책: ${validatedData.position || '미입력'}

■ 문의 내용
- 문의 유형: ${validatedData.inquiryType}
- 관심 제품: ${validatedData.interestedProduct || '미입력'}
- 제목: ${validatedData.subject}

■ 상세 문의 내용
${validatedData.message}

---
위두소프트 홈페이지 문의 시스템
접수 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}
    `.trim()

        // 개발 환경에서도 콘솔 출력으로 디버깅 정보 제공
        if (process.env.NODE_ENV === 'development') {
            console.log('=== Contact Form Submission ===')
            console.log(emailContent)
            console.log('=== End of Email Content ===')
        }

        // 실제 이메일 전송 (개발/프로덕션 모두)
        await transporter.sendMail({
            from: `"${validatedData.name} (위두소프트 홈페이지)" <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL_TO,
            subject: `[홈페이지 문의] ${validatedData.inquiryType} - ${validatedData.subject}`,
            text: emailContent,
            html: emailContent.replace(/\n/g, '<br>').replace(/■/g, '<strong>■</strong>'),
            replyTo: validatedData.email, // 고객 이메일로 답장 가능하게
        })

        return NextResponse.json({
            success: true,
            message: '문의가 성공적으로 전송되었습니다.'
        })

    } catch (error) {
        console.error('Contact form error:', error)

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, message: '입력 데이터가 올바르지 않습니다.', errors: error.issues },
                { status: 400 }
            )
        }

        return NextResponse.json(
            { success: false, message: '문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
            { status: 500 }
        )
    }
}