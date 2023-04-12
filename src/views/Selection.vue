<template>
  <div>
    <h1>Selection</h1>

    <h2>Checkbox</h2>

    <div class="flex gap-4 items-center">
      <Checkbox id="checkbox" v-model="bool"></Checkbox>
      <label class="block" for="checkbox">{{ bool }}</label>
    </div>

    <h2>Checkbox neutral</h2>

    <div class="flex gap-4 items-center">
      <Checkbox id="checkbox" v-model="neutral"></Checkbox>
      <label class="block" for="checkbox">{{ neutral }}</label>
    </div>

    <div class="flex gap-10">
      <div>
        <div v-for="option in options" :key="option">
          <Checkbox :id="option" :value="option" v-model="multiSelect"></Checkbox>
          <label :for="option">{{ option }}</label>
        </div>
      </div>
      <div>
        <pre>{{ multiSelect }}</pre>
      </div>
    </div>

    <h2>Boolean</h2>
    <div class="flex gap-4 items-center" name="notification">
      <Switch id="notification"></Switch>
      <label class="block" for="notifications">notification</label>
    </div>

    <h2>Select</h2>
    <div class="flex gap-8">
      <div class="flex gap-4 items-center text-black">
        <select v-model="select">
          <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
      </div>
      <div>
        <pre>{{ select }}</pre>
      </div>
    </div>

    <h2>MultiSelect</h2>
    <div class="flex gap-8">
      <div class="flex gap-4 items-center text-black">
        <select v-model="multiSelect" multiple>
          <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
      </div>
      <div>
        <pre>{{ multiSelect }}</pre>
      </div>
    </div>

    <h2>Single Select</h2>
    <div class="flex gap-8">
      <div class="flex gap-4 items-center text-black">
        <div>
          <label for="canton" class="block w-full">Select Canton</label>
          <Dropdown>
            <DropdownButton
              :disabled="people.length === 0"
              id="canton"
              class="bg-blue-800 text-white min-h-[46px] max-h-[46px] whitespace-nowrap truncate px-3 max-w-[200px] border-white text-left"
              >{{ peopleSelection?.name ?? 'Search...' }}</DropdownButton
            >
            <DropdownContent>
              <Autocomplete
                :options="people"
                v-model="peopleSelection"
                searchKey="name"
                :sortKeys="['name']"
              >
              </Autocomplete>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
      <div>
        <pre>{{ peopleSelection }}</pre>
      </div>
    </div>

    <h2>Single Select with customized template</h2>
    <div class="flex gap-8">
      <div class="flex gap-4 items-center text-black">
        <div>
          <label for="canton" class="block w-full">Select Canton</label>
          <Dropdown>
            <DropdownButton
              :disabled="swissCantons.length === 0"
              id="canton"
              class="bg-blue-800 text-white min-h-[46px] max-h-[46px] whitespace-nowrap truncate px-3 max-w-[200px] border-white text-left"
              >{{ autocompleteStatic?.title ?? 'Search...' }}</DropdownButton
            >
            <DropdownContent>
              <Autocomplete :options="swissCantons" v-model="autocompleteStatic" searchKey="title">
                <Suggestions>
                  <template #default="props">
                    <Suggestion v-bind="props">{{ props.suggestion.title }}</Suggestion>
                  </template>
                </Suggestions>
                <NoSuggestions></NoSuggestions>
              </Autocomplete>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
      <div>
        <pre>{{ autocompleteStatic }}</pre>
      </div>
    </div>

    <h2>MultiSelect Select</h2>
    <div class="flex gap-8">
      <div class="flex gap-4 items-center text-black">
        <div>
          <label for="autocompleteStaticMulti">Select Canton</label>
          <div role="group" v-if="autocompleteStaticMulti.length > 0">
            <div v-for="tag in autocompleteStaticMulti" :key="tag.abbreviation">
              <Checkbox :id="tag.title" :value="tag" v-model="autocompleteStaticMulti"> </Checkbox>
              <label :for="tag.title">{{ tag.title }}</label>
            </div>
          </div>
          <Dropdown>
            <DropdownButton
              id="autocompleteStaticMulti"
              class="bg-blue-800 text-white min-h-[46px] max-h-[46px] whitespace-nowrap truncate px-3 max-w-[200px] border-white text-left"
              >Search...</DropdownButton
            >
            <DropdownContent>
              <Autocomplete
                :options="swissCantons"
                v-model="autocompleteStaticMulti"
                searchKey="title"
              >
              </Autocomplete>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
      <div>
        <pre>{{ autocompleteStaticMulti }}</pre>
      </div>
    </div>
    <h2>Async Single Select</h2>
    <label for="canton">Select Canton</label>
    <Dropdown>
      <DropdownButton id="canton">{{ autocompleteStatic ?? 'please select' }}</DropdownButton>
      <DropdownContent>
        <Autocomplete :options="searchSwissCantons" v-model="autocompleteStatic" searchKey="title">
        </Autocomplete>
      </DropdownContent>
    </Dropdown>

    <h2>Async MultiSelect Select</h2>
    <label for="autocompleteStaticMulti">Select Canton</label>
    <Dropdown>
      <DropdownButton id="autocompleteStaticMulti">{{
        autocompleteStaticMulti ?? 'please select'
      }}</DropdownButton>
      <DropdownContent>
        <Autocomplete
          :options="searchSwissCantons"
          v-model="autocompleteStaticMulti"
          searchKey="title"
        >
          <Search></Search>
          <Suggestions></Suggestions>
          <NoSuggestions></NoSuggestions>
        </Autocomplete>
      </DropdownContent>
    </Dropdown>
    <label for="wurst"></label>
    <ModalButton id="wurst" name="auto">{{ autocompleteStaticMulti }}</ModalButton>

    <Modal name="auto">
      <Autocomplete
        :options="searchSwissCantons"
        v-model="autocompleteStaticMulti"
        searchKey="title"
        groupKey="genre"
        :sortKeys="['genre', 'title']"
      >
      </Autocomplete>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Switch } from '@aleksejdix/switch/src'
import { Checkbox } from '@aleksejdix/checkbox/src'
import {
  Autocomplete,
  NoSuggestions,
  Suggestions,
  Suggestion,
  Search
} from '@aleksejdix/autocomplete/src'
import { DropdownContent, Dropdown, DropdownButton } from '@/components/Dropdown'
import { swissCantons, searchSwissCantons, people } from '@aleksejdix/autocomplete/data'
import { Modal, ModalButton } from '@aleksejdix/modal/src'

const options = ['banana', 'apple', 'cherry']

const bool = ref(false)

const neutral = ref()

const select = ref<any[]>([])
const multiSelect = ref<any[]>([])

const autocompleteStatic = ref()
const autocompleteStaticMulti = ref<any[]>([])

const peopleSelection = ref()
</script>
