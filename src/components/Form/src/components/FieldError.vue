<!-- FieldError.vue -->
<template>
  <div class="text-red-600" aria-live="assertive">
    <div v-for="message in messages" :key="message">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFieldContext } from '../use'

const { messages } = useFieldContext()
</script>
