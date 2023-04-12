<!-- Ghost.vue -->
<template>
  <div class="text-blue-300" v-show="!!ghost">
    <slot
      v-bind="{
        ghost
      }"
    >
      {{ ghost }}
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'

const { ghost } = useAutocompleteContext()
</script>
