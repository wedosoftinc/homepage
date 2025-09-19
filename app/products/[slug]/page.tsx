import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// 간단한 제품 페이지 (임시)
export default async function ProductSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">제품: {slug}</h1>
                <p className="text-lg text-muted-foreground">
                    이 페이지는 현재 개발 중입니다.
                </p>
            </div>
        </div>
    )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    return {
        title: `${slug} | 위두소프트`,
        description: `${slug} 제품에 대한 상세 정보입니다.`,
    }
}