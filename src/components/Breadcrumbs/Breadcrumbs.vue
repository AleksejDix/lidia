<template>
  <nav class="flex items-center text-sm font-medium text-gray-500 space-x-2">
    <Breadcrumb :to="{ path: '/' }" class="hover:text-gray-700 transition-colors duration-200">
      Home
    </Breadcrumb>

    <template v-for="crumb in breadcrumbs" :key="crumb.link">
      <span class="mx-2" aria-hidden="true">/</span>

      <Breadcrumb
        :to="{ path: crumb.link }"
        class="hover:text-gray-700 transition-colors duration-200"
        :aria-current="crumb.current ? 'page' : null"
      >
        {{ crumb.label }}
      </Breadcrumb>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Breadcrumb } from '.'
import { useFocusCycle } from '@/components/FocusCycle'

useFocusCycle()

const route = useRoute()

// Generate breadcrumbs by splitting the current route path into segments and mapping them to objects with label,
// link, and current properties

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter((path) => path !== '')
  const crumbs = paths.map((path, index) => {
    const isLast = index === paths.length - 1
    return {
      label: path.charAt(0).toUpperCase() + path.slice(1),
      link: `/${paths.slice(0, index + 1).join('/')}`,
      current: isLast
    }
  })
  return crumbs
})
</script>
