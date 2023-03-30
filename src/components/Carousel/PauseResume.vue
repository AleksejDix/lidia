<template>
  <button @click="pause"><slot>pause</slot></button>
  <button @click="resume"><slot>resume</slot></button>
</template>

<script lang="ts" setup>
import { useCarouselContext } from './useCarouselContext'

const { pause, resume } = useCarouselContext()
</script>
