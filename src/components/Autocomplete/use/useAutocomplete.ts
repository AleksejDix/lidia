// useAutocomplete.ts
import { watchEffect, type Ref } from 'vue'
import { ref, computed, watch } from 'vue'
import { createAutocompleteContext } from './useAutocompleteContext'
import { watchDebounced } from '@vueuse/core'

interface Autocomplete {
  autocomplete: Function | any[]
  uniqueKey: string
  select: (suggestion: any) => void
  modelValue: any
  displayKey: string
  sortKeys: string[]
  groupKey: string | undefined
}

export function useAutocomplete(options: Autocomplete) {
  const query = ref('')
  const suggestions = ref<any[]>([])
  const selectionIndex = ref(0)
  const isLoading = ref(false)

  const count = computed(() => {
    return suggestions.value.length
  })

  watchDebounced(
    query,
    async () => {
      isLoading.value = true
      let result: any[] | Promise<any[]>

      setTimeout(async () => {
        if (typeof options.autocomplete === 'function') {
          result = options.autocomplete(query.value)
        } else {
          result = options.autocomplete.filter((option: any) =>
            option[options.displayKey].toLowerCase().includes(query.value.toLowerCase())
          )
        }

        suggestions.value = result instanceof Promise ? await result : result

        isLoading.value = false
      }, 200)
    },
    { debounce: 200, maxWait: 5000, immediate: true }
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

  const highlight = (index: number) => {
    selectionIndex.value = index
  }

  const hPrev = () => {
    highlight((selectionIndex.value - 1 + count.value) % count.value)
  }

  const hNext = () => {
    highlight((selectionIndex.value + 1) % count.value)
  }

  function isHighlighted(index: number) {
    return selectionIndex.value === index
  }

  const hasSuggestions = computed(() => {
    return suggestions.value.length > 0
  })

  const hasNoSuggestions = computed(() => {
    return suggestions.value.length === 0
  })

  function multiSort(array: any[], sortKeys: string[]) {
    if (!sortKeys) return array
    if (sortKeys?.length === 0) return array
    return array.sort((a, b) => {
      for (const key of sortKeys) {
        const comparison = a[key].localeCompare(b[key])
        if (comparison !== 0) {
          return comparison
        }
      }
      return 0
    })
  }

  const groupCantonsByFirstLetter = (cantons, keys) => {
    const sortedCantons = multiSort(cantons, keys)

    const groupedCantons = sortedCantons.reduce((list, item) => {
      const group = options.groupKey ? item[options.groupKey] : ''
      if (!list[group]) {
        list[group] = []
      }
      list[group].push(item)

      return list
    }, {})

    let globalIndex = 0
    const groupedCantonsArray = Object.entries(groupedCantons).map(([name, value]) => {
      const children = value
        .sort((a, b) => a[options.displayKey].localeCompare(b[options.displayKey]))
        .map((canton) => {
          const indexedCanton = { ...canton, index: globalIndex }
          globalIndex += 1
          return indexedCanton
        })
      return {
        name,
        children
      }
    })

    return groupedCantonsArray
  }

  // Example usage:
  const groups = computed(() => {
    return groupCantonsByFirstLetter(suggestions.value, options.sortKeys)
  })

  createAutocompleteContext({
    query,
    suggestions,
    groups,
    hasSuggestions,
    hasNoSuggestions,
    uniqueKey: options.uniqueKey,
    select: options.select,
    selectFirst,
    selectionIndex,
    hPrev,
    hNext,
    highlight,
    ghost,
    isHighlighted,
    modelValue: options.modelValue,
    isLoading,
    displayKey: options.displayKey,
    sortKeys: options.sortKeys,
    groupKey: options.groupKey
  })

  return {
    query,
    suggestions,
    groups,
    hasSuggestions,
    hasNoSuggestions,
    uniqueKey: options.uniqueKey,
    select: options.select,
    selectFirst,
    selectionIndex,
    hPrev,
    hNext,
    highlight,
    ghost,
    isHighlighted,
    modelValue: options.modelValue,
    isLoading
  }
}
