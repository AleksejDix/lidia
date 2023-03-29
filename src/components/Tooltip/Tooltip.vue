<template>
  <div class="tooltip-container">
    <div
      ref="trigger"
      :aria-describedby="tooltipId"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <slot></slot>
    </div>
    <transition name="fade">
      <Teleport to="body">
        <div
          v-if="isVisible"
          ref="tooltip"
          class="fixed"
          :style="tooltipStyle"
          :id="tooltipId"
          role="tooltip"
        >
          {{ tooltipStyle }}
        </div>
      </Teleport>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useElementBounding, useElementSize } from '@vueuse/core'
import { useViewport } from '../Viewport'
import { usePlacement, Position } from './usePlacement'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: false
  }
})

const trigger = ref()
const tooltip = ref()
const isVisible = ref(false)

const triggerRect = useElementBounding(trigger)
const contentRect = useElementBounding(tooltip)
const viewport = useViewport()

const { pos } = usePlacement({
  buttonRect: {
    top: triggerRect.top.value,
    left: triggerRect.left.value,
    width: triggerRect.width.value,
    height: triggerRect.height.value
  },
  contentRect: {
    top: contentRect.top.value,
    left: contentRect.left.value,
    width: contentRect.width.value,
    height: contentRect.height.value
  },
  boundary: {
    width: viewport.width.value,
    height: viewport.height.value,
    offset: viewport.offsetTop.value
  },
  position: 'bottom-'
})

const tooltipStyle = computed(() => ({
  left: `${triggerRect.left.value + triggerRect.width.value + pos.value[0]}px`,
  top: `${triggerRect.top.value + triggerRect.height.value + pos.value[1]}px`
}))

function open() {
  isVisible.value = true
}

function close() {
  isVisible.value = false
}

const tooltipId = uuidv4()

let hoverTimeout: number | undefined = undefined

function handleMouseEnter() {
  clearTimeout(hoverTimeout)
  hoverTimeout = window.setTimeout(() => {
    isVisible.value = true
  }, 500) // Adjust the delay time (in milliseconds) as needed
}

function handleMouseLeave() {
  clearTimeout(hoverTimeout)
  hoverTimeout = window.setTimeout(() => {
    isVisible.value = false
  }, 500) // Adjust the delay time (in milliseconds) as needed
}
</script>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
