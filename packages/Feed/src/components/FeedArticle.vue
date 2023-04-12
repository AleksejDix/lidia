<template>
  <article
    tabindex="0"
    :ref="focus.create"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
  >
    <slot></slot>
  </article>
</template>

<script lang="ts" setup>
import { useFocusCycleItem } from '@aleksejdix/focus/src'
import { onUpdated } from 'vue'

const focus = useFocusCycleItem()
</script>
