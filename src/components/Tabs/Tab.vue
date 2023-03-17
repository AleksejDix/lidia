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
    :class="{ 'bg-white text-black': isActive }"
    role="tab"
    class="Tab px-4 py-2 relative top-[1px] focus:bg-yellow-400 focus:text-black focus:outline-none"
    @click="tabs.select(id)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { inject, computed, watch, watchEffect } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { TabsKey } from './symbols'
import { useFocusCycleItem } from '@/components/FocusCycle'

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

watchEffect(() => {
  if (props.open) {
    tabs.select(id)
  }
})

const pair = computed(() => tabs.getPairByTabId(id))

const isActive = computed(() => id === tabs.activePair.value?.[0])
</script>
