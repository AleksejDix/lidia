import type { InjectionKey, Ref } from 'vue'
import { provide, inject } from 'vue'

export interface TooltipContext {
  visible: Ref<boolean>
  position: Ref<{ x: number; y: number }>
  show: (event: MouseEvent) => void
  hide: () => void
}

export const key: InjectionKey<TooltipContext> = Symbol('Tooltip')

export function provideTooltipContext(tooltip: TooltipContext) {
  provide(key, tooltip)
}

export function useTooltipContext(): TooltipContext {
  const tooltip = inject(key, null)
  if (!tooltip) {
    throw new Error(`Could not resolve Tooltip context`)
  }
  return tooltip
}
