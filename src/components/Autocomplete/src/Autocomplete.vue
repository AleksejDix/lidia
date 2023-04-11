<!-- Autocomplete.vue -->
<template>
  <div class="autocomplete text-black">
    <slot>
      <Search />
      <Suggestions></Suggestions>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { Search, Suggestions } from '.'

import { useAutocomplete } from '../use/useAutocomplete'

const props = defineProps({
  modelValue: {
    type: null as unknown as () => unknown,
    default: null
  },
  options: {
    type: Function as PropType<(query?: string) => Promise<unknown[]>>,
    required: true
  },
  uniqueKey: {
    type: String,
    required: true,
    default: 'id'
  }
})

const emit = defineEmits(['update:modelValue'])

function select(suggestion: any) {
  emit('update:modelValue', suggestion)
}

useAutocomplete({
  autocomplete: props.options,
  uniqueKey: props.uniqueKey,
  select
})
</script>
