"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Building, Users, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  year: string
  title: string
  description: string
  category: 'foundation' | 'project' | 'partnership' | 'milestone'
  highlights?: string[]
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const categoryIcons = {
  foundation: Building,
  project: Users,
  partnership: Trophy,
  milestone: CalendarDays
}

const categoryColors = {
  foundation: 'bg-blue-500',
  project: 'bg-green-500', 
  partnership: 'bg-purple-500',
  milestone: 'bg-orange-500'
}

const categoryBadgeColors = {
  foundation: 'bg-blue-50 text-blue-700 border-blue-200',
  project: 'bg-green-50 text-green-700 border-green-200',
  partnership: 'bg-purple-50 text-purple-700 border-purple-200',
  milestone: 'bg-orange-50 text-orange-700 border-orange-200'
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-8">
        {items.map((item, index) => {
          const IconComponent = categoryIcons[item.category]
          
          return (
            <div key={index} className="relative flex items-start gap-6">
              {/* Timeline dot with icon */}
              <div className={cn(
                "relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background",
                categoryColors[item.category]
              )}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <Card className="border shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={cn("text-xs", categoryBadgeColors[item.category])}>
                          {item.year}
                        </Badge>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">주요 성과</h4>
                        <ul className="space-y-1">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}