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

const contentRect = useElementSize(content)

const window = useWindowSize()

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

const calculations = reactive({
  button: computed(() => {
    return {
      left: Math.round(buttonRect.left),
      top: Math.round(buttonRect.top),
      width: Math.round(buttonRect.width),
      height: Math.round(buttonRect.height)
    }
  }),
  content: computed(() => {
    return {
      width: Math.round(contentRect.width.value),
      height: Math.round(contentRect.height.value)
    }
  }),
  boundary: computed(() => {
    return {
      width: window.width.value,
      height: window.height.value
    }
  }),
  placement: computed(() => {
    let placement = 0

    const isRight =
      calculations.button.left + calculations.button.width / 2 >
      calculations.boundary.width - calculations.content.width
    const isBottom =
      calculations.button.top + calculations.button.height / 2 >
      calculations.boundary.height - calculations.content.height

    if (isRight) {
      placement++
    }

    if (isBottom) {
      placement++
      placement++
    }

    return placement
  }),
  axis: {
    x: computed(() => [
      -calculations.content.width,
      calculations.button.width - calculations.content.width, // -100
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
  }),
  overflow: computed(() => {
    return {
      right: Math.max(
        calculations.button.left + calculations.content.width - calculations.boundary.width,
        0
      ),
      left: Math.min(0 - calculations.button.left, 0),
      bottom: null,
      top: Math.min(calculations.button.top, 0)
    }
  })
})

const commonX = -calculations.button.width / 2 - calculations.content.width / 2
const commonY = -calculations.button.height / 2 - calculations.content.height / 2

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
    clamp(calculations.overflow.right * -1, calculations.axis.x[1], calculations.axis.x[3]),
    calculations.axis.y[3]
  ],
  [
    clamp(calculations.overflow.left, calculations.axis.x[1], calculations.axis.x[3]),
    calculations.axis.y[3]
  ],
  [
    clamp(calculations.overflow.right * -1, calculations.axis.x[1], calculations.axis.x[3]),
    calculations.axis.y[0]
  ],
  [
    clamp(calculations.overflow.left, calculations.axis.x[1], calculations.axis.x[3]),
    calculations.axis.y[0]
  ]

  // [
  //   [calculations.axis.x[0], calculations.axis.y[1]],
  //   [calculations.axis.x[3], calculations.axis.y[1]]
  // ],
  // [
  //   [calculations.axis.x[0], calculations.axis.y[2]],
  //   [calculations.axis.x[3], calculations.axis.y[2]]
  // ],
])

const dropdownRect = computed(() => {
  console.log(pos.value)

  return {
    '--vuedin-dropdown-reset-x': calculations.button.left + 'px',
    '--vuedin-dropdown-reset-y': calculations.button.top + 'px',
    '--vuedin-translate-x': pos.value[calculations.placement][0] + 'px',
    '--vuedin-translate-y': pos.value[calculations.placement][1] + 'px'

    // limitNumberInRange(
    //   calculations.button.top + calculations.button.height,
    //   calculations.button.top,
    //   calculations.boundary.height -
    //     calculations.content.height +
    //     Math.max(
    //       calculations.button.top + calculations.button.height - calculations.boundary.height,
    //       0
    //     )
    // )

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
