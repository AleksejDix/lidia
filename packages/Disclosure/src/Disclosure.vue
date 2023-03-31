<!-- Disclosure.vue -->
<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import type { PropType, VNodeTypes } from 'vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { provideDisclosureContext } from './useDisclosureContext'
import { tryUseAccordionContext } from '@aleksejdix/accordion'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
    required: false
  },
  tag: {
    type: [String, Object] as PropType<VNodeTypes>,
    default: 'div'
  }
})

const accordion = tryUseAccordionContext()

const isAccordion = ref(!!accordion)

const id = uuidv4()

const isOpen = ref(props.open)

function toggle() {
  if (accordion && accordion.isMultiple.value) {
    accordion.panels.value.forEach((panel) => {
      panel.isOpen = id === panel.id
    })
    return
  }
  isOpen.value = !isOpen.value
}

provideDisclosureContext({
  isOpen,
  id,
  toggle,
  isAccordion
})

onMounted(() => {
  if (accordion && accordion.isMultiple.value) {
    accordion.create({ id, isOpen, toggle, isAccordion })
  }
})

onUnmounted(() => {
  if (accordion && accordion.isMultiple.value) {
    accordion.destroy(id)
  }
})
</script>
