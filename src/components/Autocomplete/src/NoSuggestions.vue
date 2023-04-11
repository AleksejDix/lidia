<!-- NoSuggestions.vue -->
<template>
  <div v-if="hasNoSuggestions">
    <slot>No Suggestions</slot>
  </div>
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'

const { hasNoSuggestions } = useAutocompleteContext()
</script>
