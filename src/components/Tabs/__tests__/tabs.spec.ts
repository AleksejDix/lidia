import { nextTick } from 'vue'
import { render, fireEvent, type RenderResult } from '@testing-library/vue'
import { Tabs, TabList, Tab, TabPanel } from '@/components/Tabs'
import { describe, it, expect } from 'vitest'

function renderTabs(): RenderResult {
  return render(Tabs, {
    global: {
      components: { TabList, Tab, TabPanel }
    },
    slots: {
      default: `
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </TabList>
          <TabPanel>Content for Tab 1</TabPanel>
          <TabPanel>Content for Tab 2</TabPanel>
        `
    }
  })
}

function renderTabsWithSecondTabAsDefault(): RenderResult {
  return render(Tabs, {
    global: {
      components: { TabList, Tab, TabPanel }
    },
    slots: {
      default: `
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab open>Tab 2</Tab>
            </TabList>
            <TabPanel>Content for Tab 1</TabPanel>
            <TabPanel>Content for Tab 2</TabPanel>
          `
    }
  })
}

describe('Tabs', () => {
  it('renders the correct number of tabs', async () => {
    const { getAllByRole } = renderTabs()
    await nextTick()

    const tabs = getAllByRole('tab')
    expect(tabs).toHaveLength(2)
  })

  it('renders the correct number of panels', async () => {
    const { getAllByRole } = renderTabs()
    await nextTick()

    const panels = getAllByRole('tabpanel')
    expect(panels).toHaveLength(2)
  })

  it('updates the active tab and panel when a tab is clicked', async () => {
    const { getAllByRole, getByLabelText } = renderTabs()
    await nextTick()

    const [tab1, tab2] = getAllByRole('tab')

    // Click the second tab
    await fireEvent.click(tab2)
    await nextTick()

    const panel2 = getByLabelText(tab2.textContent as string)

    expect(tab1.getAttribute('aria-selected')).toBe('false')
    expect(tab2.getAttribute('aria-selected')).toBe('true')
    expect(tab2.getAttribute('aria-controls')).toBe(panel2.getAttribute('id'))
    expect(panel2.getAttribute('aria-labelledby')).toBe(tab2.getAttribute('id'))
  })

  it('focuses the second tab when the right arrow key is pressed on the first tab', async () => {
    const { getAllByRole } = renderTabs()
    await nextTick()

    const [tab1, tab2] = getAllByRole('tab')

    // Focus on the first tab
    await fireEvent.focus(tab1)

    // Press the right arrow key on the first tab
    await fireEvent.keyDown(tab1, { key: 'ArrowRight', code: 'ArrowRight' })

    expect(document.activeElement).toBe(tab2)
  })

  it('focuses the first tab when the left arrow key is pressed on the second tab', async () => {
    const { getAllByRole } = renderTabs()
    await nextTick()

    const [tab1, tab2] = getAllByRole('tab')

    // Focus on the first tab
    await fireEvent.focus(tab2)

    // Press the right arrow key on the first tab
    await fireEvent.keyDown(tab2, { key: 'ArrowRight', code: 'ArrowRight' })

    expect(document.activeElement).toBe(tab1)
  })
})
