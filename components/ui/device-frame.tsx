'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

interface DeviceFrameProps {
    children: ReactNode
    type?: 'macbook' | 'iphone' | 'ipad'
    className?: string
    style?: React.CSSProperties
}

export function DeviceFrame({ children, type = 'macbook', className = '', style }: DeviceFrameProps) {
    if (type === 'macbook') {
        return (
            <div className={`relative ${className}`} style={style}>
                {/* MacBook Body */}
                <div className="relative transform-gpu perspective-1000" style={{
                    transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)'
                }}>
                    {/* Screen */}
                    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-lg p-3 shadow-2xl">
                        {/* Camera */}
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />

                        {/* Screen Bezel */}
                        <div className="bg-black rounded-md overflow-hidden relative border-2 border-gray-700" style={{ aspectRatio: '16/10' }}>
                            {/* Screen Content with subtle glow */}
                            <div className="absolute inset-1 bg-white rounded-sm overflow-hidden shadow-inner">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent pointer-events-none" />
                                {children}
                            </div>
                        </div>
                    </div>

                    {/* Keyboard Base */}
                    <div className="relative">
                        {/* Main keyboard body */}
                        <div className="h-6 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-xl"
                            style={{
                                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                            }} />

                        {/* Trackpad */}
                        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gray-600 rounded border border-gray-500 shadow-inner" />

                        {/* Apple logo hint */}
                        <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-600/30 rounded-full" />
                    </div>
                </div>

                {/* Realistic shadow */}
                <div className="absolute -bottom-6 left-6 right-6 h-12 bg-gradient-to-r from-transparent via-black/30 to-transparent blur-2xl transform skew-x-12" />
            </div>
        )
    }

    if (type === 'iphone') {
        return (
            <div className={`relative ${className}`} style={style}>
                <div className="relative transform-gpu" style={{
                    transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)'
                }}>
                    {/* Phone Body */}
                    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-1 shadow-2xl border border-gray-700"
                        style={{ aspectRatio: '9/19.5' }}>

                        {/* Dynamic Island */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10 shadow-inner" />

                        {/* Screen */}
                        <div className="bg-black rounded-3xl overflow-hidden h-full relative border border-gray-600">
                            <div className="absolute inset-0.5 bg-white rounded-3xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" />
                                {children}
                            </div>
                        </div>

                        {/* Volume buttons */}
                        <div className="absolute left-0 top-20 w-1 h-8 bg-gray-600 rounded-r transform -translate-x-0.5" />
                        <div className="absolute left-0 top-32 w-1 h-6 bg-gray-600 rounded-r transform -translate-x-0.5" />
                        <div className="absolute left-0 top-40 w-1 h-6 bg-gray-600 rounded-r transform -translate-x-0.5" />

                        {/* Power button */}
                        <div className="absolute right-0 top-24 w-1 h-12 bg-gray-600 rounded-l transform translate-x-0.5" />
                    </div>
                </div>

                {/* Shadow */}
                <div className="absolute -bottom-4 left-3 right-3 h-8 bg-gradient-to-r from-transparent via-black/40 to-transparent blur-xl" />
            </div>
        )
    }

    // iPad
    return (
        <div className={`relative ${className}`} style={style}>
            <div className="relative transform-gpu" style={{
                transform: 'perspective(1000px) rotateY(-8deg) rotateX(3deg)'
            }}>
                {/* iPad Body */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-2 shadow-2xl border border-gray-700"
                    style={{ aspectRatio: '4/3' }}>

                    {/* Camera */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full border border-gray-600" />

                    {/* Screen */}
                    <div className="bg-black rounded-lg overflow-hidden h-full relative border border-gray-600">
                        <div className="absolute inset-1 bg-white rounded-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" />
                            {children}
                        </div>
                    </div>

                    {/* Home button */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-800 rounded-full border-2 border-gray-600 shadow-inner" />
                </div>
            </div>

            {/* Shadow */}
            <div className="absolute -bottom-4 left-6 right-6 h-8 bg-gradient-to-r from-transparent via-black/35 to-transparent blur-xl" />
        </div>
    )
}

interface MockupScreenshotProps {
    src: string
    alt: string
    device?: 'macbook' | 'iphone' | 'ipad'
    className?: string
    hover3d?: boolean
}

export function MockupScreenshot({
    src,
    alt,
    device = 'macbook',
    className = '',
    hover3d = true
}: MockupScreenshotProps) {
    return (
        <div className={`group ${className}`}>
            <DeviceFrame
                type={device}
                className={hover3d ? 'transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2' : ''}
                style={hover3d ? {
                    transform: 'perspective(1000px) rotateY(-15deg) rotateX(15deg)',
                    transition: 'transform 0.5s ease-out'
                } : {}}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-all duration-300 group-hover:brightness-110"
                />
            </DeviceFrame>
        </div>
    )
}