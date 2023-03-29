<template>
  <div role="tablist">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useFocusCycle } from '@/components/Focus'

useFocusCycle()
</script>
