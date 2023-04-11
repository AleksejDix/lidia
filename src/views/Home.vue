<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Autocomplete</h1>
    {{ model }}
    <Autocomplete :options="searchSwissCantons" v-model="model">
      <Search />
      <Suggestions>
        <template #suggestion="{ suggestion, select }">
          <Suggestion :suggestion="suggestion" @select="select(suggestion)">{{
            suggestion.abbreviation
          }}</Suggestion>
        </template>
      </Suggestions>
      <NoSuggestions>Kanton konnte nicht Gefunden werden</NoSuggestions>
    </Autocomplete>
  </div>
</template>

<script setup lang="ts">
import {
  Autocomplete,
  Suggestions,
  Suggestion,
  NoSuggestions,
  Search
} from '@/components/Autocomplete/src/'
import { searchSwissCantons } from '@/components/Autocomplete/data'
import { ref } from 'vue'

const model = ref({ name: 'Appenzell Ausserrhoden', abbreviation: 'AR' })
</script>
