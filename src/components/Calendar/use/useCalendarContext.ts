// useCalendarContext.ts
import type { InjectionKey, Ref, ComputedRef } from 'vue'
import type { ViewType } from './useCalendarNavigation'
import { provide, inject } from 'vue'

interface CalendarContext {
  currentDate: Ref<Date | null>
  navigate: (direction: -1 | 1) => void
  view: Ref<ViewType>
  grid: ComputedRef<Date[]>
  formatDate: (date: Date, formatOptions: Intl.DateTimeFormatOptions | undefined) => string
  selected: Ref<null | never[] | Date[]>
}

const key: InjectionKey<CalendarContext> = Symbol('CalendarContext')

export function createCalendarContext(context: CalendarContext) {
  provide(key, context)
}

export function useCalendarContext() {
  const context = inject(key)

  if (!context) {
    throw new Error('No CalendarContext provided')
  }

  return context
}

export function tryCalendarContext() {
  const context = inject(key, null)
  return context
}
