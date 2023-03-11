import { h, type FunctionalComponent } from 'vue'

const FlexItem: FunctionalComponent = (props, { slots }) => {
  return h('div', {}, [slots.default?.()])
}

export default FlexItem
