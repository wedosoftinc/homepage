'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

interface ProductFeature {
  title: string
  description: string
  icon: string
  detailed_content?: string
  benefits?: string[]
}

interface FeatureDetailModalProps {
  isOpen: boolean
  onClose: () => void
  feature: ProductFeature | null
}

export function FeatureDetailModal({ isOpen, onClose, feature }: FeatureDetailModalProps) {
  if (!feature) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <CheckCircleIcon className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-xl">{feature.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base leading-relaxed pt-4">
            {feature.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          {feature.detailed_content && (
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">상세 설명</h4>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {feature.detailed_content}
              </p>
            </div>
          )}

          {feature.benefits && feature.benefits.length > 0 && (
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-sm mb-2 text-blue-900 dark:text-blue-100">
                주요 이점
              </h4>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200">
                    <CheckCircleIcon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
