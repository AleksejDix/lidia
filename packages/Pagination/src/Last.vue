<!-- Last.vue -->
<template>
  <router-link
    v-if="currentPage < totalPages"
    :to="{ ...$route, query: { ...$route.query, page: totalPages } }"
    aria-label="Last Page"
    rel="last"
    class="border border-white shadow pl-4 pr-2 py-2 bg-yellow-400 rounded inline-flex items-center min-h-[40px] font-medium text-yellow-900"
  >
    <slot>Last</slot>
    <slot name="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current pointer-events-none"
      >
        <path
          d="M7.707 17.707 13.414 12 7.707 6.293 6.293 7.707 10.586 12l-4.293 4.293zM15 6h2v12h-2z"
        ></path>
      </svg>
    </slot>
  </router-link>
  <span
    v-else
    class="border border-white shadow inline-flex items-center min-h-[40px] pl-4 pr-2 py-2 bg-gray-100 text-gray-400 rounded cursor-not-allowed"
  >
    <slot>Last</slot>
    <slot name="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current pointer-events-none"
      >
        <path
          d="M7.707 17.707 13.414 12 7.707 6.293 6.293 7.707 10.586 12l-4.293 4.293zM15 6h2v12h-2z"
        ></path>
      </svg>
    </slot>
  </span>
</template>

<script lang="ts" setup>
import { usePaginationContext } from './usePaginationContext'
const { currentPage, totalPages } = usePaginationContext()
</script>
