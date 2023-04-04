<!-- Menu.vue -->
<template>
  <div role="menu" aria-orientation="vertical" class="rounded p-1">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useFocusCycle } from '@aleksejdix/focus/src'

useFocusCycle()
</script>
