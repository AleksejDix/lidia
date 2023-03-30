import type { InjectionKey, Ref, ComputedRef } from 'vue'

export interface TabsContext {
  tabs: Ref<string[]>
  createTab: (id: string) => void
  panels: Ref<string[]>
  createPanel: (id: string) => void
  pairs: ComputedRef<[string, string][]>
  activePair: ComputedRef<[string, string]>
  getPairByPanelId: (panelId: string) => [string, string]
  getPairByTabId: (tabId: string) => [string, string]
  select: (tabId: string) => void
}

export const TabsKey: InjectionKey<TabsContext> = Symbol('Tabs')
