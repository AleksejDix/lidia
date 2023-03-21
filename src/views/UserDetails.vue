<!-- src/views/UserDetails.vue -->
<template>
  <div>
    <h1>User #{{ id }}</h1>
    <p>Name: {{ users }}</p>
    <router-link to="/">Back home</router-link>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const users = [{ name: 'John' }, { name: 'Jessica' }, { name: 'James' }]
</script>
