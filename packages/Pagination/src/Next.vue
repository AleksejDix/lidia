<!-- Next.vue -->
<template>
  <router-link
    v-if="currentPage < totalPages"
    :to="{ ...$route, query: { ...$route.query, page: currentPage + 1 } }"
    aria-label="Next Page"
    rel="next"
    class="border border-white shadow pl-4 pr-2 py-2 bg-yellow-400 text-yellow-900 rounded inline-flex items-center min-h-[40px]"
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
    class="border border-white shadow inline-flex items-center min-h-[40px] pl-4 pr-2 py-2 bg-gray-100 text-gray-400 rounded cursor-not-allowed"
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
