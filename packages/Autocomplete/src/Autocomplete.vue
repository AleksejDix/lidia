<!-- Autocomplete.vue -->
<template>
  <div class="autocomplete text-black h-full">
    <slot>
      <Search />
      <Suggestions></Suggestions>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import { Search, Suggestions } from '.'
import { useAutocomplete, useAutocomleteModel } from './../use'

const props = defineProps({
  modelValue: {
    type: [Object, String, Array],
    default: null
  },
  options: {
    type: [Function, Array],
    required: true
  },
  uniqueKey: {
    type: String,
    default: 'id'
  },
  displayKey: {
    type: String,
    required: true
  },
  sortKeys: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => []
  },
  groupKey: {
    type: String,
    required: false,
    default: undefined
  }
})
const emit = defineEmits(['update:modelValue'])

const { select } = useAutocomleteModel(props, emit)

useAutocomplete({
  autocomplete: props.options,
  uniqueKey: props.uniqueKey,
  modelValue: computed(() => props.modelValue),
  select,
  displayKey: props.displayKey,
  sortKeys: props.sortKeys,
  groupKey: props.groupKey
})
</script>
