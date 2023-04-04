<!-- GoToPage.vue -->
<template>
  <form @submit.prevent="goToPage" class="go-to-page">
    <label for="go-to-page-input" class="sr-only">Go to page</label>
    <input
      id="go-to-page-input"
      type="number"
      min="1"
      :max="totalPages"
      :value="currentPage"
      @change="goToPage"
      class="border border-gray-300 px-3 py-2"
      required
    />
    <button type="submit" class="ml-2 px-3 py-2 border border-gray-300">Go</button>
  </form>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { usePaginationContext } from './usePaginationContext'

const { currentPage, totalPages } = usePaginationContext()
const router = useRouter()
const route = useRoute()

function goToPage(event: Event) {
  if (currentPage.value >= 1 && currentPage.value <= totalPages.value) {
    router.push({
      ...route,
      query: { ...route.query, page: (event.target as HTMLInputElement).value }
    })
  }
}
</script>

<style>
.go-to-page {
  display: flex;
  align-items: center;
}
</style>
