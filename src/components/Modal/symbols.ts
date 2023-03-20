import type { ComputedRef, InjectionKey } from 'vue'

export interface ModalType {
  create: () => void
  destroy: () => void
  is: ComputedRef<{
    opened: boolean
    closed: boolean
  }>
}

export const ModalKey: InjectionKey<ModalType> = Symbol('Modal')
