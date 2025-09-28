'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Ticket } from './ticket-list'
import {
  UserIcon as User,
  EnvelopeIcon as Mail,
  PhoneIcon as Phone,
  MapPinIcon as MapPin,
  CalendarIcon as Calendar,
  StarIcon as Star,
  CreditCardIcon as CreditCard,
  ShoppingBagIcon as ShoppingBag,
  ChatBubbleLeftIcon as MessageCircle,
  ExclamationTriangleIcon as AlertTriangle,
  PencilIcon as Edit,
  EyeIcon as Eye
} from '@heroicons/react/24/outline'

interface CustomerSidebarProps {
  ticket: Ticket | null
}

interface CustomerInfo {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  joinDate: string
  location: string
  tier: 'bronze' | 'silver' | 'gold' | 'platinum'
  totalTickets: number
  resolvedTickets: number
  avgResponseTime: string
  lastActivity: string
  orders: {
    total: number
    totalAmount: string
    lastOrder: string
  }
  tags: string[]
}

const mockCustomerData: Record<string, CustomerInfo> = {
  'kim.minsu@example.com': {
    id: 'CUST-001',
    name: '김민수',
    email: 'kim.minsu@example.com',
    phone: '+82-10-1234-5678',
    avatar: 'https://ui-avatars.com/api/?name=김민수&background=3b82f6&color=fff',
    joinDate: '2023-01-15',
    location: '서울, 대한민국',
    tier: 'gold',
    totalTickets: 12,
    resolvedTickets: 10,
    avgResponseTime: '2시간 30분',
    lastActivity: '1시간 전',
    orders: {
      total: 8,
      totalAmount: '₩1,250,000',
      lastOrder: '2024-01-10'
    },
    tags: ['VIP', '결제이슈', '적극적']
  },
  'park.younghee@example.com': {
    id: 'CUST-002',
    name: '박영희',
    email: 'park.younghee@example.com',
    phone: '+82-10-9876-5432',
    avatar: 'https://ui-avatars.com/api/?name=박영희&background=10b981&color=fff',
    joinDate: '2023-06-20',
    location: '부산, 대한민국',
    tier: 'silver',
    totalTickets: 5,
    resolvedTickets: 4,
    avgResponseTime: '1시간 45분',
    lastActivity: '3시간 전',
    orders: {
      total: 3,
      totalAmount: '₩450,000',
      lastOrder: '2024-01-05'
    },
    tags: ['신규고객', '친절함']
  }
}

const getTierColor = (tier: CustomerInfo['tier']) => {
  switch (tier) {
    case 'platinum': return 'bg-purple-100 text-purple-800'
    case 'gold': return 'bg-yellow-100 text-yellow-800'
    case 'silver': return 'bg-gray-100 text-gray-800'
    case 'bronze': return 'bg-orange-100 text-orange-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getTierText = (tier: CustomerInfo['tier']) => {
  switch (tier) {
    case 'platinum': return '플래티넘'
    case 'gold': return '골드'
    case 'silver': return '실버'
    case 'bronze': return '브론즈'
    default: return tier
  }
}

export default function CustomerSidebar({ ticket }: CustomerSidebarProps) {
  if (!ticket) {
    return (
      <div className="w-80 bg-gray-50 border-l border-gray-200 p-4">
        <div className="text-center text-gray-500">
          <User className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <h3 className="text-sm font-medium mb-2">고객 정보 없음</h3>
          <p className="text-xs">티켓을 선택하면 고객 정보를 확인할 수 있습니다.</p>
        </div>
      </div>
    )
  }

  const customerInfo = mockCustomerData[ticket.customer.email]

  if (!customerInfo) {
    return (
      <div className="w-80 bg-gray-50 border-l border-gray-200 p-4">
        <div className="text-center text-gray-500">
          <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-gray-400" />
          <p className="text-sm">고객 정보를 불러올 수 없습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-80 bg-gray-50 border-l border-gray-200 flex flex-col overflow-y-auto">
      {/* 헤더 */}
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-gray-900">고객 정보</h2>
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4">
        {/* 기본 정보 */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <img src={customerInfo.avatar} alt={customerInfo.name} />
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{customerInfo.name}</h3>
                <p className="text-sm text-gray-600">{customerInfo.id}</p>
                <Badge className={getTierColor(customerInfo.tier)}>
                  {getTierText(customerInfo.tier)} 회원
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* 연락처 정보 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center">
              <User className="h-4 w-4 mr-2" />
              연락처
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{customerInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{customerInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{customerInfo.location}</span>
            </div>
          </CardContent>
        </Card>

        {/* 계정 정보 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              계정 정보
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">가입일:</span>
              <span className="text-gray-900">{customerInfo.joinDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">마지막 활동:</span>
              <span className="text-gray-900">{customerInfo.lastActivity}</span>
            </div>
          </CardContent>
        </Card>

        {/* 티켓 통계 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center">
              <MessageCircle className="h-4 w-4 mr-2" />
              티켓 통계
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">총 티켓:</span>
              <span className="text-gray-900">{customerInfo.totalTickets}건</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">해결된 티켓:</span>
              <span className="text-green-600">{customerInfo.resolvedTickets}건</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">평균 응답시간:</span>
              <span className="text-gray-900">{customerInfo.avgResponseTime}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ 
                  width: `${(customerInfo.resolvedTickets / customerInfo.totalTickets) * 100}%` 
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 text-center">
              해결률: {Math.round((customerInfo.resolvedTickets / customerInfo.totalTickets) * 100)}%
            </p>
          </CardContent>
        </Card>

        {/* 구매 이력 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center">
              <ShoppingBag className="h-4 w-4 mr-2" />
              구매 이력
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">총 주문:</span>
              <span className="text-gray-900">{customerInfo.orders.total}건</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">총 구매액:</span>
              <span className="text-gray-900 font-medium">{customerInfo.orders.totalAmount}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">최근 주문:</span>
              <span className="text-gray-900">{customerInfo.orders.lastOrder}</span>
            </div>
          </CardContent>
        </Card>

        {/* 태그 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center">
              <Star className="h-4 w-4 mr-2" />
              태그
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {customerInfo.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 액션 버튼들 */}
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            전체 히스토리 보기
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            <CreditCard className="h-4 w-4 mr-2" />
            결제 정보 확인
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            새 대화 시작
          </Button>
        </div>
      </div>
    </div>
  )
}