<template>
  <Breadcrumbs />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Breadcrumbs } from './components/Breadcrumbs'
</script>

<style>
:root {
  --accent-color: hotpink;
}
</style>
