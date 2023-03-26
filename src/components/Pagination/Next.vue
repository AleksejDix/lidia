<!-- Next.vue -->
<template>
  <router-link
    v-if="currentPage < totalPages"
    :to="{ ...$route, query: { ...$route.query, page: currentPage + 1 } }"
    aria-label="Next Page"
    rel="next"
    class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
  >
    Next
  </router-link>
</template>

<script lang="ts" setup>
import { usePaginationContext } from './usePaginationContext'
const { currentPage, totalPages } = usePaginationContext()
</script>
