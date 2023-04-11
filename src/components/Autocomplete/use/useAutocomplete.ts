// useAutocomplete.ts
import { ref, computed, watch } from 'vue'
import { createAutocompleteContext } from './useAutocompleteContext'
import { watchDebounced } from '@vueuse/core'
import { useFocusCycle } from '@aleksejdix/focus/src'

interface Autocomplete {
  autocomplete: (query: string) => Promise<unknown[]>
  uniqueKey: string
  select: (suggestion: any) => void
}

export function useAutocomplete(options: Autocomplete) {
  const query = ref('')
  const suggestions = ref<unknown[]>([])
  const selectionIndex = ref(0)

  useFocusCycle()

  const count = computed(() => {
    return suggestions.value.length
  })

  watchDebounced(
    query,
    async () => {
      suggestions.value = await options.autocomplete(query.value)
    },
    { debounce: 200, maxWait: 5000 }
  )

  watch(query, () => {
    selectionIndex.value = 0
  })

  const ghost = computed(() => {
    return suggestions.value[selectionIndex.value]
  })

  function selectFirst() {
    options.select(suggestions.value[selectionIndex.value])
  }

  const select = (index: number) => {
    selectionIndex.value = index
  }

  const selectPrev = () => {
    select((selectionIndex.value - 1 + count.value) % count.value)
  }

  const selectNext = () => {
    select((selectionIndex.value + 1) % count.value)
  }

  const hasSuggestions = computed(() => {
    return query.value.length > 0 && suggestions.value.length > 0
  })

  const hasNoSuggestions = computed(() => {
    return query.value.length > 0 && suggestions.value.length === 0
  })

  createAutocompleteContext({
    query,
    suggestions,
    hasSuggestions,
    hasNoSuggestions,
    uniqueKey: options.uniqueKey,
    select: options.select,
    selectFirst,
    selectionIndex,
    selectPrev,
    selectNext,
    ghost
  })

  return {
    query,
    suggestions,
    hasSuggestions,
    hasNoSuggestions,
    uniqueKey: options.uniqueKey,
    select: options.select,
    selectFirst,
    selectionIndex,
    selectPrev,
    selectNext,
    ghost
  }
}
