<!-- GoToPage.vue -->
<template>
  <form @submit.prevent="goToPage" class="go-to-page">
    <label for="go-to-page-input" class="sr-only">Go to page</label>
    <input
      id="go-to-page-input"
      type="number"
      min="1"
      :max="totalPages"
      v-model.number="inputPage"
      class="border border-gray-300 px-3 py-2 rounded"
      required
    />
    <button type="submit" class="ml-2 px-3 py-2 border border-gray-300 rounded">Go</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePaginationContext } from './usePaginationContext'

const { currentPage, totalPages } = usePaginationContext()
const inputPage = ref(currentPage.value)
const router = useRouter()

function goToPage() {
  if (inputPage.value >= 1 && inputPage.value <= totalPages.value) {
    router.push({
      ...router.currentRoute.value,
      query: { ...router.currentRoute.value.query, page: inputPage.value }
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
