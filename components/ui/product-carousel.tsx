'use client'

import { ProductCardCompact } from "@/components/ui/product-card-compact"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProductData {
  id: string
  name: string
  subtitle: string
  logo: string
  category: string
  vendor: string
  basic_info: {
    description: string
    target_users: string[]
    deployment: string
    languages: string
  }
  key_features: any[]
  pricing_integration: any
  advanced_info?: any
}

interface ProductCarouselProps {
  products: ProductData[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className="lg:hidden w-full max-w-sm mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <ProductCardCompact product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  )
}
