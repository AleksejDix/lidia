<template>
  <button aria-label="close" @click="close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
    >
      <path
        d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
      ></path>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { useAlertContext } from './useAlertContext'
const { close } = useAlertContext()
</script>
