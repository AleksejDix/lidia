<template>
  <Button @click="pause"> <slot>pause</slot> </Button>
  <Button @click="resume"> <slot>resume</slot> </Button>
</template>

<script lang="ts" setup>
import { Button } from '@/components/Button'
import { useCarouselContext } from './useCarouselContext'

const { pause, resume } = useCarouselContext()
</script>
