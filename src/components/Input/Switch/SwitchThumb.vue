<!-- SwitchThumb.vue -->
<template>
  <div
    class="absolute w-6 h-6 bg-white rounded-full left-0 top-0 transition-all duration-300"
    :class="{ 'translate-x-6': isActive }"
  ></div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { SwitchKey } from './symbols'

const SwitchInjector = inject(SwitchKey)

if (!SwitchInjector) {
  throw new Error(`Could not resolve ${SwitchInjector}`)
}

const { isActive } = SwitchInjector
</script>
