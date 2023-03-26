<!-- First.vue -->
<template>
  <router-link
    v-if="currentPage > 1"
    :to="{ ...$route, query: { ...$route.query, page: 1 } }"
    aria-label="First Page"
    rel="first"
    class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
  >
    First
  </router-link>
</template>

<script lang="ts" setup>
import { usePaginationContext } from './usePaginationContext'
const { currentPage } = usePaginationContext()
</script>
