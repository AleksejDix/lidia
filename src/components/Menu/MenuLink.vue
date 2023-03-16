<template>
  <a
    :href="href"
    ref="menuItem"
    role="menuitem"
    class="py-2 px-4 block w-full text-left"
    @keydown.down.prevent="focusNext"
    @keydown.up.prevent="focusPrevious"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.space.prevent="$emit('click')"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { defineProps, inject, ref, onMounted, onUnmounted } from 'vue'

defineProps({
  href: {
    type: String,
    required: true
  }
})

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
