<template>
  <div
    class="border-l border-b border-r px-4 py-2"
    v-show="isActive"
    role="tabpanel"
    :id="pair?.[1]"
    :aria-labelledby="pair?.[0]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { TabsKey } from './symbols'
import { v4 as uuidv4 } from 'uuid'

const id = uuidv4()

const tabs = inject(TabsKey)

if (!tabs) {
  throw new Error(`Could not resolve ${tabs}`)
}

tabs.createPanel(id)

const pair = computed(() => tabs.getPairByPanelId(id))

const isActive = computed(() => id === tabs.activePair.value?.[1])
</script>
