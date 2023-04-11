<!-- Autocomplete.vue -->
<template>
  <div class="autocomplete">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

import { useAutocomplete } from '../use/useAutocomplete'

const props = defineProps({
  modelValue: {
    type: null as unknown as () => unknown,
    default: null
  },
  options: {
    type: Function as PropType<(query?: string) => Promise<unknown[]>>,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

function select(suggestion: any) {
  emit('update:modelValue', suggestion)
}

useAutocomplete({
  autocomplete: props.options,
  key: 'abbreviation',
  select
})
</script>
