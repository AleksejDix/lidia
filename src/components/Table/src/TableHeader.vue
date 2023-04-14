<!-- TableHeader.vue -->
<template>
  <thead>
    <tr class="h-[50px] uppercase text-xs text-white">
      <th
        class="focus:outline-none text-left pr-2"
        v-for="column in columns"
        :key="column.key"
        scope="col"
        tabindex="0"
        @click.prevent="sort(column.key)"
        @keydown.prevent="handleKeydown"
      >
        <slot :name="`th-${column.key}`">
          <div class="flex gap-2">
            {{ column.label }}
            <svg
              v-if="direction(column.key) === 'asc'"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path d="M6 4h12v2H6zm5 4v6H6l6 6 6-6h-5V8z"></path>
            </svg>
            <svg
              v-else-if="direction(column.key) === 'desc'"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path d="M6 18h12v2H6zm6-14-6 6h5v6h2v-6h5z"></path>
            </svg>
          </div>
        </slot>
      </th>
      <th class="text-left p-2" scope="col">
        <span class="sr-only">Actions</span>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts" setup>
import { useTableContext } from '../use/useTableContext'

const { columns, handleKeydown, sorting } = useTableContext()

const sort = (column: string) => {
  const index = sorting.value.findIndex((col) => col.key === column)

  if (index === -1) {
    sorting.value.push({ key: column, direction: 'asc' })
  } else if (sorting.value[index].direction === 'asc') {
    sorting.value[index].direction = 'desc'
  } else {
    sorting.value.splice(index, 1)
  }
}

const direction = (key: string) => {
  console.log(sorting.value, key)
  return sorting.value.find((x) => x.key === key)?.direction
}
</script>
