<template>
  <tr v-bind="$attrs">
    <TableSelectRow
      class="border px-2 focus:bg-red-100"
      :row="row"
      :index="index"
      tabindex="0"
      @keydown.prevent="handleKeydown"
    />
    <td
      v-for="(column, index) in columns"
      :key="column.key"
      tabindex="0"
      @keydown.prevent="handleKeydown"
      class="text-left border px-2 focus:bg-green-900"
    >
      <div v-if="index === 0">
        <span @click="toggleChildren" :style="{ 'padding-left': depth * 10 + 'px' }">
          <slot :name="column.key" :row="row">{{ row[column.key] }}</slot></span
        >
      </div>
      <div v-else>
        <slot :name="column.key" :row="row">{{ row[column.key] }}</slot>
      </div>
    </td>
    <td class="text-left px-4" tabindex="0" @keydown.prevent="handleKeydown">
      <!-- Add this cell -->
      <slot name="actions" :row="row"> </slot>
    </td>
  </tr>
  <template v-if="showChildren">
    <TableRow
      v-for="child in row.children"
      :index="index"
      :key="child.id"
      :row="child"
      :depth="depth + 1"
    >
      <template v-slot:[slotname]="props" v-for="slotname in Object.keys(child)">
        <slot :name="slotname" v-bind="props"></slot>
      </template>
      <template v-slot:actions="props">
        <slot name="actions" v-bind="props"></slot>
      </template>
    </TableRow>
  </template>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableSelectRow } from '.'
import { useTableContext } from '../use'
const { columns, handleKeydown } = useTableContext()

const props = defineProps({
  row: Object,
  depth: {
    type: Number,
    default: 0
  },
  index: Number
})

const showChildren = ref(false)
const toggleChildren = () => {
  showChildren.value = !showChildren.value
}
</script>
