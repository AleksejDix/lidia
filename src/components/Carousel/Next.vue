<template>
  <Button @click="next"> <slot>next</slot> </Button>
</template>

<script lang="ts" setup>
import { Button } from '@/components/Button'
import { useCarouselContext } from './useCarouselContext'

const { next } = useCarouselContext()
</script>
