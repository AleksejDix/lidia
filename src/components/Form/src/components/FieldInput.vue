<template>
  <input
    class="bg-black text-white border-white border-2"
    v-model="model"
    v-bind="$attrs"
    :name="name"
    :aria-describedby="helpId"
    :id="inputId"
  />
</template>

<script lang="ts" setup>
import { computed, useAttrs, type ComputedRef } from 'vue'
import { useFieldContext } from '../use'
import { v4 } from 'uuid'

const props = defineProps({
  modelValue: {
    type: [Boolean, String, Array, Object],
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue'])

const attrs = useAttrs()
const { name, helpId, inputId, value } = useFieldContext()

const model: ComputedRef = computed({
  get() {
    return props.modelValue || value.value
  },
  set(payload: string) {
    if (attrs.type === 'checkbox') {
      value.value = payload
      emit('update:modelValue', value.value)
    } else if (attrs.type === 'text') {
      value.value = payload || undefined
      emit('update:modelValue', value.value)
    } else {
    }
  }
})

inputId.value = v4()
</script>
