<!-- Suggestion.vue -->
<template>
  <button
    class="w-full text-left px-3 h-[50px] flex gap-2 items-center text-blue-200"
    :class="{
      isHighlighted,
      isSelected
    }"
    ref="el"
    @keydown.down.prevent="hNext"
    @keydown.up.prevent="hPrev"
    @click="select(suggestion)"
  >
    <slot v-bind="{ hNext, hPrev, select, isSelected, isHighlighted }">
      <div class="w-6 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current transition-opacity duration-300"
          style="transform: ; msfilter: "
        >
          <path
            v-if="isSelected"
            d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
          ></path>
        </svg>
      </div>
      <div>
        {{ suggestion[displayKey] }}
      </div>
    </slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useAutocompleteContext } from '../use/useAutocompleteContext'

const props = defineProps({
  suggestion: {
    type: Object,
    required: true
  },
  isHighlighted: {
    type: Boolean,
    default: false
  }
})

const { select, modelValue, uniqueKey, hNext, hPrev, displayKey } = useAutocompleteContext()

const el = ref()

watch(
  () => props.isHighlighted,
  (n) => {
    if (!n) return
    ;(el.value as HTMLElement).scrollIntoView({ block: 'end' })
  }
)

const isSelected = computed(() => {
  if (!modelValue) return false
  if (Array.isArray(modelValue.value)) {
    return modelValue.value.some(
      (selection) => selection[uniqueKey] === props.suggestion[uniqueKey]
    )
  }
  return (
    modelValue.value &&
    modelValue.value[uniqueKey as keyof typeof modelValue.value] === props.suggestion[uniqueKey]
  )
})
</script>

<style>
.isHighlighted {
  @apply bg-blue-800 text-white;
}

.isSelected {
  @apply bg-blue-800 text-yellow-200;
}
</style>
