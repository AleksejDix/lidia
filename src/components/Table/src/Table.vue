<!-- Table.vue -->
<template>
  <table class="table-auto w-full" :caption-id="captionId">
    <slot></slot>
  </table>
</template>

<script lang="ts" setup>
import { useArraySelection } from '@aleksejdix/datastructures/src'
import { ref, computed } from 'vue'
import { createTableContext } from '../use/useTableContext'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  captionId: {
    type: String,
    required: true
  }
})

const handleKeydown = (event: KeyboardEvent) => {
  const target = event.target as HTMLElement
  const key = event.key

  if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
    event.preventDefault()

    const row = target.parentElement
    const cell = target

    if (key === 'ArrowUp' && row.previousElementSibling) {
      ;(row.previousElementSibling.children[cell.cellIndex] as HTMLElement).focus()
    } else if (key === 'ArrowDown' && row.nextElementSibling) {
      ;(row.nextElementSibling.children[cell.cellIndex] as HTMLElement).focus()
    } else if (key === 'ArrowLeft' && cell.previousElementSibling) {
      ;(cell.previousElementSibling as HTMLElement).focus()
    } else if (key === 'ArrowRight' && cell.nextElementSibling) {
      ;(cell.nextElementSibling as HTMLElement).focus()
    }
  }
}

type SortingDirection = 'asc' | 'desc' | null

interface Sorting {
  key: string
  direction: SortingDirection
}

const sorting = ref<Sorting[]>([])

function multiSort(array: any[], sortKeys: Sorting[]) {
  if (!sortKeys || sortKeys.length === 0) return array

  return array.sort((a, b) => {
    for (const { key, direction } of sortKeys) {
      const comparison = String(a[key]).localeCompare(String(b[key]))

      if (comparison !== 0) {
        return direction === 'asc' ? comparison : -comparison
      }
    }
    return 0
  })
}

const sortedData = computed(() => {
  if (sorting.value.length === 0) {
    return props.data
  }

  return multiSort(props.data, sorting.value)
})

const _data = ref(props.data)

const { selected, select, deselect, selectAll, deselectAll, isSelected, selectionState } =
  useArraySelection(_data)

createTableContext({
  data: computed(() => sortedData.value),
  columns: computed(() => props.columns),
  captionId: props.captionId,
  handleKeydown,
  sorting,
  select,
  selected,
  deselect,
  selectAll,
  deselectAll,
  isSelected,
  selectionState
})
</script>
