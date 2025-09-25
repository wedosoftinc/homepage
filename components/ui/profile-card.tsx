"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BuildingOfficeIcon as Building,
  CalendarIcon as Calendar,
  TrophyIcon as Trophy,
  UsersIcon as Users,
  StarIcon as Award,
  HandRaisedIcon as Handshake
} from "@heroicons/react/24/outline"

const iconMap = {
  Building,
  Calendar,
  Trophy,
  Users,
  Award,
  Handshake
}
import { cn } from "@/lib/utils"

interface ProfileCardProps {
  name: string
  title: string
  company: string
  experience: string
  imageUrl?: string
  highlights: Array<{
    icon: string
    label: string
    value: string
    description?: string
  }>
  className?: string
}

export function ProfileCard({
  name,
  title,
  company,
  experience,
  imageUrl,
  highlights,
  className
}: ProfileCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="flex items-center gap-6">
          {/* Profile image - 더 작게 */}
          <div className="relative flex-shrink-0">
            <Avatar className="w-20 h-20 border-3 border-background shadow-lg">
              {imageUrl ? (
                <AvatarImage src={imageUrl} alt={name} />
              ) : (
                <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-primary to-primary/80 text-white">
                  {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              )}
            </Avatar>

            {/* Professional badge - 더 작게 */}
            <div className="absolute -bottom-1 -right-1">
              <Badge className="bg-primary text-primary-foreground shadow-md text-xs px-2 py-0.5">
                <Trophy className="w-2.5 h-2.5 mr-1" />
                대표
              </Badge>
            </div>
          </div>

          {/* Profile info - 왼쪽 정렬로 컴팩트하게 */}
          <div className="flex-1 text-left space-y-1">
            <h2 className="text-xl font-bold text-foreground">{name}</h2>
            <p className="text-base text-muted-foreground font-medium">{title}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Building className="w-3.5 h-3.5" />
                <span>{company}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium text-primary">{experience}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon as keyof typeof iconMap] || Building

            return (
              <div key={index} className="text-center p-3 rounded-lg bg-muted/30 border">
                <div className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-4 h-4 text-primary" />
                </div>
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  {highlight.label}
                </div>
                <div className="text-lg font-bold text-foreground">
                  {highlight.value}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}