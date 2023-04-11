<!-- Suggestion.vue -->
<template>
  <button @click="selectSuggestion">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

const props = defineProps({
  suggestion: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])

const selectSuggestion = () => {
  emit('select', props.suggestion)
}
</script>
