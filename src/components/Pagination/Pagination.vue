<!-- Pagination.vue -->
<template>
  <nav class="flex" aria-label="Pagination Navigation">
    <slot></slot>
  </nav>
</template>

<script setup lang="ts">
import { usePagination } from './usePagination'
import { createPaginationContext } from './usePaginationContext'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  visiblePages: {
    type: Number,
    default: 5
  }
})

const pagination = usePagination(props.totalItems, props.itemsPerPage)
createPaginationContext(pagination)
</script>
