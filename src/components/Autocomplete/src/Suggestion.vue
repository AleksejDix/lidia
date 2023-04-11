<!-- Suggestion.vue -->
<template>
  <button
    class="w-full text-left px-3 h-[50px]"
    @click="selectSuggestion"
    :ref="focus.create"
    @keydown.down.prevent="focus.next"
    @keydown.up.prevent="focus.prev"
    @keydown="focus.focusByFirstLetter"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import { useFocusCycleItem } from '@aleksejdix/focus/src'

const props = defineProps({
  suggestion: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])

const focus = useFocusCycleItem()

const selectSuggestion = () => {
  emit('select', props.suggestion)
}
</script>
