<template>
  <button
    type="button"
    :id="`accordion-button-${id}`"
    :aria-controls="`accordion-content-${id}`"
    :aria-expanded="isOpen"
    class="w-full flex items-center gap-2 text-left"
    @click="toggle"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useDisclosureContext } from './useDisclosureContext'
const { isOpen, toggle, id } = useDisclosureContext()
</script>
