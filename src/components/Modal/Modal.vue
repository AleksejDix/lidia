<!-- Modal.vue -->
<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-yellow-400 bg-opacity-20"
      :aria-labelledby="`modal-title-${name}`"
      @click.stop="modalStore.destroy(name)"
    ></div>
    <div
      v-if="isVisible"
      role="dialog"
      aria-modal="true"
      ref="modalRef"
      class="absolute inset-0 z-10 grid place-items-center"
    >
      <div class="border rounded max-w-md bg-white max-h-screen mx-auto flex flex-col">
        <FocusTrap>
          <div class="flex justify-between items-center mb-6">
            <h2 :id="`modal-title-${name}`"><slot name="title">Modal Title</slot></h2>
            <button @click="modalStore.destroy(name)">close</button>
          </div>
          <div class="overflow-y-auto max-h-[calc(100vh-12rem)]">
            <slot> </slot>
          </div>
        </FocusTrap>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { useModalStore } from './useModalStore'
import { useEscKey } from '@/use/useEscKey'
import { FocusTrap } from '@/components/FocusTrap'
import { useBodyScrollLock } from '../ScrollLock'
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const modalStore = useModalStore()

useEscKey(() => modalStore.destroy(props.name))

const isVisible = computed(() => modalStore.is(props.name).visible)

useBodyScrollLock(isVisible)
</script>
