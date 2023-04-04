<!-- Switch.vue -->
<template>
  <button
    class="relative w-[54px] h-[30px] cursor-pointer border-2 white"
    @click="toggle"
    :aria-checked="isActive"
    :tabindex="0"
    role="switch"
    @keydown.space.prevent="toggle"
  >
    <slot>
      <SwitchThumb></SwitchThumb>
    </slot>
  </button>
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
