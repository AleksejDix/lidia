<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Autocomplete</h1>
    <Dropdown>
      <div>
        <span
          v-for="pill in model"
          :key="pill.name"
          class="px-2 py-1 border-white border-2 inline-flex items-center gap-2"
        >
          {{ pill.name }}
          <button
            @click="remove(pill)"
            class="w-10 h-10 rounded-full border-2 border-white inline-flex items-center justify-center"
          >
            x
          </button>
        </span>
        <DropdownButton> Search... </DropdownButton>
        <button @click="model = []">clear</button>
      </div>
      <DropdownContent>
        <Autocomplete :options="options" :uniqueKey="'abbreviation'" v-model="model">
          <Search></Search>
          <Suggestions>
            <!-- <template #default="{ suggestion, isSelected }">
              <Suggestion :suggestion="suggestion" :isSelected="isSelected">
                {{ suggestion.abbreviation }}
              </Suggestion>
            </template> -->
          </Suggestions>
          <NoSuggestions></NoSuggestions>
        </Autocomplete>
      </DropdownContent>
    </Dropdown>

    <Dropdown>
      <div>
        <DropdownButton>{{ singleSelect }}</DropdownButton>
        <button @click="model = []">clear</button>
      </div>
      <DropdownContent>
        <Autocomplete async :options="options" :uniqueKey="'abbreviation'" v-model="singleSelect">
          <Search></Search>
          <Suggestions>
            <!-- <template #default="{ suggestion, isSelected }">
              <Suggestion :suggestion="suggestion" :isSelected="isSelected">
                {{ suggestion.abbreviation }}
              </Suggestion>
            </template> -->
          </Suggestions>
          <NoSuggestions></NoSuggestions>
        </Autocomplete>
      </DropdownContent>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { Autocomplete, NoSuggestions, Search, Suggestions } from '@/components/Autocomplete/src/'
import { searchSwissCantons } from '@/components/Autocomplete/data'
import { ref, computed } from 'vue'
import { Dropdown, DropdownButton, DropdownContent } from '@/components/Dropdown'

const model = ref<any[]>([])

function remove(pill: any) {
  model.value = model.value.filter((x) => x.name !== pill.name)
}

const selection = computed(() => {
  return model.value.map((x) => x.abbreviation)
})

const getSuggestions = (x: any) => (q: any) => searchSwissCantons(q, x)

const options = computed(() => getSuggestions(selection.value))

const singleSelect = ref()
</script>
