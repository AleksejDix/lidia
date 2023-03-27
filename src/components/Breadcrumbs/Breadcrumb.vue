<!-- MenuRouterLink.vue -->
<template>
  <a
    v-bind="$attrs"
    :href="href"
    @click="navigate"
    :class="isActive ? activeClass : undefined"
    :ref="focus.create"
    @keydown.up.prevent
    @keydown.down.prevent
    @keydown.right.prevent="focus.next"
    @keydown.left.prevent="focus.prev"
    @keydown.space.prevent="navigate()"
    @keydown.home.prevent="focus.first"
    @keydown.end.prevent="focus.last"
    @keydown.fn+left.prevent="focus.first"
    @keydown.fn+right.prevent="focus.last"
    @keydown="focus.focusByFirstLetter"
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
