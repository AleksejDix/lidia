<!-- Accordion.vue -->
<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFocusCycle } from '@lidia/focus'
import { provideAccordionContext } from './useAccordionContext'

useFocusCycle()

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
    required: false
  }
})

const isMultiple = ref(props.multiple)

const panels = ref<any[]>([])

const create = (payload: any) => {
  panels.value.push(payload)
}

const destroy = (id: string) => {
  const index = panels.value.findIndex((panel) => panel.id === id)
  if (index > -1) {
    panels.value.splice(index, 1)
  }
}

provideAccordionContext({
  isMultiple,
  panels,
  create,
  destroy
})
</script>
