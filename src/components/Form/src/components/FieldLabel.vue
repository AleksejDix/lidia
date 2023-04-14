<template>
  <label :for="label">
    <slot>{{ label }}</slot>
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const label = ref('label')
</script>
