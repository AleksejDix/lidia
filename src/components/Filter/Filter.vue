<template>
  <slot :handleInputChange="handleInputChange"></slot>
</template>

<script lang="ts" setup>
import { defineProps, inject } from 'vue'

const props = defineProps({
  parameter: String
})

const filtersInjector = inject('filters')

if (!filtersInjector) {
  throw new Error(`Could not resolve ${filtersInjector}`)
}

const { filters, update } = filtersInjector

const handleInputChange = (event: Event) => {
  update(props.parameter, (event.target as HTMLInputElement).value)
}
</script>
