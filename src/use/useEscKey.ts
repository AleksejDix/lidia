import { useEventListener } from '@vueuse/core'

export function useEscKey(callback: () => void) {
  useEventListener(document, 'keydown', (e) => {
    if (e.key === 'Escape') {
      callback()
    }
  })
}
