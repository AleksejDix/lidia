// useAutocompleteContext.ts
import type { Ref, ComputedRef, InjectionKey } from 'vue'
import { provide, inject } from 'vue'

interface AutocompleteContext {
  query: Ref<string>
  modelValue: Ref<any>
  suggestions: Ref<any[]>
  groups: Ref<any>
  hasSuggestions: ComputedRef<boolean>
  hasNoSuggestions: ComputedRef<boolean>
  uniqueKey: string
  select: (suggestion: any) => void
  selectFirst: () => void
  selectionIndex: Ref<number>
  hPrev: () => void
  hNext: () => void
  ghost: ComputedRef<any>
  isHighlighted: (index: number) => boolean
  highlight: (index: number) => void
  isLoading: Ref<boolean>
  searchKey: any
  sortKeys: any
  groupKey: any
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
