// useNavigation.js
import { ref, computed } from 'vue'

export type ViewType = 'year' | 'month' | 'decade'

export function useCalendarNavigation() {
  const currentDate = ref(new Date())
  const currentMonth = computed(() => currentDate.value.getMonth())
  const currentYear = computed(() => currentDate.value.getFullYear())
  const view = ref<ViewType>('month')

  function navigateMonth(offset: number) {
    currentDate.value = new Date(currentYear.value, currentMonth.value + offset, 1)
  }

  function navigateYear(offset: number) {
    currentDate.value = new Date(currentYear.value + offset, currentMonth.value, 1)
  }

  function navigateDecade(offset: number) {
    currentDate.value = new Date(currentYear.value + offset * 10, currentMonth.value, 1)
  }

  function navigate(direction: -1 | 1) {
    switch (view.value) {
      case 'month':
        return navigateMonth(direction)
      case 'year':
        return navigateYear(direction)
      case 'decade':
        return navigateDecade(direction)
      default:
        throw new Error(`Invalid view: ${view.value}`)
    }
  }

  return {
    view,
    currentDate,
    currentMonth,
    currentYear,
    navigateMonth,
    navigateYear,
    navigateDecade,
    navigate
  }
}
