<!-- FieldError.vue -->
<template>
  <div class="text-red-600" aria-live="assertive">
    <slot>{{ error }}</slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const error = ref('Email is not valid')
</script>
