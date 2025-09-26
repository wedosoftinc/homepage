'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ChatMessage {
  id: number
  type: 'user' | 'bot'
  message: string
  timestamp: string
  isTyping?: boolean
}

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    type: 'bot',
    message: '안녕하세요! 위두소프트 고객지원 AI입니다. 무엇을 도와드릴까요?',
    timestamp: '14:25'
  }
]

const conversationFlow: Omit<ChatMessage, 'id' | 'timestamp'>[] = [
  {
    type: 'user',
    message: '주문한 제품 배송 조회하고 싶어요'
  },
  {
    type: 'bot',
    message: '주문번호를 알려주시면 배송 상태를 확인해드릴게요. 주문번호는 보통 "WS"로 시작하는 8자리 번호입니다.'
  },
  {
    type: 'user',
    message: 'WS240926입니다'
  },
  {
    type: 'bot',
    message: '확인해드렸습니다! WS240926 주문은 현재 배송 중이며, 내일 오후 2시경 도착 예정입니다. 🚚'
  },
  {
    type: 'user',
    message: '혹시 배송지 변경 가능한가요?'
  },
  {
    type: 'bot',
    message: '배송 중인 상품은 배송지 변경이 어려울 수 있습니다. 택배사로 연결해드릴까요? 아니면 담당자와 직접 상담하시겠어요?'
  },
  {
    type: 'user',
    message: '담당자와 상담하고 싶어요'
  },
  {
    type: 'bot',
    message: '고객님을 담당자에게 연결해드리겠습니다. 잠시만 기다려주세요... ✨\n\n평균 대기시간: 30초'
  }
]

export function AIChatbotDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (isPlaying && currentStep < conversationFlow.length) {
      const timer = setTimeout(() => {
        const nextMessage = conversationFlow[currentStep]
        
        // 봇 메시지인 경우 타이핑 효과 먼저 보여주기
        if (nextMessage.type === 'bot') {
          setIsTyping(true)
          setTimeout(() => {
            setIsTyping(false)
            addMessage(nextMessage)
            setCurrentStep(prev => prev + 1)
          }, 1500)
        } else {
          addMessage(nextMessage)
          setCurrentStep(prev => prev + 1)
        }
      }, 2000)

      return () => clearTimeout(timer)
    } else if (currentStep >= conversationFlow.length) {
      // 대화 완료 후 3초 뒤에 리셋
      const resetTimer = setTimeout(() => {
        handleReset()
      }, 3000)
      
      return () => clearTimeout(resetTimer)
    }
  }, [isPlaying, currentStep])

  const addMessage = (messageData: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString('ko-KR', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      ...messageData
    }

    setMessages(prev => [...prev, newMessage])
  }

  const handleStart = () => {
    setIsPlaying(true)
  }

  const handleReset = () => {
    setMessages(initialMessages)
    setCurrentStep(0)
    setIsPlaying(false)
    setIsTyping(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <div>
            <h3 className="font-semibold">위두소프트 고객지원</h3>
            <p className="text-sm text-blue-100">AI 상담사가 도와드립니다</p>
          </div>
        </div>
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.type === 'bot' && (
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">AI</AvatarFallback>
              </Avatar>
            )}
            
            <div className={`max-w-[70%] ${message.type === 'user' ? 'order-1' : ''}`}>
              <div
                className={`p-3 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-white border rounded-bl-sm shadow-sm'
                }`}
              >
                {message.message}
              </div>
              <div className={`text-xs text-gray-500 mt-1 ${
                message.type === 'user' ? 'text-right' : 'text-left'
              }`}>
                {message.timestamp}
              </div>
            </div>

            {message.type === 'user' && (
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">고객</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">AI</AvatarFallback>
            </Avatar>
            <div className="bg-white border rounded-lg rounded-bl-sm shadow-sm p-3 max-w-[70%]">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t bg-white rounded-b-lg">
        <div className="flex gap-2">
          {!isPlaying ? (
            <Button onClick={handleStart} className="flex-1" size="sm">
              AI 상담 시작하기
            </Button>
          ) : (
            <Button onClick={handleReset} variant="outline" className="flex-1" size="sm">
              다시 보기
            </Button>
          )}
        </div>
        
        {currentStep > 0 && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>대화 진행중</span>
              <span>{currentStep} / {conversationFlow.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / conversationFlow.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}