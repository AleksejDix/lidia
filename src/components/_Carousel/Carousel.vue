<template>
  <div class="carousel">
    <div class="carousel-items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="carousel-item"
        :class="{ active: index === currentIndex }"
      >
        {{ item }}
      </div>
    </div>
    <button @click="previous">Previous</button>
    <button @click="next">Next</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const items = ref(['Item 1', 'Item 2', 'Item 3'])
const currentIndex = ref(0)

const previous = () => {
  currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}
</script>
