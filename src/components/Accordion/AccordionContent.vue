<!-- AccordionContent.vue -->
<template>
  <div
    :id="`accordion-content-${id}`"
    :aria-labelledby="`accordion-button-${id}`"
    class="AccordionContent"
    v-if="isVisible"
    :aria-hidden="!isVisible"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { PanelKey } from './symbols'
const panel = inject(PanelKey)

if (!panel) {
  throw new Error(`Could not resolve ${panel}`)
}

const { isVisible, id } = panel
</script>
