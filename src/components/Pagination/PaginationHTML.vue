<template>
  <nav class="flex" aria-label="Pagination Navigation">
    <router-link
      v-if="currentPage > 1"
      :to="{ ...$route, query: { ...$route.query, page: 1 } }"
      aria-label="First Page"
      rel="first"
      class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
    >
      First
    </router-link>
    <router-link
      v-if="currentPage > 1"
      :to="{ ...$route, query: { ...$route.query, page: currentPage - 1 } }"
      aria-label="Previous Page"
      rel="prev"
      class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
    >
      Prev
    </router-link>
    <router-link
      v-for="pageNumber in visiblePageNumbers"
      :key="pageNumber"
      :to="{ ...$route, query: { ...$route.query, page: pageNumber } }"
      :aria-label="'Go to Page ' + pageNumber"
      :aria-current="pageNumber === currentPage ? 'page' : undefined"
      class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
      :class="{ 'bg-gray-100': pageNumber === currentPage }"
    >
      {{ pageNumber }}
    </router-link>
    <router-link
      v-if="currentPage < totalPages"
      :to="{ ...$route, query: { ...$route.query, page: currentPage + 1 } }"
      aria-label="Next Page"
      rel="next"
      class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
    >
      Next
    </router-link>
    <router-link
      v-if="currentPage < totalPages"
      :to="{ ...$route, query: { ...$route.query, page: totalPages } }"
      aria-label="Last Page"
      rel="last"
      class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
    >
      Last
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

// Props
const props = defineProps<{
  totalItems: number
  itemsPerPage: number
  visiblePages?: number
}>()

// Pagination logic
const { totalItems, itemsPerPage, visiblePages = 5 } = props
const totalPages = computed(() => Math.ceil(totalItems / itemsPerPage))

const route = useRoute()

const currentPage = ref(parseInt(route.query.page as string) || 1)

watchEffect(() => {
  currentPage.value = parseInt(route.query.page as string) || 1
})

const visiblePageNumbers = computed(() => {
  let start = Math.max(currentPage.value - Math.floor(visiblePages / 2), 1)
  let end = Math.min(start + visiblePages - 1, totalPages.value)

  if (end === totalPages.value) {
    start = Math.max(end - visiblePages + 1, 1)
  }

  return Array.from({ length: end - start + 1 }, (_, i) => i + start)
})
</script>
