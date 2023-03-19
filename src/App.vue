<template>
  <Breadcrumbs />
  <RouterView />
  <Pagination :items-per-page="10" :total-items="100" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Breadcrumbs } from './components/Breadcrumbs'
import { Pagination } from './components/Pagination'
</script>

<style>
:root {
  --accent-color: hotpink;
}
</style>
