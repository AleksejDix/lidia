<!-- Search.vue -->
<template>
  <div class="relative h-[50px]">
    <div
      class="absolute left-[12px] top-1/2 -translate-y-1/2 w-6 h-6 flex justify-center items-center"
    >
      <transition name="fade" mode="out-in">
        <div v-if="isLoading" class="relative right-[2px] bottom-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            class="fill-current text-black animate-spin"
            style="transform: ; msfilter: "
          >
            <path
              d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
            ></path>
          </svg>
        </div>
        <div v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current text-black"
            style="transform: ; msfilter: "
          >
            <path
              d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
            ></path>
          </svg>
        </div>
      </transition>
    </div>
    <Ghost class="absolute left-0 h-[50px] leading-[50px] pl-[44px]">
      <template #default="{ ghost }"> {{ ghost?.[displayKey] }} </template>
    </Ghost>
    <input
      type="search"
      class="bg-transparent whitespace-nowrap text-black relative border-none h-[50px] pl-[44px] block w-full"
      v-bind="$attrs"
      v-model="query"
      @keydown.enter.prevent="selectFirst"
      @keydown.up.prevent="hPrev"
      @keydown.down.prevent="hNext"
    />
  </div>
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'
import { Ghost } from '.'

const { query, selectFirst, hPrev, hNext, isLoading, displayKey } = useAutocompleteContext()
</script>
