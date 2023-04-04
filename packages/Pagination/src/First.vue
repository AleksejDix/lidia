<!-- First.vue -->
<template>
  <router-link
    v-if="currentPage > 1"
    :to="{ ...$route, query: { ...$route.query, page: 1 } }"
    aria-label="First Page"
    rel="first"
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
        <path
          d="m16.293 17.707 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L10.586 12zM7 6h2v12H7z"
        ></path>
      </svg>
    </slot>
    <slot>First</slot>
  </router-link>
  <span
    v-else
    class="border-2 border-white h-[40px] cursor-not-allowed inline-flex items-center pl-[10px] pr-[20px] opacity-60"
  >
    <slot name="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current pointer-events-none"
      >
        <path
          d="m16.293 17.707 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L10.586 12zM7 6h2v12H7z"
        ></path>
      </svg>
    </slot>
    <slot>First</slot>
  </span>
</template>

<script lang="ts" setup>
import { usePaginationContext } from './usePaginationContext'
const { currentPage } = usePaginationContext()
</script>
