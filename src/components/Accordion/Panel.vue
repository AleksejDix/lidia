<template>
  <div class="bg-white shadow" ref="animate">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide, inject, toRef, ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import autoAnimate from '@formkit/auto-animate'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
    required: false
  }
})

const { panels, create, update } = inject('container')

const id = uuidv4()

function toggle() {
  update(id, !panels[id])
}

create(id, props.open)

provide('panel', {
  value: toRef(panels, id),
  id,
  toggle
})

const animate = ref()

onMounted(() => {
  autoAnimate(animate.value)
})
</script>
