<!-- Form.vue -->
<template>
  <form class="border p-8 space-y-4" @submit.prevent="submit">
    {{ initialFields }}
    <hr />
    {{ fields }}
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { ref, type PropType, computed, onMounted } from 'vue'
import { provideFormContext } from '../use/useFormContext'
import type { Schema } from 'zod'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  },
  validation: {
    type: Object as PropType<Schema<any>>,
    required: false
  }
})

const initialFields = ref({})
initialFields.value = props.modelValue

const fields = ref({})
onMounted(() => {
  fields.value = { ...initialFields.value }
})

const errors = ref<any>({})

const emit = defineEmits(['submit'])

const reset = () => {
  console.log(fields.value, initialFields.value)
  fields.value = { ...initialFields.value }
}

const validate = () => {
  const result = props.validation?.safeParse(fields.value)
  if (!result) return false
  if (result && !result.success) {
    errors.value = result.error.formErrors.fieldErrors
    return false
  } else {
    return true
  }
}

const validateField = (fieldName: string) => {
  const fieldData = { [fieldName]: fields.value[fieldName as keyof typeof fields.value] }
  const fieldSchema = props.validation?.pick({ [fieldName]: props.validation?.shape[fieldName] })
  const result = fieldSchema.safeParse(fieldData)

  if (result.success) {
    errors.value[fieldName] = ''
  } else {
    errors.value[fieldName] = result.error.formErrors.fieldErrors[fieldName]
  }
}

function submit() {
  if (validate()) {
    emit('submit', fields.value)
  }
}

provideFormContext({
  fields,
  reset,
  errors: computed(() => errors.value),
  validateField
})
</script>
