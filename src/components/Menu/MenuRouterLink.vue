<!-- MenuRouterLink.vue -->
<template>
  <a
    v-bind="$attrs"
    :href="href"
    @click="navigate"
    :class="isActive ? activeClass : undefined"
    :ref="focus.create"
    role="menuitem"
    class="py-2 px-4 block w-full text-left focus:bg-pink-900 focus:outline-none"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.space.prevent="$emit('click')"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { RouterLink, useLink } from 'vue-router'
import { useFocusCycleItem } from '../FocusCycle'

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
