'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import {
  MagnifyingGlassIcon as Search,
  FunnelIcon as Filter,
  ClockIcon as Clock,
  ExclamationTriangleIcon as AlertTriangle,
  ChatBubbleLeftIcon as MessageCircle,
  EnvelopeIcon as Mail
} from '@heroicons/react/24/outline'

export interface Ticket {
  id: string
  subject: string
  customer: {
    name: string
    email: string
    avatar: string
  }
  status: 'open' | 'pending' | 'resolved' | 'closed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  type: 'email' | 'chat' | 'phone' | 'social'
  lastUpdate: string
  assignee: string
  messages: number
}

interface TicketListProps {
  selectedTicketId?: string
  onTicketSelect: (ticket: Ticket) => void
}

const mockTickets: Ticket[] = [
  {
    id: 'TK-001',
    subject: '결제 오류 문의 - 카드 결제가 되지 않습니다',
    customer: {
      name: '김민수',
      email: 'kim.minsu@example.com',
      avatar: 'https://ui-avatars.com/api/?name=김민수&background=3b82f6&color=fff'
    },
    status: 'open',
    priority: 'high',
    type: 'email',
    lastUpdate: '5분 전',
    assignee: '이상우',
    messages: 3
  },
  {
    id: 'TK-002',
    subject: '제품 사용법 문의',
    customer: {
      name: '박영희',
      email: 'park.younghee@example.com',
      avatar: 'https://ui-avatars.com/api/?name=박영희&background=10b981&color=fff'
    },
    status: 'pending',
    priority: 'medium',
    type: 'chat',
    lastUpdate: '1시간 전',
    assignee: '김철수',
    messages: 7
  },
  {
    id: 'TK-003',
    subject: '환불 요청',
    customer: {
      name: '정우진',
      email: 'jung.woojin@example.com',
      avatar: 'https://ui-avatars.com/api/?name=정우진&background=f59e0b&color=fff'
    },
    status: 'open',
    priority: 'urgent',
    type: 'phone',
    lastUpdate: '2시간 전',
    assignee: '이상우',
    messages: 12
  },
  {
    id: 'TK-004',
    subject: '계정 비밀번호 재설정 문의',
    customer: {
      name: '이지은',
      email: 'lee.jieun@example.com',
      avatar: 'https://ui-avatars.com/api/?name=이지은&background=8b5cf6&color=fff'
    },
    status: 'resolved',
    priority: 'low',
    type: 'email',
    lastUpdate: '3시간 전',
    assignee: '김철수',
    messages: 5
  }
]

const getStatusColor = (status: Ticket['status']) => {
  switch (status) {
    case 'open': return 'bg-green-100 text-green-800 border-green-200'
    case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'resolved': return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'closed': return 'bg-gray-100 text-gray-800 border-gray-200'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

const getStatusText = (status: Ticket['status']) => {
  switch (status) {
    case 'open': return '열림'
    case 'pending': return '대기'
    case 'resolved': return '해결'
    case 'closed': return '닫힘'
    default: return status
  }
}

const getPriorityColor = (priority: Ticket['priority']) => {
  switch (priority) {
    case 'urgent': return 'text-red-600'
    case 'high': return 'text-orange-600'
    case 'medium': return 'text-yellow-600'
    case 'low': return 'text-green-600'
    default: return 'text-gray-600'
  }
}

const getTypeIcon = (type: Ticket['type']) => {
  switch (type) {
    case 'email': return <Mail className="h-4 w-4" />
    case 'chat': return <MessageCircle className="h-4 w-4" />
    case 'phone': return <AlertTriangle className="h-4 w-4" />
    case 'social': return <MessageCircle className="h-4 w-4" />
    default: return <Mail className="h-4 w-4" />
  }
}

export default function TicketList({ selectedTicketId, onTicketSelect }: TicketListProps) {
  const [tickets] = useState<Ticket[]>(mockTickets)
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* 헤더 */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-900">티켓</h2>
          <div className="flex items-center space-x-2">
            <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded">
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* 검색 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="티켓 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* 티켓 목록 */}
      <div className="flex-1 overflow-y-auto">
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            onClick={() => onTicketSelect(ticket)}
            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedTicketId === ticket.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
            }`}
          >
            <div className="space-y-3">
              {/* 헤더 */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-gray-500">{ticket.id}</span>
                  <div className={`p-1 rounded ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority === 'urgent' && <AlertTriangle className="h-3 w-3" />}
                  </div>
                  {getTypeIcon(ticket.type)}
                </div>
                <Badge variant="outline" className={getStatusColor(ticket.status)}>
                  {getStatusText(ticket.status)}
                </Badge>
              </div>

              {/* 제목 */}
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                {ticket.subject}
              </h3>

              {/* 고객 정보 */}
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <img src={ticket.customer.avatar} alt={ticket.customer.name} />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-700 truncate">
                    {ticket.customer.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {ticket.customer.email}
                  </p>
                </div>
              </div>

              {/* 메타 정보 */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3" />
                  <span>{ticket.lastUpdate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-3 w-3" />
                  <span>{ticket.messages}</span>
                </div>
              </div>

              {/* 담당자 */}
              <div className="text-xs text-gray-500">
                담당자: {ticket.assignee}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 푸터 */}
      <div className="p-3 border-t border-gray-200 bg-gray-50">
        <div className="text-xs text-gray-500 text-center">
          총 {filteredTickets.length}개 티켓
        </div>
      </div>
    </div>
  )
}