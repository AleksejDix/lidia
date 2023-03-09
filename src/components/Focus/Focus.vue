<template>
  <div ref="focus" id="flying-focus" :style="{ transitionDuration: DURATION / 1000 + 's' }"></div>
</template>

<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { ref, computed } from 'vue'
let focus = ref()
let DURATION = 300
let movingId = 0
let prevFocused: HTMLElement | null = null
let keyDownTime = ref(0)

function onKeydown(event: KeyboardEvent) {
  const keys = ['Tab', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']
  if (!keys.includes(event.key)) return
  keyDownTime.value = Date.now()
}

useEventListener(document, 'keydown', onKeydown)

const isJustPressed = computed(() => Date.now() - keyDownTime.value < 42)

useEventListener(document, 'blur', onEnd, true)

useEventListener(document, 'focus', onFocus, true)

function onFocus(event: FocusEvent) {
  const target = event.target as HTMLElement
  if (target.id === 'flying-focus') return

  let isFirstFocus = false
  if (!focus.value) {
    isFirstFocus = true
  }

  var offset = offsetOf(target)
  focus.value.style.left = offset.left + 'px'
  focus.value.style.top = offset.top + 'px'
  focus.value.style.width = target.offsetWidth + 'px'
  focus.value.style.height = target.offsetHeight + 'px'

  if (isFirstFocus || !isJustPressed.value) {
    return
  }

  onEnd()
  target.classList.add('flying-focus_target')
  focus.value.classList.add('flying-focus_visible')
  prevFocused = target
}

function onEnd() {
  if (!movingId) {
    return
  }

  movingId = 0
  focus.value.classList.remove('flying-focus_visible')
  prevFocused.classList.remove('flying-focus_target')
  prevFocused = null
}

function offsetOf(element) {
  var rect = element.getBoundingClientRect()
  var clientLeft = document.documentElement.clientLeft || document.body.clientLeft
  var clientTop = document.documentElement.clientTop || document.body.clientTop
  var scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
  var scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  var left = rect.left + scrollLeft - clientLeft
  var top = rect.top + scrollTop - clientTop
  return {
    top: top || 0,
    left: left || 0
  }
}
</script>

<style>
*:focus {
  outline: none;
}
#flying-focus {
  position: absolute;
  margin: 0;
  background: transparent;
  transition-property: left, top, width, height;
  transition-timing-function: cubic-bezier(0, 1, 0, 1);
  visibility: hidden;
  pointer-events: none;
  @apply outline outline-2 outline-offset-2 outline-pink-600;
}
#flying-focus.flying-focus_visible {
  visibility: visible;
  z-index: 9999;
}
.flying-focus_target {
  outline: none !important; /* Doesn't work in Firefox :( */
}
/* http://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links/199319 */
.flying-focus_target::-moz-focus-inner {
  border: 0 !important;
}
/* Replace it with @supports rule when browsers catch up */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  #flying-focus {
    @apply rounded outline outline-2 outline-offset-2 outline-pink-600;
  }
}
</style>
