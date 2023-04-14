<!-- Prev.vue -->
<template>
  <router-link
    v-if="currentPage > 1"
    :to="{ ...$route, query: { ...$route.query, page: currentPage - 1 } }"
    aria-label="Previous Page"
    rel="prev"
    class="h-[40px] flex items-center border-2 border-white pl-[10px] pr-[20px]"
  >
    <slot name="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current pointer-events-none"
      >
        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
      </svg>
    </slot>
    <slot>Prev</slot>
  </router-link>
  <span v-else class="h-[40px] flex items-center border-2 border-white pl-[10px] pr-[20px]">
    <slot name="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current pointer-events-none"
      >
        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
      </svg>
    </slot>
    <slot>Prev</slot>
  </span>
</template>

<script lang="ts" setup>
import { usePaginationContext } from './usePaginationContext'
const { currentPage } = usePaginationContext()
</script>
