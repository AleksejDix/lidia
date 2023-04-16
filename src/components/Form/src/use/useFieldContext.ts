// useFieldContext.ts
import type { InjectionKey, Ref, ComputedRef } from 'vue'
import { provide, inject } from 'vue'

export interface FieldContext {
  name: Ref<string>
  value: Ref<any>
  helpId: Ref<string | undefined>
  inputId: Ref<string | undefined>
  messages: ComputedRef<string[]>
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
