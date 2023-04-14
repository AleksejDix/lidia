<template>
  <form @submit.prevent="submit">
    <slot></slot>
    <button type="submit">send</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { provideFormContext } from '../use/useFormContext'

const emit = defineEmits(['submit'])

const data = reactive({})

function submit() {
  emit('submit', data)
}

provideFormContext({
  data
})
</script>
