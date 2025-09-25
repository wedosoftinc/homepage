import { MainNavigation } from "@/components/navigation/main-navigation"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "개인정보 처리방침 | WeDoSoft",
    description: "위두소프트의 개인정보 처리방침을 확인하세요.",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background">
            <MainNavigation />
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center">개인정보 처리방침</h1>
                    
                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                        <div className="bg-muted/50 p-6 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-4">
                                <strong>최종 업데이트:</strong> 2025년 9월 25일<br />
                                <strong>웹사이트 주소:</strong> https://wedosoft.net
                            </p>
                        </div>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. 우리는 누구인가요</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                위두소프트(WeDoSoft)는 글로벌 SaaS 솔루션을 제공하는 전문 기업입니다. 
                                본 웹사이트는 Google Workspace, Freshworks, Monday.com 등 
                                다양한 비즈니스 솔루션에 대한 정보를 제공하고 고객 문의를 처리합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. 수집하는 개인정보</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                위두소프트는 다음과 같은 개인정보를 수집합니다:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>필수 정보:</strong> 이름, 이메일 주소, 회사명, 문의 내용</li>
                                <li><strong>선택 정보:</strong> 전화번호, 직책</li>
                                <li><strong>자동 수집 정보:</strong> IP 주소, 브라우저 정보, 접속 시간</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. 개인정보 수집 목적</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>고객 문의 및 상담 서비스 제공</li>
                                <li>제품 정보 및 서비스 안내</li>
                                <li>고객 지원 및 A/S 서비스 제공</li>
                                <li>마케팅 및 이벤트 정보 제공 (동의 시)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. 개인정보 보유 및 이용기간</h2>
                            <div className="bg-card p-4 rounded-lg border">
                                <ul className="space-y-2 text-muted-foreground">
                                    <li><strong>상담 문의:</strong> 문의 처리 완료 후 2년</li>
                                    <li><strong>마케팅 정보:</strong> 동의 철회 시까지</li>
                                    <li><strong>법정 보관:</strong> 관련 법령에 따른 보관 기간 준수</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. 개인정보 제3자 제공</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                위두소프트는 고객의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 
                                다만, 다음의 경우에는 예외로 합니다:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                                <li>법령에 의해 요구되는 경우</li>
                                <li>서비스 제공을 위한 필수적인 업무 위탁</li>
                                <li>고객의 명시적인 동의가 있는 경우</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. 개인정보 보호를 위한 기술적 조치</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>개인정보 암호화 저장 및 전송</li>
                                <li>접근 권한 관리 및 접속 로그 기록</li>
                                <li>보안 프로그램 설치 및 정기적 업데이트</li>
                                <li>개인정보 취급자 교육 실시</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. 정보주체의 권리</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                정보주체는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-card p-4 rounded-lg border">
                                    <h4 className="font-semibold mb-2">열람권</h4>
                                    <p className="text-sm text-muted-foreground">
                                        개인정보 처리 현황 확인
                                    </p>
                                </div>
                                <div className="bg-card p-4 rounded-lg border">
                                    <h4 className="font-semibold mb-2">정정·삭제권</h4>
                                    <p className="text-sm text-muted-foreground">
                                        잘못된 정보의 수정·삭제 요구
                                    </p>
                                </div>
                                <div className="bg-card p-4 rounded-lg border">
                                    <h4 className="font-semibold mb-2">처리정지권</h4>
                                    <p className="text-sm text-muted-foreground">
                                        개인정보 처리 중단 요구
                                    </p>
                                </div>
                                <div className="bg-card p-4 rounded-lg border">
                                    <h4 className="font-semibold mb-2">손해배상청구권</h4>
                                    <p className="text-sm text-muted-foreground">
                                        개인정보 침해 시 배상 청구
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. 쿠키 사용</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                본 웹사이트는 사용자 경험 개선을 위해 쿠키를 사용합니다. 
                                쿠키는 웹사이트 기능 개선, 분석, 마케팅 목적으로 사용되며, 
                                브라우저 설정을 통해 쿠키 사용을 거부하실 수 있습니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. 개인정보보호 책임자</h2>
                            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-2">개인정보보호 책임자</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li><strong>이름:</strong> 개인정보보호팀</li>
                                            <li><strong>이메일:</strong> privacy@wedosoft.net</li>
                                            <li><strong>전화:</strong> 02-2135-3071</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">일반 문의</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li><strong>이메일:</strong> support@wedosoft.net</li>
                                            <li><strong>주소:</strong> 서울시 마포구 양화로 186 5층</li>
                                            <li><strong>운영시간:</strong> 평일 9:00~18:00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">10. 개인정보처리방침 변경</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                본 개인정보처리방침은 법령이나 서비스의 변경사항을 반영하기 위해 
                                수정될 수 있습니다. 개정된 개인정보처리방침은 웹사이트 공지를 통해 
                                알려드리며, 중요한 변경사항의 경우 별도의 공지나 동의 절차를 거칩니다.
                            </p>
                        </section>

                        <div className="bg-muted/50 p-6 rounded-lg mt-8">
                            <p className="text-center text-sm text-muted-foreground">
                                개인정보 처리와 관련된 문의사항이 있으시면 언제든지 연락주시기 바랍니다.<br />
                                <strong className="text-foreground">위두소프트</strong> 는 고객의 개인정보를 안전하게 보호하기 위해 최선을 다하겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}