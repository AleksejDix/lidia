import type { InjectionKey } from 'vue'
import { provide, inject } from 'vue'

export interface FormContext {
  data: any
}

export const key: InjectionKey<FormContext> = Symbol('Form')

export function provideFormContext(context: FormContext) {
  provide(key, context)
}

export function useFormContext(): FormContext {
  const context = inject(key, null)
  if (!context) {
    throw new Error(`Could not resolve Form context`)
  }
  return context
}

export function tryUseFormContext() {
  return inject(key, null)
}
