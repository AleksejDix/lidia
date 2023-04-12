<!-- NoSuggestions.vue -->
<template>
  <div v-if="hasNoSuggestions" class="px-3 h-[50px]">
    <slot>No Suggestions</slot>
  </div>
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'

const { hasNoSuggestions } = useAutocompleteContext()
</script>
