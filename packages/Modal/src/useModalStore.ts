// useModalStore.ts
import { defineStore } from 'pinia'
import { useStack } from '@aleksejdix/datastructures'

const createStore = () => {
  const { push, pop, remove, top, isEmpty, size, stack, includes } = useStack()

  const is = (key: string) => {
    const isOpened = includes(key)
    return {
      visible: isOpened,
      hidden: !isOpened
    }
  }

  const create = (key: string) => {
    push(key)
  }

  const destroy = (key: string) => {
    top.value === key ? pop() : remove(key)
  }

  return {
    size,
    is,
    create,
    destroy,
    isEmpty,
    stack
  }
}

export const useModalStore = defineStore('modal', createStore)
