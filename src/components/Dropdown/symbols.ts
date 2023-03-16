import type { Component, ComputedRef, InjectionKey, Ref } from 'vue'

export interface DropdownType {
  isVisible: Ref<boolean>
  id: string
  toggle: () => void
  open: () => void
  close: () => void
  button: Ref<HTMLElement | Component | null>
  contentRef: (el: any) => void
  dropdownRect: ComputedRef<{}>
}

export const DropdownKey: InjectionKey<DropdownType> = Symbol('Dropdown')
