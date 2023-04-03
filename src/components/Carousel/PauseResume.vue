<!-- PauseResume.vue -->
<template>
  <button @click="pause" aria-label="Pause carousel" aria-controls="carousel-container">
    <slot>pause</slot>
  </button>
  <button @click="resume" aria-label="Resume carousel" aria-controls="carousel-container">
    <slot>resume</slot>
  </button>
</template>

<script lang="ts" setup>
import { useCarouselContext } from './useCarouselContext'

const { pause, resume } = useCarouselContext()
</script>
