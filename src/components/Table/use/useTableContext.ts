// useTableContext.ts
import type { InjectionKey, Ref } from 'vue'
import { provide, inject } from 'vue'

interface TableContext {
  data: any[]
  columns: any[]
  captionId: string
  handleKeydown: (event: Event) => void
  sorting: Ref<any[]>
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
