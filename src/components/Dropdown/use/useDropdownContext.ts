// useDropdownContext.ts
import type { Ref, ComputedRef, InjectionKey, Component } from 'vue'
import { provide, inject } from 'vue'

interface DropdownContext {
  isVisible: Ref<boolean>
  id: string
  toggle: () => void
  open: () => void
  close: () => void
  button: Ref<HTMLElement | Component | null>
  contentRef: (el: any) => void
  dropdownRect: ComputedRef<{}>
}

const key: InjectionKey<DropdownContext> = Symbol('DropdownContext')

export function createDropdownContext(context: DropdownContext) {
  provide(key, context)
}

export function useDropdownContext() {
  const context = inject(key)

  if (!context) {
    throw new Error('No DropdownContext provided')
  }

  return context
}

export function tryDropdownContext() {
  return inject(key, null)
}
