<template>
  <RouterView />
  <Notification />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Notification } from '@/components/Notification/'
</script>

<style>
:root {
  --accent-color: hotpink;
}
</style>
