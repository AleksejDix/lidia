// useCalendarViews.ts
import { ref, type Ref } from 'vue'
import { computed } from 'vue'

type ViewType = 'year' | 'month' | 'decade' | 'century' | 'quarter' | 'week'

const incrementDateBy = (unit: 'day' | 'month' | 'year') => (date: Date, amount: number) => {
  const newDate = new Date(date)
  switch (unit) {
    case 'day':
      newDate.setDate(newDate.getDate() + amount)
      break
    case 'month':
      newDate.setMonth(newDate.getMonth() + amount)
      break
    case 'year':
      newDate.setFullYear(newDate.getFullYear() + amount)
      break
  }
  return newDate
}

const generateDateRange = (
  start: Date,
  count: number,
  incrementFn: (date: Date, amount: number) => Date
): Date[] => Array.from({ length: count }, (_, i) => incrementFn(new Date(start), i))

export function generateWeekView(dateRef: Ref<Date>, startOfWeek: Ref<number> = ref(1)) {
  const dayOfWeek = (dateRef.value.getDay() - startOfWeek.value + 7) % 7
  const start = new Date(dateRef.value)
  start.setDate(start.getDate() - dayOfWeek)
  return generateDateRange(start, 7, incrementDateBy('day'))
}

export function generateMonthView(dateRef: Ref<Date>, startOfWeek: Ref<number> = ref(1)): Date[] {
  const firstDayOfMonth = new Date(dateRef.value.getFullYear(), dateRef.value.getMonth(), 1)
  const startDayOfWeek = (firstDayOfMonth.getDay() - startOfWeek.value + 7) % 7
  const start = new Date(firstDayOfMonth)
  start.setDate(start.getDate() - startDayOfWeek)
  return generateDateRange(start, 42, incrementDateBy('day'))
}

export function generateQuarterView(dateRef: Ref<Date>) {
  const startMonth = Math.floor(dateRef.value.getMonth() / 3) * 3
  const start = new Date(dateRef.value.getFullYear(), startMonth, 1)
  return generateDateRange(start, 3, incrementDateBy('month'))
}

export function generateYearView(dateRef: Ref<Date>): Date[] {
  const start = new Date(dateRef.value.getFullYear(), 0, 1)
  return generateDateRange(start, 12, incrementDateBy('month'))
}

export function generateDecadeView(dateRef: Ref<Date>): Date[] {
  const startYear = Math.floor(dateRef.value.getFullYear() / 10) * 10
  const start = new Date(startYear, 0, 1)
  return generateDateRange(start, 10, incrementDateBy('year'))
}

export function generateCenturyView(dateRef: Ref<Date>) {
  const startYear = Math.floor(dateRef.value.getFullYear() / 100) * 100
  const start = new Date(startYear, 0, 1)

  return generateDateRange(start, 10, (date, amount) => incrementDateBy('year')(date, amount * 10))
}

export function generateView(
  dateRef: Ref<Date>,
  viewType: Ref<ViewType>,
  startOfWeekRef: Ref<number> = ref(1)
) {
  switch (viewType.value) {
    case 'week':
      return generateWeekView(dateRef, startOfWeekRef)
    case 'month':
      return generateMonthView(dateRef, startOfWeekRef)
    case 'quarter':
      return generateQuarterView(dateRef)
    case 'year':
      return generateYearView(dateRef)
    case 'decade':
      return generateDecadeView(dateRef)
    case 'century':
      return generateCenturyView(dateRef)
    default:
      throw new Error(`Invalid view: ${viewType}`)
  }
}

export function useCalendarViews(
  dateRef: Ref<Date>,
  viewRef: Ref<ViewType>,
  startOfWeekRef: Ref<number> = ref(1)
) {
  const grid = computed(() => generateView(dateRef, viewRef, startOfWeekRef))

  return {
    generateYearView,
    generateDecadeView,
    generateMonthView,
    generateView,
    grid
  }
}
