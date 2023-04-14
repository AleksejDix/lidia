<!-- Next.vue -->
<template>
  <router-link
    v-if="currentPage < totalPages"
    :to="{ ...$route, query: { ...$route.query, page: currentPage + 1 } }"
    aria-label="Next Page"
    rel="next"
    class="h-[40px] flex items-center border-2 border-white pl-[20px] pr-[10px] hover:bg-yellow-400 hover:text-blue-600"
  >
    <slot>Next</slot>
    <slot name="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current pointer-events-none"
      >
        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
      </svg>
    </slot>
  </router-link>
  <span
    v-else
    class="h-[40px] flex items-center border-2 border-white pl-[20px] pr-[10px] border-opacity-50"
  >
    <slot>Next</slot>
    <slot name="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current pointer-events-none"
      >
        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
      </svg>
    </slot>
  </span>
</template>

<script lang="ts" setup>
import { usePaginationContext } from './usePaginationContext'
const { currentPage, totalPages } = usePaginationContext()
</script>
