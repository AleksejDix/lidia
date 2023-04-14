<template>
  <div class="border p-8">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFormContext } from '../use'
import { provideFieldContext } from '../use/useFieldContext'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const { fields } = useFormContext()

const name = ref(props.name)

const helpId = ref()

const inputId = ref()

const value = computed({
  get() {
    return fields[name.value]
  },
  set(value) {
    fields[name.value] = value
  }
})

provideFieldContext({
  name,
  helpId,
  inputId,
  value
})
</script>
