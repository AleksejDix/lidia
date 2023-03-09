<template>
  <button
    :id="`accordion-button-${id}`"
    :aria-controls="`accordion-content-${id}`"
    :aria-expanded="value"
    class="w-full px-6 py-4 text-xl font-bold bg-black text-white text-left"
    @click="toggle"
  >
    <span>
      <slot></slot>
    </span>
    <span>
      <slot name="iconOpen"></slot>
      <slot name="iconClosed"></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { PanelKey } from './symbols'
const panel = inject(PanelKey)

if (!panel) {
  throw new Error(`Could not resolve ${panel}`)
}

const { toggle, value, id } = panel
</script>
