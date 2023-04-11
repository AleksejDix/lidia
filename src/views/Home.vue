<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Autocomplete</h1>

    <Dropdown>
      <DropdownButton>
        {{ model }}
      </DropdownButton>
      <DropdownContent>
        <Autocomplete :options="searchSwissCantons" :uniqueKey="'abbreviation'" v-model="model">
        </Autocomplete>
      </DropdownContent>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { Autocomplete } from '@/components/Autocomplete/src/'
import { searchSwissCantons } from '@/components/Autocomplete/data'
import { ref } from 'vue'
import { Dropdown, DropdownButton, DropdownContent } from '@/components/Dropdown'

const model = ref({ name: 'Appenzell Ausserrhoden', abbreviation: 'AR' })
</script>
