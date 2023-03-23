// useFocusReturn.ts
import { type Ref, ref, onMounted, onUnmounted } from 'vue'

export function useFocusReturn(triggerElement: HTMLElement | null) {
  const focusReturnElement: Ref<HTMLElement | null> = ref(triggerElement)

  onMounted(() => {
    focusReturnElement.value = document.activeElement as HTMLElement
  })

  onUnmounted(() => {
    if (focusReturnElement.value) {
      setTimeout(() => {
        focusReturnElement.value?.focus()
      }, 0)
    }
  })

  return {
    focusReturnElement
  }
}
