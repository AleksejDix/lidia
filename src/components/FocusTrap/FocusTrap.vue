<template>
  <div ref="focustrap" class="focus-trap" @focusout="onFocusOut" @keydown.tab="onKeyDown">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import { SELECTOR_FOCUSABLE } from './constans'

const focustrap = ref()
let animationId: number

function onFocusOut() {
  // restore Focus is this is lost.
  // can happen during development when hot mudule replacement kicks in
  animationId = requestAnimationFrame(() => {
    const isVisible = Boolean(focustrap.value?.offsetParent)
    const isTrapped = Boolean(document.activeElement?.closest('.focus-trap'))

    if (isVisible && !isTrapped) {
      focustrap.value.focus()
    }
  })
}

function onKeyDown(event: KeyboardEvent) {
  const { activeElement } = document
  const elements = focustrap.value.querySelectorAll(SELECTOR_FOCUSABLE)
  const firstElement = elements[0]
  const lastElement = elements[elements.length - 1]

  // Cycle focus of child elements.
  if (event.shiftKey) {
    if (focustrap.value === activeElement || firstElement === activeElement) {
      event.preventDefault()
      lastElement.focus()
    }
  } else {
    if (lastElement === activeElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }
}

onBeforeMount(() => {
  cancelAnimationFrame(animationId)
})

onMounted(() => {
  const [first] = Array.from(focustrap.value.querySelectorAll(SELECTOR_FOCUSABLE))
  if (first) {
    ;(first as HTMLElement).focus()
  }
})
</script>
