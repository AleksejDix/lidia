<template>
  <div role="menu">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'

const menuItems = ref<HTMLElement[]>([])

const focusNext = (currentItem: HTMLElement) => {
  const index = menuItems.value.findIndex((item) => item === currentItem)
  const nextIndex = (index + 1) % menuItems.value.length
  menuItems.value[nextIndex]?.focus()
}

const focusPrevious = (currentItem: HTMLElement) => {
  const index = menuItems.value.findIndex((item) => item === currentItem)
  const previousIndex = (index - 1 + menuItems.value.length) % menuItems.value.length
  menuItems.value[previousIndex]?.focus()
}

const registerMenuItem = (menuItem: HTMLElement) => {
  menuItems.value.push(menuItem)
}

const unregisterMenuItem = (menuItem: HTMLElement) => {
  const index = menuItems.value.findIndex((item) => item === menuItem)
  if (index > -1) {
    menuItems.value.splice(index, 1)
  }
}

provide('menuFocus', {
  focusNext,
  focusPrevious,
  registerMenuItem,
  unregisterMenuItem
})
</script>
