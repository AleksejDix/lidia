import { ref, computed, Ref, readonly } from 'vue'

export function useArraySelection<T>(initial: Ref<T[]>) {
  const items = ref<T[]>(initial.value) as Ref<T[]>
  const selected = ref<T[]>([]) as Ref<T[]>

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
    toggleAll
  }
}
