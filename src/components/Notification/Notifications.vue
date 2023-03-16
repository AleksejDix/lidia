<template>
  <div class="fixed bottom-0 right-0 p-2 space-y-1">
    {{ list }}
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useNotificationsStore } from '@/components/Notification'
const { list, hasSome, create, destroy } = useNotificationsStore()
</script>
