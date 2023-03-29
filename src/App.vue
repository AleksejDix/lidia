<template>
  <SkipLink target="main-content">Skip to main content</SkipLink>
  <SkipLink target="navigation">Skip to navigation</SkipLink>
  <SkipLink target="footer">Skip to footer</SkipLink>

  <Fly>
    <Landmark tag="header" id="header">
      <h1>Your Dashboard Title</h1>
    </Landmark>

    <Landmark tag="main" id="main-content">
      <Breadcrumbs />
    </Landmark>

    <div class="dashboard">
      <Landmark tag="aside" id="navigation">
        <nav>
          <router-link class="clickable" to="/">Home</router-link>
          <span> | </span>
          <Tooltip :content="'Page about you'" :position="'bottom-center'">
            <router-link class="clickable" to="/about"> About </router-link>
          </Tooltip>
        </nav>
      </Landmark>

      <Landmark tag="main" id="main-content" class="max-w-2xl mx-auto">
        <router-view />
      </Landmark>
    </div>
  </Fly>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Breadcrumbs } from './components/Breadcrumbs'
import { Tooltip } from '@/components/Tooltip'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useEventListener } from '@vueuse/core'
import { useEscapeStore } from '@/use/useEscapeStore'
import { Landmark } from '@/components/Layout'
import { SkipLink, Fly } from '@/components/Focus'

const router = useRouter()
const route = useRoute()
const escapeStore = useEscapeStore()

useEventListener(document, 'keydown', (e) => {
  if (e.key === 'Escape') {
    escapeStore.destroy()
  }
})

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

*:focus {
  outline: none;
}
</style>
