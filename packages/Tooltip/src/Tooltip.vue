<template>
  <div>
    <slot></slot>
    <teleport to="body">
      <div
        v-show="visible"
        :style="{ left: `${position.x}px`, top: `${position.y}px` }"
        class="fixed bg-black text-white p-2 rounded-sm text-sm"
      >
        <slot></slot>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { provideTooltipContext } from './useTooltipContext'

const visible = ref(false)
const position = ref({ x: 0, y: 0 })

const show = (event: MouseEvent) => {
  position.value.x = event.clientX + 10
  position.value.y = event.clientY + 10

  visible.value = true
}

const hide = () => {
  visible.value = false
}

const tooltip = { visible, position, show, hide }

provideTooltipContext(tooltip)
</script>
