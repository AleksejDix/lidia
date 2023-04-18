<!-- TableCaption.vue -->
<template>
  <caption :id="captionId">
    <slot></slot>
  </caption>
</template>

<script lang="ts" setup>
import { useTableContext } from '../use/useTableContext'
const { captionId } = useTableContext()
</script>
