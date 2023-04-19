<template>
  <button class="border px-3 py-1" @click="navigate(-1, 'month')">
    <slot>{{ `<` }}</slot>
  </button>
</template>

<script lang="ts" setup>
import { useCalendarContext } from '../use'
const { navigate } = useCalendarContext()
</script>
