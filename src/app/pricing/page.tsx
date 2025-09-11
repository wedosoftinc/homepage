'use client'

import { Suspense } from 'react'
import { Header, Footer } from "@/components/layout"
import { PricingContent } from "@/components/sections/pricing-content"

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Suspense fallback={<div>Loading...</div>}>
                    <PricingContent />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}