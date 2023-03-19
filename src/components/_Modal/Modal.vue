<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-content">
      <button @click="close">Close</button>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'

const isOpen = ref(false)

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

provide('modal', { open, close })
</script>
