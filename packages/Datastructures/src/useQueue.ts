import { ref, type Ref, computed } from 'vue'

export function useQueue<T>() {
  const queue = ref<T[]>([]) as Ref<T[]>

  function enqueue(item: T): void {
    queue.value.push(item)
  }

  function dequeue(): T | undefined {
    if (queue.value.length > 0) {
      return queue.value.shift()
    }
    return undefined
  }

  function front(): T | undefined {
    return queue.value[0] || undefined
  }

  function peekBack(): T | undefined {
    return queue.value[queue.value.length - 1] || undefined
  }

  const size = computed(() => queue.value.length)

  const isEmpty = computed(() => queue.value.length === 0)

  function clear(): void {
    queue.value = []
  }

  function contains(item: T): boolean {
    return queue.value.includes(item)
  }

  function find(callback: (item: T, index: number, array: T[]) => boolean): T | undefined {
    return queue.value.find(callback)
  }

  return {
    queue,
    enqueue,
    dequeue,
    front,
    peekBack,
    size,
    isEmpty,
    clear,
    contains,
    find
  }
}
