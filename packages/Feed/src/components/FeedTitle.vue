<template>
  <component :is="tag" :id="`labelId-${id}`"><slot></slot></component>
</template>

<script setup lang="ts">
import { useFeedContext } from '../use/useFeedContext'
defineProps({
  tag: {
    type: String,
    required: true,
    default: 'h1'
  }
})

const { id } = useFeedContext()
</script>
