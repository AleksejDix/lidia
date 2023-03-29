<!-- Menu.vue -->
<template>
  <div role="menu" aria-orientation="vertical" class="border rounded p-1">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useFocusCycle } from '@/components/Focus'

useFocusCycle()
</script>
