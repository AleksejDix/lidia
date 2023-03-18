<template>
  <div role="menu" aria-orientation="vertical">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useFocusCycle } from '@/components/FocusCycle'

useFocusCycle()
</script>
