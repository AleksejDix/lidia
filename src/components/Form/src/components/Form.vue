<template>
  <form class="border p-8 space-y-4" @submit.prevent="submit">
    <pre>{{ fields }}</pre>

    <slot></slot>
    <button type="submit">send</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { provideFormContext } from '../use/useFormContext'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['submit'])

const fields = reactive<Record<string, any>>(props.modelValue)

function submit() {
  emit('submit', fields)
}

provideFormContext({
  fields
})
</script>
