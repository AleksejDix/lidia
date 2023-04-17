<!-- ModalButton.vue -->
<template>
  <button @click="modalStore.create(name)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { useModalStore } from './useModalStore.js'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const modalStore = useModalStore()
</script>
