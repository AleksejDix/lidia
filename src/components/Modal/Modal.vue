<template>
  <Teleport to="body">
    <div
      v-if="is.opened"
      class="fixed inset-0"
      aria-labelledby="my-dialog-title"
      @click="destroy()"
    ></div>
    <div
      v-if="is.opened"
      role="dialog"
      aria-modal="true"
      ref="modalRef"
      id="modal"
      class="absolute inset-0 z-10 bg-black bg-opacity-60 flex justify-center items-center"
    >
      <div id="modal" class="bg-white rounded p-6 max-w-md">
        <FocusTrap>
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold">Modal Title</h2>
            <button class="text-2xl font-bold" @click="destroy">&times;</button>
          </div>
          <slot> </slot>
        </FocusTrap>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, provide, computed, watchEffect } from 'vue'
import type { ComputedRef } from 'vue'
import { useEscKey } from '@/use/useEscKey'
import { FocusTrap } from '@/components/FocusTrap'
import { ModalKey } from './symbols'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const state = ref(true)
const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
document.body.style.overflow = 'hidden'

watchEffect(() => {
  state.value = props.modelValue
})

const create = () => {
  state.value = true
}

const destroy = () => {
  state.value = false
  document.body.style.overflow = 'auto'
  window.scrollTo(0, scrollPosition)
}

useEscKey(close)

const is = computed(() => {
  return {
    opened: state.value === true,
    closed: state.value === false
  }
})

const modalRef = ref(null)

provide(ModalKey, { create, destroy, is })
</script>
