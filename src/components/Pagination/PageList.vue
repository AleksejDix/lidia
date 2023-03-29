<!-- PageList.vue -->
<template>
  <ul class="flex gap-1">
    <li v-for="pageNumber in visiblePageNumbers" :key="pageNumber">
      <slot
        v-bind="{
          pageNumber,
          currentPage
        }"
      >
        <PaginationPage :pageNumber="pageNumber"></PaginationPage>
      </slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { PaginationPage } from '.'
import { usePaginationContext } from './usePaginationContext'
const { currentPage, visiblePageNumbers } = usePaginationContext()
</script>
