<!-- MenuRouterLink.vue -->
<template>
  <a
    :href="href"
    @click="navigate"
    :class="isActive ? activeClass : undefined"
    :ref="focus.create"
    role="menuitem"
    class="py-2 px-4 block w-full text-left focus:bg-purple-100 focus:outline-none"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.space.prevent="navigate()"
    @keydown="focus.focusByFirstLetter"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { RouterLink, useLink } from 'vue-router'
import { useFocusCycleItem } from '@/components/Focus'

const props = defineProps({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ...RouterLink.props
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { href, isActive, isExactActive, navigate, route } = useLink(props)

const focus = useFocusCycleItem()
</script>
