import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useViewport() {
  const offsetTop = ref()
  const height = ref()
  const width = ref()

  const update = () => {
    if (window.visualViewport) {
      height.value = visualViewport?.height
      width.value = visualViewport?.width
    }
  }

  onMounted(() => {
    window.visualViewport?.addEventListener('resize', update)
    window.visualViewport?.addEventListener('scroll', update)
    update()
  })

  onBeforeUnmount(() => {
    window.visualViewport?.removeEventListener('resize', update)
    window.visualViewport?.removeEventListener('scroll', update)
  })

  return {
    offsetTop,
    height,
    width
  }
}
