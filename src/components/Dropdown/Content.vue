<template>
  <div class="shadow p-4" v-if="isVisible" ref="content" v-on-click-outside="close">
    <FocusTrap>
      <slot></slot>
    </FocusTrap>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import { DropdownKey } from './symbols'
import { FocusTrap } from '@/components/FocusTrap'

const dropdown = inject(DropdownKey)

if (!dropdown) {
  throw new Error(`Could not resolve ${dropdown}`)
}

const { isVisible, close } = dropdown
</script>
