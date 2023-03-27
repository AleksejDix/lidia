<template>
  <div v-if="isVisible" class="fixed inset-0" @click="close()"></div>
  <Teleport to="body">
    <div
      v-if="isVisible"
      :ref="contentRef"
      class="fixed top-0 left-0 d3 overflow-hidden"
      :style="dropdownRect"
    >
      <Surface>
        <FocusTrap>
          <div class="flex items-center justify-center">
            <slot></slot>
          </div>
        </FocusTrap>
      </Surface>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { DropdownKey } from './symbols'
import { FocusTrap } from '@/components/Focus'
import { Surface } from '@/components/Surface'

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
