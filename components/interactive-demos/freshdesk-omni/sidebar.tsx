'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  InboxIcon as Inbox,
  TicketIcon as Ticket,
  ClockIcon as Clock,
  CheckCircleIcon as CheckCircle,
  XCircleIcon as XCircle,
  FunnelIcon as Filter,
  PlusIcon as Plus,
  FolderIcon as Folder,
  StarIcon as Star,
  ArchiveBoxIcon as Archive,
  ExclamationTriangleIcon as AlertTriangle
} from '@heroicons/react/24/outline'

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  count?: number
  isActive?: boolean
  onClick?: () => void
}

function SidebarItem({ icon, label, count, isActive = false, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
        isActive 
          ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className={isActive ? 'text-blue-600' : 'text-gray-500'}>
          {icon}
        </div>
        <span className="font-medium">{label}</span>
      </div>
      {count !== undefined && (
        <Badge 
          variant={isActive ? "default" : "secondary"} 
          className={`text-xs ${isActive ? 'bg-blue-600 text-white' : ''}`}
        >
          {count}
        </Badge>
      )}
    </button>
  )
}

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('all-tickets')

  const sidebarSections = [
    {
      title: '티켓 보기',
      items: [
        {
          id: 'all-tickets',
          icon: <Inbox className="h-4 w-4" />,
          label: '모든 티켓',
          count: 24
        },
        {
          id: 'my-tickets',
          icon: <Ticket className="h-4 w-4" />,
          label: '내 티켓',
          count: 8
        },
        {
          id: 'unassigned',
          icon: <Clock className="h-4 w-4" />,
          label: '미할당',
          count: 5
        },
        {
          id: 'pending',
          icon: <AlertTriangle className="h-4 w-4" />,
          label: '대기중',
          count: 12
        }
      ]
    },
    {
      title: '상태별',
      items: [
        {
          id: 'open',
          icon: <CheckCircle className="h-4 w-4" />,
          label: '열린 티켓',
          count: 18
        },
        {
          id: 'resolved',
          icon: <CheckCircle className="h-4 w-4" />,
          label: '해결됨',
          count: 156
        },
        {
          id: 'closed',
          icon: <XCircle className="h-4 w-4" />,
          label: '닫힌 티켓',
          count: 89
        }
      ]
    },
    {
      title: '사용자 정의',
      items: [
        {
          id: 'starred',
          icon: <Star className="h-4 w-4" />,
          label: '즐겨찾기',
          count: 3
        },
        {
          id: 'archived',
          icon: <Archive className="h-4 w-4" />,
          label: '보관함',
          count: 45
        }
      ]
    }
  ]

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* 헤더 */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-900">워크스페이스</h2>
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        {/* 필터 버튼 */}
        <Button variant="outline" size="sm" className="w-full justify-start">
          <Filter className="h-4 w-4 mr-2" />
          필터 적용
        </Button>
      </div>

      {/* 네비게이션 섹션들 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {sidebarSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  count={item.count}
                  isActive={activeItem === item.id}
                  onClick={() => setActiveItem(item.id)}
                />
              ))}
            </div>
          </div>
        ))}

        {/* 사용자 정의 폴더 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              폴더
            </h3>
            <Button variant="ghost" size="sm">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-1">
            <SidebarItem
              icon={<Folder className="h-4 w-4" />}
              label="긴급 문의"
              count={2}
            />
            <SidebarItem
              icon={<Folder className="h-4 w-4" />}
              label="결제 관련"
              count={7}
            />
            <SidebarItem
              icon={<Folder className="h-4 w-4" />}
              label="기술 지원"
              count={11}
            />
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="text-xs text-gray-500 space-y-1">
          <div className="flex justify-between">
            <span>오늘 처리:</span>
            <span className="font-medium">23건</span>
          </div>
          <div className="flex justify-between">
            <span>이번 주:</span>
            <span className="font-medium">156건</span>
          </div>
        </div>
      </div>
    </div>
  )
}