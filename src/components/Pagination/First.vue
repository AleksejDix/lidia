<!-- First.vue -->
<template>
  <router-link
    v-if="currentPage > 1"
    :to="{ ...$route, query: { ...$route.query, page: 1 } }"
    aria-label="First Page"
    rel="first"
    class="pl-2 pr-4 py-2 bg-yellow-400 text-yellow-900 rounded min-h-[40px] flex items-center border border-white shadow"
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
    class="border border-white shadow pl-2 pr-4 py-2 bg-gray-100 text-gray-400 min-h-[40px] rounded cursor-not-allowed inline-flex items-center"
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
