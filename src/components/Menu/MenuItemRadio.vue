<template>
  <button
    type="button"
    role="menuitemradio"
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
import { useFocusCycleItem } from '../FocusCycle'

const focus = useFocusCycleItem()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
[role='menuitemradio']::before {
  display: inline-block;
  content: '';
  width: 1em;
  height: 1em;
  padding: 0.1em;
  border: 2px solid #333;
  border-radius: 50%;
  box-sizing: border-box;
  background-clip: content-box;
  margin-inline-end: 2px;
}
[role='menuitemradio'][aria-checked='true']::before {
  background-color: purple;
}
</style>
