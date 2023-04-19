import { ref } from 'vue'

export function useSelection() {
  const selectedDate = ref<Date | null>(null)
  const selectedDates = ref<Date[]>([])

  function selectDate(date: Date) {
    selectedDate.value = date
  }

  function toggleDate(date: Date) {
    const index = selectedDates.value.findIndex((d) => d.getTime() === date.getTime())
    if (index === -1) {
      selectedDates.value.push(date)
    } else {
      selectedDates.value.splice(index, 1)
    }
  }

  return {
    selectedDate,
    selectedDates,
    selectDate,
    toggleDate
  }
}
