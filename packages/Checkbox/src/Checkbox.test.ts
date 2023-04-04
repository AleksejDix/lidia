import { mount } from '@vue/test-utils'
import Checkbox from './Checkbox.vue'
import { describe, test, expect } from 'vitest'

describe('Checkbox', () => {
  test('renders a checkbox with the correct initial state true', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        value: 'test',
        modelValue: true,
        trueValue: true,
        falseValue: false,
        indeterminatedValue: undefined
      }
    })

    const checkbox = wrapper.find('input[type="checkbox"]')
    const inputElement = checkbox.element as HTMLInputElement

    expect(checkbox.exists()).toBe(true)
    expect(inputElement.checked).toBe(true)
    expect(inputElement.indeterminate).toBe(false)
  })

  test('renders a checkbox with the correct initial state false', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        value: 'test',
        modelValue: false,
        trueValue: true,
        falseValue: false,
        indeterminatedValue: undefined
      }
    })

    const checkbox = wrapper.find('input[type="checkbox"]')
    const inputElement = checkbox.element as HTMLInputElement

    expect(checkbox.exists()).toBe(true)
    expect(inputElement.checked).toBe(false)
    expect(inputElement.indeterminate).toBe(false)
  })
})
