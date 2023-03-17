<template>
  <button
    ref="button"
    :id="`dropdown-button-${id}`"
    :aria-expanded="isVisible"
    aria-haspopup="true"
    @click="toggle"
    @keydown.down.prevent="open"
    class="border border-gray-700 bg-gray-800 rounded shadow px-3 font-medium text-xs leading-normal focus:bg-pink-900"
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
