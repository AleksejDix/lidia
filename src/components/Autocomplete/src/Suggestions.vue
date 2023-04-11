<!-- Suggestions.vue -->
<template>
  <ul v-if="hasSuggestions">
    <li
      v-for="(suggestion, index) in suggestions"
      :key="suggestion[uniqueKey as keyof typeof suggestion]"
    >
      <slot
        name="suggestion"
        v-bind="{
          suggestion,
          select
        }"
      >
        <Suggestion
          :class="{ 'bg-blue-300': index === selectionIndex }"
          :suggestion="suggestion"
          @select="select(suggestion)"
        >
          {{ suggestion.name }}
        </Suggestion>
      </slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'
import { Suggestion } from '.'

const { suggestions, hasSuggestions, uniqueKey, select, selectionIndex } = useAutocompleteContext()
</script>
