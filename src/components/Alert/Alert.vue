<template>
  <div
    v-if="modalValue"
    class="flex items-start justify-between p-4 space-x-4 border"
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
      return ' text-red-600'
    case 'warning':
      return 'text-yellow-600'
    case 'success':
      return ' text-green-600'
    case 'info':
    default:
      return ' text-blue-600 '
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
