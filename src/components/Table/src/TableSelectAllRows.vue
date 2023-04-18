<template>
  <th>
    <Checkbox
      type="checkbox"
      :modelValue="selectionState"
      @change="onChange"
      :true-value="'all'"
      :false-value="'none'"
      :indeterminated-value="'some'"
    />
    <span></span>
  </th>
</template>

<script setup lang="ts">
import { useTableContext } from '../use'
import { Checkbox } from '@aleksejdix/checkbox/src'
const { selectAll, deselectAll, selectionState } = useTableContext()

function onChange() {
  switch (selectionState.value) {
    case 'all':
      deselectAll()
      break
    default:
      selectAll()
      break
  }
}
</script>
