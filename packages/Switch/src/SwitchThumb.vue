<!-- SwitchThumb.vue -->
<template>
  <div
    class="absolute w-[22px] h-[22px] border-2 border-white left-[2px] top-[2px] transition-all duration-300"
    :class="{ 'translate-x-6 bg-white text-blue-600': isActive }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      class="fill-current transition-opacity duration-300"
      :class="[isActive ? 'opacity-100' : 'opacity-0']"
      style="transform: ; msfilter: "
    >
      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
    </svg>
  </div>
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
