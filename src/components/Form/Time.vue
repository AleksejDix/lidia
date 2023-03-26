<template>
  <div class="time-picker">
    <input v-model="selectedTime" type="time" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedTime = ref('')
</script>
