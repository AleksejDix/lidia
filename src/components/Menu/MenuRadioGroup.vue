<template>
  <div role="group" class="rounded p-1">
    <slot></slot>

    {{ modelValue }}
  </div>
</template>

<script lang="ts" setup>
import { provide, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  modelValue: {
    type: [String, Array],
    required: false,
    default: undefined
  },
  multiple: {
    type: Boolean,
    default: false
  },
  name: {}
})

const model = ref(props.modelValue)
const name = ref(props.name)

const emit = defineEmits(['update:modelValue'])
const route = useRoute()

watch(
  () => route.query[name.value as keyof typeof route.query],
  (newModel) => {
    emit('update:modelValue', newModel)
  }
)

provide('select', {
  model,
  name
})
</script>
