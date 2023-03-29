<template>
  <nav class="menu">
    <ul class="menu-list">
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const routes = router.getRoutes()
</script>
