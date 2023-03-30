<!-- MenuItemCheckbox.vue -->
<template>
  <label
    class="flex items-center py-2 px-4 cursor-pointer"
    role="menuitemcheckbox"
    :ref="focus.create"
    :aria-checked="computedModelValue"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.space.prevent="computedModelValue = !computedModelValue"
    @keydown.enter.prevent="computedModelValue = !computedModelValue"
    @keydown="focus.focusByFirstLetter"
  >
    <input
      type="checkbox"
      class="mr-2"
      :id="id"
      :checked="computedModelValue"
      @change="computedModelValue = !computedModelValue"
    />
    <div class="select-none w-full" :for="id">
      <slot></slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFocusCycleItem } from '@lidia/focus'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const id = uuidv4()
const focus = useFocusCycleItem()
const emit = defineEmits(['update:modelValue'])

const computedModelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
