import { defineStore } from 'pinia'
import { v4 as uniqueId } from 'uuid'
import { computed, readonly, ref } from 'vue'

export type NotificationState = 'success' | 'error' | 'notification'

export interface Notification {
  id?: string
  text: string
  state?: NotificationState
  duration?: number
  actions?: Record<string, () => void>
  callback?: () => void
}

export const useNotificationsStore = defineStore('notifications', () => {
  const list = ref<Notification[]>([])

  const hasSome = computed(() => list.value.length > 0)

  function create(payload: Notification): void {
    list.value.push({
      duration: 3000,
      ...payload,
      id: uniqueId()
    })
  }

  function destroy(id?: string): void {
    if (id) {
      list.value = list.value.filter((x: Notification) => x.id !== id)
    } else {
      throw new Error("You didn't passed any ID")
    }
  }

  return {
    create,
    destroy,
    hasSome,
    list: readonly(list)
  }
})
