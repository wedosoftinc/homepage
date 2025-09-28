'use client'

import { Button } from '@/components/ui/button'

interface ScrollToInteractiveButtonProps {
  className?: string
}

export function ScrollToInteractiveButton({ className = "" }: ScrollToInteractiveButtonProps) {
  const handleScrollToInteractive = () => {
    document.getElementById('interactive')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={handleScrollToInteractive}
      className={`animate-pulse hover:animate-none group ${className}`}
    >
      <span className="mr-2">인터랙티브 체험</span>
      <div className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300">
        ↓
      </div>
    </Button>
  )
}