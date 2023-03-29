<!-- Page.vue -->
<template>
  <router-link
    :to="{ ...$route, query: { ...$route.query, page: pageNumber } }"
    :aria-label="'Go to Page ' + pageNumber"
    :aria-current="pageNumber === currentPage ? 'page' : undefined"
    class="px-4 py-2 inline-block min-h-[40px] min-w-[40px]"
    :class="{
      'bg-green-400 text-green-900 rounded border border-white shadow ': pageNumber === currentPage
    }"
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
