<template>
  <router-link
    :to="to"
    role="menuitemradio"
    class="px-3 py-2 hover:bg-gray-200 rounded cursor-pointer flex"
    :aria-checked="isActive"
    :ref="focus.create"
    @keydown.up.prevent="focus.prev"
    @keydown.down.prevent="focus.next"
    @keydown.right.prevent
    @keydown.left.prevent
    @keydown.enter="emit('update:modelValue', value)"
    @keydown.space="emit('update:modelValue', value)"
    @keydown="focus.focusByFirstLetter"
  >
    <svg
      v-if="!isActive"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
    >
      <path
        d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"
      ></path>
    </svg>

    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
    >
      <path
        d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"
      ></path>
      <path d="M10.996 12.556 9.7 11.285l-1.4 1.43 2.704 2.647 4.699-4.651-1.406-1.422z"></path>
    </svg>

    <slot></slot>
  </router-link>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import { useFocusCycleItem } from '@aleksejdix/focus/src'

const focus = useFocusCycleItem()

const props = defineProps({
  value: {
    type: [String, Number],
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue'])
const route = useRoute()
const injected = inject('select')

if (!injected) {
  throw new Error('MenuRadioRouterLink must be inside MenuRadioGroup')
}

const { name } = injected

const to = computed(() => ({ ...route, query: { ...route.query, [name.value]: props.value } }))
const isActive = computed(() => route.query[name.value] === to.value.query[name.value])
</script>
