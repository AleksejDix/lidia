<!-- Prev.vue -->
<template>
  <router-link
    v-if="currentPage > 1"
    :to="{ ...$route, query: { ...$route.query, page: currentPage - 1 } }"
    aria-label="Previous Page"
    rel="prev"
    class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
  >
    Prev
  </router-link>
</template>

<script lang="ts" setup>
import { usePaginationContext } from './usePaginationContext'
const { currentPage } = usePaginationContext()
</script>
