import type { InjectionKey, Ref } from 'vue'
import { provide, inject } from 'vue'

export interface FieldContext {
  data: any
}

export const key: InjectionKey<FieldContext> = Symbol('Field')

export function provideFieldContext(context: FieldContext) {
  provide(key, context)
}

export function useFieldContext(): FieldContext {
  const context = inject(key, null)
  if (!context) {
    throw new Error(`Could not resolve Form context`)
  }
  return context
}

export function tryUseFieldContext() {
  return inject(key, null)
}
