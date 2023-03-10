<template>
  <button
    :id="`dropdown-button-${id}`"
    :aria-expanded="isVisible"
    @click="toggle"
    @keyup.down="open"
    ref="button"
  >
    <div v-if="isVisible" class="fixed inset-0 bg-red-500" @click.stop="close"></div>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import { DropdownKey } from './symbols'
const dropdown = inject(DropdownKey)

if (!dropdown) {
  throw new Error(`Could not resolve ${dropdown}`)
}

const { isVisible, id, open, toggle, button, close } = dropdown
</script>
