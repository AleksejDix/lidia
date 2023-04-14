<!-- TableBody.vue -->
<template>
  <tbody>
    <tr
      v-for="item in data"
      :key="item.id"
      class="odd:bg-black odd:bg-opacity-25 hover:bg-blue-800 h-[50px]"
    >
      <td
        @keydown.prevent="handleKeydown"
        v-for="column in columns"
        :key="column.key"
        tabindex="0"
        class="text-left border-2 border-white px-2 focus:border-opacity-100 transition border-opacity-50 focus:outline-none"
      >
        <slot :name="`td-${column.key}`" :item="item">{{ item[column.key] }}</slot>
      </td>
      <td
        class="text-left border-2 border-white px-2 focus:border-opacity-100 transition border-opacity-50 focus:outline-none"
      >
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
