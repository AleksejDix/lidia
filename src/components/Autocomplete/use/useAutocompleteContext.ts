// useAutocompleteContext.ts
import type { Ref, ComputedRef, InjectionKey } from 'vue'
import { provide, inject } from 'vue'

interface AutocompleteContext {
  query: Ref<string>
  suggestions: Ref<any[]>
  hasSuggestions: ComputedRef<boolean>
  hasNoSuggestions: ComputedRef<boolean>
  key: string
  select: (suggestion: any) => void
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
