<template>
  <div class="h-[3000px]">
    <nav>
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
    </nav>
    <Breadcrumbs />
    <router-view :route="routeWithModal" />
    <Pagination :items-per-page="10" :total-items="100" />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Breadcrumbs } from './components/Breadcrumbs'
import { Pagination } from './components/Pagination'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const routeWithModal = computed(() => {
  if (history.state && history.state.backgroundView) {
    return router.resolve(history.state.backgroundView)
  } else {
    return route
  }
})
</script>

<style>
:root {
  --accent-color: hotpink;
}
</style>
