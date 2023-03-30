<template>
  <button @click="prev"><slot> prev </slot></button>
</template>

<script lang="ts" setup>
import { useCarouselContext } from './useCarouselContext'

const { prev } = useCarouselContext()
</script>
