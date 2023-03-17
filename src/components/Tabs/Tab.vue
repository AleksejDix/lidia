<template>
  <button
    type="button"
    :ref="focus.create"
    @keydown.left.prevent="focus.prev"
    @keydown.right.prevent="focus.next"
    :id="pair?.[0]"
    :aria-controls="pair?.[1]"
    :aria-selected="isActive"
    :class="{ 'border border-yellow-400': isActive }"
    role="tab"
    class="Tab"
    @click="tabs.select(id)"
  >
    {{ isActive }}
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
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

const pair = computed(() => tabs.getPairByTabId(id))

const isActive = computed(() => id === tabs.activePair.value?.[0])
</script>
