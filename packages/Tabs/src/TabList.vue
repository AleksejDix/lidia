<template>
  <div role="tablist" class="flex flex-row justify-start">
    <slot />
    <div class="grow border-b-2 border-white"></div>
  </div>
</template>

<script setup lang="ts">
import { useFocusCycle } from '@aleksejdix/focus/src'

useFocusCycle()
</script>
