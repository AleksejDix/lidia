<!-- Page.vue -->
<template>
  <router-link
    :to="{ ...$route, query: { ...$route.query, page: pageNumber } }"
    :aria-label="'Go to Page ' + pageNumber"
    :aria-current="pageNumber === currentPage ? 'page' : undefined"
    class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 inline-block"
    :class="{ 'bg-gray-100': pageNumber === currentPage }"
  >
    {{ pageNumber }}
  </router-link>
</template>

<script lang="ts" setup>
import { usePaginationContext } from './usePaginationContext'
defineProps({
  pageNumber: {
    type: Number,
    required: true
  }
})
const { currentPage } = usePaginationContext()
</script>
