'use client'

export default function QuotePreviewPage() {
  // 샘플 데이터
  const sampleData = {
    email: "customer@example.com",
    products: [
      { name: "Freshdesk", plan: "Pro", monthlyPrice: 49, isCustom: false, isSession: false },
      { name: "Google Workspace", plan: "Business Standard", monthlyPrice: 12, isCustom: false, isSession: false },
      { name: "Monday Work Management", plan: "Standard", monthlyPrice: 10, isCustom: false, isSession: false }
    ],
    userCount: 25,
    billingCycle: 'yearly',
    totalPrice: 1225,
    yearlyTotal: 14700,
    volumeDiscount: 0,
    exchangeRate: 1403,
    totalKRW: 1718675,
    yearlyTotalKRW: 20624100
  }

  const now = new Date()
  const quoteDate = now.toLocaleDateString('ko-KR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  })

  return (
    <div style={{ padding: '20px', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', marginBottom: '20px', padding: '20px', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#0a0a0a' }}>견적서 이메일 미리보기</h1>
        <p style={{ color: '#737373', marginBottom: '0' }}>실제 고객에게 전송되는 이메일 디자인입니다.</p>
      </div>

      {/* 실제 이메일 컨텐츠 - DOCTYPE 제거 */}
      <div dangerouslySetInnerHTML={{ __html: `
    <style>
        body {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: hsl(222, 84%, 5%);
            background-color: #ffffff;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 750px;
            margin: 40px auto;
            background: #ffffff;
            border: 1px solid hsl(214, 32%, 91%);
            margin-bottom: 40px;
        }
        .header {
            background: #ffffff;
            border-bottom: 2px solid #3284D6;
            padding: 35px 30px 25px 30px;
        }
        .header h1 {
            margin: 0 0 6px 0;
            font-size: 28px;
            font-weight: 700;
            color: hsl(222, 84%, 5%);
            letter-spacing: -0.5px;
        }
        .header p {
            margin: 0;
            color: hsl(215, 20%, 35%);
            font-size: 14px;
            font-weight: 500;
        }
        .content {
            background: #ffffff;
            padding: 25px 30px;
        }
        .info-box {
            background: hsl(210, 40%, 96%);
            border: 1px solid hsl(214, 32%, 91%);
            padding: 16px 20px;
            margin: 0 0 25px 0;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid hsl(214, 32%, 91%);
        }
        .info-row:last-child { border-bottom: none; }
        .info-row .label {
            font-weight: 600;
            color: hsl(215, 20%, 35%);
            font-size: 14px;
            width: 28%;
            flex-shrink: 0;
            line-height: 1.5;
            display: flex;
            align-items: center;
        }
        .info-row .value {
            color: hsl(222, 84%, 5%);
            text-align: right;
            font-size: 14px;
            width: 72%;
            line-height: 1.5;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .section-title {
            font-size: 16px;
            font-weight: 700;
            color: hsl(222, 84%, 5%);
            margin: 25px 0 12px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid #3284D6;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 12px 0 20px 0;
        }
        th {
            background: hsl(210, 40%, 96%);
            padding: 12px 15px;
            text-align: left;
            font-weight: 600;
            color: hsl(215, 20%, 35%);
            font-size: 13px;
            border-top: 1px solid hsl(214, 32%, 91%);
            border-bottom: 1px solid hsl(214, 32%, 91%);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            vertical-align: middle;
        }
        th:last-child {
            text-align: right;
        }
        td {
            padding: 12px 15px;
            border-bottom: 1px solid hsl(210, 40%, 94%);
            font-size: 14px;
            color: hsl(222, 84%, 5%);
            vertical-align: middle;
        }
        .price-cell {
            text-align: right;
            font-weight: 600;
            color: hsl(222, 84%, 5%);
            font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
        }
        .total-row {
            background: hsl(210, 40%, 96%);
            font-weight: 700;
            font-size: 15px;
        }
        .total-row td {
            border-top: 2px solid #3284D6;
            border-bottom: 1px solid hsl(214, 32%, 91%);
            padding: 14px 15px;
            color: hsl(222, 84%, 5%);
        }
        .footer {
            background: #ffffff;
            padding: 25px 30px;
            text-align: center;
            border-top: 2px solid hsl(214, 32%, 91%);
        }
        .footer p {
            margin: 4px 0;
            font-size: 12px;
            color: hsl(215, 20%, 35%);
            line-height: 1.5;
        }
        .footer strong {
            color: hsl(222, 84%, 5%);
            font-weight: 600;
            font-size: 13px;
        }
        .discount-badge {
            background: #3284D6;
            color: #ffffff;
            padding: 4px 10px;
            border-radius: 3px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .note-box {
            background: hsl(210, 40%, 96%);
            border-left: 3px solid #3284D6;
            padding: 14px 18px;
            margin: 20px 0 0 0;
        }
        .note-box h3 {
            margin: 0 0 6px 0;
            font-size: 14px;
            font-weight: 600;
            color: hsl(222, 84%, 5%);
        }
        .note-box p {
            margin: 0;
            font-size: 13px;
            color: hsl(215, 20%, 35%);
            line-height: 1.7;
        }
        .note-box ul {
            margin: 6px 0 0 0;
            padding-left: 18px;
        }
        .note-box li {
            margin: 3px 0;
            color: hsl(215, 20%, 35%);
            font-size: 12px;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>맞춤 견적서</h1>
            <p>SaaS 솔루션 도입 견적</p>
        </div>
        
        <div class="content">
            <div class="info-box">
                <div class="info-row">
                    <span class="label">발신</span>
                    <span class="value">(주)위두소프트</span>
                </div>
                <div class="info-row">
                    <span class="label">수신</span>
                    <span class="value">${sampleData.email}</span>
                </div>
                <div class="info-row">
                    <span class="label">발행일</span>
                    <span class="value">${quoteDate}</span>
                </div>
            </div>
            
            <h2 class="section-title">선택하신 솔루션</h2>
            <table>
                <thead>
                    <tr>
                        <th>제품명</th>
                        <th>플랜</th>
                        <th style="text-align: right;">단가 (월)</th>
                    </tr>
                </thead>
                <tbody>
                    ${sampleData.products.map(p => `
                        <tr>
                            <td>${p.name}</td>
                            <td>${p.plan}</td>
                            <td class="price-cell">${p.isCustom ? '맞춤 견적' : p.isSession ? '세션 기반' : `$${p.monthlyPrice}`}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            <h2 class="section-title">비용 구조</h2>
            <table>
                <tbody>
                    <tr>
                        <td>사용자 수</td>
                        <td class="price-cell">${sampleData.userCount}명</td>
                    </tr>
                    <tr>
                        <td>결제 주기</td>
                        <td class="price-cell">
                            ${sampleData.billingCycle === 'yearly' ? '<span class="discount-badge">연간 결제</span>' : '월간 결제'}
                        </td>
                    </tr>
                    ${sampleData.volumeDiscount > 0 ? `
                    <tr>
                        <td>볼륨 할인 <span class="discount-badge">${Math.round(sampleData.volumeDiscount * 100)}%</span></td>
                        <td class="price-cell">적용됨</td>
                    </tr>
                    ` : ''}
                    <tr class="total-row">
                        <td><strong>월간 예상 비용 (USD)</strong></td>
                        <td class="price-cell">$${sampleData.totalPrice.toLocaleString()}</td>
                    </tr>
                    <tr class="total-row">
                        <td><strong>월간 예상 비용 (KRW)</strong></td>
                        <td class="price-cell">₩${sampleData.totalKRW.toLocaleString()}</td>
                    </tr>
                    ${sampleData.yearlyTotal ? `
                    <tr>
                        <td>연간 예상 비용 (USD)</td>
                        <td class="price-cell">$${sampleData.yearlyTotal.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>연간 예상 비용 (KRW)</td>
                        <td class="price-cell">₩${sampleData.yearlyTotalKRW.toLocaleString()}</td>
                    </tr>
                    ` : ''}
                </tbody>
            </table>
            
            <p style="font-size: 12px; color: #9ca3af; margin: 0 0 30px 0;">
                * 환율: $1 = ₩${sampleData.exchangeRate.toLocaleString()} (${now.toLocaleDateString('ko-KR')}) 기준
            </p>
            
            <div class="note-box">
                <h3>다음 단계</h3>
                <ul>
                    <li>전문 컨설턴트가 영업일 기준 1일 내 연락드립니다</li>
                    <li>상세한 제품 데모 및 도입 상담이 제공됩니다</li>
                    <li>기업 규모에 따른 추가 할인 혜택이 있습니다</li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>(주)위두소프트</strong></p>
            <p>서울시 마포구 양화로 186, 5층</p>
            <p>Tel: 02-2135-3071 | Email: support@wedosoft.net | Web: www.wedosoft.net</p>
            <p style="margin-top: 12px; color: #9ca3af; font-size: 11px;">
                본 견적서는 ${quoteDate}에 자동 생성되었습니다.
            </p>
        </div>
    </div>
      ` }} />
    </div>
  )
}
