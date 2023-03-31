// useDisclosureContext.ts

import type { InjectionKey, Ref } from 'vue'
import { provide, inject } from 'vue'

export interface DisclosureContext {
  isOpen: Ref<boolean>
  id: string
  toggle: () => void
  isAccordion: Ref<boolean>
}

export const key: InjectionKey<DisclosureContext> = Symbol('Dislosure')

export function provideDisclosureContext(context: DisclosureContext) {
  provide(key, context)
}

export function useDisclosureContext(): DisclosureContext {
  const injectible = inject(key)
  if (!injectible) {
    throw new Error(`Could not resolve Disclosure context`)
  }
  return injectible
}
