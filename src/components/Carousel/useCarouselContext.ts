// useCarouselContext.ts
import { provide, type InjectionKey, inject, type ComputedRef, type Ref } from 'vue'

export interface CarouselContext {
  next: () => void
  prev: () => void
  select: (index: number) => void
  pause: () => void
  resume: () => void
}

export const key: InjectionKey<CarouselContext> = Symbol('Carousel')

export function createCarouselContext(context: CarouselContext) {
  provide(key, context)
}

export function useCarouselContext() {
  const context = inject(key)

  if (!context) {
    throw new Error(`Could not resolve ${context}`)
  }

  return context
}
