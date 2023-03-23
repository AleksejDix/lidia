// useFocusStore.ts
import { defineStore } from 'pinia'
import { useStack } from './useStack'

const createStore = () => {
  const { push, pop } = useStack()

  const create = (element: HTMLElement) => push(element)

  const destroy = () => pop()

  return {
    destroy,
    create
  }
}

export const useFocusStore = defineStore('focus', createStore)
