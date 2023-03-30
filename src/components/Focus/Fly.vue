<template>
  <div class="hover-focus-container">
    <Teleport to="body">
      <div ref="hoverEffect" class="hover-effect"></div>
      <div ref="focusEffect" class="focus-effect"></div>
    </Teleport>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SELECTOR_FOCUSABLE } from './constans'

const hoverEffect = ref()
const focusEffect = ref()

const handleMouseMove = (event: any) => {
  const target = event.target as HTMLElement
  if (target && target.matches(SELECTOR_FOCUSABLE)) {
    const rect = target.getBoundingClientRect()
    const transform = `translate3d(${rect.left}px, ${rect.top}px, 0)`
    hoverEffect.value.style.transform = transform
    hoverEffect.value.style.width = `${rect.width}px`
    hoverEffect.value.style.height = `${rect.height}px`
    hoverEffect.value.style.borderRadius = '4px'
  } else {
    hoverEffect.value.style.transform = `translate3d(${event.clientX - 15}px, ${
      event.clientY - 15
    }px, 0)`
    hoverEffect.value.style.width = '30px'
    hoverEffect.value.style.height = '30px'
    hoverEffect.value.style.borderRadius = '50%'
  }
}

const handleFocus = (event: any) => {
  const target = event.target as HTMLElement
  if (target && target.matches(SELECTOR_FOCUSABLE)) {
    const rect = target.getBoundingClientRect()
    const transform = `translate3d(${rect.left}px, ${rect.top}px, 0)`
    focusEffect.value.style.transform = transform
    focusEffect.value.style.width = `${rect.width}px`
    focusEffect.value.style.height = `${rect.height}px`
    focusEffect.value.style.borderRadius = '4px'
  }
}

onMounted(() => {
  document.body.addEventListener('mousemove', handleMouseMove)
  // document.body.addEventListener('focusin', handleFocus, true)
})

onUnmounted(() => {
  document.body.removeEventListener('mousemove', handleMouseMove)
  // document.body.removeEventListener('focusin', handleFocus, true)
})
</script>

<style scoped>
.hover-focus-container {
  position: relative;
}

.hover-effect {
  @apply bg-gray-200;
  pointer-events: none;
  position: absolute;
  pointer-events: none;
  transition: transform 0.1s, width 0.1s, height 0.1s, border-radius 0.1s;
  z-index: 1000;
  mix-blend-mode: multiply;
  transition-timing-function: ease-out;
}

.focus-effect {
  position: absolute;
  pointer-events: none;
  outline: 2px solid #007bff;
  transition: transform 0.1s, width 0.1s, height 0.1s, border-radius 0.1s;
  z-index: 1001;
}
</style>
