<template>
  <button
    :id="`accordion-button-${id}`"
    :aria-controls="`accordion-content-${id}`"
    :aria-expanded="isVisible"
    :ref="focus.create"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    class="w-full px-6 py-4 text-xl font-bold bg-black text-white text-left focus:bg-pink-800 focus:outline-none"
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
import { useFocusCycleItem } from '@/components/FocusCycle'
const focus = useFocusCycleItem()

const panel = inject(PanelKey)

if (!panel) {
  throw new Error(`Could not resolve ${panel}`)
}

const { toggle, isVisible, id } = panel
</script>
