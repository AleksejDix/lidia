<!-- TableBody.vue -->
<template>
  <tbody>
    <tr v-for="item in data" :key="item.id" class="focus-within:border-white border">
      <td
        @keydown.prevent="handleKeydown"
        v-for="column in columns"
        :key="column.key"
        tabindex="0"
        class="text-left border-2 border-transparent pr-2"
      >
        <slot :name="column.key" :item="item">{{ item[column.key] }}</slot>
      </td>
      <td class="text-left border-2 border-transparent px-2">
        <!-- Add this cell -->
        <slot name="actions" :item="item"> </slot>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts" setup>
import { useTableContext } from '../use/useTableContext'

const { data, columns, handleKeydown } = useTableContext()
</script>
