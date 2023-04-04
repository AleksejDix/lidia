<template>
  <Teleport to="body">
    <div v-if="isVisible" class="fixed inset-0" @click="close()"></div>
    <div
      v-if="isVisible"
      :ref="contentRef"
      class="absolute top-0 left-0 d3 overflow-hidden border border-gray-200 shadow-md bg-white rounded"
      :style="dropdownRect"
      v-bind="$attrs"
    >
      <FocusTrap>
        <slot></slot>
      </FocusTrap>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { DropdownKey } from './symbols'
import { FocusTrap } from '@aleksejdix/focus/src'

const dropdown = inject(DropdownKey)

if (!dropdown) {
  throw new Error(`Could not resolve ${dropdown}`)
}

const { isVisible, contentRef, dropdownRect, close } = dropdown
</script>

<style>
.d3 {
  /* prettier-ignore  */
  transform: 
    translate3d(var(--vuedin-dropdown-reset-x), var(--vuedin-dropdown-reset-y), 0)
    translate3d(var(--vuedin-translate-x), var(--vuedin-translate-y), 0);
}
</style>
