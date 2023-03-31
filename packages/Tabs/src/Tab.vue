<template>
  <Button
    type="button"
    :ref="focus.create"
    @keydown.left.prevent="focus.prev"
    @keydown.right.prevent="focus.next"
    @keydown.home.prevent="focus.first"
    @keydown.end.prevent="focus.last"
    @keydown.fn+left.prevent="focus.first"
    @keydown.fn+right.prevent="focus.last"
    :id="pair?.[0]"
    :aria-controls="pair?.[1]"
    :aria-selected="isActive"
    :class="{ 'bg-yellow-300': isActive }"
    role="tab"
    class="px-4 py-2 relative cursor-pointer rounded inline-block"
    @click="tabs.select(id)"
  >
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import { inject, computed, watchEffect } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { TabsKey } from './symbols'
import { useFocusCycleItem } from '@aleksejdix/focus'
import { Button } from '@aleksejdix/button'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const focus = useFocusCycleItem()

const id = uuidv4()

const tabs = inject(TabsKey)

if (!tabs) {
  throw new Error(`Could not resolve ${tabs}`)
}

tabs.createTab(id)

const pair = computed(() => tabs.getPairByTabId(id))

const isActive = computed(() => id === tabs.activePair.value?.[0])

watchEffect(
  () => {
    if (props.open) {
      tabs.select(id)
    }
  },
  { flush: 'post' }
)
</script>
