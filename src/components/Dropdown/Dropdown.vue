<template>
  <div ref="dropdown">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref, computed, reactive } from 'vue'
import { DropdownKey } from './symbols'
import { v4 as uuidv4 } from 'uuid'
import { useEscKey } from '@/use/useEscKey'
import { useElementBounding } from '@vueuse/core'
import autoAnimate from '@formkit/auto-animate'

const zip = (a: any[], b: any[]) => a.map((k, i) => [k, b[i]])

function getViewportRect() {
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  const scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  const viewportTop = scrollTop
  const viewportLeft = scrollLeft
  const viewportBottom = scrollTop + viewportHeight
  const viewportRight = scrollLeft + viewportWidth

  return {
    top: viewportTop,
    left: viewportLeft,
    bottom: viewportBottom,
    right: viewportRight,
    width: viewportWidth,
    height: viewportHeight
  }
}

function isCollidingFixed(boundary, targetRect) {
  console.log(boundary, targetRect)
  return {
    top: targetRect.top < boundary.top,
    right: targetRect.right > boundary.right,
    bottom: targetRect.bottom > boundary.bottom,
    left: targetRect.left < boundary.left
  }
}

const id = uuidv4()
const dropdown = ref()
const button = ref()
const content = ref()

const contentRef = (el: HTMLElement) => {
  content.value = el
}

const isVisible = ref(false)

function toggle() {
  isVisible.value = !isVisible.value
}

async function open() {
  isVisible.value = true
}

async function close() {
  isVisible.value = false
}

const buttonRect = reactive(useElementBounding(button))
const boxRect = reactive(useElementBounding(content))

const x = computed(() => [-boxRect.width, buttonRect.width - boxRect.width, 0, buttonRect.width])

const y = computed(() => [
  -boxRect.height,
  buttonRect.height - boxRect.height,
  0,
  buttonRect.height
])

const collisionDetectionRect = computed(() => ({
  top: buttonRect.top - boxRect.height,
  right: buttonRect.left + buttonRect.width + boxRect.width,
  bottom: buttonRect.top + buttonRect.height + boxRect.height,
  left: buttonRect.left - boxRect.width,
  width:
    buttonRect.left + buttonRect.width + boxRect.width + Math.abs(buttonRect.left - boxRect.width),
  height:
    buttonRect.top + buttonRect.height + boxRect.height + Math.abs(buttonRect.top - boxRect.height)
}))

const pos = computed(() => [
  [
    [x.value[1], y.value[0]],
    [x.value[2], y.value[0]]
  ],
  [
    [x.value[0], y.value[1]],
    [x.value[3], y.value[1]]
  ],
  [
    [x.value[0], y.value[2]],
    [x.value[3], y.value[2]]
  ],
  [
    [x.value[1], y.value[3]],
    [x.value[2], y.value[3]]
  ]
])

const possibleCollisions = ['top', 'right', 'bottom', 'left']

const yFlip = computed(() => pos.value.reverse())
const xFlip = computed(() => pos.value.map((row) => row.reverse()))
const xyFlip = computed(() => pos.value.reverse().map((row) => row.reverse()))

const dropdownRect = computed(() => {
  console.log(isCollidingFixed(getViewportRect(), collisionDetectionRect.value))

  return {
    '--vuedin-dropdown-reset-x': buttonRect.left + 'px', // xFlip.value[3][1][0],
    '--vuedin-dropdown-reset-y': buttonRect.top + 'px', // xFlip.value[3][1][1]
    '--vuedin-translate-x': pos.value[3][1][0] + 'px',
    '--vuedin-translate-y': pos.value[3][1][1] + 'px'
  }
})

provide(DropdownKey, {
  button,
  contentRef,
  isVisible,
  id,
  toggle,
  open,
  close,
  dropdownRect
})

useEscKey(close)
</script>
