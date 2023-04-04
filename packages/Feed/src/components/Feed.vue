<template>
  <section role="feed" :aria-labelledby="`feed-${id}`" aria-busy="true">
    <slot></slot>
  </section>
</template>

<script lang="ts" setup>
import { useFocusCycle } from '@aleksejdix/focus/src'
import { provideFeedContext } from '../use/useFeedContext'
import { v4 as uuidv4 } from 'uuid'

const id = uuidv4()

provideFeedContext({
  id
})

useFocusCycle()
</script>
