<!-- Page.vue -->
<template>
  <router-link
    :to="{ ...$route, query: { ...$route.query, page: pageNumber } }"
    :aria-label="'Go to Page ' + pageNumber"
    :aria-current="pageNumber === currentPage ? 'page' : undefined"
    class="border-2 border-white inline-block h-[40px] min-w-[40px] leading-[36px] text-center text-16"
    :class="{
      'text-blue-600 bg-yellow-400': pageNumber === currentPage
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
