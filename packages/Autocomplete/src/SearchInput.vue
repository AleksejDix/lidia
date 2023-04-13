<!-- Search.vue -->
<template>
  <input
    type="search"
    class="bg-yellow-300 whitespace-nowrap text-black border-none h-[50px] pl-[44px] block w-full"
    v-model="query"
    @keydown.enter.prevent="selectFirst"
    @keydown.up.prevent="hPrev"
    @keydown.down.prevent="hNext"
  />
</template>
<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'

const { query, selectFirst, hPrev, hNext } = useAutocompleteContext()
</script>
