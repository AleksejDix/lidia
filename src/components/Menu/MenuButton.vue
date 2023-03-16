<template>
  <button
    role="menuitem"
    ref="menuItem"
    class="py-2 px-4 block w-full text-left"
    @keydown.down.prevent="focusNext"
    @keydown.up.prevent="focusPrevious"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.space.prevent="$emit('click')"
    @keydown.enter.prevent="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted } from 'vue'

const menuItem = ref<HTMLElement | null>(null)

const menuFocus = inject('menuFocus')

const focusNext = () => {
  menuFocus.focusNext(menuItem.value)
}

const focusPrevious = () => {
  menuFocus.focusPrevious(menuItem.value)
}

onMounted(() => {
  menuFocus.registerMenuItem(menuItem.value)
})

onUnmounted(() => {
  menuFocus.unregisterMenuItem(menuItem.value)
})
</script>
