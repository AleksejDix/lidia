<!-- ModalButton.vue -->
<template>
  <button ref="buttonRef" @click="modalStore.create(name)" aria-label="Open Modal">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useModalStore } from './useModalStore.js'

defineProps({
  name: {
    type: String,
    required: true
  }
})

const buttonRef = ref()

const modalStore = useModalStore()
</script>
