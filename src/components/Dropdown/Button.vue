<template>
  <button
    type="button"
    ref="button"
    :id="`dropdown-button-${id}`"
    :aria-expanded="isVisible"
    aria-haspopup="true"
    @click="toggle"
    @keydown.down.prevent="open"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { useDropdownContext } from './use/useDropdownContext'

const { isVisible, id, open, toggle, button } = useDropdownContext()
</script>
