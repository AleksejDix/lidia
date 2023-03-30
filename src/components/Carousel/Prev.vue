<template>
  <Button @click="prev"> <slot> prev </slot> </Button>
</template>

<script lang="ts" setup>
import { Button } from '@/components/Button'
import { useCarouselContext } from './useCarouselContext'

const { prev } = useCarouselContext()
</script>
