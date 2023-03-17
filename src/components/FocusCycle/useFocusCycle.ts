import { ref, provide, inject, nextTick } from 'vue'
import type { InjectionKey, Ref } from 'vue'

interface MenuKey {
    list: Ref<HTMLElement[]>
    next: (event:KeyboardEvent) => void
    prev: (event:KeyboardEvent) => void
    create: (menuItem: HTMLElement) => void
    destroy: (menuItem: HTMLElement) => void
}

export const key: InjectionKey<MenuKey> = Symbol();


export function useFocusCycle() {

    const list = ref<HTMLElement[]>([])

    const next = (event: KeyboardEvent) => {
        const index = list.value.findIndex((item) => item === event.target)
        const nextIndex = (index + 1) % list.value.length
        nextTick(() => {
            list.value[nextIndex]?.focus()
        })
    }

    const prev = (event: KeyboardEvent) => {
        const index = list.value.findIndex((item) => item === event.target)
        const previousIndex = (index - 1 + list.value.length) % list.value.length
        nextTick(() => {
            list.value[previousIndex]?.focus()
        })
    }

    const create = (menuItem: HTMLElement) => {
        list.value.push(menuItem)
    }

    const destroy = (menuItem: HTMLElement) => {
        const index = list.value.findIndex((item) => item === menuItem)
        if (index > -1) {
            list.value.splice(index, 1)
        }
    }

    provide(key, {
        list,
        next,
        prev,
        create,
        destroy
    })
}

export function useFocusCycleItem() {
    const sharedState = inject(key);

    if (!sharedState) {
        throw new Error(`Could not resolve ${sharedState}`)
      }
  
    return sharedState
  }