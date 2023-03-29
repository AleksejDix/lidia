<!-- Landmark.vue -->
<template>
  <component :is="tag" :id="id">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})
</script>
