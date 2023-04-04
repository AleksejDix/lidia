<!-- PageList.vue -->
<template>
  <ul class="flex -space-x-[2px]">
    <li v-for="pageNumber in visiblePageNumbers" :key="pageNumber">
      <slot
        v-bind="{
          pageNumber,
          currentPage
        }"
      >
        <Page :pageNumber="pageNumber"></Page>
      </slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import Page from './Page.vue'
import { usePaginationContext } from './usePaginationContext'
const { currentPage, visiblePageNumbers } = usePaginationContext()
</script>
