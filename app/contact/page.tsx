import { ContactForm } from '@/components/forms/contact-form'
import { MainNavigation } from '@/components/navigation/main-navigation'
import { Footer } from '@/components/layout/footer'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/common/breadcrumb'
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
                {/* Breadcrumb Navigation */}
                <div className="border-b bg-muted/20">
                    <div className="container max-w-7xl py-4">
                        <Breadcrumb
                            items={[
                                { title: "문의하기" }
                            ]}
                        />
                    </div>
                </div>

                {/* Page Header */}
                <section className="py-16">
                    <div className="container max-w-7xl text-center">
                        <Badge className="mb-4">Contact Us</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            문의하기
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
                            궁금한 사항이나 상담 요청을 남겨주세요. 전문 컨설턴트가 신속하게 답변드립니다.
                        </p>
                    </div>
                </section>

                {/* 연락처 정보와 문의 폼 - 2컬럼 */}
                <section className="pb-12">
                    <div className="container">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                
                                {/* 연락처 정보 */}
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
                                        <p className="text-muted-foreground mb-8">
                                            언제든지 편리한 방법으로 연락주세요. 전문 컨설턴트가 신속하게 답변드립니다.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* 전화 */}
                                        <div className="flex items-start space-x-4 p-6 bg-muted/20 rounded-lg">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <PhoneIcon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">전화 상담</h3>
                                                <p className="text-muted-foreground text-sm mb-2">언제든 편리한 시간에 연락주세요</p>
                                                <p className="text-lg font-semibold text-primary">02-2135-3071</p>
                                            </div>
                                        </div>

                                        {/* 이메일 */}
                                        <div className="flex items-start space-x-4 p-6 bg-muted/20 rounded-lg">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <EnvelopeIcon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">이메일 문의</h3>
                                                <p className="text-muted-foreground text-sm mb-2">24시간 접수 가능합니다</p>
                                                <p className="text-lg font-semibold text-primary">support@wedosoft.net</p>
                                            </div>
                                        </div>

                                        {/* 주소 */}
                                        <div className="flex items-start space-x-4 p-6 bg-muted/20 rounded-lg">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <MapPinIcon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">사무실 주소</h3>
                                                <p className="text-muted-foreground text-sm mb-2">방문 상담도 환영합니다</p>
                                                <p className="text-base">(04051) 서울특별시 마포구 양화로 186 5층</p>
                                            </div>
                                        </div>

                                        {/* 구글 지도 */}
                                        <div className="bg-muted/20 rounded-lg p-1">
                                            <iframe
                                                src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=ko&amp;q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EB%A7%88%ED%8F%AC%EA%B5%AC+%EC%96%91%ED%99%94%EB%A1%9C+186&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                                width="100%"
                                                height="200"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 문의 폼 */}
                                <div>
                                    <ContactForm />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    )
}