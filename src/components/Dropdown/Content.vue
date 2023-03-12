<template>
  <portal to="dropdown" v-if="isVisible">
    <div v-if="isVisible" class="absolute inset-0" @click="close()"></div>
    <div :ref="contentRef" class="shadow bg-white fixed top-0 left-0 d3" :style="dropdownRect">
      <FocusTrap>
        <div class="flex items-center justify-center">
          <slot></slot>
        </div>
      </FocusTrap>
    </div>
  </portal>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { DropdownKey } from './symbols'
import { FocusTrap } from '@/components/FocusTrap'

const dropdown = inject(DropdownKey)

if (!dropdown) {
  throw new Error(`Could not resolve ${dropdown}`)
}

const { isVisible, contentRef, dropdownRect, close, collisionDetectionRect } = dropdown
</script>

<style>
.d3 {
  transform: translate3d(var(--vuedin-dropdown-reset-x), var(--vuedin-dropdown-reset-y), 0)
    translate3d(var(--vuedin-translate-x), var(--vuedin-translate-y), 0);
}
</style>
