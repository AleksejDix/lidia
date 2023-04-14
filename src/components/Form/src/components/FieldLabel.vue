<template>
  <label :for="inputId" class="font-bold block">
    <slot>Label</slot>
  </label>
</template>

<script lang="ts" setup>
import { useFieldContext } from '../use'

const { inputId } = useFieldContext()
</script>
