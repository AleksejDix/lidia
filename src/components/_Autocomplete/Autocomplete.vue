<template>
  <div class="autocomplete">
    <input v-model="search" @input="updateSuggestions" />
    <ul v-if="suggestions.length > 0" class="suggestions">
      <li
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="selectSuggestion(suggestion)"
      >
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const search = ref('')
const suggestions = ref<string[]>([])

const updateSuggestions = () => {
  // Fetch suggestions based on search.value
}

const selectSuggestion = (suggestion: string) => {
  search.value = suggestion
  suggestions.value = []
}
</script>
