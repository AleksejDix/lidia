<template>
  <button
    :id="`dropdown-button-${id}`"
    :aria-expanded="isVisible"
    @click="toggle"
    @keyup.down="open"
    class="border"
    ref="button"
  >
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
