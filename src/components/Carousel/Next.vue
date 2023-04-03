<!-- Next.vue -->
<template>
  <button
    @click="next"
    aria-controls="carousel-container"
    aria-label="Next slide"
    :disabled="isLastItem"
  >
    <slot>next</slot>
  </button>
</template>

<script lang="ts" setup>
import { useCarouselContext } from './useCarouselContext'

const { next, activeIndex } = useCarouselContext()
</script>
