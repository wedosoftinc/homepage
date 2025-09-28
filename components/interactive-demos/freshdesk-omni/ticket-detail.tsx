'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Ticket } from './ticket-list'
import {
  EllipsisHorizontalIcon as MoreHorizontal,
  PaperAirplaneIcon as Send,
  PaperClipIcon as Paperclip,
  FaceSmileIcon as Smile,
  TagIcon as Tag,
  ClockIcon as Clock,
  UserIcon as User,
  ExclamationTriangleIcon as AlertTriangle,
  CheckCircleIcon as CheckCircle,
  ChatBubbleLeftIcon as MessageCircle,
  EnvelopeIcon as Mail,
  PhoneIcon as Phone
} from '@heroicons/react/24/outline'

interface TicketDetailProps {
  ticket: Ticket | null
}

interface Message {
  id: string
  author: {
    name: string
    email: string
    avatar: string
    role: 'customer' | 'agent'
  }
  content: string
  timestamp: string
  type: 'email' | 'internal' | 'public'
}

const mockMessages: Message[] = [
  {
    id: '1',
    author: {
      name: '김민수',
      email: 'kim.minsu@example.com',
      avatar: 'https://ui-avatars.com/api/?name=김민수&background=3b82f6&color=fff',
      role: 'customer'
    },
    content: '안녕하세요. 결제를 진행하려고 하는데 카드 결제가 계속 실패합니다. 여러 번 시도해봤지만 "결제 처리 중 오류가 발생했습니다"라는 메시지만 나옵니다. 어떻게 해야 하나요?',
    timestamp: '2시간 전',
    type: 'email'
  },
  {
    id: '2',
    author: {
      name: '이상우',
      email: 'support@company.com',
      avatar: 'https://ui-avatars.com/api/?name=이상우&background=10b981&color=fff',
      role: 'agent'
    },
    content: '안녕하세요 김민수님, 문의해주셔서 감사합니다. 결제 오류 관련해서 확인해드리겠습니다. 먼저 다음 사항들을 확인해주시겠어요?\n\n1. 카드 한도 초과 여부\n2. 카드 유효기간 확인\n3. CVC 번호 정확 입력\n\n확인 후에도 동일한 문제가 발생하면 다시 연락주시기 바랍니다.',
    timestamp: '1시간 전',
    type: 'public'
  },
  {
    id: '3',
    author: {
      name: '김민수',
      email: 'kim.minsu@example.com',
      avatar: 'https://ui-avatars.com/api/?name=김민수&background=3b82f6&color=fff',
      role: 'customer'
    },
    content: '빠른 답변 감사합니다. 말씀해주신 사항들을 모두 확인했는데 문제없었습니다. 다른 카드로도 시도해봤지만 같은 오류가 발생합니다.',
    timestamp: '30분 전',
    type: 'email'
  }
]

export default function TicketDetail({ ticket }: TicketDetailProps) {
  const [replyContent, setReplyContent] = useState('')
  const [messages] = useState<Message[]>(mockMessages)

  if (!ticket) {
    return (
      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="text-center text-gray-500">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium mb-2">티켓을 선택하세요</h3>
          <p className="text-sm">왼쪽에서 티켓을 선택하면 상세 내용을 확인할 수 있습니다.</p>
        </div>
      </div>
    )
  }

  const getStatusColor = (status: Ticket['status']) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-blue-100 text-blue-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: Ticket['priority']) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: Ticket['type']) => {
    switch (type) {
      case 'email': return <Mail className="h-4 w-4" />
      case 'chat': return <MessageCircle className="h-4 w-4" />
      case 'phone': return <Phone className="h-4 w-4" />
      default: return <Mail className="h-4 w-4" />
    }
  }

  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* 헤더 */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-mono text-gray-500">{ticket.id}</span>
              {getTypeIcon(ticket.type)}
              <Badge className={getPriorityColor(ticket.priority)}>
                {ticket.priority}
              </Badge>
              <Badge className={getStatusColor(ticket.status)}>
                {ticket.status}
              </Badge>
            </div>
            <h1 className="text-lg font-semibold text-gray-900 mb-2">
              {ticket.subject}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>담당자: {ticket.assignee}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{ticket.lastUpdate}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Tag className="h-4 w-4 mr-1" />
              태그
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex items-center space-x-2">
          <Button size="sm" variant="outline">
            <CheckCircle className="h-4 w-4 mr-1" />
            해결됨으로 표시
          </Button>
          <Button size="sm" variant="outline">
            <AlertTriangle className="h-4 w-4 mr-1" />
            에스컬레이션
          </Button>
          <Button size="sm" variant="outline">
            <Clock className="h-4 w-4 mr-1" />
            대기중으로 표시
          </Button>
        </div>
      </div>

      {/* 메시지 목록 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <Card key={message.id} className={`${
            message.author.role === 'agent' ? 'bg-blue-50 border-blue-200' : 'bg-white'
          }`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <img src={message.author.avatar} alt={message.author.name} />
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {message.author.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {message.author.email}
                    </p>
                  </div>
                  <Badge 
                    variant={message.author.role === 'agent' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {message.author.role === 'agent' ? '상담원' : '고객'}
                  </Badge>
                </div>
                <div className="text-xs text-gray-500">
                  {message.timestamp}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* 답변 작성 영역 */}
      <div className="p-4 bg-gray-50">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">답변 작성</h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Smile className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Textarea
            placeholder="고객에게 답변을 작성하세요..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="min-h-24 resize-none"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs">
                공개 답변
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                임시저장
              </Button>
              <Button size="sm" disabled={!replyContent.trim()}>
                <Send className="h-4 w-4 mr-1" />
                전송
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}