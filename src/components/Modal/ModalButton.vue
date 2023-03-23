<!-- ModalButton.vue -->
<template>
  <button
    ref="buttonRef"
    @click="modalStore.create(name)"
    aria-label="Open Modal"
    class="p-2 bg-blue-600 text-white rounded hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
  >
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
