'use client'

import { useState } from 'react'
import TopBar from './top-bar'
import Sidebar from './sidebar'
import TicketList from './ticket-list'
import TicketDetail from './ticket-detail'
import CustomerSidebar from './customer-sidebar'
import { Ticket } from './ticket-list'

export default function FreshdeskOmniDemo() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  const handleTicketSelect = (ticket: Ticket) => {
    setSelectedTicket(ticket)
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* 상단바 */}
      <TopBar />
      
      {/* 메인 콘텐츠 영역 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 왼쪽 사이드바 */}
        <Sidebar />
        
        {/* 티켓 리스트 */}
        <TicketList 
          selectedTicketId={selectedTicket?.id}
          onTicketSelect={handleTicketSelect}
        />
        
        {/* 티켓 상세 */}
        <TicketDetail ticket={selectedTicket} />
        
        {/* 고객 정보 사이드바 */}
        <CustomerSidebar ticket={selectedTicket} />
      </div>
    </div>
  )
}