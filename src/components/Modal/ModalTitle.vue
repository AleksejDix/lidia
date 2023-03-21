<!-- Title.vue -->
<template>
  <h2 :id="modal.id">
    <slot>Default Title</slot>
  </h2>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { ModalKey } from './symbols'
const modal = inject(ModalKey)

if (!modal) {
  throw new Error(`Could not resolve ${modal}`)
}
</script>
