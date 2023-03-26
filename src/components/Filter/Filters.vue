<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { provide, reactive } from 'vue'
import { useRouter } from 'vue-router'

type DynamicFilters = Record<string, string | string[] | null>

const router = useRouter()
const filters = reactive<DynamicFilters>({})

const update = (key: string, value: string | string[] | null) => {
  filters[key] = value
  router.replace({ query: { ...filters } })
}

provide('filters', {
  filters,
  update
})
</script>
