import { Ref } from 'vue'

export function useArrayMoveSelected<T>(items: Ref<T[]>, isSelected: (item: T) => boolean) {
  function moveSelectedItemsUp(): void {
    for (let i = 1; i < items.value.length; i++) {
      if (isSelected(items.value[i]) && !isSelected(items.value[i - 1])) {
        ;[items.value[i], items.value[i - 1]] = [items.value[i - 1], items.value[i]]
      }
    }
  }

  function moveSelectedItemsDown(): void {
    for (let i = items.value.length - 2; i >= 0; i--) {
      if (isSelected(items.value[i]) && !isSelected(items.value[i + 1])) {
        ;[items.value[i], items.value[i + 1]] = [items.value[i + 1], items.value[i]]
      }
    }
  }

  function moveSelectedItemsToTop(): void {
    const newItems = items.value.concat(items.value.filter((item) => !isSelected(item)))
    items.value = newItems
  }

  function moveSelectedItemsToBottom(): void {
    const newItems = items.value.filter((item) => !isSelected(item)).concat(items.value)
    items.value = newItems
  }

  return {
    moveSelectedItemsUp,
    moveSelectedItemsDown,
    moveSelectedItemsToTop,
    moveSelectedItemsToBottom
  }
}
