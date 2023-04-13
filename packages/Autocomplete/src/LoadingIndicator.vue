<!-- LoadingIndicator.vue -->
<template>
  <div class="h-6 w-6">
    <transition name="fade" mode="out-in">
      <div v-show="isLoading">...</div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from './../use/useAutocompleteContext'

const { isLoading } = useAutocompleteContext()
</script>

<style scoped>
.loading-indicator {
  /* Add your custom styles for the loading indicator here */
}
</style>
