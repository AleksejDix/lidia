import { mount } from '@vue/test-utils'
import ButtonGroup from './ButtonGroup.vue'
import { describe, test, expect } from 'vitest'

describe('ButtonGroup', () => {
  test('renders a div with the correct role', async () => {
    const wrapper = mount(ButtonGroup, {
      slots: {
        default: '<button>Button 1</button><button>Button 2</button><button>Button 3</button>'
      }
    })

    const div = wrapper.find('div')

    expect(div.exists()).toBe(true)
    expect(div.attributes('role')).toBe('group')
  })

  test('renders the slot content inside the button group', async () => {
    const button1 = 'Button 1'
    const button2 = 'Button 2'
    const button3 = 'Button 3'
    const wrapper = mount(ButtonGroup, {
      slots: {
        default: `<button>${button1}</button><button>${button2}</button><button>${button3}</button>`
      }
    })

    const buttons = wrapper.findAll('button')

    expect(buttons.length).toBe(3)
    expect(buttons[0].text().trim()).toBe(button1)
    expect(buttons[1].text().trim()).toBe(button2)
    expect(buttons[2].text().trim()).toBe(button3)
  })
})
