<template>
  <td
    :class="{ border: isSelected(row) }"
    @keydown.prevent.shift.up="selectPrev"
    @keydown.prevent.shift.down="selectNext"
    tabindex="0"
    class="focus:bg-red-100 px-2"
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
import { useTableContext } from '../use'
const { selected, isSelected, shiftSelect, selectNext, selectPrev } = useTableContext()

const props = defineProps({
  row: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>
