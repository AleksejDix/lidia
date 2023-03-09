<template>
  <div v-if="isVisible" ref="content" class="shadow p-4 bg-white">
    <FocusTrap>
      <slot></slot>
    </FocusTrap>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { DropdownKey } from './symbols'
import { FocusTrap } from '@/components/FocusTrap'

const dropdown = inject(DropdownKey)

if (!dropdown) {
  throw new Error(`Could not resolve ${dropdown}`)
}

const { isVisible, close } = dropdown
</script>
