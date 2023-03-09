
import type { InjectionKey, Ref } from 'vue'; 


export interface AccordionType {
  panels: Record<string, boolean>;
  create: (id: string, state: boolean) => void;
  update: (id: string, state: boolean) => void;
}


export const AccordionKey: InjectionKey<AccordionType> = Symbol('Accordion');



export interface PanelType {
  value: Ref<boolean>;
  id: string;
  toggle: () => void;
}



export const PanelKey: InjectionKey<PanelType> = Symbol('Panel');