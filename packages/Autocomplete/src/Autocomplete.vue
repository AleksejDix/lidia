<!-- Autocomplete.vue -->
<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
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
  searchKey: {
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
  searchKey: props.searchKey,
  sortKeys: props.sortKeys,
  groupKey: props.groupKey
})
</script>
