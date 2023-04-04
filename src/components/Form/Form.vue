<template>
  <form>
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

const formValues = ref({})

const setFormValue = (name: string, value: string) => {
  formValues.value = { ...formValues.value, [name]: value }
}

const submitForm = () => {}

provide('form', {
  submitForm,
  setFormValue
})
</script>
