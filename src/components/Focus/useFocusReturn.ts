// useFocusReturn.ts
import { onBeforeMount, onBeforeUnmount, nextTick } from 'vue'

export function useFocusReturn() {
  let previousFocusedElement: HTMLElement | null

  onBeforeMount(() => {
    // Store the previously focused element before activating the focus trap.
    previousFocusedElement = document.activeElement as HTMLElement
  })

  onBeforeUnmount(() => {
    // Restore focus to the previously focused element when the focus trap is deactivated.
    nextTick(() => {
      if (previousFocusedElement) {
        previousFocusedElement.focus()
      }
    })
  })
}
