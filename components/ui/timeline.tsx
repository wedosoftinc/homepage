"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  RocketLaunchIcon as RocketLaunch,
  BriefcaseIcon as Briefcase,
  HandRaisedIcon as Handshake,
  SparklesIcon as Sparkles
} from "@heroicons/react/24/outline"
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
  foundation: RocketLaunch,
  project: Briefcase,
  partnership: Handshake,
  milestone: Sparkles
}

const categoryColors = {
  foundation: 'bg-primary',
  project: 'bg-primary',
  partnership: 'bg-primary',
  milestone: 'bg-primary'
}

const categoryBadgeColors = {
  foundation: 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/30',
  project: 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/30',
  partnership: 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/30',
  milestone: 'bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/30'
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
                <IconComponent className="h-6 w-6 text-primary-foreground" />
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