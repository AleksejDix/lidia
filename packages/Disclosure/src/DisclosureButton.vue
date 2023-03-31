<!-- DisclosureIcon.vue -->
<template>
  <Button
    :id="`accordion-button-${id}`"
    :aria-controls="`accordion-content-${id}`"
    :aria-expanded="isOpen"
    :ref="connectFocus"
    @keydown.up.prevent="focus?.prev"
    @keydown.down.prevent="focus?.next"
    @keydown.home.prevent="focus?.first"
    @keydown.end.prevent="focus?.last"
    @keydown="focus?.focusByFirstLetter"
    class="w-full flex items-center gap-2 text-left"
    @click="toggle"
  >
    <span class="grow pointer-events-none">
      <slot></slot>
    </span>

    <slot name="icon">
      <DisclosureIcon />
    </slot>
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@aleksejdix/button'
import { tryFocusCycleItem } from '@aleksejdix/Focus'
import { useDisclosureContext } from './useDisclosureContext'
import DisclosureIcon from './DisclosureIcon.vue'
const { isOpen, toggle, id, isAccordion } = useDisclosureContext()

const focus = tryFocusCycleItem()

const connectFocus = (element: any) => {
  if (isAccordion) {
    focus?.create(element)
  }
}
</script>
