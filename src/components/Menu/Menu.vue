<template>
  <div role="menu">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useFocusCycle } from '@/components/FocusCycle'

useFocusCycle()
</script>
