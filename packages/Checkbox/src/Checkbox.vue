<template>
  <input
    type="checkbox"
    :checked="isChecked"
    @change="onChange"
    :indeterminate="isIndeterminate"
    :value="value"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Boolean, String, Array],
    default: undefined
  },
  value: {
    type: [Boolean, String],
    required: true
  },
  trueValue: {
    type: [Boolean, String],
    default: true
  },
  falseValue: {
    type: [Boolean, String],
    default: false
  },
  indeterminatedValue: {
    type: [Boolean, String],
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue'])

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value)
  }
  return !!props.modelValue
})

const isIndeterminate = computed(() => props.modelValue === props.indeterminatedValue)

const onChange = (event: Event) => {
  if (Array.isArray(props.modelValue)) {
    if (isChecked.value) {
      emit(
        'update:modelValue',
        props.modelValue.filter((checkbox) => checkbox !== props.value)
      )
      return
    }
    emit('update:modelValue', [...props.modelValue, (event.target as HTMLInputElement).value])
    return
  }
  if (props.modelValue === props.trueValue) {
    emit('update:modelValue', props.falseValue)
  } else if (props.modelValue === props.indeterminatedValue) {
    emit('update:modelValue', props.trueValue)
  } else {
    emit('update:modelValue', props.trueValue)
  }
}
</script>
