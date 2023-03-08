<template>
  <button
    class="bg-black text-white rounded-full h-10 w-10 overflow-hidden border-2 border-white text-xs"
  >
    <abbr :title="name" class="no-underline font-medium">{{ abbr }}</abbr>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Anonymous',
    required: false
  }
})

const abbr = computed(() => {
  return props.name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
})
</script>
