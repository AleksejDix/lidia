<!-- Table.vue -->
<template>
  <div class="relative overflow-auto bg-black-100">
    <table
      class="table-auto w-full border-separate border-spacing-0 bg-gray-700"
      :caption-id="captionId"
      v-bind="$attrs"
    >
      <slot>
        <TableCaption v-if="$slots['table-caption']">
          <slot name="table-caption"> I am a default table caption slot</slot>
        </TableCaption>
        <slot name="table-head">
          <TableHead>
            <template v-slot:[`th-${key}`]="props" v-for="{ key } in columns">
              <slot :name="`th-${key}`" v-bind="props"></slot>
            </template>
          </TableHead>
        </slot>
        <slot name="table-body">
          <TableBody>
            <template #default="{ rows }">
              <TableRow v-for="(row, index) in rows" :key="row.id" :row="row" :index="index">
                <template v-slot:[`tr-${key}`]="scopedData" v-for="key in Object.keys(row)">
                  <slot :name="`tr-${key}`" v-bind="scopedData"></slot>
                </template>
              </TableRow>
            </template>
          </TableBody>
        </slot>
        <slot name="table-foot">
          <TableFoot></TableFoot>
        </slot>
      </slot>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { useArraySelection } from '@aleksejdix/datastructures/src'
import { ref, computed, type PropType, toRef } from 'vue'
import { createTableContext } from '../use/useTableContext'
import { TableHead, TableBody, TableCaption, TableFoot, TableRow } from '.'
import type { Data } from '@/api'

const props = defineProps({
  data: {
    type: Array as PropType<Data>,
    default: () => []
  },
  modelValue: {
    type: Array as PropType<Data>,
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

const emits = defineEmits(['update:modelValue', 'update:columns'])

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
      console.log('hi')
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

const _data = toRef(props, 'data')

const sel = computed({
  get() {
    return props.modelValue
  },
  set(value: any) {
    emits('update:modelValue', value)
  }
})

const hasData = computed(() => _data.value.length > 0)

const {
  select,
  deselect,
  selectAll,
  deselectAll,
  isSelected,
  selectionState,
  shiftSelect,
  selectByIndex,
  selectNext,
  selectPrev
} = useArraySelection(_data, sel)

createTableContext({
  data: computed(() => sortedData.value),
  columns: computed(() => props.columns),
  captionId: props.captionId,
  handleKeydown,
  sorting,
  select,
  selected: sel,
  deselect,
  selectAll,
  deselectAll,
  isSelected,
  selectionState,
  shiftSelect,
  selectByIndex,
  selectNext,
  selectPrev,
  hasData
})
</script>
