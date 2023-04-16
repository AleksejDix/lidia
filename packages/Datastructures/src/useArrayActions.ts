import { Ref } from 'vue'

export function useArrayActions<T>(selectedItems: Ref<T[]>) {
  function applyActionToSelected(actionFn: (item: T) => void): void {
    selectedItems.value.forEach((item) => actionFn(item))
  }

  return {
    applyActionToSelected
  }
}
