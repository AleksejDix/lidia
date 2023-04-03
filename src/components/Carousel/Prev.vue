<!-- Prev.vue -->
<template>
  <button @click="prev" aria-controls="carousel-container" aria-label="Previous slide">
    <slot> prev </slot>
  </button>
</template>

<script lang="ts" setup>
import { useCarouselContext } from './useCarouselContext'

const { prev } = useCarouselContext()
</script>
