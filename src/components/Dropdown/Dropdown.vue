<template>
  <div ref="dropdown">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref, computed, reactive, watchEffect } from 'vue'
import { DropdownKey } from './symbols'
import { v4 as uuidv4 } from 'uuid'
import { useEscKey } from '@/use/useEscKey'
import { useWindowSize, useElementSize, onClickOutside, useElementBounding } from '@vueuse/core'

const button = ref()

const content = ref()

const contentRef = (el: HTMLElement) => {
  content.value = el
}

const buttonRect = reactive(useElementBounding(button))

function limitNumberInRange(num: number, min: number, max: number): number {
  if (num < min) {
    return min
  } else if (num > max) {
    return max
  } else {
    return num
  }
}

const calculations = reactive({
  button: computed(() => {
    return {
      left: Math.round(buttonRect.left),
      top: Math.round(buttonRect.top),
      width: buttonRect.width,
      height: buttonRect.height
    }
  }),
  content: useElementSize(content),
  boundary: useWindowSize(),
  placement: computed(() => ({})),
  axis: {
    x: computed(() => [
      -calculations.content.width,
      calculations.button.width - calculations.content.width,
      0,
      calculations.button.width
    ]),
    y: computed(() => [
      -calculations.content.height,
      calculations.button.height - calculations.content.height,
      0,
      calculations.button.height
    ])
  },
  collision: computed(() => {
    return {
      top: 0, //calculations.content.top < 0,
      right: 0, // calculations.content.left + > calculations.viewport.right,
      bottom: 0, //  calculations.content.left > calculations.viewport.bottom,
      left: 0 //  calculations.content.left < 0
    }
  })
})

// const zip = (a: any[], b: any[]) => a.map((k, i) => [k, b[i]])
// const yFlip = computed(() => pos.value.reverse())
// const xFlip = computed(() => pos.value.map((row) => row.reverse()))
// const xyFlip = computed(() => pos.value.reverse().map((row) => row.reverse()))

const id = uuidv4()
const dropdown = ref()

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

onClickOutside(content, () => close())

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
    [calculations.axis.x[1], calculations.axis[0]],
    [calculations.axis.x[2], calculations.axis[0]]
  ],
  [
    [calculations.axis.x[0], calculations.axis.y[1]],
    [calculations.axis.x[3], calculations.axis.y[1]]
  ],
  [
    [calculations.axis.x[0], calculations.axis.y[2]],
    [calculations.axis.x[3], calculations.axis.y[2]]
  ],
  [
    [calculations.axis.x[1], calculations.axis.y[3]],
    [calculations.axis.x[2], calculations.axis.y[3]]
  ]
])

const dropdownRect = computed(() => {
  const col = 1 // collision.left ? 1 : collision.right ? 0 : 1
  const row = 3 // collision.top ? 3 : collision.bottom ? 0 : 3

  console.log(
    limitNumberInRange(
      calculations.button.left,
      calculations.button.left + calculations.axis.x[1],
      calculations.boundary.width - calculations.button.left
    )
  )

  return {
    '--vuedin-dropdown-reset-x':
      limitNumberInRange(
        calculations.button.left + 10,
        calculations.button.left,
        calculations.boundary.width - calculations.content.width
      ) + 'px',
    '--vuedin-dropdown-reset-y':
      limitNumberInRange(
        calculations.button.top + calculations.button.height,
        calculations.button.top,
        calculations.boundary.height - calculations.content.height
      ) + 'px'
    // '--vuedin-translate-x': pos.value[row][col][0] + 'px',
    // '--vuedin-translate-y': pos.value[row][col][1] + 'px'
    // '--vuedin-offset-x': calculations.correction.right + 'px',
    // '--vuedin-offset-y': calculations.correction.bottom + 'px'
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
  calculations
})

useEscKey(close)
</script>
