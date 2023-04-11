<template>
  <div
    v-show="visible"
    :style="{ left: `${position.x}px`, top: `${position.y}px` }"
    class="fixed bg-black text-white p-2 rounded-sm text-sm"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useTooltipContext } from './useTooltipContext'

const { position, visible } = useTooltipContext()
</script>
