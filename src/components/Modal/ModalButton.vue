<!-- ModalButton.vue -->
<template>
  <button @click="modalStore.create(name)" aria-label="Open Modal">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { useModalStore } from './useModalStore.js'

defineProps({
  name: {
    type: String,
    required: true
  }
})

const modalStore = useModalStore()
</script>
