<!-- Accordion.vue -->
<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useFocusCycle } from '@/components/Focus'
import { provideAccordionContext } from './useAccordionContext'
useFocusCycle()

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
    required: false
  }
})

const panels = reactive<Record<string, boolean>>({})

function update(id: string, state: boolean) {
  if (!props.multiple) {
    Object.keys(panels).forEach((key) => {
      panels[key] = false
    })
  }
  panels[id] = state
}

function create(id: string, state: boolean) {
  if (panels[id]) return
  panels[id] = state
}

provideAccordionContext({
  panels,
  create,
  update
})
</script>
