<!-- ModalCloseButton.vue -->
<template>
  <button @click="modal.close">
    <slot>close</slot>
  </button>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { ModalKey } from './symbols'

const modal = inject(ModalKey)

if (!modal) {
  throw new Error(`Could not resolve ${modal}`)
}
</script>
