<template>
  <div class="date-picker">
    <input v-model="selectedDate" type="date" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedDate = ref('')
</script>
