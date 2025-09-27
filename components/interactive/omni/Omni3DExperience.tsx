'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

// 채널 정의
const CHANNELS = [
  { id: 'email', name: 'Email', emoji: '📧', color: '#FF6B6B', position: 0 },
  { id: 'live-chat', name: 'Live Chat', emoji: '💬', color: '#4ECDC4', position: 1 },
  { id: 'call', name: 'Call', emoji: '📞', color: '#45B7D1', position: 2 },
  { id: 'whatsapp', name: 'WhatsApp', emoji: '📱', color: '#25D366', position: 3 },
  { id: 'instagram', name: 'Instagram', emoji: '📷', color: '#E1306C', position: 4 },
  { id: 'messenger', name: 'Messenger', emoji: '🗨️', color: '#0084FF', position: 5 },
  { id: 'kakaotalk', name: 'KakaoTalk', emoji: '🗣️', color: '#FEE500', position: 6 },
  { id: 'sms', name: 'SMS', emoji: '💌', color: '#9B59B6', position: 7 }
]

// 2D 시각화 컴포넌트 (임시)
function OmniChannelVisualization({ activeChannels }: { activeChannels: Set<string> }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20">
      {/* 중앙 허브 */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl animate-pulse">
          <div className="text-center">
            <div className="text-white font-bold text-sm">Agent Hub</div>
            <div className="text-blue-100 text-xs">(Central Inbox)</div>
          </div>
        </div>
        
        {/* 활성 채널 수에 따른 외부 링 */}
        <div 
          className="absolute inset-0 rounded-full border-4 border-blue-400 animate-spin"
          style={{
            transform: `scale(${1 + (activeChannels.size * 0.1)})`,
            opacity: 0.6 + (activeChannels.size * 0.05)
          }}
        />
      </div>

      {/* 채널 노드들 */}
      {CHANNELS.map((channel, index) => {
        const angle = (index / CHANNELS.length) * 360
        const radius = 150
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        const isActive = activeChannels.has(channel.id)
        
        return (
          <div
            key={channel.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            {/* 연결 선 */}
            <div
              className="absolute top-1/2 left-1/2 origin-left transform -translate-y-0.5"
              style={{
                width: `${radius}px`,
                height: '2px',
                backgroundColor: channel.color,
                opacity: isActive ? 0.6 : 0.2,
                transform: `rotate(${angle + 180}deg)`,
                transformOrigin: '0 50%'
              }}
            />
            
            {/* 파티클 플로우 애니메이션 */}
            {isActive && (
              <div
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full animate-ping"
                style={{
                  backgroundColor: channel.color,
                  transform: `rotate(${angle + 180}deg) translateX(-${radius/2}px) translateY(-50%)`,
                  transformOrigin: '0 50%',
                  animationDuration: '2s',
                  animationDelay: `${index * 0.2}s`
                }}
              />
            )}
            
            {/* 채널 노드 */}
            <div
              className={`w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-300 ${
                isActive ? 'scale-110 animate-bounce' : 'scale-90 opacity-60'
              }`}
              style={{ backgroundColor: channel.color }}
            >
              <div className="text-xl">{channel.emoji}</div>
              <div className="text-white text-xs font-medium text-center px-1">
                {channel.name.split(' ')[0]}
              </div>
            </div>
          </div>
        )
      })}
      
      {/* 중앙 표시 텍스트 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/90 dark:bg-gray-900/90 px-4 py-2 rounded-full shadow-lg">
          <div className="text-sm font-semibold text-center">
            활성 채널: {activeChannels.size}/{CHANNELS.length}
          </div>
        </div>
      </div>
    </div>
  )
}

// 메인 컴포넌트
export function Omni3DExperience() {
  const [activeChannels, setActiveChannels] = useState<Set<string>>(
    new Set(['email', 'live-chat', 'call', 'whatsapp'])
  )

  const toggleChannel = (channelId: string) => {
    setActiveChannels(prev => {
      const newSet = new Set(prev)
      if (newSet.has(channelId)) {
        newSet.delete(channelId)
      } else {
        newSet.add(channelId)
      }
      return newSet
    })
  }

  const toggleAllChannels = () => {
    if (activeChannels.size === CHANNELS.length) {
      setActiveChannels(new Set())
    } else {
      setActiveChannels(new Set(CHANNELS.map(c => c.id)))
    }
  }

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-background to-muted/30 rounded-xl border overflow-hidden">
      {/* 2D 시각화 (3D 대신 임시) */}
      <div className="w-full h-full">
        <OmniChannelVisualization activeChannels={activeChannels} />
      </div>
      
      {/* UI 오버레이 */}
      <div className="absolute bottom-4 left-4 right-4">
        <Card className="p-4 bg-background/95 backdrop-blur-sm">
          <div className="space-y-4">
            {/* 제목과 설명 */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">
                옴니채널 통합 인박스 체험
              </h3>
              <p className="text-sm text-muted-foreground">
                다양한 채널에서 들어오는 고객 문의가 중앙 상담원 허브로 통합되는 과정을 확인하세요
              </p>
            </div>
            
            {/* 활성 채널 수 표시 */}
            <div className="text-center">
              <Badge variant="outline" className="text-sm">
                활성 채널: {activeChannels.size} / {CHANNELS.length}
              </Badge>
            </div>
            
            {/* 채널 토글 버튼들 */}
            <div className="space-y-3">
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleAllChannels}
                  className="text-xs"
                >
                  {activeChannels.size === CHANNELS.length ? '모든 채널 끄기' : '모든 채널 켜기'}
                </Button>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {CHANNELS.map((channel) => (
                  <Button
                    key={channel.id}
                    variant={activeChannels.has(channel.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleChannel(channel.id)}
                    className="text-xs p-2 h-auto flex flex-col items-center gap-1"
                    style={{
                      backgroundColor: activeChannels.has(channel.id) ? channel.color : undefined,
                      borderColor: channel.color,
                      color: activeChannels.has(channel.id) ? 'white' : undefined
                    }}
                  >
                    <span className="text-sm">{channel.emoji}</span>
                    <span className="text-[10px] leading-tight">{channel.name}</span>
                  </Button>
                ))}
              </div>
            </div>
            
            {/* 안내 메시지 */}
            <div className="text-center text-xs text-muted-foreground">
              💡 채널 버튼을 클릭해서 메시지 플로우를 조절해보세요. 실제 Freshdesk Omni에서는 3D 인터랙티브로 제공됩니다.
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}