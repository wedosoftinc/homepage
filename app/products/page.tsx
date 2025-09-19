import { Metadata } from 'next'
import { ProductsOverview } from '@/components/sections/products-overview'

export const metadata: Metadata = {
    title: '제품 소개 | 위두소프트 - 글로벌 SaaS 솔루션',
    description: 'Freshworks, Monday.com, Google Workspace 등 검증된 글로벌 SaaS 솔루션으로 비즈니스 성장을 가속화하세요. 25년 경험의 전문 컨설팅 제공.',
    keywords: 'SaaS, 클라우드 솔루션, 협업툴, CRM, 고객지원, IT관리, Freshworks, Monday.com, Google Workspace',
    openGraph: {
        title: '제품 소개 | 위두소프트 - 글로벌 SaaS 솔루션',
        description: 'Freshworks, Monday.com, Google Workspace 등 검증된 글로벌 SaaS 솔루션으로 비즈니스 성장을 가속화하세요.',
        type: 'website',
        locale: 'ko_KR',
    },
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen">
            <ProductsOverview />
        </div>
    )
}