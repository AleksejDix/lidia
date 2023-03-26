<template>
  <div class="range-slider">
    <input v-model="selectedRange" type="range" :min="min" :max="max" />
    <span>{{ selectedRange }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedRange = ref(50)
const min = ref(0)
const max = ref(100)
</script>
