import type { InjectionKey, Ref } from 'vue'
import { provide, inject } from 'vue'

export interface AccordionContext {
  isMultiple: Ref<boolean>
  panels: Ref<any[]>
  create: (disclosure: any) => void
  destroy: (id: string) => void
}

export const key: InjectionKey<AccordionContext> = Symbol('Accordion')

export function provideAccordionContext(accordion: AccordionContext) {
  provide(key, accordion)
}

export function useAccordionContext(): AccordionContext {
  const accordion = inject(key, null)
  if (!accordion) {
    throw new Error(`Could not resolve Accordion context`)
  }
  return accordion
}

export function tryUseAccordionContext() {
  return inject(key, null)
}
