'use client'

import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  BellIcon as Bell,
  Cog6ToothIcon as Settings,
  QuestionMarkCircleIcon as HelpCircle,
  ChevronDownIcon as ChevronDown,
  HomeIcon as Home,
  TicketIcon as Ticket,
  UserGroupIcon as Users,
  ChartBarIcon as BarChart3,
  InboxIcon as Inbox
} from '@heroicons/react/24/outline'

export default function TopBar() {
  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      {/* 왼쪽: 로고 및 네비게이션 */}
      <div className="flex items-center space-x-6">
        {/* 로고 */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FD</span>
          </div>
          <span className="font-semibold text-gray-900">Freshdesk</span>
        </div>

        {/* 메인 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <Home className="h-4 w-4 mr-2" />
            대시보드
          </Button>
          <Button variant="ghost" size="sm" className="text-blue-600 bg-blue-50">
            <Ticket className="h-4 w-4 mr-2" />
            티켓
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <Users className="h-4 w-4 mr-2" />
            고객
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <BarChart3 className="h-4 w-4 mr-2" />
            분석
          </Button>
        </nav>
      </div>

      {/* 가운데: 상태 표시 */}
      <div className="hidden lg:flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">실시간 동기화</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Inbox className="h-4 w-4 text-gray-500" />
          <Badge variant="outline" className="text-xs">
            새 티켓 3개
          </Badge>
        </div>
      </div>

      {/* 오른쪽: 사용자 영역 */}
      <div className="flex items-center space-x-3">
        {/* 알림 */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">2</span>
          </span>
        </Button>

        {/* 도움말 */}
        <Button variant="ghost" size="sm">
          <HelpCircle className="h-5 w-5 text-gray-600" />
        </Button>

        {/* 설정 */}
        <Button variant="ghost" size="sm">
          <Settings className="h-5 w-5 text-gray-600" />
        </Button>

        {/* 구분선 */}
        <div className="w-px h-6 bg-gray-300"></div>

        {/* 사용자 프로필 */}
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2">
          <Avatar className="h-8 w-8">
            <img 
              src="https://ui-avatars.com/api/?name=이상우&background=3b82f6&color=fff" 
              alt="이상우"
            />
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">이상우</p>
            <p className="text-xs text-gray-600">상담원</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  )
}