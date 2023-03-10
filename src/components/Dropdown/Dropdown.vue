<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref, nextTick, onMounted } from 'vue'
import { DropdownKey } from './symbols'
import { v4 as uuidv4 } from 'uuid'
import autoAnimate from '@formkit/auto-animate'
import { useEventListener } from '@vueuse/core'

const id = uuidv4()
const button = ref()

const isVisible = ref(false)

function toggle() {
  if (isVisible.value) {
    close()
  } else {
    open()
  }
}

async function open() {
  isVisible.value = true
  await nextTick()
}

async function close() {
  isVisible.value = false
  await nextTick()
  button.value.focus()
}

provide(DropdownKey, {
  button,
  isVisible,
  id,
  toggle,
  open,
  close
})

useEventListener(document, 'keydown', (e) => {
  if (e.key === 'Escape') {
    close()
  }
})
</script>
