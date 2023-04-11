<!-- Search.vue -->
<template>
  <input class="border-2 border-black text-black focus:bg-yellow-400" type="text" v-model="query" />
</template>

<script lang="ts" setup>
import { useAutocompleteContext } from '../use/useAutocompleteContext'

const { query } = useAutocompleteContext()
</script>
