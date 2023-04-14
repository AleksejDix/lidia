<!-- Form.vue -->
<template>
  <form class="border p-8 space-y-4" @submit.prevent="submit">
    <pre>{{ initialFields }}</pre>

    <hr />
    {{ fields }}

    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { provideFormContext } from '../use/useFormContext'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const initialFields = ref({})
initialFields.value = props.modelValue

const fields = ref({})
onMounted(() => {
  fields.value = { ...initialFields.value }
})

const emit = defineEmits(['submit'])

function submit() {
  emit('submit', fields.value)
}

const reset = () => {
  fields.value = { ...initialFields.value }
}

provideFormContext({
  fields,
  reset
})
</script>
