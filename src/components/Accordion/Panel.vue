<template>
  <component :is="tag" class="bg-white shadow" ref="animate">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import type { PropType, VNodeTypes } from 'vue'
import { provide, inject, toRef } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { AccordionKey, PanelKey } from './symbols'

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

const accordion = inject(AccordionKey)

if (!accordion) {
  throw new Error(`Could not resolve ${accordion}`)
}

const { panels, create, update } = accordion

const id = uuidv4()

function toggle() {
  update(id, !panels[id])
}

create(id, props.open)

provide(PanelKey, {
  isVisible: toRef(panels, id),
  id,
  toggle
})
</script>
