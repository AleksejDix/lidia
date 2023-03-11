import { h, type VNode, type FunctionalComponent, type PropType } from 'vue'

const Flex: FunctionalComponent = (props, { slots }) => {
  return h('div', { class: 'flex' }, [slots.default?.()])
}

export default Flex
