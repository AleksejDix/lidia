// useAutocompleteContext.ts
import type { Ref, ComputedRef, InjectionKey } from 'vue'
import { provide, inject } from 'vue'

interface AutocompleteContext {
  query: Ref<string>
  suggestions: Ref<any[]>
  hasSuggestions: ComputedRef<boolean>
  hasNoSuggestions: ComputedRef<boolean>
  uniqueKey: string
  select: (suggestion: any) => void
  selectFirst: () => void
  selectionIndex: Ref<number>
  selectPrev: () => void
  selectNext: () => void
  ghost: ComputedRef<any>
}

const key: InjectionKey<AutocompleteContext> = Symbol('AutocompleteContext')

export function createAutocompleteContext(context: AutocompleteContext) {
  provide(key, context)
}

export function useAutocompleteContext() {
  const context = inject(key)

  if (!context) {
    throw new Error('No AutocompleteContext provided')
  }

  return context
}
