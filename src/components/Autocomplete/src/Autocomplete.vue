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
import { useAutocomplete } from '../use/useAutocomplete'
import { tryDropdownContext } from '@/components/Dropdown/use/useDropdownContext'

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

const dropdown = tryDropdownContext()

function select(suggestion: any) {
  const list = Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]

  const isInside = list.find(
    (selection) => selection?.[props.uniqueKey] === suggestion?.[props.uniqueKey]
  )

  if (Array.isArray(props.modelValue)) {
    if (isInside) {
      emit(
        'update:modelValue',
        props.modelValue.filter(
          (selection) => selection[props.uniqueKey] !== suggestion[props.uniqueKey]
        )
      )
      return
    }
    // add to the model on selection
    emit('update:modelValue', [...props.modelValue, suggestion])
    return
  }

  emit('update:modelValue', isInside ? undefined : suggestion)
  dropdown?.close()
}

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
