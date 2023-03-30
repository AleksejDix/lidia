<!-- MenuButton.vue -->
<template>
  <button
    role="menuitem"
    type="button"
    class="py-2 px-4 block w-full text-left focus:bg-pink-900 focus:outline-none"
    :ref="focus.create"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.enter.prevent="emit('click')"
    @keydown="focus.focusByFirstLetter"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useFocusCycleItem } from '@/components/Focus'

const emit = defineEmits(['click'])

const focus = useFocusCycleItem()
</script>
