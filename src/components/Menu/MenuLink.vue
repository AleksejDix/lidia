<!-- MenuLink.vue -->
<template>
  <a
    v-bind="$attrs"
    :ref="focus.create"
    :href="href"
    role="menuitem"
    class="py-2 px-4 block w-full text-left focus:bg-pink-900 focus:outline-none"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.space.prevent="$emit('click')"
    @keydown="focus.focusByFirstLetter"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { useFocusCycleItem } from '../FocusCycle'

defineProps({
  href: {
    type: String,
    required: true
  }
})

const focus = useFocusCycleItem()
</script>
