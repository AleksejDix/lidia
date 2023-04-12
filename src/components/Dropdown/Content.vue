<template>
  <Teleport to="body">
    <div v-if="isVisible" class="fixed inset-0" @click="close()"></div>
    <div
      v-if="isVisible"
      :ref="contentRef"
      class="absolute top-0 left-0 d3 max-h-[300px] overflow-hidden bg-blue-600 shadow border-2 white"
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
import { FocusTrap } from '@aleksejdix/focus/src'
import { useDropdownContext } from './use/useDropdownContext'

const { isVisible, contentRef, dropdownRect, close } = useDropdownContext()
</script>

<style>
.d3 {
  /* prettier-ignore  */
  transform: 
    translate3d(var(--vuedin-dropdown-reset-x), var(--vuedin-dropdown-reset-y), 0)
    translate3d(var(--vuedin-translate-x), var(--vuedin-translate-y), 0);
}
</style>
