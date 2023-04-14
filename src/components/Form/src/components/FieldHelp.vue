<template>
  <div :id="helpId" class="block">
    <slot>Please add some help text</slot>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount } from 'vue'
import { useFieldContext } from '../use'
import { v4 } from 'uuid'

const { helpId } = useFieldContext()

helpId.value = v4()

onBeforeUnmount(() => {
  helpId.value = undefined
})
</script>
