<!-- Page.vue -->
<template>
  <span class="inline-block px-4 py-2">
    {{ currentPage }}
  </span>
</template>

<script lang="ts" setup>
import { usePaginationContext } from './usePaginationContext'

const { currentPage } = usePaginationContext()
</script>
