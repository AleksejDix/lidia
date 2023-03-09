
import type { InjectionKey, Ref, VNodeRef } from 'vue'; 

export interface DropdownType {
    isVisible: Ref<boolean>,
    id: string;
    toggle: () => void;
    open: () => void;
    close: () => void,
    button: Ref<HTMLButtonElement | null>
}

export const DropdownKey: InjectionKey<DropdownType> = Symbol('Dropdown');