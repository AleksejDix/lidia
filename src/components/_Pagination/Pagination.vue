<template>
  <div class="pagination">
    <button @click="previous" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="next" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentPage = ref(1)
const totalPages = ref(10)

const next = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const previous = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>
