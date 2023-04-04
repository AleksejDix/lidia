<!-- ModalButton.vue -->
<template>
  <component :is="component" @click="modalStore.create(name)" aria-label="Open Modal">
    <template #before>
      <slot name="before"></slot>
    </template>
    <slot></slot>
    <template #after>
      <slot name="after"></slot>
    </template>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useModalStore } from './useModalStore.js'
import { Button, ButtonIcon } from '@aleksejdix/button/src'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  is: {
    type: String,
    required: false,
    default: 'Button'
  }
})

const component = computed(() => {
  switch (props.is) {
    case 'Button':
      return Button
    case 'ButtonIcon':
      return ButtonIcon
    default:
      throw new Error('You can only pass Button or IconButton to the is prop')
  }
})

const modalStore = useModalStore()
</script>
