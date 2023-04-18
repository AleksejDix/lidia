<!-- TableSelectRow.vue -->
<template>
  <td
    @keydown.prevent.shift.up="selectPrev"
    @keydown.prevent.shift.down="selectNext"
    tabindex="0"
    class="px-4"
  >
    <input
      type="checkbox"
      v-model="selected"
      :value="row"
      @click="shiftSelect($event, row, index)"
    />
  </td>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { useTableContext } from '../use'
const { selected, isSelected, shiftSelect, selectNext, selectPrev } = useTableContext()

const props = defineProps({
  row: {
    type: Object as PropType<unknown>,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>
