import { ref, computed, ComputedRef, type Ref } from 'vue'

type PriorityQueueItem<T> = {
  item: T
  priority: number
}

export function usePriorityQueue<T extends unknown>() {
  const priorityQueue = ref<PriorityQueueItem<T>[]>([]) as Ref<
    {
      item: T
      priority: number
    }[]
  >

  function enqueue(item: T, priority: number): void {
    const newItem: PriorityQueueItem<T> = { item, priority }
    let added = false

    for (let i = 0; i < priorityQueue.value.length; i++) {
      if (priority < priorityQueue.value[i].priority) {
        priorityQueue.value.splice(i, 0, newItem)
        added = true
        break
      }
    }

    if (!added) {
      priorityQueue.value.push(newItem)
    }
  }

  function dequeue() {
    if (priorityQueue.value.length > 0) {
      return priorityQueue.value.shift()?.item
    }
    return undefined
  }

  function front() {
    return priorityQueue.value[0]?.item || undefined
  }

  const size = computed(() => priorityQueue.value.length)

  const isEmpty = computed(() => priorityQueue.value.length === 0)

  function clear(): void {
    priorityQueue.value = []
  }

  return {
    priorityQueue,
    enqueue,
    dequeue,
    front,
    size,
    isEmpty,
    clear
  }
}
