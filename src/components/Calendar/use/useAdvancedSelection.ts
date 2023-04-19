import { ref } from 'vue'

type SelectedDate = Date | null

export function useAdvancedSelection() {
  const selectedRange = ref<Record<string, SelectedDate>>({ start: null, end: null })

  function selectRange(start: Date, end: Date) {
    selectedRange.value = { start, end }
  }

  function clearRange() {
    selectedRange.value = { start: null, end: null }
  }

  return {
    selectedRange,
    selectRange,
    clearRange
  }
}
