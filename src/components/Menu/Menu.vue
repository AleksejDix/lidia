<!-- Menu.vue -->
<template>
  <div role="menu" aria-orientation="vertical" class="rounded p-1">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useFocusCycle } from '@lidia/focus'

useFocusCycle()
</script>
