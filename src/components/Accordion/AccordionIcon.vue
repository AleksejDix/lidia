<template>
  <svg
    v-if="isVisible"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
  >
    <path d="M2 15h7v7h2v-9H2v2zM15 2h-2v9h9V9h-7V2z"></path>
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
  >
    <path d="M5 12H3v9h9v-2H5zm7-7h7v7h2V3h-9z"></path>
  </svg>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { PanelKey } from './symbols'
const panel = inject(PanelKey)

if (!panel) {
  throw new Error(`Could not resolve ${panel}`)
}

const { isVisible } = panel
</script>
