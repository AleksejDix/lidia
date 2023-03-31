import { ref, provide, inject, nextTick, type Component } from 'vue'
import type { InjectionKey, Ref } from 'vue'
interface MenuContext {
  list: Ref<HTMLElement[]>
  next: (event: KeyboardEvent) => void
  prev: (event: KeyboardEvent) => void
  first: () => void
  last: () => void
  create: (el: any) => void
  destroy: (menuItem: HTMLElement) => void
  focusByFirstLetter: (event: KeyboardEvent) => void
}

export const key: InjectionKey<MenuContext> = Symbol('useFocusCycle')

export function useFocusCycle() {
  const list = ref<HTMLElement[]>([])

  const focusItem = (index: number) => {
    nextTick(() => {
      list.value[index]?.focus()
    })
  }

  const next = (event: KeyboardEvent) => {
    const index = list.value.findIndex((item) => item === event.target)
    const nextIndex = (index + 1) % list.value.length
    focusItem(nextIndex)
  }

  const prev = (event: KeyboardEvent) => {
    const index = list.value.findIndex((item) => item === event.target)
    const previousIndex = (index - 1 + list.value.length) % list.value.length
    focusItem(previousIndex)
  }

  const first = () => focusItem(0)

  const last = () => focusItem(list.value.length - 1)

  const create = (menuItem: HTMLElement | Component) => {
    const realEl = menuItem && '$el' in menuItem ? menuItem.$el : menuItem
    list.value.push(realEl)
  }

  const destroy = (menuItem: HTMLElement) => {
    const index = list.value.findIndex((item) => item === menuItem)
    if (index > -1) {
      list.value.splice(index, 1)
    }
  }

  const focusByFirstLetter = (event: KeyboardEvent) => {
    const pressedKey = event.key.toUpperCase()

    // Check if the pressed key is an alphanumeric character
    if (event.key.length === 1 && event.key.match(/^[a-zA-Z0-9]$/)) {
      // Get the index of the currently focused item
      const currentItemIndex = list.value.findIndex((item) => item === event.target)

      // Create a list of indices for items with the same first letter
      const itemsWithSameFirstLetter = list.value
        .map((item, index) => ({ text: item.textContent?.trim().toUpperCase(), index }))
        .filter(({ text }) => text?.startsWith(pressedKey))
        .map(({ index }) => index)

      // If there are items with the same first letter
      if (itemsWithSameFirstLetter.length > 0) {
        // Find the position of the current item in the group of items with the same first letter
        const currentIndexInGroup = itemsWithSameFirstLetter.findIndex(
          (index) => index === currentItemIndex
        )

        // Calculate the index of the next item in the group
        const nextIndexInGroup = (currentIndexInGroup + 1) % itemsWithSameFirstLetter.length

        // Get the actual index of the next item in the full list of items
        const nextItemIndex = itemsWithSameFirstLetter[nextIndexInGroup]

        // Focus the next item
        focusItem(nextItemIndex)
      }
    }
  }

  provide(key, {
    list,
    next,
    prev,
    first,
    last,
    create,
    destroy,
    focusByFirstLetter
  })
}

export function useFocusCycleItem() {
  const sharedState = inject(key)

  if (!sharedState) {
    throw new Error(`Could not resolve ${sharedState}`)
  }

  return sharedState
}

export function tryFocusCycleItem() {
  return inject(key, null)
}
