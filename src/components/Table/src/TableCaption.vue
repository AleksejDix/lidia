<!-- TableCaption.vue -->
<template>
  <caption
    :id="captionId"
    class="caption-bottom bg-white min-h-[25px] text-blue-600 text-right px-2 uppercase leading-[25px] text-xs"
  >
    <slot></slot>
  </caption>
</template>

<script lang="ts" setup>
import { useTableContext } from '../use/useTableContext'

const { captionId } = useTableContext()
</script>
