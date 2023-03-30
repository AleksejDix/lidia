<template>
  <div class="relative w-[24px] h-[24px] overflow-hidden">
    <Transition name="slide-up">
      <svg
        v-if="isVisible"
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
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { useDisclosureContext } from './useDisclosureContext'

const { isVisible } = useDisclosureContext()
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: rotate3d(-2, 1, 0, -180deg);
}

.slide-up-leave-to {
  opacity: 0;
  transform: rotate3d(-2, 1, 0, 180deg);
}
</style>
