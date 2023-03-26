// usePaginationContext.ts

import { provide, type InjectionKey, inject, type ComputedRef } from 'vue'

export interface PaginationContext {
  currentPage: ComputedRef<number>
  totalPages: ComputedRef<number>
  visiblePageNumbers: ComputedRef<number[]>
}

export const PaginationContextKey: InjectionKey<PaginationContext> = Symbol('PaginationContext')

export function createPaginationContext(context: PaginationContext) {
  provide(PaginationContextKey, context)
}

export function usePaginationContext() {
  const context = inject(PaginationContextKey)

  if (!context) {
    throw new Error(`Could not resolve ${context}`)
  }

  return context
}
