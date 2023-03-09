<template>
  <div class="container">
    <RouterView />
    <Focus />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Focus } from '@/components/Focus'
</script>

<style>
:root {
  --accent-color: hotpink;
}
body {
  overflow-y: scroll;
}
</style>
