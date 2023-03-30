<template>
  <button @click="next"><slot>next</slot></button>
</template>

<script lang="ts" setup>
import { useCarouselContext } from './useCarouselContext'

const { next } = useCarouselContext()
</script>
