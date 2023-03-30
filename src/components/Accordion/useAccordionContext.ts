import type { InjectionKey } from 'vue'
import { provide, inject } from 'vue'

export interface AccordionContext {
  panels: Record<string, boolean>
  create: (id: string, state: boolean) => void
  update: (id: string, state: boolean) => void
}

export const key: InjectionKey<AccordionContext> = Symbol('Accordion')

export function provideAccordionContext(accordion: AccordionContext) {
  provide(key, accordion)
}

export function useAccordionContext(): AccordionContext {
  const accordion = inject(key)
  if (!accordion) {
    throw new Error(`Could not resolve Accordion context`)
  }
  return accordion
}
