<!-- Carousel.vue -->
<template>
  <div
    role="region"
    aria-label="carousel"
    aria-roledescription="carousel"
    @mouseover="pause"
    @mouseleave="resume"
    @focusin="pause"
    @focusout="resume"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, useSlots, onMounted, onUpdated } from 'vue'
import { createCarouselContext } from './useCarouselContext'
const slots = useSlots()

const slides = ref([])

const activeIndex = ref(0)
const count = ref(2)

const select = (index: number) => {
  activeIndex.value = index
}

const prev = () => {
  select((activeIndex.value - 1 + count.value) % count.value)
}

const next = () => {
  select((activeIndex.value + 1) % count.value)
}

let autoRotateInterval: ReturnType<typeof setInterval> | undefined = undefined

const pause = () => {
  clearInterval(autoRotateInterval)
}

const resume = () => {
  autoRotateInterval = setInterval(
    () => select((activeIndex.value + 1) % slides.value.length),
    3000
  )
}

const updateSlidesCount = () => {
  const slotContent = slots.default?.() ?? []
  const slideInstances = slotContent.filter((vNode) => {
    return vNode.type === 'CarouselSlide'
  })
  count.value = slideInstances.length
}

onMounted(updateSlidesCount)
onUpdated(updateSlidesCount)

createCarouselContext({
  resume,
  pause,
  select,
  next,
  prev
})
</script>
