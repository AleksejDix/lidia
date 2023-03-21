// useStack.ts
import { ref, computed } from 'vue'

export function useStack() {
  const stack = ref<any[]>([])

  const push = (item: any) => {
    stack.value.push(item)
  }

  const pop = () => {
    return stack.value.pop()
  }

  const remove = (item: any) => {
    const index = stack.value.indexOf(item)
    if (index !== -1) {
      stack.value.splice(index, 1)
    }
  }

  const top = computed(() => {
    if (stack.value.length === 0) return undefined
    return stack.value[stack.value.length - 1]
  })

  const clear = () => {
    stack.value = []
  }

  const isEmpty = computed(() => stack.value.length === 0)

  const size = computed(() => {
    return stack.value.length
  })

  const includes = (item: any) => {
    return stack.value.includes(item)
  }

  const toArray = () => {
    return stack.value.slice()
  }

  return {
    stack,
    push,
    pop,
    clear,
    remove,
    top,
    size,
    includes,
    toArray,
    isEmpty
  }
}
