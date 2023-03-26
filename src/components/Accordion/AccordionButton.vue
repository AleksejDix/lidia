<!-- AccordionButton.vue -->
<template>
  <button
    :id="`accordion-button-${id}`"
    :aria-controls="`accordion-content-${id}`"
    :aria-expanded="isVisible"
    :ref="focus.create"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.home.prevent="focus.first"
    @keydown.end.prevent="focus.last"
    @keydown="focus.focusByFirstLetter"
    class="AccordionButton px-2 py-1 w-full text-left focus:bg-green-800 focus:outline-none flex items-center gap-2"
    @click="toggle"
  >
    <span>
      <slot></slot>
    </span>

    <slot name="iconOpen" v-if="isVisible">
      <div class="rounded flex items-center justify-center w-4 h-4 border">+</div>
    </slot>
    <slot name="iconClosed" v-if="!isVisible">
      <div class="rounded flex items-center justify-center w-4 h-4 border">-</div>
    </slot>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { PanelKey } from './symbols'
import { useFocusCycleItem } from '@/components/FocusCycle'
const focus = useFocusCycleItem()

const panel = inject(PanelKey)

if (!panel) {
  throw new Error(`Could not resolve ${panel}`)
}

const { toggle, isVisible, id } = panel
</script>
