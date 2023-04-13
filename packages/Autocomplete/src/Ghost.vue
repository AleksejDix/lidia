<!-- Ghost.vue -->
<template>
  <div class="text-opacity-50" v-show="!!ghost">
    <slot
      v-bind="{
        ghost,
        searchKey
      }"
    >
      {{ ghost?.[searchKey] }}
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'
const { ghost, searchKey } = useAutocompleteContext()
</script>
