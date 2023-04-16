import { ref, computed, Ref, watch } from 'vue'

export function useArraySelection<T>(initial: Ref<T[]>) {
  const items = ref<T[]>(initial.value) as Ref<T[]>
  const selected = ref<T[]>([]) as Ref<T[]>
  const shiftClick = ref<number>(-1)

  watch(selected, (newValue, oldValue) => {
    const addedItems = newValue.filter((item) => !oldValue.includes(item))
    const removedItems = oldValue.filter((item) => !newValue.includes(item))
    if (addedItems.length > 0) {
      shiftClick.value = items.value.indexOf(addedItems[addedItems.length - 1])
    } else if (removedItems.length > 0) {
      shiftClick.value = items.value.indexOf(removedItems[removedItems.length - 1])
    }
  })

  const length = computed(() => selected.value.length)

  function isSelected(item: T): boolean {
    return selected.value.includes(item)
  }

  const selectionState = computed(() => {
    if (selected.value.length === 0) {
      return 'none'
    } else if (selected.value.length === items.value.length) {
      return 'all'
    } else {
      return 'some'
    }
  })

  function select(item: T): void {
    if (!isSelected(item)) {
      selected.value.push(item)
    }
  }

  function shiftSelect(event: MouseEvent, row: any, toIndex: number) {
    if (event.shiftKey) {
      if (isSelected(row)) {
        deselectRange(shiftClick.value, toIndex)
      } else {
        selectRange(shiftClick.value, toIndex)
      }
      return
    }
  }

  function selectByIndex(index: number): void {
    if (index >= 0 && index < items.value.length) {
      const item = items.value[index]
      select(item)
    }
  }

  function deselectByIndex(index: number): void {
    if (index >= 0 && index < items.value.length) {
      const item = items.value[index]
      deselect(item)
    }
  }

  function selectPrev(): void {
    const prevIndex = shiftClick.value - 1
    const nextIndex = shiftClick.value + 1

    if (isSelected(items.value[prevIndex]) && !isSelected(items.value[nextIndex])) {
      deselectByIndex(shiftClick.value)
      shiftClick.value = prevIndex
    } else {
      if (prevIndex >= 0 && isSelected(items.value[shiftClick.value])) {
        selectByIndex(prevIndex)
        shiftClick.value = prevIndex
      }
    }
  }

  function selectNext(): void {
    const nextIndex = shiftClick.value + 1
    const prevIndex = shiftClick.value - 1
    if (isSelected(items.value[nextIndex]) && !isSelected(items.value[prevIndex])) {
      deselectByIndex(shiftClick.value)
      shiftClick.value = nextIndex
    } else {
      if (nextIndex < items.value.length && isSelected(items.value[shiftClick.value])) {
        selectByIndex(nextIndex)
        shiftClick.value = nextIndex
      }
    }
  }

  function deselect(item: T): void {
    const index = selected.value.indexOf(item)
    if (index !== -1) {
      selected.value.splice(index, 1)
    }
  }

  function toggle(item: T): void {
    isSelected(item) ? deselect(item) : select(item)
  }

  function selectMultiple(itemsToSelect: T[]): void {
    itemsToSelect.forEach((item) => select(item))
  }

  function deselectMultiple(itemsToDeselect: T[]): void {
    itemsToDeselect.forEach((item) => deselect(item))
  }

  function selectAll(): void {
    selected.value = [...items.value]
  }

  function deselectAll(): void {
    selected.value = []
  }

  function toggleAll(): void {
    items.value.forEach((item) => toggle(item))
  }

  function selectRange(fromIndex: number, toIndex: number): void {
    for (let i = fromIndex; i <= toIndex; i++) {
      select(items.value[i])
    }
  }

  function deselectRange(fromIndex: number, toIndex: number): void {
    for (let i = fromIndex; i <= toIndex; i++) {
      deselect(items.value[i])
    }
  }

  return {
    items,
    selected,
    selectionState,
    length,
    isSelected,
    select,
    selectMultiple,
    selectAll,
    selectRange,
    deselect,
    deselectMultiple,
    deselectAll,
    deselectRange,
    toggle,
    toggleAll,
    shiftSelect,
    selectByIndex,
    selectNext,
    selectPrev
  }
}
