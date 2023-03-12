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

interface Rect {
  top: number
  right: number
  bottom: number
  left: number
}

// const zip = (a: any[], b: any[]) => a.map((k, i) => [k, b[i]])
// const yFlip = computed(() => pos.value.reverse())
// const xFlip = computed(() => pos.value.map((row) => row.reverse()))
// const xyFlip = computed(() => pos.value.reverse().map((row) => row.reverse()))

function getViewportRect() {
  return {
    top: 0,
    left: 0,
    bottom: window.innerHeight,
    right: window.innerWidth,
    width: window.innerWidth,
    height: window.innerHeight
  }
}

function isCollidingFixed(boundary: Rect, targetRect: Rect) {
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

const tRect = reactive(useElementBounding(button))
const dRect = reactive(useElementBounding(content))

const x = computed(() => [-dRect.width, tRect.width - dRect.width, 0, tRect.width])
const y = computed(() => [-dRect.height, tRect.height - dRect.height, 0, tRect.height])

/*
    0   1
  ┌───┬───┬
0 │ X │ X │ => top left / top right
  ├───┼───┼
1 │ X │ x │ => left top / right top
  ├───┼───┼
2 │ X │ X │ => left bottom / right bottom
  ├───┼───┼
3 │ X │ X │ => bottom left / bottom right
  └───┴───┴
*/

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

/*
    0   1   2
  ┌───┬───┬───┐
0 │ X │ X │ X │
  ├───┼───┼───┤
1 │ X │   │ X │
  ├───┼───┼───┤
2 │ X │ X │ X │
  └───┴───┴───┘
*/

const collisionDetectionRect = computed(() => ({
  top: tRect.top - dRect.height,
  right: tRect.left + tRect.width + dRect.width,
  bottom: tRect.top + tRect.height + dRect.height,
  left: tRect.left - dRect.width,
  width: tRect.width + dRect.width + dRect.width,
  height: tRect.height + dRect.height + dRect.height
}))

const dropdownRect = computed(() => {
  const collision = isCollidingFixed(getViewportRect(), collisionDetectionRect.value)

  const col = collision.left ? 1 : collision.right ? 0 : 1
  const row = collision.top ? 3 : collision.bottom ? 0 : 3

  return {
    '--vuedin-dropdown-reset-x': tRect.left + 'px',
    '--vuedin-dropdown-reset-y': tRect.top + 'px',
    '--vuedin-translate-x': pos.value[row][col][0] + 'px',
    '--vuedin-translate-y': pos.value[row][col][1] + 'px'
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
  dropdownRect,
  collisionDetectionRect
})

useEscKey(close)
</script>
