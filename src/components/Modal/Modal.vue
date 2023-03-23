<!-- Modal.vue -->
<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      role="dialog"
      aria-modal="true"
      ref="modalRef"
      class="absolute inset-0 grid place-items-center"
    >
      <div
        class="fixed inset-0 cursor-pointer"
        :aria-labelledby="id"
        @click.stop="modalStore.destroy(name)"
      ></div>
      <div class="relative border rounded max-w-md max-h-screen mx-auto flex flex-col bg-black">
        <FocusTrap>
          <slot> </slot>
        </FocusTrap>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { useModalStore } from './useModalStore'
import { FocusTrap } from '@/components/FocusTrap'
import { useBodyScrollLock } from '../ScrollLock'
import { computed, onMounted, provide, watchEffect } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { ModalKey } from './symbols'
import { useEscapeStore } from '@/use/useEscapeStore'
import { useFocusStore } from '@/use/useFocusStore'

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

useBodyScrollLock(isVisible)

provide(ModalKey, {
  close: () => modalStore.destroy(props.name),
  id
})
</script>
