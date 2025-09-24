"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building, Calendar, Trophy, Users, Award, Handshake } from "lucide-react"

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
      <CardHeader className="text-center pb-6 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="relative mx-auto mb-6">
          {/* Profile image placeholder with gradient background */}
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
              {imageUrl ? (
                <AvatarImage src={imageUrl} alt={name} />
              ) : (
                <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/80 text-white">
                  {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              )}
            </Avatar>
            
            {/* Professional badge */}
            <div className="absolute -bottom-2 -right-2">
              <Badge className="bg-primary text-primary-foreground shadow-md">
                <Trophy className="w-3 h-3 mr-1" />
                대표
              </Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">{name}</h2>
            <p className="text-lg text-muted-foreground font-medium">{title}</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Building className="w-4 h-4" />
              <span>{company}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-medium text-primary">{experience}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon as keyof typeof iconMap] || Building
            
            return (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {highlight.label}
                  </div>
                  <div className="text-lg font-bold text-foreground mb-1">
                    {highlight.value}
                  </div>
                  {highlight.description && (
                    <div className="text-xs text-muted-foreground">
                      {highlight.description}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}