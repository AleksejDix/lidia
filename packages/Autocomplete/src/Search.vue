<!-- Search.vue -->
<template>
  <div class="relative h-[50px]">
    <LoadingIndicator></LoadingIndicator>
    <slot></slot>
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
import { Ghost, LoadingIndicator } from '.'

const { query, selectFirst, hPrev, hNext, isLoading, displayKey } = useAutocompleteContext()
</script>
