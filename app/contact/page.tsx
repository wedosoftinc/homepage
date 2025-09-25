import { ContactForm } from '@/components/forms/contact-form'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/layout/footer'
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <MainNavigation />
            <main>
                {/* 헤더 섹션 */}
                <section className="bg-gradient-to-br from-background via-background to-muted/20 pt-32 pb-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                문의하기
                            </h1>
                        </div>
                    </div>
                </section>

                {/* 연락처 정보와 폼 섹션 */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">

                            {/* 연락처 정보 */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-8">연락처 정보</h2>
                                    <div className="space-y-8">

                                        {/* 전화 */}
                                        <div className="flex items-start space-x-5">
                                            <div className="flex-shrink-0">
                                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                                    <PhoneIcon className="h-7 w-7 text-primary" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">전화 상담</h3>
                                                <p className="text-muted-foreground mb-2">언제든 편리한 시간에 연락주세요</p>
                                                <p className="text-lg font-semibold text-primary">02-2135-3071</p>
                                            </div>
                                        </div>

                                        {/* 이메일 */}
                                        <div className="flex items-start space-x-5">
                                            <div className="flex-shrink-0">
                                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                                    <EnvelopeIcon className="h-7 w-7 text-primary" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">이메일 문의</h3>
                                                <p className="text-muted-foreground mb-2">24시간 접수 가능합니다</p>
                                                <p className="text-lg font-semibold text-primary">support@wedosoft.net</p>
                                            </div>
                                        </div>

                                        {/* 주소 */}
                                        <div className="flex items-start space-x-5">
                                            <div className="flex-shrink-0">
                                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                                    <MapPinIcon className="h-7 w-7 text-primary" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">사무실 주소</h3>
                                                <p className="text-muted-foreground mb-2">방문 상담도 환영합니다</p>
                                                <p className="text-lg">서울시 마포구 양화로 186 5층</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                            </div>

                            {/* 문의 폼 */}
                            <div className="lg:col-span-3">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    )
}