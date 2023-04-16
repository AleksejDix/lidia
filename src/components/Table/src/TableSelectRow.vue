<template>
  <td :class="{ border: isSelected(row) }">
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
const { selected, isSelected, shiftSelect } = useTableContext()

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
