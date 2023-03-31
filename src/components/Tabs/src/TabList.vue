<template>
  <div role="tablist">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useFocusCycle } from '@aleksejdix/focus'

useFocusCycle()
</script>
