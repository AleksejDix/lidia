<template>
  <input v-bind="$attrs" @input="updateValue" />
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
