<!-- MenuItemCheckbox.vue -->
<template>
  <div
    class="flex items-center py-2 px-4 cursor-pointer"
    role="menuitemcheckbox"
    tabindex="0"
    :ref="focus.create"
    :aria-checked="computedModelValue"
    :aria-labelledby="labelledBy"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.space.prevent="computedModelValue = !computedModelValue"
    @keydown.enter.prevent="computedModelValue = !computedModelValue"
    @keydown="focus.focusByFirstLetter"
    @click="computedModelValue = !computedModelValue"
  >
    <input
      type="checkbox"
      class="mr-2 sr-only"
      :checked="computedModelValue"
      @change="computedModelValue = !computedModelValue"
    />
    <span :id="labelledBy" class="select-none">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFocusCycleItem } from '../FocusCycle'
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

const labelledBy = ref(`menuitemcheckbox-label-${id}`)

const computedModelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
