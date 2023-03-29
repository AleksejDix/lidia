<!-- ModalButton.vue -->
<template>
  <Button ref="buttonRef" @click="modalStore.create(name)" aria-label="Open Modal">
    <slot></slot>
  </Button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '@/components/Button'
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
