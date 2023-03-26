<!-- Switch.vue -->
<template>
  <div
    class="relative w-12 h-6 bg-gray-400 rounded-full cursor-pointer"
    :class="{ 'bg-green-500': isActive }"
    @click="toggle"
    role="switch"
    :aria-checked="isActive"
    :tabindex="0"
    @keydown.space.prevent="toggle"
  >
    <slot>
      <SwitchThumb></SwitchThumb>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import { SwitchThumb } from '.'
import { SwitchKey } from './symbols'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const isActive = ref(false)

const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  (newValue) => {
    isActive.value = newValue
  }
)

provide(SwitchKey, {
  isActive
})

const toggle = () => {
  isActive.value = !isActive.value
  emit('update:modelValue', isActive.value)
}
</script>
