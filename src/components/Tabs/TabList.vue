<template>
  <div role="tablist" class="border-b">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useFocusCycle } from '@/components/FocusCycle'

useFocusCycle()
</script>
