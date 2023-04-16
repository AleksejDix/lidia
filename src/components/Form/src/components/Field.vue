<!-- Field.vue -->
<template>
  <div class="border p-8">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useFormContext } from '../use'
import { provideFieldContext } from '../use/useFieldContext'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const { fields, errors, validateField } = useFormContext()

const messages = computed(() => errors.value?.[props.name as keyof typeof errors])

const name = ref(props.name)

const helpId = ref()

const inputId = ref()

const value = computed({
  get() {
    return fields.value[name.value]
  },
  set(value) {
    fields.value[name.value] = value
  }
})

watch(value, () => {
  validateField(props.name)
})

provideFieldContext({
  name,
  helpId,
  inputId,
  value,
  messages
})
</script>
