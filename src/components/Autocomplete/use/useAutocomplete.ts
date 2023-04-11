// useAutocomplete.ts
import { ref, computed, watchEffect } from 'vue'
import { createAutocompleteContext } from './useAutocompleteContext'
import { watchDebounced } from '@vueuse/core'

interface Autocomplete {
  autocomplete: (query: string) => Promise<unknown[]>
  key: string
  select: (suggestion: any) => void
}

export function useAutocomplete(options: Autocomplete) {
  const query = ref('')
  const suggestions = ref<unknown[]>([])

  const state = ref<'idle' | 'searching'>('idle')

  watchDebounced(
    query,
    async () => {
      suggestions.value = await options.autocomplete(query.value)
    },
    { debounce: 200, maxWait: 5000 }
  )

  watchEffect(() => {
    state.value = query.value.length > 0 ? 'searching' : 'idle'
  })

  const hasSuggestions = computed(() => {
    return state.value === 'searching' && suggestions.value.length > 0
  })

  const hasNoSuggestions = computed(() => {
    return state.value === 'searching' && suggestions.value.length === 0
  })

  createAutocompleteContext({
    query,
    suggestions,
    hasSuggestions,
    hasNoSuggestions,
    key: options.key,
    select: options.select
  })

  return {
    query,
    suggestions,
    hasSuggestions,
    hasNoSuggestions,
    key: options.key,
    select: options.select
  }
}
