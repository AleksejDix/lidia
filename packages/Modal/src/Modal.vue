<!-- Modal.vue -->
<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      role="dialog"
      aria-modal="true"
      ref="modalRef"
      class="absolute inset-0 grid place-items-start md:pt-40 h-screen"
    >
      <div
        class="fixed inset-0 cursor-pointer bg-black bg-opacity-50"
        :aria-labelledby="id"
        @click.stop="modalStore.destroy(name)"
      ></div>
      <div
        class="relative max-w-[640px] bg-blue-600 shadow-xl w-full max-h-screen mx-auto flex flex-col"
      >
        <FocusTrap>
          <slot> </slot>
        </FocusTrap>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { useModalStore } from './useModalStore'
import { FocusTrap, useEscapeStore, useFocusStore } from '@aleksejdix/focus/src'
import { useScrollLock } from '@aleksejdix/scroll/src'
import { computed, provide, watchEffect } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { ModalKey } from './symbols'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const modalStore = useModalStore()
const escapeStore = useEscapeStore()
const focusStore = useFocusStore()

const isVisible = computed(() => modalStore.is(props.name).visible)

watchEffect(
  () => {
    if (isVisible.value) {
      escapeStore.create(() => modalStore.destroy(props.name))
      focusStore.create(document.activeElement as HTMLElement)
    }
  },
  { flush: 'post' }
)

const id = `modal-title-${uuidv4()}`

useScrollLock(isVisible)

provide(ModalKey, {
  close: () => modalStore.destroy(props.name),
  id
})
</script>
