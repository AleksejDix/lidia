<!-- src/views/About.vue -->
<template>
  <div>
    <h1>About</h1>
    <button @click="back">Back</button>
    <span> | </span>
    <router-link to="/">Back home</router-link>
  </div>
</template>

<script lang="ts" setup>
const back = () => {
  history.back()
}
</script>
