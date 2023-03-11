<template>
  <portal to="dropdown" v-if="isVisible">
    <div v-if="isVisible" class="absolute inset-0" @click="close()"></div>

    <div :ref="contentRef" class="shadow bg-white fixed top-0 left-0 d3" :style="dropdownRect">
      <FocusTrap>
        <div class="w-[400px] h-[500px] flex items-center justify-center">
          <pre>{{ dropdownRect }}</pre>
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

const { isVisible, contentRef, dropdownRect, close } = dropdown
</script>

<style>
.d3 {
  transform: translate3d(
      calc(var(--vuedin-dropdown-reset-x) * 1px),
      calc(var(--vuedin-dropdown-reset-y) * 1px),
      0
    )
    translate3d(20px, 0%, 0);
}
</style>
