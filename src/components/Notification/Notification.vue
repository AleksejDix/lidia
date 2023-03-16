<template>
  <Surface
    role="alert"
    tabindex="0"
    class="py-2 pl-2 pr-2 w-[320px] relative min-h-[40px] flex align-top gap-2"
  >
    <div class="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
    </div>
    <div class="grow pt-0.5">
      <slot></slot>
    </div>
    <div class="">
      <button class="bg-gray-900 rounded-md p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 align-text-bottom"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <div>close</div>
      </button>
    </div>
  </Surface>
</template>

<script lang="ts" setup>
import { Surface } from '@/components/Surface'
import { useEscKey } from '@/use/useEscKey'
</script>
