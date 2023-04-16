<!-- TableBody.vue -->
<template>
  <tbody>
    <tr v-for="row in data" :key="row.id">
      <TableSelectRow :row="row" />
      <td
        @keydown.prevent="handleKeydown"
        v-for="column in columns"
        :key="column.key"
        tabindex="0"
        class="text-left px-4 py-[12.5px]"
      >
        <slot :name="column.key" :item="row">{{ row[column.key] }}</slot>
      </td>
      <td class="text-left px-4">
        <!-- Add this cell -->
        <slot name="actions" :item="row"> </slot>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts" setup>
import { useTableContext } from '../use/'
import { TableSelectRow } from '.'

const { data, columns, handleKeydown } = useTableContext()
</script>
