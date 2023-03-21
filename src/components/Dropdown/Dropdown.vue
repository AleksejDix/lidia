<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { provide, ref, computed, reactive, onMounted, onUnmounted, watchEffect } from 'vue'
import { DropdownKey } from './symbols'
import { v4 as uuidv4 } from 'uuid'
import { useViewport } from '../Viewport'
import { useElementSize, useElementBounding } from '@vueuse/core'
import { useEscapeStore } from '@/use/useEscapeStore'

const button = ref()

const content = ref()

const contentRef = (el: HTMLElement) => {
  content.value = el
}

const buttonRect = reactive(useElementBounding(button))

const contentRect = useElementSize(content)

const viewport = useViewport()

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

const calculations: any = reactive({
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
      width: viewport.width.value,
      height: viewport.height.value,
      offset: viewport.offsetTop.value
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

const id = uuidv4()

const isVisible = ref(false)

function toggle() {
  isVisible.value = !isVisible.value
}

function open() {
  isVisible.value = true
}

function close() {
  isVisible.value = false
}

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
  return {
    '--vuedin-dropdown-reset-x': calculations.button.left + 'px',
    '--vuedin-dropdown-reset-y': calculations.button.top + 'px',
    '--vuedin-translate-x': pos.value[calculations.placement][0] + 'px',
    '--vuedin-translate-y': pos.value[calculations.placement][1] + 'px'
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

const escapeStore = useEscapeStore()

watchEffect(() => {
  if (isVisible.value) {
    escapeStore.create(() => close())
  }
})
</script>
