<template>
  <button
    role="menuitem"
    :ref="focus.create"
    class="py-2 px-4 block w-full text-left focus:bg-pink-900 focus:outline-none"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.space.prevent="$emit('click')"
    @keydown.enter.prevent="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useFocusCycleItem } from '../FocusCycle'
const focus = useFocusCycleItem()
</script>
