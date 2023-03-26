// symbols.ts
import type { InjectionKey, Ref } from 'vue'

export interface Switch {
  isActive: Ref<boolean>
}

export const SwitchKey: InjectionKey<Switch> = Symbol('Switch')
