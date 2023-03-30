<!-- AccordionContent.vue -->
<template>
  <div
    :id="`accordion-content-${id}`"
    :aria-labelledby="`accordion-button-${id}`"
    class="px-4 py-2"
    v-if="isVisible"
    :aria-hidden="!isVisible"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useDisclosureContext } from './useDisclosureContext'

const { isVisible, id } = useDisclosureContext()
</script>
