// useBodyScrollLock.ts
import { watch, onUnmounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'

export function useScrollLock(visibleRef: Ref | ComputedRef) {
  const lockBodyScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const unlockBodyScroll = () => {
    document.body.style.overflow = ''
  }

  watch(visibleRef, (visible) => {
    if (visible) {
      lockBodyScroll()
    } else {
      unlockBodyScroll()
    }
  })

  onUnmounted(() => {
    unlockBodyScroll()
  })
}
