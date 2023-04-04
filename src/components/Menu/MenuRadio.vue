<template>
  <button
    type="button"
    role="menuitemradio"
    class="w-full text-left px-4 py-1 text-white"
    :aria-checked="props.modelValue"
    :ref="focus.create"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.right.prevent
    @keydown.left.prevent
    @click="emit('update:modelValue', !props.modelValue)"
    @keydown="focus.focusByFirstLetter"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { useFocusCycleItem } from '@aleksejdix/focus/src'

const focus = useFocusCycleItem()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue'])
</script>
