<template>
  <button
    :id="`dropdown-button-${id}`"
    :aria-expanded="isVisible"
    @click.stop="toggle"
    @keyup.down="open"
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

const { isVisible, id, open, toggle, button } = dropdown
</script>
