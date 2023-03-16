<template>
  <slot>
    <div class="border-2 p-4">
      <h1 class="font-bold">Vieport</h1>
      <div>width: {{ viewport }}</div>
    </div>
  </slot>
</template>

<script setup lang="ts">
import { useViewport } from './useViewport'
const viewport = useViewport()
</script>
