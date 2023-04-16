// useTableContext.ts
import type { InjectionKey, Ref, ComputedRef } from 'vue'
import { provide, inject } from 'vue'

interface TableContext {
  data: Ref<unknown[]>
  columns: any[]
  captionId: string
  handleKeydown: (event: Event) => void
  sorting: Ref<any[]>
  selected: Ref<any[]>
  select: (row: any) => void
  deselect: (row: any) => void
  selectAll: () => void
  deselectAll: () => void
  isSelected: (row: any) => boolean
  selectionState: ComputedRef<'none' | 'all' | 'some'>
  shiftSelect: (event: MouseEvent, row: any, toIndex: number) => void
  selectByIndex(index: number): void
  selectPrev(): void
  selectNext(): void
}

const key: InjectionKey<TableContext> = Symbol('TableContext')

export function createTableContext(context: TableContext) {
  provide(key, context)
}

export function useTableContext() {
  const context = inject(key)

  if (!context) {
    throw new Error('No TableContext provided')
  }

  return context
}

export function tryTableContext() {
  const context = inject(key, null)
  return context
}
