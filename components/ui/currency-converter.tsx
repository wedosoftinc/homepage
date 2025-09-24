'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
    RefreshCw,
    DollarSign,
    TrendingUp,
    Calendar,
    AlertCircle
} from 'lucide-react'

interface ExchangeRateResponse {
    success?: boolean
    timestamp?: number
    base?: string
    date?: string
    rates?: {
        KRW: number
    }
    result?: string
    conversion_rates?: {
        KRW: number
    }
    time_last_update_utc?: string
}

interface CurrencyConverterProps {
    usdPrice?: number
    productName?: string
    className?: string
}

export function CurrencyConverter({
    usdPrice = 29,
    productName = "제품",
    className = ""
}: CurrencyConverterProps) {
    const [exchangeRate, setExchangeRate] = useState<number | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

    // 환율 조회 함수
    const fetchExchangeRate = async () => {
        setLoading(true)
        setError(null)

        try {
            // ExchangeRate-API.com 사용 (무료 플랜: 월 1,500회 요청)
            // API 키 없이도 사용 가능하지만 제한적
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')

            if (!response.ok) {
                throw new Error('환율 정보를 가져올 수 없습니다')
            }

            const data: ExchangeRateResponse = await response.json()

            if (data.rates?.KRW) {
                setExchangeRate(data.rates.KRW)
                setLastUpdated(new Date())
            } else {
                throw new Error('KRW 환율 정보가 없습니다')
            }
        } catch (err) {
            console.error('환율 조회 오류:', err)
            setError('환율 정보를 불러올 수 없습니다')
            // 대체 환율 (최근 평균 환율 사용)
            setExchangeRate(1350)
            setLastUpdated(new Date())
        } finally {
            setLoading(false)
        }
    }

    // 컴포넌트 마운트 시 환율 조회
    useEffect(() => {
        fetchExchangeRate()
    }, [])

    // KRW 가격 계산
    const krwPrice = exchangeRate ? Math.round(usdPrice * exchangeRate) : null

    // 가격 포맷팅 함수
    const formatKRW = (price: number) => {
        return new Intl.NumberFormat('ko-KR').format(price)
    }

    const formatUSD = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)
    }

    return (
        <Card className={`w-full ${className}`}>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        실시간 환율 적용 가격
                    </CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={fetchExchangeRate}
                        disabled={loading}
                        className="text-muted-foreground"
                    >
                        <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                    </Button>
                </div>
                <CardDescription>
                    {productName} 월 사용료 ({lastUpdated && `${lastUpdated.toLocaleDateString('ko-KR')} 기준`})
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {error && (
                    <div className="flex items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm text-yellow-800 dark:text-yellow-200">
                            {error} (평균 환율 적용됨)
                        </span>
                    </div>
                )}

                {/* USD 원가격 */}
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">USD 원가격</span>
                    <Badge variant="secondary" className="font-mono">
                        {formatUSD(usdPrice)}
                    </Badge>
                </div>

                <Separator />

                {/* 환율 정보 */}
                {exchangeRate && (
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">현재 환율 (USD → KRW)</span>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-blue-500" />
                            <Badge variant="outline" className="font-mono">
                                ₩{formatKRW(exchangeRate)}
                            </Badge>
                        </div>
                    </div>
                )}

                <Separator />

                {/* KRW 환산가격 */}
                {krwPrice && (
                    <div className="flex items-center justify-between">
                        <span className="font-medium">한국 원화 예상 가격</span>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                                ₩{formatKRW(krwPrice)}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                월 사용료 (VAT 별도)
                            </div>
                        </div>
                    </div>
                )}

                {/* 업데이트 시간 */}
                {lastUpdated && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                        <Calendar className="h-3 w-3" />
                        최종 업데이트: {lastUpdated.toLocaleString('ko-KR')}
                    </div>
                )}

                {/* 주의사항 */}
                <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                    💡 실제 결제 시 환율은 카드사/은행 환율이 적용되어 차이가 있을 수 있습니다.
                    <br />
                    정확한 견적은 담당자에게 문의해주세요.
                </div>
            </CardContent>
        </Card>
    )
}