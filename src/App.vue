<template>
  <RouterView />
  <NotificationsCenter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NotificationsCenter } from '@/components/NotificationsCenter'
</script>

<style>
:root {
  --accent-color: hotpink;
}
</style>
@/components/NotificationCenter
