<template>
  <button
    :id="`dropdown-button-${id}`"
    :aria-expanded="isVisible"
    @click="toggle"
    @keyup.down="open"
    class="w-[200px] border bg-red-200 rounded shadow py-2 px-3 text-red-600 font-bold uppercase font-xs border-red-600"
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
