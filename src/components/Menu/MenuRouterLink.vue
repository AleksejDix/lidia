<!-- MenuRouterLink.vue -->
<template>
  <a
    v-bind="$attrs"
    :href="href"
    @click="navigate"
    :class="isActive ? activeClass : undefined"
    ref="menuItem"
    role="menuitem"
    class="py-2 px-4 block w-full text-left"
    @keydown.down.prevent="focusNext"
    @keydown.up.prevent="focusPrevious"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.space.prevent="$emit('click')"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { defineProps, ref, inject, onMounted, onUnmounted } from 'vue'
import { RouterLink, useLink } from 'vue-router'

const props = defineProps({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ...RouterLink.props
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { href, isActive, isExactActive, navigate, route } = useLink(props)

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
