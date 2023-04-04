<!-- DisclosureIcon.vue -->
<template>
  <Button
    :id="`accordion-button-${id}`"
    :aria-controls="`accordion-content-${id}`"
    :aria-expanded="isOpen"
    class="w-full flex items-center gap-2 text-left"
    @click="toggle"
  >
    <template #before>
      <slot name="icon">
        <DisclosureIcon />
      </slot>
    </template>

    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@aleksejdix/button/src'
import { useDisclosureContext } from './useDisclosureContext'
import DisclosureIcon from './DisclosureIcon.vue'
const { isOpen, toggle, id } = useDisclosureContext()
</script>
