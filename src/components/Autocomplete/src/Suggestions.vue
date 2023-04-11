<!-- Suggestions.vue -->
<template>
  <ul v-if="hasSuggestions">
    <li v-for="suggestion in suggestions" :key="suggestion[key as keyof typeof suggestion]">
      <slot
        name="suggestion"
        v-bind="{
          suggestion,
          select
        }"
      >
        <Suggestion :suggestion="suggestion" @select="select(suggestion)">
          {{ suggestion.name }}
        </Suggestion>
      </slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'
import { Suggestion } from '.'

const { suggestions, hasSuggestions, key, select } = useAutocompleteContext()
</script>
