<template>
  <button
    :aria-controls="`content-${id}`"
    :aria-expanded="value"
    :id="`accordion-control-${id}`"
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
const { toggle, value, id } = inject('panel')
</script>
