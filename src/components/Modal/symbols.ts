// symbols.ts

import type { InjectionKey } from 'vue'

export interface ModalType {
  close: () => void
  id: string
}

export const ModalKey: InjectionKey<ModalType> = Symbol('Modal')
