import type { InjectionKey, Ref } from 'vue'
import { provide, inject } from 'vue'

export interface FeedContext {
  id: string
}

export const key: InjectionKey<FeedContext> = Symbol('Feed')

export function provideFeedContext(accordion: FeedContext) {
  provide(key, accordion)
}

export function useFeedContext(): FeedContext {
  const accordion = inject(key, null)
  if (!accordion) {
    throw new Error(`Could not resolve Feed context`)
  }
  return accordion
}

export function tryUseFeedContext() {
  return inject(key, null)
}
