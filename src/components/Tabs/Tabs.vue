<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { ref, provide, computed } from 'vue'
import { TabsKey } from './symbols'

function zip<T, U>(array1: T[], array2: U[]): Array<[T, U]> {
  const minLength = Math.min(array1.length, array2.length)
  return Array.from({ length: minLength }, (_, index) => [array1[index], array2[index]])
}

const activeIndex = ref(0)

const tabs = ref<string[]>([])

const createTab = (tabId: string) => {
  tabs.value.push(tabId)
}

const panels = ref<string[]>([])

const createPanel = (tabId: string) => {
  panels.value.push(tabId)
}

const pairs = computed(() => zip(tabs.value, panels.value))

const getPairByIndex = (index: number) => pairs.value[index]

const activePair = computed(() => getPairByIndex(activeIndex.value))

const getPairByPanelId = (panelId: string) => getPairByIndex(panels.value.indexOf(panelId))
const getPairByTabId = (tabsId: string) => getPairByIndex(tabs.value.indexOf(tabsId))

const select = (tabsId: string) => {
  activeIndex.value = tabs.value.indexOf(tabsId)
}

provide(TabsKey, {
  tabs,
  createTab,
  panels,
  createPanel,
  pairs,
  activePair,
  getPairByPanelId,
  getPairByTabId,
  select
})
</script>
