import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { describe, test, expect } from 'vitest'

describe('Button', () => {
  test('renders a button with the given slot content', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me'
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.text().trim()).toBe('Click me')
  })

  test('renders a button with the provided slots', async () => {
    const wrapper = mount(Button, {
      slots: {
        before: 'Before',
        default: 'Text',
        after: 'After'
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.text().trim()).toBe('BeforeTextAfter')
  })

  test('renders a disabled button when loading is true', async () => {
    const wrapper = mount(Button, {
      props: {
        loading: 'true'
      },
      slots: {
        default: 'Click me'
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-disabled')).toBe('true')
    expect(button.attributes('aria-busy')).toBe('true')
  })

  test('renders a non-disabled button when loading is false', async () => {
    const wrapper = mount(Button, {
      props: {
        loading: 'false'
      },
      slots: {
        default: 'Click me'
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-disabled')).toBe('false')
    expect(button.attributes('aria-busy')).toBe('false')
  })
})
