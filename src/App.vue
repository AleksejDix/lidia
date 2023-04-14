<template>
  <div class="flex flex-col h-full">
    <SkipLink target="main-content">Skip to main content</SkipLink>
    <SkipLink target="navigation">Skip to navigation</SkipLink>
    <SkipLink target="footer">Skip to footer</SkipLink>
    <!-- 
        <div tag="header" id="header" class="border-b-2 sticky top-0 min-h-[56px] p-4">
          <h1>Your Dashboard Title</h1>
        </div> -->
    <div class="flex h-full grow mx-auto max-w-[1050px] w-full">
      <div tag="aside" id="navigation" class="w-[200px] p-[25px]">
        <Navigation></Navigation>
        <nav>
          <router-link class="clickable" to="/">Home</router-link>
          <span> | </span>
        </nav>
      </div>

      <div
        tag="main"
        id="main-content"
        class="mx-auto grow border-white px-[100px] py-[40px] max-w-[850px]"
      >
        <Breadcrumbs />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Breadcrumbs } from './components/Breadcrumbs'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { useEventListener } from '@vueuse/core'
import { useEscapeStore } from '@aleksejdix/focus/src'
import { SkipLink, Fly } from '@aleksejdix/focus/src'
import { Navigation } from '@/components/Navigation'

const router = useRouter()
const route = useRoute()
const escapeStore = useEscapeStore()

useEventListener(document, 'keydown', (e) => {
  if (e.key === 'Escape') {
    escapeStore.destroy()
  }
})
</script>

<style>
:root {
  @apply bg-blue-600;
  --blue-600: #2563eb;
  --white-opacity-20: rgba(255, 255, 255, 0.2);
  --white-opacity-10: rgba(255, 255, 255, 0.1);
  --accent-color: hotpink;
  color: white;
  background-color: var(--blue-600);
  background-repeat: repeat;

  background-position: top center;
}

html,
body,
#app {
  @apply h-full w-full inset-0 fixed;
}

html {
  background: linear-gradient(
      to bottom,
      transparent 0px,
      var(--white-opacity-10) 0px,
      var(--white-opacity-10) 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      transparent 0px,
      var(--white-opacity-10) 0px,
      var(--white-opacity-10) 1px,
      transparent 1px
    );
  background-size: 10px 10px;
  background-position: top center;
  background-attachment: scroll;
}

body {
  background: linear-gradient(
      to bottom,
      transparent 0px,
      var(--white-opacity-20) 0px,
      var(--white-opacity-20) 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      transparent 0px,
      var(--white-opacity-20) 0px,
      var(--white-opacity-20) 1px,
      transparent 1px
    );
  background-size: 50px 50px;
  background-position: top center;
  background-attachment: scroll;
}
</style>

<style src="@aleksejdix/focus/dist/style.css"></style>
