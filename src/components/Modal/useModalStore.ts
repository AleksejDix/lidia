// useModalStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

const createStore = () => {
  const modals = ref<string[]>([])

  const is = (key: string) => {
    const isOpened = modals.value.includes(key)
    return {
      visible: isOpened,
      hidden: !isOpened
    }
  }

  const create = (key: string) => {
    console.log(key)
    modals.value.push(key)
  }

  const destroy = (key: string) => {
    modals.value = modals.value.filter((modalKey) => modalKey !== key)

    console.log(key, modals.value)
  }

  return {
    modals,
    is,
    create,
    destroy
  }
}

export const useModalStore = defineStore('modal', createStore)
