'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Container, Section } from "@/components/layout"
import { PricingTabs } from "@/components/sections/pricing-tabs"

const tabs = [
    { id: 'google-workspace', name: 'Google Workspace', icon: '🏢' },
    { id: 'freshworks', name: 'Freshworks', icon: '🎯' },
    { id: 'monday', name: 'Monday.com', icon: '📊' },
    { id: 'splashtop', name: 'Splashtop', icon: '🖥️' }
]

export function PricingContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('google-workspace')

    useEffect(() => {
        const tab = searchParams.get('tab')
        if (tab && tabs.find(t => t.id === tab)) {
            setActiveTab(tab)
        }
    }, [searchParams])

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId)
        const newUrl = `/pricing?tab=${tabId}`
        router.push(newUrl, { scroll: false })
    }

    return (
        <>
            {/* Hero Section */}
            <Section padding="xl" className="text-center">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            투명한 가격 정책
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            비즈니스에 맞는{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                                최적의 플랜
                            </span>
                            을 선택하세요
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            각 솔루션별로 다양한 플랜을 제공합니다.
                            기업 규모와 필요에 따라 가장 적합한 옵션을 찾아보세요.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Pricing Tabs */}
            <PricingTabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />
        </>
    )
}