<!-- Suggestions.vue -->
<template>

  <ul class="overflow-y-auto max-h-[200px]">

    <li v-for="group in groups" :key="group.letter">

      <li role="group">
        <h3 v-if="group.name" role="representation" class="uppercase px-4 text-xs sticky top-0 bg-blue-700">{{ group.name }}</h3>
        <ul>
          <li
            role="option"
            v-for="suggestion in group.children"
            :key="suggestion[uniqueKey as keyof typeof suggestion]"
          >          
            <slot
              v-bind="{
                suggestion,
                isHighlighted: isHighlighted(suggestion.index)
              }"
            >
              <Suggestion
                :suggestion="suggestion"
                :isHighlighted="isHighlighted(suggestion.index)"
                @mouseenter="highlight(suggestion.index)"
              >
              </Suggestion>
            </slot>
          </li>
        </ul>
      </li>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useVirtualList } from '@vueuse/core'
import { useAutocompleteContext } from '../use/useAutocompleteContext'
import { Suggestion } from '.'

const { uniqueKey, isHighlighted, highlight, groups } = useAutocompleteContext()
</script>
