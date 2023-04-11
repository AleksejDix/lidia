<template>
  <DisclosureButton
    :ref="focus.create"
    @keydown.down.prevent="focus.next"
    @keydown.up.prevent="focus.prev"
    @keydown.home.prevent="focus.first"
    @keydown.end.prevent="focus.last"
    @keydown="focus.focusByFirstLetter"
  >
    <slot></slot>
  </DisclosureButton>
</template>

<script setup lang="ts">
import { DisclosureButton } from '@aleksejdix/disclosure'
import { useFocusCycleItem } from '@aleksejdix/focus'

const focus = useFocusCycleItem()
</script>
