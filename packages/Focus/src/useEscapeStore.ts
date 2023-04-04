import { defineStore } from 'pinia'
import { useStack } from '@aleksejdix/datastructures'

const createStore = () => {
  const { push, pop, stack, size } = useStack()

  function create(callback: () => void) {
    push(callback)
  }

  function destroy() {
    const callback = pop()
    if (callback) {
      callback()
    }
  }

  return {
    create,
    destroy,
    stack,
    size
  }
}

export const useEscapeStore = defineStore('escape', createStore)
