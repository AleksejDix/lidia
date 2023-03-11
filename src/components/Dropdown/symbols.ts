import type { Component, InjectionKey, Ref } from 'vue'

export interface DropdownType {
  isVisible: Ref<boolean>
  id: string
  toggle: () => void
  open: () => void
  close: () => void
  button: Ref<HTMLElement | Component | null>
  contentRef: (el: HTMLElement) => void
}

export const DropdownKey: InjectionKey<DropdownType> = Symbol('Dropdown')
