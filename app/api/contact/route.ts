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

// 견적서 전송용 간단한 스키마
const quoteSchema = z.object({
    email: z.string().email('올바른 이메일 주소를 입력해주세요'),
    subject: z.string().min(1, '제목을 입력해주세요'),
    message: z.string().min(10, '내용은 최소 10글자 이상 입력해주세요'),
    type: z.literal('quote').optional(),
})

// Gmail SMTP 설정 - 환경변수 검증 포함
function createTransporter() {
    const gmailUser = process.env.GMAIL_USER
    const gmailPassword = process.env.GMAIL_APP_PASSWORD
    
    if (!gmailUser || !gmailPassword) {
        console.error('Gmail credentials missing:', {
            user: gmailUser ? 'present' : 'missing',
            password: gmailPassword ? 'present' : 'missing',
            env: process.env.NODE_ENV
        })
        throw new Error('Gmail credentials are not properly configured')
    }

    console.log('Creating Gmail transporter with user:', gmailUser)
    
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailUser,
            pass: gmailPassword,
        },
    })
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // 견적서 전송인지 일반 문의인지 확인
        if (body.type === 'quote') {
            // 견적서 전송 처리
            const validatedData = quoteSchema.parse(body)
            
            if (process.env.NODE_ENV === 'development') {
                console.log('=== Quote Email Submission ===')
                console.log('To:', validatedData.email)
                console.log('Subject:', validatedData.subject)
                console.log('=== End of Email Info ===')
            }

            const transporter = createTransporter()

            // 고객에게 견적서 전송 (HTML)
            await transporter.sendMail({
                from: `"위두소프트" <${process.env.GMAIL_USER}>`,
                to: validatedData.email,
                subject: validatedData.subject,
                html: validatedData.message, // HTML 콘텐츠 직접 사용
            })

            // 내부 팀에도 알림 (HTML)
            await transporter.sendMail({
                from: `"위두소프트 견적 시스템" <${process.env.GMAIL_USER}>`,
                to: process.env.CONTACT_EMAIL_TO || process.env.GMAIL_USER,
                subject: `[견적 요청] ${validatedData.email}`,
                html: validatedData.message, // 동일한 HTML 견적서 전송
                replyTo: validatedData.email,
            })

            return NextResponse.json({
                success: true,
                message: '견적서가 성공적으로 전송되었습니다.'
            })
        }

        // 일반 문의 처리
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

        // 트랜스포터 생성 (환경변수 검증 포함)
        const transporter = createTransporter()

        // 실제 이메일 전송 (개발/프로덕션 모두)
        await transporter.sendMail({
            from: `"${validatedData.name} (위두소프트 홈페이지)" <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL_TO || process.env.GMAIL_USER,
            subject: `${validatedData.inquiryType} - ${validatedData.subject}`,
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