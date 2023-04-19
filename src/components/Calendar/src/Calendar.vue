<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { createCalendarContext } from '../use/useCalendarContext'
import { useCalendarNavigation, useCalendarViews, useLocalization } from '../use/'
import { useArraySelection } from '@aleksejdix/datastructures/src'
import type { PropType } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array as PropType<Date[]>,
    default: null
  }
})

const emits = defineEmits(['update:modelValue'])

const { navigate, currentDate, view } = useCalendarNavigation()

const { formatDate } = useLocalization()

const { grid } = useCalendarViews(currentDate, view)

const sel = computed({
  get() {
    return props.modelValue
      ? (Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]).map(
          (date) => new Date(date.setHours(0, 0, 0, 0))
        )
      : []
  },
  set(value: any) {
    emits('update:modelValue', value)
  }
})

console.log(new Date() == new Date())

useArraySelection(grid, sel)

createCalendarContext({
  currentDate,
  view,
  navigate,
  grid,
  formatDate,
  selected: sel
})
</script>
