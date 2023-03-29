// useAlertContext.ts
import { provide, type InjectionKey, inject, type ComputedRef, type Ref } from 'vue'

export interface AlertContext {
  isActive: ComputedRef<boolean>
  close: () => void
  type: Ref<'error' | 'warning' | 'success' | 'info'>
}

export const key: InjectionKey<AlertContext> = Symbol('Alert')

export function createAlertContext(context: AlertContext) {
  provide(key, context)
}

export function useAlertContext() {
  const context = inject(key)

  if (!context) {
    throw new Error(`Could not resolve ${context}`)
  }

  return context
}
