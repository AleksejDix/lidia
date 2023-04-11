<!-- Search.vue -->
<template>
  <div class="relative border-b h-[50px]">
    <Ghost class="absolute left-0 h-[50px] leading-[50px] pl-[12px]">
      <template #default="{ ghost }">
        {{ ghost?.name }}
      </template>
    </Ghost>
    <input
      type="text"
      class="bg-transparent relative border-none h-[50px]"
      v-model="query"
      :ref="focus.create"
      @keydown.enter.prevent="selectFirst"
      @keydown.up.prevent="selectPrev"
      @keydown.down.prevent="selectNext"
    />
  </div>
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'
import { Ghost } from '.'
import { useFocusCycleItem } from '@aleksejdix/focus/src'

const focus = useFocusCycleItem()

const { query, selectFirst, selectPrev, selectNext } = useAutocompleteContext()
</script>
