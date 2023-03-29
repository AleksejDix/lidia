<template>
  <div
    v-if="modalValue"
    class="alert-wrapper flex items-center justify-between p-4 rounded shadow space-x-4"
    :class="alertClass"
    :role="role"
    :aria-live="ariaLive"
    :aria-atomic="ariaAtomic"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import { createAlertContext } from './useAlertContext'

const props = defineProps({
  modalValue: {
    type: Boolean,
    default: true
  },
  role: {
    type: String as PropType<'alert' | 'status' | 'log'>,
    default: 'alert',
    validator: (value: string) => ['alert', 'status', 'log'].includes(value)
  },
  ariaLive: {
    type: String as PropType<'off' | 'polite' | 'assertive'>,
    default: 'assertive',
    validator: (value: string) => ['off', 'polite', 'assertive'].includes(value)
  },
  ariaAtomic: {
    type: String as PropType<'true' | 'false'>,
    default: 'true',
    validator: (value: string) => ['true', 'false'].includes(value)
  },
  type: {
    type: String as PropType<'error' | 'warning' | 'success' | 'info'>,
    default: 'info',
    validator: (value: string) => ['error', 'warning', 'success', 'info'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue'])

const alertClass = computed(() => {
  switch (props.type) {
    case 'error':
      return 'bg-red-500 text-white'
    case 'warning':
      return 'bg-yellow-500 text-white'
    case 'success':
      return 'bg-green-500 text-white'
    case 'info':
    default:
      return 'bg-blue-500 text-white'
  }
})

const type = ref(props.type)

const close = () => {
  emit('update:modelValue', false)
}

createAlertContext({
  isActive: computed(() => props.modalValue),
  type,
  close
})
</script>

<style scoped></style>
