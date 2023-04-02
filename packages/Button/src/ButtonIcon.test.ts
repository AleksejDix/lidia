import { mount } from '@vue/test-utils'
import ButtonIcon from './ButtonIcon.vue'
import { describe, test, expect } from 'vitest'

describe('ButtonIcon', () => {
  test('renders a button with the correct aria-label', async () => {
    const label = 'Play'
    const wrapper = mount(ButtonIcon, {
      props: {
        label
      },
      slots: {
        default: '▶'
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-label')).toBe(label)
  })

  test('renders the slot content inside the button', async () => {
    const slotContent = '▶'
    const wrapper = mount(ButtonIcon, {
      props: {
        label: 'Play'
      },
      slots: {
        default: slotContent
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.text().trim()).toBe(slotContent)
  })

  test('sets aria-pressed to "true" when pressed is true', async () => {
    const wrapper = mount(ButtonIcon, {
      props: {
        label: 'Play',
        pressed: true
      },
      slots: {
        default: '▶'
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-pressed')).toBe('true')
  })

  test('sets aria-pressed to "false" when pressed is false', async () => {
    const wrapper = mount(ButtonIcon, {
      props: {
        label: 'Play',
        pressed: false
      },
      slots: {
        default: '▶'
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-pressed')).toBe('false')
  })

  test('sets aria-pressed to "mixed" when pressed is "mixed"', async () => {
    const wrapper = mount(ButtonIcon, {
      props: {
        label: 'Play',
        pressed: 'mixed'
      },
      slots: {
        default: '▶'
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-pressed')).toBe('mixed')
  })

  test('defaults aria-pressed to "false" when pressed is undefined', async () => {
    const wrapper = mount(ButtonIcon, {
      props: {
        label: 'Play'
      },
      slots: {
        default: '▶'
      }
    })

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-pressed')).toBe('false')
  })
})
