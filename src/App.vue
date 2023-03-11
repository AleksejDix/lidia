<template>
  <RouterView />

  <portal-target name="dropdown"></portal-target>
  <Focus />
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
  height: 300000px;
}
</style>
