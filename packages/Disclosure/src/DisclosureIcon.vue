<template>
  <div class="relative w-[24px] h-[24px] overflow-hidden">
    <svg
      v-if="isOpen"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="fill-current pointer-events-none absolute"
    >
      <path d="M2 15h7v7h2v-9H2v2zM15 2h-2v9h9V9h-7V2z"></path>
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="fill-current pointer-events-none absolute"
    >
      <path d="M5 12H3v9h9v-2H5zm7-7h7v7h2V3h-9z"></path>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { useDisclosureContext } from './useDisclosureContext'

const { isOpen } = useDisclosureContext()
</script>
