<!-- AccordionButton.vue -->
<template>
  <Button
    :id="`accordion-button-${id}`"
    :aria-controls="`accordion-content-${id}`"
    :aria-expanded="isVisible"
    :ref="focus.create"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.home.prevent="focus.first"
    @keydown.end.prevent="focus.last"
    @keydown="focus.focusByFirstLetter"
    class="w-full flex items-center gap-2"
    @click="toggle"
  >
    <span class="grow pointer-events-none">
      <slot></slot>
    </span>

    <slot name="icon">
      <AccordionIcon />
    </slot>
  </Button>
</template>

<script setup lang="ts">
import { useFocusCycleItem } from '@/components/Focus'
import { Button } from '@/components/Button'
import { AccordionIcon } from '@/components/Accordion'
import { useDisclosureContext } from './useDisclosureContext'
const focus = useFocusCycleItem()

const { isVisible, toggle, id } = useDisclosureContext()
</script>
