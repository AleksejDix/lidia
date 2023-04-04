<template>
  <button
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
    :class="{
      isActive
    }"
    role="tab"
    class="text-white h-[50px] px-[20px] min-w-[100px]"
    @click="tabs.select(id)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { inject, computed, watchEffect } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { TabsKey } from './symbols'
import { useFocusCycleItem } from '@aleksejdix/focus/src'

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

<style>
[role='tab']:not(.isActive) {
  background: linear-gradient(to top, transparent 0px, white 0px, white 2px, transparent 2px);
  background-size: 100% 50px;
  background-repeat: no-repeat;
}

[role='tab'].isActive {
  background: linear-gradient(to bottom, transparent 0px, white 0px, white 2px, transparent 2px),
    linear-gradient(to right, transparent 0px, white 0px, white 2px, transparent 2px),
    linear-gradient(to left, transparent 0px, white 0px, white 2px, transparent 2px);
  background-size: 100% 50px;
  background-repeat: no-repeat;
}
</style>
