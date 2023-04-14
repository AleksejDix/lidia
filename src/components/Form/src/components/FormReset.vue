<!-- FormReset.vue -->
<template>
  <button type="reset" class="text-red-600 border-2 py-2 px-4" @click="reset">
    <slot>reset</slot>
  </button>
</template>

<script lang="ts" setup>
import { useFormContext } from '../use/useFormContext'

const { reset } = useFormContext()
</script>
