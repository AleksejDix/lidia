<template>
  <RouterView />
  <Notifications>
    <Notification class="text-red-900 border-red-900">
      <h3 class="text-sm text-red-500">You are the hero of the world</h3>
    </Notification>
    <Notification class="text-blue-900 border-blue-900">
      <h3 class="text-sm text-blue-500">Something went wrong try again</h3>
    </Notification>
    <Notification class="text-green-900 border-green-900">
      <h3 class="text-sm text-green-500">Something went wrong try again</h3>
    </Notification>
  </Notifications>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Notification, Notifications } from '@/components/Notification/'
</script>

<style>
:root {
  --accent-color: hotpink;
}
</style>
