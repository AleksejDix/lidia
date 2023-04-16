<template>
  <td :class="{ border: isSelected(row) }">
    <input type="checkbox" v-model="selected" :value="row" />
  </td>
</template>

<script setup lang="ts">
import { useTableContext } from '../use'
const { selected, isSelected } = useTableContext()

const props = defineProps({
  row: {
    type: Object,
    required: true
  }
})
</script>
