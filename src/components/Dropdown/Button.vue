<template>
  <Button
    ref="button"
    :id="`dropdown-button-${id}`"
    :aria-expanded="isVisible"
    aria-haspopup="true"
    @click="toggle"
    @keydown.down.prevent="open"
    class="rounded px-3 py-2 bg-yellow-400 inline-block box-border"
  >
    <slot></slot>
  </Button>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { Button } from '@/components/Button'

import { DropdownKey } from './symbols'
const dropdown = inject(DropdownKey)

if (!dropdown) {
  throw new Error(`Could not resolve ${dropdown}`)
}

const { isVisible, id, open, toggle, button } = dropdown
</script>
