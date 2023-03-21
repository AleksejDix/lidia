// useBodyScrollLock.ts
import { watch, onUnmounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'

export function useBodyScrollLock(visibleRef: Ref | ComputedRef) {
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

  // Clean up on unmount
  onUnmounted(() => {
    unlockBodyScroll()
  })
}
