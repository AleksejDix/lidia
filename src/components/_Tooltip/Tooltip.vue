<template>
  <div class="tooltip">
    <span @mouseover="show" @mouseout="hide">{{ triggerText }}</span>
    <div v-if="isVisible" class="tooltip-content">
      {{ content }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const triggerText = 'Hover me!'
const content = 'Tooltip content!'
const isVisible = ref(false)

const show = () => {
  isVisible.value = true
}

const hide = () => {
  isVisible.value = false
}
</script>
